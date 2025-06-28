#!/bin/bash

# BioCAN Landing Page - AWS S3 Deployment Script
# This script builds and deploys the Next.js app to AWS S3 + CloudFront

set -e

# Configuration
BUCKET_NAME="${BUCKET_NAME:-biocan-landing-production-website}"
CLOUDFRONT_DISTRIBUTION_ID="${CLOUDFRONT_DISTRIBUTION_ID}"
AWS_REGION="${AWS_REGION:-us-east-1}"

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

echo -e "${YELLOW}🚀 Starting BioCAN Landing Page deployment to AWS S3...${NC}"

# Check if AWS CLI is installed
if ! command -v aws &> /dev/null; then
    echo -e "${RED}❌ AWS CLI is not installed. Please install it first.${NC}"
    exit 1
fi

# Check if required environment variables are set
if [ -z "$BUCKET_NAME" ]; then
    echo -e "${RED}❌ BUCKET_NAME environment variable is not set${NC}"
    exit 1
fi

# Create static export configuration
echo -e "${YELLOW}📝 Configuring Next.js for static export...${NC}"
cat > next.config.static.js << 'EOF'
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  experimental: {
    optimizePackageImports: ['lucide-react', 'framer-motion']
  },
}

module.exports = nextConfig
EOF

# Backup original config
cp next.config.js next.config.js.backup

# Use static export config
cp next.config.static.js next.config.js

# Install dependencies
echo -e "${YELLOW}📦 Installing dependencies...${NC}"
npm ci

# Build the application
echo -e "${YELLOW}🔨 Building application...${NC}"
npm run build

# Check if build was successful
if [ ! -d "out" ]; then
    echo -e "${RED}❌ Build failed - no 'out' directory found${NC}"
    exit 1
fi

# Sync to S3
echo -e "${YELLOW}☁️  Uploading to S3 bucket: $BUCKET_NAME${NC}"
aws s3 sync out/ s3://$BUCKET_NAME --region $AWS_REGION --delete

# Set correct content types
echo -e "${YELLOW}🔧 Setting content types...${NC}"
aws s3 cp s3://$BUCKET_NAME s3://$BUCKET_NAME --recursive --metadata-directive REPLACE \
  --content-type "text/html" --exclude "*" --include "*.html"

aws s3 cp s3://$BUCKET_NAME s3://$BUCKET_NAME --recursive --metadata-directive REPLACE \
  --content-type "text/css" --exclude "*" --include "*.css"

aws s3 cp s3://$BUCKET_NAME s3://$BUCKET_NAME --recursive --metadata-directive REPLACE \
  --content-type "application/javascript" --exclude "*" --include "*.js"

# Invalidate CloudFront cache if distribution ID is provided
if [ ! -z "$CLOUDFRONT_DISTRIBUTION_ID" ]; then
    echo -e "${YELLOW}🔄 Invalidating CloudFront cache...${NC}"
    aws cloudfront create-invalidation --distribution-id $CLOUDFRONT_DISTRIBUTION_ID --paths "/*"
    echo -e "${GREEN}✅ CloudFront cache invalidation started${NC}"
fi

# Restore original config
mv next.config.js.backup next.config.js
rm next.config.static.js

echo -e "${GREEN}✅ Deployment completed successfully!${NC}"
echo -e "${GREEN}🌐 Your website is now live${NC}"

if [ ! -z "$CLOUDFRONT_DISTRIBUTION_ID" ]; then
    DISTRIBUTION_DOMAIN=$(aws cloudfront get-distribution --id $CLOUDFRONT_DISTRIBUTION_ID --query 'Distribution.DomainName' --output text)
    echo -e "${GREEN}🔗 CloudFront URL: https://$DISTRIBUTION_DOMAIN${NC}"
fi

echo -e "${GREEN}🔗 S3 Website URL: http://$BUCKET_NAME.s3-website-$AWS_REGION.amazonaws.com${NC}" 
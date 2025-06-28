# BioCAN Landing Page - AWS S3 Deployment Script (PowerShell)
# This script builds and deploys the Next.js app to AWS S3 + CloudFront

param(
    [string]$BucketName = $env:BUCKET_NAME,
    [string]$CloudFrontDistributionId = $env:CLOUDFRONT_DISTRIBUTION_ID,
    [string]$AwsRegion = $env:AWS_REGION
)

# Set default values if not provided
if (-not $BucketName) { $BucketName = "biocan-landing-production-website" }
if (-not $AwsRegion) { $AwsRegion = "us-east-1" }

Write-Host "🚀 Starting BioCAN Landing Page deployment to AWS S3..." -ForegroundColor Yellow

# Check if AWS CLI is installed
try {
    aws --version | Out-Null
} catch {
    Write-Host "❌ AWS CLI is not installed. Please install it first." -ForegroundColor Red
    exit 1
}

# Check if required parameters are set
if (-not $BucketName) {
    Write-Host "❌ BUCKET_NAME is not set" -ForegroundColor Red
    exit 1
}

# Create static export configuration
Write-Host "📝 Configuring Next.js for static export..." -ForegroundColor Yellow

$staticConfig = @"
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
"@

# Backup original config
Copy-Item "next.config.js" "next.config.js.backup" -Force

# Use static export config
$staticConfig | Out-File -FilePath "next.config.static.js" -Encoding UTF8
Copy-Item "next.config.static.js" "next.config.js" -Force

try {
    # Install dependencies
    Write-Host "📦 Installing dependencies..." -ForegroundColor Yellow
    npm ci

    # Build the application
    Write-Host "🔨 Building application..." -ForegroundColor Yellow
    npm run build

    # Check if build was successful
    if (-not (Test-Path "out")) {
        Write-Host "❌ Build failed - no 'out' directory found" -ForegroundColor Red
        exit 1
    }

    # Sync to S3
    Write-Host "☁️  Uploading to S3 bucket: $BucketName" -ForegroundColor Yellow
    aws s3 sync out/ "s3://$BucketName" --region $AwsRegion --delete

    # Set correct content types
    Write-Host "🔧 Setting content types..." -ForegroundColor Yellow
    aws s3 cp "s3://$BucketName" "s3://$BucketName" --recursive --metadata-directive REPLACE --content-type "text/html" --exclude "*" --include "*.html"
    aws s3 cp "s3://$BucketName" "s3://$BucketName" --recursive --metadata-directive REPLACE --content-type "text/css" --exclude "*" --include "*.css"
    aws s3 cp "s3://$BucketName" "s3://$BucketName" --recursive --metadata-directive REPLACE --content-type "application/javascript" --exclude "*" --include "*.js"

    # Invalidate CloudFront cache if distribution ID is provided
    if ($CloudFrontDistributionId) {
        Write-Host "🔄 Invalidating CloudFront cache..." -ForegroundColor Yellow
        aws cloudfront create-invalidation --distribution-id $CloudFrontDistributionId --paths "/*"
        Write-Host "✅ CloudFront cache invalidation started" -ForegroundColor Green
    }

    Write-Host "✅ Deployment completed successfully!" -ForegroundColor Green
    Write-Host "🌐 Your website is now live" -ForegroundColor Green

    if ($CloudFrontDistributionId) {
        $distributionDomain = aws cloudfront get-distribution --id $CloudFrontDistributionId --query 'Distribution.DomainName' --output text
        Write-Host "🔗 CloudFront URL: https://$distributionDomain" -ForegroundColor Green
    }

    Write-Host "🔗 S3 Website URL: http://$BucketName.s3-website-$AwsRegion.amazonaws.com" -ForegroundColor Green

} finally {
    # Restore original config
    if (Test-Path "next.config.js.backup") {
        Move-Item "next.config.js.backup" "next.config.js" -Force
    }
    if (Test-Path "next.config.static.js") {
        Remove-Item "next.config.static.js" -Force
    }
} 
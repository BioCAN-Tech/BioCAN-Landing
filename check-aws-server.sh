#!/bin/bash

# BioCAN Landing Page - AWS Server Diagnostic Script
# This script checks the status of your AWS deployment

echo "🔍 BioCAN Landing Page - AWS Server Diagnostics"
echo "================================================"
echo ""

# Colors
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
CYAN='\033[0;36m'
NC='\033[0m' # No Color

# Check if AWS CLI is installed
echo -e "${YELLOW}1. Checking AWS CLI installation...${NC}"
if command -v aws &> /dev/null; then
    AWS_VERSION=$(aws --version)
    echo -e "${GREEN}   ✅ AWS CLI installed: $AWS_VERSION${NC}"
else
    echo -e "${RED}   ❌ AWS CLI is not installed${NC}"
    echo -e "${YELLOW}   Install from: https://aws.amazon.com/cli/${NC}"
    exit 1
fi

echo ""

# Check AWS credentials
echo -e "${YELLOW}2. Checking AWS credentials...${NC}"
if aws sts get-caller-identity &> /dev/null; then
    IDENTITY=$(aws sts get-caller-identity)
    echo -e "${GREEN}   ✅ AWS credentials configured${NC}"
    echo -e "   $IDENTITY"
else
    echo -e "${RED}   ❌ AWS credentials not configured${NC}"
    echo -e "${YELLOW}   Run: aws configure${NC}"
fi

echo ""

# Check EC2 Instances
echo -e "${YELLOW}3. Checking EC2 Instances...${NC}"
if aws ec2 describe-instances --query 'Reservations[*].Instances[*].[InstanceId,State.Name,PublicIpAddress,PrivateIpAddress,Tags[?Key==`Name`].Value|[0]]' --output table 2>&1 | grep -q "INSTANCE"; then
    echo -e "${CYAN}   EC2 Instances:${NC}"
    aws ec2 describe-instances --query 'Reservations[*].Instances[*].[InstanceId,State.Name,PublicIpAddress,PrivateIpAddress,Tags[?Key==`Name`].Value|[0]]' --output table
else
    echo -e "${YELLOW}   ⚠️  No EC2 instances found or error accessing EC2${NC}"
fi

echo ""

# Check S3 Buckets (for static hosting)
echo -e "${YELLOW}4. Checking S3 Buckets for landing page...${NC}"
BUCKETS=$(aws s3 ls 2>/dev/null | grep "biocan-landing" || echo "")
if [ ! -z "$BUCKETS" ]; then
    echo -e "${GREEN}   ✅ Found S3 buckets:${NC}"
    echo "$BUCKETS" | while read -r line; do
        BUCKET_NAME=$(echo "$line" | awk '{print $3}')
        echo -e "   - $BUCKET_NAME"
        echo -e "${CYAN}   Checking website config for: $BUCKET_NAME${NC}"
        if aws s3api get-bucket-website --bucket "$BUCKET_NAME" &> /dev/null; then
            echo -e "${GREEN}   ✅ Website hosting enabled${NC}"
        else
            echo -e "${YELLOW}   ⚠️  Website hosting not configured${NC}"
        fi
    done
else
    echo -e "${YELLOW}   ⚠️  No S3 buckets found for landing page${NC}"
fi

echo ""

# Check CloudFront Distributions
echo -e "${YELLOW}5. Checking CloudFront Distributions...${NC}"
DISTRIBUTIONS=$(aws cloudfront list-distributions --query 'DistributionList.Items[*].[Id,DomainName,Status,Enabled]' --output table 2>&1)
if echo "$DISTRIBUTIONS" | grep -q "DISTRIBUTION"; then
    echo -e "${CYAN}   CloudFront Distributions:${NC}"
    echo "$DISTRIBUTIONS"
else
    echo -e "${YELLOW}   ⚠️  No CloudFront distributions found${NC}"
fi

echo ""

# Check AWS Amplify Apps
echo -e "${YELLOW}6. Checking AWS Amplify Apps...${NC}"
AMPLIFY_APPS=$(aws amplify list-apps --query 'apps[*].[name,defaultDomain,platform]' --output table 2>&1)
if echo "$AMPLIFY_APPS" | grep -q "APP"; then
    echo -e "${CYAN}   Amplify Apps:${NC}"
    echo "$AMPLIFY_APPS"
    
    # Get branches for each app
    APP_IDS=$(aws amplify list-apps --query 'apps[*].appId' --output text 2>/dev/null)
    for APP_ID in $APP_IDS; do
        echo -e "${CYAN}   Checking branches for app: $APP_ID${NC}"
        aws amplify list-branches --app-id "$APP_ID" --query 'branches[*].[branchName,stage,activeJobId]' --output table 2>&1
    done
else
    echo -e "${YELLOW}   ⚠️  No Amplify apps found${NC}"
fi

echo ""

# Check Load Balancers
echo -e "${YELLOW}7. Checking Application Load Balancers...${NC}"
LOAD_BALANCERS=$(aws elbv2 describe-load-balancers --query 'LoadBalancers[*].[LoadBalancerName,State.Code,DNSName]' --output table 2>&1)
if echo "$LOAD_BALANCERS" | grep -q "LOADBALANCER"; then
    echo -e "${CYAN}   Load Balancers:${NC}"
    echo "$LOAD_BALANCERS"
else
    echo -e "${YELLOW}   ⚠️  No load balancers found${NC}"
fi

echo ""

# Check ECS Services
echo -e "${YELLOW}8. Checking ECS Services...${NC}"
CLUSTERS=$(aws ecs list-clusters --query 'clusterArns[*]' --output text 2>&1)
if [ ! -z "$CLUSTERS" ]; then
    echo -e "${CYAN}   ECS Clusters found:${NC}"
    for CLUSTER_ARN in $CLUSTERS; do
        CLUSTER_NAME=$(echo "$CLUSTER_ARN" | awk -F'/' '{print $NF}')
        echo -e "   - $CLUSTER_NAME"
        aws ecs list-services --cluster "$CLUSTER_NAME" --query 'serviceArns[*]' --output table 2>&1
    done
else
    echo -e "${YELLOW}   ⚠️  No ECS clusters found${NC}"
fi

echo ""
echo "================================================"
echo -e "${GREEN}✅ Diagnostic check complete!${NC}"
echo ""
echo -e "${YELLOW}Next Steps:${NC}"
echo "1. If EC2 instance found but stopped, start it: aws ec2 start-instances --instance-ids <instance-id>"
echo "2. If S3 bucket found, check if files are uploaded: aws s3 ls s3://<bucket-name>/"
echo "3. If CloudFront found, check distribution status: aws cloudfront get-distribution --id <distribution-id>"
echo "4. Test local build: cd BioCAN-Landing && npm run build && npm start"

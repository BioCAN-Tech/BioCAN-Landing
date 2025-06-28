# 🚀 BioCAN Landing Page - Team AWS Deployment Guide

**Version**: 1.0  
**Last Updated**: December 2024  
**Project**: BioCAN Bio Career Advancement Network Landing Page  
**Tech Stack**: Next.js 15, React 19, TypeScript, Tailwind CSS

## 📋 Table of Contents

1. [Team Prerequisites](#-team-prerequisites)
2. [AWS Account Setup](#-aws-account-setup)
3. [Local Development Setup](#-local-development-setup)
4. [Deployment Options](#-deployment-options)
5. [Team Workflows](#-team-workflows)
6. [Environment Management](#-environment-management)
7. [Monitoring & Maintenance](#-monitoring--maintenance)
8. [Troubleshooting](#-troubleshooting)
9. [Security & Compliance](#-security--compliance)
10. [Team Responsibilities](#-team-responsibilities)

---

## 👥 Team Prerequisites

### Required Team Roles
- **DevOps Engineer**: AWS infrastructure setup and maintenance
- **Frontend Developer**: Code changes and feature development
- **QA Engineer**: Testing and deployment validation
- **Project Manager**: Deployment coordination and approval

### Required Tools & Access
```bash
# Required Software (All Team Members)
Node.js >= 18.0.0
npm >= 9.0.0
Git >= 2.30.0
AWS CLI >= 2.0.0

# Required for DevOps Team
Terraform >= 1.0.0
Docker >= 20.0.0
```

### AWS Access Requirements
- **Admin Team**: Full AWS access for initial setup
- **DevOps Team**: EC2, S3, CloudFront, IAM, Route53 permissions
- **Development Team**: Limited S3 deployment permissions
- **QA Team**: Read-only access for monitoring

---

## 🏗️ AWS Account Setup

### 1. Initial AWS Configuration

#### For Team Lead/DevOps:
```bash
# Configure AWS CLI with admin credentials
aws configure
# AWS Access Key ID: [Enter admin access key]
# AWS Secret Access Key: [Enter admin secret]
# Default region name: us-east-1
# Default output format: json

# Verify configuration
aws sts get-caller-identity
```

#### Create IAM Users for Team Members:
```bash
# Create deployment user for CI/CD
aws iam create-user --user-name biocan-deployment-user

# Create policy for deployment permissions
aws iam create-policy --policy-name BioCAN-Deployment-Policy --policy-document file://docs/iam-policies/deployment-policy.json

# Attach policy to user
aws iam attach-user-policy --user-name biocan-deployment-user --policy-arn arn:aws:iam::ACCOUNT-ID:policy/BioCAN-Deployment-Policy

# Create access keys
aws iam create-access-key --user-name biocan-deployment-user
```

### 2. Create Environment-Specific AWS Resources

#### Production Environment:
```bash
# Set environment variables
export AWS_REGION=us-east-1
export PROJECT_NAME=biocan-landing
export ENVIRONMENT=production
```

#### Staging Environment:
```bash
# Set environment variables
export AWS_REGION=us-east-1
export PROJECT_NAME=biocan-landing
export ENVIRONMENT=staging
```

---

## 💻 Local Development Setup

### 1. Repository Setup
```bash
# Clone the repository
git clone <repository-url>
cd BioCAN-Landing-Page

# Install dependencies
npm ci

# Copy environment file
cp env.example .env.local

# Edit environment variables
nano .env.local
```

### 2. Environment Variables Setup
```bash
# .env.local (Development)
NODE_ENV=development
NEXT_TELEMETRY_DISABLED=1
NEXT_PUBLIC_SITE_URL=http://localhost:3000

# .env.production (Production - DO NOT COMMIT)
NODE_ENV=production
NEXT_TELEMETRY_DISABLED=1
AWS_REGION=us-east-1
BUCKET_NAME=biocan-landing-production-website
CLOUDFRONT_DISTRIBUTION_ID=E1234567890123
NEXT_PUBLIC_SITE_URL=https://biocan.ai

# .env.staging (Staging - DO NOT COMMIT)
NODE_ENV=production
NEXT_TELEMETRY_DISABLED=1
AWS_REGION=us-east-1
BUCKET_NAME=biocan-landing-staging-website
CLOUDFRONT_DISTRIBUTION_ID=E0987654321098
NEXT_PUBLIC_SITE_URL=https://staging.biocan.ai
```

### 3. Local Testing
```bash
# Development server
npm run dev

# Production build test
npm run build
npm start

# Type checking
npm run type-check

# Linting
npm run lint
```

---

## 🚀 Deployment Options

## Option 1: AWS Amplify (Recommended for Teams)

### Benefits for Teams:
- ✅ Automatic deployments from Git
- ✅ Branch-based environments
- ✅ Built-in preview deployments
- ✅ Easy rollbacks
- ✅ Team collaboration features

### Setup Instructions:

#### 1. Initial Setup (DevOps Engineer)
```bash
# Install Amplify CLI
npm install -g @aws-amplify/cli

# Configure Amplify
amplify configure
# Follow prompts to set up AWS credentials
```

#### 2. Project Initialization
```bash
# Initialize Amplify project
amplify init
# Project name: biocan-landing
# Environment name: production
# Default editor: Visual Studio Code
# App type: javascript
# Framework: react
# Source directory: src
# Build directory: .next
# Build command: npm run build
# Start command: npm start
```

#### 3. Hosting Setup
```bash
# Add hosting
amplify add hosting
# Select: Amazon CloudFront and S3
# Select: PROD (S3 with CloudFront using HTTPS)

# Deploy
amplify publish
```

#### 4. Team Member Access
```bash
# Other team members can join the project
amplify env pull
# Select the environment to work with
```

### Branch-Based Deployments:
```bash
# Create staging environment
git checkout -b staging
amplify env add staging

# Deploy staging
amplify publish

# Create feature branch deployments
git checkout -b feature/new-contact-form
amplify env add feature-contact-form
amplify publish
```

---

## Option 2: S3 + CloudFront (Manual/Script Deployment)

### Infrastructure Setup (DevOps Engineer)

#### 1. Using Terraform (Recommended)
```bash
# Navigate to terraform directory
cd terraform

# Initialize Terraform
terraform init

# Create terraform.tfvars
cat > terraform.tfvars << EOF
aws_region = "us-east-1"
project_name = "biocan-landing"
environment = "production"
EOF

# Plan deployment
terraform plan

# Apply infrastructure
terraform apply

# Save outputs
terraform output > ../deployment-outputs.txt
```

#### 2. Manual S3 Setup (Alternative)
```bash
# Create S3 bucket
aws s3 mb s3://biocan-landing-production-website --region us-east-1

# Enable static website hosting
aws s3 website s3://biocan-landing-production-website \
  --index-document index.html \
  --error-document 404.html

# Create bucket policy
aws s3api put-bucket-policy \
  --bucket biocan-landing-production-website \
  --policy file://docs/s3-bucket-policy.json
```

### Application Deployment

#### For Windows Teams:
```powershell
# Set environment variables
$env:BUCKET_NAME = "biocan-landing-production-website"
$env:CLOUDFRONT_DISTRIBUTION_ID = "E1234567890123"
$env:AWS_REGION = "us-east-1"

# Run deployment script
.\scripts\deploy-to-s3.ps1
```

#### For Linux/Mac Teams:
```bash
# Set environment variables
export BUCKET_NAME="biocan-landing-production-website"
export CLOUDFRONT_DISTRIBUTION_ID="E1234567890123"
export AWS_REGION="us-east-1"

# Make script executable
chmod +x scripts/deploy-to-s3.sh

# Run deployment
./scripts/deploy-to-s3.sh
```

---

## Option 3: Docker + ECS (Enterprise Deployment)

### Container Setup

#### 1. Build and Test Locally
```bash
# Build Docker image
docker build -t biocan-landing:latest .

# Test locally
docker run -p 3000:3000 biocan-landing:latest

# Test with docker-compose
docker-compose up
```

#### 2. Push to ECR
```bash
# Create ECR repository
aws ecr create-repository --repository-name biocan-landing

# Get login token
aws ecr get-login-password --region us-east-1 | docker login --username AWS --password-stdin 123456789012.dkr.ecr.us-east-1.amazonaws.com

# Tag image
docker tag biocan-landing:latest 123456789012.dkr.ecr.us-east-1.amazonaws.com/biocan-landing:latest

# Push image
docker push 123456789012.dkr.ecr.us-east-1.amazonaws.com/biocan-landing:latest
```

#### 3. ECS Deployment
```bash
# Create ECS cluster
aws ecs create-cluster --cluster-name biocan-production

# Register task definition
aws ecs register-task-definition --cli-input-json file://docs/ecs-task-definition.json

# Create service
aws ecs create-service \
  --cluster biocan-production \
  --service-name biocan-landing-service \
  --task-definition biocan-landing:1 \
  --desired-count 2 \
  --load-balancers file://docs/load-balancer-config.json
```

---

## 👥 Team Workflows

### Development Workflow

#### 1. Feature Development
```bash
# Developer workflow
git checkout main
git pull origin main
git checkout -b feature/contact-form-improvements

# Make changes
npm run dev  # Test locally

# Commit changes
git add .
git commit -m "feat: improve contact form validation"
git push origin feature/contact-form-improvements

# Create pull request
# Code review by team
# Merge to main after approval
```

#### 2. Staging Deployment (QA Testing)
```bash
# Automatic deployment to staging after merge to main
# Or manual deployment:
git checkout staging
git merge main
# Deploy to staging environment
```

#### 3. Production Deployment
```bash
# Create release branch
git checkout -b release/v1.2.0
git tag v1.2.0
git push origin v1.2.0

# Deploy to production (requires approval)
# Follow deployment checklist
```

### Deployment Checklist

#### Pre-Deployment (QA Engineer)
- [ ] All tests pass locally
- [ ] Build succeeds without warnings
- [ ] Staging environment tested
- [ ] Performance audit completed
- [ ] Security scan passed
- [ ] Backup of current production taken

#### During Deployment (DevOps Engineer)
- [ ] Environment variables updated
- [ ] Database migrations (if any) applied
- [ ] Health checks passing
- [ ] SSL certificates valid
- [ ] CDN cache cleared

#### Post-Deployment (Team Lead)
- [ ] Website loads correctly
- [ ] All pages accessible
- [ ] Contact form working
- [ ] Mobile responsiveness verified
- [ ] Performance metrics within acceptable range
- [ ] Monitoring alerts configured

---

## 🌍 Environment Management

### Environment Separation

#### Production Environment
- **Domain**: https://biocan.ai
- **AWS Account**: Production AWS Account
- **Monitoring**: Full monitoring and alerting
- **Deployment**: Manual approval required
- **Access**: Limited to senior team members

#### Staging Environment  
- **Domain**: https://staging.biocan.ai
- **AWS Account**: Staging AWS Account (or separate region)
- **Monitoring**: Basic monitoring
- **Deployment**: Automatic from main branch
- **Access**: All team members

#### Development Environment
- **Domain**: http://localhost:3000
- **Infrastructure**: Local development
- **Monitoring**: Local debugging
- **Deployment**: Local build and test
- **Access**: Individual developers

### Environment Configuration Files

#### Create environment-specific configurations:
```javascript
// config/production.js
module.exports = {
  apiUrl: 'https://api.biocan.ai',
  analyticsId: 'GA-PROD-123456',
  environment: 'production'
}

// config/staging.js
module.exports = {
  apiUrl: 'https://staging-api.biocan.ai',
  analyticsId: 'GA-STAGING-123456',
  environment: 'staging'
}
```

---

## 📊 Monitoring & Maintenance

### Health Monitoring

#### 1. Built-in Health Check
```bash
# Health check endpoint
curl https://biocan.ai/api/health

# Expected response:
{
  "status": "healthy",
  "timestamp": "2024-12-09T10:30:00Z",
  "uptime": 86400,
  "environment": "production"
}
```

#### 2. AWS CloudWatch Setup
```bash
# Create CloudWatch dashboard
aws cloudwatch put-dashboard \
  --dashboard-name "BioCAN-Production" \
  --dashboard-body file://docs/cloudwatch-dashboard.json

# Set up alarms
aws cloudwatch put-metric-alarm \
  --alarm-name "BioCAN-Website-Down" \
  --alarm-description "Website health check failed" \
  --metric-name HealthCheck \
  --namespace AWS/Route53HealthCheck \
  --statistic Average \
  --period 60 \
  --threshold 1 \
  --comparison-operator LessThanThreshold
```

#### 3. Uptime Monitoring
```bash
# Set up Route 53 health check
aws route53 create-health-check \
  --caller-reference biocan-health-$(date +%s) \
  --health-check-config Type=HTTPS,ResourcePath=/api/health,FullyQualifiedDomainName=biocan.ai,Port=443,RequestInterval=30,FailureThreshold=3
```

### Performance Monitoring

#### 1. Core Web Vitals Tracking
- Monitor Largest Contentful Paint (LCP)
- Track Cumulative Layout Shift (CLS)
- Measure First Input Delay (FID)

#### 2. Custom Analytics Setup
```bash
# Add to environment variables
GOOGLE_ANALYTICS_ID=G-XXXXXXXXXX
FACEBOOK_PIXEL_ID=123456789
```

### Backup & Recovery

#### 1. Automated Backups
```bash
# S3 versioning (already enabled in terraform)
aws s3api put-bucket-versioning \
  --bucket biocan-landing-production-website \
  --versioning-configuration Status=Enabled

# Cross-region replication for disaster recovery
aws s3api put-bucket-replication \
  --bucket biocan-landing-production-website \
  --replication-configuration file://docs/replication-config.json
```

#### 2. Database Backups (if applicable)
```bash
# If using RDS for contact form data
aws rds create-db-snapshot \
  --db-instance-identifier biocan-db \
  --db-snapshot-identifier biocan-backup-$(date +%Y%m%d)
```

---

## 🔧 Troubleshooting

### Common Issues & Solutions

#### 1. Build Failures
```bash
# Issue: Node.js version mismatch
Error: Node.js version 16.x.x is not supported

# Solution: Update Node.js
nvm install 18
nvm use 18
npm ci
npm run build
```

#### 2. Deployment Timeouts
```bash
# Issue: AWS CLI timeout
Error: Operation timed out

# Solution: Increase timeout and check connectivity
aws configure set cli_read_timeout 0
aws configure set cli_connect_timeout 60
```

#### 3. CloudFront Cache Issues
```bash
# Issue: Updated content not visible
# Solution: Clear CloudFront cache
aws cloudfront create-invalidation \
  --distribution-id E1234567890123 \
  --paths "/*"
```

#### 4. SSL Certificate Issues
```bash
# Issue: SSL certificate not working
# Solution: Check certificate status
aws acm list-certificates --region us-east-1
aws acm describe-certificate --certificate-arn arn:aws:acm:us-east-1:123456789012:certificate/12345678-1234-1234-1234-123456789012
```

### Emergency Procedures

#### 1. Website Down
```bash
# 1. Check health endpoint
curl -I https://biocan.ai/api/health

# 2. Check CloudFront status
aws cloudfront get-distribution --id E1234567890123

# 3. Check S3 bucket
aws s3 ls s3://biocan-landing-production-website

# 4. Rollback if necessary
aws s3 sync s3://biocan-landing-backup-bucket/ s3://biocan-landing-production-website/
aws cloudfront create-invalidation --distribution-id E1234567890123 --paths "/*"
```

#### 2. Performance Issues
```bash
# 1. Check CloudWatch metrics
aws cloudwatch get-metric-statistics \
  --namespace AWS/CloudFront \
  --metric-name OriginLatency \
  --dimensions Name=DistributionId,Value=E1234567890123 \
  --start-time 2024-12-09T00:00:00Z \
  --end-time 2024-12-09T23:59:59Z \
  --period 3600 \
  --statistics Average

# 2. Analyze bundle size
npm run build
npx @next/bundle-analyzer
```

### Support Escalation

#### Level 1: Developer
- Local build issues
- Code-related problems
- Basic deployment issues

#### Level 2: DevOps Engineer  
- AWS infrastructure issues
- Deployment pipeline problems
- Performance optimization

#### Level 3: Senior Engineer/Architect
- Complex infrastructure issues
- Security incidents
- Architecture decisions

#### Emergency Contact
- **Primary**: arjun@biocan.ai
- **Phone**: +91 9044404142
- **Escalation**: Project Manager

---

## 🔒 Security & Compliance

### Security Checklist

#### 1. AWS Security
- [ ] IAM users have minimal required permissions
- [ ] S3 buckets are not publicly writable
- [ ] CloudFront uses HTTPS only
- [ ] Security headers are configured
- [ ] AWS CloudTrail is enabled

#### 2. Application Security
- [ ] No sensitive data in environment variables
- [ ] Dependencies are regularly updated
- [ ] Security headers are set in next.config.js
- [ ] Content Security Policy implemented
- [ ] Rate limiting on contact form

#### 3. Data Protection
- [ ] Contact form data encrypted in transit
- [ ] No personal data stored unnecessarily
- [ ] GDPR compliance measures in place
- [ ] Privacy policy updated and accessible

### Security Monitoring

#### 1. AWS Security
```bash
# Enable CloudTrail
aws cloudtrail create-trail \
  --name biocan-audit-trail \
  --s3-bucket-name biocan-cloudtrail-logs

# Enable GuardDuty
aws guardduty create-detector --enable
```

#### 2. Vulnerability Scanning
```bash
# Scan dependencies
npm audit
npm audit fix

# Security scan with tools
npx @dependabot/security-check
```

---

## 👨‍💼 Team Responsibilities

### DevOps Engineer
- **Infrastructure**: Set up and maintain AWS resources
- **Deployments**: Manage production deployments
- **Monitoring**: Configure and maintain monitoring systems
- **Security**: Implement security best practices
- **Backup**: Ensure backup and recovery procedures

### Frontend Developer
- **Development**: Build features and fix bugs
- **Testing**: Local testing and unit tests
- **Code Quality**: Follow coding standards and best practices
- **Documentation**: Update code documentation
- **Code Review**: Participate in code reviews

### QA Engineer
- **Testing**: Test in staging environment
- **Validation**: Validate deployments
- **Performance**: Monitor and report performance issues
- **User Experience**: Ensure optimal user experience
- **Bug Reporting**: Document and track issues

### Project Manager
- **Coordination**: Coordinate deployment activities
- **Approval**: Approve production deployments
- **Communication**: Communicate with stakeholders
- **Planning**: Plan deployment schedules
- **Risk Management**: Identify and mitigate risks

---

## 📞 Support & Contact

### Team Communication Channels
- **Slack**: #biocan-deployment
- **Email**: team@biocan.ai
- **Emergency**: +91 9044404142

### External Support
- **AWS Support**: [AWS Console Support](https://console.aws.amazon.com/support/)
- **Next.js Community**: [Next.js GitHub](https://github.com/vercel/next.js)
- **Vercel Support**: [Vercel Help](https://vercel.com/help)

### Documentation Updates
- **Responsibility**: DevOps Engineer
- **Frequency**: After each major deployment
- **Review**: Monthly team review
- **Approval**: Project Manager

---

## 📚 Additional Resources

### Training Materials
- [AWS Training](https://aws.amazon.com/training/)
- [Next.js Learn](https://nextjs.org/learn)
- [Terraform Tutorial](https://learn.hashicorp.com/terraform)

### Best Practices Guides
- [AWS Well-Architected Framework](https://aws.amazon.com/architecture/well-architected/)
- [Next.js Production Checklist](https://nextjs.org/docs/going-to-production)
- [Web Performance Best Practices](https://web.dev/performance/)

---

**Document Version**: 1.0  
**Last Updated**: December 2024  
**Next Review**: January 2025  
**Maintained By**: BioCAN DevOps Team 
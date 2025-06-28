# 🚀 BioCAN Landing Page - Team AWS Deployment Documentation

**Version**: 1.0  
**Last Updated**: December 2024  
**Project**: BioCAN Bio Career Advancement Network Landing Page  
**Tech Stack**: Next.js 15, React 19, TypeScript, Tailwind CSS

---

## 🎯 Quick Start for Teams

This documentation provides comprehensive instructions for your team to deploy the BioCAN Next.js landing page to AWS using multiple deployment strategies.

## 📋 Prerequisites

### Team Members Required
- **DevOps Engineer**: AWS infrastructure setup
- **Frontend Developer**: Code development and testing
- **QA Engineer**: Testing and validation
- **Project Manager**: Deployment approval and coordination

### Software Requirements
```bash
# All team members need:
Node.js >= 18.0.0
npm >= 9.0.0
Git >= 2.30.0
AWS CLI >= 2.0.0

# DevOps team additionally needs:
Terraform >= 1.0.0
Docker >= 20.0.0
```

### AWS Account Setup
1. **Create AWS Account** (if not exists)
2. **Configure billing alerts**
3. **Set up IAM users** for each team member
4. **Install and configure AWS CLI**

---

## 🏗️ Step 1: AWS Account Configuration

### For DevOps Team Lead:

#### 1.1 Configure AWS CLI
```bash
# Install AWS CLI v2
# Windows: Download from AWS website
# Mac: brew install awscli
# Linux: curl and install

# Configure with admin credentials
aws configure
# Enter your AWS Access Key ID
# Enter your AWS Secret Access Key
# Default region: us-east-1
# Default output format: json

# Verify setup
aws sts get-caller-identity
```

#### 1.2 Create Team IAM Users
```bash
# Create deployment user for automated deployments
aws iam create-user --user-name biocan-deployment-bot

# Create developer users
aws iam create-user --user-name biocan-dev-user-1
aws iam create-user --user-name biocan-dev-user-2

# Create policies for deployment permissions
aws iam create-policy --policy-name BioCAN-S3-Deployment --policy-document '{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Action": [
        "s3:GetObject",
        "s3:PutObject",
        "s3:DeleteObject",
        "s3:ListBucket"
      ],
      "Resource": [
        "arn:aws:s3:::biocan-landing-*",
        "arn:aws:s3:::biocan-landing-*/*"
      ]
    },
    {
      "Effect": "Allow",
      "Action": [
        "cloudfront:CreateInvalidation",
        "cloudfront:GetDistribution"
      ],
      "Resource": "*"
    }
  ]
}'

# Attach policies to users
aws iam attach-user-policy --user-name biocan-deployment-bot --policy-arn arn:aws:iam::YOUR-ACCOUNT-ID:policy/BioCAN-S3-Deployment
```

---

## 🚀 Step 2: Choose Your Deployment Strategy

### Option A: AWS Amplify (Easiest - Recommended for Small Teams)

#### Benefits:
- ✅ Zero infrastructure management
- ✅ Automatic deployments from Git
- ✅ Built-in CI/CD pipeline
- ✅ Branch-based deployments
- ✅ Rollback capabilities

#### Setup Process:

**2.1 Push Code to Git Repository**
```bash
# Initialize git repository
git init
git add .
git commit -m "Initial BioCAN website commit"

# Push to GitHub/GitLab/Bitbucket
git remote add origin https://github.com/yourusername/biocan-landing
git push -u origin main
```

**2.2 Deploy via AWS Amplify Console**
1. Go to [AWS Amplify Console](https://console.aws.amazon.com/amplify/)
2. Click **"New app"** → **"Host web app"**
3. Select your Git provider (GitHub/GitLab/Bitbucket)
4. Choose your repository: `biocan-landing`
5. Select branch: `main`
6. Amplify will auto-detect the `amplify.yml` configuration
7. Click **"Save and deploy"**

**2.3 Configure Custom Domain (Optional)**
```bash
# In Amplify Console:
# 1. Go to Domain management
# 2. Add domain: biocan.ai
# 3. Configure DNS settings
# 4. Wait for SSL certificate provisioning
```

#### Team Workflow with Amplify:
```bash
# Developer workflow
git checkout -b feature/contact-improvements
# Make changes
git commit -m "feat: improve contact form"
git push origin feature/contact-improvements
# Create pull request
# After merge to main, Amplify auto-deploys

# QA can test feature branches
git checkout -b staging
amplify env add staging
git push origin staging
# Creates staging.biocan.ai automatically
```

---

### Option B: S3 + CloudFront (Most Cost-Effective)

#### Benefits:
- ✅ Ultra-low cost ($0.50-5/month)
- ✅ High performance with global CDN
- ✅ Complete control over infrastructure
- ✅ Easy to scale

#### Setup Process:

**2.1 Infrastructure Deployment (DevOps)**
```bash
# Using provided Terraform configuration
cd terraform

# Initialize Terraform
terraform init

# Create environment configuration
echo 'aws_region = "us-east-1"
project_name = "biocan-landing"
environment = "production"' > terraform.tfvars

# Plan and apply infrastructure
terraform plan
terraform apply

# Save important outputs
terraform output website_bucket_name
terraform output cloudfront_distribution_id
terraform output website_url
```

**2.2 Application Deployment**

**For Windows Teams:**
```powershell
# Set environment variables (replace with your values)
$env:BUCKET_NAME = "biocan-landing-production-website"
$env:CLOUDFRONT_DISTRIBUTION_ID = "E1234567890123"
$env:AWS_REGION = "us-east-1"

# Deploy website
powershell -ExecutionPolicy Bypass -File scripts/deploy-to-s3.ps1
```

**For Mac/Linux Teams:**
```bash
# Set environment variables (replace with your values)
export BUCKET_NAME="biocan-landing-production-website"
export CLOUDFRONT_DISTRIBUTION_ID="E1234567890123"
export AWS_REGION="us-east-1"

# Make script executable and deploy
chmod +x scripts/deploy-to-s3.sh
./scripts/deploy-to-s3.sh
```

**2.3 Team Deployment Workflow**
```bash
# Developer makes changes
git checkout -b feature/new-section
# Develop locally
npm run dev

# Test production build
npm run build
npm start

# Commit and push
git add .
git commit -m "feat: add new section"
git push origin feature/new-section

# Create pull request, get approval
# Merge to main

# DevOps deploys to staging
git checkout staging
git merge main
./scripts/deploy-to-s3.sh  # (with staging env vars)

# QA tests staging environment
# If approved, deploy to production
git checkout main
./scripts/deploy-to-s3.sh  # (with production env vars)
```

---

### Option C: Docker + ECS (Enterprise/Complex Applications)

#### Benefits:
- ✅ Full Next.js features (SSR, API routes)
- ✅ Container-based deployment
- ✅ Auto-scaling capabilities
- ✅ Production-grade infrastructure

#### Setup Process:

**2.1 Container Setup**
```bash
# Build and test Docker image locally
docker build -t biocan-landing .
docker run -p 3000:3000 biocan-landing

# Test with docker-compose
docker-compose up
```

**2.2 Push to ECR**
```bash
# Create ECR repository
aws ecr create-repository --repository-name biocan-landing

# Get login credentials
aws ecr get-login-password --region us-east-1 | docker login --username AWS --password-stdin YOUR-ACCOUNT-ID.dkr.ecr.us-east-1.amazonaws.com

# Tag and push image
docker tag biocan-landing:latest YOUR-ACCOUNT-ID.dkr.ecr.us-east-1.amazonaws.com/biocan-landing:latest
docker push YOUR-ACCOUNT-ID.dkr.ecr.us-east-1.amazonaws.com/biocan-landing:latest
```

**2.3 ECS Deployment**
```bash
# Create ECS cluster
aws ecs create-cluster --cluster-name biocan-production

# Create task definition
aws ecs register-task-definition \
  --family biocan-landing \
  --network-mode awsvpc \
  --requires-compatibilities FARGATE \
  --cpu 256 \
  --memory 512 \
  --execution-role-arn arn:aws:iam::YOUR-ACCOUNT-ID:role/ecsTaskExecutionRole \
  --container-definitions '[{
    "name": "biocan-landing",
    "image": "YOUR-ACCOUNT-ID.dkr.ecr.us-east-1.amazonaws.com/biocan-landing:latest",
    "portMappings": [{"containerPort": 3000}],
    "essential": true
  }]'

# Create service
aws ecs create-service \
  --cluster biocan-production \
  --service-name biocan-landing-service \
  --task-definition biocan-landing:1 \
  --desired-count 2 \
  --launch-type FARGATE
```

---

## 🔧 Step 3: Local Development Setup

### 3.1 Repository Setup (All Developers)
```bash
# Clone repository
git clone https://github.com/yourusername/biocan-landing
cd biocan-landing

# Install dependencies
npm ci

# Copy environment file
cp env.example .env.local

# Start development server
npm run dev
# Visit http://localhost:3000
```

### 3.2 Environment Variables
```bash
# .env.local (for local development)
NODE_ENV=development
NEXT_TELEMETRY_DISABLED=1
NEXT_PUBLIC_SITE_URL=http://localhost:3000

# .env.production (for production - keep secure!)
NODE_ENV=production
NEXT_TELEMETRY_DISABLED=1
AWS_REGION=us-east-1
BUCKET_NAME=your-bucket-name
CLOUDFRONT_DISTRIBUTION_ID=your-distribution-id
NEXT_PUBLIC_SITE_URL=https://biocan.ai
```

### 3.3 Development Commands
```bash
# Development
npm run dev              # Start dev server
npm run build           # Build for production
npm run start           # Start production server
npm run lint            # Run ESLint
npm run type-check      # TypeScript checking

# Testing
npm run build && npm start  # Test production build locally
```

---

## 👥 Step 4: Team Workflow & Responsibilities

### Developer Workflow
```bash
# 1. Create feature branch
git checkout main
git pull origin main
git checkout -b feature/contact-form-improvements

# 2. Develop locally
npm run dev
# Make changes, test locally

# 3. Commit and push
git add .
git commit -m "feat: improve contact form validation"
git push origin feature/contact-form-improvements

# 4. Create pull request
# Use GitHub/GitLab interface

# 5. After review and approval, merge to main
```

### QA Testing Process
```bash
# 1. Test feature branches in staging
git checkout feature/contact-form-improvements
npm run build
npm start
# Test thoroughly

# 2. Test staging environment after deployment
# Visit https://staging.biocan.ai
# Test all functionality

# 3. Sign off for production deployment
```

### DevOps Deployment Process
```bash
# 1. Deploy to staging after main branch updates
git checkout staging
git merge main
./scripts/deploy-to-s3.sh  # with staging environment

# 2. Deploy to production (with approval)
git checkout main
git tag v1.2.0
./scripts/deploy-to-s3.sh  # with production environment

# 3. Verify deployment
curl https://biocan.ai/api/health
# Should return: {"status": "healthy", ...}
```

---

## 📊 Step 5: Monitoring & Maintenance

### Health Monitoring
```bash
# Built-in health check endpoint
curl https://biocan.ai/api/health

# Expected response:
{
  "status": "healthy",
  "timestamp": "2024-12-09T10:30:00Z",
  "uptime": 86400,
  "environment": "production"
}
```

### AWS CloudWatch Setup
```bash
# Create monitoring dashboard
aws cloudwatch put-dashboard \
  --dashboard-name "BioCAN-Production" \
  --dashboard-body '{
    "widgets": [
      {
        "type": "metric",
        "properties": {
          "metrics": [
            ["AWS/CloudFront", "Requests", "DistributionId", "YOUR-DISTRIBUTION-ID"]
          ],
          "period": 300,
          "stat": "Sum",
          "region": "us-east-1",
          "title": "Website Traffic"
        }
      }
    ]
  }'

# Set up error rate alarms
aws cloudwatch put-metric-alarm \
  --alarm-name "BioCAN-High-Error-Rate" \
  --alarm-description "High error rate detected" \
  --metric-name 4xxErrorRate \
  --namespace AWS/CloudFront \
  --statistic Average \
  --period 300 \
  --threshold 5.0 \
  --comparison-operator GreaterThanThreshold
```

### Performance Monitoring
- **Page Load Speed**: Target < 3 seconds
- **Core Web Vitals**: All metrics in green
- **Uptime**: Target > 99.9%
- **Error Rate**: Target < 1%

---

## 🚨 Step 6: Troubleshooting Guide

### Common Issues

#### Build Failures
```bash
# Issue: Node.js version mismatch
# Solution:
nvm install 18
nvm use 18
rm -rf node_modules package-lock.json
npm install
npm run build
```

#### Deployment Failures
```bash
# Issue: AWS permission denied
# Solution: Check IAM permissions
aws sts get-caller-identity
aws iam list-attached-user-policies --user-name your-username

# Issue: CloudFront cache not updating
# Solution: Invalidate cache
aws cloudfront create-invalidation \
  --distribution-id YOUR-DISTRIBUTION-ID \
  --paths "/*"
```

#### Website Not Loading
```bash
# 1. Check health endpoint
curl -I https://biocan.ai/api/health

# 2. Check S3 bucket
aws s3 ls s3://your-bucket-name

# 3. Check CloudFront
aws cloudfront get-distribution --id YOUR-DISTRIBUTION-ID

# 4. Emergency rollback
aws s3 sync s3://your-backup-bucket/ s3://your-main-bucket/
```

### Emergency Contacts
- **Primary**: arjun@biocan.ai
- **Phone**: +91 9044404142
- **Team Lead**: [Your team lead email]
- **DevOps**: [DevOps team email]

---

## 🔒 Step 7: Security Best Practices

### Security Checklist
- [ ] AWS IAM users have minimal required permissions
- [ ] S3 buckets are not publicly writable (only readable)
- [ ] HTTPS is enforced (redirects from HTTP)
- [ ] Security headers are configured in next.config.js
- [ ] Dependencies are regularly updated (`npm audit`)
- [ ] Environment variables are not committed to Git
- [ ] CloudTrail logging is enabled for audit trail

### Regular Security Tasks
```bash
# Weekly: Update dependencies
npm audit
npm audit fix

# Monthly: Security scan
npm audit --audit-level moderate

# Quarterly: Review AWS permissions
aws iam list-users
aws iam list-policies
```

---

## 💰 Step 8: Cost Management

### Expected AWS Costs

#### Option A: AWS Amplify
- **Small traffic** (< 1000 visitors/month): $1-5/month
- **Medium traffic** (< 10,000 visitors/month): $5-15/month
- **High traffic** (< 100,000 visitors/month): $15-50/month

#### Option B: S3 + CloudFront
- **Small traffic**: $0.50-2/month
- **Medium traffic**: $2-8/month
- **High traffic**: $8-25/month

#### Option C: ECS Fargate
- **2 tasks running 24/7**: $15-30/month
- **Auto-scaling enabled**: $20-60/month
- **Load balancer**: +$18/month

### Cost Optimization Tips
```bash
# 1. Enable S3 lifecycle policies
aws s3api put-bucket-lifecycle-configuration \
  --bucket your-bucket-name \
  --lifecycle-configuration file://lifecycle-policy.json

# 2. Configure CloudFront caching
# Set appropriate cache TTL values

# 3. Monitor usage with AWS Cost Explorer
# Set up billing alerts
```

---

## 📅 Step 9: Deployment Schedule & Process

### Recommended Schedule
- **Feature releases**: Bi-weekly (every other Friday)
- **Bug fixes**: As needed (with proper testing)
- **Security updates**: Immediate
- **Dependency updates**: Monthly

### Deployment Process
1. **Development**: Feature branch → Pull request → Code review
2. **Staging**: Merge to main → Auto-deploy to staging → QA testing
3. **Production**: Manual deployment → Health checks → Monitoring

### Deployment Checklist
**Pre-deployment:**
- [ ] All tests pass
- [ ] Code review completed
- [ ] Staging environment tested
- [ ] Performance benchmarks met

**During deployment:**
- [ ] Health checks pass
- [ ] No errors in CloudWatch logs
- [ ] Website loads correctly

**Post-deployment:**
- [ ] All pages accessible
- [ ] Contact form working
- [ ] Mobile responsiveness verified
- [ ] Performance metrics acceptable

---

## 📞 Step 10: Support & Resources

### Team Communication
- **Daily standups**: Discuss deployment status
- **Weekly reviews**: Review performance metrics
- **Monthly planning**: Plan upcoming releases
- **Incident response**: Immediate team notification

### Documentation
- **This guide**: Complete deployment instructions
- **AWS_DEPLOYMENT_GUIDE.md**: Detailed technical guide
- **README.md**: Project overview and quick start
- **Code comments**: Inline documentation

### Training Resources
- [AWS Documentation](https://docs.aws.amazon.com/)
- [Next.js Documentation](https://nextjs.org/docs)
- [Terraform Learn](https://learn.hashicorp.com/terraform)
- [Docker Documentation](https://docs.docker.com/)

### Support Channels
- **Slack**: #biocan-deployment
- **Email**: team@biocan.ai
- **Emergency**: +91 9044404142
- **AWS Support**: [AWS Console](https://console.aws.amazon.com/support/)

---

## ✅ Step 11: Quick Deployment Checklist

### For First-Time Deployment:
1. [ ] AWS account configured
2. [ ] Repository cloned and dependencies installed
3. [ ] Environment variables configured
4. [ ] Deployment method chosen (Amplify/S3/ECS)
5. [ ] Infrastructure deployed (if using S3/ECS)
6. [ ] Application deployed and tested
7. [ ] Domain configured (optional)
8. [ ] Monitoring set up
9. [ ] Team trained on deployment process

### For Regular Deployments:
1. [ ] Code changes tested locally
2. [ ] Pull request reviewed and approved
3. [ ] Staging deployment successful
4. [ ] QA testing completed
5. [ ] Production deployment approved
6. [ ] Health checks pass
7. [ ] Performance metrics acceptable
8. [ ] Team notified of completion

---

## 🎉 Conclusion

Your BioCAN landing page is now ready for professional AWS deployment! This documentation provides your team with everything needed to:

- ✅ **Deploy confidently** using multiple AWS strategies
- ✅ **Maintain high availability** with monitoring and health checks
- ✅ **Scale efficiently** as your traffic grows
- ✅ **Collaborate effectively** with clear team workflows
- ✅ **Troubleshoot quickly** with comprehensive guides

### Next Steps:
1. **Choose your deployment method** based on team size and requirements
2. **Follow the step-by-step instructions** for your chosen method
3. **Set up monitoring and alerts** for production readiness
4. **Train your team** on the deployment process
5. **Launch your BioCAN website** and start accelerating biotech careers!

---

**Need help?** Contact arjun@biocan.ai or +91 9044404142

**Happy Deploying! 🚀** 
# BioCAN Landing Page - AWS Deployment Guide

This guide covers multiple ways to deploy your BioCAN Next.js landing page to AWS. Choose the option that best fits your needs.

## 📋 Prerequisites

- AWS Account with appropriate permissions
- AWS CLI installed and configured
- Node.js 18+ installed
- Docker installed (for containerized deployments)

## 🚀 Deployment Options

### Option 1: AWS Amplify (Recommended for Beginners)

AWS Amplify is the easiest way to deploy Next.js applications to AWS.

#### Steps:

1. **Push to Git Repository**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin <your-repo-url>
   git push -u origin main
   ```

2. **Deploy via AWS Console**
   - Go to AWS Amplify Console
   - Click "New app" → "Host web app"
   - Connect your Git repository
   - Amplify will automatically detect the `amplify.yml` configuration
   - Click "Save and deploy"

3. **Configure Environment Variables** (if needed)
   - Go to App Settings → Environment variables
   - Add any required environment variables

#### Benefits:
- ✅ Automatic deployments from Git
- ✅ Built-in CI/CD pipeline
- ✅ Automatic SSL certificates
- ✅ Global CDN
- ✅ No server management

#### Estimated Cost: $1-10/month for typical traffic

---

### Option 2: S3 + CloudFront (Static Hosting)

Perfect for static websites with excellent performance and cost-effectiveness.

#### Automated Deployment:

1. **Configure AWS CLI**
   ```bash
   aws configure
   ```

2. **Deploy Infrastructure with Terraform**
   ```bash
   cd terraform
   terraform init
   terraform plan
   terraform apply
   ```

3. **Deploy Website**
   ```bash
   # Set environment variables
   export BUCKET_NAME="biocan-landing-production-website"
   export CLOUDFRONT_DISTRIBUTION_ID="your-distribution-id"  # From terraform output
   export AWS_REGION="us-east-1"

   # Run deployment script
   ./scripts/deploy-to-s3.sh
   ```

#### Manual Setup:

1. **Create S3 Bucket**
   ```bash
   aws s3 mb s3://biocan-landing-website
   aws s3 website s3://biocan-landing-website --index-document index.html --error-document 404.html
   ```

2. **Build and Upload**
   ```bash
   # Modify next.config.js for static export
   npm run build
   aws s3 sync out/ s3://biocan-landing-website --delete
   ```

3. **Setup CloudFront** (via AWS Console)
   - Create CloudFront distribution
   - Set S3 bucket as origin
   - Configure caching behaviors

#### Benefits:
- ✅ Very cost-effective
- ✅ Excellent performance
- ✅ Highly scalable
- ✅ Global CDN included

#### Estimated Cost: $0.50-5/month for typical traffic

---

### Option 3: Docker + ECS/Fargate

Ideal for applications requiring server-side rendering or dynamic features.

#### Steps:

1. **Build Docker Image**
   ```bash
   docker build -t biocan-landing .
   docker tag biocan-landing:latest your-account.dkr.ecr.region.amazonaws.com/biocan-landing:latest
   ```

2. **Push to ECR**
   ```bash
   aws ecr create-repository --repository-name biocan-landing
   aws ecr get-login-password --region us-east-1 | docker login --username AWS --password-stdin your-account.dkr.ecr.us-east-1.amazonaws.com
   docker push your-account.dkr.ecr.us-east-1.amazonaws.com/biocan-landing:latest
   ```

3. **Deploy to ECS Fargate**
   - Create ECS cluster
   - Create task definition using the Docker image
   - Create service with Application Load Balancer
   - Configure auto-scaling

#### Benefits:
- ✅ Full Next.js features (SSR, API routes)
- ✅ Container-based deployment
- ✅ Auto-scaling capabilities
- ✅ Zero server management

#### Estimated Cost: $15-50/month depending on usage

---

### Option 4: EC2 with Load Balancer

Traditional hosting approach with full control.

#### Steps:

1. **Launch EC2 Instances**
   ```bash
   # Use provided user data script for auto-setup
   aws ec2 run-instances --image-id ami-0abcdef1234567890 --instance-type t3.small --user-data file://scripts/ec2-user-data.sh
   ```

2. **Setup Load Balancer**
   - Create Application Load Balancer
   - Configure target groups
   - Setup health checks using `/api/health`

3. **Configure Auto Scaling**
   - Create Launch Template
   - Setup Auto Scaling Group
   - Configure scaling policies

#### Benefits:
- ✅ Full control over infrastructure
- ✅ Can handle any workload
- ✅ Customizable environment
- ✅ SSH access for debugging

#### Estimated Cost: $20-100/month depending on instance types

---

## 🔒 Security Best Practices

### 1. Environment Variables
```bash
# Never commit these to version control
NODE_ENV=production
NEXT_TELEMETRY_DISABLED=1
```

### 2. IAM Permissions
Create minimal IAM policies for deployments:

```json
{
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
    }
  ]
}
```

### 3. CloudFront Security Headers
Already configured in `next.config.js`:
- X-Frame-Options: DENY
- X-Content-Type-Options: nosniff
- Referrer-Policy: origin-when-cross-origin

## 📊 Monitoring and Analytics

### 1. CloudWatch Dashboards
- Monitor traffic patterns
- Track error rates
- Set up alerts for downtime

### 2. AWS WAF (Web Application Firewall)
- Protect against common web exploits
- Rate limiting
- IP blocking

### 3. Health Checks
The application includes a health check endpoint at `/api/health` for:
- Load balancer health checks
- Monitoring systems
- Automated testing

## 🔄 CI/CD Pipeline

### GitHub Actions Example:
```yaml
name: Deploy to AWS
on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - name: Configure AWS credentials
        uses: aws-actions/configure-aws-credentials@v2
        with:
          aws-access-key-id: ${{ secrets.AWS_ACCESS_KEY_ID }}
          aws-secret-access-key: ${{ secrets.AWS_SECRET_ACCESS_KEY }}
          aws-region: us-east-1
      - name: Deploy to S3
        run: ./scripts/deploy-to-s3.sh
```

## 💡 Performance Optimization

### 1. Image Optimization
- Use Next.js Image component
- Configure CloudFront for image caching
- Consider using AWS CloudFront Image Optimization

### 2. Caching Strategy
- Static assets: 1 year cache
- HTML files: 1 hour cache
- API responses: Custom based on data freshness

### 3. Bundle Analysis
```bash
npm run build
npx @next/bundle-analyzer
```

## 🚨 Troubleshooting

### Common Issues:

1. **Build Failures**
   - Check Node.js version compatibility
   - Verify all dependencies are installed
   - Review build logs for specific errors

2. **Deployment Timeouts**
   - Increase timeout settings
   - Check network connectivity
   - Verify AWS credentials

3. **404 Errors on Route Refresh**
   - Configure CloudFront to handle SPA routing
   - Set up proper error pages

4. **Slow Loading Times**
   - Enable compression
   - Optimize images
   - Review CloudFront cache settings

## 📞 Support

For deployment issues:
- Email: arjun@biocan.ai
- Phone: +91 9044404142

## 🔗 Useful Links

- [AWS Amplify Documentation](https://docs.aws.amazon.com/amplify/)
- [AWS S3 Static Website Hosting](https://docs.aws.amazon.com/AmazonS3/latest/userguide/WebsiteHosting.html)
- [AWS CloudFront Documentation](https://docs.aws.amazon.com/cloudfront/)
- [Next.js Deployment Documentation](https://nextjs.org/docs/deployment)

---

**Choose your deployment method and get your BioCAN landing page live on AWS! 🚀** 
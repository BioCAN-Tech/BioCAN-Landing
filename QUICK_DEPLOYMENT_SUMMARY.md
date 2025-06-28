# 🚀 BioCAN - Quick Deployment Summary

**Ready to deploy in 15 minutes?** Choose your method below:

## ⚡ Option 1: AWS Amplify (Easiest)
```bash
# 1. Push to GitHub
git init && git add . && git commit -m "Deploy BioCAN"
git remote add origin https://github.com/yourusername/biocan-landing
git push -u origin main

# 2. Go to AWS Amplify Console
# 3. New app → Host web app → Connect GitHub
# 4. Select repository → Deploy
# ✅ Live in 5 minutes!
```
**Cost**: $1-15/month | **Best for**: Small teams, quick setup

## 💰 Option 2: S3 + CloudFront (Cheapest)
```bash
# 1. Deploy infrastructure
cd terraform && terraform init && terraform apply

# 2. Deploy website (Windows)
powershell -ExecutionPolicy Bypass -File scripts/deploy-to-s3.ps1

# 2. Deploy website (Mac/Linux) 
./scripts/deploy-to-s3.sh

# ✅ Live in 15 minutes!
```
**Cost**: $0.50-5/month | **Best for**: Cost-conscious, high performance

## 🏢 Option 3: Docker + ECS (Enterprise)
```bash
# 1. Build and push
docker build -t biocan-landing .
# Push to ECR and deploy to ECS (see full guide)

# ✅ Live in 30 minutes!
```
**Cost**: $15-50/month | **Best for**: Scalable, full Next.js features

## 📋 Prerequisites
- Node.js 18+, AWS CLI, Git installed
- AWS account configured
- Repository access

## 📚 Full Documentation
- **Complete Guide**: `TEAM_DEPLOYMENT_DOCS.md`
- **Technical Details**: `AWS_DEPLOYMENT_GUIDE.md`
- **Troubleshooting**: See documentation files

## 📞 Need Help?
- **Email**: arjun@biocan.ai
- **Phone**: +91 9044404142

**Choose your method and deploy BioCAN now! 🧬🚀** 
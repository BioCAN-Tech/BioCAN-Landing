# BioCAN Landing Page - AWS Server Diagnostic Script
# This script checks the status of your AWS deployment

Write-Host "🔍 BioCAN Landing Page - AWS Server Diagnostics" -ForegroundColor Cyan
Write-Host "================================================" -ForegroundColor Cyan
Write-Host ""

# Check if AWS CLI is installed
Write-Host "1. Checking AWS CLI installation..." -ForegroundColor Yellow
if (Get-Command aws -ErrorAction SilentlyContinue) {
    $awsVersion = aws --version
    Write-Host "   ✅ AWS CLI installed: $awsVersion" -ForegroundColor Green
} else {
    Write-Host "   ❌ AWS CLI is not installed" -ForegroundColor Red
    Write-Host "   Install from: https://aws.amazon.com/cli/" -ForegroundColor Yellow
    exit 1
}

Write-Host ""

# Check AWS credentials
Write-Host "2. Checking AWS credentials..." -ForegroundColor Yellow
try {
    $identity = aws sts get-caller-identity 2>&1
    if ($LASTEXITCODE -eq 0) {
        Write-Host "   ✅ AWS credentials configured" -ForegroundColor Green
        Write-Host "   $identity" -ForegroundColor Gray
    } else {
        Write-Host "   ❌ AWS credentials not configured" -ForegroundColor Red
        Write-Host "   Run: aws configure" -ForegroundColor Yellow
    }
} catch {
    Write-Host "   ❌ Error checking credentials: $_" -ForegroundColor Red
}

Write-Host ""

# Check EC2 Instances
Write-Host "3. Checking EC2 Instances..." -ForegroundColor Yellow
try {
    $instances = aws ec2 describe-instances --query 'Reservations[*].Instances[*].[InstanceId,State.Name,PublicIpAddress,PrivateIpAddress,Tags[?Key==`Name`].Value|[0]]' --output table 2>&1
    if ($LASTEXITCODE -eq 0) {
        Write-Host "   EC2 Instances:" -ForegroundColor Cyan
        Write-Host $instances
    } else {
        Write-Host "   ⚠️  No EC2 instances found or error accessing EC2" -ForegroundColor Yellow
    }
} catch {
    Write-Host "   ❌ Error checking EC2: $_" -ForegroundColor Red
}

Write-Host ""

# Check S3 Buckets (for static hosting)
Write-Host "4. Checking S3 Buckets for landing page..." -ForegroundColor Yellow
try {
    $buckets = aws s3 ls | Select-String "biocan-landing"
    if ($buckets) {
        Write-Host "   ✅ Found S3 buckets:" -ForegroundColor Green
        $buckets | ForEach-Object { Write-Host "   - $_" -ForegroundColor Gray }
        
        # Check bucket website configuration
        $buckets | ForEach-Object {
            $bucketName = ($_ -split '\s+')[-1]
            Write-Host "   Checking website config for: $bucketName" -ForegroundColor Cyan
            $website = aws s3api get-bucket-website --bucket $bucketName 2>&1
            if ($LASTEXITCODE -eq 0) {
                Write-Host "   ✅ Website hosting enabled" -ForegroundColor Green
            } else {
                Write-Host "   ⚠️  Website hosting not configured" -ForegroundColor Yellow
            }
        }
    } else {
        Write-Host "   ⚠️  No S3 buckets found for landing page" -ForegroundColor Yellow
    }
} catch {
    Write-Host "   ❌ Error checking S3: $_" -ForegroundColor Red
}

Write-Host ""

# Check CloudFront Distributions
Write-Host "5. Checking CloudFront Distributions..." -ForegroundColor Yellow
try {
    $distributions = aws cloudfront list-distributions --query 'DistributionList.Items[*].[Id,DomainName,Status,Enabled]' --output table 2>&1
    if ($LASTEXITCODE -eq 0 -and $distributions -notmatch "None") {
        Write-Host "   CloudFront Distributions:" -ForegroundColor Cyan
        Write-Host $distributions
    } else {
        Write-Host "   ⚠️  No CloudFront distributions found" -ForegroundColor Yellow
    }
} catch {
    Write-Host "   ❌ Error checking CloudFront: $_" -ForegroundColor Red
}

Write-Host ""

# Check AWS Amplify Apps
Write-Host "6. Checking AWS Amplify Apps..." -ForegroundColor Yellow
try {
    $amplifyApps = aws amplify list-apps --query 'apps[*].[name,defaultDomain,platform]' --output table 2>&1
    if ($LASTEXITCODE -eq 0 -and $amplifyApps -notmatch "None") {
        Write-Host "   Amplify Apps:" -ForegroundColor Cyan
        Write-Host $amplifyApps
        
        # Get branches for each app
        $appIds = aws amplify list-apps --query 'apps[*].appId' --output text
        foreach ($appId in $appIds) {
            Write-Host "   Checking branches for app: $appId" -ForegroundColor Cyan
            $branches = aws amplify list-branches --app-id $appId --query 'branches[*].[branchName,stage,activeJobId]' --output table 2>&1
            Write-Host $branches
        }
    } else {
        Write-Host "   ⚠️  No Amplify apps found" -ForegroundColor Yellow
    }
} catch {
    Write-Host "   ❌ Error checking Amplify: $_" -ForegroundColor Red
}

Write-Host ""

# Check Load Balancers
Write-Host "7. Checking Application Load Balancers..." -ForegroundColor Yellow
try {
    $loadBalancers = aws elbv2 describe-load-balancers --query 'LoadBalancers[*].[LoadBalancerName,State.Code,DNSName]' --output table 2>&1
    if ($LASTEXITCODE -eq 0 -and $loadBalancers -notmatch "None") {
        Write-Host "   Load Balancers:" -ForegroundColor Cyan
        Write-Host $loadBalancers
    } else {
        Write-Host "   ⚠️  No load balancers found" -ForegroundColor Yellow
    }
} catch {
    Write-Host "   ❌ Error checking load balancers: $_" -ForegroundColor Red
}

Write-Host ""

# Check ECS Services
Write-Host "8. Checking ECS Services..." -ForegroundColor Yellow
try {
    $clusters = aws ecs list-clusters --query 'clusterArns[*]' --output text 2>&1
    if ($clusters) {
        Write-Host "   ECS Clusters found:" -ForegroundColor Cyan
        foreach ($cluster in $clusters) {
            $clusterName = $cluster.Split('/')[-1]
            Write-Host "   - $clusterName" -ForegroundColor Gray
            $services = aws ecs list-services --cluster $clusterName --query 'serviceArns[*]' --output table 2>&1
            Write-Host $services
        }
    } else {
        Write-Host "   ⚠️  No ECS clusters found" -ForegroundColor Yellow
    }
} catch {
    Write-Host "   ❌ Error checking ECS: $_" -ForegroundColor Red
}

Write-Host ""
Write-Host "================================================" -ForegroundColor Cyan
Write-Host "✅ Diagnostic check complete!" -ForegroundColor Green
Write-Host ""
Write-Host "Next Steps:" -ForegroundColor Yellow
Write-Host "1. If EC2 instance found but stopped, start it: aws ec2 start-instances --instance-ids <instance-id>" -ForegroundColor White
Write-Host "2. If S3 bucket found, check if files are uploaded: aws s3 ls s3://<bucket-name>/" -ForegroundColor White
Write-Host "3. If CloudFront found, check distribution status: aws cloudfront get-distribution --id <distribution-id>" -ForegroundColor White
Write-Host "4. Test local build: cd BioCAN-Landing && npm run build && npm start" -ForegroundColor White

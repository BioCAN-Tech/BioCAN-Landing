# BioCAN Landing Page - Server Files Diagnostic Script
# This script lists all files on your server and checks backup configuration

Write-Host "🔍 BioCAN Landing Page - Server Files Diagnostic" -ForegroundColor Cyan
Write-Host "================================================" -ForegroundColor Cyan
Write-Host ""

# Configuration - Update these with your server details
$SERVER_USER = if ($env:SERVER_USER) { $env:SERVER_USER } else { "bitnami" }
$SERVER_HOST = if ($env:SERVER_HOST) { $env:SERVER_HOST } else { "your-server-ip" }
$HTDOCS_PATH = if ($env:HTDOCS_PATH) { $env:HTDOCS_PATH } else { "/home/bitnami/htdocs" }
$BACKUPS_PATH = if ($env:BACKUPS_PATH) { $env:BACKUPS_PATH } else { "/home/bitnami/htdocs-backups" }

Write-Host "Server Configuration:" -ForegroundColor Yellow
Write-Host "  User: $SERVER_USER"
Write-Host "  Host: $SERVER_HOST"
Write-Host "  Web Root: $HTDOCS_PATH"
Write-Host "  Backups: $BACKUPS_PATH"
Write-Host ""

# Check if SSH connection works
Write-Host "1. Testing SSH connection..." -ForegroundColor Yellow
try {
    $test = ssh -o ConnectTimeout=5 "$SERVER_USER@$SERVER_HOST" "echo 'Connected'" 2>&1
    if ($LASTEXITCODE -eq 0) {
        Write-Host "   ✅ SSH connection successful" -ForegroundColor Green
    } else {
        throw "Connection failed"
    }
} catch {
    Write-Host "   ❌ Cannot connect via SSH" -ForegroundColor Red
    Write-Host "   Please update SERVER_USER and SERVER_HOST variables" -ForegroundColor Yellow
    Write-Host "   Or run: ssh $SERVER_USER@$SERVER_HOST" -ForegroundColor Yellow
    exit 1
}

Write-Host ""

# List main htdocs directory
Write-Host "2. Listing files in main web directory ($HTDOCS_PATH)..." -ForegroundColor Yellow
Write-Host "   Directory structure:" -ForegroundColor Cyan
$htdocsFiles = ssh "$SERVER_USER@$SERVER_HOST" "ls -lah $HTDOCS_PATH" 2>&1
if ($LASTEXITCODE -eq 0) {
    Write-Host $htdocsFiles
} else {
    Write-Host "   ❌ Cannot access $HTDOCS_PATH" -ForegroundColor Red
}

Write-Host ""

# Count files in htdocs
Write-Host "3. Counting files in web directory..." -ForegroundColor Yellow
$fileCount = ssh "$SERVER_USER@$SERVER_HOST" "find $HTDOCS_PATH -type f 2>/dev/null | wc -l" 2>&1
$dirCount = ssh "$SERVER_USER@$SERVER_HOST" "find $HTDOCS_PATH -type d 2>/dev/null | wc -l" 2>&1
Write-Host "   Files: $fileCount" -ForegroundColor Green
Write-Host "   Directories: $dirCount" -ForegroundColor Green

Write-Host ""

# List backup files
Write-Host "4. Listing backup files in $BACKUPS_PATH..." -ForegroundColor Yellow
$backupCount = ssh "$SERVER_USER@$SERVER_HOST" "ls -1 $BACKUPS_PATH 2>/dev/null | wc -l" 2>&1
Write-Host "   Total backup folders: $backupCount" -ForegroundColor Cyan
Write-Host ""
Write-Host "   Backup folders (sorted by date):" -ForegroundColor Cyan
$backups = ssh "$SERVER_USER@$SERVER_HOST" "ls -lht $BACKUPS_PATH | head -20" 2>&1
if ($LASTEXITCODE -eq 0) {
    Write-Host $backups
} else {
    Write-Host "   ❌ Cannot access $BACKUPS_PATH" -ForegroundColor Red
}

Write-Host ""

# Calculate backup disk usage
Write-Host "5. Calculating backup disk usage..." -ForegroundColor Yellow
$backupSize = ssh "$SERVER_USER@$SERVER_HOST" "du -sh $BACKUPS_PATH 2>/dev/null | awk '{print `$1}'" 2>&1
$htdocsSize = ssh "$SERVER_USER@$SERVER_HOST" "du -sh $HTDOCS_PATH 2>/dev/null | awk '{print `$1}'" 2>&1
Write-Host "   Web directory size: $htdocsSize" -ForegroundColor Cyan
Write-Host "   Backups directory size: $backupSize" -ForegroundColor Cyan

Write-Host ""

# Check for backup scripts/cron jobs
Write-Host "6. Checking for automated backup scripts..." -ForegroundColor Yellow
$cronJobs = ssh "$SERVER_USER@$SERVER_HOST" "crontab -l 2>/dev/null | grep -i backup || echo 'No backup cron jobs found'" 2>&1
Write-Host "   Cron jobs related to backups:" -ForegroundColor Cyan
Write-Host $cronJobs

Write-Host ""

# Check for backup scripts in common locations
Write-Host "7. Searching for backup scripts..." -ForegroundColor Yellow
$backupScripts = ssh "$SERVER_USER@$SERVER_HOST" "find /home/$SERVER_USER -name '*backup*' -type f 2>/dev/null | head -10" 2>&1
if ($backupScripts -and $backupScripts -notmatch "No such file") {
    Write-Host "   Found backup scripts:" -ForegroundColor Cyan
    Write-Host $backupScripts
} else {
    Write-Host "   ⚠️  No backup scripts found in home directory" -ForegroundColor Yellow
}

Write-Host ""

# List all directories in home
Write-Host "8. Listing all directories in /home/$SERVER_USER..." -ForegroundColor Yellow
$homeDirs = ssh "$SERVER_USER@$SERVER_HOST" "ls -lah /home/$SERVER_USER" 2>&1
Write-Host $homeDirs

Write-Host ""

# Check disk space
Write-Host "9. Checking disk space..." -ForegroundColor Yellow
$diskSpace = ssh "$SERVER_USER@$SERVER_HOST" "df -h" 2>&1
Write-Host $diskSpace

Write-Host ""
Write-Host "================================================" -ForegroundColor Cyan
Write-Host "✅ Server files check complete!" -ForegroundColor Green
Write-Host ""
Write-Host "Recommendations:" -ForegroundColor Yellow
Write-Host "1. If backups are taking too much space, consider:"
Write-Host "   - Keeping only the last 7-14 days of backups"
Write-Host "   - Compressing old backups"
Write-Host "   - Moving backups to S3 or other storage"
Write-Host ""
Write-Host "2. To clean up old backups (keep last 7 days):"
Write-Host "   ssh $SERVER_USER@$SERVER_HOST 'find $BACKUPS_PATH -type d -mtime +7 -exec rm -rf {} \;'"
Write-Host ""
Write-Host "3. To see detailed file listing:"
Write-Host "   ssh $SERVER_USER@$SERVER_HOST 'tree -L 3 $HTDOCS_PATH'"

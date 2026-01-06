#!/bin/bash

# BioCAN Landing Page - Server Files Diagnostic Script
# This script lists all files on your server and checks backup configuration

echo "🔍 BioCAN Landing Page - Server Files Diagnostic"
echo "================================================"
echo ""

# Colors
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
CYAN='\033[0;36m'
NC='\033[0m' # No Color

# Configuration - Update these with your server details
SERVER_USER="${SERVER_USER:-bitnami}"
SERVER_HOST="${SERVER_HOST:-your-server-ip}"
HTDOCS_PATH="${HTDOCS_PATH:-/home/bitnami/htdocs}"
BACKUPS_PATH="${BACKUPS_PATH:-/home/bitnami/htdocs-backups}"

echo -e "${YELLOW}Server Configuration:${NC}"
echo "  User: $SERVER_USER"
echo "  Host: $SERVER_HOST"
echo "  Web Root: $HTDOCS_PATH"
echo "  Backups: $BACKUPS_PATH"
echo ""

# Check if SSH connection works
echo -e "${YELLOW}1. Testing SSH connection...${NC}"
if ssh -o ConnectTimeout=5 "$SERVER_USER@$SERVER_HOST" "echo 'Connected'" 2>/dev/null; then
    echo -e "${GREEN}   ✅ SSH connection successful${NC}"
else
    echo -e "${RED}   ❌ Cannot connect via SSH${NC}"
    echo -e "${YELLOW}   Please update SERVER_USER and SERVER_HOST variables${NC}"
    echo -e "${YELLOW}   Or run: ssh $SERVER_USER@$SERVER_HOST${NC}"
    exit 1
fi

echo ""

# List main htdocs directory
echo -e "${YELLOW}2. Listing files in main web directory ($HTDOCS_PATH)...${NC}"
echo -e "${CYAN}   Directory structure:${NC}"
ssh "$SERVER_USER@$SERVER_HOST" "ls -lah $HTDOCS_PATH" 2>/dev/null || echo -e "${RED}   ❌ Cannot access $HTDOCS_PATH${NC}"

echo ""

# Count files in htdocs
echo -e "${YELLOW}3. Counting files in web directory...${NC}"
FILE_COUNT=$(ssh "$SERVER_USER@$SERVER_HOST" "find $HTDOCS_PATH -type f 2>/dev/null | wc -l" 2>/dev/null)
DIR_COUNT=$(ssh "$SERVER_USER@$SERVER_HOST" "find $HTDOCS_PATH -type d 2>/dev/null | wc -l" 2>/dev/null)
echo -e "${GREEN}   Files: $FILE_COUNT${NC}"
echo -e "${GREEN}   Directories: $DIR_COUNT${NC}"

echo ""

# List backup files
echo -e "${YELLOW}4. Listing backup files in $BACKUPS_PATH...${NC}"
BACKUP_COUNT=$(ssh "$SERVER_USER@$SERVER_HOST" "ls -1 $BACKUPS_PATH 2>/dev/null | wc -l" 2>/dev/null)
echo -e "${CYAN}   Total backup folders: $BACKUP_COUNT${NC}"
echo ""
echo -e "${CYAN}   Backup folders (sorted by date):${NC}"
ssh "$SERVER_USER@$SERVER_HOST" "ls -lht $BACKUPS_PATH | head -20" 2>/dev/null || echo -e "${RED}   ❌ Cannot access $BACKUPS_PATH${NC}"

echo ""

# Calculate backup disk usage
echo -e "${YELLOW}5. Calculating backup disk usage...${NC}"
BACKUP_SIZE=$(ssh "$SERVER_USER@$SERVER_HOST" "du -sh $BACKUPS_PATH 2>/dev/null | awk '{print \$1}'" 2>/dev/null)
HTDOCS_SIZE=$(ssh "$SERVER_USER@$SERVER_HOST" "du -sh $HTDOCS_PATH 2>/dev/null | awk '{print \$1}'" 2>/dev/null)
echo -e "${CYAN}   Web directory size: $HTDOCS_SIZE${NC}"
echo -e "${CYAN}   Backups directory size: $BACKUP_SIZE${NC}"

echo ""

# Check for backup scripts/cron jobs
echo -e "${YELLOW}6. Checking for automated backup scripts...${NC}"
CRON_JOBS=$(ssh "$SERVER_USER@$SERVER_HOST" "crontab -l 2>/dev/null | grep -i backup || echo 'No backup cron jobs found'" 2>/dev/null)
echo -e "${CYAN}   Cron jobs related to backups:${NC}"
echo "$CRON_JOBS"

echo ""

# Check for backup scripts in common locations
echo -e "${YELLOW}7. Searching for backup scripts...${NC}"
BACKUP_SCRIPTS=$(ssh "$SERVER_USER@$SERVER_HOST" "find /home/$SERVER_USER -name '*backup*' -type f 2>/dev/null | head -10" 2>/dev/null)
if [ ! -z "$BACKUP_SCRIPTS" ]; then
    echo -e "${CYAN}   Found backup scripts:${NC}"
    echo "$BACKUP_SCRIPTS"
else
    echo -e "${YELLOW}   ⚠️  No backup scripts found in home directory${NC}"
fi

echo ""

# List all directories in home
echo -e "${YELLOW}8. Listing all directories in /home/$SERVER_USER...${NC}"
ssh "$SERVER_USER@$SERVER_HOST" "ls -lah /home/$SERVER_USER" 2>/dev/null

echo ""

# Check disk space
echo -e "${YELLOW}9. Checking disk space...${NC}"
ssh "$SERVER_USER@$SERVER_HOST" "df -h" 2>/dev/null

echo ""
echo "================================================"
echo -e "${GREEN}✅ Server files check complete!${NC}"
echo ""
echo -e "${YELLOW}Recommendations:${NC}"
echo "1. If backups are taking too much space, consider:"
echo "   - Keeping only the last 7-14 days of backups"
echo "   - Compressing old backups"
echo "   - Moving backups to S3 or other storage"
echo ""
echo "2. To clean up old backups (keep last 7 days):"
echo "   ssh $SERVER_USER@$SERVER_HOST 'find $BACKUPS_PATH -type d -mtime +7 -exec rm -rf {} \;'"
echo ""
echo "3. To see detailed file listing:"
echo "   ssh $SERVER_USER@$SERVER_HOST 'tree -L 3 $HTDOCS_PATH'"

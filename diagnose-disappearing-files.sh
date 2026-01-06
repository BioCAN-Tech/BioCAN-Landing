#!/bin/bash

# BioCAN Landing Page - Diagnose Disappearing Files Issue
# This script checks why files disappear after deployment

# Configuration
SERVER_USER="${SERVER_USER:-bitnami}"
SERVER_HOST="${SERVER_HOST:-your-server-ip}"
APACHE_ROOT="${APACHE_ROOT:-/opt/bitnami/apache2/htdocs}"
BACKUPS_DIR="${BACKUPS_DIR:-/home/bitnami/htdocs-backups}"

# Colors
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
CYAN='\033[0;36m'
NC='\033[0m'

echo -e "${CYAN}🔍 Diagnosing Disappearing Files Issue${NC}"
echo "================================================"
echo ""

# 1. Check if files exist in Apache root
echo -e "${YELLOW}1. Checking files in Apache root ($APACHE_ROOT)...${NC}"
FILES_EXIST=$(ssh "$SERVER_USER@$SERVER_HOST" "ls -la $APACHE_ROOT 2>/dev/null | head -10" 2>/dev/null)
if [ ! -z "$FILES_EXIST" ]; then
    echo -e "${GREEN}   ✅ Files exist:${NC}"
    echo "$FILES_EXIST"
else
    echo -e "${RED}   ❌ NO FILES FOUND in $APACHE_ROOT${NC}"
fi

echo ""

# 2. Check file count
echo -e "${YELLOW}2. Counting files...${NC}"
FILE_COUNT=$(ssh "$SERVER_USER@$SERVER_HOST" "find $APACHE_ROOT -type f 2>/dev/null | wc -l" 2>/dev/null)
echo -e "   Total files: $FILE_COUNT"

if [ "$FILE_COUNT" -eq 0 ]; then
    echo -e "${RED}   ❌ Directory is EMPTY!${NC}"
fi

echo ""

# 3. Check for cron jobs that might be interfering
echo -e "${YELLOW}3. Checking cron jobs...${NC}"
CRON_JOBS=$(ssh "$SERVER_USER@$SERVER_HOST" "crontab -l 2>/dev/null" 2>/dev/null)
if [ ! -z "$CRON_JOBS" ]; then
    echo -e "${CYAN}   Active cron jobs:${NC}"
    echo "$CRON_JOBS"
    
    # Check for suspicious patterns
    if echo "$CRON_JOBS" | grep -qi "htdocs\|apache\|backup\|restore\|cleanup"; then
        echo -e "${RED}   ⚠️  Found cron jobs that might affect htdocs!${NC}"
    fi
else
    echo -e "${GREEN}   ✅ No cron jobs found${NC}"
fi

echo ""

# 4. Check system-wide cron jobs
echo -e "${YELLOW}4. Checking system cron jobs...${NC}"
SYSTEM_CRON=$(ssh "$SERVER_USER@$SERVER_HOST" "sudo cat /etc/crontab 2>/dev/null | grep -v '^#' | grep -v '^$'" 2>/dev/null)
if [ ! -z "$SYSTEM_CRON" ]; then
    echo -e "${CYAN}   System cron jobs:${NC}"
    echo "$SYSTEM_CRON"
fi

# Check cron.d directory
CRON_D=$(ssh "$SERVER_USER@$SERVER_HOST" "sudo ls -la /etc/cron.d/ 2>/dev/null" 2>/dev/null)
if [ ! -z "$CRON_D" ]; then
    echo -e "${CYAN}   Files in /etc/cron.d/:${NC}"
    echo "$CRON_D"
fi

echo ""

# 5. Check for backup/restore scripts
echo -e "${YELLOW}5. Searching for backup/restore scripts...${NC}"
SCRIPTS=$(ssh "$SERVER_USER@$SERVER_HOST" "find /home/$SERVER_USER -name '*.sh' -o -name '*.py' 2>/dev/null | head -20" 2>/dev/null)
if [ ! -z "$SCRIPTS" ]; then
    echo -e "${CYAN}   Found scripts:${NC}"
    echo "$SCRIPTS" | while read -r script; do
        if [ ! -z "$script" ]; then
            echo -e "   - $script"
            # Check if script mentions htdocs
            CONTENT=$(ssh "$SERVER_USER@$SERVER_HOST" "grep -i 'htdocs\|apache\|backup\|restore' '$script' 2>/dev/null" 2>/dev/null)
            if [ ! -z "$CONTENT" ]; then
                echo -e "${RED}      ⚠️  This script might affect htdocs!${NC}"
                echo -e "      Relevant lines:"
                echo "$CONTENT" | sed 's/^/      /'
            fi
        fi
    done
fi

echo ""

# 6. Check Apache error logs
echo -e "${YELLOW}6. Checking recent Apache error logs...${NC}"
APACHE_ERRORS=$(ssh "$SERVER_USER@$SERVER_HOST" "sudo tail -50 /opt/bitnami/apache2/logs/error_log 2>/dev/null | grep -i 'htdocs\|permission\|denied\|not found'" 2>/dev/null)
if [ ! -z "$APACHE_ERRORS" ]; then
    echo -e "${CYAN}   Recent errors:${NC}"
    echo "$APACHE_ERRORS"
else
    echo -e "${GREEN}   ✅ No relevant errors in recent logs${NC}"
fi

echo ""

# 7. Check Apache access logs for 404s
echo -e "${YELLOW}7. Checking Apache access logs for 404 errors...${NC}"
ACCESS_404=$(ssh "$SERVER_USER@$SERVER_HOST" "sudo tail -100 /opt/bitnami/apache2/logs/access_log 2>/dev/null | grep ' 404 '" 2>/dev/null | tail -10)
if [ ! -z "$ACCESS_404" ]; then
    echo -e "${CYAN}   Recent 404 errors:${NC}"
    echo "$ACCESS_404"
fi

echo ""

# 8. Check if Apache is running
echo -e "${YELLOW}8. Checking Apache status...${NC}"
APACHE_STATUS=$(ssh "$SERVER_USER@$SERVER_HOST" "sudo /opt/bitnami/ctlscript.sh status apache 2>/dev/null" 2>/dev/null)
echo "$APACHE_STATUS"

echo ""

# 9. Check disk space
echo -e "${YELLOW}9. Checking disk space...${NC}"
DISK_SPACE=$(ssh "$SERVER_USER@$SERVER_HOST" "df -h" 2>/dev/null)
echo "$DISK_SPACE"

# Check if disk is full
DISK_USAGE=$(ssh "$SERVER_USER@$SERVER_HOST" "df -h / | tail -1 | awk '{print \$5}' | sed 's/%//'" 2>/dev/null)
if [ ! -z "$DISK_USAGE" ] && [ "$DISK_USAGE" -gt 90 ]; then
    echo -e "${RED}   ⚠️  Disk usage is ${DISK_USAGE}% - might be causing issues!${NC}"
fi

echo ""

# 10. Check file permissions
echo -e "${YELLOW}10. Checking file permissions...${NC}"
PERMISSIONS=$(ssh "$SERVER_USER@$SERVER_HOST" "ls -la $APACHE_ROOT 2>/dev/null | head -5" 2>/dev/null)
if [ ! -z "$PERMISSIONS" ]; then
    echo -e "${CYAN}   Current permissions:${NC}"
    echo "$PERMISSIONS"
else
    echo -e "${RED}   ❌ Cannot check permissions - directory might not exist${NC}"
fi

echo ""

# 11. Check if there's a symlink
echo -e "${YELLOW}11. Checking for symbolic links...${NC}"
SYMLINK=$(ssh "$SERVER_USER@$SERVER_HOST" "ls -la $APACHE_ROOT 2>/dev/null | grep '^l'" 2>/dev/null)
if [ ! -z "$SYMLINK" ]; then
    echo -e "${CYAN}   Found symlink:${NC}"
    echo "$SYMLINK"
    echo -e "${YELLOW}   ⚠️  Symlink detected - checking target...${NC}"
    TARGET=$(ssh "$SERVER_USER@$SERVER_HOST" "readlink -f $APACHE_ROOT 2>/dev/null" 2>/dev/null)
    echo -e "   Target: $TARGET"
    TARGET_EXISTS=$(ssh "$SERVER_USER@$SERVER_HOST" "test -d '$TARGET' && echo 'exists' || echo 'missing'" 2>/dev/null)
    if [ "$TARGET_EXISTS" = "missing" ]; then
        echo -e "${RED}   ❌ Symlink target does not exist!${NC}"
    fi
fi

echo ""

# 12. Check recent file modifications
echo -e "${YELLOW}12. Checking recent file modifications in htdocs...${NC}"
RECENT_CHANGES=$(ssh "$SERVER_USER@$SERVER_HOST" "find $APACHE_ROOT -type f -mmin -30 2>/dev/null | head -10" 2>/dev/null)
if [ ! -z "$RECENT_CHANGES" ]; then
    echo -e "${CYAN}   Files modified in last 30 minutes:${NC}"
    echo "$RECENT_CHANGES"
else
    echo -e "${YELLOW}   No files modified in last 30 minutes${NC}"
fi

echo ""

# 13. Check if another deployment is running
echo -e "${YELLOW}13. Checking for running deployment processes...${NC}"
DEPLOY_PROCESSES=$(ssh "$SERVER_USER@$SERVER_HOST" "ps aux | grep -i 'deploy\|rsync\|tar\|scp\|git' | grep -v grep" 2>/dev/null)
if [ ! -z "$DEPLOY_PROCESSES" ]; then
    echo -e "${CYAN}   Active deployment processes:${NC}"
    echo "$DEPLOY_PROCESSES"
    echo -e "${YELLOW}   ⚠️  Another deployment might be running!${NC}"
else
    echo -e "${GREEN}   ✅ No deployment processes running${NC}"
fi

echo ""
echo "================================================"
echo -e "${GREEN}✅ Diagnostic complete!${NC}"
echo ""
echo -e "${YELLOW}Common causes of disappearing files:${NC}"
echo "1. Cron job restoring from backup"
echo "2. Another deployment overwriting files"
echo "3. Disk space cleanup script"
echo "4. Apache restart clearing files"
echo "5. Symlink pointing to wrong location"
echo "6. File permissions preventing access"

#!/bin/bash

# BioCAN Landing Page - Backup Cleanup Script
# This script helps manage old backup files

# Configuration
BACKUPS_PATH="${BACKUPS_PATH:-/home/bitnami/htdocs-backups}"
SERVER_USER="${SERVER_USER:-bitnami}"
SERVER_HOST="${SERVER_HOST:-your-server-ip}"
KEEP_DAYS="${KEEP_DAYS:-7}"

# Colors
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
CYAN='\033[0;36m'
NC='\033[0m'

echo -e "${CYAN}🗑️  BioCAN Landing Page - Backup Cleanup${NC}"
echo "================================================"
echo ""

# Count current backups
echo -e "${YELLOW}Current backup status:${NC}"
BACKUP_COUNT=$(ssh "$SERVER_USER@$SERVER_HOST" "ls -1 $BACKUPS_PATH 2>/dev/null | wc -l" 2>/dev/null)
BACKUP_SIZE=$(ssh "$SERVER_USER@$SERVER_HOST" "du -sh $BACKUPS_PATH 2>/dev/null | awk '{print \$1}'" 2>/dev/null)
echo -e "  Total backups: $BACKUP_COUNT"
echo -e "  Total size: $BACKUP_SIZE"
echo ""

# List backups older than KEEP_DAYS
echo -e "${YELLOW}Backups older than $KEEP_DAYS days (will be deleted):${NC}"
OLD_BACKUPS=$(ssh "$SERVER_USER@$SERVER_HOST" "find $BACKUPS_PATH -type d -mtime +$KEEP_DAYS -name 'htdocs-*' 2>/dev/null" 2>/dev/null)
if [ ! -z "$OLD_BACKUPS" ]; then
    echo "$OLD_BACKUPS" | while read -r backup; do
        BACKUP_DATE=$(ssh "$SERVER_USER@$SERVER_HOST" "stat -c %y '$backup' 2>/dev/null | cut -d' ' -f1" 2>/dev/null)
        BACKUP_SIZE=$(ssh "$SERVER_USER@$SERVER_HOST" "du -sh '$backup' 2>/dev/null | awk '{print \$1}'" 2>/dev/null)
        echo -e "  - $(basename $backup) (Date: $BACKUP_DATE, Size: $BACKUP_SIZE)"
    done
    OLD_COUNT=$(echo "$OLD_BACKUPS" | wc -l)
    echo ""
    echo -e "${YELLOW}Total old backups to delete: $OLD_COUNT${NC}"
    echo ""
    
    # Ask for confirmation
    read -p "Do you want to delete these old backups? (yes/no): " confirm
    if [ "$confirm" = "yes" ]; then
        echo -e "${YELLOW}Deleting old backups...${NC}"
        echo "$OLD_BACKUPS" | while read -r backup; do
            echo -e "  Deleting: $(basename $backup)"
            ssh "$SERVER_USER@$SERVER_HOST" "rm -rf '$backup'" 2>/dev/null
        done
        echo -e "${GREEN}✅ Old backups deleted successfully${NC}"
        
        # Show new status
        echo ""
        NEW_BACKUP_COUNT=$(ssh "$SERVER_USER@$SERVER_HOST" "ls -1 $BACKUPS_PATH 2>/dev/null | wc -l" 2>/dev/null)
        NEW_BACKUP_SIZE=$(ssh "$SERVER_USER@$SERVER_HOST" "du -sh $BACKUPS_PATH 2>/dev/null | awk '{print \$1}'" 2>/dev/null)
        echo -e "${GREEN}New backup status:${NC}"
        echo -e "  Remaining backups: $NEW_BACKUP_COUNT"
        echo -e "  Remaining size: $NEW_BACKUP_SIZE"
    else
        echo -e "${YELLOW}Cleanup cancelled${NC}"
    fi
else
    echo -e "${GREEN}  ✅ No old backups found. All backups are within $KEEP_DAYS days.${NC}"
fi

echo ""
echo "================================================"
echo -e "${GREEN}✅ Cleanup check complete!${NC}"

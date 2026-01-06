#!/bin/bash

# Diagnose why files disappear from htdocs after deployment
# This is for the BioCAN Landing page (static files in Apache htdocs)

SERVER_USER="${SERVER_USER:-bitnami}"
SERVER_HOST="${SERVER_HOST:-your-server-ip}"
APACHE_HTDOCS="/opt/bitnami/apache2/htdocs"

echo "🔍 Diagnosing htdocs Disappearing Files Issue"
echo "================================================"
echo "Target: BioCAN Landing Page (Apache htdocs)"
echo "Location: $APACHE_HTDOCS"
echo ""

# 1. Check if files exist RIGHT NOW
echo "1. Checking current files in htdocs..."
FILES=$(ssh "$SERVER_USER@$SERVER_HOST" "ls -la $APACHE_HTDOCS 2>/dev/null | head -20" 2>/dev/null)
if [ ! -z "$FILES" ]; then
    echo "   ✅ Files currently exist:"
    echo "$FILES"
else
    echo "   ❌ NO FILES FOUND in htdocs"
fi

FILE_COUNT=$(ssh "$SERVER_USER@$SERVER_HOST" "find $APACHE_HTDOCS -type f 2>/dev/null | wc -l" 2>/dev/null)
echo "   Total files: $FILE_COUNT"
echo ""

# 2. Check for cron jobs that might restore/cleanup htdocs
echo "2. Checking for cron jobs affecting htdocs..."
echo ""

# User cron
USER_CRON=$(ssh "$SERVER_USER@$SERVER_HOST" "crontab -l 2>/dev/null" 2>/dev/null)
if [ ! -z "$USER_CRON" ]; then
    echo "   User cron jobs:"
    echo "$USER_CRON" | grep -iE 'htdocs|apache|backup|restore|cleanup' || echo "   (No htdocs-related cron jobs)"
else
    echo "   No user cron jobs"
fi

# System cron
SYSTEM_CRON=$(ssh "$SERVER_USER@$SERVER_HOST" "sudo cat /etc/crontab 2>/dev/null | grep -v '^#' | grep -v '^$'" 2>/dev/null)
if [ ! -z "$SYSTEM_CRON" ]; then
    echo "   System cron jobs:"
    echo "$SYSTEM_CRON" | grep -iE 'htdocs|apache|backup|restore|cleanup' || echo "   (No htdocs-related system cron)"
fi

# Cron.d directory
CRON_D=$(ssh "$SERVER_USER@$SERVER_HOST" "sudo ls -la /etc/cron.d/ 2>/dev/null" 2>/dev/null)
if [ ! -z "$CRON_D" ]; then
    echo "   Files in /etc/cron.d/:"
    echo "$CRON_D"
    
    # Check each cron.d file
    CRON_FILES=$(ssh "$SERVER_USER@$SERVER_HOST" "sudo ls /etc/cron.d/ 2>/dev/null" 2>/dev/null)
    if [ ! -z "$CRON_FILES" ]; then
        echo "$CRON_FILES" | while read -r cron_file; do
            if [ ! -z "$cron_file" ]; then
                CONTENT=$(ssh "$SERVER_USER@$SERVER_HOST" "sudo cat /etc/cron.d/$cron_file 2>/dev/null | grep -iE 'htdocs|apache|backup|restore'" 2>/dev/null)
                if [ ! -z "$CONTENT" ]; then
                    echo "   ⚠️  Found in /etc/cron.d/$cron_file:"
                    echo "$CONTENT"
                fi
            fi
        done
    fi
fi

echo ""

# 3. Check for backup/restore scripts
echo "3. Searching for backup/restore scripts..."
SCRIPTS=$(ssh "$SERVER_USER@$SERVER_HOST" "find /home/$SERVER_USER -name '*.sh' -o -name '*.py' 2>/dev/null | head -20" 2>/dev/null)
if [ ! -z "$SCRIPTS" ]; then
    echo "$SCRIPTS" | while read -r script; do
        if [ ! -z "$script" ]; then
            # Check if script mentions htdocs
            CONTENT=$(ssh "$SERVER_USER@$SERVER_HOST" "grep -iE 'htdocs|apache.*htdocs|/opt/bitnami/apache2' '$script' 2>/dev/null" 2>/dev/null)
            if [ ! -z "$CONTENT" ]; then
                echo "   ⚠️  Found script: $script"
                echo "      Relevant lines:"
                echo "$CONTENT" | sed 's/^/      /'
            fi
        fi
    done
else
    echo "   No scripts found in home directory"
fi

echo ""

# 4. Check Apache configuration
echo "4. Checking Apache DocumentRoot configuration..."
APACHE_CONF=$(ssh "$SERVER_USER@$SERVER_HOST" "sudo grep -r 'DocumentRoot' /opt/bitnami/apache2/conf/ 2>/dev/null | grep -v '#'" 2>/dev/null)
if [ ! -z "$APACHE_CONF" ]; then
    echo "   Apache DocumentRoot settings:"
    echo "$APACHE_CONF"
else
    echo "   Could not read Apache configuration"
fi

echo ""

# 5. Check for symlinks
echo "5. Checking if htdocs is a symlink..."
SYMLINK=$(ssh "$SERVER_USER@$SERVER_HOST" "ls -la $APACHE_HTDOCS 2>/dev/null | head -1" 2>/dev/null)
if echo "$SYMLINK" | grep -q "^l"; then
    echo "   ⚠️  htdocs is a SYMLINK!"
    echo "$SYMLINK"
    TARGET=$(ssh "$SERVER_USER@$SERVER_HOST" "readlink -f $APACHE_HTDOCS 2>/dev/null" 2>/dev/null)
    echo "   Target: $TARGET"
    TARGET_EXISTS=$(ssh "$SERVER_USER@$SERVER_HOST" "test -d '$TARGET' && echo 'exists' || echo 'missing'" 2>/dev/null)
    if [ "$TARGET_EXISTS" = "missing" ]; then
        echo "   ❌ Symlink target does not exist!"
    fi
else
    echo "   ✅ htdocs is a regular directory (not a symlink)"
fi

echo ""

# 6. Check file permissions
echo "6. Checking file permissions..."
PERMISSIONS=$(ssh "$SERVER_USER@$SERVER_HOST" "ls -la $APACHE_HTDOCS 2>/dev/null | head -5" 2>/dev/null)
if [ ! -z "$PERMISSIONS" ]; then
    echo "   Current permissions:"
    echo "$PERMISSIONS"
else
    echo "   ❌ Cannot check permissions - directory might not exist"
fi

echo ""

# 7. Check Apache error logs
echo "7. Checking Apache error logs..."
ERRORS=$(ssh "$SERVER_USER@$SERVER_HOST" "sudo tail -50 /opt/bitnami/apache2/logs/error_log 2>/dev/null | grep -iE 'htdocs|permission|denied|cannot.*read'" 2>/dev/null)
if [ ! -z "$ERRORS" ]; then
    echo "   Recent errors:"
    echo "$ERRORS"
else
    echo "   ✅ No relevant errors in recent logs"
fi

echo ""

# 8. Check for running processes that might modify files
echo "8. Checking for processes that might modify htdocs..."
PROCESSES=$(ssh "$SERVER_USER@$SERVER_HOST" "ps aux | grep -E 'backup|restore|cleanup|rsync|tar.*htdocs|mv.*htdocs|rm.*htdocs' | grep -v grep" 2>/dev/null)
if [ ! -z "$PROCESSES" ]; then
    echo "   ⚠️  Found suspicious processes:"
    echo "$PROCESSES"
else
    echo "   ✅ No suspicious processes running"
fi

echo ""

# 9. Check recent file modifications
echo "9. Checking recent file modifications..."
RECENT=$(ssh "$SERVER_USER@$SERVER_HOST" "find $APACHE_HTDOCS -type f -mmin -60 2>/dev/null | wc -l" 2>/dev/null)
echo "   Files modified in last 60 minutes: $RECENT"

if [ "$RECENT" -gt 0 ]; then
    RECENT_FILES=$(ssh "$SERVER_USER@$SERVER_HOST" "find $APACHE_HTDOCS -type f -mmin -60 2>/dev/null | head -10" 2>/dev/null)
    echo "   Recent files:"
    echo "$RECENT_FILES"
fi

echo ""

# 10. Check disk space
echo "10. Checking disk space..."
DISK=$(ssh "$SERVER_USER@$SERVER_HOST" "df -h / 2>/dev/null | tail -1" 2>/dev/null)
echo "   $DISK"
USAGE=$(echo "$DISK" | awk '{print $5}' | sed 's/%//')
if [ ! -z "$USAGE" ] && [ "$USAGE" -gt 90 ]; then
    echo "   ⚠️  Disk usage is ${USAGE}% - might be causing cleanup!"
fi

echo ""
echo "================================================"
echo "✅ Diagnostic complete!"
echo ""
echo "Most likely causes:"
echo "1. Cron job restoring from backup"
echo "2. Cleanup script removing files"
echo "3. Another deployment overwriting"
echo "4. Symlink pointing to wrong location"
echo "5. File permissions preventing Apache from reading"

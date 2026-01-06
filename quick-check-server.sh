#!/bin/bash

# Quick check - Why files disappear after deployment

SERVER_USER="${SERVER_USER:-bitnami}"
SERVER_HOST="${SERVER_HOST:-your-server-ip}"

echo "🔍 Quick Diagnostic - Disappearing Files"
echo "========================================"
echo ""

echo "1. Checking if files exist NOW..."
ssh "$SERVER_USER@$SERVER_HOST" "ls -la /opt/bitnami/apache2/htdocs | head -10" 2>/dev/null || echo "❌ Cannot access or directory empty"

echo ""
echo "2. Checking for cron jobs..."
ssh "$SERVER_USER@$SERVER_HOST" "crontab -l 2>/dev/null" || echo "No user cron jobs"

echo ""
echo "3. Checking system cron..."
ssh "$SERVER_USER@$SERVER_HOST" "sudo cat /etc/crontab 2>/dev/null | grep -v '^#' | grep -v '^$'" || echo "No system cron"

echo ""
echo "4. Checking for running processes..."
ssh "$SERVER_USER@$SERVER_HOST" "ps aux | grep -E 'backup|restore|cleanup|htdocs' | grep -v grep" || echo "No suspicious processes"

echo ""
echo "5. Checking recent file changes..."
ssh "$SERVER_USER@$SERVER_HOST" "find /opt/bitnami/apache2/htdocs -type f -mmin -10 2>/dev/null | wc -l" || echo "0"

echo ""
echo "6. Checking Apache logs for errors..."
ssh "$SERVER_USER@$SERVER_HOST" "sudo tail -20 /opt/bitnami/apache2/logs/error_log 2>/dev/null | grep -i 'htdocs\|permission'" || echo "No relevant errors"

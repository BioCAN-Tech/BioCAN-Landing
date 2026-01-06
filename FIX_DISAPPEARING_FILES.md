# Fix: Files Disappearing After Deployment

## Problem
Files work for 2 minutes after deployment, then show 404 errors.

## Quick Diagnostic Commands

Run these commands on your server to find the issue:

```bash
# 1. Check if files exist RIGHT NOW
ssh bitnami@your-server "ls -la /opt/bitnami/apache2/htdocs | head -20"

# 2. Check for cron jobs that might restore files
ssh bitnami@your-server "crontab -l"
ssh bitnami@your-server "sudo cat /etc/crontab | grep -v '^#' | grep -v '^$'"
ssh bitnami@your-server "sudo ls -la /etc/cron.d/"

# 3. Check for backup/restore scripts
ssh bitnami@your-server "find /home/bitnami -name '*backup*' -o -name '*restore*' 2>/dev/null"

# 4. Check if another deployment is running
ssh bitnami@your-server "ps aux | grep -E 'deploy|rsync|tar|scp|git' | grep -v grep"

# 5. Check Apache configuration
ssh bitnami@your-server "sudo cat /opt/bitnami/apache2/conf/httpd.conf | grep -i DocumentRoot"
ssh bitnami@your-server "sudo cat /opt/bitnami/apache2/conf/bitnami/bitnami.conf | grep -i DocumentRoot"

# 6. Check for symlinks
ssh bitnami@your-server "ls -la /opt/bitnami/apache2/htdocs"

# 7. Check file permissions
ssh bitnami@your-server "ls -la /opt/bitnami/apache2/htdocs | head -10"

# 8. Check Apache error logs
ssh bitnami@your-server "sudo tail -50 /opt/bitnami/apache2/logs/error_log | grep -i 'htdocs\|permission\|denied'"

# 9. Check recent file modifications
ssh bitnami@your-server "find /opt/bitnami/apache2/htdocs -type f -mmin -30 2>/dev/null | wc -l"
```

## Common Causes & Fixes

### Cause 1: Cron Job Restoring from Backup

**Check:**
```bash
ssh bitnami@your-server "crontab -l"
```

**If found, disable it:**
```bash
ssh bitnami@your-server "crontab -e"
# Comment out or remove the backup restore line
```

### Cause 2: Another Deployment Workflow Running

**Check GitHub Actions:**
- Go to: `https://github.com/your-repo/actions`
- Check if multiple workflows are running simultaneously
- The frontend workflow might be deploying to the same location

**Fix:** Ensure workflows don't conflict. The landing page deploys to `/opt/bitnami/apache2/htdocs` and frontend should deploy elsewhere.

### Cause 3: Apache DocumentRoot Mismatch

**Check:**
```bash
ssh bitnami@your-server "sudo grep -r DocumentRoot /opt/bitnami/apache2/conf/"
```

**Fix:** Ensure DocumentRoot points to `/opt/bitnami/apache2/htdocs`

### Cause 4: File Permissions Issue

**Check:**
```bash
ssh bitnami@your-server "ls -la /opt/bitnami/apache2/htdocs | head -5"
```

**Fix if needed:**
```bash
ssh bitnami@your-server "sudo chmod -R 755 /opt/bitnami/apache2/htdocs"
ssh bitnami@your-server "sudo chown -R bitnami:daemon /opt/bitnami/apache2/htdocs"
```

### Cause 5: Symlink Pointing to Wrong Location

**Check:**
```bash
ssh bitnami@your-server "ls -la /opt/bitnami/apache2/htdocs"
```

**If it's a symlink, check target:**
```bash
ssh bitnami@your-server "readlink -f /opt/bitnami/apache2/htdocs"
```

### Cause 6: Disk Space Cleanup Script

**Check:**
```bash
ssh bitnami@your-server "find /home/bitnami -name '*.sh' -exec grep -l 'htdocs\|apache' {} \;"
```

## Immediate Fix: Re-deploy with Monitoring

1. **Watch the deployment:**
   ```bash
   # In one terminal, watch files
   watch -n 2 'ssh bitnami@your-server "ls -la /opt/bitnami/apache2/htdocs | head -10"'
   
   # In another terminal, trigger deployment
   git push origin main
   ```

2. **Monitor what happens:**
   - Watch if files disappear
   - Check what process removes them
   - Check logs in real-time

## Workflow Fix: Add Verification Step

Add this to your workflow after deployment to verify files stay:

```yaml
- name: Verify deployment persists
  env:
    EC2_HOST: ${{ secrets.EC2_HOST }}
    EC2_USERNAME: ${{ secrets.EC2_USERNAME }}
  run: |
    sleep 30  # Wait 30 seconds
    ssh "$EC2_USERNAME@$EC2_HOST" "test -f /opt/bitnami/apache2/htdocs/index.html && echo '✅ Files still exist' || echo '❌ Files disappeared!'"
```

## Most Likely Cause

Based on the symptoms (works for 2 minutes then disappears), the most likely causes are:

1. **Cron job restoring from backup** (most common)
2. **Another deployment workflow** overwriting files
3. **Apache restart** clearing files (less likely)

Run the diagnostic commands above to identify which one it is!

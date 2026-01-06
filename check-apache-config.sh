#!/bin/bash

# Check Apache configuration to find the correct DocumentRoot

echo "🔍 Checking Apache Configuration"
echo "================================================"
echo ""

# 1. Check which Apache config is active
echo "1. Checking active Apache configuration..."
echo ""

# Check main config
MAIN_CONF=$(sudo grep "^DocumentRoot" /opt/bitnami/apache2/conf/httpd.conf 2>/dev/null | head -1)
echo "   Main httpd.conf: $MAIN_CONF"

# Check bitnami.conf (most likely active)
BITNAMI_CONF=$(sudo grep "DocumentRoot" /opt/bitnami/apache2/conf/bitnami/bitnami.conf 2>/dev/null | grep -v '^#' | head -1)
echo "   bitnami.conf: $BITNAMI_CONF"

# Check SSL config
SSL_CONF=$(sudo grep "DocumentRoot" /opt/bitnami/apache2/conf/bitnami/bitnami-ssl.conf 2>/dev/null | grep -v '^#' | head -1)
echo "   bitnami-ssl.conf: $SSL_CONF"

echo ""

# 2. Check if directories exist
echo "2. Checking which directories exist..."
echo ""

if [ -d "/opt/bitnami/apache/htdocs" ]; then
    FILE_COUNT=$(find /opt/bitnami/apache/htdocs -type f 2>/dev/null | wc -l)
    echo "   ✅ /opt/bitnami/apache/htdocs exists ($FILE_COUNT files)"
    ls -la /opt/bitnami/apache/htdocs | head -5
else
    echo "   ❌ /opt/bitnami/apache/htdocs does NOT exist"
fi

echo ""

if [ -d "/opt/bitnami/apache2/htdocs" ]; then
    FILE_COUNT=$(find /opt/bitnami/apache2/htdocs -type f 2>/dev/null | wc -l)
    echo "   ✅ /opt/bitnami/apache2/htdocs exists ($FILE_COUNT files)"
    ls -la /opt/bitnami/apache2/htdocs | head -5
else
    echo "   ❌ /opt/bitnami/apache2/htdocs does NOT exist"
fi

echo ""

# 3. Check if there's a symlink
echo "3. Checking for symlinks..."
echo ""

if [ -L "/opt/bitnami/apache/htdocs" ]; then
    TARGET=$(readlink -f /opt/bitnami/apache/htdocs)
    echo "   ⚠️  /opt/bitnami/apache/htdocs is a symlink"
    echo "   Target: $TARGET"
elif [ -L "/opt/bitnami/apache2/htdocs" ]; then
    TARGET=$(readlink -f /opt/bitnami/apache2/htdocs)
    echo "   ⚠️  /opt/bitnami/apache2/htdocs is a symlink"
    echo "   Target: $TARGET"
else
    echo "   ✅ No symlinks found"
fi

echo ""

# 4. Check Apache process to see what it's actually using
echo "4. Checking running Apache process..."
echo ""

APACHE_CMD=$(ps aux | grep httpd | grep -v grep | head -1)
echo "   Apache command: $APACHE_CMD"

# Try to get config file from process
APACHE_CONFIG=$(ps aux | grep httpd | grep -v grep | grep -oP '\-f \K[^\s]+' | head -1)
if [ ! -z "$APACHE_CONFIG" ]; then
    echo "   Config file: $APACHE_CONFIG"
    ACTIVE_DOCROOT=$(sudo grep "^DocumentRoot\|^[[:space:]]*DocumentRoot" "$APACHE_CONFIG" 2>/dev/null | grep -v '^#' | head -1)
    echo "   Active DocumentRoot from config: $ACTIVE_DOCROOT"
fi

echo ""

# 5. Test which directory Apache is serving
echo "5. Testing which directory Apache is actually serving..."
echo ""

# Create test files
sudo touch /opt/bitnami/apache/htdocs/test-apache.txt 2>/dev/null
sudo touch /opt/bitnami/apache2/htdocs/test-apache2.txt 2>/dev/null

echo "   Created test files:"
echo "   - /opt/bitnami/apache/htdocs/test-apache.txt"
echo "   - /opt/bitnami/apache2/htdocs/test-apache2.txt"
echo ""
echo "   Now test in browser:"
echo "   - http://your-domain/test-apache.txt"
echo "   - http://your-domain/test-apache2.txt"
echo "   (Whichever one works is the correct directory)"

echo ""
echo "================================================"
echo "✅ Check complete!"

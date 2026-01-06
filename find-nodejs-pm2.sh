#!/bin/bash

# Find Node.js and install PM2 on Bitnami server

SERVER_USER="${SERVER_USER:-bitnami}"
SERVER_HOST="${SERVER_HOST:-your-server-ip}"

echo "🔍 Finding Node.js and npm..."
echo "================================================"
echo ""

# 1. Check common Node.js locations
echo "1. Checking common Node.js locations..."
echo ""

# Check if node/npm are in PATH but need full path
NODE_PATH=$(ssh "$SERVER_USER@$SERVER_HOST" "which node 2>/dev/null || find /opt -name node 2>/dev/null | head -1 || find /usr -name node 2>/dev/null | head -1" 2>/dev/null)
NPM_PATH=$(ssh "$SERVER_USER@$SERVER_HOST" "which npm 2>/dev/null || find /opt -name npm 2>/dev/null | head -1 || find /usr -name npm 2>/dev/null | head -1" 2>/dev/null)

if [ ! -z "$NODE_PATH" ]; then
    echo "   ✅ Found Node.js at: $NODE_PATH"
    ssh "$SERVER_USER@$SERVER_HOST" "$NODE_PATH --version" 2>/dev/null
else
    echo "   ❌ Node.js not found in common locations"
fi

if [ ! -z "$NPM_PATH" ]; then
    echo "   ✅ Found npm at: $NPM_PATH"
    ssh "$SERVER_USER@$SERVER_HOST" "$NPM_PATH --version" 2>/dev/null
else
    echo "   ❌ npm not found in common locations"
fi

echo ""

# 2. Check Bitnami-specific locations
echo "2. Checking Bitnami-specific locations..."
echo ""

BITNAMI_NODE=$(ssh "$SERVER_USER@$SERVER_HOST" "
    if [ -f /opt/bitnami/node/bin/node ]; then
        echo '/opt/bitnami/node/bin/node'
    elif [ -f /home/bitnami/.nvm/versions/node/*/bin/node ]; then
        find /home/bitnami/.nvm/versions/node -name node 2>/dev/null | head -1
    elif [ -f /usr/local/bin/node ]; then
        echo '/usr/local/bin/node'
    else
        echo 'NOT_FOUND'
    fi
" 2>/dev/null)

if [ "$BITNAMI_NODE" != "NOT_FOUND" ] && [ ! -z "$BITNAMI_NODE" ]; then
    echo "   ✅ Found Node.js at: $BITNAMI_NODE"
    NODE_VERSION=$(ssh "$SERVER_USER@$SERVER_HOST" "$BITNAMI_NODE --version" 2>/dev/null)
    echo "   Version: $NODE_VERSION"
    
    # Find npm in same directory
    BITNAMI_NPM=$(echo "$BITNAMI_NODE" | sed 's/node$/npm/')
    if ssh "$SERVER_USER@$SERVER_HOST" "test -f '$BITNAMI_NPM'" 2>/dev/null; then
        echo "   ✅ Found npm at: $BITNAMI_NPM"
        NPM_VERSION=$(ssh "$SERVER_USER@$SERVER_HOST" "$BITNAMI_NPM --version" 2>/dev/null)
        echo "   Version: $NPM_VERSION"
        
        echo ""
        echo "3. Installing PM2 using found npm..."
        ssh "$SERVER_USER@$SERVER_HOST" "$BITNAMI_NPM install -g pm2" 2>&1
        
        echo ""
        echo "4. Verifying PM2 installation..."
        PM2_PATH=$(echo "$BITNAMI_NODE" | sed 's|/node$|/pm2|')
        if ssh "$SERVER_USER@$SERVER_HOST" "test -f '$PM2_PATH'" 2>/dev/null; then
            echo "   ✅ PM2 installed at: $PM2_PATH"
            ssh "$SERVER_USER@$SERVER_HOST" "$PM2_PATH --version" 2>/dev/null
        else
            # Try to find pm2
            PM2_PATH=$(ssh "$SERVER_USER@$SERVER_HOST" "find $(dirname $BITNAMI_NODE) -name pm2 2>/dev/null | head -1" 2>/dev/null)
            if [ ! -z "$PM2_PATH" ]; then
                echo "   ✅ PM2 found at: $PM2_PATH"
            fi
        fi
    fi
else
    echo "   ❌ Node.js not found in Bitnami locations"
fi

echo ""

# 3. Check PATH
echo "5. Checking PATH environment variable..."
PATH_CHECK=$(ssh "$SERVER_USER@$SERVER_HOST" "echo \$PATH" 2>/dev/null)
echo "   PATH: $PATH_CHECK"
echo ""

# 4. Check if nvm is installed
echo "6. Checking for nvm (Node Version Manager)..."
NVM_CHECK=$(ssh "$SERVER_USER@$SERVER_HOST" "source ~/.nvm/nvm.sh 2>/dev/null && nvm --version 2>&1 || echo 'nvm not found'" 2>/dev/null)
echo "   $NVM_CHECK"
echo ""

echo "================================================"
echo "✅ Check complete!"
echo ""
echo "If Node.js was found, PM2 should now be installed."
echo "To use PM2, you may need to use the full path or add to PATH."

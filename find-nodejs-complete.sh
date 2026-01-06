#!/bin/bash

# Complete Node.js detection script for Bitnami server

echo "🔍 Complete Node.js Detection"
echo "================================================"
echo ""

# 1. Check all common locations
echo "1. Checking common Node.js locations..."
echo ""

LOCATIONS=(
    "/opt/bitnami/node/bin/node"
    "/usr/local/bin/node"
    "/usr/bin/node"
    "/home/bitnami/.nvm/versions/node/*/bin/node"
    "/opt/node/bin/node"
    "/var/lib/node/bin/node"
)

FOUND=false
for location in "${LOCATIONS[@]}"; do
    if [ -f "$location" ] 2>/dev/null || find $(dirname "$location" 2>/dev/null) -name node 2>/dev/null | head -1 | grep -q .; then
        ACTUAL_PATH=$(find $(dirname "$location" 2>/dev/null) -name node 2>/dev/null | head -1)
        if [ ! -z "$ACTUAL_PATH" ] && [ -f "$ACTUAL_PATH" ]; then
            echo "   ✅ Found at: $ACTUAL_PATH"
            $ACTUAL_PATH --version
            FOUND=true
            break
        fi
    fi
done

if [ "$FOUND" = false ]; then
    echo "   ❌ Not found in common locations"
fi

echo ""

# 2. Search entire system
echo "2. Searching entire system for Node.js..."
echo ""

# Search in /opt
echo "   Searching /opt..."
OPT_NODE=$(find /opt -name node -type f 2>/dev/null | head -3)
if [ ! -z "$OPT_NODE" ]; then
    echo "$OPT_NODE" | while read -r node_path; do
        echo "   Found: $node_path"
        $node_path --version 2>/dev/null || echo "   (Cannot execute)"
    done
else
    echo "   No Node.js found in /opt"
fi

# Search in /usr
echo "   Searching /usr..."
USR_NODE=$(find /usr -name node -type f 2>/dev/null | head -3)
if [ ! -z "$USR_NODE" ]; then
    echo "$USR_NODE" | while read -r node_path; do
        echo "   Found: $node_path"
        $node_path --version 2>/dev/null || echo "   (Cannot execute)"
    done
else
    echo "   No Node.js found in /usr"
fi

# Search in home directory
echo "   Searching home directory..."
HOME_NODE=$(find ~ -name node -type f 2>/dev/null | head -3)
if [ ! -z "$HOME_NODE" ]; then
    echo "$HOME_NODE" | while read -r node_path; do
        echo "   Found: $node_path"
        $node_path --version 2>/dev/null || echo "   (Cannot execute)"
    done
else
    echo "   No Node.js found in home directory"
fi

echo ""

# 3. Check if any Node.js processes are running
echo "3. Checking for running Node.js processes..."
echo ""

NODE_PROCESSES=$(ps aux | grep -E 'node|npm|pm2' | grep -v grep)
if [ ! -z "$NODE_PROCESSES" ]; then
    echo "   ✅ Found Node.js-related processes:"
    echo "$NODE_PROCESSES"
    
    # Try to find node from process
    NODE_FROM_PROCESS=$(ps aux | grep node | grep -v grep | awk '{print $11}' | head -1)
    if [ ! -z "$NODE_FROM_PROCESS" ] && [ -f "$NODE_FROM_PROCESS" ]; then
        echo ""
        echo "   Node.js path from running process: $NODE_FROM_PROCESS"
        $NODE_FROM_PROCESS --version 2>/dev/null || echo "   (Cannot execute)"
    fi
else
    echo "   ❌ No Node.js processes running"
fi

echo ""

# 4. Check if frontend app directory exists (might have node_modules)
echo "4. Checking for application directories with Node.js..."
echo ""

if [ -d "/home/bitnami/WebAppReact" ]; then
    echo "   ✅ Found WebAppReact directory"
    if [ -d "/home/bitnami/WebAppReact/node_modules" ]; then
        echo "   ✅ node_modules exists - Node.js was used here"
        
        # Check for .nvmrc or package.json
        if [ -f "/home/bitnami/WebAppReact/.nvmrc" ]; then
            echo "   Found .nvmrc file"
            cat /home/bitnami/WebAppReact/.nvmrc
        fi
        
        # Check package.json for node version
        if [ -f "/home/bitnami/WebAppReact/package.json" ]; then
            echo "   Found package.json"
        fi
    fi
fi

echo ""

# 5. Check package managers
echo "5. Checking if Node.js installed via package manager..."
echo ""

# Check yum/rpm
if command -v rpm &> /dev/null; then
    RPM_NODE=$(rpm -qa | grep -i node)
    if [ ! -z "$RPM_NODE" ]; then
        echo "   Found via RPM: $RPM_NODE"
    else
        echo "   No Node.js found via RPM"
    fi
fi

# Check apt/dpkg
if command -v dpkg &> /dev/null; then
    DPKG_NODE=$(dpkg -l | grep -i node)
    if [ ! -z "$DPKG_NODE" ]; then
        echo "   Found via DPKG: $DPKG_NODE"
    else
        echo "   No Node.js found via DPKG"
    fi
fi

# Check snap
if command -v snap &> /dev/null; then
    SNAP_NODE=$(snap list | grep -i node)
    if [ ! -z "$SNAP_NODE" ]; then
        echo "   Found via Snap: $SNAP_NODE"
    else
        echo "   No Node.js found via Snap"
    fi
fi

echo ""

# 6. Check for nvm
echo "6. Checking for nvm (Node Version Manager)..."
echo ""

if [ -d "$HOME/.nvm" ]; then
    echo "   ✅ .nvm directory exists"
    if [ -f "$HOME/.nvm/nvm.sh" ]; then
        echo "   ✅ nvm.sh found"
        source "$HOME/.nvm/nvm.sh" 2>/dev/null
        if command -v nvm &> /dev/null || type nvm &> /dev/null; then
            echo "   ✅ nvm is available"
            nvm list 2>/dev/null || echo "   (Cannot list versions)"
        fi
    fi
else
    echo "   ❌ .nvm directory not found"
fi

echo ""
echo "================================================"
echo "✅ Detection complete!"
echo ""
echo "If Node.js was found, note the path and use it to install PM2:"
echo "  /path/to/npm install -g pm2"
echo ""
echo "If Node.js was NOT found, you need to install it first."

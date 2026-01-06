#!/bin/bash

# BioCAN Landing Page - PM2 Status Check Script
# This script checks if PM2 is installed and running

# Configuration
SERVER_USER="${SERVER_USER:-bitnami}"
SERVER_HOST="${SERVER_HOST:-your-server-ip}"

# Colors
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
CYAN='\033[0;36m'
NC='\033[0m'

echo -e "${CYAN}🔍 Checking PM2 Status${NC}"
echo "================================================"
echo ""

# 1. Check if PM2 is installed
echo -e "${YELLOW}1. Checking if PM2 is installed...${NC}"
PM2_VERSION=$(ssh "$SERVER_USER@$SERVER_HOST" "pm2 --version 2>/dev/null" 2>/dev/null)
if [ $? -eq 0 ] && [ ! -z "$PM2_VERSION" ]; then
    echo -e "${GREEN}   ✅ PM2 is installed${NC}"
    echo -e "   Version: $PM2_VERSION"
else
    echo -e "${RED}   ❌ PM2 is NOT installed${NC}"
    echo -e "${YELLOW}   Install with: npm install -g pm2${NC}"
fi

echo ""

# 2. Check PM2 location
echo -e "${YELLOW}2. Checking PM2 installation location...${NC}"
PM2_PATH=$(ssh "$SERVER_USER@$SERVER_HOST" "which pm2 2>/dev/null" 2>/dev/null)
if [ ! -z "$PM2_PATH" ]; then
    echo -e "${GREEN}   PM2 path: $PM2_PATH${NC}"
else
    echo -e "${RED}   ❌ PM2 not found in PATH${NC}"
fi

echo ""

# 3. Check if PM2 daemon is running
echo -e "${YELLOW}3. Checking if PM2 daemon is running...${NC}"
PM2_PID=$(ssh "$SERVER_USER@$SERVER_HOST" "pm2 pid 2>/dev/null" 2>/dev/null)
if [ ! -z "$PM2_PID" ] && [ "$PM2_PID" != "0" ]; then
    echo -e "${GREEN}   ✅ PM2 daemon is running${NC}"
    echo -e "   PID: $PM2_PID"
else
    echo -e "${RED}   ❌ PM2 daemon is NOT running${NC}"
    echo -e "${YELLOW}   Start with: pm2 resurrect${NC}"
fi

echo ""

# 4. List all PM2 processes
echo -e "${YELLOW}4. Listing all PM2 processes...${NC}"
PM2_LIST=$(ssh "$SERVER_USER@$SERVER_HOST" "pm2 list 2>/dev/null" 2>/dev/null)
if [ ! -z "$PM2_LIST" ]; then
    echo -e "${CYAN}   PM2 Process List:${NC}"
    echo "$PM2_LIST"
else
    echo -e "${YELLOW}   ⚠️  No PM2 processes found or PM2 not running${NC}"
fi

echo ""

# 5. Check PM2 logs location
echo -e "${YELLOW}5. Checking PM2 logs...${NC}"
PM2_HOME=$(ssh "$SERVER_USER@$SERVER_HOST" "pm2 info 2>/dev/null | grep 'PM2 home' || echo ''" 2>/dev/null)
if [ ! -z "$PM2_HOME" ]; then
    echo -e "${CYAN}   $PM2_HOME${NC}"
else
    DEFAULT_PM2_HOME=$(ssh "$SERVER_USER@$SERVER_HOST" "echo \$HOME/.pm2" 2>/dev/null)
    echo -e "${CYAN}   Default PM2 home: $DEFAULT_PM2_HOME${NC}"
fi

echo ""

# 6. Check PM2 startup script
echo -e "${YELLOW}6. Checking PM2 startup configuration...${NC}"
PM2_STARTUP=$(ssh "$SERVER_USER@$SERVER_HOST" "pm2 startup 2>/dev/null" 2>/dev/null)
if echo "$PM2_STARTUP" | grep -q "already"; then
    echo -e "${GREEN}   ✅ PM2 startup script is configured${NC}"
else
    echo -e "${YELLOW}   ⚠️  PM2 startup script may not be configured${NC}"
    echo -e "${CYAN}   Output:${NC}"
    echo "$PM2_STARTUP"
fi

echo ""

# 7. Check PM2 process status in detail
echo -e "${YELLOW}7. Detailed PM2 process information...${NC}"
PM2_JLIST=$(ssh "$SERVER_USER@$SERVER_HOST" "pm2 jlist 2>/dev/null" 2>/dev/null)
if [ ! -z "$PM2_JLIST" ] && [ "$PM2_JLIST" != "[]" ]; then
    echo -e "${CYAN}   Process details:${NC}"
    echo "$PM2_JLIST" | head -50
else
    echo -e "${YELLOW}   No PM2 processes running${NC}"
fi

echo ""
echo "================================================"
echo -e "${GREEN}✅ PM2 Status Check Complete!${NC}"
echo ""
echo -e "${YELLOW}Common PM2 Commands:${NC}"
echo "  pm2 list              - List all processes"
echo "  pm2 start app.js      - Start an application"
echo "  pm2 stop all          - Stop all processes"
echo "  pm2 restart all      - Restart all processes"
echo "  pm2 logs             - View logs"
echo "  pm2 monit            - Monitor processes"
echo "  pm2 save             - Save current process list"
echo "  pm2 resurrect        - Restore saved processes"

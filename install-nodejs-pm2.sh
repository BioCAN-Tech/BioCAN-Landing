#!/bin/bash

# Install Node.js and PM2 on Bitnami server
# This script installs Node.js using nvm (Node Version Manager)

set -e

echo "🚀 Installing Node.js and PM2"
echo "================================================"
echo ""

# Colors
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
CYAN='\033[0;36m'
NC='\033[0m'

# Step 1: Install nvm (Node Version Manager)
echo -e "${YELLOW}Step 1: Installing nvm (Node Version Manager)...${NC}"
if [ -d "$HOME/.nvm" ]; then
    echo -e "${GREEN}   ✅ nvm already exists${NC}"
else
    echo "   Downloading and installing nvm..."
    curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash
    
    if [ $? -eq 0 ]; then
        echo -e "${GREEN}   ✅ nvm installed successfully${NC}"
    else
        echo -e "${RED}   ❌ Failed to install nvm${NC}"
        exit 1
    fi
fi

# Step 2: Load nvm
echo ""
echo -e "${YELLOW}Step 2: Loading nvm...${NC}"
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"

# Verify nvm is loaded
if command -v nvm &> /dev/null || type nvm &> /dev/null; then
    echo -e "${GREEN}   ✅ nvm loaded${NC}"
    nvm --version
else
    # Try adding to bashrc
    echo "   Adding nvm to ~/.bashrc..."
    echo '' >> ~/.bashrc
    echo '# NVM Configuration' >> ~/.bashrc
    echo 'export NVM_DIR="$HOME/.nvm"' >> ~/.bashrc
    echo '[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"' >> ~/.bashrc
    echo '[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"' >> ~/.bashrc
    
    # Reload
    export NVM_DIR="$HOME/.nvm"
    [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
    
    if command -v nvm &> /dev/null || type nvm &> /dev/null; then
        echo -e "${GREEN}   ✅ nvm loaded${NC}"
    else
        echo -e "${RED}   ❌ Failed to load nvm. Please restart your terminal or run: source ~/.bashrc${NC}"
        exit 1
    fi
fi

# Step 3: Install Node.js LTS (version 20)
echo ""
echo -e "${YELLOW}Step 3: Installing Node.js 20 (LTS)...${NC}"
nvm install 20

if [ $? -eq 0 ]; then
    echo -e "${GREEN}   ✅ Node.js installed${NC}"
    nvm use 20
    nvm alias default 20
    
    # Verify installation
    NODE_VERSION=$(node --version)
    NPM_VERSION=$(npm --version)
    echo -e "${GREEN}   Node.js version: $NODE_VERSION${NC}"
    echo -e "${GREEN}   npm version: $NPM_VERSION${NC}"
else
    echo -e "${RED}   ❌ Failed to install Node.js${NC}"
    exit 1
fi

# Step 4: Install PM2 globally
echo ""
echo -e "${YELLOW}Step 4: Installing PM2...${NC}"
npm install -g pm2

if [ $? -eq 0 ]; then
    echo -e "${GREEN}   ✅ PM2 installed successfully${NC}"
    
    # Verify PM2 installation
    PM2_VERSION=$(pm2 --version)
    echo -e "${GREEN}   PM2 version: $PM2_VERSION${NC}"
else
    echo -e "${RED}   ❌ Failed to install PM2${NC}"
    exit 1
fi

# Step 5: Setup PM2 startup script
echo ""
echo -e "${YELLOW}Step 5: Setting up PM2 startup script...${NC}"
pm2 startup

echo ""
echo "================================================"
echo -e "${GREEN}✅ Installation Complete!${NC}"
echo ""
echo -e "${CYAN}Summary:${NC}"
echo "  ✅ nvm installed"
echo "  ✅ Node.js $(node --version) installed"
echo "  ✅ npm $(npm --version) installed"
echo "  ✅ PM2 $(pm2 --version) installed"
echo ""
echo -e "${YELLOW}Next Steps:${NC}"
echo "1. If you see a 'sudo' command from pm2 startup, run it"
echo "2. Test PM2: pm2 list"
echo "3. To make Node.js/npm available in new terminals, add to ~/.bashrc:"
echo "   source ~/.nvm/nvm.sh"
echo ""
echo -e "${CYAN}Useful PM2 Commands:${NC}"
echo "  pm2 list              - List all processes"
echo "  pm2 start app.js      - Start an application"
echo "  pm2 stop all          - Stop all processes"
echo "  pm2 logs              - View logs"
echo "  pm2 monit             - Monitor processes"

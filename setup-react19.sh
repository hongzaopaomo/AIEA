#!/bin/bash

# 颜色设置
BLUE='\033[0;34m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m' # 无颜色

echo -e "${BLUE}========== React 19 & Next.js 15.2.1 设置工具 ==========${NC}"
cd /Users/zl/Documents/GitHub/AIEA/aiea-react

# 检查Node.js版本
NODE_VERSION=$(node -v | cut -d "v" -f 2)
REQUIRED_VERSION="18.17.0"

echo -e "${YELLOW}检查Node.js版本...${NC}"
if [ "$(printf '%s\n' "$REQUIRED_VERSION" "$NODE_VERSION" | sort -V | head -n1)" != "$REQUIRED_VERSION" ]; then 
  echo -e "${RED}警告: Node.js版本必须 >= $REQUIRED_VERSION，当前版本是 $NODE_VERSION${NC}"
  echo -e "${YELLOW}请使用nvm或其他工具安装更新版本的Node.js${NC}"
  exit 1
else
  echo -e "${GREEN}Node.js版本检查通过：$NODE_VERSION${NC}"
fi

# 清理之前的构建
echo -e "${YELLOW}清理缓存和临时文件...${NC}"
rm -rf .next
rm -rf node_modules/.cache

# 确保使用npm 9或更高版本
echo -e "${YELLOW}使用正确版本的npm...${NC}"
npm install -g npm@latest

# 安装依赖
echo -e "${YELLOW}安装React 19和Next.js 15.2.1依赖...${NC}"
npm install --force

# 构建项目
echo -e "${YELLOW}构建项目...${NC}"
NODE_OPTIONS=--max_old_space_size=4096 npm run build

# 启动服务器
echo -e "${GREEN}启动服务器...${NC}"
echo -e "${BLUE}应用运行在: http://localhost:3000${NC}"
npm run start 
#!/bin/bash

# 设置颜色输出
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
RED='\033[0;31m'
NC='\033[0m' # 无颜色

echo -e "${BLUE}===== React 19 & Next.js 15.2.1 运行工具 =====${NC}"
cd /Users/zl/Documents/GitHub/AIEA/aiea-react

# 清理缓存
echo -e "${YELLOW}1. 清理缓存...${NC}"
rm -rf .next
rm -rf node_modules/.cache

# 确保所有依赖正确安装
echo -e "${YELLOW}2. 安装依赖...${NC}"
npm install

# 检查Node.js版本
echo -e "${YELLOW}3. 检查Node.js版本...${NC}"
NODE_VERSION=$(node -v)
echo -e "当前Node.js版本: ${GREEN}$NODE_VERSION${NC}"
echo -e "推荐使用Node.js 18.17.0或更高版本，当前使用${GREEN}$NODE_VERSION${NC}"

# 构建项目
echo -e "${YELLOW}4. 使用最新React和Next.js构建项目...${NC}"
NODE_OPTIONS=--max_old_space_size=4096 npm run build

# 启动服务器
echo -e "${YELLOW}5. 启动服务器...${NC}"
echo -e "${GREEN}服务器将在 http://localhost:3000 运行${NC}"
NODE_OPTIONS=--inspect npm run start

# 监视错误
echo -e "${RED}服务器已退出！请检查上方是否有错误消息${NC}" 
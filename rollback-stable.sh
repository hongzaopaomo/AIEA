#!/bin/bash

# 设置颜色
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
RED='\033[0;31m'
NC='\033[0m' # 无颜色

echo -e "${GREEN}===== 回退到React 18和Next.js 14稳定版本 =====${NC}"
cd /Users/zl/Documents/GitHub/AIEA/aiea-react

# 停止可能正在运行的任何Node进程
echo -e "${YELLOW}正在停止可能运行的Node进程...${NC}"
pkill -f "node.*next" || true

# 清理
echo -e "${YELLOW}正在清理缓存和临时文件...${NC}"
rm -rf .next
rm -rf node_modules
rm -rf .npm

# 删除旧的lock文件
echo -e "${YELLOW}删除旧的lock文件...${NC}"
rm -f package-lock.json
rm -f yarn.lock
rm -f pnpm-lock.yaml

# 创建一个基本的.npmrc文件
echo -e "${YELLOW}创建基本的npm配置...${NC}"
cat > .npmrc << EOL
legacy-peer-deps=true
prefer-offline=true
EOL

# 确保npm是最新的
echo -e "${YELLOW}更新npm...${NC}"
npm install -g npm@latest

# 重新安装依赖 - 使用干净安装
echo -e "${YELLOW}重新安装依赖...${NC}"
npm cache clean --force
npm install

# 检查Next.js是否安装成功
if [ ! -f "./node_modules/.bin/next" ]; then
  echo -e "${RED}Next.js安装失败，尝试单独安装...${NC}"
  npm install next@14.0.4 react@18.2.0 react-dom@18.2.0 --save
fi

# 再次检查Next.js是否存在
if [ ! -f "./node_modules/.bin/next" ]; then
  echo -e "${RED}无法安装Next.js。请手动运行npm install。${NC}"
  exit 1
fi

# 构建项目
echo -e "${YELLOW}构建项目...${NC}"
npx next build

# 启动服务器
echo -e "${GREEN}启动服务器...${NC}"
echo -e "${BLUE}应用运行在: http://localhost:3000${NC}"
npx next start -p 3000 
#!/bin/bash

# 设置颜色
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
RED='\033[0;31m'
NC='\033[0m' # 无颜色

# 项目路径
PROJECT_PATH="/Users/zl/Documents/GitHub/AIEA/aiea-react"

echo -e "${GREEN}===== 启动 AIEA React 项目 =====${NC}"
cd $PROJECT_PATH || exit 1

# 检查是否为开发模式
if [ "$1" == "dev" ]; then
  MODE="dev"
  echo -e "${YELLOW}以开发模式启动...${NC}"
else
  MODE="start"
  echo -e "${YELLOW}以生产模式启动...${NC}"
fi

# 停止可能正在运行的任何Node进程
echo -e "${YELLOW}检查并停止已运行的Node进程...${NC}"
pkill -f "node.*next" || true

# 检查Next.js是否已安装
if [ ! -d "./node_modules/next" ]; then
  echo -e "${RED}项目依赖似乎未安装。运行安装命令...${NC}"
  npm install
fi

# 检查.next目录是否存在，不存在就构建
if [ ! -d ".next" ] || [ "$MODE" == "dev" ]; then
  echo -e "${YELLOW}开始构建项目...${NC}"
  if [ "$MODE" == "dev" ]; then
    echo -e "${BLUE}启动开发服务器...${NC}"
    echo -e "${BLUE}应用运行在: http://localhost:3000${NC}"
    npm run dev
  else
    npm run build
    # 检查构建是否成功
    if [ $? -eq 0 ]; then
      echo -e "${GREEN}构建成功!${NC}"
      echo -e "${BLUE}启动服务器...${NC}"
      echo -e "${BLUE}应用运行在: http://localhost:3000${NC}"
      npm run start
    else
      echo -e "${RED}构建失败!${NC}"
      echo -e "${YELLOW}尝试运行修复脚本...${NC}"
      bash /Users/zl/Documents/GitHub/AIEA/fix-tailwind.sh
      
      echo -e "${YELLOW}重新尝试启动...${NC}"
      if [ "$MODE" == "dev" ]; then
        npm run dev
      else
        npm run start
      fi
    fi
  fi
else
  # 直接启动
  echo -e "${BLUE}启动服务器...${NC}"
  echo -e "${BLUE}应用运行在: http://localhost:3000${NC}"
  npm run $MODE
fi 
#!/bin/bash

# 设置颜色
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
RED='\033[0;31m'
NC='\033[0m' # 无颜色

echo -e "${GREEN}===== 修复Tailwind CSS配置 =====${NC}"
cd /Users/zl/Documents/GitHub/AIEA/aiea-react

# 停止可能正在运行的任何Node进程
echo -e "${YELLOW}正在停止可能运行的Node进程...${NC}"
pkill -f "node.*next" || true

# 安装必要的Tailwind依赖
echo -e "${YELLOW}安装Tailwind CSS依赖...${NC}"
npm install -D tailwindcss@latest postcss@latest autoprefixer@latest

# 创建正确的Tailwind配置
echo -e "${YELLOW}创建Tailwind配置文件...${NC}"
npx tailwindcss init -p

# 更新tailwind.config.js
echo -e "${YELLOW}更新Tailwind配置...${NC}"
cat > tailwind.config.js << EOL
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
EOL

# 更新postcss.config.js
echo -e "${YELLOW}更新PostCSS配置...${NC}"
cat > postcss.config.js << EOL
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
EOL

# 更新globals.css
echo -e "${YELLOW}更新全局CSS...${NC}"
cat > src/app/globals.css << EOL
@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  --background: #ffffff;
  --foreground: #171717;
}

@media (prefers-color-scheme: dark) {
  :root {
    --background: #0a0a0a;
    --foreground: #ededed;
  }
}

body {
  background: var(--background);
  color: var(--foreground);
  font-family: Arial, Helvetica, sans-serif;
}
EOL

# 清理构建缓存
echo -e "${YELLOW}清理缓存...${NC}"
rm -rf .next

# 构建项目
echo -e "${YELLOW}构建项目...${NC}"
npm run build

echo -e "${GREEN}Tailwind CSS 已修复，现在可以运行 npm run dev 或 npm run start 启动项目${NC}" 
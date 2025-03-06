#!/bin/bash

# 设置颜色
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
RED='\033[0;31m'
NC='\033[0m' # 无颜色

echo -e "${GREEN}===== 修复Tailwind CSS配置 V2 =====${NC}"
cd /Users/zl/Documents/GitHub/AIEA/aiea-react

# 停止可能正在运行的任何Node进程
echo -e "${YELLOW}正在停止可能运行的Node进程...${NC}"
pkill -f "node.*next" || true

# 清理旧文件
echo -e "${YELLOW}清理旧文件和缓存...${NC}"
rm -rf .next
rm -rf node_modules
rm -rf package-lock.json

# 删除可能有问题的配置文件
echo -e "${YELLOW}删除旧的配置文件...${NC}"
rm -f postcss.config.js postcss.config.mjs
rm -f tailwind.config.js tailwind.config.ts

# 安装核心依赖
echo -e "${YELLOW}安装核心依赖...${NC}"
npm install react@18.2.0 react-dom@18.2.0 next@14.0.4 --save --legacy-peer-deps

# 安装必要的Tailwind依赖（注意顺序和版本）
echo -e "${YELLOW}安装Tailwind CSS依赖...${NC}"
npm install -D tailwindcss@^3.3.0 postcss@^8.4.31 autoprefixer@^10.4.16 --legacy-peer-deps

# 创建Tailwind配置文件
echo -e "${YELLOW}创建Tailwind配置文件...${NC}"
npx tailwindcss init -p

# 更新postcss.config.js（确保使用正确的语法）
echo -e "${YELLOW}更新PostCSS配置...${NC}"
cat > postcss.config.js << EOL
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
EOL

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
  plugins: [],
}
EOL

# 单独安装Typography插件
echo -e "${YELLOW}安装Typography插件...${NC}"
npm install -D @tailwindcss/typography --legacy-peer-deps

# 更新tailwind.config.js添加插件
echo -e "${YELLOW}更新Tailwind配置添加Typography插件...${NC}"
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

# 安装依赖
echo -e "${YELLOW}安装其他依赖...${NC}"
npm install framer-motion@10.16.4 --save --legacy-peer-deps
npm install -D @types/react@18 @types/react-dom@18 eslint@8.56.0 eslint-config-next@14.0.4 typescript@5 --legacy-peer-deps

# 清理构建缓存
echo -e "${YELLOW}清理缓存...${NC}"
rm -rf .next

# 构建项目
echo -e "${YELLOW}构建项目...${NC}"
npm run build

echo -e "${GREEN}Tailwind CSS 已修复，现在可以运行 npm run dev 或 npm run start 启动项目${NC}" 
/** @type {import('next').NextConfig} */
const nextConfig = {
  // 图片优化配置
  images: {
    unoptimized: true,
    domains: ['localhost', 'aieafoundation.org'],
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '3000',
        pathname: '/images/**',
      },
      {
        protocol: 'https',
        hostname: 'aieafoundation.org',
        pathname: '/images/**',
      },
    ],
  },
  // GitHub Pages 部署配置
  output: 'export',
  // 自定义域名不需要basePath和assetPrefix
  // basePath: '/AIEA',
  // assetPrefix: '/AIEA/',
  trailingSlash: true,
  // 安全配置
  reactStrictMode: true,
  // 允许跨域 - 注意：export模式下无效，保留配置但不会应用
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'Access-Control-Allow-Origin', value: '*' },
          { key: 'Cache-Control', value: 'public, max-age=3600, must-revalidate' },
        ],
      },
      {
        source: '/images/(.*)',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=86400, must-revalidate' },
        ],
      },
    ];
  }
}

module.exports = nextConfig; 
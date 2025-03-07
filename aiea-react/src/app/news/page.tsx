'use client';

import Image from 'next/image';
import Link from 'next/link';
import AnimatedLayout from '@/components/common/AnimatedLayout';
import { FadeUp, StaggerContainer, StaggerItem, ScaleIn } from '@/components/common/AnimatedComponents';
import { motion } from 'framer-motion';

interface NewsItem {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  image: string;
  category: string;
  link: string;
}

const newsItems: NewsItem[] = [
  {
    id: 1,
    title: 'AIEA 2024年春季艺术展览即将开幕',
    excerpt: '本次展览将展示来自全球15个国家的30位艺术家的作品，涵盖绘画、雕塑、摄影和多媒体艺术等多种形式。',
    date: '2024年2月15日',
    image: '/AIEA/images/latest-news.jpg',
    category: '展览',
    link: '/news/1'
  },
  {
    id: 2,
    title: '艺术家驻留计划2024年申请现已开放',
    excerpt: '我们的年度艺术家驻留计划现已开放申请，提供为期三个月的工作室空间和创作资源支持。',
    date: '2024年2月10日',
    image: '/AIEA/images/connect-art-community.jpg',
    category: '项目',
    link: '/news/2'
  },
  {
    id: 3,
    title: '新增青少年艺术教育工作坊',
    excerpt: '面向13-18岁青少年的新艺术教育工作坊将于3月启动，涵盖数字艺术、绘画和雕塑等多个领域。',
    date: '2024年2月5日',
    image: '/AIEA/images/promote-art-education.jpg',
    category: '教育',
    link: '/news/3'
  },
  {
    id: 4,
    title: 'AIEA与国际艺术机构建立新合作伙伴关系',
    excerpt: '我们很高兴宣布与三家国际艺术机构建立新的合作伙伴关系，将共同开展展览交流和艺术家交换项目。',
    date: '2024年1月28日',
    image: '/AIEA/images/foster-artistic-talents.jpg',
    category: '公告',
    link: '/news/4'
  }
];

export default function NewsPage() {
  return (
    <AnimatedLayout>
      <div className="pt-24">
        {/* 页面标题 */}
        <div className="bg-gray-900 text-white py-24">
          <div className="container mx-auto px-4 max-w-5xl">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="mb-2 text-gray-300">ARTTIME</div>
            </motion.div>
            <FadeUp>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">Latest News</h1>
            </FadeUp>
            <FadeUp delay={0.2}>
              <p className="text-xl text-gray-300 max-w-3xl">
                Stay updated with the latest events, exhibitions, and initiatives from the AIEA Art Foundation.
              </p>
            </FadeUp>
          </div>
        </div>

        {/* 主要内容 */}
        <div className="container mx-auto px-4 py-16 max-w-6xl">
          <StaggerContainer className="grid md:grid-cols-2 gap-10" staggerDelay={0.15}>
            {newsItems.map((item) => (
              <StaggerItem key={item.id}>
                <motion.article 
                  className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="relative h-64">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <motion.div 
                      className="absolute top-4 left-4 bg-black text-white px-3 py-1 text-sm font-medium rounded"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3, duration: 0.5 }}
                    >
                      {item.category}
                    </motion.div>
                  </div>
                  <div className="p-6">
                    <time className="text-gray-500 text-sm">{item.date}</time>
                    <h2 className="text-2xl font-bold mt-2 mb-3">{item.title}</h2>
                    <p className="text-gray-600 mb-4">{item.excerpt}</p>
                    <motion.div
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Link 
                        href={item.link} 
                        className="inline-block text-black font-medium border-b border-black pb-1 hover:text-gray-600 hover:border-gray-600 transition-colors"
                      >
                        Read More
                      </Link>
                    </motion.div>
                  </div>
                </motion.article>
              </StaggerItem>
            ))}
          </StaggerContainer>

          {/* 订阅新闻通讯 */}
          <ScaleIn delay={0.4}>
            <div className="mt-20 bg-gray-100 rounded-lg p-8 md:p-12">
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl font-bold mb-4">Subscribe to Our Newsletter</h2>
                <p className="text-gray-600 mb-6">
                  Get the latest news, exhibition updates, and exclusive content delivered straight to your inbox.
                </p>
                <motion.form 
                  className="flex flex-col md:flex-row gap-4 max-w-xl mx-auto"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.5 }}
                >
                  <input 
                    type="email" 
                    placeholder="Your email address" 
                    className="flex-1 px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-black"
                    required
                  />
                  <motion.button 
                    type="submit"
                    className="bg-black text-white px-6 py-3 rounded font-medium hover:bg-gray-800 transition-colors"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Subscribe
                  </motion.button>
                </motion.form>
              </div>
            </div>
          </ScaleIn>
        </div>
      </div>
    </AnimatedLayout>
  );
} 
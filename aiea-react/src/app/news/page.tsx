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
}

const newsItems: NewsItem[] = [
  {
    id: 1,
    title: 'AIEA Art Foundation Launches New Exhibition',
    excerpt: 'A groundbreaking exhibition featuring works from emerging artists across Africa, showcasing innovative approaches to traditional art forms.',
    date: 'March 15, 2024',
    image: '/images/latest-news.jpg',
    category: 'Exhibition'
  },
  {
    id: 2,
    title: 'Annual Art Scholarship Program Opens Applications',
    excerpt: 'Applications are now open for our annual scholarship program, offering funding and mentorship to promising young artists from underrepresented communities.',
    date: 'February 28, 2024',
    image: '/images/connect-art-community.jpg',
    category: 'Education'
  },
  {
    id: 3,
    title: 'Partnership Announced with National Museum',
    excerpt: 'AIEA Art Foundation is proud to announce a new partnership with the National Museum, bringing African art to wider audiences.',
    date: 'January 20, 2024',
    image: '/images/promote-art-education.jpg',
    category: 'Partnership'
  },
  {
    id: 4,
    title: 'Artist Spotlight: Nala Mensah',
    excerpt: 'Meet Nala Mensah, whose thought-provoking installations have been making waves in the contemporary art scene across West Africa and beyond.',
    date: 'January 10, 2024',
    image: '/images/foster-artistic-talents.jpg',
    category: 'Artist Spotlight'
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
                        href={`/news/${item.id}`} 
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
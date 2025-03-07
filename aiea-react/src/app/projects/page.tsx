'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import AnimatedLayout from '@/components/common/AnimatedLayout';
import { FadeUp, StaggerContainer, StaggerItem, ScaleIn } from '@/components/common/AnimatedComponents';
import { motion, AnimatePresence } from 'framer-motion';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
  year: number;
}

// 使用相对于public目录的正确路径
const projects: Project[] = [
  {
    id: 1,
    title: 'African Heritage Exhibition',
    description: 'A curated collection showcasing the rich cultural heritage of various African regions through contemporary art.',
    image: '/AIEA/images/thematic-program.jpg',
    category: 'Exhibition',
    year: 2023
  },
  {
    id: 2,
    title: 'Young Artists Workshop Series',
    description: 'A series of workshops aimed at nurturing young artistic talent through mentorship and skill development.',
    image: '/AIEA/images/foster-artistic-talents.jpg',
    category: 'Education',
    year: 2023
  },
  {
    id: 3,
    title: 'Digital Art Initiative',
    description: 'Exploring the intersection of traditional African art and digital technologies through innovative multimedia projects.',
    image: '/AIEA/images/connect-art-community.jpg',
    category: 'Digital',
    year: 2022
  },
  {
    id: 4,
    title: 'Community Art Spaces',
    description: 'Creating accessible art spaces in underserved communities to promote artistic expression and cultural engagement.',
    image: '/AIEA/images/promote-art-education.jpg',
    category: 'Community',
    year: 2022
  },
  {
    id: 5,
    title: 'Art Conservation Program',
    description: 'Preserving significant African artworks through advanced conservation techniques and documentation.',
    image: '/AIEA/images/publications.jpg',
    category: 'Conservation',
    year: 2021
  },
  {
    id: 6,
    title: 'Cross-Cultural Art Exchange',
    description: 'Facilitating artistic exchange between African artists and international counterparts to promote global dialogue.',
    image: '/AIEA/images/about.jpg',
    category: 'Collaboration',
    year: 2021
  }
];

export default function ProjectsPage() {
  const [filter, setFilter] = useState<string>('All');
  
  const categories = ['All', ...Array.from(new Set(projects.map(project => project.category)))];
  
  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <AnimatedLayout>
      <div className="pt-24">
        {/* 页面标题 */}
        <div className="bg-gray-900 text-white py-24">
          <div className="container mx-auto px-4 max-w-5xl">
            <FadeUp>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">Our Projects</h1>
            </FadeUp>
            <FadeUp delay={0.2}>
              <p className="text-xl text-gray-300 max-w-3xl">
                Discover the innovative initiatives, exhibitions, and programs that define our commitment to African art.
              </p>
            </FadeUp>
          </div>
        </div>

        {/* 筛选器 */}
        <div className="bg-gray-100 py-6">
          <div className="container mx-auto px-4 max-w-6xl">
            <motion.div 
              className="flex flex-wrap gap-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {categories.map((category, index) => (
                <motion.button
                  key={category}
                  onClick={() => setFilter(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    filter === category 
                      ? 'bg-black text-white' 
                      : 'bg-white text-gray-700 hover:bg-gray-200'
                  }`}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.1 + index * 0.05 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {category}
                </motion.button>
              ))}
            </motion.div>
          </div>
        </div>

        {/* 项目网格 */}
        <div className="container mx-auto px-4 py-16 max-w-6xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={filter}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProjects.map((project) => (
                  <StaggerItem key={project.id}>
                    <motion.div 
                      className="group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
                      whileHover={{ y: -8 }}
                    >
                      <div className="relative h-60">
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          priority={true}
                          loading="eager"
                          quality={75}
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          onError={(e) => {
                            // 图片加载失败时，显示替代背景色
                            console.error(`Failed to load image: ${project.image}`);
                            const target = e.target as HTMLImageElement;
                            if (target.parentElement) {
                              target.parentElement.style.backgroundColor = '#d1d1d1';
                            }
                          }}
                        />
                        {/* 添加加载状态占位符 */}
                        <div className="absolute inset-0 bg-gray-200 animate-pulse z-[-1]"></div>
                        <motion.div 
                          className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent h-1/2 opacity-60"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 0.6 }}
                          transition={{ duration: 0.5, delay: 0.2 }}
                        ></motion.div>
                        <div className="absolute bottom-4 left-4">
                          <motion.span 
                            className="inline-block bg-white text-black px-2 py-1 text-xs font-medium rounded"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3, delay: 0.3 }}
                          >
                            {project.category}
                          </motion.span>
                          <motion.span 
                            className="inline-block ml-2 text-white text-xs"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3, delay: 0.4 }}
                          >
                            {project.year}
                          </motion.span>
                        </div>
                      </div>
                      <div className="p-6">
                        <h2 className="text-xl font-bold mb-3">{project.title}</h2>
                        <p className="text-gray-600 mb-4 line-clamp-3">{project.description}</p>
                        <motion.div whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                          <Link 
                            href={`/projects/${project.id}`} 
                            className="inline-block text-black font-medium border-b border-black pb-1 hover:text-gray-600 hover:border-gray-600 transition-colors"
                          >
                            View Project
                          </Link>
                        </motion.div>
                      </div>
                    </motion.div>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </motion.div>
          </AnimatePresence>

          {/* 合作提案 */}
          <ScaleIn delay={0.4}>
            <div className="mt-20 bg-black text-white rounded-lg p-8 md:p-12">
              <div className="md:flex items-center justify-between">
                <div className="max-w-2xl mb-8 md:mb-0">
                  <motion.h2 
                    className="text-3xl font-bold mb-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    Have a project in mind?
                  </motion.h2>
                  <motion.p 
                    className="text-gray-300"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                  >
                    We&apos;re always looking to collaborate with artists, organizations, and institutions 
                    that share our vision for promoting African art and culture.
                  </motion.p>
                </div>
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <Link 
                    href="/contact" 
                    className="inline-block bg-white text-black px-8 py-4 rounded font-medium hover:bg-gray-200 transition-colors"
                  >
                    Get in Touch
                  </Link>
                </motion.div>
              </div>
            </div>
          </ScaleIn>
        </div>
      </div>
    </AnimatedLayout>
  );
}
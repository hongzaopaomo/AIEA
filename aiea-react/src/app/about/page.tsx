'use client';

import Image from 'next/image';
import AnimatedLayout from '@/components/common/AnimatedLayout';
import { FadeUp, FadeRight, FadeLeft, ScaleIn } from '@/components/common/AnimatedComponents';
import { motion } from 'framer-motion';

// 添加图片路径前缀
const imagePrefix = process.env.NODE_ENV === 'production' ? '/AIEA' : '';

export default function AboutPage() {
  return (
    <AnimatedLayout>
      <div className="pt-24">
        {/* 页面标题 */}
        <div className="bg-gray-900 text-white py-24">
          <div className="container mx-auto px-4 max-w-5xl">
            <FadeUp>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">About Us</h1>
            </FadeUp>
            <FadeUp delay={0.2}>
              <p className="text-xl text-gray-300 max-w-3xl">
                AIEA Art Foundation is dedicated to promoting and supporting African art and artists worldwide.
              </p>
            </FadeUp>
          </div>
        </div>

        {/* 主要内容 */}
        <div className="container mx-auto px-4 max-w-5xl py-16">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <FadeRight>
              <div className="prose prose-lg">
                <motion.h2 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  Our Mission
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  The AIEA Art Foundation was established with a clear mission: to support, promote, 
                  and preserve African art and culture. We strive to create platforms for African 
                  artists to showcase their talent globally while fostering cultural exchange and understanding.
                </motion.p>
                
                <motion.h2
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                >
                  What We Do
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                >
                  Through exhibitions, educational programs, funding initiatives, and cultural exchanges, 
                  we work to bring African art to global audiences. Our foundation serves as a bridge between 
                  traditional African artistic expressions and contemporary global art movements.
                </motion.p>
                
                <motion.h2
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 1.0 }}
                >
                  Our History
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 1.2 }}
                >
                  Founded in 2018, the AIEA Art Foundation has grown from a small initiative to a recognized 
                  institution in the art world. Our journey reflects our commitment to amplifying African 
                  voices in global artistic conversations.
                </motion.p>
              </div>
            </FadeRight>
            
            <FadeLeft delay={0.3}>
              <div className="space-y-8">
                <div className="aspect-video relative rounded-lg overflow-hidden">
                  <Image 
                    src={`${imagePrefix}/images/about.jpg`}
                    alt="AIEA Art Foundation Team" 
                    fill 
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                
                <ScaleIn delay={0.5}>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-xl font-bold mb-4">Our Values</h3>
                    <ul className="space-y-3">
                      {[
                        'Authenticity in art and cultural representation',
                        'Innovation and creativity in artistic expression',
                        'Inclusivity and accessibility in the art world',
                        'Education and cultural exchange'
                      ].map((value, index) => (
                        <motion.li 
                          key={index}
                          className="flex items-start"
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                        >
                          <span className="bg-black text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1">{index + 1}</span>
                          <span>{value}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </ScaleIn>
              </div>
            </FadeLeft>
          </div>
        </div>
      </div>
    </AnimatedLayout>
  );
} 
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { StaticImageData } from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/components/common/LanguageContext';
import { FadeUp, Float } from '@/components/common/AnimatedComponents';

// 静态导入图片
import connectArtImage from '../../../public/images/home-picture/connect-art-community.jpg';
import promoteArtImage from '../../../public/images/home-picture/promote-art-education.jpg';
import fosterArtImage from '../../../public/images/home-picture/foster-artistic-talents.jpg';

interface SlideProps {
  titleKey: string;
  subtitleKey: string;
  linkTextKey: string;
  linkHref: string;
  backgroundImage: StaticImageData;
}

const HeroSlider = () => {
  const { t } = useLanguage();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // 多语言支持的幻灯片数据
  const slides: SlideProps[] = [
    {
      titleKey: 'slider.connect.title',
      subtitleKey: 'slider.foundation',
      linkTextKey: 'common.goTo',
      linkHref: '#community',
      backgroundImage: connectArtImage
    },
    {
      titleKey: 'slider.promote.title',
      subtitleKey: 'slider.foundation',
      linkTextKey: 'common.goTo',
      linkHref: '#education',
      backgroundImage: promoteArtImage
    },
    {
      titleKey: 'slider.foster.title',
      subtitleKey: 'slider.foundation',
      linkTextKey: 'common.goTo',
      linkHref: '#talents',
      backgroundImage: fosterArtImage
    }
  ];

  // 自动切换滑块
  useEffect(() => {
    const timer = setInterval(() => {
      goToNextSlide();
    }, 6000);
    
    return () => clearInterval(timer);
  }, [currentSlide]);

  const goToPrevSlide = () => {
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    
    setTimeout(() => {
      setIsTransitioning(false);
    }, 500);
  };

  const goToNextSlide = () => {
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    
    setTimeout(() => {
      setIsTransitioning(false);
    }, 500);
  };

  // 添加图片路径前缀
  const imagePrefix = process.env.ASSET_PREFIX || '';

  return (
    <section className="relative h-screen bg-black text-white overflow-hidden">
      <div className="absolute inset-0">
        <AnimatePresence initial={false} mode="wait">
          {slides.map((slide, index) => (
            index === currentSlide && (
              <motion.div 
                key={index}
                className="absolute inset-0 flex items-center justify-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1 }}
              >
                {/* 使用Next.js的Image组件 */}
                <div className="absolute inset-0 z-0 overflow-hidden">
                  <motion.div
                    initial={{ scale: 1.2 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 6 }}
                    className="w-full h-full"
                  >
                    <Image 
                      src={slide.backgroundImage}
                      alt={t(slide.titleKey)}
                      fill
                      priority={true}
                      loading="eager"
                      quality={90}
                      className="object-cover"
                      sizes="100vw"
                      style={{objectFit: "cover"}}
                    />
                  </motion.div>
                </div>
                <div className="absolute inset-0 bg-black bg-opacity-40 z-10"></div>
                <div className="relative z-20 text-center max-w-4xl px-6">
                  <motion.span 
                    className="block text-xl md:text-2xl mb-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                  >
                    {t(slide.subtitleKey)}
                  </motion.span>
                  <motion.h1 
                    className="text-5xl md:text-7xl font-bold mb-8 font-serif"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                  >
                    {t(slide.titleKey)}
                  </motion.h1>
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.8 }}
                  >
                    <Link 
                      href={slide.linkHref}
                      className="btn-primary inline-flex items-center gap-2 group"
                    >
                      <span>{t(slide.linkTextKey)}</span>
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform duration-300 group-hover:translate-x-1">
                        <path d="M5 12h14"></path>
                        <path d="m12 5 7 7-7 7"></path>
                      </svg>
                    </Link>
                  </motion.div>
                </div>
              </motion.div>
            )
          ))}
        </AnimatePresence>
      </div>

      {/* 社交媒体链接 */}
      <div className="absolute bottom-8 left-8 z-20 flex space-x-4">
        <Float>
          <Link href="#" className="text-white hover:text-primary transition-colors" aria-label="YouTube">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
              <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z"/>
            </svg>
          </Link>
        </Float>
        <Float delay={0.2}>
          <Link href="#" className="text-white hover:text-primary transition-colors" aria-label="Instagram">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
              <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"/>
            </svg>
          </Link>
        </Float>
        <Float delay={0.4}>
          <Link href="#" className="text-white hover:text-primary transition-colors" aria-label="Twitter">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
              <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/>
            </svg>
          </Link>
        </Float>
      </div>

      {/* 滚动提示 */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.8 }}
      >
        <Float>
          <span className="block text-sm mb-2">{t('home.scroll')}</span>
          <div className="w-6 h-12 border-2 border-white rounded-full mx-auto flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full animate-bounce mt-2"></div>
          </div>
        </Float>
      </motion.div>

      {/* 滑动控制按钮 */}
      <div className="absolute right-8 bottom-1/2 transform translate-y-1/2 z-20 flex flex-col space-y-6">
        <motion.button 
          onClick={goToPrevSlide}
          className="w-12 h-12 border border-white rounded-full flex items-center justify-center hover:bg-white hover:text-black transition-all"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          aria-label="Previous slide"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" transform="rotate(-90 12 12)" />
          </svg>
        </motion.button>
        <motion.button 
          onClick={goToNextSlide}
          className="w-12 h-12 border border-white rounded-full flex items-center justify-center hover:bg-white hover:text-black transition-all"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          aria-label="Next slide"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" transform="rotate(-90 12 12)" />
          </svg>
        </motion.button>
      </div>
      
      {/* 幻灯片指示器 */}
      <div className="absolute bottom-8 right-8 z-20">
        <div className="flex space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentSlide 
                  ? 'bg-white w-8' 
                  : 'bg-white/50 hover:bg-white/80'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSlider; 
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { StaticImageData } from 'next/image';

// 静态导入图片
import connectArtImage from '../../../public/images/home-picture/connect-art-community.jpg';
import promoteArtImage from '../../../public/images/home-picture/promote-art-education.jpg';
import fosterArtImage from '../../../public/images/home-picture/foster-artistic-talents.jpg';

interface SlideProps {
  title: string;
  subtitle: string;
  linkText: string;
  linkHref: string;
  backgroundImage: StaticImageData; // 使用正确的类型代替any
}

const slides: SlideProps[] = [
  {
    title: 'CONNECT ART COMMUNITY',
    subtitle: 'AIEA ART FOUNDATION',
    linkText: 'Go to',
    linkHref: '#community',
    backgroundImage: connectArtImage
  },
  {
    title: 'PROMOTE ART EDUCATION',
    subtitle: 'AIEA ART FOUNDATION',
    linkText: 'Go to',
    linkHref: '#education',
    backgroundImage: promoteArtImage
  },
  {
    title: 'FOSTER ARTISTIC TALENTS',
    subtitle: 'AIEA ART FOUNDATION',
    linkText: 'Go to',
    linkHref: '#talents',
    backgroundImage: fosterArtImage
  }
];

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // 自动切换滑块
  useEffect(() => {
    const timer = setInterval(() => {
      goToNextSlide();
    }, 5000);
    
    return () => clearInterval(timer);
  }, []);

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
  const imagePrefix = '';

  return (
    <section className="relative h-screen bg-black text-white">
      <div className="absolute inset-0 overflow-hidden">
        {slides.map((slide, index) => (
          <div 
            key={index}
            className={`absolute inset-0 flex items-center justify-center transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0 pointer-events-none'
            }`}
          >
            {/* 使用Next.js的Image组件 */}
            <div className="absolute inset-0 z-0">
              <Image 
                src={slide.backgroundImage}
                alt={slide.title}
                fill
                priority={true}
                loading="eager"
                quality={100}
                className="object-cover opacity-80"
                sizes="100vw"
                style={{objectFit: "cover"}}
                onError={(e) => {
                  // 图片加载失败时的处理
                  console.error(`Image failed to load: ${slide.title}`);
                  // 尝试添加一个默认背景色
                  const target = e.target as HTMLImageElement;
                  if (target.parentElement) {
                    target.parentElement.style.backgroundColor = 'rgba(0,0,0,0.7)';
                  }
                }}
              />
            </div>
            <div className="relative z-10 text-center max-w-4xl px-6">
              <span className="block text-xl mb-4">{slide.subtitle}</span>
              <h1 className="text-5xl md:text-7xl font-bold mb-8">{slide.title}</h1>
              <Link 
                href={slide.linkHref}
                className="inline-block bg-white text-black px-8 py-3 font-semibold hover:bg-gray-200 transition-colors"
              >
                {slide.linkText}
              </Link>
            </div>
            <div className="absolute inset-0 bg-black bg-opacity-30"></div>
          </div>
        ))}
      </div>

      {/* 社交媒体链接 */}
      <div className="absolute bottom-8 left-8 z-20 flex space-x-4">
        <Link href="#" className="text-white hover:text-gray-300 transition-colors">
          <span className="sr-only">YouTube</span>
          <Image 
            src={`${imagePrefix}/images/youtube-icon.svg`}
            alt="YouTube" 
            width={24} 
            height={24}
            className="text-white"
          />
        </Link>
        <Link href="#" className="text-white hover:text-gray-300 transition-colors">
          <span className="sr-only">Instagram</span>
          <Image 
            src={`${imagePrefix}/images/instagram-icon.svg`}
            alt="Instagram" 
            width={24} 
            height={24}
            className="text-white"
          />
        </Link>
        <Link href="#" className="text-white hover:text-gray-300 transition-colors">
          <span className="sr-only">Twitter</span>
          <Image 
            src={`${imagePrefix}/images/twitter-icon.svg`}
            alt="Twitter" 
            width={24} 
            height={24}
            className="text-white"
          />
        </Link>
      </div>

      {/* 滚动提示 */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 text-center">
        <span className="block text-sm mb-2">Scroll Down</span>
        <div className="w-6 h-12 border-2 border-white rounded-full mx-auto flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full animate-bounce mt-2"></div>
        </div>
      </div>

      {/* 滑动控制按钮 */}
      <div className="absolute right-8 bottom-1/2 transform translate-y-1/2 z-20 flex flex-col space-y-6">
        <button 
          onClick={goToPrevSlide}
          className="w-12 h-12 border border-white rounded-full flex items-center justify-center hover:bg-white hover:bg-opacity-20 transition-colors"
          aria-label="Previous slide"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" transform="rotate(-90 12 12)" />
          </svg>
        </button>
        <button 
          onClick={goToNextSlide}
          className="w-12 h-12 border border-white rounded-full flex items-center justify-center hover:bg-white hover:bg-opacity-20 transition-colors"
          aria-label="Next slide"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" transform="rotate(-90 12 12)" />
          </svg>
        </button>
      </div>
    </section>
  );
};

export default HeroSlider; 
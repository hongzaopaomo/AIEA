'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import LanguageSwitcher from '@/components/common/LanguageSwitcher';
import { useLanguage } from '@/components/common/LanguageContext';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // 暗色模式状态
  const [isDarkMode, setIsDarkMode] = useState(false);
  // 监听滚动以改变导航栏样式
  const [scrolled, setScrolled] = useState(false);
  const { t } = useLanguage();
  
  // 检查系统偏好和用户偏好
  useEffect(() => {
    // 检查本地存储的暗色模式偏好
    const darkModePreference = localStorage.getItem('darkMode') === 'true';
    // 检查系统偏好
    const systemPreference = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const shouldBeDark = darkModePreference ?? systemPreference;
    
    setIsDarkMode(shouldBeDark);
    
    if (shouldBeDark) {
      document.documentElement.classList.add('dark');
    }
  }, []);
  
  // 切换暗色模式
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    if (isDarkMode) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('darkMode', 'false');
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('darkMode', 'true');
    }
  };
  
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    // 当菜单打开时禁止滚动
    document.body.style.overflow = isMenuOpen ? 'auto' : 'hidden';
  };

  return (
    <>
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, type: 'spring', stiffness: 120 }}
        className={`fixed w-full flex justify-between items-center px-4 md:px-8 py-4 z-30 transition-all duration-300 ${
          scrolled 
            ? 'bg-white/90 dark:bg-dark/90 backdrop-blur-md shadow-md' 
            : 'bg-transparent'
        }`}
      >
        <Link href="/" className="logo text-xl md:text-2xl font-bold font-serif hover:text-primary transition-colors">
          AIEA ART FOUNDATION
        </Link>
        
        <div className="flex items-center gap-4">
          {/* 语言切换器 */}
          <LanguageSwitcher />
          
          {/* 暗色模式开关 */}
          <button 
            onClick={toggleDarkMode}
            className="w-10 h-10 flex items-center justify-center text-xl rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
          >
            {isDarkMode ? '☀️' : '🌙'}
          </button>
          
          <button 
            className="more-btn flex flex-col justify-center items-center w-10 h-10 relative"
            onClick={toggleMenu}
            aria-label="Menu"
          >
            <span className={`block w-6 h-0.5 bg-black dark:bg-white mb-1 transition-all ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
            <span className={`block w-6 h-0.5 bg-black dark:bg-white transition-all ${isMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`block w-6 h-0.5 bg-black dark:bg-white mt-1 transition-all ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
          </button>
        </div>
      </motion.nav>

      {/* 弹出菜单 */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-white dark:bg-dark z-40"
          >
            <div className="flex h-full">
              {/* 左侧菜单区域 */}
              <div className="flex-1 flex flex-col justify-center items-start p-10">
                <div className="menu-links space-y-6">
                  {[
                    { href: '/news', label: t('nav.news') },
                    { href: '/projects', label: t('nav.projects') },
                    { href: '/artist', label: t('nav.artist') },
                    { href: '/about', label: t('nav.about') },
                    { href: '/publications', label: t('nav.publications') },
                    { href: '/gifts', label: t('nav.gifts') }
                  ].map((item, index) => (
                    <motion.div
                      key={item.href}
                      initial={{ opacity: 0, x: -50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.1 * index }}
                    >
                      <Link 
                        href={item.href} 
                        className="group block text-3xl md:text-4xl font-semibold transition-colors hover:text-primary" 
                        onClick={toggleMenu}
                      >
                        <span className="title-underline">{item.label}</span>
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </div>
              
              {/* 右侧控制区域 */}
              <div className="w-24 md:w-36 flex flex-col justify-between items-center py-10">
                <button 
                  className="text-4xl font-light hover:text-primary transition-colors"
                  onClick={toggleMenu}
                  aria-label="Close menu"
                >
                  ×
                </button>
                
                <div className="flex flex-col items-center space-y-6">
                  <LanguageSwitcher />
                  
                  <button 
                    onClick={toggleDarkMode}
                    className="w-10 h-10 flex items-center justify-center text-xl hover:text-primary transition-colors"
                    aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
                  >
                    {isDarkMode ? '☀️' : '🌙'}
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar; 
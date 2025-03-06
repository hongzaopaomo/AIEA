'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  // 监听滚动以改变导航栏样式
  const [scrolled, setScrolled] = useState(false);
  
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
      <nav className={`fixed w-full flex justify-between items-center px-8 py-6 z-30 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md' : 'bg-transparent'
      }`}>
        <div className="logo text-xl font-bold">
          <Link href="/">AIEA ART FOUNDATION</Link>
        </div>
        <button 
          className="more-btn flex flex-col justify-center items-center w-10 h-10 relative"
          onClick={toggleMenu}
          aria-label="Menu"
        >
          <span className={`block w-6 h-0.5 bg-black mb-1 transition-all ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-black transition-all ${isMenuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-black mt-1 transition-all ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
        </button>
      </nav>

      {/* 弹出菜单 */}
      <div className={`fixed inset-0 bg-white z-40 transform transition-transform duration-500 ${
        isMenuOpen ? 'translate-y-0' : '-translate-y-full'
      }`}>
        <div className="flex h-full">
          {/* 左侧菜单区域 */}
          <div className="flex-1 flex flex-col justify-center items-start p-10">
            <div className="menu-links space-y-6">
              <Link href="/news" className="block text-3xl font-semibold hover:text-gray-600 transition-colors" onClick={toggleMenu}>News</Link>
              <Link href="/projects" className="block text-3xl font-semibold hover:text-gray-600 transition-colors" onClick={toggleMenu}>Projects</Link>
              <Link href="/artist" className="block text-3xl font-semibold hover:text-gray-600 transition-colors" onClick={toggleMenu}>Artist</Link>
              <Link href="/about" className="block text-3xl font-semibold hover:text-gray-600 transition-colors" onClick={toggleMenu}>About</Link>
              <Link href="/publications" className="block text-3xl font-semibold hover:text-gray-600 transition-colors" onClick={toggleMenu}>Publications</Link>
              <Link href="/gifts" className="block text-3xl font-semibold hover:text-gray-600 transition-colors" onClick={toggleMenu}>Gifts</Link>
            </div>
          </div>
          
          {/* 右侧关闭按钮区域 */}
          <div className="w-24 flex justify-center items-start pt-10">
            <button 
              className="text-4xl font-light"
              onClick={toggleMenu}
              aria-label="Close menu"
            >
              ×
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar; 
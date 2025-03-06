'use client';

import Link from 'next/link';
import { useRef } from 'react';

const Footer = () => {
  const emailInputRef = useRef<HTMLInputElement>(null);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // 处理邮件订阅逻辑
    if (emailInputRef.current?.value) {
      alert(`感谢订阅！邮件已发送至 ${emailInputRef.current.value}`);
      emailInputRef.current.value = '';
    }
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-16 grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* 左侧 - 订阅区域 */}
        <div className="space-y-6">
          <h2 className="text-3xl font-bold">Get Art in Your Inbox</h2>
          <p className="text-gray-300">
            Feed your art habit. Hear the latest from arts across the African, Art Fund&apos;s fundraising initiatives, and special offers.
          </p>
          
          <form className="space-y-4" onSubmit={handleSubmit}>
            <input 
              type="email" 
              placeholder="Your email (required)" 
              required
              ref={emailInputRef}
              className="w-full p-3 bg-gray-800 border border-gray-700 text-white rounded"
            />
            <button 
              type="submit"
              className="w-full p-3 bg-white text-gray-900 font-semibold rounded hover:bg-gray-200 transition-colors"
            >
              SUBSCRIBE
            </button>
          </form>
          
          <p className="text-sm text-gray-400">
            We promise to respect the information you&apos;ve given us; we will use it to send you our e-newsletter. Your information may, in some instances, be combined with publicly available data to determine which projects you care most about and anticipate whether you might want to support us in future.
          </p>
        </div>

        {/* 右侧 - 导航链接 */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">About</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="text-gray-300 hover:text-white transition-colors">Our purpose</Link></li>
              <li><Link href="#" className="text-gray-300 hover:text-white transition-colors">Our team</Link></li>
              <li><Link href="#" className="text-gray-300 hover:text-white transition-colors">Annual reports</Link></li>
              <li><Link href="#" className="text-gray-300 hover:text-white transition-colors">Museum of the Year</Link></li>
              <li><Link href="#" className="text-gray-300 hover:text-white transition-colors">Art Funded by you</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">For visitors</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="text-gray-300 hover:text-white transition-colors">Museums & exhibitions</Link></li>
              <li><Link href="#" className="text-gray-300 hover:text-white transition-colors">Get a National Art Pass</Link></li>
              <li><Link href="#" className="text-gray-300 hover:text-white transition-colors">Donate</Link></li>
              <li><Link href="#" className="text-gray-300 hover:text-white transition-colors">Refer a friend</Link></li>
              <li><Link href="#" className="text-gray-300 hover:text-white transition-colors">Art in your Inbox</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Help</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="text-gray-300 hover:text-white transition-colors">Frequently asked questions</Link></li>
              <li><Link href="#" className="text-gray-300 hover:text-white transition-colors">Contact us</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">For arts professionals</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="text-gray-300 hover:text-white transition-colors">Get funding</Link></li>
              <li><Link href="#" className="text-gray-300 hover:text-white transition-colors">Promote your venue</Link></li>
              <li><Link href="#" className="text-gray-300 hover:text-white transition-colors">Online ticketing</Link></li>
              <li><Link href="#" className="text-gray-300 hover:text-white transition-colors">News & Insights</Link></li>
            </ul>
          </div>
        </div>
      </div>

      {/* 底部分隔线和版权信息 */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400">Copyright © AIEA Art Foundation all rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link href="#" className="text-gray-400 hover:text-white">
              <span className="sr-only">Instagram</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </Link>
            <Link href="#" className="text-gray-400 hover:text-white">
              <span className="sr-only">Twitter</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
              </svg>
            </Link>
            <Link href="#" className="text-gray-400 hover:text-white">
              <span className="sr-only">YouTube</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 
'use client';

import Link from 'next/link';
import Image from 'next/image';

// 添加图片路径前缀
const imagePrefix = process.env.NODE_ENV === 'production' ? '/AIEA' : '';

const NewsSection = () => {
  return (
    <section className="py-24 bg-gray-900 text-white relative overflow-hidden">
      {/* 背景装饰 */}
      <div className="absolute inset-0 z-0">
        <Image
          src={`${imagePrefix}/images/latest-news.jpg`}
          alt="News background"
          fill
          className="object-cover opacity-20"
          sizes="100vw"
        />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="text-xl font-medium mb-4 text-gray-300">ARTTIME</div>
          <h2 className="text-4xl md:text-6xl font-bold mb-10">Stay updated with our latest news?</h2>
          
          <Link 
            href="/news"
            className="inline-block bg-white text-black px-10 py-4 font-semibold hover:bg-gray-200 transition-colors"
          >
            Go to Latest News
          </Link>
        </div>
      </div>
    </section>
  );
};

export default NewsSection; 
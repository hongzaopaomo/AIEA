'use client';

import Link from 'next/link';
import Image from 'next/image';

const AboutSection = () => {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="text-gray-500 font-medium">Dedicated to African Art</div>
            <h2 className="text-4xl md:text-5xl font-bold">AIEA Art Foundation</h2>
            <div className="prose prose-lg">
              <p>
                AIEA Art Foundation is an African art foundation dedicated to supporting local artists, 
                promoting cultural exchange, and enhancing the global influence of African art. 
                Through exhibitions, education, and funding programs, we inspire creativity, 
                preserve traditions, and empower the future of African art.
              </p>
            </div>
            <Link 
              href="/about"
              className="inline-block mt-4 text-black border-b border-black pb-1 hover:border-gray-500 hover:text-gray-500 transition-colors"
            >
              More Info
            </Link>
          </div>
          
          <div className="relative">
            <div className="aspect-[4/5] relative rounded-lg overflow-hidden">
              <Image
                src="/images/about.jpg"
                alt="About AIEA Art Foundation"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            
            {/* 装饰元素 */}
            <div className="absolute -bottom-6 -left-6 w-1/2 h-1/2 border-2 border-black rounded-lg z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection; 
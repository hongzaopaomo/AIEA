'use client';

import Link from 'next/link';
import Image from 'next/image';

interface ProjectCardProps {
  title: string;
  href: string;
  className?: string;
  bgImage: string;
}

const ProjectCard = ({ title, href, className = '', bgImage }: ProjectCardProps) => {
  return (
    <Link 
      href={href}
      className={`block relative overflow-hidden group rounded-lg shadow-md ${className}`}
    >
      <div className="absolute inset-0">
        <Image
          src={bgImage}
          alt={title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>
      <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-30 transition-all duration-300"></div>
      <div className="relative z-10 p-8 h-full flex flex-col justify-end">
        <h2 className="text-white text-2xl font-bold group-hover:translate-x-2 transition-transform duration-300">{title}</h2>
      </div>
    </Link>
  );
};

const ProjectsGrid = () => {
  // 确保图片路径前缀正确
  const imagePrefix = process.env.NODE_ENV === 'production' ? '/AIEA' : '';
  
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-12 gap-4 h-[700px]">
          {/* 左上角 */}
          <div className="col-span-6 md:col-span-4 row-span-4 h-full">
            <ProjectCard 
              title="Thematic Program" 
              href="/programs"
              className="h-full"
              bgImage={`${imagePrefix}/images/thematic-program.jpg`}
            />
          </div>
          
          {/* 右上角 */}
          <div className="col-span-6 md:col-span-4 row-span-2 h-full">
            <ProjectCard 
              title="Latest News" 
              href="/news"
              className="h-full"
              bgImage={`${imagePrefix}/images/latest-news.jpg`}
            />
          </div>
          
          {/* 右上 第二块 */}
          <div className="col-span-6 md:col-span-4 row-span-4 h-full">
            <ProjectCard 
              title="Publications" 
              href="/publications"
              className="h-full"
              bgImage={`${imagePrefix}/images/publications.jpg`}
            />
          </div>
          
          {/* 右下 */}
          <div className="col-span-6 md:col-span-4 row-span-2 h-full">
            <ProjectCard 
              title="About the Foundation" 
              href="/about"
              className="h-full"
              bgImage={`${imagePrefix}/images/about.jpg`}
            />
          </div>
          
          {/* 底部 */}
          <div className="col-span-12 md:col-span-8 row-span-2 h-full">
            <ProjectCard 
              title="Commodity" 
              href="/shop"
              className="h-full"
              bgImage={`${imagePrefix}/images/commodity.jpg`}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsGrid; 
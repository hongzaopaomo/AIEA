'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

interface Publication {
  id: number;
  title: string;
  author: string;
  type: string;
  year: number;
  description: string;
  image: string;
  isDigital: boolean;
}

const publications: Publication[] = [
  {
    id: 1,
    title: 'Contemporary African Art: Trends and Perspectives',
    author: 'Dr. Nkechi Afolabi',
    type: 'Book',
    year: 2023,
    description: 'An in-depth exploration of contemporary African artistic movements, featuring interviews with leading artists and curators from across the continent.',
    image: '/images/publications.jpg',
    isDigital: true
  },
  {
    id: 2,
    title: 'Preserving Cultural Heritage Through Art',
    author: 'Prof. Samuel Osei',
    type: 'Journal',
    year: 2023,
    description: 'A scholarly examination of how artists are working to preserve and celebrate African cultural heritage through various artistic mediums.',
    image: '/images/about.jpg',
    isDigital: true
  },
  {
    id: 3,
    title: 'The New Generation: Emerging African Artists',
    author: 'AIEA Art Foundation',
    type: 'Exhibition Catalog',
    year: 2022,
    description: 'A beautifully illustrated catalog documenting the groundbreaking exhibition that showcased the work of 30 emerging artists from 15 African countries.',
    image: '/images/thematic-program.jpg',
    isDigital: false
  },
  {
    id: 4,
    title: 'Digital Frontiers: Technology and African Art',
    author: 'Fatima El-Bashir',
    type: 'Report',
    year: 2022,
    description: 'An exploration of how digital technologies are transforming the creation, distribution, and experience of African art in the 21st century.',
    image: '/images/latest-news.jpg',
    isDigital: true
  },
  {
    id: 5,
    title: 'Art Education in Africa: Challenges and Opportunities',
    author: 'Dr. Jean-Pierre Kouassi',
    type: 'Research Paper',
    year: 2021,
    description: 'A comprehensive analysis of the state of art education across African countries, with case studies and recommendations for improvement.',
    image: '/images/promote-art-education.jpg',
    isDigital: true
  },
  {
    id: 6,
    title: 'Voices from the Diaspora: African Artists Abroad',
    author: 'Maya Washington & Kofi Mensah',
    type: 'Book',
    year: 2021,
    description: 'A collection of essays and artworks exploring the experiences and perspectives of African artists living and working in the diaspora.',
    image: '/images/connect-art-community.jpg',
    isDigital: false
  }
];

export default function PublicationsPage() {
  const [filter, setFilter] = useState<string>('All');
  
  const filters = ['All', 'Book', 'Journal', 'Exhibition Catalog', 'Report', 'Research Paper'];
  
  const filteredPublications = filter === 'All' 
    ? publications 
    : publications.filter(pub => pub.type === filter);

  return (
    <div className="pt-24">
      {/* 页面标题 */}
      <div className="bg-gray-900 text-white py-24">
        <div className="container mx-auto px-4 max-w-5xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Publications</h1>
          <p className="text-xl text-gray-300 max-w-3xl">
            Explore our collection of books, catalogs, journals, and research papers on African art and culture.
          </p>
        </div>
      </div>

      {/* 筛选器 */}
      <div className="bg-gray-100 py-6">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="flex flex-wrap gap-3">
            {filters.map(f => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  filter === f 
                    ? 'bg-black text-white' 
                    : 'bg-white text-gray-700 hover:bg-gray-200'
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* 出版物列表 */}
      <div className="container mx-auto px-4 py-16 max-w-6xl">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPublications.map((pub) => (
            <div key={pub.id} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
              <div className="relative h-64">
                <Image
                  src={pub.image}
                  alt={pub.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                {pub.isDigital && (
                  <div className="absolute top-4 right-4 bg-blue-500 text-white text-xs font-bold px-2 py-1 rounded">
                    Digital Access
                  </div>
                )}
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <span className="inline-block bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded">
                    {pub.type}
                  </span>
                  <span className="text-gray-500 text-sm">{pub.year}</span>
                </div>
                <h2 className="text-xl font-bold mb-2">{pub.title}</h2>
                <p className="text-gray-500 text-sm mb-3">By {pub.author}</p>
                <p className="text-gray-600 mb-4 line-clamp-3">{pub.description}</p>
                <div className="flex space-x-3">
                  <Link 
                    href={`/publications/${pub.id}`} 
                    className="inline-block text-black font-medium border-b border-black pb-1 hover:text-gray-600 hover:border-gray-600 transition-colors"
                  >
                    Details
                  </Link>
                  {pub.isDigital && (
                    <Link 
                      href={`/publications/${pub.id}/read`} 
                      className="inline-block text-blue-600 font-medium border-b border-blue-600 pb-1 hover:text-blue-800 hover:border-blue-800 transition-colors"
                    >
                      Read Online
                    </Link>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 提交作品 */}
        <div className="mt-20 bg-gray-800 text-white rounded-lg p-8 md:p-12">
          <div className="md:flex items-center justify-between">
            <div className="max-w-2xl mb-8 md:mb-0">
              <h2 className="text-3xl font-bold mb-4">Submit Your Publication</h2>
              <p className="text-gray-300">
                Are you a researcher, author, or academic working on African art and culture? 
                We welcome submissions for our publications platform.
              </p>
            </div>
            <Link 
              href="/publications/submit" 
              className="inline-block bg-white text-black px-8 py-4 rounded font-medium hover:bg-gray-200 transition-colors"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
} 
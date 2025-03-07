'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { motion } from 'framer-motion';
import AnimatedLayout from '@/components/common/AnimatedLayout';
import { FadeUp, StaggerContainer, StaggerItem } from '@/components/common/AnimatedComponents';

interface Artist {
  id: number;
  name: string;
  country: string;
  discipline: string;
  bio: string;
  image: string;
  featured: boolean;
}

const artists: Artist[] = [
  {
    id: 1,
    name: '张艺谋',
    country: '中国',
    discipline: '电影导演',
    bio: '著名电影导演，代表作《红高粱》《英雄》《影》等。',
    image: '/AIEA/images/foster-artistic-talents.jpg',
    featured: true
  },
  {
    id: 2,
    name: '贾樟柯',
    country: '中国',
    discipline: '电影导演',
    bio: '著名电影导演，代表作《小武》《山河故人》《江湖儿女》等。',
    image: '/AIEA/images/connect-art-community.jpg',
    featured: true
  },
  {
    id: 3,
    name: '王家卫',
    country: '中国',
    discipline: '电影导演',
    bio: '著名电影导演，代表作《重庆森林》《花样年华》《2046》等。',
    image: '/AIEA/images/promote-art-education.jpg',
    featured: false
  },
  {
    id: 4,
    name: '娄烨',
    country: '中国',
    discipline: '电影导演',
    bio: '著名电影导演，代表作《苏州河》《春风沉醉的晚上》《推拿》等。',
    image: '/AIEA/images/thematic-program.jpg',
    featured: false
  },
  {
    id: 5,
    name: '毕赣',
    country: '中国',
    discipline: '电影导演',
    bio: '著名电影导演，代表作《路边野餐》《地球最后的夜晚》等。',
    image: '/AIEA/images/latest-news.jpg',
    featured: true
  },
  {
    id: 6,
    name: '李安',
    country: '中国',
    discipline: '电影导演',
    bio: '著名电影导演，代表作《卧虎藏龙》《断背山》《少年派的奇幻漂流》等。',
    image: '/AIEA/images/publications.jpg',
    featured: false
  },
  {
    id: 7,
    name: '陈凯歌',
    country: '中国',
    discipline: '电影导演',
    bio: '著名电影导演，代表作《霸王别姬》《无极》《妖猫传》等。',
    image: '/AIEA/images/about.jpg',
    featured: false
  },
  {
    id: 8,
    name: '冯小刚',
    country: '中国',
    discipline: '电影导演',
    bio: '著名电影导演，代表作《唐人街探案》《我不是潘金莲》等。',
    image: '/AIEA/images/commodity.jpg',
    featured: false
  }
];

export default function ArtistPage() {
  const [discipline, setDiscipline] = useState<string>('All');
  
  const disciplines = ['All', ...Array.from(new Set(artists.map(artist => artist.discipline)))];
  
  const filteredArtists = discipline === 'All' 
    ? artists 
    : artists.filter(artist => artist.discipline === discipline);

  const featuredArtists = artists.filter(artist => artist.featured);

  return (
    <div className="pt-24">
      {/* 页面标题 */}
      <div className="bg-gray-900 text-white py-24">
        <div className="container mx-auto px-4 max-w-5xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Featured Artists</h1>
          <p className="text-xl text-gray-300 max-w-3xl">
            Discover the talented artists from across Africa whose work we support, promote, and celebrate.
          </p>
        </div>
      </div>

      {/* 特色艺术家 */}
      <div className="bg-gray-100 py-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl font-bold mb-10 text-center">Featured Artists</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {featuredArtists.map((artist) => (
              <div key={artist.id} className="group relative overflow-hidden rounded-lg shadow-lg h-96">
                <Image
                  src={artist.image}
                  alt={artist.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-2xl font-bold mb-1">{artist.name}</h3>
                  <p className="text-gray-300 mb-3">{artist.discipline} • {artist.country}</p>
                  <p className="mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 line-clamp-3">{artist.bio}</p>
                  <Link 
                    href={`/artist/${artist.id}`} 
                    className="inline-block bg-white text-black px-4 py-2 rounded text-sm font-medium hover:bg-gray-200 transition-colors"
                  >
                    View Profile
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 筛选器 */}
      <div className="container mx-auto px-4 max-w-6xl py-16">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-10">
          <h2 className="text-3xl font-bold mb-4 md:mb-0">All Artists</h2>
          <div className="flex flex-wrap gap-3">
            {disciplines.map(d => (
              <button
                key={d}
                onClick={() => setDiscipline(d)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  discipline === d 
                    ? 'bg-black text-white' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {d}
              </button>
            ))}
          </div>
        </div>

        {/* 艺术家列表 */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredArtists.map((artist) => (
            <Link key={artist.id} href={`/artist/${artist.id}`} className="group">
              <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
                <div className="relative h-64">
                  <Image
                    src={artist.image}
                    alt={artist.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-bold">{artist.name}</h3>
                  <p className="text-gray-600 text-sm">{artist.discipline} • {artist.country}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* 申请加入 */}
      <div className="bg-black text-white py-16">
        <div className="container mx-auto px-4 max-w-6xl text-center">
          <h2 className="text-3xl font-bold mb-4">Are you an artist?</h2>
          <p className="text-gray-300 max-w-2xl mx-auto mb-8">
            We&apos;re always looking to support and promote new talent. Apply to join our artist community 
            and benefit from our platform, resources, and global network.
          </p>
          <Link 
            href="/apply" 
            className="inline-block bg-white text-black px-8 py-4 rounded font-medium hover:bg-gray-200 transition-colors"
          >
            Apply Now
          </Link>
        </div>
      </div>

      {/* 新添加的段落 */}
      <div className="bg-gray-100 py-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-3 text-white">Contemporary African Art Advocacy</h2>
            <p className="text-gray-300 mb-4">
              Our artists are dedicated to challenging stereotypes and expanding the global understanding 
              of African art. We believe in art&apos;s power to transform perspectives and foster 
              intercultural dialogue.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
} 
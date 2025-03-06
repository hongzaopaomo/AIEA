'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

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
    name: 'Amara Nwosu',
    country: 'Nigeria',
    discipline: 'Painting',
    bio: 'Amara Nwosu is a celebrated painter whose work explores themes of identity, memory, and cultural heritage through vibrant color palettes and bold compositions.',
    image: '/images/foster-artistic-talents.jpg',
    featured: true
  },
  {
    id: 2,
    name: 'Kofi Mensah',
    country: 'Ghana',
    discipline: 'Sculpture',
    bio: 'Kofi Mensah creates striking sculptures that combine traditional techniques with contemporary sensibilities, reflecting on Ghana\'s rich artistic heritage.',
    image: '/images/connect-art-community.jpg',
    featured: true
  },
  {
    id: 3,
    name: 'Zainab Omar',
    country: 'Kenya',
    discipline: 'Photography',
    bio: 'Through her lens, Zainab Omar captures the evolving urban landscapes of East Africa, documenting the intersection of tradition and modernity.',
    image: '/images/promote-art-education.jpg',
    featured: false
  },
  {
    id: 4,
    name: 'Jean-Claude Bakayoko',
    country: 'Côte d\'Ivoire',
    discipline: 'Mixed Media',
    bio: 'Jean-Claude Bakayoko\'s mixed-media installations challenge viewers to reconsider historical narratives and contemporary social issues.',
    image: '/images/thematic-program.jpg',
    featured: false
  },
  {
    id: 5,
    name: 'Fatima El-Bashir',
    country: 'Sudan',
    discipline: 'Digital Art',
    bio: 'Pioneering the digital art space in Sudan, Fatima El-Bashir creates immersive digital experiences that bridge traditional Sudanese art with new technologies.',
    image: '/images/latest-news.jpg',
    featured: true
  },
  {
    id: 6,
    name: 'David Mwangi',
    country: 'Kenya',
    discipline: 'Painting',
    bio: 'David Mwangi\'s abstract paintings draw inspiration from Kenya\'s natural landscapes, transforming them into contemplative explorations of color and form.',
    image: '/images/publications.jpg',
    featured: false
  },
  {
    id: 7,
    name: 'Nia Diallo',
    country: 'Senegal',
    discipline: 'Textile Art',
    bio: 'Nia Diallo revitalizes traditional West African textile techniques, creating contemporary works that honor ancestral craftsmanship while addressing modern themes.',
    image: '/images/about.jpg',
    featured: false
  },
  {
    id: 8,
    name: 'Malik Ibrahim',
    country: 'Egypt',
    discipline: 'Calligraphy',
    bio: 'Malik Ibrahim\'s calligraphic works blend Arabic script with contemporary design elements, creating visually stunning pieces that speak to both tradition and innovation.',
    image: '/images/commodity.jpg',
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
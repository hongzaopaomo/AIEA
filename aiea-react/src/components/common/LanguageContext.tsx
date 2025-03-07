'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Language = 'en' | 'fr' | 'sw';

type Translations = {
  [key: string]: {
    [key in Language]: string;
  };
};

// 基本翻译键值对
const translations: Translations = {
  // 导航
  'nav.news': {
    en: 'News',
    fr: 'Actualités',
    sw: 'Habari'
  },
  'nav.projects': {
    en: 'Projects',
    fr: 'Projets',
    sw: 'Miradi'
  },
  'nav.artist': {
    en: 'Artist',
    fr: 'Artiste',
    sw: 'Msanii'
  },
  'nav.about': {
    en: 'About',
    fr: 'À propos',
    sw: 'Kuhusu'
  },
  'nav.publications': {
    en: 'Publications',
    fr: 'Publications',
    sw: 'Machapisho'
  },
  'nav.gifts': {
    en: 'Gifts',
    fr: 'Cadeaux',
    sw: 'Zawadi'
  },
  // 首页轮播
  'slider.foundation': {
    en: 'AIEA ART FOUNDATION',
    fr: 'FONDATION D\'ART AIEA',
    sw: 'TAASISI YA SANAA YA AIEA'
  },
  'slider.connect.title': {
    en: 'CONNECT ART COMMUNITY',
    fr: 'CONNECTER LA COMMUNAUTÉ ARTISTIQUE',
    sw: 'KUUNGANISHA JAMII YA SANAA'
  },
  'slider.promote.title': {
    en: 'PROMOTE ART EDUCATION',
    fr: 'PROMOUVOIR L\'ÉDUCATION ARTISTIQUE',
    sw: 'KUKUZA ELIMU YA SANAA'
  },
  'slider.foster.title': {
    en: 'FOSTER ARTISTIC TALENTS',
    fr: 'ENCOURAGER LES TALENTS ARTISTIQUES',
    sw: 'KUENDELEZA VIPAJI VYA KISANAA'
  },
  // 首页内容
  'home.title': {
    en: 'Dedicated to African Art',
    fr: 'Dédié à l\'art africain',
    sw: 'Inayojitoa kwa Sanaa ya Kiafrika'
  },
  'home.foundation': {
    en: 'AIEA Art Foundation',
    fr: 'Fondation d\'art AIEA',
    sw: 'Taasisi ya Sanaa ya AIEA'
  },
  'home.description': {
    en: 'AIEA Art Foundation is an African art foundation dedicated to supporting local artists, promoting cultural exchange, and enhancing the global influence of African art.',
    fr: 'La Fondation d\'art AIEA est une fondation d\'art africain dédiée au soutien des artistes locaux, à la promotion des échanges culturels et au renforcement de l\'influence mondiale de l\'art africain.',
    sw: 'Taasisi ya Sanaa ya AIEA ni taasisi ya sanaa ya Kiafrika inayojitoa kusaidia wasanii wa ndani, kukuza ubadilishanaji wa kitamaduni, na kuimarisha ushawishi wa kimataifa wa sanaa ya Kiafrika.'
  },
  'home.scroll': {
    en: 'Scroll Down',
    fr: 'Défiler vers le bas',
    sw: 'Sogeza Chini'
  },
  // 通用文本
  'common.moreInfo': {
    en: 'More Info',
    fr: 'Plus d\'infos',
    sw: 'Maelezo Zaidi'
  },
  'common.subscribe': {
    en: 'SUBSCRIBE',
    fr: 'S\'ABONNER',
    sw: 'JIANDIKISHE'
  },
  'common.goTo': {
    en: 'Go to',
    fr: 'Aller à',
    sw: 'Nenda kwa'
  },
  'common.readMore': {
    en: 'Read More',
    fr: 'Lire Plus',
    sw: 'Soma Zaidi'
  },
  'common.viewAll': {
    en: 'View All',
    fr: 'Voir Tout',
    sw: 'Ona Yote'
  }
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('en');

  // 从本地存储加载语言偏好
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedLanguage = localStorage.getItem('language') as Language;
      if (savedLanguage && ['en', 'fr', 'sw'].includes(savedLanguage)) {
        setLanguage(savedLanguage);
      }
    }
  }, []);

  // 保存语言偏好到本地存储
  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('language', language);
    }
  }, [language]);

  // 翻译函数
  const t = (key: string): string => {
    if (!translations[key]) {
      console.warn(`Translation key not found: ${key}`);
      return key;
    }
    return translations[key][language] || translations[key].en;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

// 自定义 hook 方便使用
export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
} 
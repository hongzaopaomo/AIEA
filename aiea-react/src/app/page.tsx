import HeroSlider from '@/components/home/HeroSlider';
import AboutSection from '@/components/about/AboutSection';
import ProjectsGrid from '@/components/projects/ProjectsGrid';
import NewsSection from '@/components/news/NewsSection';
import AnimatedLayout from '@/components/common/AnimatedLayout';

export default function Home() {
  return (
    <AnimatedLayout>
      <HeroSlider />
      <AboutSection />
      <ProjectsGrid />
      <NewsSection />
    </AnimatedLayout>
  );
}

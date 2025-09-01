
import { useEffect } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import SocialSidebar from '@/components/layout/SocialSidebar';
import EmailSidebar from '@/components/layout/EmailSidebar';
import ThreeBackground from '@/components/three/ThreeBackground';
import HeroSection from '@/components/sections/HeroSection';
import AboutSection from '@/components/sections/AboutSection';
import ProjectsSection from '@/components/sections/ProjectsSection';
import ContactSection from '@/components/sections/ContactSection';
import { ThemeToggle } from '@/components/ui/theme-toggle';
import { motion } from 'framer-motion';

const Index = () => {
  useEffect(() => {
    document.title = "Full Stack Developer Portfolio";
  }, []);

  return (
    <motion.main 
      className="relative overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <ThreeBackground />
      <Navbar />
      <ThemeToggle />
      <SocialSidebar />
      <EmailSidebar />
      
      <div className="flex flex-col">
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <ContactSection />
      </div>
      
      <Footer />
    </motion.main>
  );
};

export default Index;

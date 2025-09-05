
import { useRef } from 'react';
import { Button } from '@/components/ui/button';
import { motion, useScroll, useTransform } from 'framer-motion';

const HeroSection = () => {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);
  const position = useTransform(scrollYProgress, [0, 1], [0, 100]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.8 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section
      ref={targetRef}
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-20"
    >
      <motion.div
        className="container relative z-10"
        style={{ opacity, scale, y: position }}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.p
          className="text-teal font-mono mb-5"
          variants={itemVariants}
        >
          Hi, my name is
        </motion.p>

        <motion.h1
          className="text-5xl md:text-7xl font-bold text-white mb-4"
          variants={itemVariants}
        >
          Jake Woodall
        </motion.h1>

        <motion.h2
          className="text-4xl md:text-6xl font-bold text-slate mb-8"
          variants={itemVariants}
        >
          I build things for the web and mobile app.
        </motion.h2>

        <motion.p
          className="text-slate max-w-xl text-lg mb-10"
          variants={itemVariants}
        >
          Welcome! I'm Jake Woodall, a full-stack developer with 8+ years of experience specializing in building exceptional digital
          experiences as well as an iOS developer specializing in Swift, SwiftUI, ARKit, and RealityKit.
          I studied Business Administration at Central Washington University, where I developed a strong interest in finance and tech strategy.
          Currently, I'm focused on creating accessible, responsive and robust web and mobile applications with engaging user interfaces.
          Feel free to reach out! 😁
        </motion.p>

        <motion.div variants={itemVariants}>
          <Button
            size="lg"
            className="bg-transparent border border-teal text-teal hover:bg-teal/10"
          >
            Check out my projects
          </Button>
        </motion.div>
      </motion.div>

      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 1, repeat: Infinity, repeatType: "reverse" }}
      >
        <svg
          width="24"
          height="36"
          viewBox="0 0 24 36"
          className="text-teal"
        >
          <rect
            x="1"
            y="1"
            width="22"
            height="34"
            rx="11"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
          />
          <circle
            cx="12"
            cy="12"
            r="4"
            fill="currentColor"
          />
        </svg>
      </motion.div>
    </section>
  );
};

export default HeroSection;

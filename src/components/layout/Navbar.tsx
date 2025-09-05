
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  const navVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, staggerChildren: 0.1, delayChildren: 0.3 }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <motion.header
      initial="hidden"
      animate="visible"
      variants={navVariants}
      className={cn(
        'fixed top-0 w-full z-50 transition-all duration-300',
        scrolled 
          ? 'bg-navy-dark/90 backdrop-blur-md py-3 shadow-lg light-mode:bg-slate-light/90' 
          : 'bg-transparent py-5 light-mode:bg-transparent'
      )}
    >
      <div className="container flex items-center justify-between">
        <motion.div 
          variants={itemVariants} 
          className="flex items-center"
        >
          <a href="#home" className="text-2xl font-bold text-white light-mode:text-navy-dark font-space">
            <span className="text-teal">&lt;</span>
            My Portfolio
            <span className="text-teal">/&gt;</span>
          </a>
        </motion.div>

        {/* Desktop nav */}
        <motion.nav variants={itemVariants} className="hidden md:block">
          <ul className="flex items-center gap-8">
            {navItems.map((item, i) => (
              <motion.li key={item.name} variants={itemVariants}>
                <a href={item.href} className="nav-link">
                  <span className="text-teal mr-1">{`0${i + 1}.`}</span>
                  {item.name}
                </a>
              </motion.li>
            ))}
            {/* <motion.li variants={itemVariants}>
              <Button 
                variant="outline" 
                className="border-teal text-teal hover:bg-teal/10"
                onClick={() => window.open('/resume.pdf', '_blank')}
              >
                Resume
              </Button>
            </motion.li> */}
          </ul>
        </motion.nav>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <Button 
            variant="ghost" 
            className="p-1" 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="24" 
              height="24" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
              className="text-slate light-mode:text-navy-dark"
            >
              {mobileMenuOpen ? (
                <path d="M18 6 6 18M6 6l12 12"/>
              ) : (
                <path d="M4 12h16M4 6h16M4 18h16"/>
              )}
            </svg>
          </Button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden absolute top-full w-full bg-navy-dark light-mode:bg-slate-light shadow-lg"
        >
          <div className="container py-4">
            <ul className="flex flex-col space-y-4">
              {navItems.map((item, i) => (
                <li key={item.name}>
                  <a 
                    href={item.href} 
                    className="block py-2 nav-link"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <span className="text-teal mr-1">{`0${i + 1}.`}</span>
                    {item.name}
                  </a>
                </li>
              ))}
              {/* <li>
                <Button 
                  variant="outline" 
                  className="border-teal text-teal hover:bg-teal/10 w-full"
                  onClick={() => {
                    window.open('/resume.pdf', '_blank');
                    setMobileMenuOpen(false);
                  }}
                >
                  Resume
                </Button>
              </li> */}
            </ul>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
};

export default Navbar;

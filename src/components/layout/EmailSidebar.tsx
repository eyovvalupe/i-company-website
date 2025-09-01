
import { motion } from "framer-motion";

const EmailSidebar = () => {
  const sidebarVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        delay: 1.2,
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };
  
  const linkVariants = {
    initial: { color: "#8892b0" },
    hover: { 
      color: "#64ffda",
      y: -5,
      transition: { duration: 0.3 }
    }
  };

  return (
    <motion.div 
      className="fixed right-6 bottom-0 hidden md:flex flex-col items-center"
      variants={sidebarVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.a 
        href="mailto:enjoyablecoder1758981@gmail.com" 
        className="font-mono tracking-widest vertical-text transform transition-all duration-300"
        style={{ writingMode: 'vertical-rl' }}
        variants={linkVariants}
        initial="initial"
        whileHover="hover"
        whileTap={{ scale: 0.95 }}
      >
        enjoyablecoder1758981@gmail.com
      </motion.a>
      <motion.div 
        className="w-px h-24 bg-teal mt-6"
        initial={{ height: 0 }}
        animate={{ height: 96 }}
        transition={{ delay: 1.6, duration: 0.8, ease: "easeOut" }}
      />
    </motion.div>
  );
};

export default EmailSidebar;

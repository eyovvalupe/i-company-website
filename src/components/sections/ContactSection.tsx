
import { motion } from 'framer-motion';
import { useRef } from 'react';
import { useInView } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Mail, Phone, Navigation } from "lucide-react";

const ContactSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section id="contact" className="py-24 bg-navy-dark">
      <div className="container max-w-4xl">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center"
        >
          <motion.span
            className="text-teal font-mono"
            variants={itemVariants}
          >
            04. What's Next?
          </motion.span>

          <motion.h2
            className="text-4xl md:text-5xl font-bold text-white light-mode:text-navy-dark mt-4 mb-6"
            variants={itemVariants}
          >
            Get In Touch
          </motion.h2>

          <motion.p
            className="text-slate light-mode:text-slate-dark max-w-lg mx-auto mb-12"
            variants={itemVariants}
          >
            I'm currently looking for new opportunities. Whether you have a question or
            just want to say hi, I'll do my best to get back to you!
          </motion.p>

          <motion.div
            className="flex flex-col items-center gap-8 max-w-md mx-auto"
            variants={itemVariants}
          >
            <div className="w-full bg-navy light-mode:bg-white p-6 rounded-lg border border-slate-dark light-mode:border-slate hover:border-teal transition-colors shadow-teal-glow">
              <div className="flex flex-col gap-8">
                <a
                  href="mailto:pkohler1758981@gmail.com"
                  className="flex flex-col gap-4 text-slate light-mode:text-slate-dark hover:text-teal transition-colors group"
                >
                  <div className='flex gap-4'>
                    <div className="bg-navy-light light-mode:bg-slate-light p-3 rounded-full group-hover:bg-teal/10 transition-colors">
                      <Mail className="text-teal" />
                    </div>
                    <div className="text-left">
                      <p className="text-teal font-medium">Email</p>
                      <p className="text-white light-mode:text-navy-dark text-lg">enjoyablecoder1758981@gmail.com</p>
                    </div>
                  </div>

                  
                </a>

                <a 
                  href="tel:+41786084615" 
                  className="flex gap-4 text-slate light-mode:text-slate-dark hover:text-teal transition-colors group"
                >
                  <div className='flex gap-4'>
                    <div className="bg-navy-light light-mode:bg-slate-light p-3 rounded-full group-hover:bg-teal/10 transition-colors">
                      <Navigation className="text-teal" />
                    </div>
                    <div className="text-left">
                      <p className="text-teal font-medium">Telegram</p>
                      <p className="text-white light-mode:text-navy-dark text-lg">@Enjoyablecode</p>
                    </div>
                  </div>
                </a>
              </div>
            </div>

            <Button
              asChild
              className="bg-transparent border border-teal hover:bg-teal/10 text-teal transition-colors w-full md:w-auto"
            >
              <a href="mailto:pkohler1758981@gmail.com">Send Email</a>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;

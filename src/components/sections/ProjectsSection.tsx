
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

const projects = [
  {
    id: 1,
    title: "iBite",
    description:
      "iBite helps you to solve the food ordering decision process by offering digital menu services with augmented reality and artificial intelligence technology.",
    tags: ["React", "TypeScript", "Zustain", "Firebase", "Nodejs", "React Native", "Android", "Swift", "IOS"],
    demoLink: "https://ibite.app/",
    codeLink: "#",
    image: "/ibite.webp",
    reverse: false,
  },
  {
    id: 2,
    title: "Saas Platform",
    description:
      "Vanlo is a buying group for eCommerce companies that leverages the collective volume of our members to negotiate and furnish discounts on a number of technical and operational services.",
    tags: ["React", "React Tool Kit", "React Hook Form", "Ruby on Rails", "PostgreSQL", "Stripe", "React Native", "Plaid"],
    demoLink: "https://vanlo.com/",
    codeLink: "#",
    image: "/vanlo.jpg",
    reverse: true,
  },
  {
    id: 3,
    title: "Web3-Centralized Exchange Platform",
    description:
      "SunEx is a digital platform managed by a central authority that facilitates the buying, selling, and trading of cryptocurrencies. Users deposit their funds into the exchange, which then handles the transactions, matching buy and sell orders. This model is akin to traditional financial markets, where the exchange acts as an intermediary between traders.",
    tags: ["Vue3", "Tailwind CSS", "Webpack", "Vite", "Node"],
    demoLink: "https://www.sungame.shop/",
    codeLink: "#",
    image: "/sunex.jpg",
    reverse: false,
  },
  {
    id: 4,
    title: "Real-Ecommerce App",
    description:
      "EveryUSB is a specialized e-commerce platform that focuses on providing custom USB flash drives and related promotional products. The website offers a range of services, including data preloading, custom packaging, and various imprint methods to personalize USB drives for businesses and organizations.",
    tags: ["React", "Laravel", "PHP", "MySQL"],
    demoLink: "https://everyusb.com",
    codeLink: "#",
    image: "/everyusb.jpg",
    reverse: true,
  },
];

const otherProjects = [
  {
    title: "SaaS - Selliox",
    description: "Selliox is a robust SaaS platform designed to empower entrepreneurs, small businesses, and agencies to quickly launch and manage fully functional e-commerce stores.",
    tags: ["React", "Node.js", "Stripe"],
    url: "https://Selliox.com",
  },
  {
    title: "SaaS - GymSale",
    description: "GymSales by ABC Fitness Solutions is a cloud-based CRM and lead management platform that helps gyms and fitness businesses streamline sales and convert leads into members.",
    tags: ["React", "React Native", "Ruby on Rails", "Stripe"],
    url: "https://gymsales.io",
  },
  {
    title: "SaaS - CleanBootcamp",
    description: "CleanBootcamp is a comprehensive platform that helps you build, scale, and optimize your cleaning business. Start with priority consulting, then explore our specialized business tools.",
    tags: ["Bolt", "React.js", "Node.js", "Stripe"],
    url: "https://rocket.fun",
  },
  {
    title: "TON - NFT Market Platform",
    description: "A next-generation NFT marketplace built on the TON (The Open Network) blockchain, enabling fast, secure, and scalable trading of digital assets.",
    tags: ["React", "Func", "TON"],
    url: "https://getgems.io/",
  },
  {
    title: "Dating app - Frienzy",
    description: "Frienzy is a modern dating app designed to transform meaningful friendships into lasting relationships.",
    tags: ["React Native", "JavaScript", "CSS"],
    url: "https://play.google.com/store/apps/details?id=com.frenzy.android&hl=en&pli=1",
  },
  {
    title: "Realtime Chatting App",
    description: "A real-time chatting app that enables instant communication between users through one-on-one or group messaging like telegram.",
    tags: ["MongoDB", "Express.js", "React", "Node.js", "Firebase", "Socket.io"],
    url: "https://realtime-chat-app-one-topaz.vercel.app",
  },
  {
    title: "Panolens Project",
    description: "PanoLens.js is a JavaScript library used for creating and displaying 360-degree panoramic images on the web.",
    tags: ["React", "Three.js", "panolens.js"],
    url: "https://panolens-prac.vercel.app/"
  },
];

const ProjectsSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
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

  const cardVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: (i: number) => ({
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, delay: i * 0.1 }
    })
  };

  return (
    <section id="projects" className="py-24">
      <div className="container">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.h2
            className="section-heading"
            variants={itemVariants}
          >
            My Projects
          </motion.h2>

          <div className="space-y-32">
            {projects.map((project) => (
              <motion.div
                key={project.id}
                className={`flex flex-col ${project.reverse ? 'md:flex-row-reverse' : 'md:flex-row'} gap-8 items-center`}
                variants={itemVariants}
              >
                <div className="w-full md:w-1/2">
                  <div className="relative group">
                    <div className="absolute inset-0 bg-teal/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <img
                      src={project.image}
                      alt={project.title}
                      className="rounded-lg w-full h-auto border border-slate-dark/20"
                    />
                  </div>
                </div>

                <div className="w-full md:w-1/2 space-y-4">
                  <span className="text-teal font-mono">Featured Project</span>
                  <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                  <div className="bg-navy-light p-6 rounded-lg shadow-lg">
                    <p>{project.description}</p>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="font-mono text-sm text-teal"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4">
                    <a
                      href={project.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate hover:text-teal transition-colors"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                    </a>
                    <a
                      href={project.codeLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate hover:text-teal transition-colors"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-32">
            <motion.h3
              className="text-2xl font-bold text-white text-center mb-12"
              variants={itemVariants}
            >
              Other Noteworthy Projects
            </motion.h3>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {otherProjects.map((project, i) => (
                <motion.div
                  key={project.title}
                  custom={i}
                  variants={cardVariants}
                >
                  <Card className="h-full flex flex-col bg-navy-light hover:translate-y-[-5px] transition-transform duration-300">
                    <div className="p-6 flex flex-col h-full">
                      <div className="flex justify-between items-center mb-4">
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" className="text-teal" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
                        <div className="flex gap-4">
                          <a href={project.url} className="text-slate hover:text-teal transition-colors">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                          </a>
                          <a href="#" className="text-slate hover:text-teal transition-colors">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
                          </a>
                        </div>
                      </div>

                      <h4 className="text-xl font-bold text-white mb-2">{project.title}</h4>
                      <p className="text-slate mb-6 flex-grow">{project.description}</p>

                      <div className="flex flex-wrap gap-2 mt-auto">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-xs font-mono text-teal"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <Button
                variant="outline"
                className="border-teal text-teal hover:bg-teal/10"
              >
                Show More
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;

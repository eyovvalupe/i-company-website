
import { useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import { School, Languages, MapPin } from "lucide-react";

const skills = [
  { name: "React", level: 98 },
  { name: "Next.js", level: 95 },
  { name: "Vue.js", level: 95 },
  { name: "React Native(Expo)", level: 92 },
  { name: "Node.js", level: 95 },
  { name: "Nest.js", level: 95 },
  { name: "Laravel", level: 95 },
  { name: "Ruby on Rails", level: 95 },
  { name: "TypeScript", level: 90 },
];

const languageSkills = [
  { language: "English", level: "Professional", proficiency: 95 },
  // { language: "Spanish", level: "Fluent", proficiency: 95 },
  { language: "Chinese", level: "Native", proficiency: 100 },
];

const education = [
  {
    degree: "Engineer's degree of Computer Science",
    institution: "The Art Institute",
    location: "Tianjin, China",
    period: "2013 - 2017"
  }
];

const technologiesByCategory = {
  "Frontend": [
    "React", "Redux", "React Hooks", "Antd", "MUI", 
    "HTML5", "CSS3", "Tailwind CSS", "TypeScript", "JavaScript", "Axios"
  ],
  "Backend": [
    "Node.js", "Nest.js", "Ruby on Rails", "ASP.NET Core (C#)", "Laravel", 
    "WebSocket", "JWT / OAuth2", "API Development"
  ],
  "Mobile": [
    "React Native (Expo)", "React Native Paper", "NativeBase", 
    "React Native Elements", "UI Kitten", "React Navigation", "React Native Navigation"
  ],
  "Data": [
    "PostgreSQL", "MySQL", "MongoDB", "Redis", "Elastic Search",
    "Entity Framework Core", "LINQ", "SQL / T-SQL"
  ],
  "DevOps & Tools": [
    "Vite", "Webpack", "Git", "Docker", "Jest",
    "RSpec", "xUnit / NUnit / MSTest", "Rabbit"
  ],
  "Modern Web": [
    "Next.js", "SSR (Server Side Rendering)", "SSG (Static Site Generation)", 
    "API Routes", "SEO"
  ]
};

const AboutSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const controls = useAnimation();
  
  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);
  
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
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };
  
  const skillVariants = {
    hidden: { width: 0 },
    visible: (level: number) => ({
      width: `${level}%`,
      transition: { duration: 1, ease: "easeInOut" }
    })
  };

  return (
    <section id="about" className="py-24 bg-navy-dark light-mode:bg-slate-50">
      <div ref={ref} className="container">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          <motion.h2 
            className="section-heading"
            variants={itemVariants}
          >
            About Me
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div variants={itemVariants}>
              <p className="mb-4">
                Hello! I'm a passionate full stack developer with a love for creating 
                beautiful, functional, and user-centered digital experiences. My 
                journey in web development started back in 2017, and I've been 
                hooked ever since.
              </p>
              <p className="mb-4">
                I enjoy the entire process of developing creative websites - from 
                planning and designing all the way to solving real-life problems with code. 
                My goal is to always build products that provide robust, pixel-perfect,
                performant experiences.
              </p>
              <p className="mb-8">
                Here are a few core technologies I've been working with recently:
              </p>
              <div className="grid grid-cols-2 gap-2">
                {['Next.js', 'React', 'Vue.js', 'React Native', 'JavaScript', 'TypeScript', 'Node.js', 'Nest.js', 'Laravel', 'Ruby on Rails', 'Django'].map((tech) => (
                  <motion.div 
                    key={tech} 
                    className="flex items-center" 
                    variants={itemVariants}
                  >
                    <span className="text-teal mr-2">▹</span> {tech}
                  </motion.div>
                ))}
              </div>
              
              {/* Location Information */}
              <motion.div variants={itemVariants} className="mt-8 bg-navy-light light-mode:bg-white p-4 rounded-lg border border-slate-dark flex items-center space-x-3">
                <div className="p-2 bg-navy/50 light-mode:bg-slate-100 rounded-full">
                  <MapPin className="h-5 w-5 text-teal" />
                </div>
                <div>
                  <h4 className="text-white light-mode:text-navy-dark font-medium">Location</h4>
                  <p className="text-slate light-mode:text-slate-dark">Tianjin, China</p>
                </div>
              </motion.div>
            </motion.div>
            
            <motion.div variants={itemVariants} className="space-y-6">
              <h3 className="text-xl font-bold text-white light-mode:text-navy-dark mb-6">My Technical Skills</h3>
              
              {skills.map((skill) => (
                <div key={skill.name} className="mb-4">
                  <div className="flex justify-between mb-2">
                    <span>{skill.name}</span>
                    <span>{skill.level}%</span>
                  </div>
                  <div className="skill-bar light-mode:bg-slate-200">
                    <motion.div
                      className="skill-progress light-mode:from-teal light-mode:to-teal-dark"
                      variants={skillVariants}
                      custom={skill.level}
                      initial="hidden"
                      animate={isInView ? "visible" : "hidden"}
                    />
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
          
          {/* Education Section */}
          <motion.div 
            variants={containerVariants}
            className="mt-16"
          >
            <motion.h3 
              className="text-2xl font-bold text-white light-mode:text-navy-dark mb-8 flex items-center"
              variants={itemVariants}
            >
              <School className="mr-3 text-teal" /> Education
            </motion.h3>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {education.map((item, index) => (
                <motion.div 
                  key={index}
                  variants={itemVariants} 
                  className="timeline-item"
                >
                  <h4 className="text-xl font-bold text-white light-mode:text-navy-dark">{item.degree}</h4>
                  {/* <p className="text-teal mt-1">{item.institution}</p> */}
                  <p className="text-slate light-mode:text-slate-dark">{item.location}</p>
                  <p className="text-slate-dark light-mode:text-slate mt-2">{item.period}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          {/* Language Skills Section */}
          <motion.div 
            variants={containerVariants}
            className="mt-16"
          >
            <motion.h3 
              className="text-2xl font-bold text-white light-mode:text-navy-dark mb-8 flex items-center"
              variants={itemVariants}
            >
              <Languages className="mr-3 text-teal" /> Language Skills
            </motion.h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {languageSkills.map((lang, index) => (
                <motion.div 
                  key={index}
                  variants={itemVariants}
                  className="bg-navy-light light-mode:bg-white p-5 rounded-lg hover:shadow-teal-glow transition-all duration-300"
                >
                  <h4 className="text-xl font-bold text-white light-mode:text-navy-dark mb-2">{lang.language}</h4>
                  <p className="text-teal mb-3">{lang.level}</p>
                  <div className="skill-bar light-mode:bg-slate-200">
                    <motion.div
                      className="skill-progress light-mode:from-teal light-mode:to-teal-dark"
                      variants={skillVariants}
                      custom={lang.proficiency}
                      initial="hidden"
                      animate={isInView ? "visible" : "hidden"}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          {/* Technology Categories */}
          <motion.div 
            variants={containerVariants}
            className="mt-16"
          >
            <motion.h3 
              className="text-2xl font-bold text-white light-mode:text-navy-dark mb-8"
              variants={itemVariants}
            >
              Technology Stack
            </motion.h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {Object.entries(technologiesByCategory).map(([category, techs]) => (
                <motion.div 
                  key={category}
                  className="bg-navy-light light-mode:bg-white p-6 rounded-lg hover:shadow-teal-glow transition-all duration-300 border border-slate-dark light-mode:border-slate-200"
                  variants={itemVariants}
                >
                  <h4 className="text-xl font-bold text-teal mb-4">{category}</h4>
                  <ul className="space-y-2">
                    {techs.map(tech => (
                      <li key={tech} className="text-slate-light light-mode:text-slate-dark flex items-center">
                        <span className="text-teal mr-2">▹</span> {tech}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;

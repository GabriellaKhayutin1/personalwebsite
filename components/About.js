import { motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";

export default function About() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState("skills");
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const tabData = {
    skills: {
      title: "Skills",
      content: (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <h3 className="text-xl font-medium text-blue-400">Frontend Development</h3>
            <div className="space-y-3">
              {[
                { name: "JavaScript", level: 90 },
                { name: "React", level: 85 },
                { name: "TypeScript", level: 80 },
                { name: "HTML/CSS", level: 95 },
                { name: "Tailwind CSS", level: 92 },
              ].map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium text-gray-300">{skill.name}</span>
                    <span className="text-sm font-medium text-gray-400">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <motion.div
                      className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full"
                      initial={{ width: 0 }}
                      animate={isVisible ? { width: `${skill.level}%` } : { width: 0 }}
                      transition={{ duration: 1, delay: 0.3 }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-xl font-medium text-purple-400">Backend Development</h3>
            <div className="space-y-3">
              {[
                { name: "PHP/Laravel", level: 88 },
                { name: "Node.js", level: 82 },
                { name: "SQL", level: 85 },
                { name: "Python", level: 75 },
                { name: "Docker", level: 70 },
              ].map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium text-gray-300">{skill.name}</span>
                    <span className="text-sm font-medium text-gray-400">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <motion.div
                      className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full"
                      initial={{ width: 0 }}
                      animate={isVisible ? { width: `${skill.level}%` } : { width: 0 }}
                      transition={{ duration: 1, delay: 0.4 }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ),
    },
    experience: {
      title: "Experience",
      content: (
        <div className="space-y-6">
    
          <motion.div 
            className="border-l-2 border-blue-500 pl-4 space-y-2"
            initial={{ opacity: 0, x: -20 }}
            animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="flex items-center">
              <div className="w-3 h-3 rounded-full bg-blue-500 -ml-[25px] mr-4"></div>
              <h3 className="text-xl font-medium text-white">Smart Storage – Full-Stack Developer</h3>
            </div>
            <p className="text-blue-400 text-sm">2024 - Present</p>
            <p className="text-gray-300">
              Created a smart pantry web app with Google OAuth, Mollie subscription payments, and a CO₂-saving calculator. Built with Node.js, MongoDB, and modular JavaScript, with custom dashboards and charts.
            </p>
          </motion.div>
    
          <motion.div 
            className="border-l-2 border-purple-500 pl-4 space-y-2"
            initial={{ opacity: 0, x: -20 }}
            animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="flex items-center">
              <div className="w-3 h-3 rounded-full bg-purple-500 -ml-[25px] mr-4"></div>
              <h3 className="text-xl font-medium text-white">Junker – Team Lead & Full-Stack Developer</h3>
            </div>
            <p className="text-purple-400 text-sm">2024</p>
            <p className="text-gray-300">
              Led a 5-person dev team building a sustainable item exchange app using a swiping UI. Managed microservices for users and listings, Dockerized backend, and delivered a strong MVP under a sprint-based workflow.
            </p>
          </motion.div>
    
          <motion.div 
            className="border-l-2 border-pink-500 pl-4 space-y-2"
            initial={{ opacity: 0, x: -20 }}
            animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <div className="flex items-center">
              <div className="w-3 h-3 rounded-full bg-pink-500 -ml-[25px] mr-4"></div>
              <h3 className="text-xl font-medium text-white">Security Company Website – Web Designer & Developer</h3>
            </div>
            <p className="text-pink-400 text-sm">2024</p>
            <p className="text-gray-300">
              Designed and built a sleek, professional site for a private security firm. Added animated transitions, a custom "Data Protection" section, and modernized the UI with Tailwind CSS.
            </p>
          </motion.div>
    
          <motion.div 
            className="border-l-2 border-yellow-500 pl-4 space-y-2"
            initial={{ opacity: 0, x: -20 }}
            animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <div className="flex items-center">
              <div className="w-3 h-3 rounded-full bg-yellow-500 -ml-[25px] mr-4"></div>
              <h3 className="text-xl font-medium text-white">AI-Powered IdeaPolish.ai – Startup Founder</h3>
            </div>
            <p className="text-yellow-400 text-sm">2025</p>
            <p className="text-gray-300">
              Prototyping an AI tool that helps entrepreneurs refine business ideas using real-time feedback, user edits, and startup validation logic. Focused on generating useful insights with minimal friction.
            </p>
          </motion.div>
    
          <motion.div 
            className="border-l-2 border-cyan-500 pl-4 space-y-2"
            initial={{ opacity: 0, x: -20 }}
            animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
          >
            <div className="flex items-center">
              <div className="w-3 h-3 rounded-full bg-cyan-500 -ml-[25px] mr-4"></div>
              <h3 className="text-xl font-medium text-white">IT Conference Website – full-stack Developer (2025 Edition)</h3>
            </div>
            <p className="text-cyan-400 text-sm">2025 – In Progress</p>
            <p className="text-gray-300">
              Redesigning the university IT conference website to match the 2025 theme: <i>Energy & Water – Discover your spark in the digital wave</i>. Rebuilding the older version with a modern, responsive layout and interactive sections for speakers, program, and sponsors.
            </p>
          </motion.div>
    
        </div>
      ),
    },
    
    
    education: {
      title: "Education",
      content: (
        <div className="space-y-6">
          <motion.div 
            className="bg-gray-800/60 p-4 rounded-lg border border-gray-700 hover:border-blue-500 transition-colors duration-300"
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-xl font-medium text-white">Bachelor's in Information & Communication Technology</h3>
            <p className="text-blue-400 font-medium mt-1">HZ University of Applied Sciences</p>
            <p className="text-sm text-gray-400 mt-1">2021 - Present</p>
            <p className="text-gray-300 mt-2">Focus on software engineering, web development, and data analysis. Participated in multiple project-based learning experiences with real clients.</p>
          </motion.div>
          
          <motion.div 
            className="bg-gray-800/60 p-4 rounded-lg border border-gray-700 hover:border-purple-500 transition-colors duration-300"
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="text-xl font-medium text-white">High School</h3>
            <p className="text-purple-400 font-medium mt-1">134 Secondary School “Dimcho Debelyanov” – ORT School </p>
            <p className="text-sm text-gray-400 mt-1">2020</p>
            <p className="text-gray-300 mt-2">Earned a high school diploma with excellent academic performance and consistent top grades.</p>
          </motion.div>
        </div>
      ),
    },
  };

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative py-24 bg-gray-900 text-white overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[url('/grid.png')] bg-center opacity-5"></div>
      <div className="absolute w-[600px] h-[600px] bg-blue-600 rounded-full blur-[180px] opacity-10 -top-20 -right-20"></div>
      <div className="absolute w-[600px] h-[600px] bg-purple-600 rounded-full blur-[180px] opacity-10 -bottom-20 -left-20"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl sm:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-4">
            About Me
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            I'm a <span className="text-blue-400 font-medium">passionate software developer</span> who thrives at the intersection of technology and design. I specialize in creating intuitive and responsive web applications that deliver exceptional user experiences.
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-start">
          {/* Image Column */}
          <motion.div 
            className="lg:col-span-2 flex justify-center lg:justify-start"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isVisible ? { opacity: 1, scale: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative">
              {/* Glowing effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full blur-[60px] opacity-30 scale-90"></div>
              
              {/* Rotating border */}
              <motion.div 
                className="absolute inset-0 rounded-full border-2 border-purple-500/30 border-dashed"
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              ></motion.div>
              
              {/* Image with frame */}
              <div className="relative rounded-full overflow-hidden border-4 border-gray-700 shadow-2xl w-72 h-72 md:w-80 md:h-80">
                <img 
                  src="/gabriellakhayutin.jpeg" 
                  alt="Gabriella Khayutin" 
                  className="w-full h-full object-cover"
                />
                
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent"></div>
              </div>
              
              {/* Decorative elements */}
              <motion.div 
                className="absolute -top-4 -right-2 w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center shadow-xl border border-gray-700"
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                <span className="text-xl">👩‍💻</span>
              </motion.div>
              
              <motion.div 
                className="absolute bottom-4 -left-6 w-14 h-14 bg-gray-800 rounded-full flex items-center justify-center shadow-xl border border-gray-700"
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
              >
                <span className="text-2xl">💡</span>
              </motion.div>
            </div>
          </motion.div>
          
          {/* Content Column */}
          <div className="lg:col-span-3">
            {/* Tab Navigation */}
            <div className="flex border-b border-gray-700 mb-6">
              {Object.keys(tabData).map((tab) => (
                <button
                  key={tab}
                  className={`px-4 py-3 font-medium text-sm relative ${
                    activeTab === tab ? "text-white" : "text-gray-400 hover:text-gray-300"
                  }`}
                  onClick={() => setActiveTab(tab)}
                >
                  {tabData[tab].title}
                  {activeTab === tab && (
                    <motion.div
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500"
                      layoutId="activeTab"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                </button>
              ))}
            </div>
            
            {/* Tab Content */}
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="min-h-[400px]"
            >
              {tabData[activeTab].content}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

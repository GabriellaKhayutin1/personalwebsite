import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Function to generate stars
const generateStars = (count) => {
  return Array.from({ length: count }).map(() => ({
    id: Math.random().toString(36).substr(2, 9),
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 2 + 1,
    delay: Math.random() * 5,
  }));
};

const projects = [
  {
    title: "Tetra's Adventure",
    description: "An interactive educational game for kids.",
    date: "2023",
    details: "Tetra is a fun and engaging educational game designed to teach kids problem-solving skills. Developed as a team project, it involved game design, coding, and user experience testing.\n\nKey Features:\n✅ Engaging Storyline & Challenges\n✅ Kid-Friendly UI & Animations",
    tech: ["JavaScript", "HTML5", "CSS", "TypeScript"],
    images: ["/tetra.jpeg","/tetra.png", "/tetragame.png", "/tetrakids.jpeg"],
    repo: "https://github.com/Te7ra/tetrasAdventure",
  },
  {
    title: "JRCZ Data Science Project",
    description: "A data processing tool for neighborhood location mapping.",
    date: "2024",
    details: "I developed a data processing tool for JRCZ to streamline their neighborhood mapping workflow. The tool allows users to upload a GeoPackage file, which is then converted into JSON format, and visualize geospatial data efficiently.\n\nKey Features:\n✅ Uploads GeoPackage files & extracts data\n✅ Displays interactive map with locations\n✅ Instant retrieval of coordinates, IDs, and names",
    tech: ["HTML", "MySQL", "Laravel", "JavaScript", "Tailwind"],
    images: ["/JRCZ.png"],
    repo: "https://github.com/GabriellaKhayutin1/spicyspinach09",
  },
  {
    title: "Security Website",
    description: "A professional security company website.",
    date: "2024",
    details: "A high-performance security company website built for Global Security Advising Homeland Solutions. It provides detailed security service offerings with a modern and reliable design.\n\nKey Features:\n✅ Professional & Secure Design\n✅ Responsive Layout for All Devices\n✅ Fast & Optimized Performance",
    tech: ["Laravel", "Tailwind", "PHP", "MySQL", "JavaScript", "HTML", "CSS", "Node.js"],
    images: ["/security.png"],
    website: "https://globalsecurityadvising.com",
  },
  {
    title: "Junker App",
    description: "An eco-conscious exchange platform.",
    date: "2024",
    details: "Junker is a sustainable exchange platform designed to encourage young adults to adopt eco-friendly consumer behaviors. The app allows users to swap and trade second-hand items, reducing waste and promoting sustainability.\n\nKey Features:\n✅ Tinder-style Swiping System – Browse and like items easily\n✅ Secure Trading System – Ensures smooth & safe transactions\n✅ Community-Driven Exchange – Connects users in a sustainable way",
    tech: ["Next.js", "Tailwind", "Node.js", "Microservices Architecture", "tailwind"],
    images: ["/junker.png", "/junker1.jpeg"],
    repo: "https://github.com/orgs/HZ-HBOICT-Y2-2425/teams/team-9-junker/repositories",
  },
  
  {
    title: "NASA APOD Slideshow",
    description: "A website displaying NASA's latest Astronomy Picture of the Day as a slideshow.",
    date: "2024",
    details: "A React-based interactive slideshow that fetches and displays NASA's Astronomy Picture of the Day (APOD) using NASA's public API. It provides beautiful space images with detailed explanations.\n\nKey Features:\n✅ Daily Astronomy Picture Updates\n✅ Interactive Slideshow with smooth animations\n✅ Dark Mode Support",
    tech: ["JavaScript", "Laravel", "NASA API", "Tailwind"],
    images: [ "/nasa1.png","/nasa2.png","/nasa3.png","/nasa4.png"],
    repo: "https://github.com/GabriellaKhayutin1/NasaApi",
  },
  {
    title: "IdeaPolish.ai",
    description: "An AI-powered startup idea refiner.",
    date: "2025",
    loading: true,  // 🚀 This project is still in progress
    details: "IdeaPolish.ai is an AI-driven tool that helps entrepreneurs refine and enhance their startup ideas. The platform provides structured feedback based on industry trends, competitive analysis, and best startup practices.\n\nKey Features:\n✅ AI-Powered Insights – Generates suggestions for business improvement\n✅ Competitive Analysis – Compares ideas with existing market trends\n✅ User Authentication & Dashboard – Allows users to save their analyses",
    tech: ["React", "OpenAI API", "Tailwind", "JavaScript", "Node.js"],
    images: ["/ideapolish.jpg", "/ai.png"],
    repo: "https://github.com/GabriellaKhayutin1/IdeaPolish.ai",
  },
  {
    title: "Smart Storage",
    description: "A website in which a user can store their ingredients and get reminders for expired ingredients.",
    date: "2025",
    loading: false,  // 🚀 This project is still in progress
    details: "SmartStorage is a full-stack web application designed to combat food waste through smart pantry management and eco-awareness. The platform empowers users to track their food inventory, reduce CO₂ emissions, and build sustainable habits—all through an intuitive, automation-driven interface.\n\nKey Features:\n\n✅ Real-Time CO₂ Savings Dashboard - Visualizes users' environmental impact by calculating saved CO₂ based on consumption choices.\n\n✅ Pantry Inventory Management - Enables users to track food items, receive expiration alerts, and reduce waste.\n\n✅ Interactive Scheduling with Google Calendar - Automatically generates reminders for item usage and restocking tied to expiry dates.\n\n✅ Subscription System with Secure Payments - Includes a free trial and a €5/month subscription model with seamless, secure payment integration.\n\n✅ Smart Chatbot Assistant - Offers real-time help, pantry tips, and eco-advice directly within the app.\n\n✅ Leaderboard & Gamification - Motivates users by ranking CO₂ savings and rewarding sustainable behavior.\n\n✅ Tips Page - Provides educational content, recipes, and sustainability hacks tailored to pantry items.",
    tech: ["JavaScript", "Mollie API", "Google Calendar API","Render", "Tailwind", "MongoDB Atlas", "Express.js","Node.js", "Html", "CSS"],
    images: ["/smartstorage.png", "/smartstorage1.png", "/smartspantry.png", "/smartshome.png", "/smartshome1.png", "smartsgogle.png","/smartsprofile.png", "/smartsco2chart.png", "/smartsleadearboard.png", "/smartstips.png", ],
    repo: "https://github.com/GabriellaKhayutin1/smartstorage",
  },
  {
    title: "IT Conference Website (2025 Edition)",
    description: "Redesigning the official IT conference website to reflect the 2025 theme: Energy & Water.",
    date: "2025",
    loading: true,  // 🚀 This project is still in progress
    details: "I'm currently rebuilding the university's IT conference website for its 2025 edition. The focus is on transforming the older version into a more modern and interactive platform that reflects this year's theme: *Energy & Water – Discover your spark in the digital wave*. The site is being redesigned from the ground up with improved structure, new visual components, and a cleaner layout to better support event details and sponsor visibility.\n\nKey Features (in progress):\n✅ Full redesign aligned with the 2025 Energy & Water theme\n✅ Updated sections for program, speakers, and sponsors\n✅ Countdown timer and smooth animations for engagement",
    tech: ["Tailwind CSS", "JavaScript", "HTML", "Framer Motion"],
    images: ["/itconference.png", "/itlogo.png"],  // Swap with latest when ready
    repo: "https://github.com/GabriellaKhayutin1/it-conference-website"  // Update if needed
  },  
];

const serviceId = 'service_xmo69nn';
const templateId = 'template_iomempx';
const publicKey = '71QrzDW819GHth889';

export default function Projects() {
  const [stars, setStars] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    setStars(generateStars(100));
  }, []);

  // Sort projects by date (newest first)
  const sortedProjects = [...projects].sort((a, b) => {
    const dateA = parseInt(a.date);
    const dateB = parseInt(b.date);
    return dateB - dateA;
  });

  return (
    <section id="projects" className="relative py-16 bg-black text-white overflow-hidden">
      {/* Twinkling Stars */}
      <div className="absolute inset-0 pointer-events-none">
        {stars.map((star) => (
          <motion.div
            key={star.id}
            className="absolute bg-white rounded-full shadow-sm"
            style={{
              width: `${star.size}px`,
              height: `${star.size}px`,
              top: `${star.y}%`,
              left: `${star.x}%`,
            }}
            animate={{ opacity: [0.3, 1, 0.3] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "mirror",
              delay: star.delay,
            }}
          />
        ))}
      </div>

      {/* Background Gradient Elements */}
      <div className="absolute w-[600px] h-[600px] bg-blue-500 rounded-full blur-[120px] opacity-10 -top-20 -left-40"></div>
      <div className="absolute w-[500px] h-[500px] bg-purple-500 rounded-full blur-[120px] opacity-10 bottom-20 right-10"></div>

      {/* Section Title with Animation */}
      <motion.div
        className="text-center mb-12 relative z-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-6xl font-extrabold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
          Project Timeline
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-4 rounded-full"></div>
        <p className="text-grey-400 mt-4 max-w-2xl mx-auto">A chronological journey through my development projects</p>
      </motion.div>

      {/* Timeline Container */}
      <div className="max-w-4xl mx-auto px-4 relative z-10">
        {/* Timeline Line */}
        <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 h-[calc(100%-4rem)] w-1 bg-gradient-to-b from-blue-500 to-purple-500 top-8"></div>

        {/* Projects Timeline */}
        <div className="space-y-8 pt-8 pb-8">
          {sortedProjects.map((project, index) => (
            <motion.div
              key={index}
              className={`relative flex items-center ${index % 2 === 0 ? 'md:flex-row flex-row' : 'md:flex-row-reverse flex-row'}`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, amount: 0.2 }}
            >
              {/* Timeline Dot */}
              <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 border-4 border-gray-900"></div>

              {/* Project Card */}
              <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:mr-auto ml-12' : 'md:ml-auto ml-12'}`}>
                <motion.div
                  className="bg-gray-900/60 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-800 group"
                  whileHover={{ y: -5, boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)' }}
                >
                  {/* Project Image */}
                  <div className="relative overflow-hidden h-48">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10"></div>
                    {project.loading ? (
                      <div className="w-full h-full flex items-center justify-center bg-gray-800 animate-pulse">
                        <span className="text-gray-300">🚧 Work in Progress...</span>
                      </div>
                    ) : (
                      <img
                        src={project.images[0]}
                        alt={project.title}
                        className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700"
                      />
                    )}
                    
                    {/* Date Badge */}
                    <div className="absolute top-3 right-3 bg-black/70 backdrop-blur-sm text-white text-xs font-medium px-3 py-1 rounded-full border border-gray-700 z-20">
                      {project.date}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-5">
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-500 transition-all duration-300">
                      {project.title}
                    </h3>
                    <p className="text-gray-400 text-sm mb-4">{project.description}</p>
                    
                    {/* Tech Stack Pills */}
                    <div className="flex flex-wrap gap-1 mb-4">
                      {project.tech.slice(0, 3).map((tech, idx) => (
                        <span key={idx} className="text-xs bg-gray-800 text-gray-300 px-2 py-1 rounded-md">
                          {tech}
                        </span>
                      ))}
                      {project.tech.length > 3 && (
                        <span className="text-xs bg-gray-800 text-gray-300 px-2 py-1 rounded-md">
                          +{project.tech.length - 3}
                        </span>
                      )}
                    </div>

                    {/* View Project Button */}
                    <motion.button
                      className="w-full py-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium rounded-lg transition duration-300"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => {
                        setSelectedProject(project);
                        setSelectedImageIndex(0);
                      }}
                    >
                      View Project
                    </motion.button>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Project Modal - Enhanced Version */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 bg-black/90 backdrop-blur-xl flex justify-center items-center z-50 px-4 overflow-y-auto py-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={(e) => {
              if (e.target === e.currentTarget) setSelectedProject(null);
            }}
          >
            <motion.div
              className="bg-gray-900/80 backdrop-blur-md rounded-2xl border border-gray-700/50 p-6 sm:p-8 max-w-4xl w-full max-h-[90vh] overflow-y-auto relative shadow-[0_0_50px_rgba(79,70,229,0.15)]"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button 
                className="absolute top-3 right-3 sm:top-4 sm:right-4 text-gray-400 hover:text-white z-50 bg-gray-800/80 hover:bg-gray-700 p-2 rounded-full transition-colors duration-200"
                onClick={() => setSelectedProject(null)}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {/* Project Title */}
              <h3 className="text-3xl sm:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-2">
                {selectedProject.title}
              </h3>
              
              {/* Project Date */}
              <div className="inline-block bg-gray-800 text-gray-300 text-sm px-3 py-1 rounded-full mb-6">
                {selectedProject.date}
              </div>

              {/* Image Gallery with Indicators */}
              <div className="relative w-full mb-6 rounded-xl overflow-hidden bg-black/40 aspect-video">
                <motion.img 
                  src={selectedProject.images[selectedImageIndex]} 
                  alt={selectedProject.title} 
                  className="w-full h-full object-contain"
                  key={selectedImageIndex}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />

                {/* Image Navigation */}
                {selectedProject.images.length > 1 && (
                  <>
                    {/* Left Arrow */}
                    <button 
                      className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full shadow-lg transition-colors duration-200"
                      onClick={() => setSelectedImageIndex(prev => prev > 0 ? prev - 1 : selectedProject.images.length - 1)}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                      </svg>
                    </button>

                    {/* Right Arrow */}
                    <button 
                      className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full shadow-lg transition-colors duration-200"
                      onClick={() => setSelectedImageIndex(prev => prev < selectedProject.images.length - 1 ? prev + 1 : 0)}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>

                    {/* Image Indicators */}
                    <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
                      {selectedProject.images.map((_, idx) => (
                        <button 
                          key={idx} 
                          className={`w-2 h-2 rounded-full transition-all ${selectedImageIndex === idx ? 'bg-white w-4' : 'bg-gray-400/50'}`}
                          onClick={() => setSelectedImageIndex(idx)}
                        />
                      ))}
                    </div>
                  </>
                )}
              </div>

              {/* Project Details */}
              <div className="prose prose-invert max-w-none">
                {selectedProject.details.split("\n\n").map((paragraph, index) => (
                  <p key={index} className="text-gray-300 mb-4">
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Technologies Used */}
              <div className="mt-6">
                <h4 className="text-white text-lg font-semibold mb-3">Technologies</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tech.map((tech, index) => (
                    <span 
                      key={index} 
                      className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/30 text-white text-sm font-medium px-3 py-1.5 rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-8 flex flex-wrap gap-4 justify-center">
                {selectedProject.repo && (
                  <a 
                    href={selectedProject.repo} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex-1 min-w-[200px]"
                  >
                    <motion.button 
                      className="w-full py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium rounded-lg flex items-center justify-center gap-2 transition duration-300"
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                      GitHub Repository
                    </motion.button>
                  </a>
                )}
                
                {selectedProject.website && (
                  <a 
                    href={selectedProject.website} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex-1 min-w-[200px]"
                  >
                    <motion.button 
                      className="w-full py-3 bg-white text-gray-900 font-medium rounded-lg flex items-center justify-center gap-2 transition duration-300 border border-transparent hover:bg-transparent hover:text-white hover:border-white"
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                      View Live Website
                    </motion.button>
                  </a>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

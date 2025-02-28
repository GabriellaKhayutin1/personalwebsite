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
    title: "Smart Storage",
    description: "A website in which a user can store their ingredients and get reminders for expired ingredients.",
    date: "2025",
    loading: true,  // 🚀 This project is still in progress
    details: "Smart Storage is a full-stack web app that helps users track their pantry ingredients, receive expiration notifications, and efficiently manage grocery shopping. It ensures users never waste food by automatically reminding them of expiring items.\n\nKey Features:\n✅ Ingredient Tracking – Users can add, edit, and remove pantry items\n✅ Expiration Alerts – Sends reminders for items that are about to expire\n✅ AI-Powered Recipe Suggestions – Uses AI to suggest recipes based on ingredients\n✅ Grocery List Generator – Helps users create a smart shopping list",
    tech: ["JavaScript", "OpenAI API", "Tailwind", "MongoDB", "Node.js", "Html", "CSS"],
    images: ["/smartstorage.png", "/smartstorage1.png", "/smartstorage2.png", "/smartstorage3.png"],
    repo: "https://github.com/GabriellaKhayutin1/IdeaPolish.ai",
  },
  {
    title: "IdeaPolish.ai",
    description: "An AI-powered startup idea refiner.",
    date: "2025",
    loading: true,  // 🚀 This project is still in progress
    details: "IdeaPolish.ai is an AI-driven tool that helps entrepreneurs refine and enhance their startup ideas. The platform provides structured feedback based on industry trends, competitive analysis, and best startup practices.\n\nKey Features:\n✅ AI-Powered Insights – Generates suggestions for business improvement\n✅ Competitive Analysis – Compares ideas with existing market trends\n✅ User Authentication & Dashboard – Allows users to save their analyses",
    tech: ["React", "OpenAI API", "Tailwind", "JavaScript", "Node.js"],
    images: ["/ideapolish.jpg", "/ideapolish2.jpg"],
    repo: "https://github.com/GabriellaKhayutin1/IdeaPolish.ai",
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
    details: "A React-based interactive slideshow that fetches and displays NASA’s Astronomy Picture of the Day (APOD) using NASA’s public API. It provides beautiful space images with detailed explanations.\n\nKey Features:\n✅ Daily Astronomy Picture Updates\n✅ Interactive Slideshow with smooth animations\n✅ Dark Mode Support",
    tech: ["JavaScript", "Laravel", "NASA API", "Tailwind"],
    images: ["/nasa1page.png", "/nasa2.png"],
    repo: "https://github.com/GabriellaKhayutin1/NasaApi",
  },
  {
    title: "Security Website",
    description: "A professional security company website.",
    date: "2024",
    details: "A high-performance security company website built for Global Security Advising Homeland Solutions. It provides detailed security service offerings with a modern and reliable design.\n\nKey Features:\n✅ Professional & Secure Design\n✅ Responsive Layout for All Devices\n✅ Fast & Optimized Performance",
    tech: ["Laravel", "Tailwind", "PHP", "MySQL", "JavaScript", "HTML", "CSS", "Node.js"],
    images: ["/security.png", "/security2.png"],
    repo: "https://github.com/NikolAlexandrova/security",
  },
  {
    title: "JRCZ Data Science Project",
    description: "A data processing tool for neighborhood location mapping.",
    date: "2024",
    details: "I developed a data processing tool for JRCZ to streamline their neighborhood mapping workflow. The tool allows users to upload a GeoPackage file, which is then converted into JSON format, and visualize geospatial data efficiently.\n\nKey Features:\n✅ Uploads GeoPackage files & extracts data\n✅ Displays interactive map with locations\n✅ Instant retrieval of coordinates, IDs, and names",
    tech: ["HTML", "MySQL", "Laravel", "JavaScript", "Tailwind"],
    images: ["/JRCZ.png", "/JRCZ2.png"],
    repo: "https://github.com/GabriellaKhayutin1/spicyspinach09",
  },
  {
    title: "Tetra’s Adventure",
    description: "An interactive educational game for kids.",
    date: "2023",
    details: "Tetra is a fun and engaging educational game designed to teach kids problem-solving skills. Developed as a team project, it involved game design, coding, and user experience testing.\n\nKey Features:\n✅ Engaging Storyline & Challenges\n✅ Kid-Friendly UI & Animations",
    tech: ["JavaScript", "HTML5", "CSS", "TypeScript"],
    images: ["/tetra.jpeg", "/tetra2.jpeg"],
    repo: "https://github.com/Te7ra/tetrasAdventure",
  },
];



export default function Projects() {
  const [stars, setStars] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0); // Slideshow index

  useEffect(() => {
    setStars(generateStars(100));
  }, []);

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

      {/* Timeline Title */}
      <motion.h2
        className="text-5xl font-extrabold text-center mb-12 tracking-wide text-gray-200 relative z-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        My Projects Timeline
      </motion.h2>

      {/* Timeline Container */}
<div className="relative max-w-6xl mx-auto z-10">
  {/* Center Line */}
  <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gray-700 rounded"></div>

  {/* Timeline Items */}
  <motion.div className="flex flex-col items-center gap-12 px-6">
    {projects.map((project, index) => (
      <motion.div
        key={index}
        className={`relative w-full max-w-[600px] ${
          index % 2 === 0 ? "ml-auto" : "mr-auto"
        }`}
        whileHover={{
          scale: 1.03,
          boxShadow: "0px 10px 40px rgba(0, 255, 255, 0.2)",
        }}
        transition={{ type: "spring", stiffness: 200, damping: 12 }}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        {/* Date Positioned Next to the Timeline Dot */}
        <div
          className={`absolute top-1/2 transform -translate-y-1/2 text-gray-300 text-lg font-semibold whitespace-nowrap ${
            index % 2 === 0 ? "left-[-90px]" : "right-[-90px]"
          }`}
        >
          {project.date}
        </div>

        {/* Timeline Dot */}
<div className={`absolute top-1/2 transform -translate-y-1/2 w-5 h-5 bg-blue-500 rounded-full shadow-lg ${
  index % 2 === 0 ? "-left-10" : "-right-10"
}`}></div>

{/* Loading Animation (if project is in progress) */}
{project.loading && (
  <div className="absolute top-1/2 transform -translate-y-1/2 left-6 flex items-center space-x-2">
    <div className="w-3 h-3 bg-yellow-400 rounded-full animate-ping"></div>
    <span className="text-yellow-400 text-sm">🚧 In Progress...</span>
  </div>
)}

{/* Project Card */}
<div className="relative bg-gray-900 rounded-xl p-6 shadow-lg flex flex-col">
  <h3 className="text-xl font-bold text-white">{project.title}</h3>

  {/* Centered Image or Loading Animation */}
  <div className="w-full flex justify-center">
    {project.loading ? (
    <div className="w-full h-32 flex items-center justify-center bg-gray-800 rounded-lg animate-pulse">
    <span className="text-gray-300">🚧 Work in Progress...</span>
  </div>
  
    ) : (
      <motion.img
        src={project.images[0]}
        alt={project.title}
        className="w-full h-44 object-contain rounded-lg my-4"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      />
    )}
  </div>
  <p className="text-sm text-gray-400 mt-4">{project.description}</p>
  <div className="mt-4 flex justify-center">
    <motion.button
      className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-purple-500 hover:to-blue-500 text-white font-semibold py-2 px-4 rounded-full transition duration-300 text-sm shadow-md hover:shadow-lg"
      whileHover={{ scale: 1.1 }}
      onClick={() => {
        setSelectedProject(project);
        setSelectedImageIndex(0); // Reset image index when opening
      }}
    >
      View More
    </motion.button>
  </div>
</div>
</motion.div>
))}
</motion.div>
</div>


<AnimatePresence>
  {selectedProject && (
    <motion.div
      className="fixed inset-0 bg-black bg-opacity-70 backdrop-blur-lg flex justify-center items-center z-50 px-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className="bg-gray-900 rounded-2xl p-6 sm:p-8 max-w-3xl w-full max-h-[90vh] overflow-y-auto relative shadow-2xl border border-gray-700"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
      {/* Close Button - Always Accessible */}
<button 
  className="absolute top-3 right-3 sm:top-4 sm:right-4 text-gray-400 hover:text-gray-200 text-2xl sm:text-3xl bg-gray-800 p-2 rounded-full z-50"
  onClick={() => setSelectedProject(null)}
>
  ✖
</button>


        {/* Image Gallery */}
        <div className="relative w-full flex justify-center">
          <motion.img 
            src={selectedProject.images[selectedImageIndex]} 
            alt={selectedProject.title} 
            className="w-full max-h-[300px] object-contain rounded-lg shadow-lg"
            key={selectedImageIndex}
            initial={{ opacity: 0.7, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          />

          {/* Left Arrow */}
          {selectedProject.images.length > 1 && (
            <button 
              className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full shadow-md hover:bg-gray-700"
              onClick={() => setSelectedImageIndex(prev => prev > 0 ? prev - 1 : selectedProject.images.length - 1)}
            >
              ◀
            </button>
          )}

          {/* Right Arrow */}
          {selectedProject.images.length > 1 && (
            <button 
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full shadow-md hover:bg-gray-700"
              onClick={() => setSelectedImageIndex(prev => prev < selectedProject.images.length - 1 ? prev + 1 : 0)}
            >
              ▶
            </button>
          )}
        </div>

        {/* Project Title */}
        <h3 className="text-2xl sm:text-4xl font-extrabold text-white mt-4 text-center">
          {selectedProject.title}
        </h3>

        {/* Project Details */}
        <div className="text-lg text-gray-300 mt-4 text-center">
          {selectedProject.details.split("\n\n").map((paragraph, index) => (
            <p key={index} className="mb-4">{paragraph}</p>
          ))}
        </div>

        {/* Technologies Used */}
        <div className="flex flex-wrap justify-center mt-6">
          {selectedProject.tech.map((tech, index) => (
            <span 
              key={index} 
              className="bg-gradient-to-r from-blue-500 to-purple-500 text-white text-sm font-semibold px-3 py-1 rounded-full mx-1 mt-2 shadow-md"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* GitHub Button */}
        <div className="mt-8 flex justify-center">
          <a 
            href={selectedProject.repo} 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <motion.button 
              className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full font-semibold shadow-lg hover:from-purple-500 hover:to-blue-500 transition duration-300"
              whileHover={{ scale: 1.1 }}
            >
              🌐 View on GitHub
            </motion.button>
          </a>
        </div>
      </motion.div>
    </motion.div>
  )}
</AnimatePresence>


    </section>
  );
}

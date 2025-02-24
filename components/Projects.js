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

// Projects Data
const projects = [
  {
    title: "IdeaPolish.ai",
    description: "An AI-powered startup idea refiner.",
    date: "2025",
    details: "IdeaPolish.ai is an AI-driven tool that helps entrepreneurs refine and enhance their startup ideas. The platform provides AI-generated insights based on industry trends, competitive analysis, and startup best practices. My role includes full-stack development using React and OpenAI API, integrating AI for structured feedback, optimizing UI/UX, and implementing secure user authentication.",
    tech: ["React", "OpenAI API", "Tailwind"],
    image: "/ideapolish.jpg",
    repo: "https://github.com/GabriellaKhayutin1/IdeaPolish.ai",
  },
  {
    title: "Junker App",
    description: "An eco-conscious exchange platform.",
    date: "2024",
    details: "Junker is a sustainable exchange platform designed to encourage young adults to adopt eco-friendly consumer behaviors. The app allows users to exchange items they no longer need, reducing waste and promoting sustainability. Key features include a community-based exchange model, a Tinder-style swiping functionality for selecting items, and a microservices architecture. My contributions include frontend development with Svelte and JavaScript, microservices development, and sprint planning.",
    tech: ["Next.js", "Tailwind", "Node.js"],
    image: "/junker.png",
    repo: "https://github.com/orgs/HZ-HBOICT-Y2-2425/teams/team-9-junker/repositories",
  },
 
  {
    title: "NASA APOD Slideshow",
    description: "A website displaying NASA's latest Astronomy Picture of the Day as a slideshow.",
    date: "2024",
    details:  "This project fetches and displays NASA's Astronomy Picture of the Day (APOD) using NASA’s public API. Features include automated daily updates, an interactive slideshow, informative captions, and dark mode support. I implemented API integration, frontend development in React, and performance optimization for seamless browsing.",
    tech: ["JavaScript", "React", "NASA API"],
    image: "/nasa1page.png",
    repo: "https://github.com/GabriellaKhayutin1/NasaApi",
  },
  {
    
    title: "Security Website",
    description: "A professional security company website.",
    date: "2024",
    details: "I led the development of a high-performance website for Global Security Advising Homeland Solutions. Responsibilities included stakeholder collaboration, requirement analysis, wireframing, frontend and backend development using Laravel and PHP, and overseeing User Acceptance Testing (UAT). The final product enhanced the company’s online presence and reflected its dedication to security and reliability.",
    tech: ["Laravel", "Tailwind", "PHP"],
    image: "/security.png",
    repo: "https://github.com/NikolAlexandrova/security",
  },
  {
    title: "JRCZ Data Science Project",
    description: "A data processing tool for neighborhood location mapping.",
    date: "2024",
    details: "I developed a data processing tool for JRCZ to streamline their neighborhood mapping workflow. The tool allows users to upload a GeoPackage file, which is then converted into JSON format. An interactive map enables users to select specific areas and instantly retrieve coordinates, IDs, and names. This solution automated a previously manual process, significantly improving efficiency and accuracy.",
    tech: ["HTML", "MySQL", "Laravel"],
    image: "/JRCZ.png",
    repo: "https://github.com/GabriellaKhayutin1/spicyspinach09",
  },
  {
    title: "Tetra’s Adventure",
    description: "An interactive educational game for kids.",
    date: "2023",
    details: "Tetra is a fun and engaging educational game designed to teach kids problem-solving skills. Developed as a team project, it involved game design, coding, and user experience testing. The game was created with JavaScript, HTML5, and CSS, prioritizing an intuitive and enjoyable learning environment.",
    tech: ["JavaScript", "HTML5", "CSS"],
    image: "/tetra.jpeg",
    repo: "https://github.com/Te7ra/tetrasAdventure",
  },
];

export default function Projects() {
  const [stars, setStars] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);

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
              {/* Date Next to Timeline Dot */}
              <div
                className={`absolute top-1/2 transform -translate-y-1/2 text-gray-300 text-lg font-semibold whitespace-nowrap ${
                  index % 2 === 0 ? "left-[-90px]" : "right-[-90px]"
                }`}
              >
                {project.date}
              </div>

              {/* Timeline Dot */}
              <div
                className={`absolute top-1/2 transform -translate-y-1/2 w-5 h-5 bg-blue-500 rounded-full shadow-lg ${
                  index % 2 === 0 ? "-left-10" : "-right-10"
                }`}
              ></div>

              {/* Project Card */}
              <div className="relative bg-gray-900 rounded-xl p-6 shadow-lg flex flex-col">
                <h3 className="text-xl font-bold text-white">{project.title}</h3>
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-44 object-cover rounded-lg my-4"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                />
                <p className="text-sm text-gray-400">{project.description}</p>
                <div className="mt-4 flex justify-center">
                  <motion.button
                    className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-purple-500 hover:to-blue-500 text-white font-semibold py-2 px-4 rounded-full transition duration-300 text-sm shadow-md hover:shadow-lg"
                    whileHover={{ scale: 1.1 }}
                    onClick={() => setSelectedProject(project)}
                  >
                    View More
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* MODAL POPUP */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-60 backdrop-blur-lg flex justify-center items-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-gray-900 rounded-xl p-8 max-w-2xl w-full relative shadow-xl"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <button className="absolute top-4 right-4 text-gray-400 hover:text-gray-200 text-2xl" onClick={() => setSelectedProject(null)}>✖</button>
              <img src={selectedProject.image} className="w-full h-64 object-cover rounded-lg mb-6" />
              <h3 className="text-3xl font-extrabold text-white">{selectedProject.title}</h3>
              <p className="text-lg text-gray-300 mt-2">{selectedProject.details}</p>
              <a href={selectedProject.repo} target="_blank" className="block mt-6 text-center text-blue-400 hover:text-blue-500">View Repository</a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

import { motion } from "framer-motion";

const projects = [
  { title: "Junker App", description: "An eco-conscious exchange platform.", link: "#" },
  { title: "IdeaPolish.ai", description: "An AI-powered startup idea refiner.", link: "#" }
];

export default function Projects() {
  return (
    <section id="projects" className="min-h-screen flex flex-col items-center justify-center bg-black text-white px-6 py-12">
      <h2 className="text-4xl font-bold mb-8 text-center">My Projects</h2>
      
      {/* Grid Layout for better mobile responsiveness */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl">
        {projects.map((project, index) => (
          <motion.div 
            key={index}
            className="p-6 bg-gray-800 rounded-xl text-center shadow-lg transform transition duration-300 hover:scale-105"
            whileHover={{ scale: 1.05 }}
          >
            <h3 className="text-2xl font-bold">{project.title}</h3>
            <p className="mt-2 text-gray-300">{project.description}</p>
            <a href={project.link} className="text-blue-400 mt-4 block underline hover:text-blue-300">View More</a>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

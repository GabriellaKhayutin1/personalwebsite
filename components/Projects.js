import { motion } from "framer-motion";

const projects = [
  {
    title: "Junker App",
    description: "An eco-conscious exchange platform.",
    link: "#",
    tech: ["Next.js", "Tailwind", "Node.js"],
    image: "/junker.png",
  },
  {
    title: "IdeaPolish.ai",
    description: "An AI-powered startup idea refiner.",
    link: "#",
    tech: ["React", "OpenAI API", "Tailwind"],
    image: "/idea-polish.jpg", // If missing, replace with an available image
  },
  {
    title: "Security Website",
    description: "A professional security company website.",
    link: "#",
    tech: ["Laravel", "Tailwind", "PHP"],
    image: "/security.png",
  },
  {
    title: "JRCZ Data Science Project",
    description:
      "A data processing tool for neighborhood location mapping using GeoPackage.",
    link: "#",
    tech: ["HTML", "MySQL", "Laravel"],
    image: "/JRCZ.png",
  },
  {
    title: "Tetra’s Adventure",
    description: "An interactive educational game for kids.",
    link: "#",
    tech: ["JavaScript", "HTML5", "CSS"],
    image: "/tetra.jpeg",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-16 bg-black text-white">
      <h2 className="text-4xl font-bold text-center mb-8">My Projects</h2>
      <div className="grid gap-6 px-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 place-items-center">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="bg-gray-800 rounded-xl p-6 w-80 shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl"
            whileHover={{ scale: 1.05 }}
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-40 object-cover rounded-lg mb-4"
            />
            <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
            <p className="text-sm text-gray-300">{project.description}</p>
            <div className="flex flex-wrap gap-2 mt-4">
              {project.tech.map((tech, i) => (
                <span
                  key={i}
                  className="px-3 py-1 bg-gray-700 text-sm rounded-full text-white font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="mt-6">
              <a
                href={project.link}
                className="block text-center bg-gradient-to-r from-blue-500 to-purple-500 hover:from-purple-500 hover:to-blue-500 text-white font-bold py-2 px-4 rounded-full transition duration-300"
              >
                View More
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

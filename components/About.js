import { motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";

export default function About() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(false);
          setTimeout(() => setIsVisible(true), 100);
        }
      },
      { threshold: 0.3 }
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

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative py-24 bg-gray-900 text-white px-10 overflow-hidden"
    >
      {/* Glowing Orbs Behind for Cosmic Feel */}
      <div className="absolute w-96 h-96 bg-purple-500 opacity-20 rounded-full blur-3xl top-10 left-20 animate-pulse"></div>
      <div className="absolute w-80 h-80 bg-blue-500 opacity-20 rounded-full blur-3xl bottom-10 right-20 animate-pulse"></div>

      {/* Main Layout */}
      <motion.div
        key={isVisible}
        initial={{ opacity: 0, y: 50 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1, ease: "easeOut" }}
        className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
      >
        {/* IMAGE SECTION - Circular & Bigger */}
        <motion.div
          initial={{ scale: 0.8 }}
          animate={isVisible ? { scale: 1 } : { scale: 0.8 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          className="flex justify-center relative"
        >
          {/* Cosmic Glow Around Image */}
          <div className="absolute w-80 h-80 bg-purple-500 opacity-30 rounded-full blur-2xl"></div>
          <motion.img
            src="/gabriellakhayutin.jpeg"
            alt="Gabriella Khayutin"
            className="relative w-80 h-80 object-cover rounded-full border-4 border-purple-500 shadow-lg"
            whileHover={{ scale: 1.05, rotate: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          />
        </motion.div>

        {/* TEXT SECTION - Larger & More Structured */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="text-center md:text-left space-y-6"
        >
          {/* About Me Heading with Gradient Glow */}
          <motion.h2
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isVisible ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400"
          >
            About Me
          </motion.h2>

          {/* About Me Description */}
          <p className="text-lg leading-relaxed text-gray-300">
            I’m a <span className="text-purple-400 font-semibold">passionate software developer</span> who thrives at the intersection of <span className="text-blue-400 font-semibold">technology and business</span>. 
            I specialize in <span className="text-purple-400 font-semibold">frontend & backend development</span>, and I’m always exploring <span className="text-blue-400 font-semibold">new technologies</span> to push my limits.
          </p>

          {/* Thin Divider Line */}
          <div className="h-1 w-24 bg-purple-500 opacity-50 my-4"></div>

          {/* Tech Stack Section */}
          <div className="mt-6">
            <h3 className="text-3xl font-semibold text-gray-200 mb-4">
              Tech Stack:
            </h3>

            {/* Frontend Skills */}
            <div className="mb-6">
              <h4 className="text-xl text-gray-300 mb-2">Frontend:</h4>
              <div className="flex flex-wrap gap-3">
                {["Svelte", "JavaScript", "TypeScript", "Tailwind CSS", "HTML", "CSS"].map((tech, index) => (
                  <motion.span
                    key={index}
                    whileHover={{ scale: 1.1, boxShadow: "0px 0px 10px rgba(100, 255, 255, 0.6)" }}
                    className="bg-gray-800 px-4 py-2 rounded-md text-sm cursor-pointer transition-all duration-300 hover:bg-purple-500"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </div>

            {/* Backend Skills */}
            <div className="mb-6">
              <h4 className="text-xl text-gray-300 mb-2">Backend:</h4>
              <div className="flex flex-wrap gap-3">
                {["PHP", "Laravel", "Node.js", "Microservices Architecture", "Docker", "SQL", "Python"].map((tech, index) => (
                  <motion.span
                    key={index}
                    whileHover={{ scale: 1.1, boxShadow: "0px 0px 10px rgba(255, 100, 255, 0.6)" }}
                    className="bg-gray-800 px-4 py-2 rounded-md text-sm cursor-pointer transition-all duration-300 hover:bg-blue-500"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </div>

            {/* Tools */}
            <div>
              <h4 className="text-xl text-gray-300 mb-2">Tools:</h4>
              <div className="flex flex-wrap gap-3">
                {["GitHub Actions", "CI/CD", "UX/UI Design Principles"].map((tech, index) => (
                  <motion.span
                    key={index}
                    whileHover={{ scale: 1.1, boxShadow: "0px 0px 10px rgba(255, 255, 100, 0.6)" }}
                    className="bg-gray-800 px-4 py-2 rounded-md text-sm cursor-pointer transition-all duration-300 hover:bg-green-500"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

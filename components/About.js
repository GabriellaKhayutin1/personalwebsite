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
          setTimeout(() => setIsVisible(true), 100); // Reset animation
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
      className="h-screen flex flex-col items-center justify-center bg-gray-900 text-white px-10"
    >
      <motion.div
        key={isVisible} // Forces reanimation
        initial={{ opacity: 0, y: 50 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1, ease: "easeOut" }}
        className="max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-10 items-center"
      >
        {/* IMAGE SECTION */}
        <motion.div
          initial={{ scale: 0.8 }}
          animate={isVisible ? { scale: 1 } : { scale: 0.8 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          className="flex justify-center"
        >
          <img
            src="/gabriellakhayutin.jpeg"
            alt="Gabriella Khayutin"
            className="w-64 h-64 object-cover rounded-full border-4 border-purple-500 shadow-lg"
          />
        </motion.div>

        {/* TEXT SECTION */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="text-center md:text-left"
        >
          <h2 className="text-5xl font-bold text-purple-400">About Me</h2>
          <p className="text-lg mt-4 leading-relaxed text-gray-300">
            I’m a **passionate software developer** who thrives at the intersection of **technology and business**. 
            I specialize in **frontend & backend development**, and I’m always exploring **new technologies** to push my limits.
          </p>

          {/* Skills Section */}
          <div className="mt-6">
            <h3 className="text-2xl font-semibold text-gray-200 mb-3">Tech Stack:</h3>
            
            {/* Frontend Skills */}
            <div className="mb-4">
              <h4 className="text-xl text-gray-300 mb-2">Frontend:</h4>
              <div className="flex flex-wrap gap-3">
                {["Svelte", "JavaScript", "TypeScript", "Tailwind CSS", "HTML", "CSS"].map((tech, index) => (
                  <motion.span
                    key={index}
                    whileHover={{ scale: 1.1 }}
                    className="bg-gray-800 px-4 py-2 rounded-full text-sm cursor-pointer transition-all duration-300"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </div>

            {/* Backend Skills */}
            <div className="mb-4">
              <h4 className="text-xl text-gray-300 mb-2">Backend:</h4>
              <div className="flex flex-wrap gap-3">
                {["PHP", "Laravel", "Node.js", "Microservices Architecture", "Docker", "SQL", "Python"].map((tech, index) => (
                  <motion.span
                    key={index}
                    whileHover={{ scale: 1.1 }}
                    className="bg-gray-800 px-4 py-2 rounded-full text-sm cursor-pointer transition-all duration-300"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </div>

            {/* Tools Skills */}
            <div className="mb-4">
              <h4 className="text-xl text-gray-300 mb-2">Tools:</h4>
              <div className="flex flex-wrap gap-3">
                {["GitHub Actions", "CI/CD", "UX/UI Design Principles"].map((tech, index) => (
                  <motion.span
                    key={index}
                    whileHover={{ scale: 1.1 }}
                    className="bg-gray-800 px-4 py-2 rounded-full text-sm cursor-pointer transition-all duration-300"
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

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

// Function to generate stars randomly
const generateStars = (count) => {
  return Array.from({ length: count }).map(() => ({
    id: Math.random().toString(36).substr(2, 9),
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 2 + 1,
    delay: Math.random() * 5,
  }));
};

export default function Hero() {
  const [stars, setStars] = useState([]);

  useEffect(() => {
    setStars(generateStars(100)); // Generate 100 stars
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-white bg-black overflow-hidden">
      
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

      {/* Cosmic Nebula Glow */}
      <div className="absolute w-[800px] h-[800px] bg-purple-500 rounded-full blur-3xl opacity-20 top-1/3 left-1/4 animate-pulse"></div>
      <div className="absolute w-[600px] h-[600px] bg-blue-500 rounded-full blur-3xl opacity-30 bottom-1/4 right-1/4 animate-pulse"></div>

      {/* Profile Image with Cosmic Glow */}
      <motion.img 
        src="/graduation.jpg"
        alt="Gabriella Khayutin"
        className="w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 rounded-full shadow-lg border-4 border-white object-cover relative z-10"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      />

      {/* Hero Text */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center max-w-2xl relative z-10"
      >
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold leading-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 animate-pulse">
          Hi, I'm <span className="text-purple-400">Gabriella</span>
        </h1>
        <p className="text-lg sm:text-xl mt-4 text-gray-300">
          ICT Student | Software Engineer | Data Analyst
        </p>

        {/* View My Work Button */}
        <a href="#projects">
          <motion.button 
            whileHover={{ scale: 1.1, backgroundColor: "#fff", color: "#000" }}
            whileTap={{ scale: 0.95 }}
            className="mt-6 px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-full font-semibold shadow-lg transition duration-300 border border-white"
          >
            🚀 View My Work
          </motion.button>
        </a>
      </motion.div>

      {/* Floating Particles/Asteroids */}
      <motion.div
        className="absolute bottom-10 left-1/3 w-8 h-8 bg-gray-200 opacity-20 rounded-full blur-md"
        animate={{ x: [0, 20, -20, 0], y: [0, 20, -10, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-20 right-1/4 w-6 h-6 bg-gray-200 opacity-30 rounded-full blur-md"
        animate={{ x: [0, -15, 10, 0], y: [0, 10, -5, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      />
    </section>
  );
}

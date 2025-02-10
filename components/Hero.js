import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-white bg-gradient-to-r from-purple-600 to-blue-600 px-6">
      
      {/* Profile Image */}
      <motion.img 
        src="/gabriellakhayutin.jpeg"
        alt="Gabriella Khayutin"
        className="w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 rounded-full shadow-lg mb-6 border-4 border-white object-cover"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      />

      {/* Hero Text */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center max-w-2xl"
      >
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
          Hi, I'm Gabriella
        </h1>
        <p className="text-lg sm:text-xl mt-4">
          ICT Student | Software Engineer | Data Analyst
        </p>

        {/* View My Work Button */}
        <a href="#projects">
          <motion.button 
            whileHover={{ scale: 1.1, backgroundColor: "#fff", color: "#000" }}
            whileTap={{ scale: 0.95 }}
            className="mt-6 px-6 sm:px-8 py-3 sm:py-4 bg-white text-black rounded-full font-semibold shadow-lg transition duration-300"
          >
            🚀 View My Work
          </motion.button>
        </a>
      </motion.div>
    </section>
  );
}

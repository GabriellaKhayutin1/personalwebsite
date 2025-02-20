import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative py-20 bg-black text-white text-center overflow-hidden"
    >
      {/* Animated Stars in the Background */}
      <div className="absolute inset-0 z-0">
        {Array.from({ length: 50 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-white rounded-full opacity-50"
            style={{
              width: `${Math.random() * 3}px`,
              height: `${Math.random() * 3}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0, 1, 0],
              y: ["0%", "5%", "0%"],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>

      {/* Contact Title */}
      <motion.h2
        className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 z-10 relative"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Let's Connect
      </motion.h2>

      {/* Subtitle */}
      <motion.p
        className="mt-3 text-lg text-gray-300 z-10 relative"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        Want to work together? Reach out to me below!
      </motion.p>

      {/* Floating Buttons */}
      <motion.div
        className="mt-8 flex justify-center space-x-6 z-10 relative"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.6 }}
      >
        <motion.a
          href="mailto:gabriellakhayutin@gmail.com"
          className="px-6 py-3 bg-white text-black rounded-full font-semibold shadow-lg transition relative overflow-hidden"
          whileHover={{
            scale: 1.1,
            boxShadow: "0px 0px 15px rgba(255,255,255,0.8)",
          }}
        >
          ✉️ Email Me
        </motion.a>

        <motion.a
          href="https://www.linkedin.com/in/gabriella-khayutin-6a6847229/"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 bg-blue-500 text-white rounded-full font-semibold shadow-lg transition relative overflow-hidden"
          whileHover={{
            scale: 1.1,
            boxShadow: "0px 0px 15px rgba(100, 200, 255, 0.9)",
          }}
        >
          🔗 LinkedIn
        </motion.a>
      </motion.div>
    </section>
  );
}

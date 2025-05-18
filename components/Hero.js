import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0f172a] via-[#312e81] to-[#0ea5e9] text-white overflow-hidden px-4"
    >
      {/* Animated SVG/code background */}
      <motion.svg
        className="absolute inset-0 w-full h-full z-0"
        style={{ pointerEvents: "none" }}
        viewBox="0 0 1440 900"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0.7, 1, 0.7] }}
        transition={{ duration: 8, repeat: Infinity, repeatType: "reverse" }}
      >
        <g opacity="0.13">
          <rect x="100" y="100" width="1240" height="700" rx="60" fill="#fff" fillOpacity="0.02" />
          <rect x="200" y="200" width="1040" height="500" rx="40" fill="#fff" fillOpacity="0.04" />
          <g stroke="#38bdf8" strokeDasharray="10 12" strokeWidth="2">
            <line x1="350" y1="0" x2="350" y2="900" />
            <line x1="720" y1="0" x2="720" y2="900" />
            <line x1="1090" y1="0" x2="1090" y2="900" />
          </g>
          <g stroke="#a78bfa" strokeDasharray="6 16" strokeWidth="1.5">
            <line x1="0" y1="250" x2="1440" y2="250" />
            <line x1="0" y1="450" x2="1440" y2="450" />
            <line x1="0" y1="650" x2="1440" y2="650" />
          </g>
        </g>
      </motion.svg>

      {/* Main Content: horizontal split */}
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-center w-full max-w-7xl gap-20 py-24">
        {/* Left: Profile Image with techy border and glow */}
        <motion.div
          className="flex-shrink-0 flex flex-col items-center"
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative">
            {/* Glowing animated border */}
            <motion.div
              className="absolute -top-6 -left-6 w-[260px] h-[260px] rounded-full z-0"
              style={{
                background:
                  "conic-gradient(from 0deg, #38bdf8, #a78bfa, #38bdf8 360deg)",
                filter: "blur(16px)",
                opacity: 0.7,
              }}
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            />
            <img
              src="/graduation.jpg"
              alt="Gabriella Khayutin"
              className="w-60 h-60 sm:w-72 sm:h-72 rounded-full object-cover border-4 border-cyan-400 shadow-2xl bg-white/10 relative z-10"
            />
            {/* Techy border effect */}
            <svg className="absolute -top-3 -left-3 w-[280px] h-[280px] pointer-events-none" viewBox="0 0 280 280" fill="none">
              <circle cx="140" cy="140" r="130" stroke="#38bdf8" strokeWidth="2.5" strokeDasharray="12 16" />
              <circle cx="140" cy="140" r="120" stroke="#a78bfa" strokeWidth="1.5" strokeDasharray="6 18" />
            </svg>
          </div>
          {/* Monospaced role */}
          <div className="mt-8 px-6 py-2 rounded bg-black/70 border border-cyan-400 text-cyan-300 font-mono text-lg tracking-wider shadow-lg text-center">
            &lt;Software Engineer /&gt;
          </div>
          {/* Animated code snippet with blinking cursor */}
          <div className="mt-4 font-mono text-base text-purple-300 bg-black/60 px-4 py-2 rounded-lg border border-purple-700 shadow-md flex items-center">
            <span>{'const name = "Gabriella";'}</span>
            <motion.span
              className="ml-1 w-2 h-5 bg-purple-400 rounded-sm"
              animate={{ opacity: [1, 0, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            />
          </div>
        </motion.div>

        {/* Right: Text Content */}
        <motion.div
          className="flex-1 flex flex-col items-center md:items-start text-center md:text-left"
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* Terminal/card effect */}
          <div className="w-full max-w-2xl bg-black/70 border border-white/10 rounded-3xl shadow-2xl p-12 mb-8 backdrop-blur-lg">
            <div className="flex items-center mb-6">
              <span className="w-4 h-4 rounded-full bg-red-400 mr-2"></span>
              <span className="w-4 h-4 rounded-full bg-yellow-400 mr-2"></span>
              <span className="w-4 h-4 rounded-full bg-green-400"></span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
              Gabriella Khayutin
            </h1>
            <div className="mb-5 text-cyan-300 font-mono text-xl">
              // Software Developer & Creative Builder
            </div>
            <p className="text-gray-200 text-2xl font-medium mb-6">
              {`I build full-stack digital products that solve real problems, ranging from AI tools to sustainability focused apps using clean code, thoughtful design, and smart data.`}
            </p>
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.07 }}
              whileTap={{ scale: 0.97 }}
              className="inline-block mt-2 px-10 py-4 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold shadow-xl hover:from-purple-600 hover:to-blue-600 transition-all duration-300 text-xl"
            >
              View My Work
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

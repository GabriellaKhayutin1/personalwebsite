import { FaLinkedin, FaGithub, FaEnvelope, FaChevronUp } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="relative w-full bg-gradient-to-br from-[#181c2a]/90 via-[#232046]/90 to-[#0ea5e9]/80 backdrop-blur-2xl border-t border-white/10 shadow-2xl shadow-cyan-900/20 text-gray-200 overflow-hidden">
      {/* Gradient accent line */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-400 opacity-90" />
      {/* Optional: animated glow behind footer */}
      <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-2/3 h-24 bg-gradient-to-r from-blue-500/30 via-purple-500/20 to-cyan-400/30 blur-2xl rounded-full opacity-60 pointer-events-none" />
      <div className="relative max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-6 z-10">
        {/* Left: Name & Year */}
        <div className="text-lg font-semibold tracking-wide flex items-center gap-2">
          © {new Date().getFullYear()} Gabriella Khayutin
        </div>
        {/* Center: Social Icons */}
        <div className="flex items-center gap-6 text-2xl">
          <a href="https://www.linkedin.com/in/gabriellakhayutin" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors duration-200">
            <FaLinkedin />
          </a>
          <a href="https://github.com/gabriellakhayutin" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 transition-colors duration-200">
            <FaGithub />
          </a>
          <a href="mailto:gabriellakhayutin@gmail.com" className="hover:text-cyan-400 transition-colors duration-200">
            <FaEnvelope />
          </a>
        </div>
        {/* Right: Back to Top Arrow Icon */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="ml-auto flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg hover:from-purple-600 hover:to-blue-600 transition-all duration-300 border border-white/10 text-2xl"
          aria-label="Back to Top"
        >
          <FaChevronUp />
        </button>
      </div>
      {/* Tagline */}
      <div className="text-center text-sm text-gray-400 pb-4 pt-2">
        Made with <span className="text-pink-400">♥</span> 
      </div>
    </footer>
  );
} 
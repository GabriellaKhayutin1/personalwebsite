import { FaLinkedin, FaGithub, FaEnvelope, FaChevronUp } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="relative w-full bg-[#0b1224] border-t border-white/10 text-gray-200 overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-400 opacity-80" />

      <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 items-center gap-3 px-6 py-5 text-center text-sm sm:grid-cols-[1fr_auto_1fr] sm:gap-4">
        <div className="space-y-1 sm:contents sm:space-y-0">
          <p className="font-medium tracking-wide text-gray-300 sm:justify-self-start sm:text-left">
            © {new Date().getFullYear()} Gabriella Khayutin
          </p>
          <p className="text-gray-400 sm:justify-self-center">
            Designed and built by Gabriella
          </p>
        </div>

        <div className="flex items-center justify-center gap-2 sm:justify-end">
          <a
            href="https://www.linkedin.com/in/gabriellakhayutin"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-lg text-gray-300 transition-colors duration-200 hover:text-blue-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-300/70"
            aria-label="LinkedIn"
            title="LinkedIn"
          >
            <FaLinkedin aria-hidden="true" />
          </a>

          <a
            href="https://github.com/GabriellaKhayutin1"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-lg text-gray-300 transition-colors duration-200 hover:text-purple-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-300/70"
            aria-label="GitHub"
            title="GitHub"
          >
            <FaGithub aria-hidden="true" />
          </a>

          <a
            href="mailto:gabriellakhayutin@gmail.com"
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-lg text-gray-300 transition-colors duration-200 hover:text-cyan-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/70"
            aria-label="Email"
            title="Email"
          >
            <FaEnvelope aria-hidden="true" />
          </a>

          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/[0.03] text-base text-gray-300 transition-colors duration-200 hover:border-cyan-300/30 hover:text-cyan-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/70"
            aria-label="Back to top"
            title="Back to top"
            type="button"
          >
            <FaChevronUp aria-hidden="true" />
          </button>
        </div>
      </div>
    </footer>
  );
} 

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi"; // Icons for hamburger menu

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [activeSection, setActiveSection] = useState("home");
  const [lastScrollY, setLastScrollY] = useState(0);
  const navRef = useRef(null);

  // Detect scrolling direction and active section
  useEffect(() => {
    const handleScroll = () => {
      // Hide/show navbar based on scroll direction
      if (window.scrollY > lastScrollY && window.scrollY > 50) {
        setIsVisible(false); // Hide navbar when scrolling down
      } else {
        setIsVisible(true); // Show navbar when scrolling up
      }
      setLastScrollY(window.scrollY);
      
      // Determine active section
      const sections = ["home", "about", "projects", "contact"];
      
      for (const section of sections.reverse()) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
      
      // Special case for home section when at top
      if (window.scrollY < 100) {
        setActiveSection("home");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // Close mobile menu when clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <motion.nav 
      ref={navRef}
      className="fixed top-0 w-full z-50 transition-transform duration-500"
      initial={{ y: 0 }}
      animate={{ y: isVisible ? 0 : "-100%" }} // Hide on scroll down, show on scroll up
      style={{
        WebkitBackdropFilter: "blur(16px)",
        backdropFilter: "blur(16px)",
      }}
    >
      {/* Animated Gradient Glow Behind Navbar */}
      <motion.div
        className="absolute inset-0 -z-10"
        initial={{ opacity: 0.7 }}
        animate={{ opacity: [0.7, 1, 0.7] }}
        transition={{ duration: 8, repeat: Infinity, repeatType: "reverse" }}
        style={{
          background:
            "radial-gradient(ellipse at 50% 0%, rgba(99,102,241,0.18) 0%, transparent 70%), radial-gradient(ellipse at 80% 100%, rgba(34,211,238,0.13) 0%, transparent 80%)"
        }}
      />
      {/* Glassmorphism/Blurred Background + Gradient Accent */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-xl border-b border-white/10 shadow-lg shadow-cyan-900/10">
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-400 opacity-70" />
      </div>
      
      {/* Navbar Content */}
      <div className="relative max-w-7xl mx-auto px-6 py-4 flex justify-between items-center min-h-[72px]">
        {/* Logo with animated code cursor */}
        <motion.a
          href="#home"
          className="text-2xl font-extrabold tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 font-[Poppins] cursor-pointer select-none drop-shadow-lg"
          whileHover={{ scale: 1.08, textShadow: "0 0 16px #a78bfa" }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          Gabriella Khayutin
        </motion.a>

        {/* Hamburger Menu (Mobile) */}
        <motion.button 
          className="md:hidden text-3xl text-white z-50 relative w-12 h-12 flex items-center justify-center rounded-full hover:bg-white/10 transition"
          whileTap={{ scale: 0.92 }}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <AnimatePresence mode="wait">
            {menuOpen ? (
              <motion.div
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <FiX />
              </motion.div>
            ) : (
              <motion.div
                key="menu"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <FiMenu />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.button>

        {/* Navigation Links (Desktop) */}
        <div className="hidden md:flex items-center space-x-4">
          {[
            { name: "About", section: "about" },
            { name: "Projects", section: "projects" },
            { name: "Contact", section: "contact" }
          ].map((item) => (
            <motion.a
              key={item.section}
              href={`#${item.section}`}
              className="relative px-5 py-2 text-lg font-semibold group transition"
              whileHover={{ y: -3, color: "#38bdf8", textShadow: "0 2px 16px #38bdf8" }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <span
                className={`relative z-10 transition-colors duration-300 ${
                  activeSection === item.section
                    ? "text-white"
                    : "text-gray-300 group-hover:text-white"
                }`}
              >
                {item.name}
              </span>
              
              {/* Animated dot indicator under active link */}
              {activeSection === item.section && (
                <motion.span
                  className="absolute left-1/2 -translate-x-1/2 bottom-0 h-2 w-2 rounded-full bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 shadow-md"
                  layoutId="activeSectionDot"
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                />
              )}
            </motion.a>
          ))}
          
          {/* CV Download Button */}
          <a href="/Gabriella_Khayutin_Software_Developer_CV.pdf" download="Gabriella_Khayutin_Software_Developer_CV.pdf">
            <motion.button 
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.96 }}
              className="ml-4 px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-bold shadow-lg hover:from-purple-600 hover:to-blue-600 transition duration-300 text-base border border-white/10"
            >
              Download CV
            </motion.button>
          </a>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="absolute top-full left-0 w-full bg-black/95 backdrop-blur-2xl border-b border-white/10 overflow-hidden md:hidden shadow-2xl"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
          >
            <div className="py-6 px-6 flex flex-col space-y-4">
              {[
                { name: "About", section: "about" },
                { name: "Projects", section: "projects" },
                { name: "Contact", section: "contact" }
              ].map((item, index) => (
                <motion.a
                  key={item.section}
                  href={`#${item.section}`}
                  className={`py-3 px-4 rounded-lg text-lg font-semibold transition-colors ${
                    activeSection === item.section
                      ? "bg-gradient-to-r from-blue-600/20 to-purple-600/20 text-white"
                      : "text-gray-300 hover:bg-white/10"
                  }`}
                  onClick={() => setMenuOpen(false)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  {item.name}
                </motion.a>
              ))}
              
              {/* CV Download Button */}
              <motion.a 
                href="/Gabriella_Khayutin_Software_Developer_CV.pdf" 
                download="Gabriella_Khayutin_Software_Developer_CV.pdf"
                className="mt-2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <button className="w-full py-3 px-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-bold flex justify-center items-center border border-white/10">
                  Download CV
                </button>
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi"; // Icons for hamburger menu

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Detect scrolling direction
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY && window.scrollY > 50) {
        setIsVisible(false); // Hide navbar when scrolling down
      } else {
        setIsVisible(true); // Show navbar when scrolling up
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <motion.nav 
      className="fixed top-0 w-full bg-black bg-opacity-80 text-white p-4 flex justify-between items-center z-50 transition-transform duration-500"
      initial={{ y: 0 }}
      animate={{ y: isVisible ? 0 : "-100%" }} // Hide on scroll down, show on scroll up
    >
      {/* Logo */}
      <h1 className="text-xl font-extrabold tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 drop-shadow-lg font-[Poppins]">
        Gabriella Khayutin
      </h1>

      {/* Hamburger Menu (Mobile) */}
      <button className="md:hidden text-2xl" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <FiX /> : <FiMenu />}
      </button>

      {/* Navigation Links (Desktop & Mobile) */}
      <ul className={`md:flex md:space-x-6 items-center absolute md:static bg-black bg-opacity-90 md:bg-transparent w-full md:w-auto top-16 left-0 md:flex-row flex-col py-4 md:py-0 ${menuOpen ? "flex" : "hidden"}`}>
        <li className="py-2 text-center"><a href="#about" className="hover:text-gray-400">About</a></li>
        <li className="py-2 text-center"><a href="#projects" className="hover:text-gray-400">Projects</a></li>
        <li className="py-2 text-center"><a href="#contact" className="hover:text-gray-400">Contact</a></li>
        
        {/* CV Download Button */}
        <li className="py-2 text-center">
          <a href="/Gabriella-Khayutin-CV.pdf" download="Gabriella-Khayutin-CV.pdf">
            <motion.button 
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="px-4 py-2 bg-white text-black rounded-full font-semibold shadow-md hover:bg-gray-200 transition duration-300"
            >
              Download CV
            </motion.button>
          </a>
        </li>
      </ul>
    </motion.nav>
  );
}

import { motion } from "framer-motion";
import { useState, useRef } from "react";
import emailjs from '@emailjs/browser';

const contactParticles = [
  { size: 1.3, top: 12, left: 18, glow: 1.4, duration: 8.5, delay: 0.2 },
  { size: 1.8, top: 22, left: 76, glow: 1.8, duration: 9.2, delay: 1.1 },
  { size: 1.2, top: 34, left: 42, glow: 1.5, duration: 7.8, delay: 2.4 },
  { size: 2.1, top: 46, left: 86, glow: 2.1, duration: 10.2, delay: 0.8 },
  { size: 1.4, top: 58, left: 11, glow: 1.6, duration: 8.9, delay: 1.8 },
  { size: 1.6, top: 67, left: 63, glow: 1.9, duration: 9.8, delay: 3.1 },
  { size: 1.1, top: 78, left: 30, glow: 1.3, duration: 7.5, delay: 2.0 },
  { size: 1.9, top: 84, left: 72, glow: 2.0, duration: 10.8, delay: 0.5 },
  { size: 1.2, top: 18, left: 54, glow: 1.5, duration: 8.1, delay: 3.6 },
  { size: 1.7, top: 39, left: 24, glow: 1.8, duration: 9.5, delay: 1.4 },
  { size: 1.3, top: 52, left: 51, glow: 1.4, duration: 8.7, delay: 2.7 },
  { size: 1.5, top: 73, left: 88, glow: 1.7, duration: 9.9, delay: 3.9 },
  { size: 1.2, top: 88, left: 45, glow: 1.5, duration: 8.3, delay: 1.6 },
  { size: 1.6, top: 28, left: 91, glow: 1.9, duration: 10.4, delay: 2.9 },
  { size: 1.4, top: 63, left: 7, glow: 1.6, duration: 8.0, delay: 0.9 },
];

export default function Contact() {
  const formRef = useRef();
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage("");
    
    // EmailJS configuration
    const serviceId = 'service_xmo69nn';
    const templateId = 'template_iomempx';
    const publicKey = '71QrzDW819GHth889';
    
    emailjs.sendForm(serviceId, templateId, formRef.current, publicKey)
      .then((result) => {
        setIsSubmitting(false);
        setIsSubmitted(true);
        setFormState({ name: "", email: "", message: "" });
        setTimeout(() => setIsSubmitted(false), 5000);
      })
      .catch((error) => {
        setIsSubmitting(false);
        setErrorMessage("Failed to send email. Please try again or contact me directly via email.");
      });
  };

  return (
    <section
      id="contact"
      className="relative py-24 bg-gradient-to-b from-gray-900 to-black text-white overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[url('/grid.png')] bg-center opacity-5"></div>
      <div className="absolute w-[600px] h-[600px] bg-blue-600 rounded-full blur-[180px] opacity-5 -bottom-40 left-1/2 transform -translate-x-1/2"></div>
      
      {/* Animated Particles */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {contactParticles.map((particle, i) => (
          <motion.div
            key={i}
            className="absolute bg-white rounded-full"
            style={{
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              top: `${particle.top}%`,
              left: `${particle.left}%`,
              boxShadow: `0 0 ${particle.glow}px rgba(255, 255, 255, 0.35)`,
            }}
            animate={{
              opacity: [0.12, 0.32, 0.12],
              scale: [1, 1.12, 1],
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              ease: "easeInOut",
              delay: particle.delay,
            }}
          />
        ))}
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl sm:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-4">
            Let&rsquo;s Connect
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            I&rsquo;m currently open to graduation internship opportunities from February 2027 and conversations about backend development, AI integration and product-focused software.
          </p>
        </motion.div>

        {/* Contact Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Contact Info */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div>
              <h3 className="text-2xl font-bold mb-4 text-white">Get in Touch</h3>
              <p className="text-gray-300 mb-6">
                Feel free to reach out about internship opportunities, software projects or potential collaborations. I&rsquo;d be happy to discuss how my experience could contribute to your team.
              </p>
            </div>
            
            {/* Contact Methods */}
            <div className="space-y-6">
              {/* Email */}
              <motion.div 
                className="flex items-start space-x-4 group"
                whileHover={{ x: 5 }}
              >
                <div className="flex-shrink-0 w-12 h-12 bg-blue-600/20 rounded-lg flex items-center justify-center group-hover:bg-blue-600/30 transition-colors duration-300">
                  <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-medium text-gray-200">Email</h4>
                  <a 
                    href="mailto:gabriellakhayutin@gmail.com" 
                    className="text-blue-400 hover:underline"
                  >
                    gabriellakhayutin@gmail.com
                  </a>
                </div>
              </motion.div>
              
              {/* LinkedIn */}
              <motion.div 
                className="flex items-start space-x-4 group"
                whileHover={{ x: 5 }}
              >
                <div className="flex-shrink-0 w-12 h-12 bg-purple-600/20 rounded-lg flex items-center justify-center group-hover:bg-purple-600/30 transition-colors duration-300">
                  <svg className="w-6 h-6 text-purple-400" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-medium text-gray-200">LinkedIn</h4>
                  <a 
                    href="https://www.linkedin.com/in/gabriella-khayutin-6a6847229/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-purple-400 hover:underline"
                  >
                    Connect with me
                  </a>
                </div>
              </motion.div>
              
              {/* GitHub */}
              <motion.div 
                className="flex items-start space-x-4 group"
                whileHover={{ x: 5 }}
              >
                <div className="flex-shrink-0 w-12 h-12 bg-cyan-600/20 rounded-lg flex items-center justify-center group-hover:bg-cyan-600/30 transition-colors duration-300">
                  <svg className="w-6 h-6 text-cyan-400" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.49 11.49 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-medium text-gray-200">GitHub</h4>
                  <a 
                    href="https://github.com/GabriellaKhayutin1"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cyan-400 hover:underline"
                  >
                    github.com/GabriellaKhayutin1
                  </a>
                </div>
              </motion.div>
            </div>
          </motion.div>
          
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700">
              <h3 className="text-2xl font-bold mb-6 text-white">Send a Message</h3>
              
              {isSubmitted ? (
                <motion.div 
                  className="bg-green-800/30 border border-green-500/30 rounded-lg p-4 text-green-300 flex items-center space-x-3"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Message sent successfully! I&apos;ll get back to you soon.</span>
                </motion.div>
              ) : (
                <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
                  {errorMessage && (
                    <div className="bg-red-800/30 border border-red-500/30 rounded-lg p-4 text-red-300 mb-4">
                      {errorMessage}
                    </div>
                  )}
                  
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formState.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg bg-gray-700/50 border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                      placeholder="Your name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formState.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg bg-gray-700/50 border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                      placeholder="Your email"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formState.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 rounded-lg bg-gray-700/50 border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-none"
                      placeholder="Your message"
                    />
                  </div>
                  
                  <div>
                    <motion.button
                      type="submit"
                      disabled={isSubmitting}
                      className={`w-full py-3 rounded-lg font-medium transition-all duration-300 flex justify-center items-center ${
                        isSubmitting
                          ? "bg-gray-700 text-gray-300 cursor-not-allowed"
                          : "bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:shadow-lg hover:shadow-blue-500/20"
                      }`}
                      whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                      whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                    >
                      {isSubmitting ? (
                        <>
                          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Sending...
                        </>
                      ) : (
                        "Send Message"
                      )}
                    </motion.button>
                  </div>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

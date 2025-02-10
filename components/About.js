import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="h-screen flex items-center justify-center bg-gray-900 text-white px-10">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="max-w-3xl text-center"
      >
        <h2 className="text-4xl font-bold">About Me</h2>
        <p className="text-lg mt-4">
          I'm a passionate software developer who loves combining **technology and business**.
          I have experience in **frontend & backend development**, and I'm always learning
          **new things** to push my limits.
        </p>
      </motion.div>
    </section>
  );
}

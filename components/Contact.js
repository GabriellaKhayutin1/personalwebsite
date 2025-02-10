export default function Contact() {
  return (
    <section id="contact" className="h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-600 to-purple-600 text-white">
      <h2 className="text-4xl font-bold">Let's Connect</h2>
      <p className="mt-4 text-lg">Want to work together? Contact me below!</p>
      <div className="mt-6 flex space-x-4">
        <a href="mailto:gabriellakhayutin@gmail.com" className="px-6 py-3 bg-white text-black rounded-full font-semibold">Email Me</a>
        <a href="https://www.linkedin.com/in/gabriellakhayutin" target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-blue-500 text-white rounded-full font-semibold">LinkedIn</a>
      </div>
    </section>
  );
}

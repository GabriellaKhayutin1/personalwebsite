import { motion } from "framer-motion";

export default function Hero() {
  const scrollToSection = (event, sectionId) => {
    event.preventDefault();

    const section = document.getElementById(sectionId);
    if (!section) return;

    const navbarOffset = 88;
    const top = section.getBoundingClientRect().top + window.scrollY - navbarOffset;

    window.history.pushState(null, "", `#${sectionId}`);
    window.scrollTo({ top, behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative overflow-hidden bg-[#081122] pt-[var(--navbar-height)] text-white"
      style={{ "--navbar-height": "72px" }}
    >
      <div
        className="absolute inset-0 opacity-90"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(circle at 16% 20%, rgba(59,130,246,0.16), transparent 34%), linear-gradient(180deg, #081122 0%, #0b1224 68%, #070d1b 100%)",
        }}
      />
      <div
        className="absolute inset-0 opacity-[0.035]"
        aria-hidden="true"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.35) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.35) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      <div className="relative z-10 flex min-h-[calc(100vh-var(--navbar-height))] min-h-[calc(100svh-var(--navbar-height))] items-center px-4 py-10 sm:px-6 sm:py-12 lg:px-8">
        <div className="mx-auto grid w-full max-w-[1240px] items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <motion.div
            className="order-2 flex justify-center lg:order-1 lg:justify-start"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: "easeOut" }}
          >
            <div className="w-full max-w-[360px] sm:max-w-[400px] lg:max-w-[420px]">
              <div className="relative">
                <div
                  className="absolute -inset-3 rounded-[1.35rem] border border-cyan-300/20 bg-cyan-300/[0.035]"
                  aria-hidden="true"
                />
                <div
                  className="absolute -bottom-4 -right-4 h-32 w-32 rounded-full bg-purple-500/10 blur-2xl"
                  aria-hidden="true"
                />
                <div className="relative overflow-hidden rounded-[1.15rem] border border-cyan-300/35 bg-white/[0.03] shadow-2xl shadow-black/30">
                  <img
                    src="/graduation.jpg"
                    alt="Gabriella Khayutin"
                    className="aspect-[4/5] w-full object-cover"
                  />
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="order-1 mx-auto max-w-2xl text-center lg:order-2 lg:mx-0 lg:text-left"
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.12, ease: "easeOut" }}
          >
            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.26em] text-cyan-300">
              Final-year Software Engineering Student
            </p>

            <h1 className="text-5xl font-bold leading-tight text-white sm:text-6xl lg:text-7xl">
              Gabriella Khayutin
            </h1>

            <p className="mt-4 text-2xl font-semibold text-purple-300 sm:text-3xl">
              Backend Development & AI
            </p>

            <p className="mt-6 max-w-xl text-lg leading-8 text-gray-300 sm:text-xl sm:leading-9 lg:max-w-2xl">
              I build practical software at the intersection of backend systems, AI and user experience.
            </p>

            <p className="mt-4 text-base font-medium text-gray-400 sm:text-lg">
              Currently seeking a graduation internship from February 2027.
            </p>

            <div className="mt-9 flex flex-col items-center gap-4 sm:flex-row sm:justify-center lg:justify-start">
              <motion.a
                href="#projects"
                onClick={(event) => scrollToSection(event, "projects")}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex min-h-12 items-center justify-center rounded-lg bg-blue-600 px-7 py-3 text-base font-semibold text-white shadow-lg shadow-blue-950/30 transition-colors duration-200 hover:bg-purple-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-300/80"
              >
                View My Work
              </motion.a>

              <motion.a
                href="#contact"
                onClick={(event) => scrollToSection(event, "contact")}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex min-h-12 items-center justify-center rounded-lg border border-white/10 px-7 py-3 text-base font-semibold text-gray-200 transition-colors duration-200 hover:border-cyan-300/35 hover:text-cyan-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/70"
              >
                Contact Me
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

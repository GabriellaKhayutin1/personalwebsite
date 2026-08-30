import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import {
  FiArrowUpRight,
  FiChevronLeft,
  FiChevronRight,
  FiCheckCircle,
  FiExternalLink,
  FiGithub,
  FiGlobe,
  FiImage,
  FiMic,
  FiStar,
  FiX,
} from "react-icons/fi";

const projects = [
  {
    title: "AI-Powered VR Training Platform",
    contextLabel: "Software Engineering Internship · Backend & AI",
    description:
      "A speech-to-text and AI-feedback prototype developed for an AI-powered virtual-patient training platform used by nursing students.",
    overview:
      "A speech-to-text and AI-feedback prototype developed for an AI-powered virtual-patient training platform used by nursing students.",
    whatBuilt:
      "Engineered and benchmarked a Dockerised Python speech-to-text backend prototype designed for near-real-time Dutch transcription and integration with the platform’s AI feedback workflow.",
    outcomesHeading: "Key Outcomes",
    keyFunctionality: [
      "Reduced backend transcription latency by approximately 65%, from 4.0 seconds to 1.2–1.5 seconds",
      "Evaluated five speech-recognition solutions to identify a suitable approach for near-real-time Dutch transcription",
      "Validated the selected prototype through ten automated tests and user sessions with three nursing students",
      "Expanded the AI feedback generator with five communication indicators",
    ],
    tech: ["Python", "FastAPI", "WebSockets", "WhisperLive", "faster-whisper", "Docker"],
    image: "/internship.jpg",
    images: ["/internship.jpg", "/videoai_9468.png", "/vr2.jpg"],
    imageAlt: "Headset user training with an AI virtual patient displayed on a classroom screen",
    imageAlts: [
      "Headset user training with an AI virtual patient displayed on a classroom screen",
      "Nursing student wearing a VR headset while a virtual patient is shown on a screen",
      "VR training room with a headset user, hospital bed and virtual patient display",
    ],
    imageFit: "contain",
    visual: "jrcz",
    accent: "purple",
    links: [],
  },
  {
    title: "SolaiMenu",
    contextLabel: "Full-Stack Product Development",
    description:
      "A multilingual AI-powered QR-menu SaaS product that enables restaurants to create, manage and publish menus in ten languages from one dashboard.",
    overview:
      "A multilingual AI-powered QR-menu SaaS product that enables restaurants to create, manage and publish menus in ten languages from one dashboard.",
    whatBuilt:
      "Developed both the restaurant-facing menu-management experience and the customer-facing QR menu, with workflows for creating, updating and publishing multilingual menu content.",
    keyFunctionality: [
      "Menu creation and management from a central dashboard",
      "Multilingual publishing across ten languages with AI-assisted translations",
      "Allergen information and AI-assisted food-and-drink recommendations",
      "Search and filtering, restaurant specials and events, and menu analytics",
    ],
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase", "OpenAI API", "Vercel"],
    image: "/Artboard 8.png",
    images: [
      "/Artboard 8.png",
      "/solai-overview.png",
      "/solai-bigoverview.png",
      "/solai-menumanager.png",
      "/solai-menudesign.png",
      "/solai-languagessettings.png",
      "/solai-specialevents.png",
      "/solai-insights.png",
      "/solai-qr.png",
      "/solai-restaurantsettongs.png",
      "/solai-createrestaurant.png",
      "/solai-login.png",
      "/solai-signup.png",
    ],
    imageAlt: "SolaiMenu logo",
    imageAlts: [
      "SolaiMenu logo",
      "SolaiMenu restaurant dashboard overview screenshot",
      "SolaiMenu detailed restaurant overview screenshot",
      "SolaiMenu menu manager screenshot",
      "SolaiMenu menu design editor screenshot",
      "SolaiMenu language settings screenshot",
      "SolaiMenu specials and events management screenshot",
      "SolaiMenu analytics and insights screenshot",
      "SolaiMenu QR code preview screenshot",
      "SolaiMenu restaurant settings screenshot",
      "SolaiMenu create restaurant screen screenshot",
      "SolaiMenu login screen screenshot",
      "SolaiMenu signup screen screenshot",
    ],
    imageTreatment: "logo",
    visual: "solaimenu",
    accent: "blue",
    links: [],
  },
  {
    title: "Smart Storage",
    description:
      "Smart pantry app with ingredient management, expiry tracking, Google Calendar integration and CO₂-savings analytics.",
    overview:
      "A smart pantry and food-management application designed to help users organise ingredients, track expiry dates and better understand the financial and environmental impact of food usage.",
    whatBuilt:
      "Developed the full-stack application, including authenticated user accounts, ingredient-management workflows, personalised dashboards and responsive interfaces.",
    keyFunctionality: [
      "Ingredient management with expiry-date tracking and reminders",
      "Google authentication and Google Calendar integration",
      "Personalised analytics and CO₂-savings calculations based on tracked food usage",
      "Subscription and payment functionality for premium access",
    ],
    tech: ["Node.js", "Express.js", "MongoDB", "JavaScript", "Tailwind CSS"],
    cardTech: ["Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
    image: "/smartstorage3.png",
    images: [
      "/smartstorage3.png",
      "/smartshome.png",
      "/smartsprofile.png",
      "/smartsco2chart.png",
      "/smartstips.png",
      "/smartsgogle.png",
      "/smartsleadearboard.png",
      "/smartstorage2.png",
    ],
    imageAlt: "Smart Storage pantry management screenshot",
    imageAlts: [
      "Smart Storage pantry overview screenshot",
      "Smart Storage home dashboard screenshot",
      "Smart Storage user profile screenshot",
      "Smart Storage CO2 savings chart screenshot",
      "Smart Storage food-saving tips screenshot",
      "Smart Storage Google Calendar integration screenshot",
      "Smart Storage leaderboard screenshot",
      "Smart Storage pantry item details screenshot",
    ],
    accent: "cyan",
    links: [
      {
        label: "Repository",
        href: "https://github.com/GabriellaKhayutin1/smartstorage",
        icon: FiGithub,
      },
    ],
  },
  {
    title: "JUNKER",
    contextLabel: "Six-Person Team Project",
    description:
      "An eco-conscious item-exchange platform developed in a six-person team to help users give unwanted items a second life.",
    overview:
      "An eco-conscious item-exchange platform developed in a six-person team to help users give unwanted items a second life.",
    whatBuilt:
      "Developed frontend and backend functionality within the team and contributed to shaping the platform’s user experience.",
    contributionHeading: "My Contribution",
    outcomesHeading: "Key Outcomes & Functionality",
    keyFunctionality: [
      "Developed the core item-exchange experience",
      "Contributed across both frontend and backend implementation",
      "Collaborated within a six-person multidisciplinary development team",
      "Reached the university’s Dragons’ Den final and placed third",
    ],
    tech: ["SvelteKit", "TypeScript", "Tailwind CSS", "Node.js", "Express.js"],
    image: "/junker.png",
    images: ["/junker.png", "/junker1.jpeg", "/junker1.jpg", "/junker2.jpg"],
    imageAlt: "JUNKER item-exchange platform screenshot",
    imageAlts: [
      "JUNKER item-exchange platform screenshot",
      "JUNKER app interface screenshot",
      "JUNKER project presentation photo",
      "JUNKER team project showcase photo",
    ],
    accent: "blue",
    links: [],
  },
  {
    title: "IT Conference Website",
    contextLabel: "Team Project · Frontend Developer",
    description:
      "Contributed to the public-facing website for the official HZ ICT Conference, translating Figma designs into responsive pages and navigation as part of the website development team.",
    overview:
      "Contributed to the public-facing website for the official HZ ICT Conference, translating Figma designs into responsive pages and navigation as part of the website development team.",
    contributionHeading: "My Contribution",
    contributionItems: [
      "Developed the speakers page, FAQ and responsive navigation",
      "Contributed to the landing and contact pages",
      "Integrated frontend work from multiple branches into a consistent public-facing experience",
      "Collaborated within the IT Conference Website Team to deliver the final website",
    ],
    tech: ["Laravel", "Blade", "Tailwind CSS", "JavaScript"],
    image: "/itconference.png",
    images: ["/itconference.png", "/itlogo.png"],
    imageAlt: "HZ ICT Conference website landing page screenshot",
    imageAlts: [
      "HZ ICT Conference website landing page screenshot",
      "HZ ICT Conference logo graphic",
    ],
    accent: "purple",
    links: [
      {
        label: "Live Website ↗",
        href: "https://weareinittogether.nl/",
        icon: FiGlobe,
      },
      {
        label: "Team Repository ↗",
        href: "https://github.com/HZ-HBO-ICT/it-conference",
        icon: FiGithub,
      },
    ],
  },
  {
    title: "IdeaPolish.ai",
    description:
      "An AI-enabled application that helps users evaluate and refine early-stage ideas through structured, AI-generated analysis.",
    overview:
      "An AI-enabled application that helps users evaluate and refine early-stage ideas through structured, AI-generated analysis.",
    whatBuilt:
      "Built the backend workflow for submitting an idea, generating a structured analysis with Gemini and storing the results for later review and management.",
    keyFunctionality: [
      "Collects the idea, industry, target audience and problem being addressed",
      "Generates structured AI analysis covering the concept, value proposition, market, strengths, weaknesses and opportunities",
      "Stores generated analyses in MongoDB for later retrieval",
      "Supports retrieving, editing and deleting saved analyses",
    ],
    tech: ["Node.js", "Express.js", "MongoDB", "Gemini API"],
    image: "/ai.png",
    images: ["/ai.png", "/ideapolish.jpg"],
    imageAlt: "IdeaPolish.ai landing page screenshot",
    imageAlts: [
      "IdeaPolish.ai landing page screenshot",
      "IdeaPolish.ai product interface screenshot",
    ],
    accent: "cyan",
    links: [],
  },
];

const accentStyles = {
  blue: {
    border: "hover:border-blue-400/45",
    text: "text-blue-300",
    line: "from-blue-400 to-purple-400",
    soft: "bg-blue-400/10",
  },
  purple: {
    border: "hover:border-purple-400/45",
    text: "text-purple-300",
    line: "from-purple-400 to-blue-400",
    soft: "bg-purple-400/10",
  },
  cyan: {
    border: "hover:border-cyan-400/45",
    text: "text-cyan-300",
    line: "from-cyan-400 to-blue-400",
    soft: "bg-cyan-400/10",
  },
};

const viewport = { once: true, amount: 0.18 };

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    if (!selectedProject) {
      return undefined;
    }

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setSelectedProject(null);
      }
    };

    const previousOverflow = document.body.style.overflow;
    const previousHtmlOverflow = document.documentElement.style.overflow;
    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.documentElement.style.overflow = previousHtmlOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedProject]);

  return (
    <section id="projects" className="relative overflow-hidden bg-[#070d1b] pb-20 pt-32 text-white sm:pb-24 sm:pt-36 lg:pb-28 lg:pt-40">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(124,58,237,0.12),transparent_34%),radial-gradient(circle_at_15%_25%,rgba(59,130,246,0.08),transparent_28%),radial-gradient(circle_at_85%_75%,rgba(34,211,238,0.05),transparent_30%)]" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-purple-400/50 to-transparent" />

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <motion.div
          className="mx-auto mb-10 max-w-2xl text-center sm:mb-12"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewport}
          transition={{ duration: 0.55, ease: "easeOut" }}
        >
          <div className="mb-4 flex items-center justify-center gap-3 font-mono text-xs text-purple-300">
            <span>02</span>
            <span className="h-px w-10 bg-purple-400/70" />
          </div>
          <h2 className="text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
            Selected{" "}
            <span className="text-purple-300">
              Projects
            </span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-gray-400 sm:text-base">
            A selection of full-stack and AI-powered projects built with practical architecture, thoughtful interfaces and real project constraints.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 gap-5 xl:grid-cols-2"
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.08,
              },
            },
          }}
        >
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} onSelect={() => setSelectedProject(project)} />
          ))}
        </motion.div>

        <motion.div
          className="mx-auto mt-10 flex max-w-xl flex-col items-center justify-center gap-3 text-center text-sm text-gray-400 sm:flex-row"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewport}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <FiStar className="h-5 w-5 text-purple-300" aria-hidden="true" />
          <span>Interested in working together?</span>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 font-medium text-purple-300 transition hover:text-cyan-200 focus:outline-none focus:ring-2 focus:ring-purple-300/50"
          >
            Let&apos;s connect
            <FiArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </motion.div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
        )}
      </AnimatePresence>
    </section>
  );
}

function ProjectCard({ project, onSelect }) {
  const accent = accentStyles[project.accent];
  const cardTech = project.cardTech || project.tech.slice(0, 4);

  return (
    <motion.button
      type="button"
      onClick={onSelect}
      className={`group/card relative overflow-hidden rounded-xl border border-white/10 bg-[#0c1426]/80 p-4 text-left shadow-lg shadow-black/10 backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:bg-[#101a31]/90 focus:outline-none focus:ring-2 focus:ring-purple-300/50 ${accent.border} sm:p-5`}
      variants={{
        hidden: { opacity: 0, y: 22 },
        visible: { opacity: 1, y: 0 },
      }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className={`absolute inset-x-0 top-0 h-px bg-gradient-to-r ${accent.line} opacity-0 transition-opacity duration-300 group-hover/card:opacity-100`} />

      <div className="grid min-h-[250px] grid-cols-1 gap-5 md:grid-cols-[0.92fr_1fr] md:items-center">
        <ProjectVisual project={project} accent={accent} />

        <div className="flex min-w-0 flex-col md:min-h-[210px]">
          <h3 className="text-2xl font-semibold leading-tight tracking-normal text-white sm:text-3xl">
            {project.title}
          </h3>
          {project.contextLabel && (
            <p className={`mt-2 text-xs font-semibold uppercase tracking-[0.14em] ${accent.text}`}>
              {project.contextLabel}
            </p>
          )}
          <p className="mt-3 text-sm leading-6 text-gray-300">{project.description}</p>

          <div className="mt-5 flex flex-wrap gap-2">
            {cardTech.map((tech) => (
              <span
                key={tech}
                className="rounded-lg border border-blue-400/20 bg-blue-500/10 px-3 py-1.5 text-xs font-medium text-gray-300"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className={`mt-auto inline-flex items-center justify-end gap-2 pt-6 text-sm font-medium ${accent.text}`}>
            <span>View case study</span>
            <FiArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover/card:translate-x-1" aria-hidden="true" />
          </div>
        </div>
      </div>
    </motion.button>
  );
}

function ProjectVisual({ project, accent }) {
  const isLogo = project.imageTreatment === "logo" && project.image === "/Artboard 8.png";

  return (
    <div className={`relative min-h-[190px] overflow-hidden rounded-lg border border-white/10 ${isLogo ? "bg-black" : "bg-gray-950/70"}`}>
      {project.image ? (
        <Image
          src={project.image}
          alt={project.imageAlt}
          fill
          sizes="(min-width: 1280px) 38vw, (min-width: 768px) 44vw, 100vw"
          className={`${isLogo ? "object-contain p-12 sm:p-14" : project.imageFit === "contain" ? "object-contain group-hover/card:scale-[1.03]" : "object-cover group-hover/card:scale-[1.03]"} bg-black transition duration-500`}
        />
      ) : project.visual === "jrcz" ? (
        <JrczVisual accent={accent} />
      ) : (
        <SolaiMenuVisual accent={accent} />
      )}
    </div>
  );
}

function JrczVisual({ accent }) {
  return (
    <div className="relative h-full min-h-[220px] p-5">
      <div className={`absolute inset-0 ${accent.soft}`} />
      <div className="relative flex h-full flex-col justify-between">
        <div className="flex items-center justify-between">
          <span className={`inline-flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-gray-950/70 ${accent.text}`}>
            <FiMic className="h-4 w-4" aria-hidden="true" />
          </span>
          <span className="rounded-full border border-white/10 bg-gray-950/60 px-3 py-1 font-mono text-[0.65rem] uppercase tracking-[0.16em] text-gray-300">
            approximately 65% reduction
          </span>
        </div>

        <div className="my-5 rounded-xl border border-white/10 bg-gray-950/55 p-4">
          <div className="mb-4 flex items-center justify-between gap-4 text-xs text-gray-400">
            <span>Speech stream</span>
            <span className={accent.text}>Dockerised backend prototype</span>
          </div>
          <div className="flex h-16 items-center gap-1.5" aria-hidden="true">
            {["h-4", "h-8", "h-5", "h-10", "h-6", "h-12", "h-7", "h-9", "h-5", "h-8", "h-4", "h-6"].map((height, index) => (
              <span
                key={`${height}-${index}`}
                className={`w-full rounded-full bg-gradient-to-t ${accent.line} ${height} opacity-70`}
              />
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-2 text-xs">
          <div className="rounded-lg border border-white/10 bg-gray-950/55 p-3">
            <div className="text-gray-500">Before</div>
            <div className={`mt-1 font-mono text-lg font-semibold ${accent.text}`}>4.0 seconds</div>
          </div>
          <div className="rounded-lg border border-white/10 bg-gray-950/55 p-3">
            <div className="text-gray-500">After</div>
            <div className={`mt-1 font-mono text-lg font-semibold ${accent.text}`}>1.2–1.5 seconds</div>
          </div>
        </div>
      </div>
    </div>
  );
}

function SolaiMenuVisual({ accent }) {
  return (
    <div className="relative h-full min-h-[220px] p-5">
      <div className={`absolute inset-0 ${accent.soft}`} />
      <div className="relative flex h-full gap-4">
        <div className="flex-1 rounded-xl border border-white/10 bg-gray-950/70 p-4">
          <div className="mb-4 flex items-center justify-between">
            <span className="text-xs font-medium text-gray-300">Menus</span>
            <FiGlobe className={`h-4 w-4 ${accent.text}`} aria-hidden="true" />
          </div>
          {["Seasonal menu", "Lunch menu", "Drinks"].map((item, index) => (
            <div key={item} className="mb-3 rounded-lg border border-white/10 bg-white/[0.04] p-2.5">
              <div className="mb-2 flex items-center justify-between gap-3">
                <span className="truncate text-xs text-gray-300">{item}</span>
                <span className={`h-1.5 w-8 rounded-full bg-gradient-to-r ${accent.line}`} />
              </div>
              <div className="flex gap-1.5" aria-hidden="true">
                {[0, 1, 2, 3].map((flag) => (
                  <span
                    key={`${index}-${flag}`}
                    className="h-2 w-3 rounded-sm bg-gray-500/70"
                  />
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="hidden w-20 rounded-2xl border border-white/10 bg-gray-950/80 p-2 shadow-xl shadow-black/20 sm:block">
          <div className="mb-2 h-1.5 w-8 rounded-full bg-white/20 mx-auto" />
          <div className={`h-16 rounded-xl bg-gradient-to-br ${accent.line} opacity-80`} />
          <div className="mt-3 space-y-2">
            <div className="h-2 rounded-full bg-white/25" />
            <div className="h-2 w-2/3 rounded-full bg-white/15" />
            <div className="h-5 rounded-lg border border-white/10 bg-white/[0.04]" />
          </div>
        </div>
      </div>
    </div>
  );
}

function ProjectModal({ project, onClose }) {
  const accent = accentStyles[project.accent];

  return (
    <motion.div
      className="fixed inset-0 z-50 flex h-[100dvh] items-center justify-center overflow-hidden bg-gray-950/85 p-3 backdrop-blur-md lg:px-4 lg:py-8"
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-modal-title"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="relative max-h-[calc(100dvh-24px)] w-[calc(100vw-24px)] max-w-full overflow-x-hidden overflow-y-auto overscroll-contain rounded-xl border border-white/10 bg-[#0b1224] p-4 shadow-2xl shadow-black/40 sm:p-5 lg:max-h-[92vh] lg:w-full lg:max-w-[88rem] lg:rounded-2xl lg:p-7"
        initial={{ opacity: 0, scale: 0.96, y: 18 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.96, y: 18 }}
        transition={{ duration: 0.25, ease: "easeOut" }}
        onClick={(event) => event.stopPropagation()}
      >
        <div className={`absolute inset-x-0 top-0 h-px bg-gradient-to-r ${accent.line}`} />

        <div className="mb-4 flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/10 text-gray-100 shadow-lg shadow-black/25 transition hover:bg-white/15 hover:text-white focus:outline-none focus:ring-2 focus:ring-purple-300/70 lg:h-9 lg:w-9"
            aria-label="Close project"
          >
            <FiX className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>

        <div className="grid min-h-0 min-w-0 grid-cols-1 gap-7 xl:grid-cols-[minmax(0,1.25fr)_minmax(22rem,0.85fr)] xl:items-start 2xl:grid-cols-[minmax(0,1.45fr)_minmax(24rem,0.85fr)]">
          <div className="min-h-0 min-w-0 xl:sticky xl:top-0">
            <ProjectGallery project={project} accent={accent} />
          </div>

          <div className="min-h-0 min-w-0 overflow-x-hidden pb-1 pr-1 pt-2 sm:pr-2 sm:pt-3 xl:max-h-[calc(92vh-8rem)] xl:overflow-y-auto xl:pr-5 xl:pt-4">
            <h3 id="project-modal-title" className="break-words text-2xl font-semibold leading-[1.15] text-white sm:text-3xl md:text-4xl">
              {project.title}
            </h3>
            {project.contextLabel && (
              <p className={`mt-3 text-xs font-semibold uppercase tracking-[0.16em] ${accent.text}`}>
                {project.contextLabel}
              </p>
            )}

            <div className="mt-6">
              <h4 className={`text-sm font-semibold uppercase tracking-[0.16em] ${accent.text}`}>
                Overview
              </h4>
              <p className="mt-3 text-sm leading-7 text-gray-300 sm:text-base">
                {project.overview}
              </p>
            </div>

            {project.whatBuilt && (
              <div className="mt-6">
                <h4 className={`text-sm font-semibold uppercase tracking-[0.16em] ${accent.text}`}>
                  {project.contributionHeading || "What I Built"}
                </h4>
                <p className="mt-3 text-sm leading-7 text-gray-300 sm:text-base">
                  {project.whatBuilt}
                </p>
              </div>
            )}

            {project.contributionItems?.length > 0 && (
              <div className="mt-6">
                <h4 className={`text-sm font-semibold uppercase tracking-[0.16em] ${accent.text}`}>
                  {project.contributionHeading || "My Contribution"}
                </h4>
                <ul className="mt-4 space-y-3">
                  {project.contributionItems.map((detail) => (
                    <li key={detail} className="flex gap-3 text-sm leading-6 text-gray-300">
                      <FiCheckCircle className={`mt-1 h-4 w-4 flex-none ${accent.text}`} aria-hidden="true" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {project.keyFunctionality?.length > 0 && (
              <div className="mt-6">
                <h4 className={`text-sm font-semibold uppercase tracking-[0.16em] ${accent.text}`}>
                  {project.outcomesHeading || "Key Functionality"}
                </h4>
                <ul className="mt-4 space-y-3">
                  {project.keyFunctionality.map((detail) => (
                    <li key={detail} className="flex gap-3 text-sm leading-6 text-gray-300">
                      <FiCheckCircle className={`mt-1 h-4 w-4 flex-none ${accent.text}`} aria-hidden="true" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="mt-7">
              <h4 className={`text-sm font-semibold uppercase tracking-[0.16em] ${accent.text}`}>
                Technology
              </h4>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-lg border border-blue-400/20 bg-blue-500/10 px-3 py-1.5 text-xs font-medium text-gray-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {project.links?.length > 0 && (
              <div className="mt-7">
                <h4 className={`text-sm font-semibold uppercase tracking-[0.16em] ${accent.text}`}>
                  Links
                </h4>
                <ProjectLinks links={project.links} accent={accent} className="mt-4" />
              </div>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

function ProjectGallery({ project, accent }) {
  const images = project.images || [];
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const hasGallery = images.length > 1;
  const isLogo = project.imageTreatment === "logo" && images[selectedImageIndex] === "/Artboard 8.png";
  const selectedImageAlt = project.imageAlts?.[selectedImageIndex] || project.imageAlt || `${project.title} image ${selectedImageIndex + 1}`;

  const showPreviousImage = useCallback(() => {
    setSelectedImageIndex((currentIndex) => (currentIndex === 0 ? images.length - 1 : currentIndex - 1));
  }, [images.length]);

  const showNextImage = useCallback(() => {
    setSelectedImageIndex((currentIndex) => (currentIndex === images.length - 1 ? 0 : currentIndex + 1));
  }, [images.length]);

  useEffect(() => {
    if (!hasGallery) {
      return undefined;
    }

    const handleKeyDown = (event) => {
      if (event.key === "ArrowLeft") {
        event.preventDefault();
        showPreviousImage();
      }

      if (event.key === "ArrowRight") {
        event.preventDefault();
        showNextImage();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [hasGallery, images.length, showNextImage, showPreviousImage]);

  if (!images.length) {
    return (
      <div className="min-w-0 overflow-x-hidden">
        <ProjectVisual project={project} accent={accent} />
      </div>
    );
  }

  return (
    <div className="min-w-0 overflow-x-hidden">
      <div className={`relative min-w-0 overflow-hidden rounded-xl border border-white/10 bg-black ${isLogo ? "aspect-[16/10] lg:aspect-[16/11]" : "aspect-[16/10] lg:aspect-[16/9]"}`}>
        <AnimatePresence mode="wait">
          <motion.div
            key={images[selectedImageIndex]}
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.22 }}
          >
            <Image
              src={images[selectedImageIndex]}
              alt={selectedImageAlt}
              fill
              sizes="(min-width: 1280px) 58vw, (min-width: 1024px) 54vw, 100vw"
              className={`${isLogo ? "object-contain p-16 sm:p-20 lg:p-28 xl:p-32" : "object-contain"}`}
              priority={selectedImageIndex === 0}
            />
          </motion.div>
        </AnimatePresence>

        {hasGallery && (
          <>
            <button
              type="button"
              onClick={showPreviousImage}
              className="absolute left-3 top-1/2 inline-flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-gray-950/70 text-gray-200 shadow-lg shadow-black/25 backdrop-blur transition hover:bg-gray-900 hover:text-white focus:outline-none focus:ring-2 focus:ring-purple-300/50 lg:h-9 lg:w-9"
              aria-label={`Show previous ${project.title} image`}
            >
              <FiChevronLeft className="h-5 w-5" aria-hidden="true" />
            </button>
            <button
              type="button"
              onClick={showNextImage}
              className="absolute right-3 top-1/2 inline-flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-gray-950/70 text-gray-200 shadow-lg shadow-black/25 backdrop-blur transition hover:bg-gray-900 hover:text-white focus:outline-none focus:ring-2 focus:ring-purple-300/50 lg:h-9 lg:w-9"
              aria-label={`Show next ${project.title} image`}
            >
              <FiChevronRight className="h-5 w-5" aria-hidden="true" />
            </button>

            <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-1.5">
              {images.map((image, index) => (
                <button
                  key={image}
                  type="button"
                  onClick={() => setSelectedImageIndex(index)}
                  className={`h-1.5 rounded-full transition-all focus:outline-none focus:ring-2 focus:ring-purple-300/50 ${
                    selectedImageIndex === index ? `w-6 bg-gradient-to-r ${accent.line}` : "w-1.5 bg-white/40"
                  }`}
                  aria-label={`Show ${project.title} image ${index + 1}`}
                  aria-current={selectedImageIndex === index ? "true" : undefined}
                />
              ))}
            </div>
          </>
        )}
      </div>

      {hasGallery && (
        <>
          <div className="mt-3 flex flex-wrap items-center justify-between gap-2 text-xs text-gray-400">
            <span className="inline-flex min-w-0 items-center gap-2">
              <FiImage className={`h-4 w-4 ${accent.text}`} aria-hidden="true" />
              {selectedImageIndex + 1} / {images.length}
            </span>
            <span className="min-w-0 text-right">Use arrows, dots or thumbnails to browse photos</span>
          </div>

          <div className="mt-3 flex max-w-full gap-2 overflow-x-auto pb-1">
            {images.map((image, index) => (
              <button
                key={`thumb-${image}`}
                type="button"
                onClick={() => setSelectedImageIndex(index)}
                className={`h-12 w-[4.5rem] flex-none overflow-hidden rounded-lg border transition focus:outline-none focus:ring-2 focus:ring-purple-300/50 sm:h-14 sm:w-20 ${
                  selectedImageIndex === index ? "border-purple-300/70" : "border-white/10 opacity-70 hover:opacity-100"
                }`}
                aria-label={`Open ${project.title} image ${index + 1}`}
                aria-current={selectedImageIndex === index ? "true" : undefined}
              >
                <Image
                  src={image}
                  alt={`${project.imageAlts?.[index] || project.imageAlt || `${project.title} image ${index + 1}`} thumbnail`}
                  width={160}
                  height={112}
                  sizes="80px"
                  className="h-full w-full object-cover"
                />
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

function ProjectLinks({ links, accent, className = "" }) {
  if (!links?.length) {
    return null;
  }

  return (
    <div className={`flex flex-wrap gap-3 ${className}`}>
      {links.map((link) => {
        const Icon = link.icon || FiExternalLink;
        const hasTextArrow = link.label.includes("↗");

        return (
          <a
            key={link.href}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center gap-2 text-sm font-medium ${accent.text} transition hover:text-white focus:outline-none focus:ring-2 focus:ring-purple-300/50`}
          >
            <Icon className="h-4 w-4" aria-hidden="true" />
            <span>{link.label}</span>
            {!hasTextArrow && <FiArrowUpRight className="h-4 w-4" aria-hidden="true" />}
          </a>
        );
      })}
    </div>
  );
}

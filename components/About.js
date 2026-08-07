import { motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import {
  FiBookOpen,
  FiCalendar,
  FiCode,
  FiCpu,
  FiDatabase,
  FiMapPin,
  FiMonitor,
  FiServer,
  FiTool,
} from "react-icons/fi";
import {
  SiCss3,
  SiDocker,
  SiExpress,
  SiFastapi,
  SiGit,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiJira,
  SiLaravel,
  SiMongodb,
  SiMysql,
  SiNextdotjs,
  SiNodedotjs,
  SiOpenai,
  SiPhp,
  SiPostgresql,
  SiPostman,
  SiPython,
  SiReact,
  SiSqlite,
  SiSupabase,
  SiSvelte,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
} from "react-icons/si";

export default function About() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState("skills");
  const sectionRef = useRef(null);

  const toolkitGroups = [
    {
      title: "Backend",
      description: "Building reliable and maintainable server-side systems.",
      icon: FiServer,
      color: "text-purple-300",
      iconBg: "bg-purple-500/15",
      border: "border-l-purple-400/50",
      layout: "lg:col-span-4",
      technologies: [
        { name: "FastAPI", icon: SiFastapi },
        { name: "Node.js", icon: SiNodedotjs },
        { name: "Express.js", icon: SiExpress },
        { name: "Laravel", icon: SiLaravel },
        { name: "REST APIs" },
        { name: "WebSockets" },
      ],
    },
    {
      title: "AI & Integration",
      description: "Building intelligent features and AI-enabled workflows.",
      icon: FiCpu,
      color: "text-purple-300",
      iconBg: "bg-purple-500/15",
      border: "border-l-purple-400/50",
      layout: "lg:col-span-4",
      technologies: [
        { name: "Speech Recognition" },
        { name: "Whisper", icon: SiOpenai },
        { name: "faster-whisper" },
        { name: "LLM Integration" },
        { name: "OpenAI API", icon: SiOpenai },
      ],
    },
    {
      title: "Frontend",
      description: "Creating responsive and accessible user experiences.",
      icon: FiMonitor,
      color: "text-blue-300",
      iconBg: "bg-blue-500/15",
      border: "border-l-blue-400/50",
      layout: "lg:col-span-4",
      technologies: [
        { name: "React", icon: SiReact },
        { name: "Next.js", icon: SiNextdotjs },
        { name: "SvelteKit", icon: SiSvelte },
        { name: "Tailwind CSS", icon: SiTailwindcss },
        { name: "HTML", icon: SiHtml5 },
        { name: "CSS", icon: SiCss3 },
      ],
    },
    {
      title: "Languages",
      description: "",
      icon: FiCode,
      color: "text-cyan-300",
      iconBg: "bg-cyan-500/15",
      border: "border-l-cyan-400/50",
      layout: "lg:col-span-3",
      technologies: [
        { name: "Python", icon: SiPython },
        { name: "TypeScript", icon: SiTypescript },
        { name: "JavaScript", icon: SiJavascript },
        { name: "PHP", icon: SiPhp },
        { name: "SQL", icon: FiDatabase },
      ],
    },
    {
      title: "Databases",
      description: "",
      icon: FiDatabase,
      color: "text-cyan-300",
      iconBg: "bg-cyan-500/15",
      border: "border-l-cyan-400/50",
      layout: "lg:col-span-3",
      technologies: [
        { name: "PostgreSQL", icon: SiPostgresql },
        { name: "Supabase", icon: SiSupabase },
        { name: "MongoDB", icon: SiMongodb },
        { name: "MySQL", icon: SiMysql },
        { name: "SQLite", icon: SiSqlite },
      ],
    },
    {
      title: "Tools & Workflow",
      description: "Tools and practices I use to develop and deliver quality software.",
      icon: FiTool,
      color: "text-cyan-300",
      iconBg: "bg-cyan-500/15",
      border: "border-l-cyan-400/50",
      layout: "lg:col-span-6",
      technologies: [
        { name: "Docker", icon: SiDocker },
        { name: "Docker Compose", icon: SiDocker },
        { name: "Git", icon: SiGit },
        { name: "GitHub", icon: SiGithub },
        { name: "Vercel", icon: SiVercel },
        { name: "Postman", icon: SiPostman },
        { name: "Jira", icon: SiJira },
        { name: "Agile/Scrum" },
        { name: "Unit Testing" },
        { name: "Integration Testing" },
      ],
    },
  ];

  const profileMetadata = [
    { icon: FiBookOpen, text: "HZ University of Applied Sciences" },
    { icon: FiMapPin, text: "Vlissingen, Netherlands" },
    { icon: FiCalendar, text: "Graduation internship availability from February 2027" },
  ];

  const experienceEntries = [
    {
      organisation: "JRCZ Data Science Lab",
      role: "Software Engineering Intern",
      date: "September 2025 – January 2026",
      accent: {
        marker: "bg-purple-500",
        text: "text-purple-400",
        bullet: "marker:text-purple-400/70",
      },
      featured: true,
      summary:
        "Engineered and benchmarked a Dockerised Python speech-to-text prototype for an AI-powered virtual-patient training platform used by nursing students in the Netherlands.",
      bullets: [
        "Reduced backend transcription latency by approximately 65%, from 4.0 seconds to 1.2–1.5 seconds",
        "Evaluated five speech-recognition solutions for near-real-time Dutch transcription",
        "Validated the selected prototype through ten automated tests and user sessions with three nursing students",
        "Expanded an AI feedback generator to evaluate five communication indicators",
      ],
    },
    {
      organisation: "SolaiMenu",
      role: "Full-Stack Product Developer",
      date: "October 2025 – April 2026",
      accent: {
        marker: "bg-blue-500",
        text: "text-blue-400",
        bullet: "marker:text-blue-400/70",
      },
      featured: true,
      summary:
        "Developed a multilingual AI-powered QR-menu SaaS product that enables restaurants to create, manage and publish menus in ten languages from one dashboard.",
      bullets: [
        "Built menu-management functionality, multilingual publishing, search and filtering, restaurant specials, events and analytics",
        "Integrated AI-assisted translations, allergen information and food-and-drink recommendations",
        "Designed the product around a clear restaurant-management workflow and customer-facing menu experience",
      ],
    },
    {
      organisation: "IT Conference Website",
      role: "Frontend Developer",
      date: "April 2025 – July 2025",
      accent: {
        marker: "bg-pink-500",
        text: "text-pink-400",
        bullet: "marker:text-pink-400/70",
      },
      summary:
        "Implemented and integrated the public-facing frontend for the official HZ ICT Conference website, translating Figma designs into responsive pages.",
      bullets: [
        "Developed the landing page, speakers page, FAQ, contact page and responsive navigation",
        "Integrated work from multiple frontend branches into a consistent public-facing experience",
        "Tested layouts and interactions across desktop and mobile views",
      ],
    },
    {
      organisation: "Smart Storage",
      role: "Full-Stack Developer",
      date: "February 2025 – April 2025",
      accent: {
        marker: "bg-yellow-500",
        text: "text-yellow-400",
        bullet: "marker:text-yellow-400/70",
      },
      summary:
        "Developed a smart pantry and food-management application that helps users organise ingredients, monitor expiry dates and understand the financial and environmental impact of food usage.",
      bullets: [
        "Built authenticated user accounts, ingredient-management functionality and personalised dashboards",
        "Integrated Google authentication and Calendar functionality for account access and expiry-date reminders",
        "Developed analytics and CO₂-savings calculations based on tracked food usage",
        "Implemented subscription and payment functionality for premium access",
        "Created responsive interfaces across desktop and mobile devices",
      ],
    },
    {
      organisation: "IdeaPolish.ai",
      role: "AI Application Developer",
      date: "February 2025",
      accent: {
        marker: "bg-cyan-500",
        text: "text-cyan-400",
        bullet: "marker:text-cyan-400/70",
      },
      summary:
        "Designed and built an AI-enabled web application that helps users transform rough early-stage ideas into clearer and more structured concepts.",
      bullets: [
        "Integrated AI-assisted feedback and refinement suggestions",
        "Implemented the application backend and data persistence",
        "Designed a focused workflow for turning unstructured ideas into organised outputs",
      ],
    },
    {
      organisation: "JUNKER",
      role: "Full-Stack Developer",
      date: "November 2024 – January 2025",
      accent: {
        marker: "bg-blue-500",
        text: "text-blue-400",
        bullet: "marker:text-blue-400/70",
      },
      summary:
        "Developed an eco-conscious item-exchange platform as part of a six-person multidisciplinary team, enabling users to give unwanted items a second life and connect through interest-based communities.",
      bullets: [
        "Developed frontend and backend functionality for the platform",
        "Collaborated on product functionality and the overall user experience",
        "The completed platform reached the university’s Dragons’ Den final and placed third",
      ],
    },
    {
      organisation: "Security Client Website",
      role: "Web Developer",
      date: "August 2024 – February 2025",
      accent: {
        marker: "bg-purple-500",
        text: "text-purple-400",
        bullet: "marker:text-purple-400/70",
      },
      summary:
        "Designed and developed a responsive website for a private security-services client, translating business requirements into a clear and professional digital presence.",
      bullets: [
        "Structured the website around the company’s services and essential client information",
        "Developed responsive layouts for desktop, tablet and mobile devices",
        "Created a custom Data Protection section based on the client’s requirements",
        "Added polished transitions and refined the interface to improve navigation and presentation",
        "Worked directly from client requirements and iterated on the website throughout development",
      ],
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const tabData = {
    skills: {
      title: "Skills",
      content: (
        <div className="space-y-8">
          <motion.div
            className="max-w-3xl"
            initial={{ opacity: 0, y: 16 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <p className="flex items-center gap-2 font-mono text-xs font-medium uppercase tracking-[0.22em] text-purple-300">
              <span className="h-2 w-2 rounded-full bg-purple-400"></span>
              Skills
            </p>
            <h3 className="mt-4 text-4xl font-bold leading-tight text-white sm:text-5xl">
              What I{" "}
              <span className="text-purple-300">
                Build With
              </span>
            </h3>
            <p className="mt-5 max-w-2xl text-base leading-8 text-gray-300">
              Technologies I use to build backend systems, full-stack applications and AI-enabled products.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-12">
            {toolkitGroups.map((group, groupIndex) => (
              <SkillToolkitCard
                key={group.title}
                group={group}
                index={groupIndex}
                isVisible={isVisible}
              />
            ))}
          </div>
        </div>
      ),
    },
    experience: {
      title: "Experience",
      content: (
        <div className="mx-auto max-w-[1220px]">
          <div className="relative">
            <div className="absolute bottom-3 left-3 top-3 w-px bg-gradient-to-b from-purple-500/35 via-blue-500/25 to-purple-500/20" aria-hidden="true"></div>
            <div className="space-y-0">
              {experienceEntries.map((entry, index) => (
                <ExperienceTimelineEntry
                  key={`${entry.organisation}-${entry.date}`}
                  entry={entry}
                  index={index}
                  isVisible={isVisible}
                  isLast={index === experienceEntries.length - 1}
                />
              ))}
            </div>
          </div>
        </div>
      ),
    },


    education: {
      title: "Education",
      content: (
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          <motion.div
            className="h-full bg-gray-800/60 p-4 rounded-lg border border-gray-700 hover:border-blue-500 transition-colors duration-300"
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-xl font-medium text-white">Bachelor’s in Information & Communication Technology</h3>
            <p className="text-blue-400 font-medium mt-1">HZ University of Applied Sciences</p>
            <p className="text-sm text-gray-400 mt-1">2023 – Expected 2027</p>
            <p className="text-gray-300 mt-2">Specialising in Software Engineering through project-based learning, client assignments and multidisciplinary teamwork.</p>
          </motion.div>

          <motion.div
            className="h-full bg-gray-800/60 p-4 rounded-lg border border-gray-700 hover:border-purple-500 transition-colors duration-300"
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="text-xl font-medium text-white">Business and Data Science Minor — International Exchange</h3>
            <p className="text-purple-400 font-medium mt-1">Chung-Ang University, Seoul, South Korea</p>
            <p className="text-sm text-gray-400 mt-1">Spring 2026</p>
            <p className="text-gray-300 mt-2">Completed courses in Data Science for E-Business, Management Information Systems, Marketing, Organisational Behaviour and Korean Language while collaborating in international teams.</p>
          </motion.div>
        </div>
      ),
    },
  };

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative overflow-hidden bg-[#0f172a] pb-24 pt-28 text-white sm:pt-32 lg:pt-36"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[url('/grid.png')] bg-center opacity-5"></div>
      <div className="absolute -right-24 top-16 h-[420px] w-[420px] rounded-full bg-blue-600/10 blur-[140px]"></div>
      <div className="absolute -bottom-24 -left-24 h-[420px] w-[420px] rounded-full bg-purple-600/10 blur-[140px]"></div>

      <div className="relative z-10 mx-auto w-full max-w-[1380px] px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-start gap-x-10 gap-y-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-x-14 xl:grid-cols-[0.8fr_1.2fr]">
          {/* Portrait Column */}
          <motion.aside
            className="relative mx-auto w-full max-w-sm lg:mx-0"
            initial={{ opacity: 0, y: 24 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="relative px-3 pb-8 pt-3">
              <div className="absolute inset-0 -rotate-3 rounded-[2rem] border border-cyan-300/15 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-cyan-400/5"></div>
              <div className="absolute left-8 top-9 h-full w-full rounded-[2rem] border border-purple-300/15"></div>
              <div className="absolute -right-6 top-20 h-48 w-48 rounded-full bg-cyan-400/10 blur-3xl"></div>

              <div className="relative overflow-hidden rounded-[2rem] bg-gray-950/45 p-2 shadow-2xl shadow-black/30 ring-1 ring-white/10">
                <img
                  src="/gabriellakhayutin.jpeg"
                  alt="Gabriella Khayutin"
                  className="aspect-[4/5] w-full rounded-[1.55rem] object-cover"
                />
                <div className="absolute inset-2 rounded-[1.55rem] bg-gradient-to-t from-gray-950/45 via-transparent to-transparent"></div>
              </div>

              <div className="relative -mt-6 mx-5 rounded-xl bg-gray-950/90 px-4 py-3 text-center shadow-xl shadow-black/30 ring-1 ring-cyan-300/20 backdrop-blur">
                <p className="font-mono text-xs font-medium uppercase tracking-[0.16em] text-cyan-300">
                  Backend · AI · Product Thinking
                </p>
              </div>
            </div>
          </motion.aside>

          {/* Editorial Content Column */}
          <motion.div
            className="min-w-0"
            initial={{ opacity: 0, y: 24 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <div className="mb-8">
              <div className="mb-4 flex items-center justify-center gap-3 font-mono text-xs uppercase tracking-[0.22em] text-cyan-300 lg:justify-start">
                <span>01</span>
                <span className="h-px w-12 bg-gradient-to-r from-cyan-300 to-purple-400"></span>
                <span>Profile</span>
              </div>
              <h2 className="mb-4 text-center text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 sm:text-5xl lg:text-left">
                About Me
              </h2>
              <div className="mx-auto mb-6 h-1 w-24 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 lg:mx-0"></div>
              <div className="mx-auto max-w-2xl space-y-4 text-center text-base leading-8 text-gray-300 sm:text-lg lg:mx-0 lg:text-left">
                <p>
                  I am a final-year Software Engineering student at HZ University of Applied Sciences, focused on backend development, AI integration and user-focused digital products.
                </p>
                <p>
                  I have experience building full-stack SaaS applications, speech-recognition services and AI-enabled features in multidisciplinary and international teams.
                </p>
                <p>
                  I enjoy working where software, business and people connect, turning practical problems into clear and useful digital solutions.
                </p>
              </div>
              <div className="mt-5 flex w-full flex-wrap items-center justify-center gap-x-4 gap-y-2.5 text-sm font-medium text-gray-400 lg:justify-start">
                {profileMetadata.map((item, index) => (
                  <div key={item.text} className="inline-flex flex-shrink-0 items-center">
                    <span className="inline-flex items-center gap-2">
                      <item.icon className="h-4 w-4 text-cyan-300/80" aria-hidden="true" />
                      <span>{item.text}</span>
                    </span>
                    {index < profileMetadata.length - 1 && <span className="ml-4 hidden h-1 w-1 rounded-full bg-gray-600 sm:inline-block"></span>}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Full-Width Tabbed Content */}
          <motion.div
            className="w-full min-w-0 lg:col-span-2"
            initial={{ opacity: 0, y: 24 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0 }}
            transition={{ duration: 0.7, delay: 0.18 }}
          >
            <div
              className="mb-8 flex w-full flex-wrap gap-1.5 rounded-2xl bg-gray-950/45 p-1 ring-1 ring-white/10 sm:w-fit"
              role="tablist"
              aria-label="About section tabs"
            >
              {Object.keys(tabData).map((tab) => (
                <button
                  key={tab}
                  id={`about-tab-${tab}`}
                  type="button"
                  role="tab"
                  aria-selected={activeTab === tab}
                  aria-controls={`about-panel-${tab}`}
                  className={`relative rounded-xl px-4 py-2 text-sm font-semibold transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/70 sm:px-5 sm:text-base ${
                    activeTab === tab
                      ? "text-white"
                      : "text-gray-400 hover:text-gray-200"
                  }`}
                  onClick={() => setActiveTab(tab)}
                >
                  {activeTab === tab && (
                    <motion.span
                      className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-600/25 to-purple-600/25 shadow-inner shadow-white/5"
                      layoutId="aboutActiveTabBackground"
                      transition={{ type: "spring", stiffness: 320, damping: 32 }}
                    />
                  )}
                  <span className="relative z-10">
                    {tabData[tab].title}
                  </span>
                  {activeTab === tab && (
                    <motion.div
                      className="absolute bottom-1 left-4 right-4 h-0.5 rounded-full bg-gradient-to-r from-blue-500 to-purple-500"
                      layoutId="activeTab"
                      transition={{ type: "spring", stiffness: 320, damping: 32 }}
                    />
                  )}
                </button>
              ))}
            </div>

            <motion.div
              key={activeTab}
              id={`about-panel-${activeTab}`}
              role="tabpanel"
              aria-labelledby={`about-tab-${activeTab}`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="min-h-[320px] w-full"
            >
              {tabData[activeTab].content}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function ExperienceTimelineEntry({ entry, index, isVisible, isLast }) {
  const titleSize = entry.featured
    ? "text-xl sm:text-2xl"
    : "text-lg sm:text-xl";
  const verticalPadding = entry.featured
    ? "py-7 sm:py-8"
    : "py-6";

  return (
    <motion.article
      className={`relative ml-3 grid gap-4 border-white/[0.08] pl-8 ${verticalPadding} md:grid-cols-[minmax(11rem,0.34fr)_minmax(0,0.66fr)] md:gap-8 md:pl-10 lg:grid-cols-[minmax(0,0.3fr)_minmax(0,0.7fr)] ${
        isLast ? "" : "border-b"
      }`}
      initial={{ opacity: 0, y: 18 }}
      animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0 }}
      transition={{ duration: 0.55, delay: 0.12 + index * 0.07 }}
    >
      <div
        className={`absolute left-[-0.44rem] top-8 h-3.5 w-3.5 rounded-full border-2 border-[#0f172a] ${entry.accent.marker}`}
        aria-hidden="true"
      ></div>

      <div className="min-w-0">
        <h3 className={`${titleSize} font-semibold leading-tight text-white`}>
          {entry.organisation}
        </h3>
        <p className="mt-1 text-sm font-medium leading-6 text-gray-300">
          {entry.role}
        </p>
        <p className={`mt-2 text-xs font-semibold uppercase tracking-[0.14em] ${entry.accent.text}`}>
          {entry.date}
        </p>
      </div>

      <div className="min-w-0 md:max-w-[780px]">
        <p className="text-sm leading-7 text-gray-300 sm:text-base">
          {entry.summary}
        </p>
        <ul className={`mt-3 list-disc space-y-1.5 pl-5 text-sm leading-6 text-gray-300 ${entry.accent.bullet}`}>
          {entry.bullets.map((bullet) => (
            <li key={bullet}>
              {bullet}
            </li>
          ))}
        </ul>
      </div>
    </motion.article>
  );
}

function SkillToolkitCard({ group, index, isVisible }) {
  return (
    <motion.section
      className={`group relative flex h-full min-w-0 flex-col rounded-xl border border-white/[0.08] border-l-2 bg-gray-950/25 p-4 transition duration-300 hover:border-white/15 hover:bg-gray-900/35 ${group.border} ${group.layout}`}
      initial={{ opacity: 0, y: 18 }}
      animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0 }}
      transition={{ duration: 0.45, delay: 0.06 * index }}
    >
      <div className="relative">
        <div className="flex items-start gap-3">
          <span className={`flex h-10 w-10 flex-none items-center justify-center rounded-lg border border-white/10 ${group.iconBg} ${group.color}`}>
            <group.icon className="h-5 w-5" aria-hidden="true" />
          </span>
          <div className="min-w-0">
            <h4 className="text-lg font-semibold text-white sm:text-xl">
              {group.title}
            </h4>
            {group.description && (
              <p className="mt-1 text-sm leading-6 text-gray-400">
                {group.description}
              </p>
            )}
          </div>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {group.technologies.map((technology, technologyIndex) => (
            <motion.span
              key={technology.name}
              className="inline-flex max-w-full items-center gap-1.5 rounded-md border border-white/[0.08] bg-white/[0.025] px-2.5 py-1 text-[0.9rem] font-medium leading-5 text-gray-100 transition duration-300 hover:border-white/15 hover:bg-white/[0.045]"
              initial={{ opacity: 0, y: 8 }}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0 }}
              transition={{ duration: 0.3, delay: 0.04 * technologyIndex + 0.06 * index }}
            >
              {technology.icon && (
                <technology.icon className="h-3.5 w-3.5 flex-none text-gray-300" aria-hidden="true" />
              )}
              <span className="truncate">{technology.name}</span>
            </motion.span>
          ))}
        </div>
      </div>
    </motion.section>
  );
}

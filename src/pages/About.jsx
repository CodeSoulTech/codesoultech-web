

import { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll } from "framer-motion";
import Container from "../components/Container";
import Button from "../components/Button";
import Footer from "../sections/Footer";

const procedures = [
  {
    id: "01",
    title: "Discovery",
    subtitle: "Input Analysis",
    desc:
      "We begin by decoding your raw requirements. We analyze your market position, competitive landscape, and user personas to establish a foundational truth.",
    tech: ["Market Analysis", "User Research", "Feasibility Study"],
  },
  {
    id: "02",
    title: "Strategy",
    subtitle: "System Architecture",
    desc:
      "We engineer a roadmap. This isn’t just features; it’s a strategic alignment of business goals with technical capabilities.",
    tech: ["Tech Stack Selection", "Scalability Planning", "Roadmap Design"],
  },
  {
    id: "03",
    title: "Design",
    subtitle: "Visual Synthesis",
    desc:
      "Form follows function. We craft high-fidelity prototypes that visualize the soul of your product before a single line of code is written.",
    tech: ["UI/UX Design", "Design Systems", "Interactive Prototyping"],
  },
  {
    id: "04",
    title: "Development",
    subtitle: "Core Construction",
    desc:
      "Clean, semantic, and optimized code built with scalability and maintainability in mind.",
    tech: ["Frontend", "Backend", "API Integration"],
  },
  {
    id: "05",
    title: "Optimization",
    subtitle: "Performance Tuning",
    desc:
      "We rigorously test, refine, and optimize for speed, accessibility, and SEO dominance.",
    tech: ["Performance", "SEO", "Cross-browser Testing"],
  },
  {
    id: "06",
    title: "Launch",
    subtitle: "System Activation",
    desc:
      "Deployment is just the beginning. We ensure a smooth liftoff and tracking.",
    tech: ["CI/CD", "Cloud Deploy", "Analytics"],
  },
];

const About = () => {
  const protocolRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: protocolRef,
    offset: ["start start", "end end"],
  });

  return (
    <div className="pt-16 bg-dark-900 min-h-screen">
      {/* HERO */}
      <section className="relative min-h-[70vh] md:min-h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
        </div>

        <Container className="relative z-10">
          <div className="relative max-w-5xl">
            <h1 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[18vw] sm:text-[15vw] md:text-[15vw] font-black text-white/6 uppercase select-none pointer-events-none leading-none whitespace-nowrap z-0">
              CodeSoul
            </h1>

            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="relative text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold leading-tight mb-6"
            >
              DIGITAL <br />
              <span className="text-accent-500">ARCHITECTS</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-base sm:text-lg md:text-2xl text-gray-400 border-l-4 border-accent-500 pl-4 max-w-xl"
            >
              We don't just write code. We engineer digital souls.
            </motion.p>
          </div>
        </Container>
      </section>

      {/* WHO WE ARE */}
      <section className="py-24 md:py-32 bg-dark-800 border-t border-white/5 relative overflow-hidden">
        {/* Background Decoration */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-accent-500/5 to-transparent pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        <Container>
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative z-10"
            >
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight text-white">
                Form Follows <br />
                <span className="text-accent-500">Function.</span>
              </h2>

              <div className="space-y-6 text-lg md:text-xl text-gray-400 font-light leading-relaxed">
                <p>
                  We strip away the non-essential. In a world of digital noise, we choose clarity.
                </p>
                <p>
                  Every pixel serves a purpose. We don't just decorate screens; we build <span className="text-white font-medium">digital ecosystems</span> where beauty is a byproduct of perfect architecture.
                </p>
              </div>

              <div className="mt-10 flex items-center gap-4 text-sm font-mono text-accent-500/80">
                <span className="w-2 h-2 rounded-full bg-accent-500 animate-pulse" />
                <span>SYSTEM_OPTIMIZED</span>
              </div>
            </motion.div>

            {/* Right Visual - Glassmorphic System Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, rotate: 1 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              {/* Glow Effect */}
              <div className="absolute -inset-4 bg-accent-500/20 blur-2xl rounded-3xl opacity-50" />

              {/* Card Logic */}
              <div className="relative bg-dark-900/80 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden shadow-2xl group hover:border-accent-500/30 transition-colors duration-500">
                {/* Card Header */}
                <div className="flex items-center justify-between px-6 py-4 border-b border-white/5 bg-white/5">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/50" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                    <div className="w-3 h-3 rounded-full bg-green-500/50" />
                  </div>
                  <div className="text-xs font-mono text-gray-500">core_system.tsx</div>
                </div>

                {/* Card Body */}
                <div className="p-8 font-mono text-xs sm:text-sm leading-loose">
                  <div className="flex">
                    <span className="text-gray-600 w-8 select-none">01</span>
                    <span className="text-purple-400">const</span> <span className="text-yellow-200 ml-2">DigitalExperience</span> <span className="text-white mx-2">=</span> <span className="text-yellow-400">{"{"}</span>
                  </div>
                  <div className="flex">
                    <span className="text-gray-600 w-8 select-none">02</span>
                    <span className="ml-4 text-blue-400">architecture</span><span className="text-white">:</span> <span className="text-green-400">'Robust'</span><span className="text-white">,</span>
                  </div>
                  <div className="flex">
                    <span className="text-gray-600 w-8 select-none">03</span>
                    <span className="ml-4 text-blue-400">aesthetics</span><span className="text-white">:</span> <span className="text-green-400">'Minimalist'</span><span className="text-white">,</span>
                  </div>
                  <div className="flex">
                    <span className="text-gray-600 w-8 select-none">04</span>
                    <span className="ml-4 text-blue-400">performance</span><span className="text-white">:</span> <span className="text-orange-400">100</span><span className="text-white">,</span>
                  </div>
                  <div className="flex">
                    <span className="text-gray-600 w-8 select-none">05</span>
                    <span className="ml-4 text-blue-400">bloat</span><span className="text-white">:</span> <span className="text-red-400">null</span>
                  </div>
                  <div className="flex">
                    <span className="text-gray-600 w-8 select-none">06</span>
                    <span className="text-yellow-400">{"}"}</span><span className="text-white">;</span>
                  </div>

                  <div className="mt-6 pt-6 border-t border-white/5">
                    <div className="flex items-center justify-between text-gray-400">
                      <span>Compiling Assets...</span>
                      <span className="text-accent-500">Done (0.02s)</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* PROTOCOL */}
      <section ref={protocolRef} className="py-20 border-t border-white/5 relative">
        <Container>
          <div className="flex flex-col md:flex-row gap-12 lg:gap-24">
            {/* Sticky Left Column */}
            <div className="md:w-1/3 md:h-screen md:sticky md:top-0 flex flex-col justify-center py-10">
              <div>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight">
                  The <br />
                  <span className="text-accent-500">Protocol</span>
                </h2>
                <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden hidden md:block mt-8">
                  <motion.div
                    style={{ scaleX: scrollYProgress }}
                    className="h-full bg-accent-500 origin-left"
                  />
                </div>
                <p className="mt-4 text-xs font-mono text-accent-500 hidden md:block">
                  SYSTEM_STATUS: EXECUTING
                </p>
              </div>
            </div>

            {/* Scrolling Right Column */}
            <div className="md:w-2/3 space-y-24 py-10 md:py-24">
              {procedures.map((p) => (
                <ProcedureCard key={p.id} data={p} />
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-24 bg-black text-center">
        <Container>
          <h2 className="text-4xl md:text-6xl font-black mb-8">
            Let’s Build the Future
          </h2>
          <Link to="/contact">
            <Button variant="primary" className="px-10 py-4 text-lg">
              Start a Project
            </Button>
          </Link>
        </Container>
      </section>

      <Footer />
    </div>
  );
};

const ProcedureCard = ({ data }) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-80px" }}
    transition={{ duration: 0.6 }}
    className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-10"
  >
    <span className="text-accent-500 text-xs font-mono">
      {data.subtitle}
    </span>
    <h3 className="text-2xl md:text-3xl font-bold mt-2 mb-4">
      {data.title}
    </h3>
    <p className="text-gray-400 mb-6 max-w-xl">{data.desc}</p>
    <div className="flex flex-wrap gap-2">
      {data.tech.map((t) => (
        <span
          key={t}
          className="px-3 py-1 text-[10px] bg-white/5 border border-white/10 rounded-full text-gray-400 uppercase"
        >
          {t}
        </span>
      ))}
    </div>
  </motion.div>
);

export default About;

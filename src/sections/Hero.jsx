



import { motion, useMotionValue, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import { useEffect } from "react";

import Container from "../components/Container";
import Button from "../components/Button";
import heroBg from "../assets/background.webp";

const Hero = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Parallax range
  const x = useTransform(mouseX, [0, window.innerWidth], [-25, 25]);
  const y = useTransform(mouseY, [0, window.innerHeight], [-25, 25]);

  useEffect(() => {
    // Disable parallax on touch devices
    if ("ontouchstart" in window) return;

    const handleMouseMove = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">

      {/* Parallax Background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.img
          src={heroBg}
          alt="Hero background"
          style={{ x, y }}
          className="
            h-[110%] w-[110%]
            object-cover
            will-change-transform
          "
        />
        <div className="absolute inset-0 bg-black/90" />
      </div>

      {/* Content */}
      <Container className="relative z-10 flex items-center min-h-screen">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 text-center">

          {/* Ambient Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-accent-500/20 blur-[120px] rounded-full pointer-events-none mix-blend-screen" />

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="
              relative z-10
              font-bold tracking-tight leading-tight
              text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl
              mb-6
            "
          >
            We design and build{" "}
            <span className="text-gradient block sm:inline">
              digital experiences
            </span>{" "}
            that grow brands.
          </motion.h1>

          {/* Services */}
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="
              text-gray-300 font-light
              text-base sm:text-lg md:text-xl lg:text-2xl
              mb-4
            "
          >
            Web Design • Development • Graphic Design • SEO
          </motion.p>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35 }}
            className="
              text-gray-400 italic font-light
              text-sm sm:text-base md:text-lg
              mb-10 md:mb-14
            "
          >
            “Code Meets Consciousness”
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="
              flex flex-col sm:flex-row gap-4
              justify-center items-center
            "
          >
            <Link to="/contact" className="w-full sm:w-auto">
              <Button variant="primary" className="w-full sm:min-w-[180px]">
                Start a Project
              </Button>
            </Link>

            <Link to="/work" className="w-full sm:w-auto">
              <Button variant="secondary" className="w-full sm:min-w-[180px]">
                View Work
              </Button>
            </Link>
          </motion.div>
        </div>
      </Container>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-6 md:bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="
            h-8 w-5 md:h-10 md:w-6
            rounded-full border border-white/30
            flex justify-center pt-2
          "
        >
          <div className="h-2 w-1 rounded-full bg-white/50" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;

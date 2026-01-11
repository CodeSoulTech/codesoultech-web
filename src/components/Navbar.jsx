import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import Container from "./Container";
import Button from "./Button";

import logo from "../assets/4.svg";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // Scroll detection
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll on mobile menu
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "unset";
    return () => (document.body.style.overflow = "unset");
  }, [isOpen]);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Work", href: "/work" },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled || location.pathname !== "/"
        ? "bg-dark-900/80 backdrop-blur-xl border-b border-white/10 py-3"
        : "bg-transparent py-5"
        }`}
    >
      <Container>
        <div className="flex items-center justify-between">
          {/* LOGO */}
          {/* LOGO */}
          <Link to="/" className="relative z-50 flex items-center">
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="
      h-12
      sm:h-14
      md:h-16
      flex
      items-center
      md:pl-20
      pl-10
    "
            >
              <img
                src={logo}
                alt="CodeSoulTech"
                className="
        h-full
        w-auto
        scale-[3.7]
        object-contain
        select-none
        pointer-events-none
      "
              />
            </motion.div>
          </Link>



          {/* DESKTOP NAV */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={`relative text-sm font-medium transition-colors ${isActive(link.href)
                  ? "text-white"
                  : "text-gray-300 hover:text-white"
                  }`}
              >
                {link.name}
                {isActive(link.href) && (
                  <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-accent-500 rounded-full" />
                )}
              </Link>
            ))}

            <Link to="/contact">
              <Button variant="primary" className="!py-2 !px-5 !text-sm">
                Let’s Talk
              </Button>
            </Link>
          </nav>

          {/* MOBILE TOGGLE */}
          <button
            onClick={() => setIsOpen((prev) => !prev)}
            className="md:hidden w-10 h-10 flex flex-col justify-center items-center gap-1.5 relative z-50"
            aria-label="Toggle Menu"
          >
            <motion.span
              animate={{ rotate: isOpen ? 45 : 0, y: isOpen ? 7 : 0 }}
              className="w-6 h-0.5 bg-white block rounded"
            />
            <motion.span
              animate={{ opacity: isOpen ? 0 : 1 }}
              className="w-6 h-0.5 bg-white block rounded"
            />
            <motion.span
              animate={{ rotate: isOpen ? -45 : 0, y: isOpen ? -7 : 0 }}
              className="w-6 h-0.5 bg-white block rounded"
            />
          </button>
        </div>
      </Container>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="
              fixed inset-0
              bg-black
              md:hidden
              pt-24
              z-40
            "
          >
            <nav className="flex flex-col items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-xl font-medium text-gray-300 hover:text-white transition"
                >
                  {link.name}
                </Link>
              ))}

              <Link
                to="/contact"
                onClick={() => setIsOpen(false)}
                className="w-64"
              >
                <Button variant="primary" className="w-full justify-center">
                  Let’s Talk
                </Button>
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;

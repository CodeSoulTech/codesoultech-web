

import { motion, AnimatePresence } from "framer-motion";
import { useState, useRef } from "react";
import Container from "../components/Container";
import Button from "../components/Button";
import Footer from "../sections/Footer";
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    // Keys from .env file
    const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;



    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, form.current, {
        publicKey: PUBLIC_KEY,
      })
      .then(
        () => {
          setSubmitted(true);
          setLoading(false);
        },
        (error) => {
          console.error("FAILED...", error.text);
          setError("Failed to send message. Please try again later.");
          setLoading(false);
        }
      );
  };

  return (
    <div className="pt-16 sm:pt-20 bg-dark-900 min-h-screen">
      <section className="relative overflow-hidden py-16 sm:py-20 md:py-28">

        {/* Noise Background */}
        <div className="absolute inset-0 opacity-20 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] pointer-events-none" />

        <Container className="relative z-10">
          <div className="flex flex-col lg:flex-row gap-14 lg:gap-24">

            {/* LEFT INFO */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="lg:w-1/3"
            >
              <h1 className="font-bold leading-tight tracking-tight text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl mb-6">
                Let's start a{" "}
                <span className="block text-gradient">conversation.</span>
              </h1>

              <p className="text-gray-400 text-base sm:text-lg md:text-xl font-light mb-10">
                Interested in working together? Fill out the form or send us an
                email. We read every message.
              </p>

              <div className="space-y-8">
                <div>
                  <h3 className="text-xs tracking-widest font-mono text-accent-500 mb-2">
                    EMAIL
                  </h3>
                  <a
                    href="mailto:info@codesoultech.online"
                    className="block break-all text-lg sm:text-xl font-semibold hover:text-accent-500 transition"
                  >
                    info@codesoultech.online
                  </a>
                </div>

                <div>
                  <h3 className="text-xs tracking-widest font-mono text-accent-500 mb-2">
                    PHONE
                  </h3>
                  <a
                    href="tel:+919335030717"
                    className="text-lg sm:text-xl font-semibold hover:text-accent-500 transition"
                  >
                    +91 9335030717
                  </a>
                </div>
              </div>
            </motion.div>

            {/* RIGHT FORM / SUCCESS */}
            <div className="lg:w-2/3">
              <AnimatePresence mode="wait">
                {!submitted ? (
                  <motion.form
                    key="form"
                    ref={form}
                    initial={{ opacity: 0, x: 24 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.6 }}
                    onSubmit={handleSubmit}
                    className="bg-white/5 border border-white/10 rounded-2xl backdrop-blur-sm p-6 sm:p-8 md:p-12 relative"
                  >
                    {/* Loading Overlay */}
                    {loading && (
                      <div className="absolute inset-0 bg-dark-900/50 backdrop-blur-sm z-10 flex items-center justify-center rounded-2xl">
                        <div className="animate-spin-slow h-8 w-8 border-2 border-accent-500 border-t-transparent rounded-full" />
                      </div>
                    )}

                    <div className="grid gap-6 md:grid-cols-2 mb-6">
                      <div className="space-y-2">
                        <label className="text-sm text-gray-300">Name</label>
                        <input
                          type="text"
                          name="name"
                          required
                          className="w-full rounded-lg px-4 py-3 bg-dark-800 border border-white/10 text-white focus:outline-none focus:border-accent-500 transition-colors"
                        />
                      </div>

                      <div className="space-y-2">
                        <label className="text-sm text-gray-300">Email</label>
                        <input
                          type="email"
                          name="email"
                          required
                          className="w-full rounded-lg px-4 py-3 bg-dark-800 border border-white/10 text-white focus:outline-none focus:border-accent-500 transition-colors"
                        />
                      </div>
                    </div>

                    <div className="mb-6 space-y-2">
                      <label className="text-sm text-gray-300">Project Type</label>
                      <select
                        name="service"
                        className="w-full rounded-lg px-4 py-3 bg-dark-800 border border-white/10 text-white appearance-none focus:outline-none focus:border-accent-500 transition-colors"
                      >
                        <option value="Select a service...">Select a service...</option>
                        <option value="Web Design & Development">Web Design & Development</option>
                        <option value="Brand Identity">Brand Identity</option>
                        <option value="Social Media">Social Media</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>

                    <div className="mb-8 space-y-2">
                      <label className="text-sm text-gray-300">Message</label>
                      <textarea
                        name="message"
                        rows={5}
                        required
                        className="w-full rounded-lg px-4 py-3 bg-dark-800 border border-white/10 text-white resize-none focus:outline-none focus:border-accent-500 transition-colors"
                      />
                    </div>

                    {error && (
                      <div className="mb-4 text-red-400 text-sm">
                        {error}
                      </div>
                    )}

                    <Button variant="primary" className="w-full justify-center" disabled={loading}>
                      {loading ? "Sending..." : "Send Message"}
                    </Button>
                  </motion.form>
                ) : (
                  /* SUCCESS STATE */
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="bg-white/5 border border-white/10 rounded-2xl backdrop-blur-sm p-12 text-center flex flex-col items-center justify-center"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 200, damping: 12 }}
                      className="mb-6 h-16 w-16 rounded-full bg-accent-500/20 flex items-center justify-center"
                    >
                      <svg
                        className="h-8 w-8 text-accent-500"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="3"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </motion.div>

                    <h3 className="text-2xl font-bold mb-2">
                      Message Sent!
                    </h3>
                    <p className="text-gray-400 max-w-md">
                      Thanks for reaching out. We’ll get back to you shortly.
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </Container>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;

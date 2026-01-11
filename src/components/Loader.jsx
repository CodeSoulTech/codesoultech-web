// Loader.jsx - Creative System Initialization (3s Duration)
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../assets/4.svg";

export default function Loader({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  // Total duration in ms
  const DURATION = 3000;

  useEffect(() => {
    const startTime = Date.now();
    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const newProgress = Math.min((elapsed / DURATION) * 100, 100);

      setProgress(newProgress);

      if (newProgress >= 100) {
        clearInterval(interval);
        setTimeout(() => {
          setIsVisible(false);
          onComplete?.();
        }, 500); // Slight pause at 100% before unmounting
      }
    }, 30);

    return () => clearInterval(interval);
  }, [onComplete]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-dark-900 overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] bg-accent-500/5 rounded-full blur-[100px] animate-pulse" />
      </div>

      <div className="relative flex flex-col items-center justify-center z-10 w-full max-w-sm">

        {/* Logo Container with Progress Ring */}
        <div className="relative w-32 h-32 flex items-center justify-center mb-8">
          {/* Rotating Outer Ring */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 border-2 border-transparent border-t-accent-500/50 border-r-accent-500/20 rounded-full"
          />

          {/* Static Inner Ring Background */}
          <div className="absolute inset-0 border-4 border-white/5 rounded-full scale-90" />

          {/* Progress SVG Ring */}
          <svg className="absolute inset-0 w-full h-full -rotate-90 scale-90">
            <circle
              cx="64"
              cy="64"
              r="60"
              stroke="currentColor"
              strokeWidth="4"
              fill="transparent"
              className="text-transparent"
            />
            <motion.circle
              cx="64"
              cy="64"
              r="60"
              stroke="currentColor"
              strokeWidth="4"
              fill="transparent"
              className="text-accent-500 drop-shadow-[0_0_10px_rgba(56,189,248,0.5)]"
              strokeDasharray="377"
              strokeDashoffset={377 - (377 * progress) / 100}
              transition={{ ease: "linear" }}
            />
          </svg>

          {/* Logo */}
          <div className="relative z-20 w-16 h-16">
            <img src={logo} alt="CodeSoul" className="w-full h-full object-contain drop-shadow-[0_0_15px_rgba(56,189,248,0.3)]" />
          </div>
        </div>

        {/* Text Content */}
        <div className="text-center space-y-4 pt-8">
          <div className="flex flex-col items-center">
            <p className="text-sm font-mono text-accent-500 uppercase tracking-[0.3em] animate-pulse">
              Initializing System
            </p>
            <div className="flex gap-1 mt-3">
              <span className="w-1.5 h-1.5 rounded-full bg-white/20 animate-bounce [animation-delay:-0.3s]" />
              <span className="w-1.5 h-1.5 rounded-full bg-white/20 animate-bounce [animation-delay:-0.15s]" />
              <span className="w-1.5 h-1.5 rounded-full bg-white/20 animate-bounce" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
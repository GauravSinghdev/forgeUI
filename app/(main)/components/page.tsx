"use client";

import { useState } from "react";
import { FlaskConical, Copy, Check } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

// New Component 1: AnimatedGlowButton
const AnimatedGlowButton: React.FC<{ text: string }> = ({ text }) => (
  <motion.button
    className="relative px-6 py-3 bg-gray-900 text-white rounded-lg font-semibold overflow-hidden border-2 border-white/10"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    transition={{ type: "spring", stiffness: 400, damping: 20 }}
  >
    <span className="relative z-10">{text}</span>
    <motion.div
      className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-500 opacity-0"
      whileHover={{ opacity: 0.5 }}
      transition={{ duration: 0.3 }}
    />
  </motion.button>
);

// New Component 2: AnimatedPulseCircle
const AnimatedPulseCircle: React.FC = () => (
  <motion.div
    className="w-32 h-32 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white font-bold"
    animate={{
      scale: [1, 1.1, 1],
      boxShadow: [
        "0 0 10px rgba(59, 130, 246, 0.5)",
        "0 0 20px rgba(59, 130, 246, 0.8)",
        "0 0 10px rgba(59, 130, 246, 0.5)",
      ],
    }}
    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
  >
    Pulse
  </motion.div>
);

// New Component 3: AnimatedSlideCard
const AnimatedSlideCard: React.FC<{ title: string; text: string }> = ({ title, text }) => (
  <motion.div
    className="w-64 h-40 bg-gray-800 rounded-lg p-4 text-white"
    initial={{ x: -100, opacity: 0 }}
    animate={{ x: 0, opacity: 1 }}
    whileHover={{ y: -10, boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.3)" }}
    transition={{ type: "spring", stiffness: 300, damping: 20 }}
  >
    <h3 className="text-lg font-semibold">{title}</h3>
    <p className="text-sm mt-2">{text}</p>
  </motion.div>
);

// New Component 4: AnimatedFlipText
const AnimatedFlipText: React.FC<{ text: string }> = ({ text }) => (
  <motion.div
    className="text-2xl font-bold text-white"
    whileHover={{ rotateX: 180 }}
    transition={{ type: "spring", stiffness: 200, damping: 15 }}
  >
    {text}
  </motion.div>
);

// New Component 5: AnimatedOrbitSpinner
const AnimatedOrbitSpinner: React.FC = () => (
  <div className="relative w-24 h-24">
    <motion.div
      className="absolute w-6 h-6 bg-cyan-500 rounded-full"
      animate={{ rotate: 360 }}
      transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
      style={{ top: "50%", left: "50%", translateX: "-50%", translateY: "-50%" }}
    />
    <motion.div
      className="absolute w-4 h-4 bg-purple-500 rounded-full"
      animate={{ rotate: -360 }}
      transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
      style={{ top: "50%", left: "50%", translateX: "-50%", translateY: "-50%" }}
    />
  </div>
);

// New Component 6: AnimatedGradientBorder
const AnimatedGradientBorder: React.FC = () => (
  <motion.div
    className="w-48 h-32 rounded-lg flex items-center justify-center text-white font-semibold"
    style={{
      background: "linear-gradient(45deg, #1e293b, #1e293b) padding-box, linear-gradient(45deg, #22d3ee, #9333ea) border-box",
      border: "4px solid transparent",
    }}
    animate={{ rotate: [0, 360] }}
    transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
  >
    Gradient
  </motion.div>
);

export default function ComponentsPage() {
  const components = [
    {
      name: "Glow Button",
      description: "A button with a glowing gradient effect on hover.",
      component: <AnimatedGlowButton text="Click Me" />,
      code: `
import { motion } from "framer-motion";

const AnimatedGlowButton = ({ text }) => (
  <motion.button
    className="relative px-6 py-3 bg-gray-900 text-white rounded-lg font-semibold overflow-hidden"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    transition={{ type: "spring", stiffness: 400, damping: 20 }}
  >
    <span className="relative z-10">{text}</span>
    <motion.div
      className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-500 opacity-0"
      whileHover={{ opacity: 0.5 }}
      transition={{ duration: 0.3 }}
    />
  </motion.button>
);

export default AnimatedGlowButton;
      `.trim(),
    },
    {
      name: "Pulse Circle",
      description: "A pulsating circle with a glowing shadow.",
      component: <AnimatedPulseCircle />,
      code: `
import { motion } from "framer-motion";

const AnimatedPulseCircle = () => (
  <motion.div
    className="w-32 h-32 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white font-bold"
    animate={{
      scale: [1, 1.1, 1],
      boxShadow: [
        "0 0 10px rgba(59, 130, 246, 0.5)",
        "0 0 20px rgba(59, 130, 246, 0.8)",
        "0 0 10px rgba(59, 130, 246, 0.5)",
      ],
    }}
    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
  >
    Pulse
  </motion.div>
);

export default AnimatedPulseCircle;
      `.trim(),
    },
    {
      name: "Slide Card",
      description: "A card that slides in with a hover lift.",
      component: <AnimatedSlideCard title="Slide Card" text="This card slides in smoothly." />,
      code: `
import { motion } from "framer-motion";

const AnimatedSlideCard = ({ title, text }) => (
  <motion.div
    className="w-64 h-40 bg-gray-800 rounded-lg p-4 text-white"
    initial={{ x: -100, opacity: 0 }}
    animate={{ x: 0, opacity: 1 }}
    whileHover={{ y: -10, boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.3)" }}
    transition={{ type: "spring", stiffness: 300, damping: 20 }}
  >
    <h3 className="text-lg font-semibold">{title}</h3>
    <p className="text-sm mt-2">{text}</p>
  </motion.div>
);

export default AnimatedSlideCard;
      `.trim(),
    },
    {
      name: "Flip Text",
      description: "Text that flips on hover with a spring effect.",
      component: <AnimatedFlipText text="Flip Me" />,
      code: `
import { motion } from "framer-motion";

const AnimatedFlipText = ({ text }) => (
  <motion.div
    className="text-2xl font-bold text-white"
    whileHover={{ rotateX: 180 }}
    transition={{ type: "spring", stiffness: 200, damping: 15 }}
  >
    {text}
  </motion.div>
);

export default AnimatedFlipText;
      `.trim(),
    },
    {
      name: "Orbit Spinner",
      description: "A spinner with orbiting elements.",
      component: <AnimatedOrbitSpinner />,
      code: `
import { motion } from "framer-motion";

const AnimatedOrbitSpinner = () => (
  <div className="relative w-24 h-24">
    <motion.div
      className="absolute w-6 h-6 bg-cyan-500 rounded-full"
      animate={{ rotate: 360 }}
      transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
      style={{ top: "50%", left: "50%", translateX: "-50%", translateY: "-50%", orbit: 40 }}
    />
    <motion.div
      className="absolute w-4 h-4 bg-purple-500 rounded-full"
      animate={{ rotate: -360 }}
      transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
      style={{ top: "50%", left: "50%", translateX: "-50%", translateY: "-50%", orbit: 30 }}
    />
  </div>
);

export default AnimatedOrbitSpinner;
      `.trim(),
    },
    {
      name: "Gradient Border",
      description: "A box with a rotating gradient border.",
      component: <AnimatedGradientBorder />,
      code: `
import { motion } from "framer-motion";

const AnimatedGradientBorder = () => (
  <motion.div
    className="w-48 h-32 rounded-lg flex items-center justify-center text-white font-semibold"
    style={{
      background: "linear-gradient(45deg, #1e293b, #1e293b) padding-box, linear-gradient(45deg, #22d3ee, #9333ea) border-box",
      border: "4px solid transparent",
    }}
    animate={{ rotate: [0, 360] }}
    transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
  >
    Gradient
  </motion.div>
);

export default AnimatedGradientBorder;
      `.trim(),
    },
  ];

  const [selectedCode, setSelectedCode] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    if (selectedCode) {
      navigator.clipboard.writeText(selectedCode).then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      });
    }
  };

  return (
    <main className="flex flex-col min-h-screen gap-8 px-4 text-white">
      {/* Enhanced Header */}
      <Link
        href="https://x.com/codewithkara"
        target="_blank"
        className="flex items-center justify-center hover:scale-105 transition-all"
      >
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-blue-500 rounded-lg blur-md opacity-75 animate-pulse"></div>
          <button className="relative px-6 py-3 bg-black rounded-lg leading-none flex items-center sm:divide-x divide-gray-600 shadow-lg">
            <span className="sm:flex items-center justify-center space-x-4 hidden">
              <FlaskConical className="size-6 text-pink-600 -rotate-12 animate-spin-slow" />
              <span className="text-pink-400 pr-6">follow codewithkara</span>
            </span>
            <span className="text-indigo-400 sm:pl-6">See what's new →</span>
          </button>
        </div>
      </Link>

      <p className="text-sm sm:text-lg text-center text-gray-700  dark:text-gray-300 px-2">
        Components crafted with{" "}
        <span className="text-cyan-400 italic font-semibold">Next.js</span> +{" "}
        <span className="text-purple-400 italic font-semibold">TypeScript</span> +{" "}
        <span className="text-blue-400 italic font-semibold">Tailwind CSS</span> +{" "}
        <span className="text-pink-400 italic font-semibold">Framer Motion</span>
      </p>

      {/* Responsive Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10 max-w-7xl mx-auto px-2 sm:px-0">
        {components.map((comp, index) => (
          <motion.div
            key={index}
            className="group relative bg-gray-800 rounded-xl shadow-xl overflow-hidden border border-gray-700 hover:border-cyan-500 transition-all"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, type: "spring", stiffness: 200 }}
          >
            <div className="w-full h-60 sm:h-80 flex items-center justify-center p-4 bg-gray-900">
              {comp.component}
            </div>
            <div className="py-4 px-3 flex flex-col gap-2">
              <h1 className="font-bold text-lg sm:text-xl text-cyan-400">{comp.name}</h1>
              <p className="text-gray-300 text-sm sm:text-base">{comp.description}</p>
              <button
                onClick={() => setSelectedCode(comp.code)}
                className="mt-2 px-4 py-2 bg-cyan-600 text-white rounded-lg font-semibold hover:bg-cyan-700 transition-colors text-sm sm:text-base"
              >
                View Code
              </button>
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-cyan-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
          </motion.div>
        ))}
      </div>

      {/* Responsive Code Modal with Copy Button */}
      {selectedCode && (
        <motion.div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 px-4 sm:px-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="bg-gray-900 p-4 sm:p-6 rounded-lg w-full max-w-[90vw] sm:max-w-3xl max-h-[80vh] overflow-y-auto relative"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 300 }}
            style={{
              scrollbarWidth: "thin",
              scrollbarColor: "#22d3ee #1e293b",
            }}
          >
            <button
              onClick={handleCopy}
              className="absolute top-2 right-2 sm:top-4 sm:right-4 px-3 py-1 bg-cyan-600 text-white rounded-lg font-semibold hover:bg-cyan-700 transition-colors flex items-center space-x-2 z-10 text-sm"
            >
              {copied ? (
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                >
                  <Check className="w-4 h-4 sm:w-5 sm:h-5" />
                </motion.div>
              ) : (
                <Copy className="w-4 h-4 sm:w-5 sm:h-5" />
              )}
              {/* <span>{copied ? "Copied" : "Copy"}</span> */}
            </button>
            <pre className="text-gray-200 text-xs sm:text-sm mt-8 sm:mt-0">
              <style jsx>{`
                pre::-webkit-scrollbar {
                  width: 10px;
                }
                pre::-webkit-scrollbar-track {
                  background: #1e293b;
                  border-radius: 10px;
                  box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.5);
                }
                pre::-webkit-scrollbar-thumb {
                  background: linear-gradient(45deg, #22d3ee, #9333ea);
                  border-radius: 10px;
                  box-shadow: 0 0 8px rgba(34, 211, 238, 0.6);
                }
                pre::-webkit-scrollbar-thumb:hover {
                  background: linear-gradient(45deg, #06b6d4, #7e22ce);
                  box-shadow: 0 0 12px rgba(34, 211, 238, 0.8);
                }
              `}</style>
              {selectedCode}
            </pre>
            <button
              onClick={() => setSelectedCode(null)}
              className="mt-4 px-4 py-2 bg-red-600 text-white rounded-lg font-semibold hover:bg-red-700 w-full sm:w-auto text-sm sm:text-base"
            >
              Close
            </button>
          </motion.div>
        </motion.div>
      )}
    </main>
  );
}
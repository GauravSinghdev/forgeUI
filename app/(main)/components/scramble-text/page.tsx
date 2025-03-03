"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Copy, Check } from "lucide-react";

// AnimatedScrambleText Component
interface AnimatedScrambleTextProps {
  text: string;
}

const AnimatedScrambleText: React.FC<AnimatedScrambleTextProps> = ({
  text,
}) => {
  const [displayText, setDisplayText] = useState(text);
  const [isHovered, setIsHovered] = useState(false);
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()";

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isHovered) {
      let iterations = 0;
      const maxIterations = text.length * 2;

      interval = setInterval(() => {
        setDisplayText((prev) =>
          prev
            .split("")
            .map((char, index) => {
              if (index < iterations / 2) return text[index];
              return characters[Math.floor(Math.random() * characters.length)];
            })
            .join("")
        );
        iterations += 1;
        if (iterations >= maxIterations) clearInterval(interval);
      }, 50);
    } else {
      setDisplayText(text);
    }

    return () => clearInterval(interval);
  }, [isHovered, text]);

  return (
    <motion.div
      className="text-2xl sm:text-3xl font-bold text-white cursor-pointer"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      onViewportEnter={() => setIsHovered(true)}
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      {displayText}
    </motion.div>
  );
};

// ScrambleDemo Component
const ScrambleDemo: React.FC = () => {
  return (
    <section className="grid place-content-center bg-gray-900 rounded p-20">
      <AnimatedScrambleText text="Scramble Me!" />
    </section>
  );
};

// Tabbed AnimatedScrambleTextComponent
const AnimatedScrambleTextComponent: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"demo" | "code">("demo");
  const [copied, setCopied] = useState(false);

  const scrambleTextCode = `
"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface AnimatedScrambleTextProps {
  text: string;
}

const AnimatedScrambleText: React.FC<AnimatedScrambleTextProps> = ({ text }) => {
  const [displayText, setDisplayText] = useState(text);
  const [isHovered, setIsHovered] = useState(false);
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()";

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isHovered) {
      let iterations = 0;
      const maxIterations = text.length * 2;

      interval = setInterval(() => {
        setDisplayText((prev) =>
          prev
            .split("")
            .map((char, index) => {
              if (index < iterations / 2) return text[index];
              return characters[Math.floor(Math.random() * characters.length)];
            })
            .join("")
        );
        iterations += 1;
        if (iterations >= maxIterations) clearInterval(interval);
      }, 50);
    } else {
      setDisplayText(text);
    }

    return () => clearInterval(interval);
  }, [isHovered, text]);

  return (
    <motion.div
      className="text-2xl sm:text-3xl font-bold text-white cursor-pointer"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      onViewportEnter={() => setIsHovered(true)}
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      {displayText}
    </motion.div>
  );
};

export default AnimatedScrambleText;
  `.trim();

  const handleCopy = () => {
    navigator.clipboard.writeText(scrambleTextCode).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <div className="min-h-screen flex flex-col py-4 px-4 sm:px-6">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl sm:text-4xl font-bold underline text-left mb-4">
          Scramble Text Component
        </h1>
        <p className="text-base sm:text-lg">
          A text component that scrambles characters on hover with a smooth
          animation.
        </p>
      </div>

      {/* Tabs */}
      <div className="flex space-x-4 mb-8">
        <button
          className={`px-4 sm:px-6 py-2 rounded-lg font-semibold text-white transition-colors ${
            activeTab === "demo"
              ? "bg-cyan-600"
              : "bg-gray-700 hover:bg-gray-600"
          }`}
          onClick={() => setActiveTab("demo")}
        >
          Preview
        </button>
        <button
          className={`px-4 sm:px-6 py-2 rounded-lg font-semibold text-white transition-colors ${
            activeTab === "code"
              ? "bg-cyan-600"
              : "bg-gray-700 hover:bg-gray-600"
          }`}
          onClick={() => setActiveTab("code")}
        >
          Code
        </button>
      </div>

      {/* Tab Content */}
      <motion.div
        className="w-full max-w-3xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {activeTab === "demo" ? (
          <div className="flex justify-center border-2 border-b-0 pt-4 sm:pt-5">
            <ScrambleDemo />
          </div>
        ) : (
          <div className="relative">
            <button
              onClick={handleCopy}
              className="absolute top-3 right-5 px-3 py-2 bg-cyan-600 text-white rounded-lg font-semibold hover:bg-cyan-700 transition-colors flex items-center space-x-2 z-10 text-sm"
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
            <pre
              className="p-4 sm:p-6 rounded overflow-x-auto overflow-y-auto text-xs sm:text-sm max-h-[70vh] border-2"
              style={{
                scrollbarWidth: "thin",
                scrollbarColor: "#22d3ee #1e293b",
              }}
            >
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
              {scrambleTextCode}
            </pre>
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default AnimatedScrambleTextComponent;

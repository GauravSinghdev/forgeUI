"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Copy, Check } from "lucide-react";

// BubbleText Component
interface BubbleTextProps {
  text: string;
}

const BubbleText: React.FC<BubbleTextProps> = ({ text }) => {
  return (
    <motion.div className="flex space-x-1 cursor-pointer">
      {text.split("").map((char, index) => (
        <motion.span
          key={index}
          className="inline-block text-xl sm:text-3xl text-white font-medium"
          whileHover={{
            scale: 1.3,
            fontWeight: 800,
            color: "#60a5fa",
          }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 15,
            mass: 0.5,
            // duration: 0.3, // Removed duration as spring handles timing
          }}
        >
          {char}
        </motion.span>
      ))}
    </motion.div>
  );
};

// BubbleDemo Component
const BubbleDemo: React.FC = () => {
  return (
    <section className="grid place-content-center rounded p-20">
      <BubbleText text="Bubble!" />
    </section>
  );
};

// Tabbed BubbleTextComponent
const BubbleTextComponent: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"demo" | "code">("demo");
  const [copied, setCopied] = useState(false);

  const bubbleTextCode = `
"use client";

import { motion } from "framer-motion";

interface BubbleTextProps {
  text: string;
}

const BubbleText: React.FC<BubbleTextProps> = ({ text }) => {
  return (
    <motion.div className="flex space-x-1 cursor-pointer">
      {text.split("").map((char, index) => (
        <motion.span
          key={index}
          className="inline-block text-xl sm:text-3xl text-white font-medium"
          whileHover={{
            scale: 1.3,
            fontWeight: 800,
            color: "#60a5fa",
          }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 15,
            mass: 0.5,
          }}
        >
          {char}
        </motion.span>
      ))}
    </motion.div>
  );
};

export default BubbleText;
  `.trim();

  const handleCopy = () => {
    navigator.clipboard.writeText(bubbleTextCode).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <div className="min-h-screen flex flex-col py-1 px-5 ">
      {/* Header */}
      <div className="mb-10">
        <h1 className="text-3xl sm:text-4xl font-bold underline text-left mb-4">
          Bubble Text Component
        </h1>
        <p className="text-base sm:text-lg">
          A text component where individual letters grow bolder and larger on hover with smooth spring animation.
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
          <div className="flex justify-center border-2 border-b-0 pt-5">
            <BubbleDemo />
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
              {bubbleTextCode}
            </pre>
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default BubbleTextComponent;
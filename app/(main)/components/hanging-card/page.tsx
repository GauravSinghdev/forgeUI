"use client";

import { useState } from "react";
import { motion, MotionProps } from "framer-motion";
import { Copy, Check } from "lucide-react";


// Define props for HangingCard (no external props needed for this component)
interface HangingCardProps {}

// HangingCard Component
const HangingCard: React.FC<HangingCardProps> = () => {
  const [hovered, setHovered] = useState(false);

  return (
    <div className="bg-gradient-to-t from-blue-200 w-full m-5 pb-10">
      <motion.div
        initial={{ y: -200 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8 }}
        className="flex flex-col items-center"
      >
        {/* Rope SVG */}
        <div className="flex gap-10">
          <svg width="5" height="100" viewBox="0 0 4 80" fill="none">
            <motion.line
              x1="2"
              y1="0"
              x2="2"
              y2="80"
              stroke="black"
              strokeWidth="4"
              strokeLinecap="round"
            />
          </svg>
          <svg width="5" height="100" viewBox="0 0 4 80" fill="none">
            <motion.line
              x1="2"
              y1="0"
              x2="2"
              y2="80"
              stroke="black"
              strokeWidth="4"
              strokeLinecap="round"
            />
          </svg>
        </div>

        {/* Hanging Card */}
        <motion.div
          className="w-64 h-64 bg-purple-400 shadow-lg rounded-2xl flex items-center justify-center text-3xl font-bold cursor-pointer select-none text-black"
          initial={{ rotateZ: 0 }}
          animate={{ rotateZ: hovered ? 0 : -5, scale: hovered ? 1.08 : 1 }}
          transition={{ type: "spring", stiffness: 150, damping: 10 }}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          Hanging Card
        </motion.div>
      </motion.div>
    </div>
  );
};

// Tabbed HangingCardComponent
const HangingCardComponent: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"demo" | "code">("demo");
  const [copied, setCopied] = useState(false);

  const hangingCardCode = `
import { motion } from "framer-motion";
import { useState } from "react";

interface HangingCardProps {}

const HangingCard: React.FC<HangingCardProps> = () => {
  const [hovered, setHovered] = useState(false);

  return (
    <div className="h-screen bg-slate-400">
      <motion.div
        initial={{ y: -200 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8 }}
        className="flex flex-col items-center"
      >
        {/* Rope SVG */}
        <div className="flex gap-10">
          <svg width="5" height="100" viewBox="0 0 4 80" fill="none">
            <motion.line
              x1="2"
              y1="0"
              x2="2"
              y2="80"
              stroke="black"
              strokeWidth="4"
              strokeLinecap="round"
            />
          </svg>
          <svg width="5" height="100" viewBox="0 0 4 80" fill="none">
            <motion.line
              x1="2"
              y1="0"
              x2="2"
              y2="80"
              stroke="black"
              strokeWidth="4"
              strokeLinecap="round"
            />
          </svg>
        </div>

        {/* Hanging Card */}
        <motion.div
          className="w-64 h-80 bg-purple-200 shadow-lg rounded-2xl flex items-center justify-center text-3xl font-bold cursor-pointer select-none"
          initial={{ rotateZ: 0 }}
          animate={{ rotateZ: hovered ? 0 : -5, scale: hovered ? 1.08 : 1 }}
          transition={{ type: "spring", stiffness: 150, damping: 10 }}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          Hanging Card
        </motion.div>
      </motion.div>
    </div>
  );
};

export default HangingCard;
  `.trim();

  const handleCopy = () => {
    navigator.clipboard
      .writeText(hangingCardCode)
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      })
      .catch((err) => console.error("Failed to copy:", err));
  };

  return (
    <div className="min-h-screen flex flex-col py-6 px-5">
      {/* Header */}
      <div className="mb-10">
        <h1 className="text-4xl font-bold underline text-left mb-5">
          Hanging Card Component
        </h1>
        <p className="text-lg">
          A card that hangs from ropes with a subtle hover animation.
        </p>
      </div>

      {/* Tabs */}
      <div className="flex space-x-4 mb-10">
        <button
          className={`px-6 py-2 rounded-lg font-semibold transition-colors ${
            activeTab === "demo"
              ? "bg-cyan-600"
              : "bg-gray-700 hover:bg-gray-600"
          }`}
          onClick={() => setActiveTab("demo")}
        >
          Preview
        </button>
        <button
          className={`px-6 py-2 rounded-lg font-semibold transition-colors ${
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
          <div className="flex justify-center border-2 border-b-0">
            <HangingCard />
          </div>
        ) : (
          <div className="relative">
            <button
              className="absolute top-3 right-5 px-3 py-2 bg-cyan-600 text-white rounded-lg font-semibold hover:bg-cyan-700 transition-colors flex items-center space-x-2 z-10"
              onClick={handleCopy}
            >
              {copied ? (
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                >
                  <Check className="w-5 h-5" />
                </motion.div>
              ) : (
                <Copy className="w-5 h-5" />
              )}
              <span className="text-sm">{copied ? "Copied" : "Copy"}</span>
            </button>
            <pre
              className="text-gray-800 dark:text-gray-200 p-6 rounded overflow-x-auto overflow-y-auto text-sm max-h-[600px] border-2"
              style={{
                scrollbarWidth: "thin" as const,
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
              {hangingCardCode}
            </pre>
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default HangingCardComponent;

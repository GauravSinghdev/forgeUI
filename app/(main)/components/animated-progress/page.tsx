"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Copy, Check } from "lucide-react";

// AnimatedProgressBar Component
interface AnimatedProgressBarProps {
  progress: number; // Percentage (0-100)
  label: string;
}

const AnimatedProgressBar: React.FC<AnimatedProgressBarProps> = ({ progress, label }) => {
  return (
    <div className="w-80">
      <div className="mb-2 flex justify-between">
        <span className="text-gray-800 font-semibold">{label}</span>
        <span className="text-gray-600">{progress}%</span>
      </div>
      <div className="w-full h-4 bg-gray-200 rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-gradient-to-r from-cyan-500 to-blue-600"
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          whileHover={{ scaleY: 1.2 }}
        />
      </div>
    </div>
  );
};

// ProgressBarDemo Component
const ProgressBarDemo: React.FC = () => {
  return (
    <section className="grid place-content-center gap-6 bg-gray-300 rounded px-8 py-20">
      <AnimatedProgressBar progress={75} label="Project Completion" />
      <AnimatedProgressBar progress={40} label="Skill Level" />
    </section>
  );
};

// Tabbed AnimatedProgressBarComponent
const AnimatedProgressBarComponent: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"demo" | "code">("demo");
  const [copied, setCopied] = useState(false);

  const animatedProgressBarCode = `
import { motion } from "framer-motion";

interface AnimatedProgressBarProps {
  progress: number; // Percentage (0-100)
  label: string;
}

const AnimatedProgressBar: React.FC<AnimatedProgressBarProps> = ({ progress, label }) => {
  return (
    <div className="w-80">
      <div className="mb-2 flex justify-between">
        <span className="text-gray-800 font-semibold">{label}</span>
        <span className="text-gray-600">{progress}%</span>
      </div>
      <div className="w-full h-4 bg-gray-200 rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-gradient-to-r from-cyan-500 to-blue-600"
          initial={{ width: 0 }}
          animate={{ width: \`\${progress}%\` }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          whileHover={{ scaleY: 1.2 }}
        />
      </div>
    </div>
  );
};

export default AnimatedProgressBar;
  `.trim();

  const handleCopy = () => {
    navigator.clipboard.writeText(animatedProgressBarCode).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <div className="min-h-screen flex flex-col py-1 px-5">
      {/* Header */}
      <div className="mb-10">
        <h1 className="text-4xl font-bold underline text-left mb-5">
          Animated ProgressBar Component
        </h1>
        <p className="text-lg">
          A smooth animated progress bar with hover scaling and gradient fill.
        </p>
      </div>

      {/* Tabs */}
      <div className="flex space-x-4 mb-10">
        <button
          className={`px-6 py-2 rounded-lg font-semibold text-white transition-colors ${
            activeTab === "demo" ? "bg-cyan-600" : "bg-gray-700 hover:bg-gray-600"
          }`}
          onClick={() => setActiveTab("demo")}
        >
          Preview
        </button>
        <button
          className={`px-6 py-2 rounded-lg font-semibold text-white transition-colors ${
            activeTab === "code" ? "bg-cyan-600" : "bg-gray-700 hover:bg-gray-600"
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
            <ProgressBarDemo />
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
              {animatedProgressBarCode}
            </pre>
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default AnimatedProgressBarComponent;
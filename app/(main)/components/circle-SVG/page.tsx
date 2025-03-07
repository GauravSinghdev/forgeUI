"use client";

import { useState } from "react";
import { motion } from "framer-motion"; // Corrected import
import { Copy, Check } from "lucide-react";


// DrawCircleText Component
const DrawCircleText = () => {
  return (
    <>
      <div className="grid place-content-center bg-emerald-950 px-4 py-24 text-yellow-50 h-[600px]">
        <h1 className="max-w-2xl text-center text-5xl leading-snug">
          Scale your{" "}
          <span className="relative">
            Marketing
            <svg
              viewBox="0 0 286 73"
              fill="none"
              className="absolute -left-2 -right-2 -top-2 bottom-0 translate-y-1"
            >
              <motion.path
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                transition={{
                  duration: 1.25,
                  ease: "easeInOut",
                }}
                d="M142.293 1C106.854 16.8908 6.08202 7.17705 1.23654 43.3756C-2.10604 68.3466 29.5633 73.2652 122.688 71.7518C215.814 70.2384 316.298 70.689 275.761 38.0785C230.14 1.37835 97.0503 24.4575 52.9384 1"
                stroke="#FACC15"
                strokeWidth="3"
              />
            </svg>
          </span>{" "}
          with Simple{" "}
          <span className="relative">
            AI Tools{" "}
            <svg
              viewBox="0 0 913 121"
              fill="none"
              className="absolute -right-2 top-10 -bottom-5 translate-y-1"
            >
              <motion.path
                initial={{ pathLength: 1 }}
                whileInView={{ pathLength: 0.25 }}
                transition={{
                  duration: 1.25,
                  ease: "easeInOut",
                }}
                d="M0 115H852.5L907.5 3"
                stroke="#D332A6"
                strokeWidth="10"
              />
            </svg>
          </span>
        </h1>
      </div>
    </>
  );
};

// Tabbed DrawCircleTextComponent
const DrawCircleTextComponent = () => {
  const [activeTab, setActiveTab] = useState<"demo" | "code">("demo");
  const [copied, setCopied] = useState(false);

  const drawCircleTextCode = `
import { motion } from "framer-motion";

const DrawCircleText = () => {
  return (
    <>
      <div className="grid place-content-center bg-emerald-950 px-4 py-24 text-yellow-50 h-[600px]">
        <h1 className="max-w-2xl text-center text-5xl leading-snug">
          Scale your{" "}
          <span className="relative">
            Marketing
            <svg
              viewBox="0 0 286 73"
              fill="none"
              className="absolute -left-2 -right-2 -top-2 bottom-0 translate-y-1"
            >
              <motion.path
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                transition={{
                  duration: 1.25,
                  ease: "easeInOut",
                }}
                d="M142.293 1C106.854 16.8908 6.08202 7.17705 1.23654 43.3756C-2.10604 68.3466 29.5633 73.2652 122.688 71.7518C215.814 70.2384 316.298 70.689 275.761 38.0785C230.14 1.37835 97.0503 24.4575 52.9384 1"
                stroke="#FACC15"
                strokeWidth="3"
              />
            </svg>
          </span>{" "}
          with Simple{" "}
          <span className="relative">
            AI Tools{" "}
            <svg
              viewBox="0 0 913 121"
              fill="none"
              className="absolute -right-2 top-10 -bottom-5 translate-y-1"
            >
              <motion.path
                initial={{ pathLength: 1 }}
                whileInView={{ pathLength: 0.25 }}
                transition={{
                  duration: 1.25,
                  ease: "easeInOut",
                }}
                d="M0 115H852.5L907.5 3"
                stroke="#D332A6"
                strokeWidth="10"
              />
            </svg>
          </span>
        </h1>
      </div>
    </>
  );
};

export default DrawCircleText;
  `.trim();

  const handleCopy = () => {
    navigator.clipboard.writeText(drawCircleTextCode).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <div className="min-h-screen flex flex-col py-1 px-5">
      {/* Header */}
      <div className="mb-10">
        <h1 className="text-4xl font-bold underline text-left mb-5">
          DrawCircle Text Component
        </h1>
        <p className="text-lg">
          Animated text with SVG paths that draw on scroll for a creative
          effect.
        </p>
      </div>

      {/* Tabs */}
      <div className="flex space-x-4 mb-5 pb-5">
        <button
          className={`px-6 py-2 rounded-lg font-semibold text-white transition-colors ${
            activeTab === "demo"
              ? "bg-cyan-600"
              : "bg-gray-700 hover:bg-gray-600"
          }`}
          onClick={() => setActiveTab("demo")}
        >
          Preview
        </button>
        <button
          className={`px-6 py-2 rounded-lg font-semibold text-white transition-colors ${
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
          <div className="flex justify-center border-2 border-b-0 pt-5 px-1">
            <DrawCircleText />
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
              {/* <span className="text-sm">{copied ? "Copied" : "Copy"}</span> */}
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
              {drawCircleTextCode}
            </pre>
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default DrawCircleTextComponent;

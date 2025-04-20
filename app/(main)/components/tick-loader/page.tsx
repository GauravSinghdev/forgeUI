"use client";

import { useState } from "react";
import { motion, useAnimate } from "framer-motion";
import { Copy, Check } from "lucide-react";

// AnimationSequence Component
const AnimationSequence = () => {
  const [scope, animate] = useAnimate();
  const startAnimating = async () => {
    await animate(
      ".loader",
      {
        opacity: 1,
        width: "24px",
      },
      {
        duration: 0.1,
      }
    );
    await animate(
      ".loader",
      {
        rotate: 360 * 4,
      },
      {
        duration: 2,
      }
    );
    animate(
      ".loader",
      {
        opacity: 0,
        scale: 0,
      },
      {
        duration: 0.1,
      }
    );
    animate(
      ".text",
      {
        display: "none",
      },
      {
        duration: 0.1,
      }
    );
    await animate(
      "button",
      {
        width: "5rem",
        borderRadius: "1000px",
      },
      {
        duration: 0.5,
      }
    );
    animate(
      "button",
      {
        opacity: 1,
        scale: [1, 1.2, 0.8, 1],
        backgroundImage: "linear-gradient(to right, #00ff99, #00ccff)",
      },
      {
        duration: 0.8,
      }
    );
    animate(
      ".check-icon",
      {
        opacity: 1,
        scale: [1, 1.2, 0.8, 1],
      },
      {
        duration: 0.8,
      }
    );
    animate(
      ".check-icon path",
      {
        pathLength: 1,
      },
      {
        duration: 0.3,
      }
    );
  };

  return (
    <div className="flex h-[50vh] min-h-[300px] items-center justify-center sm:h-[400px]">
      <div
        ref={scope}
        className="relative h-16 w-full max-w-[20rem] sm:h-20 sm:max-w-[30rem] flex items-center justify-center"
      >
        <motion.button
          onClick={() => startAnimating()}
          style={{
            width: "100%",
          }}
          className="flex gap-2 items-center justify-center h-full rounded-lg bg-gradient-to-r from-purple-500 via-violet-600 to-indigo-500 text-white font-medium text-sm sm:text-base px-4 py-2"
        >
          <motion.svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="loader h-4 w-4 sm:h-5 sm:w-5 text-white"
            initial={{
              width: "0rem",
            }}
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M12 3a9 9 0 1 0 9 9" />
          </motion.svg>
          <span className="text">Purchase Now ($169)</span>
        </motion.button>

        <motion.svg
          fill="none"
          viewBox="0 0 24 24"
          stroke="#FFFFFF"
          strokeWidth={3}
          className="check-icon h-6 w-6 sm:h-8 sm:w-8 absolute inset-0 m-auto z-50 pointer-events-none"
          style={{
            opacity: 0,
          }}
        >
          <motion.path
            initial={{
              pathLength: 0,
            }}
            transition={{
              duration: 0.3,
              type: "tween",
              ease: "easeOut",
            }}
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M5 13l4 4L19 7"
          />
        </motion.svg>
      </div>
    </div>
  );
};

// Tabbed AnimationSequenceComponent
const AnimationSequenceComponent = () => {
  const [activeTab, setActiveTab] = useState<"demo" | "code">("demo");
  const [copied, setCopied] = useState(false);

  const animationSequenceCode = `
import { motion, useAnimate } from "framer-motion";

const AnimationSequence = () => {
  const [scope, animate] = useAnimate();
  const startAnimating = async () => {
    await animate(
      ".loader",
      {
        opacity: 1,
        width: "24px",
      },
      {
        duration: 0.1,
      }
    );
    await animate(
      ".loader",
      {
        rotate: 360 * 4,
      },
      {
        duration: 2,
      }
    );
    animate(
      ".loader",
      {
        opacity: 0,
        scale: 0,
      },
      {
        duration: 0.1,
      }
    );
    animate(
      ".text",
      {
        display: "none",
      },
      {
        duration: 0.1,
      }
    );
    await animate(
      "button",
      {
        width: "5rem",
        borderRadius: "1000px",
      },
      {
        duration: 0.5,
      }
    );
    animate(
      "button",
      {
        opacity: 1,
        scale: [1, 1.2, 0.8, 1],
        backgroundImage: "linear-gradient(to right, #00ff99, #00ccff)",
      },
      {
        duration: 0.8,
      }
    );
    animate(
      ".check-icon",
      {
        opacity: 1,
        scale: [1, 1.2, 0.8, 1],
      },
      {
        duration: 0.8,
      }
    );
    animate(
      ".check-icon path",
      {
        pathLength: 1,
      },
      {
        duration: 0.3,
      }
    );
  };

  return (
    <div className="flex h-[50vh] min-h-[300px] items-center justify-center bg-black sm:h-[400px]">
      <div
        ref={scope}
        className="relative h-16 w-full max-w-[20rem] sm:h-20 sm:max-w-[30rem] flex items-center justify-center"
      >
        <motion.button
          onClick={() => startAnimating()}
          style={{
            width: "100%",
          }}
          className="flex gap-2 items-center justify-center h-full rounded-lg bg-gradient-to-r from-purple-500 via-violet-600 to-indigo-500 text-white font-medium text-sm sm:text-base px-4 py-2"
        >
          <motion.svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="loader h-4 w-4 sm:h-5 sm:w-5 text-white"
            initial={{
              width: "0rem",
            }}
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M12 3a9 9 0 1 0 9 9" />
          </motion.svg>
          <span className="text">Purchase Now ($169)</span>
        </motion.button>

        <motion.svg
          fill="none"
          viewBox="0 0 24 24"
          stroke="#FFFFFF"
          strokeWidth={3}
          className="check-icon h-6 w-6 sm:h-8 sm:w-8 absolute inset-0 m-auto z-50 pointer-events-none"
          style={{
            opacity: 0,
          }}
        >
          <motion.path
            initial={{
              pathLength: 0,
            }}
            transition={{
              duration: 0.3,
              type: "tween",
              ease: "easeOut",
            }}
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M5 13l4 4L19 7"
          />
        </motion.svg>
      </div>
    </div>
  );
};

export default AnimationSequence;
  `.trim();

  const handleCopy = () => {
    navigator.clipboard.writeText(animationSequenceCode).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <div className="min-h-screen flex flex-col py-4 px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="mb-8 sm:mb-10">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold underline text-left mb-4 sm:mb-5">
          Animation Sequence Component
        </h1>
        <p className="text-sm sm:text-base lg:text-lg">
          A button with a sequenced animation that transforms into a checkmark
          upon clicking, simulating a purchase confirmation.
        </p>
      </div>

      {/* Tabs */}
      <div className="flex flex-wrap gap-2 sm:gap-4 mb-8 sm:mb-10">
        <button
          className={`px-4 py-2 sm:px-6 sm:py-2 rounded-lg font-semibold text-white transition-colors text-sm sm:text-base ${
            activeTab === "demo"
              ? "bg-cyan-600"
              : "bg-gray-700 hover:bg-gray-600"
          }`}
          onClick={() => setActiveTab("demo")}
        >
          Preview
        </button>
        <button
          className={`px-4 py-2 sm:px-6 sm:py-2 rounded-lg font-semibold text-white transition-colors text-sm sm:text-base ${
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
        className="w-full max-w-full sm:max-w-3xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {activeTab === "demo" ? (
          <div className="flex justify-center border-2 border-b-0 pt-4 sm:pt-5">
            <AnimationSequence />
          </div>
        ) : (
          <div className="relative">
            <button
              className="absolute top-3 right-3 sm:right-5 px-2 py-1 sm:px-3 sm:py-2 bg-cyan-600 text-white rounded-lg font-semibold hover:bg-cyan-700 transition-colors flex items-center space-x-1 sm:space-x-2 z-10"
              onClick={handleCopy}
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
              className="text-gray-800 dark:text-gray-200 p-4 sm:p-6 rounded overflow-x-auto overflow-y-auto text-xs sm:text-sm max-h-[500px] sm:max-h-[600px] border-2"
              style={{
                scrollbarWidth: "thin",
                scrollbarColor: "#22d3ee #1e293b",
              }}
            >
              <style jsx>{`
                pre::-webkit-scrollbar {
                  width: 8px;
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
              {animationSequenceCode}
            </pre>
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default AnimationSequenceComponent;
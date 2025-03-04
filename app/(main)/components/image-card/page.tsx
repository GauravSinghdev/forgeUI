"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Copy, Check } from "lucide-react";
import Image from "next/image";

interface ImageCardProps {
  title: string;
  description: string | null;
  imageUrl: string;
}

// AnimatedCard Component
const ImageCard = ({ title, description, imageUrl }: ImageCardProps) => {
  return (
    <motion.div
      className="relative w-72 h-96 bg-white rounded-xl shadow-md overflow-hidden cursor-pointer"
      whileHover={{
        scale: 1.05,
        boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)",
      }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <div className="w-full h-1/2">
        <Image
          src={imageUrl}
          alt={title}
          width={288}
          height={192}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-6 flex flex-col justify-between h-1/2">
        <div>
          <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
          <p className="mt-2 text-gray-600 text-sm">{description}</p>
        </div>
        <motion.button
          className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          Learn More
        </motion.button>
      </div>
    </motion.div>
  );
};

// CardDemo Component
const CardDemo = () => {
  return (
    <section className="grid place-content-center gap-6 bg-gradient-to-r from-slate-400 to-black/10 rounded px-8 py-10 h-full">
      <ImageCard
        title="Explore Nature"
        description="Discover the beauty of the outdoors with stunning visuals."
        imageUrl="https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?auto=format&fit=crop&w=500&q=80"
      />
    </section>
  );
};

// Tabbed AnimatedCardComponent
const AnimatedCardComponent = () => {
  const [activeTab, setActiveTab] = useState<"demo" | "code">("demo");
  const [copied, setCopied] = useState(false);

  const animatedCardCode = `
import { motion } from "framer-motion";

const AnimatedCard = ({ title, description, imageUrl }) => {
  return (
    <motion.div
      className="relative w-72 h-96 bg-white rounded-xl shadow-md overflow-hidden cursor-pointer"
      whileHover={{ scale: 1.05, boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)" }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <div className="w-full h-1/2">
        <img src={imageUrl} alt={title} className="w-full h-full object-cover" />
      </div>
      <div className="p-6 flex flex-col justify-between h-1/2">
        <div>
          <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
          <p className="mt-2 text-gray-600 text-sm">{description}</p>
        </div>
        <motion.button
          className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          Learn More
        </motion.button>
      </div>
    </motion.div>
  );
};

export default AnimatedCard;
  `.trim();

  const handleCopy = () => {
    navigator.clipboard.writeText(animatedCardCode).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <div className="min-h-screen flex flex-col py-1 px-5">
      {/* Header */}
      <div className="mb-10">
        <h1 className="text-4xl font-bold underline text-left mb-5">
          Image Card Component
        </h1>
        <p className="text-lg">
          An interactive card with hover scaling, shadow effects, and a smooth
          button animation.
        </p>
      </div>

      {/* Tabs */}
      <div className="flex space-x-4 mb-10">
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
          <div className="flex justify-center border-2 border-b-0 pt-5">
            <CardDemo />
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
              {animatedCardCode}
            </pre>
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default AnimatedCardComponent;

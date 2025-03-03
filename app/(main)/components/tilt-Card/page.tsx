"use client";

import { useState } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { Copy, Check } from "lucide-react";

interface TiltCardProps {
  title: string;
  description: string;
  imageUrl: string;
}

const TiltCard = ({ title, description, imageUrl }: TiltCardProps) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-0.5, 0.5], [20, -20]);
  const rotateY = useTransform(x, [-0.5, 0.5], [-20, 20]);

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = (event.clientX - rect.left) / width - 0.5;
    const mouseY = (event.clientY - rect.top) / height - 0.5;
    x.set(mouseX);
    y.set(mouseY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      className="relative w-72 h-96 rounded-xl shadow-2xl overflow-hidden p-[2px] bg-gradient-to-r from-cyan-500 to-purple-500"
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 200, damping: 20 }}
    >
      <motion.div
        className="w-full h-full bg-gray-800 rounded-xl overflow-hidden"
        style={{ perspective: "1200px", rotateX, rotateY }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <motion.img
          src={imageUrl}
          alt={title}
          className="absolute w-full h-full object-cover opacity-70 scale-110"
          style={{ rotateX, rotateY }}
        />
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0"
          whileHover={{
            opacity: 0.4,
            x: ["-150%", "150%"],
            rotate: [0, 45],
            scale: [1, 1.2],
            transition: {
              duration: 0.8,
              ease: "easeInOut",
              repeat: Infinity,
              repeatType: "reverse",
            },
          }}
        />
        <motion.div
          className="relative z-10 p-6 h-full flex flex-col justify-end text-white"
          whileHover={{ y: -10 }}
          transition={{ duration: 0.3 }}
        >
          <h2 className="text-2xl font-bold mb-2 drop-shadow-md">{title}</h2>
          <p className="text-sm drop-shadow-md">{description}</p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

// Tabbed Component
const TiltComponent = () => {
  const [activeTab, setActiveTab] = useState<"demo" | "code">("demo");
  const [copied, setCopied] = useState(false);

  // TiltCard source code as a string
  const tiltCardCode = `
import { motion, useMotionValue, useTransform } from "framer-motion";

interface TiltCardProps {
  title: string;
  description: string;
  imageUrl: string;
}

const TiltCard = ({ title, description, imageUrl }: TiltCardProps) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-0.5, 0.5], [20, -20]);
  const rotateY = useTransform(x, [-0.5, 0.5], [-20, 20]);

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = (event.clientX - rect.left) / width - 0.5;
    const mouseY = (event.clientY - rect.top) / height - 0.5;
    x.set(mouseX);
    y.set(mouseY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      className="relative w-72 h-96 rounded-xl shadow-2xl overflow-hidden p-[2px] bg-gradient-to-r from-cyan-500 to-purple-500"
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 200, damping: 20 }}
    >
      <motion.div
        className="w-full h-full bg-gray-800 rounded-xl overflow-hidden"
        style={{ perspective: "1200px", rotateX, rotateY }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <motion.img
          src={imageUrl}
          alt={title}
          className="absolute w-full h-full object-cover opacity-70 scale-110"
          style={{ rotateX, rotateY }}
        />
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0"
          whileHover={{
            opacity: 0.4,
            x: ["-150%", "150%"],
            rotate: [0, 45],
            scale: [1, 1.2],
            transition: { duration: 0.8, ease: "easeInOut", repeat: Infinity, repeatType: "reverse" },
          }}
        />
        <motion.div
          className="relative z-10 p-6 h-full flex flex-col justify-end text-white"
          whileHover={{ y: -10 }}
          transition={{ duration: 0.3 }}
        >
          <h2 className="text-2xl font-bold mb-2 drop-shadow-md">{title}</h2>
          <p className="text-sm drop-shadow-md">{description}</p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};
  `.trim();

  // Copy to clipboard function
  const handleCopy = () => {
    navigator.clipboard.writeText(tiltCardCode).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // Reset after 2 seconds
    });
  };

  return (
    <div className="min-h-screen flex flex-col py-1 px-5">
      {/* Header */}
      <div className="mb-10">
        <h1 className="text-4xl font-bold underline text-left mb-5">
          TiltCard Component
        </h1>
        <p className="text-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur,
          sit?
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
          <div className="flex justify-center border-2 border-b-0 pt-5">
            <TiltCard
              title="Cosmic Adventure"
              description="Explore the universe with this interactive 3D card."
              imageUrl="https://images.unsplash.com/photo-1446941611757-91d2c3bd3d45?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60"
            />
          </div>
        ) : (
          <div className="relative">
            <button
              className="absolute top-3 right-5 px-3 py-2 bg-cyan-600 text-white rounded font-semibold hover:bg-cyan-700 transition-colors flex items-center space-x-2 z-10"
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
              {tiltCardCode}
            </pre>
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default TiltComponent;

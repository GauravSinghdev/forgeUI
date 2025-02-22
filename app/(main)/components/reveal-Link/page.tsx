"use client";

import { useState } from "react";
import { motion } from "framer-motion"; // Corrected import
import { Copy, Check } from "lucide-react";

// FlipLink Component
const DURATION = 0.25;
const STAGGER = 0.025;

interface FlipLinkProps {
  children: React.ReactNode;
  href: string;
}

const FlipLink = ({ children, href }: FlipLinkProps) => {
  const text = typeof children === "string" ? children : "";

  return (
    <motion.a
      initial="initial"
      whileHover="hovered"
      href={href}
      className="relative block overflow-hidden whitespace-nowrap text-4xl uppercase font-black sm:text-3xl md:text-4xl lg:text-5xl bg-white"
      style={{ lineHeight: 0.85 }}
    >
      <div>
        {text.split("").map((l, i) => (
          <motion.span
            variants={{
              initial: { y: 0 },
              hovered: { y: "-100%" },
            }}
            transition={{
              duration: DURATION,
              ease: "easeInOut",
              delay: STAGGER * i,
            }}
            key={i}
            className="inline-block"
          >
            {l}
          </motion.span>
        ))}
      </div>
      <div className="absolute inset-0">
        {text.split("").map((l, i) => (
          <motion.span
            variants={{
              initial: { y: "100%" },
              hovered: { y: 0 },
            }}
            transition={{
              duration: DURATION,
              ease: "easeInOut",
              delay: STAGGER * i,
            }}
            key={i}
            className="inline-block"
          >
            {l}
          </motion.span>
        ))}
      </div>
    </motion.a>
  );
};

// RevealLink Component
const RevealLink = () => {
  return (
    <section className="grid place-content-center gap-2 bg-green-300 rounded px-8 text-black h-[400px]">
      <FlipLink href="#">Twitter</FlipLink>
      <FlipLink href="#">Facebook</FlipLink>
      <FlipLink href="#">LinkedIn</FlipLink>
      <FlipLink href="#">Onlyfans</FlipLink>
    </section>
  );
};

// Tabbed RevealLinkComponent
const RevealLinkComponent = () => {
  const [activeTab, setActiveTab] = useState<"demo" | "code">("demo");
  const [copied, setCopied] = useState(false);

  const revealLinkCode = `
import { motion } from "framer-motion";

const DURATION = 0.25;
const STAGGER = 0.025;

interface FlipLinkProps {
  children: React.ReactNode;
  href: string;
}

const FlipLink = ({ children, href }: FlipLinkProps) => {
  const text = typeof children === "string" ? children : "";

  return (
    <motion.a
      initial="initial"
      whileHover="hovered"
      href={href}
      className="relative block overflow-hidden whitespace-nowrap text-4xl uppercase font-black sm:text-3xl md:text-4xl lg:text-5xl bg-white"
      style={{ lineHeight: 0.85 }}
    >
      <div>
        {text.split("").map((l, i) => (
          <motion.span
            variants={{
              initial: { y: 0 },
              hovered: { y: "-100%" },
            }}
            transition={{
              duration: DURATION,
              ease: "easeInOut",
              delay: STAGGER * i,
            }}
            key={i}
            className="inline-block"
          >
            {l}
          </motion.span>
        ))}
      </div>
      <div className="absolute inset-0">
        {text.split("").map((l, i) => (
          <motion.span
            variants={{
              initial: { y: "100%" },
              hovered: { y: 0 },
            }}
            transition={{
              duration: DURATION,
              ease: "easeInOut",
              delay: STAGGER * i,
            }}
            key={i}
            className="inline-block"
          >
            {l}
          </motion.span>
        ))}
      </div>
    </motion.a>
  );
};

const RevealLink = () => {
  return (
    <section className="grid place-content-center gap-2 bg-green-300 px-8 text-black h-[600px]">
      <FlipLink href="#">Twitter</FlipLink>
      <FlipLink href="#">Facebook</FlipLink>
      <FlipLink href="#">LinkedIn</FlipLink>
      <FlipLink href="#">Onlyfans</FlipLink>
    </section>
  );
};

export default RevealLink;
  `.trim();

  const handleCopy = () => {
    navigator.clipboard.writeText(revealLinkCode).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <div className="min-h-screen flex flex-col py-1 px-5 ">
      {/* Header */}
      <div className="mb-10">
        <h1 className="text-4xl font-bold underline text-left mb-5">
          RevealLink Component
        </h1>
        <p className="text-lg">
          A set of animated links that flip letters on hover for a dynamic effect.
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
            <RevealLink />
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
              {revealLinkCode}
            </pre>
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default RevealLinkComponent;
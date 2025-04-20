"use client";

import { JSX, useState } from "react";
import { motion } from "framer-motion";
import {
  HomeIcon,
  ChartBarIcon,
  SettingsIcon,
  UserIcon,
  ChevronLeft,
  ChevronRight,
  Check,
  Copy,
} from "lucide-react";

// Interface for Sidebar link objects
interface SidebarLinkItem {
  name: string;
  href: string;
  icon: JSX.Element;
}

// Sidebar Component
const Sidebar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(true);

  const toggleSideBar = () => {
    setIsOpen(!isOpen);
  };

  const sidebarLinks: SidebarLinkItem[] = [
    { name: "Home", href: "/", icon: <HomeIcon /> },
    { name: "Analytics", href: "/analytics", icon: <ChartBarIcon /> },
    { name: "Users", href: "/users", icon: <UserIcon /> },
    { name: "Setting", href: "/settings", icon: <SettingsIcon /> },
  ];

  const sideBarVariant = {
    open: { 
      width: "16rem",
      transition: { duration: 0.3 }
    },
    closed: { 
      width: "4.5rem",
      transition: { duration: 0.3 }
    },
  };

  const parentVariants = {
    open: { transition: { staggerChildren: 0.07, delayChildren: 0.2 } },
    closed: { transition: { staggerChildren: 0.05, staggerDirection: -1 } },
  };

  const childVariants = {
    open: { opacity: 1, y: 0 },
    closed: { opacity: 0, y: -10 },
  };

  return (
    <motion.div
      initial={false}
      animate={isOpen ? "open" : "closed"}
      variants={sideBarVariant}
      className="border-r border-neutral-100 h-full min-w-[4.5rem] md:min-w-0"
    >
      <motion.nav className="bg-white shadow-md h-full">
        <div className="p-2 sm:p-4 flex justify-between gap-2 items-center">
          <h2
            className={`text-lg sm:text-xl font-semibold text-primary ${
              !isOpen && "hidden"
            }`}
          >
            Dashboard
          </h2>
          <button
            onClick={toggleSideBar}
            className="bg-white text-blue-500 p-2 rounded-full shadow-md hover:bg-gray-100 focus:outline-none"
            aria-label={isOpen ? "Close sidebar" : "Open sidebar"}
          >
            {isOpen ? <ChevronLeft /> : <ChevronRight />}
          </button>
        </div>
        <nav className="p-2 sm:p-4">
          <motion.ul variants={parentVariants} className="space-y-2">
            {sidebarLinks.map((link) => (
              <motion.li
                whileHover={{ scale: 1.05 }}
                variants={childVariants}
                key={link.name}
              >
                <a
                  href={link.href}
                  className="flex gap-2 items-center p-2 text-gray-700 rounded-xl hover:bg-gray-200 text-sm sm:text-base"
                  title={!isOpen ? link.name : ""}
                >
                  {link.icon}
                  {isOpen && link.name}
                </a>
              </motion.li>
            ))}
          </motion.ul>
        </nav>
      </motion.nav>
    </motion.div>
  );
};

// Demo Component with just Sidebar
const SidebarDemo: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row bg-gray-100 h-[500px] w-full max-w-2xl mx-auto p-4 gap-4">
      <Sidebar />
      <div className="hidden flex-1 md:flex flex-col justify-center items-center text-gray-700">
        Page Content
      </div>
    </div>
  );
};

// Tabbed Component
const SidebarComponent: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"demo" | "code">("demo");
  const [copied, setCopied] = useState<boolean>(false);

  const sidebarCode: string = `
"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  HomeIcon,
  ChartBarIcon,
  SettingsIcon,
  UserIcon,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

interface SidebarLinkItem {
  name: string;
  href: string;
  icon: JSX.Element;
}

const Sidebar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(true);

  const toggleSideBar = () => {
    setIsOpen(!isOpen);
  };

  const sidebarLinks: SidebarLinkItem[] = [
    { name: "Home", href: "/", icon: <HomeIcon /> },
    { name: "Analytics", href: "/analytics", icon: <ChartBarIcon /> },
    { name: "Users", href: "/users", icon: <UserIcon /> },
    { name: "Setting", href: "/settings", icon: <SettingsIcon /> },
  ];

  const sideBarVariant = {
    open: { 
      width: "16rem",
      transition: { duration: 0.3 }
    },
    closed: { 
      width: "4.5rem",
      transition: { duration: 0.3 }
    },
  };

  const parentVariants = {
    open: { transition: { staggerChildren: 0.07, delayChildren: 0.2 } },
    closed: { transition: { staggerChildren: 0.05, staggerDirection: -1 } },
  };

  const childVariants = {
    open: { opacity: 1, y: 0 },
    closed: { opacity: 0, y: -10 },
  };

  return (
    <motion.div
      initial={false}
      animate={isOpen ? "open" : "closed"}
      variants={sideBarVariant}
      className="border-r border-neutral-100 h-full min-w-[4.5rem] md:min-w-0"
    >
      <motion.nav className="bg-white shadow-md h-full">
        <div className="p-2 sm:p-4 flex justify-between gap-2 items-center">
          <h2
            className={\`text-lg sm:text-xl font-semibold text-primary \${
              !isOpen && "hidden"
            }\`}
          >
            Dashboard
          </h2>
          <button
            onClick={toggleSideBar}
            className="bg-white text-blue-500 p-2 rounded-full shadow-md hover:bg-gray-100 focus:outline-none"
            aria-label={isOpen ? "Close sidebar" : "Open sidebar"}
          >
            {isOpen ? <ChevronLeft /> : <ChevronRight />}
          </button>
        </div>
        <nav className="p-2 sm:p-4">
          <motion.ul variants={parentVariants} className="space-y-2">
            {sidebarLinks.map((link) => (
              <motion.li
                whileHover={{ scale: 1.05 }}
                variants={childVariants}
                key={link.name}
              >
                <a
                  href={link.href}
                  className="flex gap-2 items-center p-2 text-gray-700 rounded-xl hover:bg-gray-200 text-sm sm:text-base"
                  title={!isOpen ? link.name : ""}
                >
                  {link.icon}
                  {isOpen && link.name}
                </a>
              </motion.li>
            ))}
          </motion.ul>
        </nav>
      </motion.nav>
    </motion.div>
  );
};

export default Sidebar;
  `.trim();

  const handleCopy = (): void => {
    navigator.clipboard.writeText(sidebarCode).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <div className="min-h-screen flex flex-col py-2 px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="mb-8 sm:mb-10">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold underline text-left mb-4 sm:mb-5">
          Sidebar Component
        </h1>
        <p className="text-sm sm:text-base lg:text-lg">
          A responsive sidebar with toggle animation
        </p>
      </div>

      {/* Tabs */}
      <div className="flex flex-wrap gap-4 mb-5 pb-5">
        <button
          className={`px-3 py-2 sm:px-6 sm:py-2 rounded-lg font-semibold text-white transition-colors ${
            activeTab === "demo"
              ? "bg-cyan-600"
              : "bg-gray-700 hover:bg-gray-600"
          }`}
          onClick={() => setActiveTab("demo")}
        >
          Preview
        </button>
        <button
          className={`px-3 py-2 sm:px-6 sm:py-2 rounded-lg font-semibold text-white transition-colors ${
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
            <SidebarDemo />
          </div>
        ) : (
          <div className="relative">
            <button
              className="absolute top-3 right-3 sm:right-5 px-2 py-1 sm:px-3 sm:py-2 bg-cyan-600 text-white rounded-lg font-semibold hover:bg-cyan-700 transition-colors flex items-center space-x-2 z-10"
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
              className="p-4 sm:p-6 rounded overflow-x-auto overflow-y-auto text-xs sm:text-sm max-h-[600px] border-2 bg-gray-800 text-white"
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
                }
                pre::-webkit-scrollbar-thumb {
                  background: #22d3ee;
                  border-radius: 10px;
                }
                pre::-webkit-scrollbar-thumb:hover {
                  background: #06b6d4;
                }
              `}</style>
              {sidebarCode}
            </pre>
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default SidebarComponent;
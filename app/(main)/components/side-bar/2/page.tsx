"use client";

/* eslint-disable react/prop-types */

import { useState, useRef, JSX } from "react";
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useSpring,
  useTransform,
  MotionValue,
} from "framer-motion";
import { Copy, Check } from "lucide-react";
import {
  IconBrandFacebook,
  IconBrandJavascript,
  IconBrandSnapchat,
  IconHome,
  IconBrandGithub,
} from "@tabler/icons-react";

// Interface for link objects
interface LinkItem {
  title: string;
  icon: JSX.Element;
  href: string;
}

// FloatDock Component (renamed from FloatDockCore)
const FloatDock: React.FC = () => {
  const mouseX = useMotionValue<number | typeof Infinity>(Infinity);

  const links: LinkItem[] = [
    { title: "Home", icon: <IconHome className="h-full w-full" />, href: "/" },
    {
      title: "Github",
      icon: <IconBrandGithub className="h-full w-full" />,
      href: "/",
    },
    {
      title: "Facebook",
      icon: <IconBrandFacebook className="h-full w-full" />,
      href: "/",
    },
    {
      title: "JavaScript",
      icon: <IconBrandJavascript className="h-full w-full" />,
      href: "/",
    },
    {
      title: "Snapchat",
      icon: <IconBrandSnapchat className="h-full w-full" />,
      href: "/",
    },
  ];

  return (
    <motion.div
      onMouseMove={(e: React.MouseEvent<HTMLDivElement>) => mouseX.set(e.pageX)}
      onMouseLeave={() => mouseX.set(Infinity)}
      className="rounded-lg px-2 sm:px-4 py-2 inset-x-0 mx-auto flex items-center gap-2 sm:gap-5 h-12 sm:h-16 bg-gradient-to-r from-purple-300 to-blue-500 w-fit max-w-full justify-center"
    >
      {links.map((ele) => (
        <IconContainer key={ele.title} mouseX={mouseX} ele={ele} />
      ))}
    </motion.div>
  );
};

// IconContainer Component
interface IconContainerProps {
  ele: LinkItem;
  mouseX: MotionValue<number | typeof Infinity>;
}

const IconContainer: React.FC<IconContainerProps> = ({ ele, mouseX }) => {
  const ref = useRef<HTMLDivElement>(null);
  const distance = useTransform(mouseX, (val: number) => {
    let bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return val - bounds.x - bounds.width / 2;
  });

  const widthTransform = useTransform(distance, [-150, 0, 150], [40, 80, 40]);
  const heightTransform = useTransform(distance, [-150, 0, 150], [40, 80, 40]);
  const widthTransformIcon = useTransform(
    distance,
    [-150, 0, 150],
    [20, 40, 20]
  );
  const heightTransformIcon = useTransform(
    distance,
    [-150, 0, 150],
    [20, 40, 20]
  );

  const width = useSpring(widthTransform, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });
  const height = useSpring(heightTransform, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });
  const widthIcon = useSpring(widthTransformIcon, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });
  const heightIcon = useSpring(heightTransformIcon, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });

  const [hover, setHover] = useState<boolean>(false);

  return (
    <a
      href={ele.href}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <motion.div
        ref={ref}
        style={{ width, height }}
        className="flex relative items-center justify-center rounded-full bg-neutral-300"
      >
        <AnimatePresence>
          {hover && (
            <motion.div
              initial={{ opacity: 0, y: -10 }} // Start above
              animate={{ opacity: 1, y: 0 }} // Move to final position
              exit={{ opacity: 0, y: -10 }} // Exit upward
              transition={{ duration: 0.2 }} // Smooth transition
              className="absolute px-2 py-0.5 whitespace-pre -top-8 bg-slate-200 rounded-lg text-xs sm:text-sm shadow-md"
            >
              {ele.title}
            </motion.div>
          )}
        </AnimatePresence>
        <motion.div
          style={{ width: widthIcon, height: heightIcon }}
          className="flex items-center justify-center"
        >
          {ele.icon}
        </motion.div>
      </motion.div>
    </a>
  );
};

// FloatDockDemo Component (replaces Prac)
const FloatDockDemo: React.FC = () => {
  return (
    <div className="flex justify-center p-10 rounded">
      <FloatDock />
    </div>
  );
};

// Tabbed FloatDockComponent
const FloatDockComponent: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"demo" | "code">("demo");
  const [copied, setCopied] = useState<boolean>(false);

  const floatDockCode: string = `
"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform, MotionValue } from "framer-motion";
import {
  IconBrandFacebook,
  IconBrandJavascript,
  IconBrandSnapchat,
  IconHome,
  IconBrandGithub,
} from "@tabler/icons-react";

interface LinkItem {
  title: string;
  icon: JSX.Element;
  href: string;
}

const FloatDock: React.FC = () => {
  const mouseX = useMotionValue<number | typeof Infinity>(Infinity);

  const links: LinkItem[] = [
    { title: "Home", icon: <IconHome className="h-full w-full" />, href: "/" },
    { title: "Github", icon: <IconBrandGithub className="h-full w-full" />, href: "/" },
    { title: "Facebook", icon: <IconBrandFacebook className="h-full w-full" />, href: "/" },
    { title: "JavaScript", icon: <IconBrandJavascript className="h-full w-full" />, href: "/" },
    { title: "Snapchat", icon: <IconBrandSnapchat className="h-full w-full" />, href: "/" },
  ];

  return (
    <motion.div
      onMouseMove={(e: React.MouseEvent<HTMLDivElement>) => mouseX.set(e.pageX)}
      onMouseLeave={() => mouseX.set(Infinity)}
      className="rounded-lg px-2 sm:px-4 py-2 inset-x-0 mx-auto flex items-center gap-2 sm:gap-5 h-12 sm:h-16 bg-gradient-to-r from-purple-300 to-blue-500 w-fit max-w-full justify-center"
    >
      {links.map((ele) => (
        <IconContainer key={ele.title} mouseX={mouseX} ele={ele} />
      ))}
    </motion.div>
  );
};

interface IconContainerProps {
  ele: LinkItem;
  mouseX: MotionValue<number | typeof Infinity>;
}

const IconContainer: React.FC<IconContainerProps> = ({ ele, mouseX }) => {
  const ref = useRef<HTMLDivElement>(null);
  const distance = useTransform(mouseX, (val: number) => {
    let bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return val - bounds.x - bounds.width / 2;
  });

  const widthTransform = useTransform(distance, [-150, 0, 150], [40, 80, 40]);
  const heightTransform = useTransform(distance, [-150, 0, 150], [40, 80, 40]);
  const widthTransformIcon = useTransform(distance, [-150, 0, 150], [20, 40, 20]);
  const heightTransformIcon = useTransform(distance, [-150, 0, 150], [20, 40, 20]);

  const width = useSpring(widthTransform, { mass: 0.1, stiffness: 150, damping: 12 });
  const height = useSpring(heightTransform, { mass: 0.1, stiffness: 150, damping: 12 });
  const widthIcon = useSpring(widthTransformIcon, { mass: 0.1, stiffness: 150, damping: 12 });
  const heightIcon = useSpring(heightTransformIcon, { mass: 0.1, stiffness: 150, damping: 12 });

  const [hover, setHover] = useState<boolean>(false);

  return (
    <a
      href={ele.href}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <motion.div
        ref={ref}
        style={{ width, height }}
        className="flex relative items-center justify-center rounded-full bg-neutral-300"
      >
        <AnimatePresence>
          {hover && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="absolute px-2 py-0.5 whitespace-pre -top-8 bg-slate-200 rounded-lg text-xs sm:text-sm shadow-md"
            >
              {ele.title}
            </motion.div>
          )}
        </AnimatePresence>
        <motion.div
          style={{ width: widthIcon, height: heightIcon }}
          className="flex items-center justify-center"
        >
          {ele.icon}
        </motion.div>
      </motion.div>
    </a>
  );
};

export default FloatDock;
  `.trim();

  const handleCopy = (): void => {
    navigator.clipboard.writeText(floatDockCode).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <div className="min-h-screen flex flex-col py-1 px-5">
      {/* Header */}
      <div className="mb-10">
        <h1 className="text-3xl sm:text-4xl font-bold underline text-left mb-5">
          Floating Dock Component
        </h1>
        <p className="text-base sm:text-lg">
          A responsive floating dock with magnetic hover effects and tooltips.
        </p>
      </div>

      {/* Tabs */}
      <div className="flex space-x-4 mb-5 pb-5">
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
            <FloatDockDemo />
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
            </button>
            <pre
              className="p-6 rounded overflow-x-auto overflow-y-auto text-xs sm:text-sm max-h-[600px] border-2"
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
              {floatDockCode}
            </pre>
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default FloatDockComponent;

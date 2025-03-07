"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Copy, Check } from "lucide-react";
import {
  BaseButton,
  IconButton,
  LoadingButton,
  GradientButton,
} from "./buttons"; // Import from a separate file

export default function ButtonShowcase() {
  const [activeTab, setActiveTab] = useState<"demo" | "code">("demo");
  const [copied, setCopied] = useState(false);

  const buttonCode = `
import React, { ReactNode } from "react";
import { motion } from "framer-motion";

type ButtonVariant = "primary" | "secondary" | "outline" | "ghost" | "danger";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  className?: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
  disabled?: boolean;
}

interface LoadingButtonProps extends ButtonProps {
  isLoading?: boolean;
}

const BaseButton: React.FC<ButtonProps> = ({ children, className = "", variant = "primary", size = "md", disabled = false, ...props }) => {
  const baseStyles = "inline-flex items-center justify-center font-medium rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2";
  const variants: Record<ButtonVariant, string> = {
    primary: "bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500",
    secondary: "bg-gray-200 text-gray-900 hover:bg-gray-300 focus:ring-gray-500",
    outline: "border border-gray-300 text-gray-700 hover:bg-gray-50 focus:ring-gray-500",
    ghost: "text-gray-700 hover:bg-gray-100 focus:ring-gray-500",
    danger: "bg-red-600 text-white hover:bg-red-700 focus:ring-red-500"
  };
  const sizes: Record<ButtonSize, string> = { sm: "px-2 py-1 text-xs sm:px-2.5 sm:py-1.5 sm:text-sm", md: "px-3 py-1.5 text-sm sm:px-4 sm:py-2 sm:text-base", lg: "px-4 py-2 text-base sm:px-6 sm:py-3 sm:text-lg" };
  const disabledStyles = "opacity-50 cursor-not-allowed";

  return (
    <button
      className={\`\${baseStyles} \${variants[variant]} \${sizes[size]} \${disabled ? disabledStyles : ""} \${className}\`}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};

// ... (other button components follow similar patterns)
  `.trim();

  const handleCopy = () => {
    navigator.clipboard.writeText(buttonCode).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <div className="min-h-screen flex flex-col py-4 sm:py-1 px-4 sm:px-5 lg:px-8 ">
      {/* Header */}
      <div className="mb-6 sm:mb-10">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold underline text-left mb-3 sm:mb-5">
          Button Components
        </h1>
        <p className="text-sm sm:text-base md:text-lg max-w-2xl">
          A collection of reusable button components with various styles and
          features.
        </p>
      </div>

      {/* Tabs */}
      <div className="flex flex-wrap gap-2 sm:gap-4 mb-4 sm:mb-5 pb-4 sm:pb-5">
        <button
          className={`px-4 py-1.5 sm:px-6 sm:py-2 rounded-lg font-semibold transition-colors text-sm sm:text-base ${
            activeTab === "demo"
              ? "bg-cyan-600 text-white"
              : "bg-gray-700 text-white hover:bg-gray-600"
          }`}
          onClick={() => setActiveTab("demo")}
        >
          Preview
        </button>
        <button
          className={`px-4 py-1.5 sm:px-6 sm:py-2 rounded-lg font-semibold transition-colors text-sm sm:text-base ${
            activeTab === "code"
              ? "bg-cyan-600 text-white"
              : "bg-gray-700 text-white hover:bg-gray-600"
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
          <div className="grid gap-4 sm:gap-6 border-2 border-b-0 p-4 sm:p-5">
            <div className="space-y-3 sm:space-y-4">
              <h3 className="text-lg sm:text-xl md:text-2xl font-semibold">
                Base Buttons
              </h3>
              <div className="flex flex-wrap gap-2 sm:gap-4">
                <BaseButton>Primary</BaseButton>
                <BaseButton variant="secondary">Secondary</BaseButton>
                <BaseButton variant="outline">Outline</BaseButton>
                <BaseButton variant="ghost">Ghost</BaseButton>
                <BaseButton variant="danger">Danger</BaseButton>
              </div>
            </div>

            <div className="space-y-3 sm:space-y-4">
              <h3 className="text-lg sm:text-xl md:text-2xl font-semibold">
                Sizes
              </h3>
              <div className="flex flex-wrap gap-2 sm:gap-4">
                <BaseButton size="sm">Small</BaseButton>
                <BaseButton size="md">Medium</BaseButton>
                <BaseButton size="lg">Large</BaseButton>
              </div>
            </div>

            <div className="space-y-3 sm:space-y-4">
              <h3 className="text-lg sm:text-xl md:text-2xl font-semibold">
                Special Buttons
              </h3>
              <div className="flex flex-wrap gap-2 sm:gap-4">
                <IconButton>With Icon</IconButton>
                <LoadingButton isLoading>Loading</LoadingButton>
                <GradientButton>Gradient</GradientButton>
                <BaseButton disabled>Disabled</BaseButton>
              </div>
            </div>
          </div>
        ) : (
          <div className="relative">
            <button
              className="absolute top-2 sm:top-3 right-2 sm:right-5 px-2 py-1 sm:px-3 sm:py-2 bg-cyan-600 text-white rounded font-semibold hover:bg-cyan-700 transition-colors flex items-center space-x-1 sm:space-x-2 z-10 text-xs sm:text-sm"
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
              {/* <span>{copied ? "Copied" : "Copy"}</span> */}
            </button>
            <pre
              className="text-gray-800 dark:text-gray-200 p-4 sm:p-6 rounded overflow-x-auto overflow-y-auto text-xs sm:text-sm md:text-base max-h-[500px] sm:max-h-[600px] border-2"
              style={{
                scrollbarWidth: "thin" as const,
                scrollbarColor: "#22d3ee #1e293b",
              }}
            >
              <style jsx>{`
                pre::-webkit-scrollbar {
                  width: 8px sm:10px;
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
              {buttonCode}
            </pre>
          </div>
        )}
      </motion.div>
    </div>
  );
}

"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Copy, Check, Eye, EyeOff } from "lucide-react";

// AnimatedAuthTabs Component
interface FormData {
  email: string;
  password: string;
  username?: string;
}

const AnimatedAuthTabs: React.FC = () => {
  const [activeForm, setActiveForm] = useState<"login" | "signup">("login");
  const [formData, setFormData] = useState<FormData>({ email: "", password: "", username: "" });
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(`${activeForm} data:`, formData);
  };

  return (
    <div className="w-80 sm:w-96 bg-white rounded-lg shadow-md p-6">
      {/* Tabs */}
      <div className="flex justify-center mb-6">
        <motion.button
          className={`px-4 py-2 rounded-t-lg font-semibold ${
            activeForm === "login" ? "bg-cyan-600 text-white" : "bg-gray-200 text-gray-700"
          }`}
          onClick={() => setActiveForm("login")}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Login
        </motion.button>
        <motion.button
          className={`px-4 py-2 rounded-t-lg font-semibold ${
            activeForm === "signup" ? "bg-cyan-600 text-white" : "bg-gray-200 text-gray-700"
          }`}
          onClick={() => setActiveForm("signup")}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Signup
        </motion.button>
      </div>

      {/* Form */}
      <AnimatePresence mode="wait">
        <motion.form
          key={activeForm}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.3 }}
          onSubmit={handleSubmit}
          className="space-y-4"
        >
          {activeForm === "signup" && (
            <div>
              <label className="block text-gray-700 font-medium mb-1">Username</label>
              <input
                type="text"
                value={formData.username}
                onChange={(e) => setFormData({ ...formData, username: e.target.value })}
                className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
                placeholder="Enter username"
                required
              />
            </div>
          )}
          <div>
            <label className="block text-gray-700 font-medium mb-1">Email</label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
              placeholder="Enter email"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-1">Password</label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
                placeholder="Enter password"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500"
              >
                {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
            </div>
          </div>
          <motion.button
            type="submit"
            className="w-full py-2 bg-cyan-600 text-white rounded-lg font-semibold"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {activeForm === "login" ? "Login" : "Signup"}
          </motion.button>
        </motion.form>
      </AnimatePresence>
    </div>
  );
};

// AuthTabsDemo Component
const AuthTabsDemo: React.FC = () => {
  return (
    <section className="grid place-content-center rounded px-8 py-10">
      <AnimatedAuthTabs />
    </section>
  );
};

// Tabbed AnimatedAuthTabsComponent
const AnimatedAuthTabsComponent: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"demo" | "code">("demo");
  const [copied, setCopied] = useState(false);

  const animatedAuthTabsCode = `
"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Eye, EyeOff } from "lucide-react";

interface FormData {
  email: string;
  password: string;
  username?: string;
}

const AnimatedAuthTabs: React.FC = () => {
  const [activeForm, setActiveForm] = useState<"login" | "signup">("login");
  const [formData, setFormData] = useState<FormData>({ email: "", password: "", username: "" });
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(\`\${activeForm} data:\`, formData);
  };

  return (
    <div className="w-96 bg-white rounded-lg shadow-md p-6">
      <div className="flex justify-center mb-6">
        <motion.button
          className={\`px-4 py-2 rounded-t-lg font-semibold \${
            activeForm === "login" ? "bg-cyan-600 text-white" : "bg-gray-200 text-gray-700"
          }\`}
          onClick={() => setActiveForm("login")}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Login
        </motion.button>
        <motion.button
          className={\`px-4 py-2 rounded-t-lg font-semibold \${
            activeForm === "signup" ? "bg-cyan-600 text-white" : "bg-gray-200 text-gray-700"
          }\`}
          onClick={() => setActiveForm("signup")}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Signup
        </motion.button>
      </div>
      <AnimatePresence mode="wait">
        <motion.form
          key={activeForm}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.3 }}
          onSubmit={handleSubmit}
          className="space-y-4"
        >
          {activeForm === "signup" && (
            <div>
              <label className="block text-gray-700 font-medium mb-1">Username</label>
              <input
                type="text"
                value={formData.username}
                onChange={(e) => setFormData({ ...formData, username: e.target.value })}
                className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
                placeholder="Enter username"
                required
              />
            </div>
          )}
          <div>
            <label className="block text-gray-700 font-medium mb-1">Email</label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
              placeholder="Enter email"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-1">Password</label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
                placeholder="Enter password"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500"
              >
                {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
            </div>
          </div>
          <motion.button
            type="submit"
            className="w-full py-2 bg-cyan-600 text-white rounded-lg font-semibold"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {activeForm === "login" ? "Login" : "Signup"}
          </motion.button>
        </motion.form>
      </AnimatePresence>
    </div>
  );
};

export default AnimatedAuthTabs;
  `.trim();

  const handleCopy = () => {
    navigator.clipboard.writeText(animatedAuthTabsCode).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <div className="min-h-screen flex flex-col py-1 px-5">
      {/* Header */}
      <div className="mb-10">
        <h1 className="text-4xl font-bold underline text-left mb-5">
          Animated AuthForm Component
        </h1>
        <p className="text-lg">
          A tabbed login/signup form with smooth transitions and password visibility toggle.
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
            <AuthTabsDemo />
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
              {animatedAuthTabsCode}
            </pre>
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default AnimatedAuthTabsComponent;
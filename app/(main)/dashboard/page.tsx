"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X, User, Activity, Settings, LogOut } from "lucide-react";
import Link from "next/link";

const DashboardPage: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Mock user data
  const user = {
    name: "John Doe",
    email: "john.doe@example.com",
    stats: {
      projects: 12,
      tasks: 45,
      completed: 30,
    },
    recentActivity: [
      { id: 1, action: "Completed Task: Design Review", date: "2025-02-28" },
      { id: 2, action: "Started Project: Website Redesign", date: "2025-02-27" },
    ],
  };

  // Sidebar Navigation Items
  const navItems = [
    { icon: <User className="w-5 h-5" />, label: "Profile", href: "/dashboard/profile" },
    { icon: <Activity className="w-5 h-5" />, label: "Activity", href: "/dashboard/activity" },
    { icon: <Settings className="w-5 h-5" />, label: "Settings", href: "/dashboard/settings" },
    { icon: <LogOut className="w-5 h-5" />, label: "Logout", href: "/logout" },
  ];

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      {/* Header */}
      <header className="bg-gray-800 text-white p-4 flex justify-between items-center">
        <h1 className="text-xl sm:text-2xl font-bold">Dashboard</h1>
        <button
          className="lg:hidden p-2 focus:outline-none"
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        >
          {isSidebarOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </header>

      <div className="flex flex-1 flex-col lg:flex-row">
        {/* Sidebar */}
        <motion.aside
          className={`bg-gray-800 text-white w-full lg:w-64 fixed lg:static top-0 left-0 h-full z-50 lg:z-0 transform ${
            isSidebarOpen ? "translate-x-0" : "-translate-x-full"
          } lg:translate-x-0 transition-transform duration-300 ease-in-out`}
          initial={{ x: "-100%" }}
          animate={{ x: isSidebarOpen ? 0 : "-100%" }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        >
          <div className="p-4 border-b border-gray-700">
            <h2 className="text-lg font-semibold">{user.name}</h2>
            <p className="text-sm text-gray-400">{user.email}</p>
          </div>
          <nav className="p-4">
            <ul className="space-y-2">
              {navItems.map((item, index) => (
                <li key={index}>
                  <Link
                    href={item.href}
                    className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-700 transition-colors"
                    onClick={() => setIsSidebarOpen(false)}
                  >
                    {item.icon}
                    <span>{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </motion.aside>

        {/* Overlay for mobile sidebar */}
        {isSidebarOpen && (
          <div
            className="fixed inset-0 bg-black/50 z-40 lg:hidden"
            onClick={() => setIsSidebarOpen(false)}
          />
        )}

        {/* Main Content */}
        <main className="flex-1 p-4 sm:p-6 lg:p-8">
          <div className="max-w-7xl mx-auto space-y-6">
            {/* Stats Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <motion.div
                className="bg-white p-4 rounded-lg shadow-md"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
              >
                <h3 className="text-lg font-semibold text-gray-800">Projects</h3>
                <p className="text-2xl font-bold text-cyan-600">{user.stats.projects}</p>
              </motion.div>
              <motion.div
                className="bg-white p-4 rounded-lg shadow-md"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <h3 className="text-lg font-semibold text-gray-800">Tasks</h3>
                <p className="text-2xl font-bold text-cyan-600">{user.stats.tasks}</p>
              </motion.div>
              <motion.div
                className="bg-white p-4 rounded-lg shadow-md"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <h3 className="text-lg font-semibold text-gray-800">Completed</h3>
                <p className="text-2xl font-bold text-cyan-600">{user.stats.completed}</p>
              </motion.div>
            </div>

            {/* Recent Activity */}
            <motion.div
              className="bg-white p-4 sm:p-6 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-4">Recent Activity</h3>
              <ul className="space-y-3">
                {user.recentActivity.map((activity) => (
                  <li
                    key={activity.id}
                    className="flex flex-col sm:flex-row justify-between text-sm sm:text-base text-gray-600"
                  >
                    <span>{activity.action}</span>
                    <span className="text-gray-500">{activity.date}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default DashboardPage;
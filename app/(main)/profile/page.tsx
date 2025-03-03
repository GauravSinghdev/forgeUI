"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { AvatarFallback } from "@radix-ui/react-avatar";
import { updateProfile, changePassword } from "./action"; // Server actions import
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import { Edit, Save, X } from "lucide-react";

const ProfilePage: React.FC = () => {
  const { data: session, status } = useSession();
  const [activeTab, setActiveTab] = useState<"profile" | "password">("profile");
  const [isEditingProfile, setIsEditingProfile] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    avatarUrl: "",
  });
  const [passwordData, setPasswordData] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch initial user data from session
  useEffect(() => {
    if (status === "unauthenticated") {
      redirect("/login");
    } else if (status === "authenticated" && session?.user) {
      setFormData({
        name: session.user.name || "",
        email: session.user.email || "",
        avatarUrl: session.user.image || "",
      });
      setLoading(false);
    }
  }, [session, status]);

  const handleEditProfileToggle = () => {
    if (isEditingProfile) {
      setFormData({
        name: session?.user?.name || "",
        email: session?.user?.email || "",
        avatarUrl: session?.user?.image || "",
      });
    }
    setIsEditingProfile(!isEditingProfile);
    setError(null);
  };

  const handleProfileSave = async () => {
    setLoading(true);
    setError(null);
    try {
      const result = await updateProfile(formData);
      if (result.success) {
        setIsEditingProfile(false);
      } else {
        setError(result.error || "Failed to update profile");
      }
    } catch (err) {
      setError("An unexpected error occurred");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handlePasswordSave = async () => {
    if (passwordData.newPassword !== passwordData.confirmPassword) {
      setError("New password and confirmation do not match");
      return;
    }
    setLoading(true);
    setError(null);
    try {
      const result = await changePassword(passwordData.currentPassword, passwordData.newPassword);
      if (result.success) {
        setPasswordData({ currentPassword: "", newPassword: "", confirmPassword: "" });
        setActiveTab("profile"); // Switch back to profile tab
      } else {
        setError(result.error || "Failed to change password");
      }
    } catch (err) {
      setError("An unexpected error occurred");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleProfileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPasswordData({ ...passwordData, [e.target.name]: e.target.value });
  };

  if (loading && status === "loading") {
    return <div className="flex justify-center items-center min-h-screen">Loading...</div>;
  }

  const isCredentialsProvider = session?.user?.provider === "Credentials";

  return (
    <>
      <div className="flex flex-col min-h-screen bg-gray-100">
        <div className="flex-grow max-w-5xl mx-auto p-4 sm:p-6 lg:p-8">
          {/* Header with Tabs */}
          <motion.div
            className="bg-white rounded-lg shadow-md p-4 sm:p-6 mb-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
              <Avatar className="size-16 sm:size-20 rounded">
                <AvatarImage src={formData.avatarUrl || "https://github.com/shadcn.png"} />
                <AvatarFallback>{formData.name?.[0] || "?"}</AvatarFallback>
              </Avatar>
              <div className="text-center sm:text-left">
                <h1 className="text-xl sm:text-2xl font-bold text-gray-800">{formData.name}</h1>
                <p className="text-sm sm:text-base text-gray-500">{formData.email}</p>
              </div>
            </div>
            <div className="flex justify-center sm:justify-start gap-4 mt-4">
              <button
                className={`px-4 py-2 rounded-lg font-semibold transition-colors ${
                  activeTab === "profile" ? "bg-cyan-600 text-white" : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
                onClick={() => setActiveTab("profile")}
              >
                Profile
              </button>
              {isCredentialsProvider && (
                <button
                  className={`px-4 py-2 rounded-lg font-semibold transition-colors ${
                    activeTab === "password" ? "bg-cyan-600 text-white" : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                  }`}
                  onClick={() => setActiveTab("password")}
                >
                  Password
                </button>
              )}
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            className="grid grid-cols-1 gap-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            {activeTab === "profile" ? (
              <div className="bg-white rounded-lg shadow-md p-4 sm:p-6">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-lg sm:text-xl font-semibold text-gray-800">Profile Details</h2>
                  {!isEditingProfile && (
                    <Edit
                      stroke={'2'}
                      className="cursor-pointer text-cyan-600 hover:text-cyan-700 w-5 h-5 sm:w-6 sm:h-6"
                      onClick={handleEditProfileToggle}
                    />
                  )}
                </div>
                {error && <p className="text-red-500 text-sm sm:text-base mb-4">{error}</p>}
                {isEditingProfile ? (
                  <form onSubmit={(e) => { e.preventDefault(); handleProfileSave(); }} className="space-y-4">
                    <div>
                      <label className="block text-sm sm:text-base font-medium text-gray-700">Name</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleProfileChange}
                        className="mt-1 w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 text-sm sm:text-base"
                        placeholder="Enter your name"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm sm:text-base font-medium text-gray-700">Email</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleProfileChange}
                        className="mt-1 w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 text-sm sm:text-base"
                        placeholder="Enter your email"
                        required
                        disabled={!isCredentialsProvider}
                      />
                    </div>
                    <div className="flex justify-end gap-2">
                      <motion.button
                        type="button"
                        onClick={handleEditProfileToggle}
                        className="px-4 py-2 bg-gray-500 text-white rounded-lg font-semibold hover:bg-gray-600 flex items-center gap-2"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        disabled={loading}
                      >
                        <X stroke={'2'} className="w-4 h-4 sm:w-5 sm:h-5" />
                        Cancel
                      </motion.button>
                      <motion.button
                        type="submit"
                        className="px-4 py-2 bg-cyan-600 text-white rounded-lg font-semibold hover:bg-cyan-700 flex items-center gap-2"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        disabled={loading}
                      >
                        <Save stroke={'2'} className="w-4 h-4 sm:w-5 sm:h-5" />
                        {loading ? "Saving..." : "Save"}
                      </motion.button>
                    </div>
                  </form>
                ) : (
                  <div className="space-y-4">
                    <motion.div
                      className="flex justify-between items-center p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                      whileHover={{ scale: 1.02 }}
                    >
                      <span className="text-sm sm:text-base font-medium text-gray-700">Name</span>
                      <span className="text-sm sm:text-base text-gray-800">{formData.name}</span>
                    </motion.div>
                    <motion.div
                      className="flex justify-between items-center p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                      whileHover={{ scale: 1.02 }}
                    >
                      <span className="text-sm sm:text-base font-medium text-gray-700">Email</span>
                      <span className="text-sm sm:text-base text-gray-800">{formData.email}</span>
                    </motion.div>
                  </div>
                )}
              </div>
            ) : (
              <div className="bg-white rounded-lg shadow-md p-4 sm:p-6">
                <h2 className="text-lg sm:text-xl font-semibold text-gray-800 mb-4">Change Password</h2>
                {error && <p className="text-red-500 text-sm sm:text-base mb-4">{error}</p>}
                <form onSubmit={(e) => { e.preventDefault(); handlePasswordSave(); }} className="space-y-4">
                  <div>
                    <label className="block text-sm sm:text-base font-medium text-gray-700">Current Password</label>
                    <input
                      type="password"
                      name="currentPassword"
                      value={passwordData.currentPassword}
                      onChange={handlePasswordChange}
                      className="mt-1 w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 text-sm sm:text-base"
                      placeholder="Enter current password"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm sm:text-base font-medium text-gray-700">New Password</label>
                    <input
                      type="password"
                      name="newPassword"
                      value={passwordData.newPassword}
                      onChange={handlePasswordChange}
                      className="mt-1 w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 text-sm sm:text-base"
                      placeholder="Enter new password"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm sm:text-base font-medium text-gray-700">Confirm New Password</label>
                    <input
                      type="password"
                      name="confirmPassword"
                      value={passwordData.confirmPassword}
                      onChange={handlePasswordChange}
                      className="mt-1 w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 text-sm sm:text-base"
                      placeholder="Confirm new password"
                      required
                    />
                  </div>
                  <div className="flex justify-end gap-2">
                    <motion.button
                      type="button"
                      onClick={() => setActiveTab("profile")}
                      className="px-4 py-2 bg-gray-500 text-white rounded-lg font-semibold hover:bg-gray-600 flex items-center gap-2"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      disabled={loading}
                    >
                      <X stroke={'2'} className="w-4 h-4 sm:w-5 sm:h-5" />
                      Cancel
                    </motion.button>
                    <motion.button
                      type="submit"
                      className="px-4 py-2 bg-cyan-600 text-white rounded-lg font-semibold hover:bg-cyan-700 flex items-center gap-2"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      disabled={loading}
                    >
                      <Save stroke={'2'} className="w-4 h-4 sm:w-5 sm:h-5" />
                      {loading ? "Saving..." : "Save"}
                    </motion.button>
                  </div>
                </form>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default ProfilePage;
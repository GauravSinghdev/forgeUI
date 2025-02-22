import React, { ReactNode } from "react";
import { motion } from "framer-motion";

// Define types
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

// Base Button Component
export const BaseButton: React.FC<ButtonProps> = ({
  children,
  className = "",
  variant = "primary",
  size = "md",
  disabled = false,
  ...props
}) => {
  const baseStyles =
    "inline-flex items-center justify-center font-medium rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2";
  const variants: Record<ButtonVariant, string> = {
    primary: "bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500",
    secondary: "bg-gray-200 text-gray-900 hover:bg-gray-300 focus:ring-gray-500",
    outline: "border border-gray-300 text-gray-700 hover:bg-gray-50 focus:ring-gray-500",
    ghost: "text-gray-700 hover:bg-gray-100 focus:ring-gray-500",
    danger: "bg-red-600 text-white hover:bg-red-700 focus:ring-red-500",
  };
  const sizes: Record<ButtonSize, string> = {
    sm: "px-2 py-1 text-xs sm:px-2.5 sm:py-1.5 sm:text-sm",
    md: "px-3 py-1.5 text-sm sm:px-4 sm:py-2 sm:text-base",
    lg: "px-4 py-2 text-base sm:px-6 sm:py-3 sm:text-lg",
  };
  const disabledStyles = "opacity-50 cursor-not-allowed";

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${disabled ? disabledStyles : ""} ${className}`}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};

// Animated Button
export const AnimatedButton: React.FC<ButtonProps> = ({ children, ...props }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      <BaseButton {...props}>{children}</BaseButton>
    </motion.div>
  );
};

// Icon Button
export const IconButton: React.FC<ButtonProps> = ({ children, ...props }) => {
  return (
    <AnimatedButton {...props}>
      <svg
        className="w-4 h-4 sm:w-5 sm:h-5 mr-1 sm:mr-2"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
      </svg>
      {children}
    </AnimatedButton>
  );
};

// Loading Button
export const LoadingButton: React.FC<LoadingButtonProps> = ({
  isLoading = false,
  children,
  ...props
}) => {
  return (
    <AnimatedButton {...props} disabled={isLoading || props.disabled}>
      {isLoading ? (
        <span className="flex items-center">
          <svg
            className="animate-spin -ml-1 mr-2 h-4 w-4 sm:h-5 sm:w-5"
            viewBox="0 0 24 24"
          >
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
          {children}
        </span>
      ) : (
        children
      )}
    </AnimatedButton>
  );
};

// Gradient Button
export const GradientButton: React.FC<ButtonProps> = ({
  children,
  className = "",
  ...props
}) => {
  return (
    <AnimatedButton
      className={`bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:from-purple-600 hover:to-pink-600 ${className}`}
      {...props}
    >
      {children}
    </AnimatedButton>
  );
};
"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card"; // Adjust import based on your setup
import { Button } from "@/components/ui/button"; // Adjust import based on your setup

// Sample tiers data (assuming it's defined elsewhere; included here for completeness)
const tiers = [
  {
    name: "Basic",
    price: "$9",
    description: "Perfect for individuals starting out",
    features: ["1 User", "5 Projects", "Basic Support"],
    featured: false,
  },
  {
    name: "Pro",
    price: "$29",
    description: "Ideal for growing teams",
    features: ["5 Users", "Unlimited Projects", "Priority Support"],
    featured: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "Tailored for large organizations",
    features: ["Unlimited Users", "Custom Solutions", "24/7 Support"],
    featured: false,
  },
];

export default function PricingComponent() {
  return (
    <div className="py-6 sm:py-12 md:py-16 lg:py-20 xl:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
            Simple, transparent pricing
          </h2>
          <p className="mt-2 sm:mt-4 text-base sm:text-lg md:text-xl text-gray-500 dark:text-gray-300">
            Choose the plan that&apos;s right for you
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="mt-8 sm:mt-12 md:mt-16 grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-10">
          {tiers.map((tier) => (
            <motion.div
              whileHover={{
                scale: 1.05, // Slightly reduced scale for mobile
                opacity: 0.9,
              }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 20,
              }}
              className="cursor-pointer w-full"
              key={tier.name}
            >
              <Card
                className={`flex flex-col justify-between h-full ${
                  tier.featured
                    ? "bg-gradient-to-br from-blue-500 to-purple-600 text-white"
                    : "bg-white dark:bg-gray-800"
                }`}
              >
                <CardHeader>
                  <CardTitle
                    className={`text-xl sm:text-2xl font-bold ${
                      tier.featured
                        ? "text-white"
                        : "text-gray-900 dark:text-white"
                    }`}
                  >
                    {tier.name}
                  </CardTitle>
                  <CardDescription
                    className={`text-3xl sm:text-4xl font-extrabold mt-2 sm:mt-4 ${
                      tier.featured
                        ? "text-white"
                        : "text-gray-900 dark:text-white"
                    }`}
                  >
                    {tier.price}
                    {tier.name !== "Enterprise" && (
                      <span className="text-lg sm:text-xl font-normal">
                        /month
                      </span>
                    )}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p
                    className={`mt-3 sm:mt-4 text-sm sm:text-base ${
                      tier.featured
                        ? "text-blue-100"
                        : "text-gray-500 dark:text-gray-300"
                    }`}
                  >
                    {tier.description}
                  </p>
                  <ul className="mt-4 sm:mt-6 space-y-3 sm:space-y-4">
                    {tier.features.map((feature) => (
                      <li key={feature} className="flex items-start">
                        <Check
                          className={`h-5 w-5 sm:h-6 sm:w-6 flex-shrink-0 ${
                            tier.featured ? "text-blue-200" : "text-green-500"
                          }`}
                        />
                        <span
                          className={`ml-2 sm:ml-3 text-sm sm:text-base ${
                            tier.featured
                              ? "text-white"
                              : "text-gray-700 dark:text-gray-200"
                          }`}
                        >
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button
                    className={`w-full text-sm sm:text-base py-2 sm:py-3 ${
                      tier.featured
                        ? "bg-white text-blue-600 hover:bg-blue-50"
                        : "bg-gray-900 text-white hover:bg-gray-800 dark:bg-gray-700 dark:hover:bg-gray-600"
                    }`}
                    variant={tier.featured ? "default" : "outline"}
                  >
                    {tier.name === "Enterprise"
                      ? "Contact Sales"
                      : "Get Started"}
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

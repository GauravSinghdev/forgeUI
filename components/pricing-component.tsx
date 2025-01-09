"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";

const tiers = [
  {
    name: "Free",
    price: "$0",
    description: "Essential features for small teams",
    features: [
      "Up to 5 users",
      "10GB storage",
      "Basic support",
      "Free components",
      "API access",
    ],
  },
  {
    name: "Pro",
    price: "$29",
    description: "Advanced features for growing businesses",
    features: [
      "Up to 20 users",
      "50GB storage",
      "Priority support",
      "Advanced analytics",
      "Custom integrations",
    ],
    featured: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "Tailored solutions for large organizations",
    features: [
      "Unlimited users",
      "Unlimited storage",
      "24/7 dedicated support",
      "Advanced security",
      "Custom development",
    ],
  },
];

export default function PricingComponent() {
  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">
            Simple, transparent pricing
          </h2>
          <p className="mt-4 text-xl text-gray-500 dark:text-gray-300">
            {`Choose the plan that's right for you`}
          </p>
        </div>
        <div className="mt-16 grid gap-8 lg:grid-cols-3 lg:gap-x-10">
          {tiers.map((tier) => (
            <motion.div
              whileHover={{
                scale: 1.1,
                opacity: 0.9, // Optional opacity change
              }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 20, // Adjust damping to control the bounciness
              }}
              className="cursor-pointer"
              key={tier.name}
            >
              <Card
                className={`flex flex-col justify-between ${
                  tier.featured
                    ? " bg-gradient-to-br from-blue-500 to-purple-600 text-white"
                    : ""
                }`}
              >
                <CardHeader>
                  <CardTitle
                    className={`text-2xl font-bold ${
                      tier.featured ? "text-white" : ""
                    }`}
                  >
                    {tier.name}
                  </CardTitle>
                  <CardDescription
                    className={`text-4xl font-extrabold mt-4 ${
                      tier.featured ? "text-white" : ""
                    }`}
                  >
                    {tier.price}
                    {tier.name !== "Enterprise" && (
                      <span className="text-xl font-normal">/month</span>
                    )}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p
                    className={`mt-4 ${
                      tier.featured ? "text-blue-100" : "text-gray-500"
                    }`}
                  >
                    {tier.description}
                  </p>
                  <ul className="mt-6 space-y-4">
                    {tier.features.map((feature) => (
                      <li key={feature} className="flex items-start">
                        <Check
                          className={`h-6 w-6 flex-shrink-0 ${
                            tier.featured ? "text-blue-200" : "text-green-500"
                          }`}
                        />
                        <span
                          className={`ml-3 ${
                            tier.featured ? "text-white" : "text-gray-700"
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
                    className={`w-full ${
                      tier.featured
                        ? "bg-white text-blue-600 hover:bg-blue-50"
                        : ""
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

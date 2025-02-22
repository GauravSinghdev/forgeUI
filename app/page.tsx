import { Accordion } from "@/components/Accordian";
import CodeMotion from "@/components/motion/CodeMotion";
import HeroSecHead from "@/components/motion/head1";
import HeroBtns from "@/components/motion/HeroBtns";
import HeroSecPara from "@/components/motion/para1";
import PricingComponent from "@/components/pricing-component";
import { CheckCircle, Star } from "lucide-react";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      <main className="flex-grow max-w-7xl mx-auto p-2 px-5"> 
        {/* Hero Section */}
        <section className="w-full py-12 md:py-16 lg:py-20 xl:py-24 bg-background">
          <div className="container">
            <div className="grid gap-20 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              {/* leftside compo */}
              <div className="flex flex-col justify-center space-y-10">
                <div className="space-y-5">
                  <HeroSecHead />
                  <HeroSecPara />
                </div>
                <HeroBtns />
              </div>
              {/* rightside compo */}
              <div className="lg:flex items-center justify-center hidden">
                <div className="relative w-[100px] h-[100px] sm:w-[350px] sm:h-[350px] md:w-[400px] md:h-[400px]  rounded-xl">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary-foreground rounded-full blur-2xl opacity-50"></div>
                  <CodeMotion />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-10 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-muted/50 rounded-xl">
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-10 md:mb-12">
          Powerful Features
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {[
            "Responsive Design",
            "Customizable Components",
            "Dark Mode Support",
            "Accessibility Ready",
            "Performance Optimized",
            "Developer Friendly",
          ].map((feature, index) => (
            <div
              key={index}
              className="flex items-center space-x-2 sm:space-x-3 bg-background p-3 sm:p-4 lg:p-5 rounded-lg shadow-sm text-sm sm:text-base md:text-lg"
            >
              <CheckCircle className="h-5 w-5 sm:h-6 sm:w-6 text-primary flex-shrink-0" />
              <span>{feature}</span>
            </div>
          ))}
        </div>
      </div>
    </section>

        <PricingComponent />

        {/* Testimonials Section */}
        <section id="testimonials" className="py-20 px-6">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              What Our Users Say
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  name: "Alex Johnson",
                  role: "Frontend Developer",
                  content:
                    "Acertenity has revolutionized our design process. It's intuitive and powerful.",
                },
                {
                  name: "Sarah Lee",
                  role: "UX Designer",
                  content:
                    "The component library is extensive and well-documented. A real time-saver!",
                },
                {
                  name: "Mike Brown",
                  role: "Product Manager",
                  content:
                    "Our team's productivity has skyrocketed since we started using Acertenity.",
                },
              ].map((testimonial, index) => (
                <div key={index} className="bg-muted p-6 rounded-lg shadow-sm">
                  <div className="flex items-center space-x-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-5 w-5 fill-primary text-primary"
                      />
                    ))}
                  </div>
                  <p className="mb-4">{testimonial.content}</p>
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">
                    {testimonial.role}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="py-20 px-6 bg-muted/50 rounded-xl">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              Frequently Asked Questions
            </h2>
            <div className="max-w-3xl mx-auto">
              <Accordion
                items={[
                  {
                    title: "What is Forge UI?",
                    content:
                      "Forge UI is a modern, responsive UI component library designed to help developers and designers create beautiful web applications quickly and efficiently.",
                  },
                  {
                    title: "Is Forge UI free to use?",
                    content:
                      "We offer both free and premium plans. Our free plan includes a wide range of components and features to get you started, while our premium plans offer additional advanced components, priority support, and commercial usage rights.",
                  },
                  {
                    title: "Do I need to know React to use Forge UI?",
                    content:
                      "While Forge UI is built with React, we provide comprehensive documentation and examples that make it accessible even for those new to React. However, basic knowledge of React will help you get the most out of our library.",
                  },
                  {
                    title: "Can I customize the components to match my brand?",
                    content:
                      "All of our components are highly customizable. You can easily modify colors, fonts, and other properties to align with your brand guidelines and design preferences.",
                  },
                  {
                    title: "Is Forge UI accessible?",
                    content:
                      "Yes, accessibility is a core focus of Forge UI. Our components are built with WCAG guidelines in mind, ensuring that your applications are usable by as many people as possible.",
                  },
                ]}
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

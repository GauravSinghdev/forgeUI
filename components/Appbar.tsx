import Link from "next/link";
import { ModeToggle } from "./ModeToggle";
// import { UserBtn } from "./UserBtn";
import { Shapes } from "lucide-react";

export async function Appbar() {
  const navLinks = [
    { href: "/components", label: "Components" },
    { href: "/pricing", label: "Pricing" },
    // {
    //   href: "/my-links",
    //   label: "My Links",
    //   badge: "new",
    // },
    // { href: "#testimonials", label: "Testimonials" },
    // { href: "#faq", label: "FAQ" },
  ];

  const socialLinks = [
    {
      href: "https://x.com/codewithkara",
      label: "Twitter",
      target: "_blank",
    },
    {
      href: "https://github.com/GauravSinghdev",
      label: "Github",
      target: "_blank",
    },
  ];

  return (
    <header className="py-3 px-2 sm:px-6 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 w-full border-b border-border/40">
      <div className="container px-5 flex items-center justify-between max-w-7xl mx-auto">
        <div className="flex gap-10 sm:gap-20 items-center">
          <Link href="/" className="flex items-center space-x-2">
            <div className="border-2 rounded border-primary p-1">
              <Shapes className="text-primary" />
            </div>
            <span className="font-bold text-2xl text-primary tracking-wide">
              Forge UI
            </span>
          </Link>
          <nav className="hidden md:flex items-center space-x-6 text-sm">
            {navLinks.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                className="text-foreground/80 hover:text-foreground transition-colors flex gap-2 items-center"
              >
                {link.label}
                {/* {link.badge && (
                  <span className="px-2 py-0.5 bg-primary rounded text-xs">
                    {link.badge}
                  </span>
                )} */}
              </Link>
            ))}
          </nav>
        </div>
        <div className="flex items-center gap-10">
          <div className="hidden md:flex gap-5">
            {socialLinks.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                target={link.target}
                className="p-1 text-foreground/80 transition-colors font-semibold hover:text-secondary hover:scale-110"
              >
                {link.label}
              </Link>
            ))}
          </div>
          <div className="flex gap-2 items-center">
            <ModeToggle />
            {/* <div className="hidden sm:block">
              <UserBtn />
            </div> */}
          </div>
        </div>
      </div>
    </header>
  );
}

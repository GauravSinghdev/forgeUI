import Link from "next/link";
import { ModeToggle } from "./ModeToggle";
import { UserBtn } from "./UserBtn";
import { Shapes } from "lucide-react";

export async function Appbar() {
  return (
    <header className="py-3 px-2 sm:px-6 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 w-full border-b border-border/40">
      <div className="container px-5 flex items-center justify-between max-w-7xl mx-auto">
        <div className="flex gap-10 items-center">
          <Link href="/" className="flex items-center space-x-2">
            <div className="border-2 rounded border-primary p-1">
              <Shapes className="text-primary" />
            </div>
            <span className="font-extrabold text-2xl text-primary ">
              Forge UI
            </span>
          </Link>
          <nav className="hidden md:flex items-center space-x-6 text-sm sm:text-base">
            <Link
              href="/components"
              className={`text-foreground/80 hover:text-foreground transition-colors`}
            >
              Components
            </Link>
            {/* <Link
              href="/codes"
              className="text-foreground/80 hover:text-foreground transition-colors flex gap-2 items-center"
            >
            </Link>
            <Link
              href="/my-links"
              className="text-foreground/80 hover:text-foreground transition-colors flex gap-2 items-center"
            >
              My Links
              <span className="px-2 py-0.5 bg-primary rounded text-xs">
                new
              </span>
            </Link>
            <Link
              href="#testimonials"
              className="text-foreground/80 hover:text-foreground transition-colors"
            >
              Testimonials
            </Link>
            <Link
              href="#faq"
              className="text-foreground/80 hover:text-foreground transition-colors"
            >
              FAQ
            </Link> */}
          </nav>
        </div>
        <div className="flex items-center gap-10">
          <div className="hidden md:flex gap-5">
            <Link
              href={"https://x.com/codewithkara"}
              target="_blank"
              className="p-1 text-foreground/80  transition-colors font-semibold hover:text-secondary hover:scale-110"
            >
              Twitter
            </Link>
            <Link
              href={"https://github.com/GauravSinghdev"}
              target="_blank"
              className="p-1 text-foreground/80  transition-colors font-semibold hover:text-secondary hover:scale-110"
            >
              Github
            </Link>
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

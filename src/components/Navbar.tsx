import React, { useState, useEffect, useRef, useCallback } from "react";
import {Menu,X} from "lucide-react";
import { cn } from "@/lib/utils";

interface NavLink {
  label: string;
  id: string;
}

interface NavbarProps {
  navLinks: NavLink[];
  scrollTo: (id: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ navLinks, scrollTo }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});
  const [activeSection, setActiveSection] = useState<string | null>(null);

  const handleScroll = useCallback(() => {
    setIsScrolled(window.scrollY > 50);

    const scrollPosition = window.scrollY + window.innerHeight / 3; // Offset to activate link sooner
    let currentActive: string | null = null;

    navLinks.forEach((link) => {
      const section = sectionRefs.current[link.id];
      if (section) {
        if (
          section.offsetTop <= scrollPosition &&
          section.offsetTop + section.offsetHeight > scrollPosition
        ) {
          currentActive = link.id;
        }
      }
    });
    setActiveSection(currentActive);
  }, [navLinks]);

  useEffect(() => {
    navLinks.forEach((link) => {
      sectionRefs.current[link.id] = document.getElementById(link.id);
    });
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll, navLinks]);

  const handleNavLinkClick = (id: string) => {
    scrollTo(id);
    setIsMenuOpen(false);
  };

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out",
        isScrolled ? "shadow-md backdrop-blur-sm bg-white/90" : "bg-white"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <button onClick={() => scrollTo("hero")} className="flex-shrink-0 text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 text-transparent bg-clip-text">
              Workfast.ai
            </button>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavLinkClick(link.id)}
                className={cn(
                  "text-sm font-medium transition-colors relative",
                  activeSection === link.id
                    ? "text-indigo-600 font-bold after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-[2px] after:bg-indigo-600 after:rounded-full"
                    : "text-gray-600 hover:text-indigo-600"
                )}
              >
                {link.label}
              </button>
            ))}
            <a
              href="https://workfast.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-4 py-2 rounded-lg text-sm font-medium shadow-md hover:shadow-lg transition-all duration-200"
            >
              Book a Demo
            </a>
          </div>
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-500 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      <div
        className={cn(
          "md:hidden bg-white shadow-lg py-4 transition-all duration-300 ease-in-out absolute w-full",
          isMenuOpen ? "top-16 opacity-100 visible" : "top-[-300px] opacity-0 invisible"
        )}
      >
        <div className="px-2 pt-2 pb-3 space-y-2 sm:px-3 flex flex-col items-center">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNavLinkClick(link.id)}
              className={cn(
                "block px-3 py-2 rounded-md text-base font-medium transition-colors w-full text-center",
                activeSection === link.id
                  ? "bg-indigo-100 text-indigo-600"
                  : "text-gray-700 hover:text-indigo-600 hover:bg-gray-50"
              )}
            >
              {link.label}
            </button>
          ))}
          <a
            href="https://workfast.ai"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-5 py-2 mt-4 rounded-lg text-base font-medium shadow-md hover:shadow-lg transition-all duration-200"
          >
            Book a Demo
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
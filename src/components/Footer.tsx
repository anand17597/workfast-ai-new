import React from "react";
import {ArrowUp} from "lucide-react";
import { useInView } from "react-intersection-observer";
import { cn } from "@/lib/utils";

interface FooterProps {
  scrollTo: (id: string) => void;
}

const Footer: React.FC<FooterProps> = ({ scrollTo }) => {
  const { ref: backToTopRef, inView: backToTopInView } = useInView({
    triggerOnce: false,
    threshold: 0,
    rootMargin: "-400px 0px 0px 0px", // Appears after scrolling 400px down from top
  });

  const handleBackToTop = () => {
    scrollTo("hero");
  };

  return (
    <footer className="bg-gray-800 text-gray-300 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="col-span-1 md:col-span-1">
          <button onClick={() => scrollTo("hero")} className="text-2xl font-bold text-white mb-4 block">
            Workfast.ai
          </button>
          <p className="text-sm">
            Workfast.ai is an all-in-one productivity and team collaboration platform by Pepul Tech Private Limited.
          </p>
        </div>
        <div className="col-span-1 md:col-span-1">
          <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
          <ul className="space-y-2">
            <li>
              <button onClick={() => scrollTo("overview")} className="hover:text-white transition-colors text-sm">
                Overview
              </button>
            </li>
            <li>
              <button onClick={() => scrollTo("features")} className="hover:text-white transition-colors text-sm">
                Features
              </button>
            </li>
            <li>
              <button onClick={() => scrollTo("ai-agents")} className="hover:text-white transition-colors text-sm">
                AI Agents
              </button>
            </li>
            <li>
              <button onClick={() => scrollTo("pricing")} className="hover:text-white transition-colors text-sm">
                Pricing
              </button>
            </li>
          </ul>
        </div>
        <div className="col-span-1 md:col-span-1">
          <h4 className="text-lg font-semibold text-white mb-4">Programs</h4>
          <ul className="space-y-2">
            <li>
              <a href="https://workfast.ai/surge-startups" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors text-sm">
                Surge Startups
              </a>
            </li>
            <li>
              <a href="https://workfast.ai/franchise" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors text-sm">
                Franchise
              </a>
            </li>
            <li>
              <a href="https://workfast.ai/investor" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors text-sm">
                Investors
              </a>
            </li>
          </ul>
        </div>
        <div className="col-span-1 md:col-span-1">
          <h4 className="text-lg font-semibold text-white mb-4">Contact</h4>
          <ul className="space-y-2">
            <li>
              <a href="mailto:support@workfast.ai" className="hover:text-white transition-colors text-sm">
                support@workfast.ai
              </a>
            </li>
            <li>
              <a href="https://wa.me/919840056602?text=Hello%2C%20I%27d%20like%20to%20know%20more%20about%20Workfast.ai%20services." target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors text-sm">
                WhatsApp Sales
              </a>
            </li>
            <li>
              <a href="https://workfast.ai" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors text-sm">
                Book a Demo
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="mt-12 border-t border-gray-700 pt-8 text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} Workfast.ai by Pepul Tech Private Limited. All rights reserved.
      </div>

      {/* Back to Top Button */}
      <div ref={backToTopRef}>
        <button
          onClick={handleBackToTop}
          className={cn(
            "fixed bottom-6 right-6 bg-indigo-600 text-white p-3 rounded-full shadow-lg hover:bg-indigo-700 transition-all duration-300 z-50",
            !backToTopInView ? "opacity-100 visible" : "opacity-0 hidden" // InView is true when the element is visible, so we hide it then.
          )}
        >
          <ArrowUp className="w-6 h-6" />
        </button>
      </div>
    </footer>
  );
};

export default Footer;
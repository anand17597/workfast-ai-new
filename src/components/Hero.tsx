import { lazy } from "react";
import React from "react";
import useScrollAnimation from "@/hooks/use-scroll-animation";

interface HeroProps {
  scrollTo: (id: string) => void;
}

const Hero: React.FC<HeroProps> = ({ scrollTo }) => {
  const { ref: contentRef, inView: contentInView } = useScrollAnimation();
  const { ref: imageRef, inView: imageInView } = useScrollAnimation();

  return (
    <section
      id="hero"
      className="relative bg-gradient-to-br from-indigo-600 to-purple-600 text-white flex items-center justify-center min-h-screen pt-16 overflow-hidden"
    >
      <div className="absolute inset-0 z-0 opacity-10">
        <img
          src="https://images.unsplash.com/photo-1542626991-cbc4e32371cc?auto=format&fit=crop&w=1600&q=90"
          alt="Abstract tech background pattern"
          className="w-full h-full object-cover"
          loading="lazy"
          onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
            e.currentTarget.onerror = null;
            e.currentTarget.src =
              "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1600&q=90";
          }}
        />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 lg:py-32 flex flex-col md:flex-row items-center justify-between text-center md:text-left z-10 gap-12">
        <div
          ref={contentRef}
          className={`md:w-1/2 transition-all duration-700 ease-out ${
            contentInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold leading-tight mb-6">
            Workfast.ai: <span className="block text-indigo-200">Amplify Humans, Not Replace Them.</span>
          </h1>
          <p className="text-lg sm:text-xl lg:text-2xl mb-8 opacity-90">
            The all-in-one productivity and team collaboration platform that replaces 6+ tools.
            Available on Web, iOS, and Android.
          </p>
          <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4">
            <a
              href="https://workfast.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-indigo-700 hover:bg-gray-100 px-8 py-3 rounded-lg text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Book a Demo
            </a>
            <button
              onClick={() => scrollTo("features")}
              className="border border-white text-white hover:bg-white hover:text-indigo-700 px-8 py-3 rounded-lg text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Explore Features
            </button>
          </div>
        </div>
        <div
          ref={imageRef}
          className={`md:w-1/2 mt-12 md:mt-0 transition-all duration-700 ease-out delay-200 ${
            imageInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <img
            src="https://d3dnd7j639hmiz.cloudfront.net/sites/workfast-ai/hero-banner/ff3b1244-c96f-46d6-981c-81e1a83654f7.webp"
            alt="Workfast.ai platform interface on various devices, showcasing productivity features"
            className="rounded-lg shadow-2xl w-full h-auto object-cover max-w-lg mx-auto md:max-w-none"
            loading="lazy"
            onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
              e.currentTarget.onerror = null;
              e.currentTarget.src =
                "https://images.unsplash.com/photo-1531545514256-d18885236f87?auto=format&fit=crop&w=1600&q=90";
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
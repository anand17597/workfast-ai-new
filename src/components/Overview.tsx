import { lazy } from "react";
import React from "react";
import useScrollAnimation from "@/hooks/use-scroll-animation";
import {CheckCircle} from "lucide-react";

const Overview: React.FC = () => {
  const { ref: headingRef, inView: headingInView } = useScrollAnimation();
  const { ref: contentRef, inView: contentInView } = useScrollAnimation();

  return (
    <section id="overview" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <div
          ref={headingRef}
          className={`text-center mb-16 transition-all duration-700 ease-out ${
            headingInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-transparent bg-clip-text">
            Why Choose Workfast.ai?
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We're not just a tool, we're your complete operating system.
            Streamline your workflow, enhance collaboration, and boost productivity with AI at your side.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div
            ref={contentRef}
            className={`transition-all duration-700 ease-out ${
              contentInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <img
              src="https://images.unsplash.com/photo-1542740645-0909f2d01b44?auto=format&fit=crop&w=1600&q=90"
              alt="Team collaborating in a modern office environment"
              className="rounded-lg shadow-xl w-full h-auto object-cover max-w-lg mx-auto"
              loading="lazy"
              onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
                e.currentTarget.onerror = null;
                e.currentTarget.src =
                  "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1600&q=90";
              }}
            />
          </div>
          <div
            ref={contentRef}
            className={`transition-all duration-700 ease-out delay-200 ${
              contentInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <h3 className="text-2xl sm:text-3xl font-bold mb-6 text-gray-900">
              Built for Teams, Powered by Innovation
            </h3>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Workfast.ai seamlessly integrates Projects, Tasks, MessageSquare, Channels, Docs, Reports, and Alerts into one powerful platform. Say goodbye to juggling multiple subscriptions and hello to unified efficiency.
            </p>
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-center">
                <CheckCircle className="w-6 h-6 text-indigo-500 mr-3" />
                <strong>SOC 2 Type 2 Certified:</strong> Your data security is our top priority.
              </li>
              <li className="flex items-center">
                <CheckCircle className="w-6 h-6 text-indigo-500 mr-3" />
                <strong>Award-Winning Excellence:</strong> Recognized by Intel and Google for innovation.
              </li>
              <li className="flex items-center">
                <CheckCircle className="w-6 h-6 text-indigo-500 mr-3" />
                <strong>Cross-Platform Access:</strong> Work seamlessly on Web, iOS, and Android.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Overview;
import React from "react";
import useScrollAnimation from "@/hooks/use-scroll-animation";
import {TrendingUp,Briefcase,BarChart3} from "lucide-react";
import { cn } from "@/lib/utils";

interface ProgramCardProps {
  icon: React.ElementType;
  title: string;
  description: string;
  ctaText: string;
  ctaLink: string;
  delay: number;
}

const ProgramCard: React.FC<ProgramCardProps> = ({ icon: Icon, title, description, ctaText, ctaLink, delay }) => {
  const { ref, inView } = useScrollAnimation();
  return (
    <div
      ref={ref}
      className={cn(
        "bg-white p-8 rounded-lg shadow-xl flex flex-col items-center text-center transition-all duration-700 ease-out",
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      )}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="flex items-center justify-center w-16 h-16 bg-blue-100 text-blue-600 rounded-full mb-6">
        <Icon className="w-8 h-8" />
      </div>
      <h3 className="text-2xl font-bold mb-4 text-gray-900">{title}</h3>
      <p className="text-gray-600 mb-6 flex-grow">{description}</p>
      <a
        href={ctaLink}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-200"
      >
        {ctaText}
      </a>
    </div>
  );
};

const Programs: React.FC = () => {
  const { ref: headingRef, inView: headingInView } = useScrollAnimation();

  const programsData = [
    {
      icon: TrendingUp,
      title: "Surge Startups Program",
      description:
        "Founder mentorship and operating system powered by Workfast.ai, led by serial entrepreneur SK. For aspiring and early-stage founders.",
      ctaText: "Learn More",
      ctaLink: "https://workfast.ai/surge-startups",
    },
    {
      icon: Briefcase,
      title: "Franchise Program",
      description:
        "World's first SaaS franchise model. Earn 25–30% recurring commission per license sold. High risk, high return for seasoned entrepreneurs.",
      ctaText: "Become a Franchisee",
      ctaLink: "https://workfast.ai/franchise",
    },
    {
      icon: BarChart3,
      title: "Investor Information",
      description:
        "Series A funding round is open. Minimum ticket size ₹1 Crore. Booking requires a refundable token for awareness meeting.",
      ctaText: "Invest with Us",
      ctaLink: "https://workfast.ai/investor",
    },
  ];

  return (
    <section id="programs" className="section-padding bg-indigo-50">
      <div className="max-w-7xl mx-auto">
        <div
          ref={headingRef}
          className={`text-center mb-16 transition-all duration-700 ease-out ${
            headingInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-transparent bg-clip-text">
            Beyond Productivity: Our Special Programs
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Workfast.ai supports growth, entrepreneurship, and innovation through unique initiatives.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programsData.map((program, index) => (
            <ProgramCard
              key={program.title}
              icon={program.icon}
              title={program.title}
              description={program.description}
              ctaText={program.ctaText}
              ctaLink={program.ctaLink}
              delay={index * 100}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Programs;
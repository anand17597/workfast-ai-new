import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { cn } from "@/lib/utils";

interface StatisticCardProps {
  end: number;
  label: string;
  suffix?: string;
  delay: number;
}

const StatisticCard: React.FC<StatisticCardProps> = ({ end, label, suffix = "", delay }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  return (
    <div
      ref={ref}
      className={cn(
        "p-6 bg-white rounded-lg shadow-md transition-all duration-700 ease-out",
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      )}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="text-5xl font-extrabold text-indigo-600 mb-2">
        {inView ? <CountUp end={end} duration={2.5} separator="," suffix={suffix} /> : "0"}
      </div>
      <p className="text-lg text-gray-600">{label}</p>
    </div>
  );
};

const Statistics: React.FC = () => {
  const { ref: headingRef, inView: headingInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const stats = [
    { end: 20000, label: "Active Users" },
    { end: 5000, label: "Teams Using Workfast" },
    { end: 1000000, label: "Tasks Completed" },
    { end: 98, label: "Customer Satisfaction", suffix: "%" },
  ];

  return (
    <section id="statistics" className="section-padding bg-indigo-50">
      <div className="max-w-7xl mx-auto text-center">
        <h2
          ref={headingRef}
          className={cn(
            "text-3xl sm:text-4xl lg:text-5xl font-bold mb-12 bg-gradient-to-r from-indigo-600 to-purple-600 text-transparent bg-clip-text transition-all duration-700 ease-out",
            headingInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}
        >
          Our Impact in Numbers
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <StatisticCard
              key={stat.label}
              end={stat.end}
              label={stat.label}
              suffix={stat.suffix}
              delay={index * 150}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Statistics;
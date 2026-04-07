import React from "react";
import useScrollAnimation from "@/hooks/use-scroll-animation";
import {MessageCircle,LayoutDashboard,ListTodo,MessageSquare,BarChart3,FileText} from "lucide-react";

interface FeatureCardProps {
  icon: React.ElementType;
  title: string;
  description: string;
  delay: number;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon: Icon, title, description, delay }) => {
  const { ref, inView } = useScrollAnimation();
  return (
    <div
      ref={ref}
      className={`bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1
        ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="flex items-center justify-center w-12 h-12 bg-indigo-100 text-indigo-600 rounded-full mb-4">
        <Icon className="w-6 h-6" />
      </div>
      <h3 className="text-xl font-semibold mb-2 text-gray-900">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const Features: React.FC = () => {
  const { ref: headingRef, inView: headingInView } = useScrollAnimation();

  const featuresData = [
    {
      icon: MessageCircle,
      title: "Channels",
      description: "Public/private team communication spaces with messaging, file sharing, and task creation from messages.",
    },
    {
      icon: LayoutDashboard,
      title: "Projects",
      description: "Organize work with Kanban, Stage, Table views, custom workflows, statuses, and tags.",
    },
    {
      icon: ListTodo,
      title: "Tasks",
      description: "Create, assign, and track tasks with subtasks, due dates, priorities, and recurring schedules.",
    },
    {
      icon: MessageSquare,
      title: "Chat",
      description: "Direct messaging and group chats with file sharing, voice messages, and reactions.",
    },
    {
      icon: BarChart3,
      title: "Reports",
      description: "Customizable reports with various chart types, filters, and export options to CSV/PDF.",
    },
    {
      icon: FileText,
      title: "Docs",
      description: "Collaborative document creation with tables, media embedding, comments, and export.",
    },
  ];

  return (
    <section id="features" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <div
          ref={headingRef}
          className={`text-center mb-16 transition-all duration-700 ease-out ${
            headingInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-transparent bg-clip-text">
            All Your Tools, One Platform
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Workfast.ai combines essential modules to give your team a single source of truth and streamlined workflows.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuresData.map((feature, index) => (
            <FeatureCard
              key={feature.title}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              delay={index * 100}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
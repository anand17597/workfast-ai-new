import React from "react";
import useScrollAnimation from "@/hooks/use-scroll-animation";
import {Pencil,DollarSign,FileText,Heart,Lightbulb,MessageCircle} from "lucide-react"; // Using general icons as specific AI names are not in lucide-react

interface AIAgentCardProps {
  icon: React.ElementType;
  title: string;
  description: string;
  delay: number;
}

const AIAgentCard: React.FC<AIAgentCardProps> = ({ icon: Icon, title, description, delay }) => {
  const { ref, inView } = useScrollAnimation();
  return (
    <div
      ref={ref}
      className={`bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1
        ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="flex items-center justify-center w-12 h-12 bg-purple-100 text-purple-600 rounded-full mb-4">
        <Icon className="w-6 h-6" />
      </div>
      <h3 className="text-xl font-semibold mb-2 text-gray-900">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const AIAgents: React.FC = () => {
  const { ref: headingRef, inView: headingInView } = useScrollAnimation();
  const { ref: videoGridRef, inView: videoGridInView } = useScrollAnimation({ delay: 200 }); // Ref for the video grid container

  const aiAgentsData = [
    {
      icon: Pencil,
      title: "Content Writer AI",
      description: "Generate SEO-optimized content effortlessly.",
    },
    {
      icon: DollarSign,
      title: "DealCloser AI",
      description: "24/7 sales closer with CRM sync and objection handling.",
    },
    {
      icon: FileText,
      title: "Minutes of Meeting AI",
      description: "Summarize calls and identify action items automatically.",
    },
    {
      icon: Heart,
      title: "Motivator Monk AI",
      description: "Mental clarity and morning motivation to start your day.",
    },
    {
      icon: Lightbulb,
      title: "Hustle Buddy AI",
      description: "Fun sales assistant for lead nurturing and engagement.",
    },
    {
      icon: MessageCircle,
      title: "Helpdesk Support AI",
      description: "Always-on customer support with ticketing system integration.",
    },
  ];

  const videoUrls = [
    "https://d3dnd7j639hmiz.cloudfront.net/sites/workfast-ai/ai-agent-visuals/05ae8662-e847-4765-9641-a9f320090342.mp4",
    "https://d3dnd7j639hmiz.cloudfront.net/sites/workfast-ai/ai-agent-visuals/b6535f93-a9a1-44b0-94b8-39bd3277d19e.mp4",
    "https://d3dnd7j639hmiz.cloudfront.net/sites/workfast-ai/ai-agent-visuals/47ebd348-8a77-4c67-94b2-d7ecdf893a1d.mp4",
  ];

  return (
    <section id="ai-agents" className="section-padding bg-indigo-50">
      <div className="max-w-7xl mx-auto">
        <div
          ref={headingRef}
          className={`text-center mb-16 transition-all duration-700 ease-out ${
            headingInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-transparent bg-clip-text">
            Meet Your Workfast AI Agents
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Purpose-built AI agents to automate tasks, enhance creativity, and drive results.
          </p>
        </div>

        {/* New video grid for AI Agent Visuals */}
        <div
          ref={videoGridRef}
          className={`mb-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-700 ease-out ${
            videoGridInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
          style={{ transitionDelay: `200ms` }}
        >
          {videoUrls.map((url, index) => (
            <video
              key={index}
              src={url}
              className="w-full h-48 sm:h-64 object-cover rounded-lg shadow-xl" // Adjusted size classes
              autoPlay
              loop
              muted
              playsInline
              controls
              aria-label={`Workfast AI Agent Visual ${index + 1}`}
              style={{ transitionDelay: `${index * 150}ms` }} // Staggered animation for individual videos
            />
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {aiAgentsData.map((agent, index) => (
            <AIAgentCard
              key={agent.title}
              icon={agent.icon}
              title={agent.title}
              description={agent.description}
              delay={index * 100}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AIAgents;
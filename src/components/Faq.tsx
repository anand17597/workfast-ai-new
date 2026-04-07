import React, { useState } from "react";
import useScrollAnimation from "@/hooks/use-scroll-animation";
import {ChevronDown} from "lucide-react";
import { cn } from "@/lib/utils";

interface FaqItemProps {
  question: string;
  answer: string;
  delay: number;
}

const FaqItem: React.FC<FaqItemProps> = ({ question, answer, delay }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { ref, inView } = useScrollAnimation();

  return (
    <div
      ref={ref}
      className={cn(
        "bg-gray-50 p-6 rounded-lg shadow-md transition-all duration-700 ease-out",
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      )}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center text-left text-xl font-semibold text-gray-900 focus:outline-none"
      >
        {question}
        <ChevronDown className={cn("w-6 h-6 transform transition-transform duration-200", isOpen && "rotate-180")} />
      </button>
      <div className={cn("mt-4 text-gray-700 transition-all duration-300 overflow-hidden", isOpen ? "max-h-96 opacity-100 pt-2" : "max-h-0 opacity-0")}>
        {answer}
      </div>
    </div>
  );
};

const Faq: React.FC = () => {
  const { ref: headingRef, inView: headingInView } = useScrollAnimation();

  const faqData = [
    {
      question: "What is Workfast.ai?",
      answer:
        "Workfast.ai is an all-in-one productivity and team collaboration platform that replaces 6+ tools by combining Projects, Tasks, MessageSquare, Channels, Docs, Reports, and Alerts. It's available on Web, iOS, and Android, and is SOC 2 Type 2 certified.",
    },
    {
      question: "How do the AI Agents work?",
      answer:
        "Workfast.ai offers purpose-built AI agents like Content Writer AI, DealCloser AI, and Minutes of Meeting AI. These agents are integrated into the platform to automate specific tasks, generate content, assist with sales, and provide intelligent support.",
    },
    {
      question: "What is the Surge Startups Program?",
      answer:
        "The Surge Startups Program is a founder mentorship and operating system powered by Workfast.ai, led by serial entrepreneur SK. It offers interactive sessions, a weekly rhythm, and tailored programs for beginners, startups aiming for ₹0–1 Cr revenue, and aspiring first-time founders.",
    },
    {
      question: "How can I get support?",
      answer:
        "For technical issues, general product questions, or billing inquiries, you can reach out to our support team at support@workfast.ai. Our different pricing plans offer varying levels of support SLA.",
    },
  ];

  return (
    <section id="faq" className="section-padding bg-white">
      <div className="max-w-4xl mx-auto">
        <div
          ref={headingRef}
          className={`text-center mb-16 transition-all duration-700 ease-out ${
            headingInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-transparent bg-clip-text">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Find answers to common questions about Workfast.ai, its features, and programs.
          </p>
        </div>

        <div className="space-y-6">
          {faqData.map((faq, index) => (
            <FaqItem key={index} question={faq.question} answer={faq.answer} delay={index * 100} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;
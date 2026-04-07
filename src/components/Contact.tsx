import React from "react";
import useScrollAnimation from "@/hooks/use-scroll-animation";
import {Mail,Smartphone,CalendarDays} from "lucide-react";
import { cn } from "@/lib/utils";

interface ContactCardProps {
  icon: React.ElementType;
  title: string;
  description: string;
  linkText: string;
  href: string;
  delay: number;
}

const ContactCard: React.FC<ContactCardProps> = ({ icon: Icon, title, description, linkText, href, delay }) => {
  const { ref, inView } = useScrollAnimation();
  return (
    <div
      ref={ref}
      className={cn(
        "bg-white p-6 rounded-lg shadow-md transition-all duration-700 ease-out",
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      )}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="flex items-center justify-center w-16 h-16 bg-indigo-100 text-indigo-600 rounded-full mx-auto mb-4">
        <Icon className="w-8 h-8" />
      </div>
      <h3 className="text-xl font-semibold mb-2 text-gray-900">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <a
        href={href}
        target={href.startsWith("mailto:") || href.startsWith("tel:") ? "_self" : "_blank"}
        rel={href.startsWith("mailto:") || href.startsWith("tel:") ? "" : "noopener noreferrer"}
        className="text-indigo-600 hover:underline font-medium"
      >
        {linkText}
      </a>
    </div>
  );
};

const Contact: React.FC = () => {
  const { ref: headingRef, inView: headingInView } = useScrollAnimation();

  const contactOptions = [
    {
      icon: Mail,
      title: "Email Support",
      description: "For general inquiries and technical assistance.",
      linkText: "support@workfast.ai",
      href: "mailto:support@workfast.ai",
    },
    {
      icon: Smartphone,
      title: "WhatsApp Sales",
      description: "For sales and franchise inquiries.",
      linkText: "+91 98400 56602",
      href: "https://wa.me/919840056602?text=Hello%2C%20I%27d%20like%20to%20know%20more%20about%20Workfast.ai%20services.",
    },
    {
      icon: CalendarDays,
      title: "Book a Demo",
      description: "Experience Workfast.ai firsthand.",
      linkText: "workfast.ai",
      href: "https://workfast.ai",
    },
  ];

  return (
    <section id="contact" className="section-padding bg-gray-50">
      <div className="max-w-7xl mx-auto text-center">
        <div
          ref={headingRef}
          className={`mb-16 transition-all duration-700 ease-out ${
            headingInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-transparent bg-clip-text">
            Get in Touch
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We're here to help you succeed. Reach out to us through the channels below.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {contactOptions.map((option, index) => (
            <ContactCard
              key={option.title}
              icon={option.icon}
              title={option.title}
              description={option.description}
              linkText={option.linkText}
              href={option.href}
              delay={index * 100}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
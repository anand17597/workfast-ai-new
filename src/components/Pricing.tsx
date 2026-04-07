import React from "react";
import useScrollAnimation from "@/hooks/use-scroll-animation";
import {Check} from "lucide-react";
import { cn } from "@/lib/utils";

interface PricingPlan {
  name: string;
  price: string;
  originalPrice?: string;
  description: string;
  users: string;
  storage: string;
  features: string[];
  supportSLA: string;
  isPopular?: boolean;
  ctaText: string;
  ctaLink: string;
}

const pricingPlans: PricingPlan[] = [
  {
    name: "Starter",
    price: "₹10,000",
    originalPrice: "₹15,000",
    description: "Perfect for small teams getting started.",
    users: "Up to 10",
    storage: "10 GB",
    features: ["Kanban Board", "Team Chats", "48hrs Email Support"],
    supportSLA: "48hrs Email Support",
    ctaText: "Get Started",
    ctaLink: "mailto:support@workfast.ai?subject=Inquiry%20about%20Workfast.ai%20Starter%20Plan",
  },
  {
    name: "Growth",
    price: "₹25,000",
    originalPrice: "₹37,500",
    description: "Scale your operations with advanced features.",
    users: "Up to 25",
    storage: "50 GB",
    features: ["Custom Workflows", "Recurring Tasks", "24hrs Email + Chat Support"],
    supportSLA: "24hrs Email + Chat Support",
    isPopular: true,
    ctaText: "Choose Plan",
    ctaLink: "mailto:support@workfast.ai?subject=Inquiry%20about%20Workfast.ai%20Growth%20Plan",
  },
  {
    name: "Scale",
    price: "₹99,999",
    originalPrice: "₹1,50,000",
    description: "For growing businesses needing comprehensive control.",
    users: "Up to 100",
    storage: "150 GB",
    features: ["All Growth Features", "Advanced Reports", "12hrs Email + Chat + Call Support"],
    supportSLA: "12hrs Email + Chat + Call Support",
    ctaText: "Choose Plan",
    ctaLink: "mailto:support@workfast.ai?subject=Inquiry%20about%20Workfast.ai%20Scale%20Plan",
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "Tailored solutions for large organizations.",
    users: "Custom",
    storage: "150 GB+",
    features: ["Dedicated Account Manager", "SLA Customization", "Priority Support"],
    supportSLA: "Priority Support",
    ctaText: "Contact Sales",
    ctaLink: "mailto:support@workfast.ai?subject=Inquiry%20about%20Workfast.ai%20Enterprise%20Plan",
  },
];

const Pricing: React.FC = () => {
  const { ref: headingRef, inView: headingInView } = useScrollAnimation();
  const { ref: toggleRef, inView: toggleInView } = useScrollAnimation();

  return (
    <section id="pricing" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <div
          ref={headingRef}
          className={`text-center mb-16 transition-all duration-700 ease-out ${
            headingInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-transparent bg-clip-text">
            Flexible Pricing for Every Team
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Choose a plan that scales with your business, from startups to large enterprises.
          </p>
        </div>

        <div
          ref={toggleRef}
          className={`flex justify-center mb-12 transition-all duration-700 ease-out delay-100 ${
            toggleInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="inline-flex bg-gray-100 rounded-full p-1">
            <button
              className="px-6 py-2 rounded-full text-sm font-medium bg-indigo-600 text-white shadow-sm transition-all duration-200"
            >
              Monthly
            </button>
            <button
              className="px-6 py-2 rounded-full text-sm font-medium text-gray-700 hover:text-indigo-600 transition-all duration-200"
            >
              Annually (20% off)
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {pricingPlans.map((plan, index) => {
            const { ref, inView } = useScrollAnimation();
            return (
              <div
                key={plan.name}
                ref={ref}
                className={cn(
                  "bg-gray-50 p-8 rounded-lg shadow-xl flex flex-col relative transition-all duration-700 ease-out",
                  plan.isPopular && "border-2 border-indigo-600 bg-white",
                  inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                )}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {plan.isPopular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-indigo-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
                    Most Popular
                  </div>
                )}
                <h3 className="text-2xl font-bold mb-4 text-gray-900">{plan.name}</h3>
                <p className="text-gray-600 mb-6">{plan.description}</p>
                <div className="mb-6">
                  <div className="flex items-baseline">
                    <span className="text-3xl font-extrabold text-indigo-600">{plan.price}</span>
                    {plan.price !== "Custom" && (
                      <span className="ml-2 text-sm font-medium text-gray-500">/mo</span>
                    )}
                  </div>
                  {plan.originalPrice && (
                    <span className="text-sm text-gray-400 line-through">{plan.originalPrice}</span>
                  )}
                </div>
                <ul className="space-y-3 mb-8 flex-grow">
                  <li className="flex items-center text-gray-700">
                    <Check className="w-5 h-5 text-indigo-500 mr-2" />
                    {plan.users} Users
                  </li>
                  <li className="flex items-center text-gray-700">
                    <Check className="w-5 h-5 text-indigo-500 mr-2" />
                    {plan.storage} Storage
                  </li>
                  {plan.features.map((feature, featIndex) => (
                    <li key={featIndex} className="flex items-center text-gray-700">
                      <Check className="w-5 h-5 text-indigo-500 mr-2" />
                      {feature}
                    </li>
                  ))}
                  <li className="flex items-center text-gray-700">
                    <Check className="w-5 h-5 text-indigo-500 mr-2" />
                    {plan.supportSLA}
                  </li>
                </ul>
                <a
                  href={plan.ctaLink}
                  target={plan.ctaLink.startsWith("mailto:") ? "_self" : "_blank"}
                  rel={plan.ctaLink.startsWith("mailto:") ? "" : "noopener noreferrer"}
                  className="w-full text-center bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-200"
                >
                  {plan.ctaText}
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
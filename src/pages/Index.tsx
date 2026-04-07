import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Overview from "@/components/Overview";
import Features from "@/components/Features";
import AIAgents from "@/components/AIAgents";
import Statistics from "@/components/Statistics";
import Pricing from "@/components/Pricing";
import Programs from "@/components/Programs";
import Faq from "@/components/Faq";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import FloatingWhatsAppButton from "@/components/FloatingWhatsAppButton";

const Index = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const navLinks = [
    { label: "Overview", id: "overview" },
    { label: "Features", id: "features" },
    { label: "AI Agents", id: "ai-agents" },
    { label: "Pricing", id: "pricing" },
    { label: "Programs", id: "programs" },
    { label: "FAQ", id: "faq" },
    { label: "Contact", id: "contact" },
  ];

  return (
    <div className="bg-gray-50 text-gray-800">
      <Navbar navLinks={navLinks} scrollTo={scrollTo} />
      <main>
        <Hero scrollTo={scrollTo} />
        <Overview />
        <Statistics />
        <Features />
        <AIAgents />
        <Pricing />
        <Programs />
        <Faq />
        <Contact />
      </main>
      <Footer scrollTo={scrollTo} />
      <FloatingWhatsAppButton />
    </div>
  );
};

export default Index;
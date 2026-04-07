import React from "react";
import {MessageCircle} from "lucide-react";

const FloatingWhatsAppButton: React.FC = () => {
  const whatsappUrl =
    "https://wa.me/919840056602?text=Hello%2C%20I%27d%20like%20to%20know%20more%20about%20Workfast.ai%20services.";

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:scale-105 transition-transform duration-200 flex items-center justify-center"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="w-6 h-6" />
    </a>
  );
};

export default FloatingWhatsAppButton;
import whatsappLogo from "@/assets/logo_whatsapp.png";

const WhatsAppButton = () => (
  <a
    href="https://wa.me/5511969772347"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Contato via WhatsApp com a Associação Colo de Mãe"
    className="fixed bottom-6 right-6 z-50 w-16 h-16 rounded-full shadow-lg shadow-[hsl(145_70%_40%/0.4)] hover:scale-110 transition-transform duration-200"
  >
    <img
      src={whatsappLogo}
      alt="WhatsApp"
      className="w-full h-full rounded-full"
    />
  </a>
);

export default WhatsAppButton;

import { MessageCircle } from 'lucide-react';

export default function WhatsAppButton() {
  const phone = '919876543210';
  const message = encodeURIComponent('Hi, I found your website and would like to discuss a commodity requirement.');

  return (
    <a
      href={`https://wa.me/${phone}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-emerald-500 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="text-white" size={28} />
    </a>
  );
}

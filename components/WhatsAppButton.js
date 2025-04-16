// components/WhatsAppButton.js
import Image from 'next/image';

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/22952008133?text=Bonjour%20je%20viens%20de%20votre%20site%20de%20matchs%20pour%20prendre%20une%20réservation."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 right-4 bg-green-500 p-3 rounded-full shadow-lg hover:bg-green-600 transition"
      aria-label="Contact WhatsApp"
    >
      <Image
        src="/whatsapp.svg" // ou "/whatsapp.svg"
        alt="WhatsApp"
        width={28}
        height={28}
      />
    </a>
  );
}

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-gray-900 text-white shadow-md">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-3">
          <Image src="/logo.png" alt="logo" width={40} height={40} className="rounded-full" />
          <h1 className="text-xl sm:text-2xl font-bold text-green-600 dark:text-green-400">KING ADS SERVICES</h1>
        </div>

        {/* Bouton menu pour petits écrans */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d={!menuOpen ? "M4 6h16M4 12h16M4 18h16" : "M6 18L18 6M6 6l12 12"} />
          </svg>
        </button>

        {/* Menu Desktop */}
        <nav className="hidden md:flex space-x-6">
          <Link href="/" className="hover:underline">Accueil</Link>
          <Link href="/programme" className="hover:underline">Programme</Link>
          <Link href="/apropos" className="hover:underline">À propos</Link>
          <a href="https://wa.me/+22952008133?text=Bonjour%20je%20viens%20de%20votre%20site%20de%20matchs%20pour%20prendre%20une%20réservation." target="_blank" rel="noopener noreferrer" className="hover:underline">WhatsApp</a>
        </nav>
      </div>

      {/* Menu Mobile */}
      {menuOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2 animate-slide-down">
          <Link href="/" className="block hover:text-green-400">Accueil</Link>
          <Link href="/programme" className="block hover:text-green-400">Programme</Link>
          <Link href="/apropos" className="block hover:text-green-400">À propos</Link>
          <a href="https://wa.me/+22952008133?text=Bonjour%20je%20viens%20de%20votre%20site%20de%20matchs%20pour%20prendre%20une%20réservation." target="_blank" rel="noopener noreferrer" className="block hover:text-green-400">WhatsApp</a>
        </div>
      )}
    </header>
  );
}

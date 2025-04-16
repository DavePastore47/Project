import Link from 'next/link';
import Image from 'next/image';
export default function Header() {


  return (
    <header className="bg-gray-900 text-white shadow-md">
      <div className="max-w-6xl mx-auto px-4 py-4 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="flex items-center space-x-3">
          <Image src="/logo.png" alt="logo" width={40} height={40} className="rounded-full" />
          <h1 className="text-3xl font-bold text-center text-green-600 dark:text-green-400">
            KING ADS SERVICES
          </h1>

        </div>
        <Link href="/" className="hover:underline">Accueil</Link>
        <Link href="/programme" className="hover:underline">Programme</Link>
        <a href="https://wa.me/+22952008133" target="_blank" rel="noopener noreferrer" className="hover:underline">WhatsApp</a>
      </div>
    </header>
  );
}

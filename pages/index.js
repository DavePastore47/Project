// pages/index.js

import Header from '../components/Header'
import Link from 'next/link'
import Image from 'next/image'


export default function Home() {
  return (
    <div className="min-h-screen bg-white text-black dark:bg-gray-900 dark:text-white">
      <Header />
      <main className="flex flex-col items-center justify-center text-center p-8">
        <h1 className="text-3xl font-bold mb-4">Bienvenue sur KING ADS SERVICES</h1>
        <p className="mb-6 text-lg">Consultez le programme des matchs diffusés en direct sur nos écrans 📺</p>
        <Link href="/programme" className="px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg shadow-lg transition">
            Voir le programme
        </Link>
      </main>
      <section className="bg-gray-100 dark:bg-gray-800 p-6 rounded mb-6 text-center">
        <h2 className="text-2xl font-extrabold mb-4 text-green-600 dark:text-green-400">Bienvenue chez KING ADS SERVICES 👑</h2>
        <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
          Plongez dans l’univers passionnant du football comme jamais auparavant ! KING ADS SERVICES, c’est bien plus qu’un simple lieu de diffusion : 
          c’est un espace convivial, une ambiance électrique, et une expérience unique où les supporters vibrent ensemble sur les plus grands matchs.
          <br /><br />
          Entre amis, en famille ou en solo, venez vivre chaque action comme si vous étiez au stade. Emotions, passion et convivialité garanties à chaque minute !
        </p>

        <h2 className="text-2xl font-extrabold mb-4 text-blue-600 dark:text-blue-400">Nos boissons rafraîchissantes 🧃</h2>
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-2">
          Pour accompagner vos moments foot, nous vous proposons une sélection de boissons fraîches :
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 max-w-md mx-auto text-left text-gray-700 dark:text-gray-300">
          <ul className="space-y-1">
            <li>💧 Eau minérale</li>
            <li>🍊 Youki Pamplemousse</li>
            <li>🍋 XXL</li>
            <li>🥤 Cocktail de fruits</li>
            <li>🥤 Béninoise</li>
          </ul>
          <ul className="space-y-1">
            <li>🥤 CHILL</li>
            <li>🥤 FLAG</li>
            <li>🥤 Beaufort</li>
            <li>🥤 Desperados</li>
            <li>🥤 Vody Volka</li>
          </ul>
        </div>
      </section>

      <section className="py-8 px-4 bg-gray-100 dark:bg-gray-900 text-center">
        <h2 className="text-2xl font-bold text-green-600 mb-4">Ambiance KING ADS SERVICES 📸</h2>
        <p className="mb-6 text-gray-700 dark:text-gray-300">Voici quelques souvenirs de nos plus belles soirées foot</p>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 max-w-4xl mx-auto">
          <Image src="/Wh.jpg" alt="Match en direct" width={400} height={300} className="rounded shadow-lg object-cover" />
          <Image src="/What.jpg" alt="Clients contents" width={400} height={300} className="rounded shadow-lg object-cover" />
          <Image src="/Rea.jpg" alt="Ambiance" width={400} height={300} className="rounded shadow-lg object-cover" />
          <Image src="/Fond.jpg" alt="Ambiance" width={400} height={300} className="rounded shadow-lg object-cover" />
        </div>
      </section>

      <p className="flex flex-col items-center justify-center text-center p-8 mb-6 text-lg">Vous pouvez aussi nous contacter sur whatsapp pour la réservation afin de ne pas manquer de places. Merci... 📺</p>
    </div>
  )
}

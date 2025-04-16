import Navbar from "../components/Navbar"

export default function About() {
  return (
    <div>
      <Navbar />
      <main className="p-4">
        <h1 className="text-2xl font-bold mb-4">À propos</h1>
        <p>Pour toute réservation, contactez-nous sur WhatsApp :</p>
        <a href="https://wa.me/123456789" className="text-blue-400 underline">WhatsApp</a>
      </main>
    </div>
  )
}
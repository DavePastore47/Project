import Navbar from "../components/Navbar"

export default function About() {
  return (
    <div>
      <Navbar />
      <main className="p-4">
        <h1 className="text-2xl font-bold mb-4">À propos</h1>
        <p>Pour toute réservation, contactez-nous sur WhatsApp :</p>
        <a href="https://wa.me/22952008133?text=Bonjour%20je%20viens%20de%20votre%20site%20de%20matchs%20pour%20prendre%20une%20réservation." className="text-blue-400 underline">WhatsApp</a>
      </main>
    </div>
  )
}
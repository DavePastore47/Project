export default function Apropos() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-10 text-white">
      <h1 className="text-4xl font-bold mb-6 text-green-400">KING ADS SERVICES ⚽📺</h1>

      <p className="mb-6 text-lg">
        Bienvenue sur <span className="font-semibold text-white">KING ADS SERVICES</span>, votre guide simple et rapide pour suivre 
        <span className="text-green-300"> les matchs de football diffusés à la télé</span> !
      </p>

      <div className="space-y-6">
        <section>
          <h2 className="text-2xl font-semibold text-green-300 mb-2">📌 Notre mission</h2>
          <p>
            Nous aidons les passionnés de foot à <strong>ne plus jamais rater un match</strong>. Sur notre site, vous trouvez en un coup d’œil :
          </p>
          <ul className="list-disc list-inside ml-4 mt-2">
            <li>Les matchs à venir</li>
            <li>Les horaires exacts</li>
            <li>Les compétitions</li>
            <li>Les logos des équipes</li>
            <li>Un système de compte à rebours dynamique</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-green-300 mb-2">📺 Pourquoi ce site ?</h2>
          <p>Dans notre boutique, les matchs sont diffusés quotidiennement. Ce site a été conçu pour informer nos clients et visiteurs en un coup d'œil des matchs programmés, sans avoir besoin de demander.</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-green-300 mb-2">🍹 Et ce n’est pas tout !</h2>
          <p>
            Notre boutique vous permet de suivre les matchs tout en consommant <strong>des boissons fraîches</strong> et autres rafraîchissements 🥤
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-green-300 mb-2">💼 Qui sommes-nous ?</h2>
          <p>
            <strong>KING ADS SERVICES</strong> est une plateforme dédiée à l’affichage en temps réel du programme des matchs de football diffusés dans notre boutique. Grâce à une interface simple et intuitive, vous pouvez consulter facilement les horaires des matchs, les compétitions, et les équipes à l’affiche.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-green-300 mb-2">📲 Besoin d’aide ?</h2>
          <p>
            Contactez-nous facilement via <strong>WhatsApp</strong> grâce à l’icône verte en bas à droite de l’écran.
          </p>
        </section>
      </div>

      <div className="mt-10 text-center text-gray-400">
        Merci de votre visite, et bon match ! 🙌
      </div>
    </div>
  );
}

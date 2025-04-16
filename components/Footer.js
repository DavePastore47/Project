export default function Footer() {
    return (
      <footer className="mt-12 text-center text-sm text-gray-600 dark:text-gray-400 border-t border-gray-300 dark:border-gray-700 py-4">
        <p>
          © {new Date().getFullYear()} KING ADS SERVICES. Tous droits réservés.
          <br />
          Site créé par David G. ADJAKA – 
          <a
            href="https://wa.me/TON_NUMERO"
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-500 hover:underline ml-1"
          >
            Contact WhatsApp
          </a>
        </p>
      </footer>
    )
  }
  
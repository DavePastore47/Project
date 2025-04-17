import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useRouter } from 'next/router';
import Head from 'next/head'; // ✅ Ajouté pour la balise <Head>
import '../styles/globals.css';
import WhatsAppButton from '../components/WhatsAppButton';

export default function App({ Component, pageProps }) {
  const [theme, setTheme] = useState('light');
  const router = useRouter();

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>KING ADS SERVICES</title>
      </Head>

      <AnimatePresence mode="wait">
        <motion.div
          key={router.route}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4 }}
        >
          <Component {...pageProps} />
        </motion.div>
      </AnimatePresence>

      <WhatsAppButton />
    </>
  );
}

import { useEffect, useState } from 'react';

export default function Countdown({ datetime }) {
  const [timeLeft, setTimeLeft] = useState('');

  useEffect(() => {
    const updateCountdown = () => {
      const now = new Date();
      const matchDate = new Date(datetime);
      const diff = matchDate - now;

      if (diff <= 0) {
        setTimeLeft("En cours ou terminé");
        return;
      }

      const hours = Math.floor(diff / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);

      setTimeLeft(`${hours}h ${minutes}m ${seconds}s`);
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval);
  }, [datetime]);

  return <span className="text-sm text-yellow-500 dark:text-yellow-300">⏳ {timeLeft}</span>;

}

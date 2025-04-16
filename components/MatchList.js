import { useEffect, useState } from 'react';
import matchs from '../data/matchs.json';
import { format, parseISO, isSameDay } from 'date-fns';
import fr from 'date-fns/locale/fr';
import Countdown from './Countdown';
import ThemeToggle from './ThemeToggle';
import Footer from './Footer';

const API_KEY = 'f462782a02580d061814fde70bae0ade'; // 🔑 Remplace par ta vraie clé API-Football

export default function MatchList() {
  const [highlightedIndex, setHighlightedIndex] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedCompetition, setSelectedCompetition] = useState('');
  const [logos, setLogos] = useState({});

  const competitions = Array.from(new Set(matchs.map(m => m.competition)));

  const filteredMatches = matchs.filter(m => {
    const dateMatch = selectedDate ? isSameDay(parseISO(m.datetime), selectedDate) : true;
    const compMatch = selectedCompetition ? m.competition === selectedCompetition : true;
    return dateMatch && compMatch;
  });

  const sorted = [...filteredMatches].sort((a, b) => new Date(a.datetime) - new Date(b.datetime));

  useEffect(() => {
    const now = new Date();
    let closestIndex = -1;
    let minDiff = Infinity;

    sorted.forEach((match, index) => {
      const matchDate = parseISO(match.datetime);
      const diff = matchDate - now;
      if (diff >= 0 && diff < minDiff) {
        minDiff = diff;
        closestIndex = index;
      }
    });

    setHighlightedIndex(closestIndex);
  }, [filteredMatches]);

  useEffect(() => {
    const fetchTeamLogo = async (teamName) => {
      // Vérifier dans le localStorage si le logo existe déjà
      const storedLogo = localStorage.getItem(teamName);
      if (storedLogo) {
        return storedLogo; // Utiliser le logo stocké
      }
    
      try {
        const response = await fetch(`https://v3.football.api-sports.io/teams?search=${encodeURIComponent(teamName)}`, {
          headers: {
            'x-apisports-key': API_KEY,
          },
        });
        const data = await response.json();
    
        if (data.response && data.response.length > 0) {
          const logoUrl = data.response[0].team.logo;
          
          // Stocker le logo dans localStorage pour une utilisation future
          localStorage.setItem(teamName, logoUrl);
    
          return logoUrl;
        } else {
          console.warn(`Logo non trouvé pour ${teamName}`);
          return null;
        }
      } catch (error) {
        console.error(`Erreur lors de la récupération du logo pour ${teamName}:`, error);
        return null;
      }
    };
    

    const loadLogos = async () => {
      const logosTemp = {};
      for (const match of matchs) {
        if (!logosTemp[match.team1]) {
          logosTemp[match.team1] = await fetchTeamLogo(match.team1);
        }
        if (!logosTemp[match.team2]) {
          logosTemp[match.team2] = await fetchTeamLogo(match.team2);
        }
      }
      setLogos(logosTemp);
    };

    loadLogos();
  }, []);
  
  const groupedFiltered = {};
  sorted.forEach((match) => {
    const matchDate = parseISO(match.datetime);
    const dateStr = format(matchDate, 'EEEE d MMMM', { locale: fr });
    if (!groupedFiltered[dateStr]) groupedFiltered[dateStr] = [];
    groupedFiltered[dateStr].push(match);
  });

  const getTeamLogo = (teamName) => {
    const formatted = teamName.toLowerCase().replace(/ /g, '-');
    return `https://api.sofascore.app/api/v1/team/logo/${formatted}`;
  };

  return (
    <div className="max-w-3xl mx-auto space-y-6 px-4">
      <div className="flex justify-end">
        <ThemeToggle />
      </div>

      <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded mb-6">
        <h3 className="text-lg font-semibold mb-2 dark:text-white">🎯 Filtres</h3>
        <div className="flex flex-wrap gap-2">
          <select
            value={selectedCompetition}
            onChange={e => setSelectedCompetition(e.target.value)}
            className="px-3 py-1 border rounded bg-white text-black dark:bg-gray-700 dark:text-white"
          >

            <option value="">Toutes les compétitions</option>
            {competitions.map(comp => (
              <option key={comp} value={comp}>{comp}</option>
            ))}
          </select>

          <input
            type="date"
            onChange={e => setSelectedDate(e.target.value ? new Date(e.target.value) : null)}
            className="px-3 py-1 border rounded bg-white text-black dark:bg-gray-700 dark:text-white"
          />


          <button onClick={() => setSelectedDate(new Date())} className="bg-blue-500 text-white px-3 py-1 rounded">
            Aujourd’hui
          </button>

          <button
            onClick={() => {
              const d = new Date();
              d.setDate(d.getDate() + 1);
              setSelectedDate(d);
            }}
            className="bg-blue-500 text-white px-3 py-1 rounded"
          >
            Demain
          </button>

          <button
            onClick={() => {
              setSelectedDate(null);
              setSelectedCompetition('');
            }}
            className="bg-gray-400 text-white px-3 py-1 rounded"
          >
            Réinitialiser
          </button>
        </div>
      </div>

      {Object.keys(groupedFiltered).length === 0 ? (
        <p className="text-center text-gray-500">Aucun match trouvé pour les filtres sélectionnés ⚽</p>
      ) : (
        Object.entries(groupedFiltered).map(([date, matches]) => (
          <div key={date}>
            <h3 className="text-xl font-semibold mb-2 text-green-600">📅 {date}</h3>
            <div className="space-y-2">
              {matches.map((match) => {
                const matchIndex = sorted.findIndex(m => m.datetime === match.datetime);
                const isNext = matchIndex === highlightedIndex;

                return (
                  <div
                    key={match.datetime}
                    className={`p-4 rounded shadow flex flex-col md:flex-row justify-between items-center gap-2 text-white
                      ${isNext ? 'bg-green-700 animate-pulse' : 'bg-gray-800'}`}
                  >
                    <div className="flex items-center gap-2">
                      {logos[match.team1] && (
                        <img src={logos[match.team1]} alt={match.team1} className="w-6 h-6 rounded-full" />
                      )}
                      <span className="font-bold">{match.team1}</span>
                      <span>vs</span>
                      <span className="font-bold">{match.team2}</span>
                      {logos[match.team2] && (
                        <img src={logos[match.team2]} alt={match.team2} className="w-6 h-6 rounded-full" />
                      )}
                    </div>
                    <div className="text-sm text-gray-300">
                      🕒 {format(parseISO(match.datetime), 'HH:mm')} | {match.competition}
                    </div>
                    <Countdown datetime={match.datetime} />
                  </div>
                );
              })}
            </div>
          </div>
        ))
      )}

      <Footer />
    </div>
    
  );
}

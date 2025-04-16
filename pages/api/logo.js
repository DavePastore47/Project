// pages/api/logo.js
export default async function handler(req, res) {
    const { team } = req.query;
  
    const response = await fetch(`https://api-football-v1.p.rapidapi.com/v3/teams?search=${team}`, {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': 'TON_API_KEY_ICI',
        'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
      }
    });
  
    const data = await response.json();
    if (data.response.length > 0) {
      res.status(200).json({ logo: data.response[0].team.logo });
    } else {
      res.status(404).json({ error: "Team not found" });
    }
  }
  
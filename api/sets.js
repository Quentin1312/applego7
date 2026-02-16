// API Serverless Vercel - Proxy CORS pour Rebrickable
// Déployé automatiquement sur Vercel

const https = require('https');

const API_KEY = '2cce541545b354fb7436d1d918198032';
const REBRICKABLE_URL = `https://rebrickable.com/api/v3/lego/sets/?ordering=-year&page_size=15&key=${API_KEY}`;

module.exports = async (req, res) => {
  // CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  // Récupération des données Rebrickable
  https.get(REBRICKABLE_URL, (apiRes) => {
    let data = '';

    apiRes.on('data', chunk => data += chunk);

    apiRes.on('end', () => {
      res.status(200).json(JSON.parse(data));
    });
  }).on('error', (err) => {
    console.error('Erreur API:', err.message);
    res.status(500).json({ error: 'API error' });
  });
};

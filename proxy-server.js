// ========== SERVEUR PROXY CORS POUR REBRICKABLE API ==========
// Lance avec : node proxy-server.js
// Puis ouvre : http://localhost:3000

const http = require('http');
const https = require('https');

const PORT = 3000;
const API_KEY = '2cce541545b354fb7436d1d918198032';
const REBRICKABLE_URL = `https://rebrickable.com/api/v3/lego/sets/?ordering=-year&page_size=15&key=${API_KEY}`;

const server = http.createServer((req, res) => {
  // CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    res.writeHead(200);
    res.end();
    return;
  }

  // Route API
  if (req.url === '/api/sets') {
    console.log('📡 Requête API vers Rebrickable...');

    https.get(REBRICKABLE_URL, (apiRes) => {
      let data = '';

      apiRes.on('data', chunk => data += chunk);

      apiRes.on('end', () => {
        console.log('✅ Données reçues !');
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(data);
      });
    }).on('error', (err) => {
      console.error('❌ Erreur API:', err.message);
      res.writeHead(500);
      res.end(JSON.stringify({ error: 'API error' }));
    });

  } else {
    res.writeHead(404);
    res.end('Not Found');
  }
});

server.listen(PORT, () => {
  console.log('\n🚀 Serveur CORS proxy démarré !');
  console.log(`📍 http://localhost:${PORT}`);
  console.log('🔥 Prêt à récupérer les sets LEGO depuis Rebrickable\n');
});

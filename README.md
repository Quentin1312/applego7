# 🧱 BrickAlert - App LEGO Live

Application web de veille LEGO connectée à l'API Rebrickable en **temps réel**.
Les données se mettent à jour automatiquement chaque jour !

## 🌐 Déploiement Production

**→ Voir [DEPLOY.md](DEPLOY.md) pour déployer sur Vercel en 2 minutes**

Une fois déployée, l'app récupère automatiquement les nouveaux sets LEGO sans intervention.

## 💻 Développement Local

```bash
# 1. Lance le serveur proxy
npm run dev

# 2. Ouvre index.html dans ton navigateur
# → Données live depuis Rebrickable !
```

## ✨ Fonctionnalités

✅ **Temps réel** - Nouveaux sets LEGO affichés automatiquement
✅ **Images officielles** - CDN Rebrickable
✅ **Favoris persistants** - localStorage
✅ **Prix réalistes** - Calculés selon nombre de pièces
✅ **3 pages** - Accueil, Explorer, Favoris
✅ **Responsive** - Format mobile 430px

## 📁 Structure

```
app-lego/
├── index.html          → Page principale (déployable)
├── lego-app.html       → Version dev locale
├── api/
│   └── sets.js        → Serverless function (Vercel)
├── proxy-server.js     → Proxy local (dev)
├── vercel.json        → Config déploiement
├── package.json       → Métadonnées
├── README.md          → Ce fichier
└── DEPLOY.md          → Guide déploiement Vercel
```

## 📡 API Rebrickable

- **Endpoint** : `/v3/lego/sets/`
- **Tri** : Par année (plus récents en premier)
- **Limite** : 15 sets par requête
- **Mise à jour** : Temps réel (API live)

## 🔄 Comment ça marche ?

1. **Chargement** : L'app fait une requête vers `/api/sets`
2. **Proxy** : La serverless function récupère les données depuis Rebrickable
3. **Affichage** : Les 15 sets les plus récents s'affichent
4. **Actualisation** : Chaque rechargement = nouvelles données

**Dans 1 mois** → Tu verras automatiquement les nouveaux sets sortis !

## 🐛 Debug

Ouvre la console (F12) pour voir :
- ✅ Statut connexion API
- 📦 Nombre de sets chargés
- 🔄 Mode (local/production)

## 🚀 Stack Technique

- **Front** : HTML/CSS/JS vanilla (aucun framework)
- **API** : Serverless Functions (Vercel)
- **Hosting** : Vercel (gratuit)
- **Data** : API Rebrickable

## 📝 License

MIT - Utilise librement pour tes projets !

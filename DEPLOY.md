# 🚀 Déploiement sur Vercel

## Méthode 1 : Via interface web (PLUS SIMPLE)

1. Va sur https://vercel.com
2. Connecte-toi avec GitHub/GitLab/Bitbucket
3. Clique sur **"Add New Project"**
4. Importe ce dossier ou connecte un repo Git
5. Vercel détecte automatiquement la config
6. Clique sur **"Deploy"**
7. ✅ Ton app est live en 30 secondes !

## Méthode 2 : Via CLI

```bash
# 1. Installe Vercel CLI
npm install -g vercel

# 2. Connecte-toi
vercel login

# 3. Déploie depuis ce dossier
vercel

# 4. Suis les instructions (appuie sur Entrée pour tout accepter)
```

## 🎯 Après déploiement

Ton app sera accessible sur une URL type :
```
https://brickalert.vercel.app
```

## ✨ Mise à jour automatique

- **Local** : Lance `npm run dev` puis ouvre `index.html`
- **Production** : Chaque push Git → redéploiement auto !

## 🔄 API en temps réel

L'app récupère **automatiquement** les nouveaux sets LEGO :
- Tous les jours : nouveaux sets ajoutés
- Chaque mois : mise à jour complète
- Aucune action manuelle nécessaire !

## 📁 Structure déployée

```
app-lego/
├── index.html          → Page principale
├── api/
│   └── sets.js        → API serverless (proxy CORS)
├── vercel.json        → Config Vercel
├── package.json       → Métadonnées
└── README.md          → Documentation
```

## 🐛 Debug

Si l'API ne marche pas :
1. Ouvre la console navigateur (F12)
2. Regarde l'onglet Network
3. Vérifie la requête vers `/api/sets`
4. Contacte-moi si erreur 500

## 💡 Variables d'environnement

L'API key Rebrickable est déjà intégrée dans `api/sets.js`.
Pas besoin de config supplémentaire !

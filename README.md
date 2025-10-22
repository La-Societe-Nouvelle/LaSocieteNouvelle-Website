# La Société Nouvelle - Site Web

Site web officiel de La Société Nouvelle, plateforme dédiée à la mesure et à la transparence des impacts sociaux et environnementaux des entreprises.

## À propos

Ce repository contient le code source du site web [lasocietenouvelle.org](https://lasocietenouvelle.org/), développé avec Next.js 15 et React 19.

La Société Nouvelle propose :
- **SINESE** : Base de données ouverte, synchronisée avec le répertoire SIRENE, pour y centraliser les empreintes sociétales des entreprises.
- **API publique** : Accès aux données SINESE de plus de 5 millions d'entreprises françaises
- **Documentation** : Guides méthodologiques et documentations techniques
- **Metriz** : Application web de mesure d'empreinte sociétale
- **Ressources pédagogiques** : Articles, infographies, podcasts

## Open Source & Open Data

La Société Nouvelle s'inscrit dans une démarche d'**ouverture et de transparence** en mettant à disposition ses outils et données :

### Open Source
- **Code source ouvert** : Ce site web, ainsi que l'application Metriz, sont publiés en open source pour permettre à chacun de contribuer et d'améliorer les outils
- **Méthodologies transparentes** : Toutes les méthodologies de calcul des indicateurs ESE (Empreinte Sociétale de l'Entreprise) sont documentées et accessibles publiquement
- **Collaboration communautaire** : Les contributions sont encouragées pour enrichir les fonctionnalités et améliorer l'expérience utilisateur

### Open Data
- **Base de données SINESE** : Plus de 5 millions d'entreprises françaises avec leurs empreintes sociétales accessibles librement
- **Données statistiques** : Jeux de données sur les impacts directs par activités économiques (NAF), mis à jour régulièrement
- **API publique gratuite** : Accès libre aux données via API REST et GraphQL, sans limitation pour un usage non commercial
- **Facteurs d'impact** : Données environnementales, sociales et économiques accessibles pour tous types d'analyses

Cette approche vise à **démocratiser l'accès à l'information extra-financière** et à encourager la transparence des entreprises sur leurs impacts sociaux et environnementaux.

## Stack technique

- **Framework** : [Next.js 15](https://nextjs.org/) (App Router)
- **UI** : React 19, React Bootstrap, Bootstrap 5.3
- **Styling** : SASS/SCSS, CSS Modules
- **Contenu** : MDX pour la documentation
- **Graphiques** : Chart.js, React Chart.js 2
- **Markdown** : React Markdown avec support LaTeX (KaTeX)

## Prérequis

- Node.js 18+
- npm ou yarn

## Installation

1. Cloner le repository :
```bash
git clone https://github.com/LaSOcieteNouvelle/LaSocieteNouvelle-Website.git
cd LaSocieteNouvelle-Website
```

2. Installer les dépendances :
```bash
npm install
```

3. Lancer le serveur de développement :
```bash
npm run dev
```

4. Ouvrir [http://localhost:3000](http://localhost:3000) dans votre navigateur

## Scripts disponibles

```bash
npm run dev      # Démarrer le serveur de développement
npm run build    # Construire l'application pour la production
npm run start    # Démarrer le serveur de production
```

## Fonctionnalités principales

### Site web
- Pages institutionnelles (À propos, Services, Contact)
- Blog et système de catégories
- Présentation des 17 indicateurs ESE
- Pages de ressources (API, Metriz, travaux statistiques)
- Newsletter et podcast

### Data Browser
- Navigation dans les jeux de données statistiques
- Visualisation des facteurs d'impact environnementaux
- Baromètre des émissions de GES
- Filtres et recherche avancée

### Documentation
- Méthodologie de l'empreinte sociétale
- Guide d'utilisation de Metriz
- Documentation des données statistiques
- API et données par défaut

### Redirections
- `data.lasocietenouvelle.org` → `/databrowser`
- `docs.lasocietenouvelle.org` → `/docs`
- `www.lasocietenouvelle.org` → `lasocietenouvelle.org`

## Contribution

Les contributions sont les bienvenues ! Pour contribuer :

1. Fork le projet
2. Créer une branche pour votre fonctionnalité (`git checkout -b feature/AmazingFeature`)
3. Commit vos changements (`git commit -m 'Add some AmazingFeature'`)
4. Push vers la branche (`git push origin feature/AmazingFeature`)
5. Ouvrir une Pull Request

### Conventions de code
- Suivre les conventions de nommage React/Next.js
- Documenter les nouvelles fonctionnalités
- Tester le responsive design

## Ressources utiles

- [Documentation Next.js](https://nextjs.org/docs)
- [React Bootstrap](https://react-bootstrap.github.io/)
- [Bootstrap Icons](https://icons.getbootstrap.com/)
- [API La Société Nouvelle](https://api.lasocietenouvelle.org)

## Contact

La Société Nouvelle
- Site web : [https://lasocietenouvelle.org](https://lasocietenouvelle.org)
- Email : contact@lasocietenouvelle.org
- GitHub : [@LaSOcieteNouvelle](https://github.com/LaSOcieteNouvelle)

---

Développé par l'équipe La Société Nouvelle

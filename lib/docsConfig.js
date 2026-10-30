import metaData from './metaData.json';

// Configuration unique de la navigation de la documentation.
// Elle alimente le menu principal, le menu latéral, le fil d'Ariane
// et les liens « Précédent / Suivant ». L'ordre des pages sert d'ordre de lecture.

export const DOCS_ROOT = { href: '/docs', title: 'Documentation' };

export const statisticalDatasets = {
  macro_fpt: {
    label: 'Données historiques',
    title: 'Empreintes des activités économiques - Données historiques',
    description: 'Données historiques des empreintes sociétales et environnementales des activités économiques',
  },
  macro_fpt_trd: {
    label: 'Tendances',
    title: 'Empreintes des activités économiques - Tendances',
    description: 'Tendances des empreintes sociétales et environnementales des activités économiques',
  },
  macro_fpt_tgt: {
    label: 'Trajectoires cibles',
    title: 'Empreintes des activités économiques - Trajectoires cibles',
    description: 'Trajectoires cibles des empreintes sociétales et environnementales des activités économiques',
  },
};

export const metrizIntegrations = {
  acd: { title: 'Connecteur ACD', description: 'Documentation du connecteur entre Metriz et ACD.' },
  inqom: { title: 'Connecteur Inqom', description: 'Documentation du connecteur entre Metriz et Inqom.' },
  myunisoft: { title: 'Connecteur MyUnisoft', description: 'Documentation du connecteur entre Metriz et MyUnisoft.' },
  openpaye: { title: 'Connecteur OpenPaye', description: 'Documentation du connecteur entre Metriz et OpenPaye.' },
  pennylane: { title: 'Connecteur Pennylane', description: 'Documentation du connecteur entre Metriz et Pennylane.' },
  tiime: { title: 'Connecteur Tiime', description: 'Documentation du connecteur entre Metriz et Tiime.' },
};

// Pages générées dynamiquement : titre déduit du dernier segment de l'URL
const dynamicPages = [
  { base: '/docs/metriz-webapp/declarations', getTitle: (key) => metaData[key]?.libelle },
  { base: '/docs/donnees-statistiques/sources', getTitle: (key) => metaData[key]?.libelle },
  { base: '/docs/metriz-webapp/connecteurs', getTitle: (key) => metrizIntegrations[key]?.title },
];

// Libellés courts des indicateurs pour le menu (le libellé officiel reste le titre de la fiche)
const indicatorShortTitles = {
  eco: 'Économie nationale',
  art: "Métiers d'art et savoir-faire",
  soc: "Acteurs d'intérêt social",
  knw: 'Compétences et connaissances',
  idr: 'Écart des rémunérations',
  geq: 'Écart femmes / hommes',
  ghg: 'Gaz à effet de serre',
  nrg: 'Énergie',
  wat: 'Eau',
  was: 'Déchets',
  mat: 'Matières premières',
  haz: 'Produits dangereux',
};

// Dossier dépliable du menu : fiches d'une famille d'indicateurs
const indicatorFolder = (family, title, base = '/docs/empreinte-societale/indicateurs') => ({
  title,
  links: metaData[family].indics.map((key) => ({
    href: `${base}/${key}`,
    title: indicatorShortTitles[key],
    pageTitle: metaData[key].libelle,
  })),
});

// Données par défaut : indicateurs suivant la règle générale ou un cas particulier
export const defaultDataRules = {
  general: ['eco', 'knw', 'ghg', 'nrg', 'wat', 'was', 'mat', 'haz'],
  specific: ['art', 'soc', 'geq', 'idr'],
};

const defaultDataFolder = (title, keys) => ({
  title,
  links: keys.map((key) => ({
    href: `/docs/donnees-par-defaut/methodologie/${key}`,
    title: indicatorShortTitles[key],
    pageTitle: metaData[key].libelle,
  })),
});

export const docsSections = [
  {
    id: 'empreinte-societale',
    icon: 'bi-book',
    description: "Les 12 indicateurs du référentiel, leur méthodologie et leur application aux flux comptables.",
    title: 'Empreinte Sociétale',
    href: '/docs/empreinte-societale',
    groups: [
      {
        links: [
          { href: '/docs/empreinte-societale', title: 'Présentation' },
        ],
      },
      {
        title: 'Indicateurs',
        links: [
          { href: '/docs/empreinte-societale/indicateurs', title: "Vue d'ensemble", pageTitle: 'Les indicateurs', crumb: 'Indicateurs' },
          indicatorFolder('indics-es', 'Socio-économiques'),
          indicatorFolder('indics-env', 'Environnementaux'),
        ],
      },
      {
        title: 'Mesure',
        links: [
          { href: '/docs/empreinte-societale/methodologie', title: 'Méthodologie' },
          { href: '/docs/empreinte-societale/application-flux-comptables', title: 'Application comptable', pageTitle: 'Application des indicateurs aux flux comptables' },
        ],
      },
    ],
  },
  {
    id: 'metriz-webapp',
    icon: 'bi-window',
    description: "Guide utilisateur de Metriz, l'application web de mesure de l'Empreinte Sociétale.",
    title: 'Application Web - Metriz',
    shortTitle: 'Application Metriz',
    href: '/docs/metriz-webapp',
    groups: [
      {
        title: 'Démarrer',
        links: [
          { href: '/docs/metriz-webapp', title: 'Présentation' },
          { href: '/docs/metriz-webapp/creer-un-compte', title: 'Créer son compte' },
          { href: '/docs/metriz-webapp/informations-necessaires', title: 'Prérequis', pageTitle: 'Prérequis : informations nécessaires' },
          { href: '/docs/metriz-webapp/analyse-rapide', title: 'Démarrage rapide' },
          {
            title: 'Connecteurs',
            links: [
              { href: '/docs/metriz-webapp/connecteurs', title: "Vue d'ensemble", pageTitle: 'Connecteurs', crumb: 'Connecteurs' },
              ...Object.entries(metrizIntegrations).map(([key, integration]) => ({
                href: `/docs/metriz-webapp/connecteurs/${key}`,
                title: integration.title.replace('Connecteur ', ''),
                pageTitle: integration.title,
              })),
            ],
          },
        ],
      },
      {
        title: 'Guides pas à pas',
        links: [
          { href: '/docs/metriz-webapp/tutoriel', title: 'Vue d\'ensemble du parcours' },
          { href: '/docs/metriz-webapp/creer-unite-legale', title: 'Ajouter une entreprise' },
          { href: '/docs/metriz-webapp/importer-le-fec', title: 'Importer le FEC' },
          { href: '/docs/metriz-webapp/immobilisations', title: 'Empreinte des immobilisations' },
          { href: '/docs/metriz-webapp/achats', title: 'Empreinte des achats' },
          {
            title: 'Déclarer les impacts directs',
            links: [
              { href: '/docs/metriz-webapp/declarer-impacts-directs', title: "Vue d'ensemble", pageTitle: 'Déclarer les impacts directs', crumb: 'Déclarer les impacts directs' },
              // Fiches dans l'ordre des sections de l'application : profil, données sociales, impact environnemental
              ...['eco', 'art', 'soc', 'geq', 'idr', 'knw', 'ghg', 'nrg', 'wat', 'haz', 'mat', 'was'].map((key) => ({
                href: `/docs/metriz-webapp/declarations/${key}`,
                title: indicatorShortTitles[key],
                pageTitle: metaData[key].libelle,
              })),
            ],
          },
          { href: '/docs/metriz-webapp/consulter-les-resultats', title: 'Consulter les résultats' },
        ],
      },
      {
        title: 'Aller plus loin',
        links: [
          { href: '/docs/metriz-webapp/analyser-et-restituer-les-resultats', title: 'Analyser et restituer les résultats' },
          { href: '/docs/metriz-webapp/livrables', title: 'Générer les livrables' },
          { href: '/docs/metriz-webapp/publication', title: "Publier l'empreinte", pageTitle: "Publier l'empreinte sociétale" },
          { href: '/docs/metriz-webapp/module-vs', title: 'Compléter le module de base VS' },
        ],
      },
      {
        title: 'Comprendre la méthode',
        links: [
          { href: '/docs/metriz-webapp/etapes-de-calcul', title: 'Étapes de calcul', pageTitle: "Obtention de l'Empreinte Sociétale" },
          { href: '/docs/metriz-webapp/utilisation-ia', title: 'Utilisation de l\'IA' },
        ],
      },
      {
        title: 'Référence',
        links: [
          { href: '/docs/metriz-webapp/declarations', title: 'Indicateurs et déclarations', crumb: 'Déclarations' },
          { href: '/docs/metriz-webapp/lecture-fec', title: 'Lecture du FEC', pageTitle: "Lecture du Fichier des Écritures Comptables (FEC)" },
          { href: '/docs/metriz-webapp/lecture-dsn', title: 'Lecture des DSN', pageTitle: 'Lecture des Déclarations Sociales Nominatives (DSN)' },
          {
            title: "Sources d'émission",
            links: [
              { href: '/docs/metriz-webapp/liste-combustibles', title: 'Combustibles', pageTitle: 'Liste des combustibles' },
              { href: '/docs/metriz-webapp/liste-carburants', title: 'Carburants', pageTitle: 'Liste des carburants' },
              { href: '/docs/metriz-webapp/liste-installations-refrigeration', title: 'Réfrigération et climatisation', pageTitle: 'Liste des installations de réfrigération et de climatisation' },
            ],
          },
        ],
      },
      {
        title: 'Aide',
        links: [
          { href: '/docs/metriz-webapp/aide-et-support', title: 'Aide et support' },
        ],
      },
    ],
  },
  {
    id: 'donnees-statistiques',
    navGroup: 'Données',
    icon: 'bi-bar-chart-line',
    description: "Jeux de données des empreintes des activités économiques, sources et méthodologie.",
    title: 'Données statistiques',
    href: '/docs/donnees-statistiques',
    groups: [
      {
        links: [
          { href: '/docs/donnees-statistiques', title: 'Présentation' },
        ],
      },
      {
        title: 'Jeux de données',
        links: Object.entries(statisticalDatasets).map(([id, dataset]) => ({
          href: `/docs/donnees-statistiques/jeux-de-donnees/${id}`,
          title: dataset.label,
          pageTitle: dataset.title,
        })),
      },
      {
        title: 'Méthodologie',
        links: [
          { href: '/docs/donnees-statistiques/methodologie', title: 'Modélisation des empreintes', pageTitle: 'Méthodologie', crumb: 'Méthodologie' },
          { href: '/docs/donnees-statistiques/sources', title: 'Sources par indicateur', pageTitle: 'Sources des données', crumb: 'Sources' },
          indicatorFolder('indics-es', 'Socio-économiques', '/docs/donnees-statistiques/sources'),
          indicatorFolder('indics-env', 'Environnementaux', '/docs/donnees-statistiques/sources'),
        ],
      },
    ],
  },
  {
    id: 'donnees-par-defaut',
    navGroup: 'Données',
    icon: 'bi-calculator',
    description: "Principes et méthodes de calcul des valeurs macroéconomiques par défaut.",
    title: 'Données par défaut',
    href: '/docs/donnees-par-defaut',
    groups: [
      {
        links: [
          { href: '/docs/donnees-par-defaut', title: 'Présentation' },
        ],
      },
      {
        title: 'Méthodologie',
        links: [
          { href: '/docs/donnees-par-defaut/methodologie', title: 'Règle générale', crumb: 'Méthodologie' },
          defaultDataFolder('Cas particuliers', defaultDataRules.specific),
        ],
      },
    ],
  },
];

// Outils et services externes : menu « Ressources » de l'en-tête
export const externalLinks = [
  { group: 'Outils', href: 'https://metriz.lasocietenouvelle.org', title: 'Metriz', icon: 'bi-window', description: "Mesurer l'empreinte sociétale de son entreprise." },
  { group: 'Données', href: 'https://sinese.fr', title: 'Portail SINESE', icon: 'bi-building', description: 'Consulter les empreintes des entreprises.' },
  { group: 'Données', href: 'https://www.lasocietenouvelle.org/databrowser', title: 'Databrowser', icon: 'bi-table', description: 'Explorer les jeux de données statistiques.' },
  { group: 'Développeurs', href: 'https://api.sinese.fr/docs/', title: 'API SINESE', icon: 'bi-code-slash', description: "Référence technique de l'API publique pour intégrer les données dans vos outils." },
  { group: 'Développeurs', href: 'https://api.stats.lasocietenouvelle.org/', title: 'API Stats', icon: 'bi-graph-up', description: 'Séries statistiques macroéconomiques : historiques, tendances et trajectoires cibles sectorielles.' },
];

export const normalizePath = (path) => (path || '').replace(/\/$/, '') || '/';

const isUnder = (pathname, href) =>
  pathname === href || pathname.startsWith(`${href}/`);

export function getSection(pathname) {
  const path = normalizePath(pathname);
  return docsSections.find((section) => isUnder(path, section.href)) || null;
}

// Liens du menu dans l'ordre de lecture, dossiers dépliés
function flatLinks(section) {
  return section.groups.flatMap((group) => group.links).flatMap((link) => link.links || [link]);
}

// Lien du menu correspondant à la page : correspondance exacte,
// sinon le parent le plus proche (ex. une fiche indicateur).
export function getActiveLink(pathname) {
  const path = normalizePath(pathname);
  const section = getSection(path);
  if (!section) return null;
  return flatLinks(section)
    .filter((link) => isUnder(path, link.href))
    .sort((a, b) => b.href.length - a.href.length)[0] || null;
}

// Titre affiché de la page (h1, onglet du navigateur, fil d'Ariane)
export function getPageTitle(pathname) {
  const path = normalizePath(pathname);
  const section = getSection(path);
  if (!section) return null;

  const link = flatLinks(section).find((l) => l.href === path);
  if (link) return link.pageTitle || (link.href === section.href ? section.title : link.title);

  const dynamicPage = dynamicPages.find((page) => path.startsWith(`${page.base}/`));
  return dynamicPage?.getTitle(path.slice(dynamicPage.base.length + 1)) || null;
}

// Métadonnées d'une page statique (le suffixe « - Documentation » vient du layout)
export function docsMetadata(href, metadata = {}) {
  return { title: getPageTitle(href), ...metadata };
}

export function getPrevNext(pathname) {
  const path = normalizePath(pathname);
  const section = getSection(path);
  if (!section) return { prev: null, next: null };
  const links = flatLinks(section);
  const index = links.findIndex((link) => link.href === path);
  if (index === -1) return { prev: null, next: null };
  return {
    prev: index > 0 ? links[index - 1] : null,
    next: index < links.length - 1 ? links[index + 1] : null,
  };
}

// Fil d'Ariane : Documentation > Section > pages parentes > page courante
export function getBreadcrumb(pathname, pageTitle = getPageTitle(pathname)) {
  const path = normalizePath(pathname);
  const section = getSection(path);
  if (!section) return [];

  const items = [DOCS_ROOT, { href: section.href, title: section.shortTitle || section.title }];
  const links = flatLinks(section);
  const segments = path.slice(section.href.length).split('/').filter(Boolean);

  let current = section.href;
  segments.forEach((segment, index) => {
    current = `${current}/${segment}`;
    const isLast = index === segments.length - 1;
    const link = links.find((l) => l.href === current);
    if (isLast) {
      items.push({ title: pageTitle || link?.title || segment });
    } else if (link) {
      items.push({ href: link.href, title: link.crumb || link.title });
    }
  });

  // Sur la page d'accueil d'une section, la section est le dernier élément
  if (segments.length === 0) {
    items[items.length - 1] = { title: items[items.length - 1].title };
  }

  return items;
}

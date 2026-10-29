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
    label: 'Objectifs annuels',
    title: 'Empreintes des activités économiques - Objectifs annuels',
    description: 'Trajectoires cibles des empreintes sociétales et environnementales des activités économiques',
  },
};

export const metrizIntegrations = {
  acd: { title: 'Intégration ACD', description: 'Documentation de l’intégration entre Metriz et ACD.' },
  inqom: { title: 'Intégration Inqom', description: 'Documentation de l’intégration entre Metriz et Inqom.' },
  myunisoft: { title: 'Intégration MyUnisoft', description: 'Documentation de l’intégration entre Metriz et MyUnisoft.' },
  openpaye: { title: 'Intégration OpenPaye', description: 'Documentation de l’intégration entre Metriz et OpenPaye.' },
  pennylane: { title: 'Intégration Pennylane', description: 'Documentation de l’intégration entre Metriz et Pennylane.' },
  tiime: { title: 'Intégration Tiime', description: 'Documentation de l’intégration entre Metriz et Tiime.' },
};

// Pages générées dynamiquement : titre déduit du dernier segment de l'URL
const dynamicPages = [
  { base: '/docs/empreinte-societale/indicateurs', getTitle: (key) => metaData[key]?.libelle },
  { base: '/docs/metriz-webapp/declarations', getTitle: (key) => metaData[key]?.libelle },
  { base: '/docs/metriz-webapp/integrations', getTitle: (key) => metrizIntegrations[key]?.title },
];

export const docsSections = [
  {
    id: 'empreinte-societale',
    title: 'Empreinte Sociétale',
    href: '/docs/empreinte-societale',
    groups: [
      {
        links: [
          { href: '/docs/empreinte-societale', title: 'Présentation' },
          { href: '/docs/empreinte-societale/description', title: 'Description', pageTitle: "Description de l'Empreinte Sociétale" },
          { href: '/docs/empreinte-societale/indicateurs', title: 'Les indicateurs', pageTitle: 'Liste des indicateurs' },
          { href: '/docs/empreinte-societale/methodologie', title: 'Méthodologie' },
          { href: '/docs/empreinte-societale/application-flux-comptables', title: 'Application comptable', pageTitle: 'Application des indicateurs aux flux comptables' },
        ],
      },
    ],
  },
  {
    id: 'donnees-par-defaut',
    title: 'Données par défaut',
    href: '/docs/donnees-par-defaut',
    groups: [
      {
        links: [
          { href: '/docs/donnees-par-defaut', title: 'Présentation' },
          { href: '/docs/donnees-par-defaut/methodologie', title: 'Méthodologie', pageTitle: 'Méthodologie des données par défaut' },
        ],
      },
    ],
  },
  {
    id: 'metriz-webapp',
    title: 'Application Web - Metriz',
    shortTitle: 'Metriz',
    href: '/docs/metriz-webapp',
    groups: [
      {
        title: 'Démarrer',
        links: [
          { href: '/docs/metriz-webapp', title: 'Présentation' },
          { href: '/docs/metriz-webapp/creer-un-compte', title: 'Créer son compte' },
          { href: '/docs/metriz-webapp/informations-necessaires', title: 'Prérequis', pageTitle: 'Prérequis : informations nécessaires' },
          { href: '/docs/metriz-webapp/analyse-rapide', title: 'Démarrage rapide' },
        ],
      },
      {
        title: 'Guides pas à pas',
        links: [
          { href: '/docs/metriz-webapp/tutoriel', title: 'Vue d\'ensemble du parcours' },
          { href: '/docs/metriz-webapp/creer-unite-legale', title: 'Créer une unité légale' },
          { href: '/docs/metriz-webapp/importer-le-fec', title: 'Importer le FEC' },
          { href: '/docs/metriz-webapp/immobilisations', title: 'Catégoriser les immobilisations' },
          { href: '/docs/metriz-webapp/achats', title: 'Catégoriser les achats' },
          { href: '/docs/metriz-webapp/declarer-impacts-directs', title: 'Déclarer les impacts directs' },
          { href: '/docs/metriz-webapp/consulter-les-resultats', title: 'Consulter les résultats' },
        ],
      },
      {
        title: 'Connecter ses outils',
        links: [{ href: '/docs/metriz-webapp/integrations', title: 'Intégrations', pageTitle: 'Connecteurs et Intégrations' }],
      },
      {
        title: 'Résultats et publication',
        links: [{ href: '/docs/metriz-webapp/resultats-et-livrables', title: 'Résultats et livrables' }],
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
          { href: '/docs/metriz-webapp/declarations', title: 'Indicateurs et déclarations' },
          { href: '/docs/metriz-webapp/lecture-fec', title: 'Lecture du FEC', pageTitle: 'Lecture du Fichier des Ecritures Comptables (FEC)' },
          { href: '/docs/metriz-webapp/lecture-dsn', title: 'Lecture des DSN', pageTitle: 'Lecture des Déclarations Sociales Nominatives (DSN)' },
        ],
      },
      {
        title: 'Aide',
        links: [
          { href: '/docs/metriz-webapp/faq', title: 'FAQ et dépannage' },
          { href: '/docs/metriz-webapp/glossaire', title: 'Glossaire' },
        ],
      },
    ],
  },
  {
    id: 'donnees-statistiques',
    title: 'Données statistiques',
    href: '/docs/donnees-statistiques',
    groups: [
      {
        links: [
          { href: '/docs/donnees-statistiques', title: 'Présentation' },
          { href: '/docs/donnees-statistiques/methodologie', title: 'Méthodologie' },
          { href: '/docs/donnees-statistiques/sources-impacts-directs', title: 'Sources - Impacts directs' },
          { href: '/docs/donnees-statistiques/sources-objectifs', title: 'Sources - Objectifs 2030' },
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
    ],
  },
];

export const externalLinks = [
  { href: 'https://lasocietenouvelle.readme.io/', title: 'API SINESE' },
];

export const normalizePath = (path) => (path || '').replace(/\/$/, '') || '/';

const isUnder = (pathname, href) =>
  pathname === href || pathname.startsWith(`${href}/`);

export function getSection(pathname) {
  const path = normalizePath(pathname);
  return docsSections.find((section) => isUnder(path, section.href)) || null;
}

function flatLinks(section) {
  return section.groups.flatMap((group) => group.links);
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
      items.push({ href: link.href, title: link.title });
    }
  });

  // Sur la page d'accueil d'une section, la section est le dernier élément
  if (segments.length === 0) {
    items[items.length - 1] = { title: items[items.length - 1].title };
  }

  return items;
}

// Configuration unique de la navigation de la documentation.
// Elle alimente le menu principal, le menu latéral, le fil d'Ariane
// et les liens « Précédent / Suivant ». L'ordre des pages sert d'ordre de lecture.

export const DOCS_ROOT = { href: '/docs', title: 'Documentation' };

export const docsSections = [
  {
    id: 'empreinte-societale',
    title: 'Empreinte Sociétale',
    href: '/docs/empreinte-societale',
    groups: [
      {
        links: [
          { href: '/docs/empreinte-societale', title: 'Présentation' },
          { href: '/docs/empreinte-societale/description', title: 'Description' },
          { href: '/docs/empreinte-societale/indicateurs', title: 'Les indicateurs' },
          { href: '/docs/empreinte-societale/methodologie', title: 'Méthodologie' },
          { href: '/docs/empreinte-societale/application-flux-comptables', title: 'Application comptable' },
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
          { href: '/docs/donnees-par-defaut/methodologie', title: 'Méthodologie' },
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
          { href: '/docs/metriz-webapp/informations-necessaires', title: 'Prérequis' },
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
        links: [{ href: '/docs/metriz-webapp/integrations', title: 'Intégrations' }],
      },
      {
        title: 'Résultats et publication',
        links: [{ href: '/docs/metriz-webapp/resultats-et-livrables', title: 'Résultats et livrables' }],
      },
      {
        title: 'Comprendre la méthode',
        links: [
          { href: '/docs/metriz-webapp/etapes-de-calcul', title: 'Étapes de calcul' },
          { href: '/docs/metriz-webapp/utilisation-ia', title: 'Utilisation de l\'IA' },
        ],
      },
      {
        title: 'Référence',
        links: [
          { href: '/docs/metriz-webapp/declarations', title: 'Indicateurs et déclarations' },
          { href: '/docs/metriz-webapp/lecture-fec', title: 'Lecture du FEC' },
          { href: '/docs/metriz-webapp/lecture-dsn', title: 'Lecture des DSN' },
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
        links: [
          { href: '/docs/donnees-statistiques/jeux-de-donnees/macro_fpt', title: 'Données historiques' },
          { href: '/docs/donnees-statistiques/jeux-de-donnees/macro_fpt_trd', title: 'Tendances' },
          { href: '/docs/donnees-statistiques/jeux-de-donnees/macro_fpt_tgt', title: 'Objectifs annuels' },
        ],
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
export function getBreadcrumb(pathname, pageTitle) {
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

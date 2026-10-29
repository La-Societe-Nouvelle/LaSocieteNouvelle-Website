const BASE = '/docs/metriz-webapp';

// Structure de la documentation (groupes du menu latéral).
// L'ordre des pages sert aussi aux liens « Précédent / Suivant ».
export const navigationGroups = [
  {
    title: 'Démarrer',
    links: [
      { href: `${BASE}`, title: 'Présentation' },
      { href: `${BASE}/creer-un-compte`, title: 'Créer son compte' },
      { href: `${BASE}/informations-necessaires`, title: 'Prérequis' },
      { href: `${BASE}/analyse-rapide`, title: 'Démarrage rapide' },
    ],
  },
  {
    title: 'Guides pas à pas',
    links: [
      { href: `${BASE}/tutoriel`, title: 'Vue d\'ensemble du parcours' },
      { href: `${BASE}/creer-unite-legale`, title: 'Créer une unité légale' },
      { href: `${BASE}/importer-le-fec`, title: 'Importer le FEC' },
      { href: `${BASE}/immobilisations`, title: 'Catégoriser les immobilisations' },
      { href: `${BASE}/achats`, title: 'Catégoriser les achats' },
      { href: `${BASE}/declarer-impacts-directs`, title: 'Déclarer les impacts directs' },
      { href: `${BASE}/consulter-les-resultats`, title: 'Consulter les résultats' },
    ],
  },
  {
    title: 'Connecter ses outils',
    links: [{ href: `${BASE}/integrations`, title: 'Intégrations' }],
  },
  {
    title: 'Résultats et publication',
    links: [{ href: `${BASE}/resultats-et-livrables`, title: 'Résultats et livrables' }],
  },
  {
    title: 'Comprendre la méthode',
    links: [
      { href: `${BASE}/etapes-de-calcul`, title: 'Étapes de calcul' },
      { href: `${BASE}/utilisation-ia`, title: 'Utilisation de l\'IA' },
    ],
  },
  {
    title: 'Référence',
    links: [
      { href: `${BASE}/declarations`, title: 'Indicateurs et déclarations' },
      { href: `${BASE}/lecture-fec`, title: 'Lecture du FEC' },
      { href: `${BASE}/lecture-dsn`, title: 'Lecture des DSN' },
    ],
  },
  {
    title: 'Aide',
    links: [
      { href: `${BASE}/faq`, title: 'FAQ et dépannage' },
      { href: `${BASE}/glossaire`, title: 'Glossaire' },
    ],
  },
];

// Liste à plat, dans l'ordre de lecture
export const flatNavigation = navigationGroups.flatMap(group =>
  group.links.map(link => ({ ...link, group: group.title }))
);

const normalize = (path) => (path || '').replace(/\/$/, '');

export function getPrevNext(pathname) {
  const index = flatNavigation.findIndex(link => normalize(link.href) === normalize(pathname));
  if (index === -1) return { prev: null, next: null };
  return {
    prev: index > 0 ? flatNavigation[index - 1] : null,
    next: index < flatNavigation.length - 1 ? flatNavigation[index + 1] : null,
  };
}

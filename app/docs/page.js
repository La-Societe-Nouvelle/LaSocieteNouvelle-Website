import Link from "next/link";
import { Cards, Card } from "@/components/docs/mdx";
import { DocsSearchButton } from "@/components/docs/DocsSearch";
import { docsSections, externalLinks, statisticalDatasets } from "@/lib/docsConfig";

// Points d'entrée selon le profil du lecteur
const profiles = [
  {
    icon: "bi-compass",
    title: "Je découvre l'Empreinte Sociétale",
    text: "Comprendre le référentiel, ses indicateurs et la façon dont ils sont calculés.",
    links: [
      { href: "/docs/empreinte-societale/description", title: "Qu'est-ce que l'Empreinte Sociétale ?" },
      { href: "/docs/empreinte-societale/indicateurs", title: "Les 12 indicateurs" },
      { href: "/docs/empreinte-societale/methodologie", title: "Méthodologie" },
    ],
  },
  {
    icon: "bi-building",
    title: "Je mesure l'empreinte de mon entreprise",
    text: "Réaliser une première mesure avec Metriz à partir de ses données comptables.",
    links: [
      { href: "/docs/metriz-webapp/creer-un-compte", title: "Créer son compte" },
      { href: "/docs/metriz-webapp/analyse-rapide", title: "Démarrage rapide" },
      { href: "/docs/metriz-webapp/tutoriel", title: "Le parcours pas à pas" },
    ],
  },
  {
    icon: "bi-people",
    title: "J'accompagne des entreprises",
    text: "Experts-comptables et conseils : connecter vos outils et exploiter les livrables.",
    links: [
      { href: "/docs/metriz-webapp/integrations", title: "Connecteurs et intégrations" },
      { href: "/docs/metriz-webapp/lecture-fec", title: "Lecture du FEC" },
      { href: "/docs/metriz-webapp/resultats-et-livrables", title: "Résultats et livrables" },
    ],
  },
  {
    icon: "bi-database",
    title: "J'exploite les données",
    text: "Chercheurs, analystes, développeurs : accéder aux jeux de données et à leurs sources.",
    links: [
      ...Object.entries(statisticalDatasets).slice(0, 1).map(([id, dataset]) => ({
        href: `/docs/donnees-statistiques/jeux-de-donnees/${id}`,
        title: dataset.label,
      })),
      { href: "/docs/donnees-statistiques/methodologie", title: "Méthodologie" },
      { href: "https://lasocietenouvelle.readme.io/", title: "API SINESE" },
    ],
  },
];

export default function DocsHome() {
  return (
    <div className="docs-home">
      <section className="docs-home-hero">
        <h1>Documentation</h1>
        <p className="docs-home-lead">
          Guides, méthodologies et données de référence pour mesurer et comprendre
          l'Empreinte Sociétale des entreprises.
        </p>
        <DocsSearchButton className="docs-home-search">
          <i className="bi bi-search" aria-hidden="true"></i>
          <span>Rechercher dans la documentation</span>
          <kbd>Ctrl K</kbd>
        </DocsSearchButton>
      </section>

      <section className="docs-home-section">
        <h2>Par où commencer ?</h2>
        <div className="docs-home-profiles">
          {profiles.map((profile) => (
            <div key={profile.title} className="docs-home-profile">
              <i className={`bi ${profile.icon} docs-home-profile-icon`} aria-hidden="true"></i>
              <h3>{profile.title}</h3>
              <p>{profile.text}</p>
              <ul>
                {profile.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      {...(link.href.startsWith("http") && { target: "_blank", rel: "noopener noreferrer" })}
                    >
                      {link.title}
                      <i className="bi bi-arrow-right" aria-hidden="true"></i>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="docs-home-section">
        <h2>Toute la documentation</h2>
        <Cards>
          {[...docsSections, ...externalLinks].map((item) => (
            <Card key={item.href} href={item.href} title={item.title} icon={item.icon}>
              {item.description}
            </Card>
          ))}
        </Cards>
      </section>
    </div>
  );
}

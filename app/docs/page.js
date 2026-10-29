import Link from "next/link";
import Image from "next/image";
import { Cards, Card } from "@/components/docs/mdx";
import { DocsSearchButton } from "@/components/docs/DocsSearch";
import { docsSections, externalLinks, statisticalDatasets } from "@/lib/docsConfig";
import metaData from "@/lib/metaData.json";

// Raccourcis sous la recherche
const popularLinks = [
  { href: "/docs/empreinte-societale/indicateurs/ghg", title: "Intensité GES" },
  { href: "/docs/metriz-webapp/lecture-fec", title: "Lecture du FEC" },
  { href: "/docs/donnees-par-defaut", title: "Valeurs par défaut" },
  { href: "/docs/metriz-webapp/analyse-rapide", title: "Démarrage rapide" },
];

// Indicateurs, dans l'ordre du référentiel : socio-économiques puis environnementaux
const indicators = [...metaData["indics-es"].indics, ...metaData["indics-env"].indics];

// Points d'entrée selon le profil du lecteur
const profiles = [
  {
    icon: "bi-compass",
    title: "Je découvre l'Empreinte Sociétale",
    text: "Comprendre la démarche, les 12 indicateurs et leur mode de calcul.",
    links: [
      { href: "/docs/empreinte-societale/description", title: "Qu'est-ce que l'Empreinte Sociétale ?" },
      { href: "/docs/empreinte-societale/indicateurs", title: "Les 12 indicateurs" },
      { href: "/docs/empreinte-societale/methodologie", title: "Méthodologie" },
    ],
  },
  {
    icon: "bi-building",
    title: "Je mesure avec Metriz",
    text: "Entreprises et experts-comptables : mesurer à partir des données comptables et exploiter les livrables.",
    links: [
      { href: "/docs/metriz-webapp/tutoriel", title: "Le parcours pas à pas" },
      { href: "/docs/metriz-webapp/integrations", title: "Intégrations avec vos logiciels" },
      { href: "/docs/metriz-webapp/resultats-et-livrables", title: "Résultats et livrables" },
    ],
  },
  {
    icon: "bi-database",
    title: "J'exploite les données",
    text: "Chercheurs, analystes, développeurs : accéder aux jeux de données et à leurs sources.",
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
        <div className="docs-home-hero-inner">
          <div className="docs-home-kicker">La Société Nouvelle</div>
          <h1>Bienvenue sur l'espace documentation</h1>
          <p className="docs-home-lead">
            L'ensemble des documentations et informations utiles relatives à l'Empreinte
            Sociétale de l'Entreprise et au système d'information et de comptabilité associé.
          </p>
          <DocsSearchButton className="docs-home-search">
            <i className="bi bi-search" aria-hidden="true"></i>
            <span>Rechercher un indicateur, une méthode, un guide…</span>
            <kbd>Ctrl K</kbd>
          </DocsSearchButton>
          <div className="docs-home-popular">
            <span>Recherches fréquentes :</span>
            {popularLinks.map((link) => (
              <Link key={link.href} href={link.href}>{link.title}</Link>
            ))}
          </div>
        </div>
      </section>

      <div className="docs-home-body">
        <section>
          <div className="docs-home-section-head">
            <div>
              <h2>Par où commencer&nbsp;?</h2>
            </div>
          </div>
          <div className="docs-home-profiles">
            {profiles.map((profile) => (
              <div key={profile.title} className="docs-home-profile">
                <span className="docs-home-profile-icon" aria-hidden="true">
                  <i className={`bi ${profile.icon}`}></i>
                </span>
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

        <section>
          <div className="docs-home-section-head">
            <div>
              <h2>Les 12 indicateurs</h2>
            </div>
            <Link href="/docs/empreinte-societale/indicateurs">Voir tous les indicateurs →</Link>
          </div>
          <div className="docs-home-indicators">
            {indicators.map((key) => (
              <Link key={key} href={`/docs/empreinte-societale/indicateurs/${key}`} className="docs-home-indicator">
                <Image src={`/ESE/picto/ese-${key}-color.svg`} alt="" width={40} height={40} />
                {metaData[key].libelle}
              </Link>
            ))}
          </div>
        </section>

        <section className="docs-home-sections">
          <div className="docs-home-section-head">
            <div>
              <h2>Toute la documentation</h2>
            </div>
          </div>
          <Cards>
            {[...docsSections, ...externalLinks].map((item) => (
              <Card key={item.href} href={item.href} title={item.shortTitle || item.title} icon={item.icon}>
                {item.description}
              </Card>
            ))}
          </Cards>
        </section>

        <section className="docs-home-help">
          <div>
            <h2>Vous ne trouvez pas votre réponse ?</h2>
            <p>Échangez avec l'équipe et la communauté.</p>
          </div>
          <a href="https://discord.gg/ANFwWZc3eu" target="_blank" rel="noopener noreferrer" className="primary">
            Rejoindre le Discord
          </a>
          <Link href="/contact">Nous contacter</Link>
        </section>
      </div>
    </div>
  );
}

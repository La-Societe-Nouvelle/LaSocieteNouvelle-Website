"use client";

import Image from "next/image";
import Link from "next/link";
import { Col, Container, Row } from "react-bootstrap";
import PageHeader from "@/components/PageHeader";
import EmblaCarousel from "@/components/carousel/EmblaCarousel";
import structures from "@/lib/structures.json";

// export const metadata = {
//   title: "La Société Nouvelle | Chercheurs & Experts",
//   description: "Exploitez nos données et contribuez aux méthodologies. Chercheurs, économistes, statisticiens, ingénieurs ACV : participez à l'innovation.",
//   openGraph: {
//     url: "https://lasocietenouvelle.org/devenir-partenaire/chercheurs-experts",
//     description: "Chercheurs & Experts - Exploitez nos données et contribuez aux méthodologies",
//   },
// };

const features = [
  {
    icon: "bi-database",
    title: "Données ouvertes",
    description: "Accédez librement à notre base de données extra-financière pour vos travaux de recherche"
  },
  {
    icon: "bi-graph-up",
    title: "Méthodologies innovantes",
    description: "Contribuez à l'amélioration des méthodologies de mesure et d'évaluation"
  },
  {
    icon: "bi-diagram-3",
    title: "Collaborations scientifiques",
    description: "Participez à des projets de recherche appliquée en partenariat avec notre équipe"
  }
];

const resources = [
  {
    icon: "bi-database",
    title: "Base de données ouverte",
    description: "Accédez à l'ensemble de nos données macroéconomiques et statistiques sur les empreintes sociétales des activités économiques.",
    items: [
      "Données par division économique (NACE)",
      "Séries temporelles et évolutions",
      "Données sources et méthodologies",
      "Format exploitable (JSON, CSV)",
      "API publique documentée"
    ],
    link: "/databrowser",
    linkText: "Accéder à nos jeux de données",
    linkIcon: "bi-box-arrow-up-right",
    variant: "cta-card-primary"
  },
  {
    icon: "bi-code-slash",
    title: "Packages R",
    description: "Utilisez nos packages R open-source pour intégrer facilement nos données et méthodologies dans vos analyses et modèles économétriques.",
    items: [
      "Accès direct à l'API",
      "Données et métadonnées",
      "Compatible R"
    ],
    link: "https://github.com/La-Societe-Nouvelle/lsnstat",
    linkText: "Consulter le répertoire GitHub",
    linkIcon: "bi-arrow-right",
    variant: "cta-card-primary"
  },
  {
    icon: "bi-book",
    title: "Documentation méthodologique",
    description: "Consultez notre documentation complète sur les indicateurs, les méthodologies de calcul et les sources de données utilisées.",
    items: [
      "Définitions des indicateurs ESE",
      "Modèles de calcul détaillés",
      "Sources et références bibliographiques",
      "Travaux statistiques publiés",
      "Notes méthodologiques"
    ],
    link: "https://docs.lasocietenouvelle.org/",
    linkText: "Consulter la documentation",
    linkIcon: "bi-arrow-right",
    variant: "cta-card-primary"
  }
];

export default function ChercheursExperts() {

    const renderStructureSlide = (structure) => (
    <Link
      href={structure.href}
      target="_blank"
      rel="noopener noreferrer"
      title={`Accéder au site ${structure.name}`}
      className="logo-card"
    >
      <Image
        src={structure.img}
        alt={`Logo ${structure.name}`}
        width={structure.height * 3}
        height={structure.height}
        className="img-fluid"
        style={{ objectFit: "contain", height: structure.height }}
      />
    </Link>
  );


  return (
    <div className="chercheurs-experts-page">
      <PageHeader
        title="Chercheurs & Experts"
        subtitle="Exploitez nos données et contribuez aux méthodologies"
        icon="book"
      />

      {/* Section Intro */}
      <section className="section ">
        <Container>
          <Row className="align-items-center">
            <Col lg={7}>
              <h3 className="section__title mb-4">
                Des données ouvertes au service de la recherche et de l'innovation
              </h3>
              <div className="section__content">
                <p>
                  Vous êtes <strong>chercheur, économiste, statisticien ou ingénieur en Analyse de Cycle de Vie</strong> ?
                  Nos données et méthodologies sont ouvertes pour soutenir vos travaux de recherche et d'innovation.
                </p>
                <p>
                  Notre mission est de fournir, de manière ouverte, les informations nécessaires pour que
                  chaque entreprise puisse mesurer et rendre compte de l'empreinte sociétale de sa production.
                  Cette ouverture s'inscrit dans une <strong>démarche collaborative</strong> avec la communauté scientifique.
                </p>
                <p>
                  Que vous travailliez sur des modèles économétriques, des méthodologies d'évaluation d'impact,
                  ou des outils de comptabilité environnementale, nos ressources sont à votre disposition pour
                  <strong> accélérer la recherche</strong> dans le domaine de la durabilité économique.
                </p>
              </div>
            </Col>
            <Col lg={5} className="text-center">
              <Image
                src="/illustrations/stats-illu.svg"
                alt="Illustration recherche et données"
                width={450}
                height={400}
                className="hero-image"
                priority
              />
            </Col>
          </Row>
        </Container>
      </section>


      {/* Section Ressources */}
      <section className="section">
        <Container>
          <div className="section-header text-center mb-4 mb-md-5">
            <h3 className="section__title section__title--center">
              Ressources disponibles
            </h3>
          </div>

          <Row className="g-4">
            {resources.map((resource, index) => (
              <Col key={index} lg={4}>
                <div className={`cta-card ${resource.variant}`}>
                  <div className="cta-card-icon">
                    <i className={resource.icon}></i>
                  </div>
                  <h4 className="cta-card-title">{resource.title}</h4>
                  <p className="cta-card-description mb-3">
                    {resource.description}
                  </p>
                  <p className="mb-2 fw-semibold">Contenu accessible :</p>
                  <ul className="ps-4 mb-4">
                    {resource.items.map((item, idx) => (
                      <li key={idx} className="mb-2">{item}</li>
                    ))}
                  </ul>
                  <a
                    className="cta-card-action"
                    target="_blank"
                    rel="noopener noreferrer"
                    href={resource.link}
                  >
                    {resource.linkText}
                    <i className={`${resource.linkIcon} ms-2`}></i>
                  </a>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>


      {/* Section Avantages */}
      <section className="section section--secondary">
        <Container>


          <Row className="g-4">
            <Col lg={6} className="text-center">
              <Image
                src="/illustrations/real-time-collaboration.svg"
                alt="Illustration chercheurs et experts"
                width={450}
                height={400}
                className="hero-image"
                priority
              />
            </Col>
            <Col lg={6}>
              <div className="section-header">
                <h3 className="section__title">
                  Pourquoi utiliser nos données <br></br> et méthodologies ?
                </h3>
                <p className="section-subtitle">
                  Des ressources ouvertes et fiables pour soutenir vos travaux de recherche
                </p>
              </div>
              <ul className="list-unstyled mb-0">
                {features.map((feature, index) => (
                  <li key={index} className="d-flex mb-4">
                    <div className="me-3">
                      <i className={`${feature.icon} feature-icon`}></i>
                    </div>
                    <div>
                      <h5 className="mb-1">{feature.title}</h5>
                      <p className="mb-0">{feature.description}</p>
                    </div>
                  </li>

                ))}
              </ul>
            </Col>
          </Row>
        </Container>
      </section>


      {/* Section Collaboration */}
      <section className="section">
        <Container>
          <div className="section-header text-center mb-4 mb-md-5">
            <h3 className="section__title section__title--center">
              Contribuez à nos travaux
            </h3>
            <p className="section-subtitle">
              Vous travaillez sur un projet de recherche en lien avec la comptabilité extra-financière,
              l'évaluation d'impact ou l'économie de la durabilité ? Nous sommes ouverts aux collaborations
              scientifiques et aux contributions méthodologiques.
            </p>
          </div>

          <Row className="g-4 mb-5">
            <Col md={4}>
              <div className="cta-card cta-card-secondary">
                <div className="cta-card-icon">
                  <i className="bi bi-lightbulb"></i>
                </div>
                <h4 className="cta-card-title">Projets de recherche</h4>
                <p className="cta-card-description">
                  Partenariats sur des projets académiques ou appliqués
                </p>
              </div>
            </Col>
            <Col md={4}>
              <div className="cta-card cta-card-secondary">
                <div className="cta-card-icon">
                  <i className="bi bi-journal-text"></i>
                </div>
                <h4 className="cta-card-title">Publications</h4>
                <p className="cta-card-description">
                  Collaboration sur articles scientifiques et communications
                </p>
              </div>
            </Col>
            <Col md={4}>
              <div className="cta-card cta-card-secondary">
                <div className="cta-card-icon">
                  <i className="bi bi-gear"></i>
                </div>
                <h4 className="cta-card-title">Méthodologies</h4>
                <p className="cta-card-description">
                  Contributions à l'amélioration des méthodologies
                </p>
              </div>
            </Col>
          </Row>

          <div className="text-center">
            <Link
              href="mailto:contact@lasocietenouvelle.org"
              className="btn btn-secondary btn-lg"
            >
              <i className="bi bi-envelope me-2"></i>
              Nous contacter
            </Link>
          </div>
        </Container>
      </section>

      {/* Section Licence */}
      <section className="highlight-section mb-5">
        <Container>
          <div className="highlight-section__content ">
            <h3 className="highlight-section__title">
              <i className="bi bi-shield-check me-2"></i>
              Licence ouverte
            </h3>
            <p className="highlight-section__text">
              L'ensemble de nos données, outils et documentations sont publiés sous <strong>licence ouverte</strong>.
              Ils sont accessibles et utilisables librement, y compris à des fins commerciales et de recherche.
              La base de données est, et restera toujours, ouverte. Notre engagement est de maintenir
              cette ouverture pour favoriser l'innovation et la recherche dans le domaine de la durabilité économique.
            </p>
            <div className="highlight-section__links justify-content-center">
              <Link
                href="https://github.com/La-Societe-Nouvelle"
                target="_blank"
                className="btn btn-outline-primary"
              >
                <i className="bi bi-github me-2"></i>
                Voir nos dépôts GitHub
              </Link>
              <Link
                href="/databrowser"
                target="_blank"
                className="btn btn-primary"
              >
                <i className="bi bi-database me-2"></i>
                Accéder aux données
              </Link>
            </div>
          </div>
        </Container>
      </section>

      <section className="section partners-ecosystem-section">
        <div className="partners-ecosystem-box">

          <Container>
            <div className="subsection">

              <h4 className="section__title section__title--center text-center mb-4 mb-md-5">Structures associées</h4>
              <EmblaCarousel
                items={structures}
                renderSlide={renderStructureSlide}
                loop={true}
                autoplay={true}
                delay={3000}
              />
            </div>

          </Container>
        </div>

      </section>
    </div>
  );
}

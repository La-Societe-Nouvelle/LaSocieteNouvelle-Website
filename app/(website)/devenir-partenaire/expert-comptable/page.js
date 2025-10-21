"use client";
import Image from "next/image";
import { Col, Container, Row } from "react-bootstrap";
import Link from "next/link";

import partners from "@/lib/partners.json";
import EmblaCarousel from "@/components/carousel/EmblaCarousel";
import PageHeader from "@/components/PageHeader";

// export const metadata = {
//   title: "La Société Nouvelle | Expert comptable",
//   description: "Devenez partenaire - Expert Comptable. Accompagnez vos clients dans la mesure de leur empreinte sociétale.",
//   openGraph: {
//     url: "https://lasocietenouvelle.org/devenir-partenaire/expert-comptable",
//     description: "Devenir partenaire - Expert Comptable",
//   },
// };


export default function DevenirPartenaireExpertComptable() {
  const renderPartnerSlide = (partner) => (
    <Link
      href={partner.href}
      target="_blank"
      rel="noopener noreferrer"
      title={`Accéder au site ${partner.name}`}
      className="logo-card"
    >
      <Image
        src={partner.img}
        alt={`Logo ${partner.name}`}
        width={partner.height * 3}
        height={partner.height}
        className="img-fluid"
        style={{ objectFit: "contain", height: partner.height }}
      />
    </Link>
  );

  return (
    <div className="expert-comptable-page">
      <PageHeader
        title="Expert comptable"
        subtitle="Vous êtes un acteur de la comptabilité? Accompagnez vos clients dans la mesure de leur empreinte."
        icon="calculator"
      />

      {/* Section Intro */}
      <section className="section pb-0">
        <Container>
          <Row className="align-items-center">
            <Col lg={7}>

              <div className="section-header mb-5">
                <h3 className="section__title mb-4">
                  Intégrer les enjeux sociaux et environnementaux au cœur de la performance
                </h3>
              </div>
              <div className="section__content">
                <p>
                  Face à l'urgence sociale et environnementale, il est désormais
                  incontournable de <b>compléter les informations comptables
                    traditionnelles </b> par des indicateurs de performance
                  extra-financière.
                </p>
                <p >
                  La pérennité d'une entreprise passe désormais par la prise en
                  compte des <b>défis sociaux et environnementaux</b>. Chaque entreprise
                  se doit de s'assurer que la valeur qu'elle produit est
                  compatible avec la transition vers une économie soutenable.
                </p>

                <p >
                  Les indicateurs sur lesquels nous travaillons fournissent un
                  positionnement de l'entreprise au regard d'<b>objectifs clefs de
                    développement durable</b>. Ils sont comparables par rapport à la
                  branche d'activité de l'entreprise et à des trajectoires cibles
                  et assurent un suivi annuel.
                </p>
                <p >
                  Le complément comptable obtenu vous permet ainsi d'enrichir vos
                  livrables en fin d'exercice pour :
                </p>
                <ul >
                  <li className="py-2">
                    Sensibiliser vos clients aux enjeux de développement durable
                  </li>
                  <li className="py-2">
                    Informer vos clients sur leurs performances sociales et environnementales
                  </li>
                  <li className="py-2">
                    Valoriser leurs actions et leurs engagements sociétaux
                  </li>
                  <li className="py-2">
                    In fine, leur permettre de pleinement contribuer à une économie durable
                  </li>
                </ul>
              </div>

            </Col>

            <Col lg={5} className="text-center mt-4 mt-lg-0">
              <div className="section__illustration">
                <Image
                  src="/illustrations/integration-data.svg"
                  alt="Illustration lecture FEC"
                  width={450}
                  height={400}
                  priority
                />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="section section--secondary p-1">
        <Container>
          <div className="intro-quote ">
            <blockquote className="fw-semibold text-center">
              “Toute compréhension de l'entreprise passe par sa comptabilité.
              Or les enjeux sociaux et environnementaux qui doivent être considérés en sont absents.”

            </blockquote>
            <p className="small text-center mb-0">
              Rapport L'entreprise, objet d'intérêt général,Nicole NOTAT et Jean-Dominique SENARD, 2018 </p>

          </div>

        </Container>
      </section>


      {/* Section Outil Partenaire */}
      <section className="highlight-section">
        <Container>
          <div className="highlight-section__content">
            <Row className="align-items-center">
              <Col lg={6} className="mb-4 mb-lg-0 text-center">
                <Image
                  alt="Illustration comparaison version simple version partenaire metriz application web"
                  src="/illustrations/collaboration.svg"
                  width={400}
                  height={300}
                  style={{ maxWidth: '100%', height: 'auto' }}
                />
              </Col>
              <Col lg={6}>
                <h3 className="highlight-section__title">Un outil de calcul sur mesure pour les partenaires</h3>
                <p className="highlight-section__text">
                  Devenez partenaire et bénéficiez d'une version spécifique à
                  votre disposition. Vous disposerez également :
                </p>
                <ul className="list-unstyled">
                  <li className="mb-2">
                    <i className="bi bi-check-circle text-success me-2"></i>Une maintenance évolutive
                  </li>
                  <li className="mb-2">
                    <i className="bi bi-check-circle text-success me-2"></i>Un support technique
                  </li>
                  <li className="mb-2">
                    <i className="bi bi-check-circle text-success me-2"></i>Des livrables personnalisés
                  </li>
                  <li className="mb-2">
                    <i className="bi bi-check-circle text-success me-2"></i>Un ajustement de l'outil à vos fichiers internes
                  </li>
                </ul>
                <a
                  className="btn btn-primary"
                  href="https://partners.metriz.lasocietenouvelle.org"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Accéder à la version partenaire
                  <i className="bi bi-box-arrow-up-right ms-2"></i>
                </a>
              </Col>
            </Row>
          </div>
        </Container>
      </section>

      {/* Section Documentation */}
      <section className="py-5 bg-light">
        <Container>
          <Row className="g-4">
            {/* Carte Documentation */}
            <Col lg={6}>
              <div className="service-card h-100">
                <h2 className="service-card__title">Documentation - Empreinte Sociétale</h2>
                <div className="service-card__description">
                  <p className="mb-3">
                    Un espace de documentation sur les indicateurs est à votre disposition.
                  </p>
                  <p className="mb-3">
                    Il regroupe l'ensemble des documentations et informations utiles relatives
                    à l'Empreinte Sociétale de l'Entreprise et au système d'information et de
                    comptabilité associé.
                  </p>
                  <p className="mb-2 fw-semibold">Il concerne :</p>
                  <ul className="ps-4 mb-4">
                    <li className="mb-1">Les indicateurs de l'Empreinte Sociétale</li>
                    <li className="mb-1">Les valeurs statistiques proposées par défaut à une unité légale</li>
                    <li className="mb-1">L'application web que nous mettons librement à disposition</li>
                    <li className="mb-1">Les données macroéconomiques issues de nos travaux statistiques</li>
                    <li className="mb-1">Les services disponibles de notre API publique</li>
                  </ul>
                </div>
                <a
                  className="btn btn-outline-primary mt-auto"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://docs.lasocietenouvelle.org/"
                >
                  Accéder à l'espace de documentation
                  <i className="bi bi-box-arrow-up-right ms-2"></i>
                </a>
              </div>
            </Col>

            {/* Carte Guide de Mission */}
            <Col lg={6}>
              <div className="service-card h-100">
                <h2 className="service-card__title">Guide de mission</h2>
                <div className="service-card__description">
                  <p className="mb-3">
                    Un guide de mission est mis à votre disposition.
                  </p>
                  <p className="mb-3">
                    Il vise à constituer un outil de travail à destination des professionnels
                    de l'expertise comptable qui souhaitent mettre en oeuvre ce type de mission
                    (mesure de l'Empreinte Sociétale d'une entreprise).
                  </p>
                  <p className="mb-2 fw-semibold">Contenu :</p>
                  <ul className="ps-4 mb-4">
                    <li className="mb-1">Description de la mission</li>
                    <li className="mb-1">Cadre et Enjeux</li>
                    <li className="mb-1">Prérequis</li>
                    <li className="mb-1">Préparation de la mission</li>
                    <li className="mb-1">Réalisation de la mission</li>
                    <li className="mb-1">Fin de la mission</li>
                  </ul>
                </div>
                <a
                  className="btn btn-primary mt-auto"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://lasocietenouvelle.org/Kit-de-mission_Empreinte-Societale.zip"
                >
                  Télécharger le kit de mission
                  <i className="bi bi-download ms-2"></i>
                </a>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Section Nos travaux */}
      <section className="section">
        <Container>
          <div className="section-header text-center mb-5">
            <h2 className="section__title section__title--center">Nos travaux avec l'Ordre des Experts-Comptables</h2>
            <p className="section-subtitle">
              Des collaborations pour accompagner la profession vers une comptabilité durable
            </p>
          </div>

          <Row className="g-4">
            {/* Impact Durabilité */}
            <Col md={6}>
              <div className="work-card h-100">
                <h3 className="work-card-title">Impact Durabilité</h3>
                <p className="work-card-description">
                  Un outil essentiel conforme au module de base VSME pour convertir les TPE/PME à la durabilité.
                  Développé en collaboration avec l'Ordre des Experts-Comptables.
                </p>
                <ul className="work-card-list">
                  <li>Conforme au référentiel VSME (module de base)</li>
                  <li>Accompagnement spécifique pour les TPE/PME</li>
                  <li>Outil d'aide à la transition durable</li>
                </ul>
                <div className="work-card-footer">
                  <a
                    href="https://impact-durabilite.experts-comptables.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline-primary"
                  >
                    <i className="bi bi-box-arrow-up-right me-2"></i>
                    Accéder à la plateforme
                  </a>
                </div>
              </div>
            </Col>

            {/* Baromètre */}
            <Col md={6}>
              <div className="work-card h-100">
       
                <h3 className="work-card-title">Baromètre des émissions de GES des TPE-PME</h3>
                <p className="work-card-description">
                  Partenariat entre Image PME et La Société Nouvelle, publié par le Conseil de l'Ordre des Experts-Comptables.
                  Une étude inédite sur l'empreinte carbone des TPE-PME françaises.
                </p>
                <ul className="work-card-list">
                  <li>Analyse de 15 secteurs d'activité avec données fines</li>
                  <li>Évolution des émissions GES et composition (Scopes 1, 2 et 3 amont)</li>
                  <li>Outil de référence pour accompagner les clients dans la transition bas carbone</li>
                </ul>
                <div className="work-card-footer">
                  <a
                    href="https://www.imagepme.fr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline-primary"
                  >
                    <i className="bi bi-box-arrow-up-right me-2"></i>
                    Consulter sur Image PME
                  </a>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Section Formation */}
      <section className="section">
        <Container>
          <div className="section-header text-center mb-5">
            <h2 className="section__title section__title--center">Se former aux enjeux de la durabilité</h2>
            <p className="section-subtitle">
              Développez vos compétences et accompagnez vos clients dans leur transition durable
            </p>
          </div>

          <Row className="g-4 mb-5">
            {/* Cap'Durabilité */}
            <Col md={6}>
              <div className="training-card h-100">
                <div className="training-card-header">
                  <div className="training-card-logo">
                    <Image
                      src="/logos/capdurabilite-illu.png"
                      alt="Logo Cap'Durabilité"
                      width={120}
                      height={60}
                      style={{ objectFit: "contain" }}
                    />
                  </div>
                  <h3 className="training-card-title">Cap'Durabilité</h3>
                  <p className="training-card-provider">Ordre des Experts-Comptables</p>
                </div>
                <div className="training-card-body">
                  <p className="training-card-description">
                    Espace de référence sur la Durabilité, créé par l'Ordre des experts-comptables pour vous accompagner dans la transition.
                  </p>
                  <p className="fw-semibold mb-2">Quatre niveaux de progression :</p>
                  <ul className="training-card-list">
                    <li>Sensibilisation aux enjeux sociétaux et environnementaux</li>
                    <li>Accompagnement RSE et développement de nouvelles missions</li>
                    <li>Montée en compétences sur les informations extra-financières</li>
                    <li>Innovation avec la comptabilité verte</li>
                  </ul>
                </div>
                <div className="training-card-footer">
                  <a
                    className="btn btn-outline-primary w-100"
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://capdurabilite.fr"
                  >
                    Accéder à Cap'durabilité
                    <i className="bi bi-box-arrow-up-right ms-2"></i>
                  </a>
                </div>
              </div>
            </Col>

            {/* Odyssée du Colibri */}
            <Col md={6}>
              <div className="training-card h-100">
                <div className="training-card-header">
                  <div className="training-card-logo">
                    <Image
                      src="/logos/logo-odyssee-du-colibri.svg"
                      alt="Logo Odyssée du Colibri"
                      width={120}
                      height={60}
                      style={{ objectFit: "contain" }}
                    />
                  </div>
                  <h3 className="training-card-title">Odyssée du Colibri</h3>
                  <p className="training-card-provider">Formation professionnelle</p>
                </div>
                <div className="training-card-body">
                  <p className="training-card-description">
                    Formation complète pour comprendre les enjeux de la transition écologique et sociale, et accompagner efficacement vos clients.
                  </p>
                  <p className="fw-semibold mb-2">Au programme :</p>
                  <ul className="training-card-list">
                   <li className="mb-1">Conseil en stratégie : état des lieux, vision et plan d'action</li>
                    <li className="mb-1">Accompagnement : coaching individuel, collectif et aide au pilotage de projet RSE</li>
                    <li className="mb-1">Formation : création de parcours d'accompagnement pour vos équipes, intervention dans des écoles</li>
                    <li className="mb-1">Études et prospectives : programme de recherche sur l'acculturation des professionnels du chiffre sur les enjeux de durabilité</li>
                  </ul>
                </div>
                <div className="training-card-footer">
                  <a
                    className="btn btn-outline-primary w-100"
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.odyssee-colibri.fr/"
                  >
                    Découvrir la formation
                    <i className="bi bi-box-arrow-up-right ms-2"></i>
                  </a>
                </div>
              </div>
            </Col>
          </Row>

        </Container>
      </section>

      {/* Section CTA Formation LSN */}
      <section className="highlight-section mt-0">
        <Container>
          <div className="highlight-section__content">
            <Row className="align-items-center">
              <Col lg={12} className="mb-4 mb-lg-0 text-center">
                <h2 className="highlight-section__title">
                  Vous souhaitez vous former sur les indicateurs de l'Empreinte Sociétale ?
                </h2>
                <p className="highlight-section__text">
                  Nous proposons des ateliers et formations dédiés à la compréhension et à la mesure de l'empreinte sociétale.
                  Contactez-nous pour organiser une session adaptée à vos besoins.
                </p>
                <Link href="/contact" className="btn btn-primary">
                  <i className="bi bi-envelope me-2"></i>
                  Contactez-nous
                </Link>
              </Col>
    
            </Row>
          </div>
        </Container>
      </section>

      {/* Section Partenaires */}
      <section className="section partners-ecosystem-section">
        <div className="partners-ecosystem-box">

          <Container>
            <div className="subsection">

              <h4 className="section__title section__title--center text-center mb-4 mb-md-5">Les cabinets engagés</h4>
              <EmblaCarousel
                items={partners}
                renderSlide={renderPartnerSlide}
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

import { Container, Row, Col } from "react-bootstrap";
import Image from "next/image";
import Link from "next/link";

import PageHeader from "@/components/PageHeader";

export const metadata = {
  title: "Devenir sponsor | La Société Nouvelle",
  description: "Soutenez nos travaux et participez à la transformation de l'économie vers plus de durabilité.",
  openGraph: {
    url: "https://lasocietenouvelle.org/devenir-partenaire/sponsors",
    description: "Devenez sponsor de La Société Nouvelle",
  },
};

export default function DevenirSponsor() {
  return (
    <div className="sponsors-page">

      <PageHeader
        title="Devenir sponsor"
        subtitle="Soutenez nos travaux et participez à la transformation de l'économie vers plus de durabilité."
        icon="bi bi-hand-thumbs-up"
      />

      {/* Hero Section */}
      <section className="section">
        <Container>
          <Row className="align-items-top">
            <Col lg={6}>
              <h3 className="section__title mb-4">
                Vous souhaitez soutenir nos travaux ?</h3>
              <div className="section__content">


                <p className="fw-bold">
                  60% de nos activités sont financées grâce à nos partenaires.
                </p>
                <p >
                  Votre soutien est essentiel pour faire avancer notre mission
                  de transformation de l'économie vers plus de durabilité et
                  de responsabilité. En devenant sponsor de La Société Nouvelle,
                  vous participez activement au développement de METRIZ et à la
                  diffusion de la méthode de l'Empreinte Sociétale.
                </p>
                <Link
                  href="https://lasocietenouvelle.org/docs/Fiche-Partenaire-2026.pdf"
                  className="btn btn-primary mt-3"
                  target="_blank"
                  title="Télécharger la fiche partenaire 2025"
                >
                  Télécharger la fiche partenaire 2025
                  <i className="ms-2 bi bi-download"></i>
                </Link>
              </div>
            </Col>
            <Col lg={6} >
              <div className="section__illustration">
                <Image
                  src="/illustrations/showing-support.svg"
                  alt="Illustration partenariat"
                  width={450}
                  height={400}
                  priority
                />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Benefits Section */}
      <section className="section section--secondary">
        <Container>
          <div className="section-header text-center mb-4 mb-md-5">
            <h3 className="section__title section__title--center">
              Les avantages
            </h3>
            <p className="section__subtitle">
              En devenant sponsor de La Société Nouvelle, vous bénéficiez de nombreux avantages
            </p>
          </div>

          <Row className="g-4">
            <Col lg={4} md={6}>
              <div className="cta-card cta-card-secondary">
                <div className="cta-card-icon">
                  <i className="bi bi-graph-up-arrow"></i>
                </div>
                <h4 className="cta-card-title">Impact économique</h4>
                <p className="cta-card-description">
                  Participation active à la transformation de l'économie vers un modèle plus durable
                </p>
              </div>
            </Col>

            <Col lg={4} md={6}>
              <div className="cta-card cta-card-secondary ">
                <div className="cta-card-icon">
                  <i className="bi bi-tools"></i>
                </div>
                <h4 className="cta-card-title">Accès privilégié</h4>
                <p className="cta-card-description">
                  Accès prioritaire à nos outils, ressources et accompagnement personnalisé
                </p>
              </div>
            </Col>

            <Col lg={4} md={6}>
              <div className="cta-card cta-card-secondary">
                <div className="cta-card-icon">
                  <i className="bi bi-megaphone"></i>
                </div>
                <h4 className="cta-card-title">Visibilité accrue</h4>
                <p className="cta-card-description">
                  Mise en avant sur notre site web et dans toutes nos communications officielles
                </p>
              </div>
            </Col>

            <Col lg={4} md={6}>
              <div className="cta-card cta-card-secondary">
                <div className="cta-card-icon">
                  <i className="bi bi-people"></i>
                </div>
                <h4 className="cta-card-title">Réseau engagé</h4>
                <p className="cta-card-description">
                  Rejoignez un réseau de partenaires partageant vos valeurs de responsabilité
                </p>
              </div>
            </Col>

            <Col lg={4} md={6}>
              <div className="cta-card cta-card-secondary">
                <div className="cta-card-icon">
                  <i className="bi bi-calendar-event"></i>
                </div>
                <h4 className="cta-card-title">Événements exclusifs</h4>
                <p className="cta-card-description">
                  Participation aux webinaires, ateliers et événements réservés aux sponsors
                </p>
              </div>
            </Col>

            <Col lg={4} md={6}>
              <div className="cta-card cta-card-secondary">
                <div className="cta-card-icon">
                  <i className="bi bi-headset"></i>
                </div>
                <h4 className="cta-card-title">Accompagnement</h4>
                <p className="cta-card-description">
                  Support technique et méthodologique adapté à vos besoins spécifiques
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="highlight-section mb-5">
        <Container>
          <div className="highlight-section__content">
            <h2 className="highlight-section__title">
              <i className="bi bi-hand-thumbs-up me-2"></i>
              Prêt à nous rejoindre ?
            </h2>
            <p className="highlight-section__text">
              Téléchargez la fiche partenaire et renvoyez-la à l'adresse contact@lasocietenouvelle.org pour devenir sponsor de La Société Nouvelle.
            </p>
            <div className="highlight-section__links">
              <Link
                href="https://lasocietenouvelle.org/docs/Fiche-Partenaire-2026.pdf"
                className="btn btn-primary"
                target="_blank"
              >
                Télécharger la fiche partenaire
                <i className="bi bi-download ms-2"></i>
              </Link>
              <Link
                href="mailto:contact@lasocietenouvelle.org"
                className="btn btn-outline-primary"
              >
                Nous contacter
                <i className="bi bi-envelope ms-2"></i>
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}

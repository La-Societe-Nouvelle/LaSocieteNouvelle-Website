import PageHeader from "@/components/PageHeader";
import { Col, Container, Row } from "react-bootstrap";
import Link from "next/link";

export const metadata = {
  title: "La Société Nouvelle | API Publique SINESE",
  description: "API publique et gratuite pour accéder aux données d'empreinte sociétale et environnementale de plus de 5 millions d'entreprises françaises.",
};

export default function ApiPublique() {
  return (
    <>
      <PageHeader
        title="API Publique SINESE"
        subtitle="Accédez aux données d'empreinte de millions d'entreprises"
        icon="braces"
      />

      {/* Section Introduction */}
      <section className="section">
        <Container>
          <Row className="align-items-center">
            <Col lg={7}>
              <h3 className="section__title">
                Des données ouvertes pour tous vos projets
              </h3>
              <div className="section__content">
                <p>
                  <strong>L'API SINESE</strong> vous donne accès aux données d'empreinte sociétale
                  et environnementale de <strong>plus de 5 millions d'entreprises françaises</strong>.
                  Notre API vous permet d'intégrer facilement les 12 indicateurs clés de performance
                  extra-financière dans vos projets.
                </p>
                <p>
                  L'API est <strong>accessible librement</strong> sans authentification.
                  Les données sont à jour en temps réel et couvrent l'ensemble des entreprises
                  françaises actives.
                </p>
              </div>
            </Col>
            <Col lg={5} className="text-center">
              <div className="api-visual-box">
                <i className="bi bi-database"></i>
                <p className="api-visual-text">API publique et gratuite</p>
                <div className="api-visual-badges">
                  <span className="api-badge">5M+ entreprises</span>
                  <span className="api-badge">12 indicateurs</span>
                  <span className="api-badge">Temps réel</span>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Section Pourquoi utiliser l'API */}
      <section className="section bg-light">
        <Container>
          <h3 className="section__title section__title--center mb-5">
            Pourquoi utiliser l'API SINESE ?
          </h3>

          <Row className="g-4">
            <Col md={6} lg={3}>
              <div className="api-benefit">
                <div className="api-benefit-icon">
                  <i className="bi bi-unlock"></i>
                </div>
                <h4 className="api-benefit-title">Accès libre</h4>
                <p className="api-benefit-text">
                  Aucune authentification requise. Utilisez l'API directement dans
                  vos applications sans contrainte.
                </p>
              </div>
            </Col>

            <Col md={6} lg={3}>
              <div className="api-benefit">
                <div className="api-benefit-icon">
                  <i className="bi bi-clock-history"></i>
                </div>
                <h4 className="api-benefit-title">Données actualisées</h4>
                <p className="api-benefit-text">
                  Accédez à des données maintenues à jour en temps réel pour
                  vos analyses et applications.
                </p>
              </div>
            </Col>

            <Col md={6} lg={3}>
              <div className="api-benefit">
                <div className="api-benefit-icon">
                  <i className="bi bi-search"></i>
                </div>
                <h4 className="api-benefit-title">Couverture complète</h4>
                <p className="api-benefit-text">
                  Plus de 5 millions d'entreprises françaises actives
                  référencées et modélisées dans la base.
                </p>
              </div>
            </Col>

            <Col md={6} lg={3}>
              <div className="api-benefit">
                <div className="api-benefit-icon">
                  <i className="bi bi-speedometer2"></i>
                </div>
                <h4 className="api-benefit-title">Performance</h4>
                <p className="api-benefit-text">
                  Réponses rapides et format JSON standardisé pour une
                  intégration simple et efficace.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Section Ressources */}
      <section className="section">
        <Container>
          <h3 className="section__title section__title--center mb-5">
            Ressources et outils
          </h3>

          <Row className="g-4">
            {/* Documentation */}
            <Col lg={4}>
              <div className="api-resource">
                <div className="api-resource-icon">
                  <i className="bi bi-book"></i>
                </div>
                <h4 className="api-resource-title">Documentation complète</h4>
                <p className="api-resource-description">
                  Accédez à la documentation technique détaillée et exemples d'utilisation.
                </p>
                <a
                  href="https://lasocietenouvelle.readme.io/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary w-100"
                >
                  <i className="bi bi-box-arrow-up-right me-2"></i>
                  Documentation API
                </a>
              </div>
            </Col>

            {/* Databrowser */}
            <Col lg={4}>
              <div className="api-resource">
                <div className="api-resource-icon">
                  <i className="bi bi-display"></i>
                </div>
                <h4 className="api-resource-title">Databrowser</h4>
                <p className="api-resource-description">
                  Explorez les données visuellement avant de les intégrer.
                </p>
                <Link href="/databrowser" className="btn btn-primary w-100">
                  <i className="bi bi-display me-2"></i>
                  Explorer le databrowser
                </Link>
              </div>
            </Col>

            {/* Fichier Stock */}
            <Col lg={4}>
              <div className="api-resource">
                <div className="api-resource-icon">
                  <i className="bi bi-database-down"></i>
                </div>
                <h4 className="api-resource-title">Fichier Stock</h4>
                <p className="api-resource-description">
                  Base de données complète de toutes les entreprises françaises au format CSV.
                </p>
                <a
                  href="https://www.sinese.fr/datasets"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary w-100"
                >
                  <i className="bi bi-download me-2"></i>
                  Télécharger (CSV)
                </a>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Section Mission */}
      <section className="section bg-light">
        <Container>
          <Row className="align-items-center">
            <Col lg={6}>
              <h3 className="section__title">
                Notre mission : la transparence des impacts
              </h3>
              <div className="section__content">
                <p>
                  L'API SINESE s'inscrit dans un <strong>système d'information comptable extra-financier</strong> conçu pour apporter de la transparence sur les
                  externalités de la production pour l'ensemble des entreprises françaises.
                </p>
                <p>
                  Nous continuons d'enrichir nos jeux de données statistiques macroéconomiques,
                  régulièrement mis à jour. Notre prochain modèle statistique sera bientôt disponible.
                </p>
              </div>
            </Col>
            <Col lg={6} className="text-center mt-4 mt-lg-0">
              <div className="mission-visual">
                <div className="mission-icon"><i className="bi bi-shield-check"></i></div>
                <div className="mission-icon"><i className="bi bi-globe"></i></div>
                <div className="mission-icon"><i className="bi bi-graph-up-arrow"></i></div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Section Support */}
      <section className="highlight-section">
        <Container>
          <div className="highlight-section__content text-center">
            <h3 className="highlight-section__title">
              Besoin d'aide ou de support ?
            </h3>
            <p className="highlight-section__text">
              Notre équipe est là pour vous accompagner dans l'utilisation de l'API SINESE.
              Que vous ayez besoin d'aide technique, de suggestions d'amélioration ou simplement
              de partager vos retours d'expérience, n'hésitez pas à nous contacter.
            </p>
            <div className="d-flex gap-3 justify-content-center flex-wrap">
              <a
                href="mailto:support@lasocietenouvelle.org"
                className="btn btn-primary btn-lg"
              >
                <i className="bi bi-envelope me-2"></i>
                support@lasocietenouvelle.org
              </a>
              <Link href="/contact" className="btn btn-outline-primary btn-lg">
                <i className="bi bi-chat-dots me-2"></i>
                Nous contacter
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}

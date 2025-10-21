import { Col, Container, Row } from "react-bootstrap";
import Link from "next/link";
import Image from "next/image";
import KeyFiguresDatabrowser from "../../components/databrowser/KeyFiguresDatabrowser";

export const metadata = {
  title: "Data Browser - Données statistiques | La Société Nouvelle",
  description: "Portail Open Data - Accédez aux données statistiques macroéconomiques, facteurs d'impacts et baromètre GES.",
  openGraph: {
    url: "https://lasocietenouvelle.org/databrowser",
    description: "Portail Open Data - Données statistiques extra-financières",
  },
};

export default function DataBrowser() {
  return (
    <div className="databrowser-home">
      <section className="databrowser-hero">
        <Container>
          <Row className="align-items-center">
            <Col lg={7}>
              <div className="hero-content">
                <div className="hero-badge">
                  <i className="bi bi-unlock-fill me-2"></i>
                  Open Data
                </div>
                <h1 className="hero-title">
                  Bienvenue sur notre portail de données statistiques
                </h1>
                <p className="hero-description">
                  Accédez aux jeux de données macroéconomiques sur l'empreinte des
                  activités économiques françaises : suivis historiques, tendances
                  et trajectoires cibles sectorielles.
                </p>
                <p className="hero-description">
                  Permettez à votre entreprise de se situer par rapport à sa branche
                  d'activité et d'assurer la compatibilité de ses activités avec la
                  transition écologique et sociale.
                </p>
                <div className="hero-actions">
                  <Link href="/databrowser/datasets" className="btn-databrowser primary">
                    <i className="bi bi-database me-2"></i>
                    Explorer les données
                  </Link>
                  <a href="https://api.lasocietenouvelle.org" target="_blank" rel="noopener noreferrer" className="btn-databrowser secondary">
                    <i className="bi bi-braces me-2"></i>
                    API Documentation
                  </a>
                </div>
              </div>
            </Col>
            <Col lg={5} className="d-none d-lg-block">
              <div className="hero-illustration">
                <Image
                  src="/illustrations/databrowser-hero.svg"
                  alt="Data visualization"
                  width={500}
                  height={400}
                  priority
                />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <KeyFiguresDatabrowser />

      <section className="databrowser-datasets">
        <Container>
          <div className="section-header mb-5">
            <h2 className="section__title section__title--center text-center">Nos jeux de données</h2>
            <p className="section-subtitle mt-5">
              Explorez nos différentes catégories de données statistiques
            </p>
          </div>
          <Row className="g-4">
            <Col lg={4}>
              <Link href="/databrowser/datasets" className="dataset-card">
                <div className="card-icon">
                  <i className="bi bi-bar-chart-line-fill"></i>
                </div>
                <h3 className="card-title">Empreintes macroéconomiques</h3>
                <p className="card-description">
                  Séries statistiques sur les externalités des activités
                  économiques : suivis historiques, tendances et trajectoires
                  cibles sectorielles.
                </p>
                <div className="card-footer">
                  <span className="card-link">
                    Explorer les données
                    <i className="bi bi-arrow-right ms-2"></i>
                  </span>
                </div>
              </Link>
            </Col>
            <Col lg={4}>
              <Link href="/databrowser/env_impact_factors" className="dataset-card">
                <div className="card-icon">
                  <i className="bi bi-calculator-fill"></i>
                </div>
                <h3 className="card-title">Facteurs d'impacts monétaires</h3>
                <p className="card-description">
                  Coefficients pour l'estimation des impacts sociaux et
                  environnementaux par activité économique.
                </p>
                <div className="card-footer">
                  <span className="card-link">
                    Accéder aux facteurs
                    <i className="bi bi-arrow-right ms-2"></i>
                  </span>
                </div>
              </Link>
            </Col>
            <Col lg={4}>
              <Link href="/databrowser/barometre-ges" className="dataset-card">
                <div className="card-icon">
                  <i className="bi bi-speedometer2"></i>
                </div>
                <h3 className="card-title">Baromètre GES</h3>
                <p className="card-description">
                  Estimation des émissions territoriales de gaz à effet de serre
                  par département et région.
                </p>
                <div className="card-footer">
                  <span className="card-link">
                    Consulter le baromètre
                    <i className="bi bi-arrow-right ms-2"></i>
                  </span>
                </div>
              </Link>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="databrowser-tools">
        <Container>
          <div className="section-header">
            <h2 className="section__title section__title--center">Nos outils open source</h2>
            <p className="section-subtitle mt-5">
              Packages et API pour exploiter facilement nos données
            </p>
          </div>
          <Row className="g-4">
            <Col lg={6}>
              <div className="tool-card">
                <div className="tool-icon">
                  <i className="bi bi-box-seam"></i>
                </div>
                <h3 className="tool-title">Package CRAN - lsnstat</h3>
                <p className="tool-description">
                  Le package R{" "}
                  <a
                    href="https://cran.r-project.org/web/packages/lsnstat/index.html"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    lsnstat
                  </a>{" "}
                  facilite l'exploitation des données macroéconomiques produites
                  et utilisées par La Société Nouvelle, ainsi que leurs
                  métadonnées associées, dans le langage R.
                </p>
                <div className="tool-features">
                  <div className="feature-item">
                    <i className="bi bi-check-circle-fill"></i>
                    <span>Accès direct à l'API</span>
                  </div>
                  <div className="feature-item">
                    <i className="bi bi-check-circle-fill"></i>
                    <span>Données et métadonnées</span>
                  </div>
                  <div className="feature-item">
                    <i className="bi bi-check-circle-fill"></i>
                    <span>Compatible R</span>
                  </div>
                </div>
                <a
                  href="https://cran.r-project.org/web/packages/lsnstat/index.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="tool-link"
                >
                  Consulter sur CRAN
                  <i className="bi bi-box-arrow-up-right ms-2"></i>
                </a>
              </div>
            </Col>
            <Col lg={6}>
              <div className="tool-card">
                <div className="tool-icon">
                  <i className="bi bi-github"></i>
                </div>
                <h3 className="tool-title">Package lsnR-Lab</h3>
                <p className="tool-description">
                  Le package R lsnR-Lab contient le script de calcul des
                  empreintes sociales et environnementales de la production des
                  activités économiques françaises.
                </p>
                <div className="tool-features">
                  <div className="feature-item">
                    <i className="bi bi-check-circle-fill"></i>
                    <span>Calcul des empreintes</span>
                  </div>
                  <div className="feature-item">
                    <i className="bi bi-check-circle-fill"></i>
                    <span>NACE 38 & 88</span>
                  </div>
                  <div className="feature-item">
                    <i className="bi bi-check-circle-fill"></i>
                    <span>12 dimensions ESE</span>
                  </div>
                </div>
                <a
                  href="https://github.com/La-Societe-Nouvelle/lsnr-lab"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="tool-link"
                >
                  Voir sur GitHub
                  <i className="bi bi-box-arrow-up-right ms-2"></i>
                </a>
              </div>
            </Col>
          </Row>

          <div className="api-banner">
            <div className="api-content">
              <div className="api-icon">
                <i className="bi bi-braces"></i>
              </div>
              <div className="api-text">
                <h4 className="text-white">API publique</h4>
                <p>Accédez directement à nos données via notre API publique.</p>
              </div>
            </div>
            <a
              href="https://api.lasocietenouvelle.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="api-link"
            >
              Accéder à l'API
              <i className="bi bi-arrow-right ms-2"></i>
            </a>
          </div>
        </Container>
      </section>
    </div>
  );
}
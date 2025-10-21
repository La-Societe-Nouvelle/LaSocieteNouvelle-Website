import { Col, Container, Row } from "react-bootstrap";

export default function DocsHome() {
  return (
    <Container className="my-2">
      <div className="docs-home">
        <h2 className="h1">Documentation</h2>
        <p className="lead">
          Bienvenue sur l'espace documentation de La Société Nouvelle.<br />
          Cet espace regroupe l'ensemble des documentations et informations utiles relatives à l'Empreinte Sociétale de l'Entreprise et au système d'information et de comptabilité associé.
        </p>

        <section className="section pt-0">
          <div className="section-header">
            <h3 className="section__title">Ressources</h3>
          </div>
          <Row className="g-4">
            <Col md={3} className="mb-3">
              <a className="cta-link" href="/docs/empreinte-societale">
                <div className="cta-card cta-card-dark">
                  <div className="cta-card-icon">
                    <i className="bi bi-book"></i>
                  </div>

                  <h4 className="cta-card-title">Empreinte Sociétale</h4>
                  <p className="cta-card-text">
                    Méthodologie et présentation détaillée des 12 indicateurs du référentiel de l'Empreinte Sociétale.
                  </p>
                  <div className="cta-card-action">
                    En savoir plus
                    <i className="bi bi-arrow-right ms-2"></i>
                  </div>
                </div>
              </a>
            </Col>

            <Col md={3} className="mb-3">
              <a className="cta-link" href="/docs/donnees-par-defaut">
                <div className="cta-card cta-card-primary">
                  <div className="cta-card-icon">
                    <i className="bi bi-calculator"></i>
                  </div>

                  <h4 className="cta-card-title">Données par défaut</h4>
                  <p className="cta-card-text">
                    Principes et méthodes de calcul des valeurs macroéconomiques par défaut.
                  </p>
                  <div className="cta-card-action">
                    En savoir plus
                    <i className="bi bi-arrow-right ms-2"></i>
                  </div>
                </div>
              </a>
            </Col>

            <Col md={3} className="mb-3">
              <a className="cta-link" href="/docs/metriz-webapp">
                <div className="cta-card cta-card-secondary">
                  <div className="cta-card-icon">
                    <i className="bi bi-window"></i>
                  </div>

                  <h4 className="cta-card-title">Application web</h4>
                  <p className="cta-card-text">
                    Guide utilisateur de l'application web Metriz pour le calcul de l'Empreinte Sociétale.
                  </p>
                  <div className="cta-card-action">
                    En savoir plus
                    <i className="bi bi-arrow-right ms-2"></i>
                  </div>
                </div>
              </a>
            </Col>

            <Col md={3} className="mb-3">
              <a className="cta-link" href="https://lasocietenouvelle.readme.io/reference" target="_blank" rel="noreferrer">
                <div className="cta-card cta-card-dark">
                  <div className="cta-card-icon">
                    <i className="bi bi-code"></i>
                  </div>

                  <h4 className="cta-card-title">API publique</h4>
                  <p className="cta-card-text">
                    Documentation technique de l'API publique permettant d'intégrer nos données dans vos outils.
                  </p>
                  <div className="cta-card-action">
                    En savoir plus
                    <i className="bi bi-arrow-right ms-2"></i>
                  </div>
                </div>
              </a>
            </Col>
          </Row>
        </section>
      </div>
    </Container>
  );
}

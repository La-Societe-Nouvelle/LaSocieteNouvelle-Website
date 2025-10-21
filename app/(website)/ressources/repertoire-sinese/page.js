import PageHeader from "@/components/PageHeader";
import { Col, Container, Image, Row, Button } from "react-bootstrap";

export const metadata = {
  title: "La Société Nouvelle | Répertoire SINESE",
  description: "Consultez l'Empreinte Sociétale des entreprises françaises. Données ouvertes sur les impacts sociaux et environnementaux.",
};

export default function RepertoireSinese() {
  return (
    <>
      <PageHeader
        title={"SINESE"}
        subtitle={"Système d'Information National sur l'Empreinte Sociétale des Entreprises"}
        icon="globe"
      />
      {/* Hero Section */}
      <section className="section">
        <Container>
          <Row className="align-items-center py-5">
            <Col className="d-flex flex-column align-self-stretch">
              <h3 className="section__title">
                Consultez l'Empreinte Sociétale des entreprises françaises
              </h3>
              <div className="section__content">
                <p>
                  <strong>SINESE</strong> est un répertoire public qui centralise les données d'empreinte sociétale
                  des entreprises françaises. Explorez, comparez et visualisez les impacts sociaux et
                  environnementaux des organisations.
                </p>
                <p>
                  Grâce à un système collaboratif de comptabilité extra-financière, SINESE permet
                  d'accéder à des <b>données ouvertes</b> sur les performances sociales et environnementales
                  des entreprises.
                </p>
              </div>
              <div className="section__actions">
                <Button
                  href="https://sinese.fr/"
                  variant="primary"
                  target="_blank"
                  rel="noreferrer"
                  title="Accéder au portail SINESE"
                >
                  Accéder à SINESE <i className="bi bi-box-arrow-up-right ms-1" />
                </Button>
                <Button
                  variant="outline"
                  title="Découvrir l'API"
                  href="https://api.lasocietenouvelle.org/"
                  target="_blank"
                >
                  Documentation API
                </Button>
              </div>
            </Col>
            <Col lg={6} className="text-end px-5">

              <Image
                className="img"
                src="/images/sinese-screen.png"
                alt="Illustration répertoire SINESE"
                width={500}
                height={400}
                style={{ width: '100%', height: 'auto', maxWidth: '500px' }}
              />
            </Col>
          </Row>
        </Container>
      </section>

      {/* Un système collaboratif */}
      <section className="section bg-light">
        <Container>
          <div className="text-center mb-5">
            <h2 className="section__title section__title--center">
              Un système collaboratif de comptabilité extra-financière
            </h2>
          </div>
          <Row className="g-4">
            <Col md={4}>
              <div className="feature-card text-center h-100">
                <div className="feature-card-icon">
                  <i className="bi bi-arrow-left-right"></i>
                </div>
                <h4 className="feature-card-title">Approche collaborative</h4>
                <p className="feature-card-text">
                  Chaque entreprise récupère l'empreinte de ses fournisseurs et partage
                  la sienne avec ses clients.
                </p>
              </div>
            </Col>
            <Col md={4}>
              <div className="feature-card text-center h-100">
                <div className="feature-card-icon">
                  <i className="bi bi-graph-up-arrow"></i>
                </div>
                <h4 className="feature-card-title">Mesure et transparence</h4>
                <p className="feature-card-text">
                  Permettre aux entreprises de mesurer et rendre compte de leurs
                  externalités sociales et environnementales.
                </p>
              </div>
            </Col>
            <Col md={4}>
              <div className="feature-card text-center h-100">
                <div className="feature-card-icon">
                  <i className="bi bi-unlock"></i>
                </div>
                <h4 className="feature-card-title">Données accessibles</h4>
                <p className="feature-card-text">
                  Généraliser l'accès aux données extra-financières pour améliorer la
                  traçabilité des impacts économiques.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      {/* Sources des données */}
      <section className="section">
        <Container>
          <h3 className="section__title section__title--center">Sources des données</h3>
          <div className="section__content text-center">
            <p>
              L'<b>Empreinte Sociétale des Entreprises</b> est calculée par La Société Nouvelle
              à partir de sa méthodologie publique et accessible à tous.
            </p>
            <p>
              En complément, SINESE met à disposition d'autres données extra-financières
              provenant de sources publiques.
            </p>
          </div>

          <div className="data-sources  justify-content-center  mt-4">

            <div className="source-item">
              <div className="source-icon">
                <i className="bi bi-star"></i>
              </div>
              <div className="source-content">
                <h5 className="source-title">Impact Score</h5>
                <p className="source-description">Impact environnemental</p>
              </div>
            </div>
            <div className="source-item">
              <div className="source-icon">
                <i className="bi bi-gender-ambiguous"></i>
              </div>
              <div className="source-content">
                <h5 className="source-title">Index Égalité Pro</h5>
                <p className="source-description">Égalité salariale</p>
              </div>
            </div>
            <div className="source-item">
              <div className="source-icon">
                <i className="bi bi-cloud-fog2"></i>
              </div>
              <div className="source-content">
                <h5 className="source-title">Bilans GES</h5>
                <p className="source-description">Données carbone</p>
              </div>
            </div>
          </div>

        </Container>
      </section>

      {/* CTA Final */}
      <section className="highlight-section text-center">
        <Container>
          <div className="highlight-section__content">

            <h3 className="highlight-section__title">
              Explorez les empreintes sociétales
            </h3>
            <p className="highlight-section__text">
              Consultez dès maintenant les données d'empreinte sociétale de plus de 5 millions d'
              entreprises françaises. 
              <br/>Comparez, analysez et identifiez les entreprises engagées
              dans la transition durable.
            </p>
            <a
              className="btn btn-primary"
              href="https://sinese.fr/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Consulter le répertoire
              <i className="bi bi-box-arrow-up-right ms-2"></i>
            </a>

          </div>
        </Container>
      </section>

    </>
  );
}

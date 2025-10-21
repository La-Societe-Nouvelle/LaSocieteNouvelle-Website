import Link from "next/link";
import { Container, Row, Col, Button } from "react-bootstrap";

export default function HeroSection() {
  return (
    <section className="hero-section">
      <Container>
        {/* Hero principal */}
        <div className="hero-content">
          <p className="hero-label">Initiative OpenData & OpenSource</p>

          <h1 className="hero-title">
            Mesurer et informer sur l’impact des entreprises
          </h1>

          <p className="hero-subtitle">
            Nous développons un Système d'Information National sur l'Empreinte Sociétale des Entreprises (SINESE),
            pour rendre accessibles les impacts sociaux et environnementaux des entreprises françaises.
          </p>



          {/* CTA Buttons */}
          <div className="hero-actions">
            <Button
              href="https://sinese.fr"
              target="_blank"
              variant="primary"
              size="lg"
              className="hero-cta-primary"
            >
              Consulter SINESE
            </Button>
            <Button
              href="/projet-sinese"
              variant="outline-primary"
              size="lg"
              className="hero-cta-secondary"
            >
              En savoir plus
            </Button>
          </div>
        </div>


        {/* Cards principales */}
        <Row className="hero-cards">
          <Col md={4}>
            <div className="hero-card">
              <div className="hero-card-icon">
                <i className="bi bi-calculator"></i>
              </div>
              <h3 className="hero-card-title">Mesurer et publier</h3>
              <p className="hero-card-text">
                Mesurez l'empreinte sociétale de votre entreprise avec notre application Metriz.
              </p>
              <Link href="/ressources/application-mesure-impact" className="hero-card-link">
                Découvrir l'application
                <i className="bi bi-arrow-right ms-2"></i>
              </Link>
            </div>
          </Col>

          <Col md={4}>
            <div className="hero-card">
              <div className="hero-card-icon">
                <i className="bi bi-bar-chart-line"></i>
              </div>
              <h3 className="hero-card-title">Consulter les données</h3>
              <p className="hero-card-text">
                Accédez à l'empreinte sociétale des entreprises et des activités économiques françaises.
              </p>
              <Link href="https://sinese.fr" target="_blank" className="hero-card-link">
                Accéder aux données
                <i className="bi bi-arrow-right ms-2"></i>
              </Link>
            </div>
          </Col>

          <Col md={4}>
            <div className="hero-card">
              <div className="hero-card-icon">
                <i className="bi bi-heart"></i>
              </div>
              <h3 className="hero-card-title">Contribuer au projet</h3>
              <p className="hero-card-text">
                Soutenez le développement de SINESE en devenant partenaire ou sponsor.
              </p>
              <Link href="/devenir-partenaire/sponsors" className="hero-card-link">
                Nous soutenir
                <i className="bi bi-arrow-right ms-2"></i>
              </Link>
            </div>
          </Col>
        </Row>


      </Container>
    </section>
  );
}

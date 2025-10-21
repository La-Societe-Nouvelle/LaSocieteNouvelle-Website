"use client";

import { Container, Row, Col } from "react-bootstrap";
import Link from "next/link";

export default function AboutSection() {
  return (
    <section className="section">
      <Container>
        <div className="section-header text-center mb-4 mb-md-5">
          <h3 className="section__title section__title--center"> Passez à l'action</h3>
          <p className="section-subtitle">
            Trouvez votre façon de contribuer à la transition des entreprises vers une économie plus durable.
          </p>
        </div>

        <Row className="g-4">
          <Col md={4}>
            <Link href="/devenir-partenaire/entreprises" className="cta-card-link">
              <div className="cta-card cta-card-primary">
                <div className="cta-card-icon">
                  <i className="bi bi-building"></i>
                </div>
                <h3 className="cta-card-title">Entreprise</h3>
                <p className="cta-card-text">
                  Mesurez et publiez votre empreinte sociétale pour valoriser votre engagement extra-financier.
                </p>
                <div className="cta-card-action">
                  En savoir plus
                  <i className="bi bi-arrow-right ms-2"></i>
                </div>
              </div>
            </Link>
          </Col>

          <Col md={4}>
            <Link href="/devenir-partenaire/expert-comptable" className="cta-card-link">
              <div className="cta-card cta-card-secondary">
                <div className="cta-card-icon">
                  <i className="bi bi-calculator"></i>
                </div>
                <h3 className="cta-card-title">Expert-comptable</h3>
                <p className="cta-card-text">
                  Accompagnez vos clients dans la mesure de leur empreinte et devenez partenaire certifié.
                </p>
                <div className="cta-card-action">
                  Devenir partenaire
                  <i className="bi bi-arrow-right ms-2"></i>
                </div>
              </div>
            </Link>
          </Col>

          <Col md={4}>
            <Link href="/devenir-partenaire/chercheurs-experts" className="cta-card-link">
              <div className="cta-card cta-card-dark">
                <div className="cta-card-icon">
                  <i className="bi bi-lightbulb"></i>
                </div>
                <h3 className="cta-card-title">Chercheurs & Experts</h3>
                <p className="cta-card-text">
                  Chercheurs, économistes, statisticiens, ingénieurs ACV : exploitez nos données et contribuez aux méthodologies.
                </p>
                <div className="cta-card-action">
                  Explorer les données
                  <i className="bi bi-arrow-right ms-2"></i>
                </div>
              </div>
            </Link>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

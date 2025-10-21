'use client';

import { Col, Container, Row } from "react-bootstrap";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";

export default function NosServices() {
  return (
    <div className="services-page">
      <PageHeader
        title="Nos services"
        subtitle="Accompagnement sur mesure pour mesurer et analyser votre empreinte sociétale"
        icon="briefcase"
      />

      <section className="services-section">
        <Container>
          <Row className="g-4">
            <Col lg={4}>
              <div className="cta-card cta-card-primary">
                <div className="cta-card-icon">
                  <i className="bi bi-building"></i>
                </div>
                <h2 className="cta-card-title">Empreinte Sociétale</h2>
                <span className="service-card__badge service-card__badge--entreprise">Entreprise</span>
                <p >
                  <strong>Nous vous accompagnons dans la mesure de l'empreinte sociétale de votre entreprise.</strong>
                </p>
                <p className="service-card__description">
                  Nous produisons les 12 indicateurs du panel, et nous vous présentons
                  les résultats obtenus et nos recommandations.
                </p>
                <ul className="service-card__features">
                  <li><i className="bi bi-check-circle"></i>Identification des données à collecter</li>
                  <li><i className="bi bi-check-circle"></i>Production des indicateurs</li>
                  <li><i className="bi bi-check-circle"></i>Présentation des résultats obtenus</li>
                  <li><i className="bi bi-check-circle"></i>Recommandations</li>
                  <li><i className="service-card__feature-optional">Si volontaire</i></li>
                  <li><i className="bi bi-check-circle"></i>Publication de l'Empreinte Sociétale</li>
                </ul>
                <p className="service-card__price">
                  <strong>Tarif : 500 €</strong> (hors période fiscale)
                </p>
              </div>
            </Col>

            <Col lg={4}>
              <div className="cta-card cta-card-secondary">
                <div className="cta-card-icon">
                  <i className="bi bi-bar-chart"></i>
                </div>
                <h2 className="cta-card-title">Étude sectorielle</h2>
                <span className="service-card__badge service-card__badge--syndicat">Syndicat professionnel</span>
                <p >
                  <strong>Nous mobilisons notre expertise statistique pour analyser votre branche d'activité.</strong>
                </p>
                <p className="service-card__description">
                  Nous analysons l'empreinte d'une activité économique sur une dimension sociale ou environnementale.
                </p>
                <ul className="service-card__features">
                  <li><i className="bi bi-check-circle"></i>Modélisation désagrégée du secteur d'activité</li>
                  <li><i className="bi bi-check-circle"></i>Analyse des déterminants de l'empreinte</li>
                  <li><i className="bi bi-check-circle"></i>Empreinte historique de l'activité</li>
                  <li><i className="bi bi-check-circle"></i>Anticipation des évolutions (scénario tendanciel)</li>
                  <li><i className="bi bi-check-circle"></i>Objectif sectoriel à horizon 2030</li>
                  <li><i className="bi bi-check-circle"></i>Identification des enjeux et recommandations</li>
                </ul>
                <p className="service-card__price">
                  <strong>Tarif : 5 000 - 20 000 €</strong>
                </p>
              </div>
            </Col>

            <Col lg={4}>
              <div className="cta-card cta-card-dark">
                <div className="cta-card-icon">
                  <i className="bi bi-globe"></i>
                </div>
                <h2 className="cta-card-title">Empreinte territoriale</h2>
                <span className="service-card__badge service-card__badge--collectivite">Collectivités territoriales</span>
                <p >
                  <strong>Nous construisons un suivi des impacts sociaux et environnementaux sur votre territoire.</strong>
                </p>
                <p className="service-card__description">
                  Nous construisons un tableau de bord des impacts à l'échelle de votre commune, de votre département
                  ou de votre région.
                </p>
                <ul className="service-card__features">
                  <li><i className="bi bi-check-circle"></i>Empreinte du tissu économique</li>
                  <li><i className="bi bi-check-circle"></i>Émissions territoriales de GES</li>
                  <li><i className="bi bi-check-circle"></i>Anticipation des évolutions (scénario tendanciel)</li>
                  <li><i className="bi bi-check-circle"></i>Recommandations</li>
                </ul>
                <p className="service-card__price">
                  <strong>Tarif : 10 000 - 40 000 €</strong>
                </p>
              </div>
            </Col>
          </Row>

          <div className="text-center mt-5">
            <Link href="/contact" className="btn btn-primary btn-lg">
              Nous contacter
              <i className="bi bi-arrow-right ms-2"></i>
            </Link>
          </div>
        </Container>
      </section>

      <section className="highlight-section">
        <Container>
          <div className="highlight-section__content">
            <h2 className="highlight-section__title">
              <i className="bi bi-lightbulb me-2"></i>
              Un projet autour de la donnée extra-financière ?
            </h2>
            <p >
              Vous travaillez sur un projet en lien avec la donnée extra-financière (solution, etc.), et vous souhaitez
              faire appel à notre expertise ou à nos données ? N'hésitez pas à prendre contact avec nous, hors demande
              spécifique, nos ressources sont libres d'utilisation.
            </p>
          </div>
        </Container>
      </section>
    </div>
  );
}
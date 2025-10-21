import Image from "next/image";
import { Button, Col, Container, Row } from "react-bootstrap";

import PageHeader from "@/components/PageHeader";

export const metadata = {
  title: "La Société Nouvelle | Se former aux enjeux de durabilité",
  description: "Formations sur les enjeux sociaux et environnementaux",
  openGraph: {
    url: "https://lasocietenouvelle.org/devenir-partenaire/se-former",
    description: "Formations sur les enjeux sociaux et environnementaux",
  },
};

export default function SeFormer() {
  return (
    <div className="se-former-page">
      <PageHeader
        title="Se former"
        subtitle="Formations et ressources sur les enjeux de durabilité"
        icon="book"
      />

      {/* Section Intro */}
      <section className="section pb-0">
        <Container>
          <Row className="align-items-center">
            <Col lg={7}>
              <div className="section-header mb-5">
                <h3 className="section__title mb-4">
                  Se former sur les enjeux sociaux et environnementaux
                </h3>
              </div>
              <div className="section__content">
                <p>
                  Vous souhaitez <b>accompagner des entreprises sur les enjeux de durabilité</b> ?
                  Vous trouverez sur cette page un ensemble de liens internes et externes
                  pour monter en compétences sur les thématiques
                  liées aux enjeux sociaux et environnementaux et sur les indicateurs que nous
                  proposons.
                </p>
                <ul className="py-2">
                  <li className="mb-2">Liens vers des centres documentaires</li>
                  <li className="mb-2">Liens vers des formations</li>
                </ul>
                <p>
                  À noter que La Société Nouvelle n'est pas un organisme de formation et
                  n'a pas vocation à construire et proposer des offres
                  de formation. Pour être accompagné, n'hésitez pas à vous rapprocher d'acteurs
                  compétents sur le sujet, dont certains sont listés ci-dessous.
                </p>
              </div>
            </Col>
            <Col lg={5} className="text-center mt-4 mt-lg-0">
              <div className="section__illustration">
                <Image
                  src="/illustrations/formations.svg"
                  alt="Illustration formation"
                  width={450}
                  height={400}
                  priority
                />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      {/* Section Cap Durabilité */}
      <section className="highlight-section">
        <Container>
          <div className="highlight-section__content">
            <Row className="align-items-center">
              <Col lg={6} className="text-center mb-4 mb-lg-0">
                <Image
                  src="/illustrations/capdurabilite-illu.png"
                  alt="Illustration espace cap'durabilité"
                  width={500}
                  height={400}
                  style={{ maxWidth: '100%', height: 'auto' }}
                />
              </Col>
              <Col lg={6}>
                <h2 className="highlight-section__title">Vous êtes Expert-Comptable : Cap'Durabilité</h2>
                <p className="highlight-section__text">
                  Espace de référence sur la Durabilité, créé par l'Ordre des experts-comptables.
                </p>
                <p className="highlight-section__text fw-semibold">
                  Quatre niveaux
                </p>
                <ul className="ps-4 mb-4">
                  <li className="mb-2">Je me sensibilise et je m'informe sur les enjeux sociétaux et environnementaux</li>
                  <li className="mb-2">J'accompagne dans leur démarche RSE et je développe de nouvelles missions</li>
                  <li className="mb-2">Je reporte et monte en compétences sur les informations extra-financières</li>
                  <li className="mb-2">J'innove dans ma manière de compter avec la comptabilité verte</li>
                </ul>
                <a
                  className="btn btn-primary"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://capdurabilite.fr"
                >
                  Accéder à l'espace Cap'durabilité
                  <i className="bi bi-box-arrow-up-right ms-2"></i>
                </a>
              </Col>
            </Row>
          </div>
        </Container>
      </section>
      {/* Section Formations */}
      <section className="section">
        <Container>
          <div className="section-header text-center mb-5">
            <h3 className="section__title section__title--center">Formations identifiées</h3>
          </div>
          <Row className="g-4 mb-4">
            <Col lg={4}>
              <div className="service-card h-100">
                <h4 className="service-card__title">ENOES : Formation RSE</h4>
                <p className="fw-semibold mb-3">Intégrer la RSE dans la stratégie de l'entreprise</p>
                <div className="service-card__description">
                  <p className="mb-3">
                    Créée en 2019 par l'ENOES sous la direction de Thierry Carlier,
                    ce parcours de 77H vous aide à repérer les enjeux majeurs de la
                    Responsabilité Sociétale de l'entreprise et vous donne les clés de
                    la mise en œuvre.
                  </p>
                  <p className="mb-2">
                    <b>Public :</b> Expert-Comptable, Commissaires aux comptes, collaborateurs expérimentés
                  </p>
                  <p className="mb-2 fw-semibold">Contenu :</p>
                  <ul className="ps-4 mb-3">
                    <li className="mb-1">Appropriation du contexte et des principes de la RSE (3 jours)</li>
                    <li className="mb-1">Utiliser les méthodes et techniques de la RSE (4 jours)</li>
                    <li className="mb-1">Mise en œuvre de la RSE dans l'accompagnement du client (4 jours)</li>
                  </ul>
                  <p className="mb-2">
                    <b>Évaluation :</b> Quizz et Grand Jury : présentation d'un projet RSE
                  </p>
                  <p className="mb-3 small">
                    <b>Formateurs :</b> Orianne Champon, Jean-Baptiste Cottenceau, Sarah Guereau, Mélanie Blandin, Marielle Mathieu
                  </p>
                </div>
                <a
                  className="btn btn-outline-primary mt-auto"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://enoes.com/entreprise-et-alternance/formation-continue/cycle-de-formation-bonnes-pratiques-rse-en-conduite-du-changement/"
                >
                  En savoir plus
                  <i className="bi bi-box-arrow-up-right ms-2"></i>
                </a>
              </div>
            </Col>
            <Col lg={4}>
              <div className="service-card h-100">
                <h4 className="service-card__title">Odyssée du Colibri</h4>
                <p className="fw-semibold mb-3">Oser la RSE chez les experts-comptables</p>
                <div className="service-card__description">
                  <p className="mb-3">
                    Créée en 2023 par Orianne Champon, Odyssée du Colibri est une agence
                    qui accompagne la transformation des métiers du Chiffre grâce à la
                    Responsabilité Sociétale.
                  </p>
                  <p className="mb-2 fw-semibold">L'agence intervient dans différents domaines :</p>
                  <ul className="ps-4 mb-3">
                    <li className="mb-1">Conseil en stratégie : état des lieux, vision et plan d'action</li>
                    <li className="mb-1">Accompagnement : coaching individuel, collectif et aide au pilotage de projet RSE</li>
                    <li className="mb-1">Formation : création de parcours d'accompagnement pour vos équipes, intervention dans des écoles</li>
                    <li className="mb-1">Études et prospectives : programme de recherche sur l'acculturation des professionnels du chiffre sur les enjeux de durabilité</li>
                  </ul>
                  <p className="mb-3 small">
                    <b>Contact :</b> Orianne Champon, 06.17.25.17.63, orianne.champon@odyssee-colibri.com
                  </p>
                </div>
                <a
                  className="btn btn-outline-primary mt-auto"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.linkedin.com/company/odyssee-du-colibri"
                >
                  En savoir plus
                  <i className="bi bi-box-arrow-up-right ms-2"></i>
                </a>
              </div>
            </Col>
            <Col lg={4}>
              <div className="cta-card h-100">
                <h4 className="service-card__title">Atout RSE @Experts-Comptables</h4>
                <p className="fw-semibold mb-3">L'engagement pour renforcer la performance de votre cabinet</p>
                <div className="service-card__description">
                  <p className="mb-3">
                    <b>Objectifs :</b> Identifier les atouts RSE gagnants de votre cabinet comptable
                    et activer concrètement des solutions opérationnelles et valorisantes.
                  </p>
                  <p className="mb-3">
                    <b>Approche :</b> Un accompagnement à partir de ce que vous êtes et ce que vous
                    faites. Avant tout de l'observation, de la mise en cohérence et de la
                    valorisation. La RSE est une démarche de progrès et de création de valeur
                    « gagnant-gagnant » pas une révolution, ni du mécénat.
                  </p>
                  <p className="mb-3">
                    <b>Offre :</b> Accompagner concrètement, à la carte et à domicile, des TPE/PME et
                    les cabinets comptables sur les enjeux de la RSE et du développement durable.
                  </p>
                </div>
                <a
                  className="btn btn-outline-primary  btn-sm"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://croissancebleue.com/prestations-rse/"
                >
                  En savoir plus
                  <i className="bi bi-box-arrow-up-right ms-2"></i>
                </a>
              </div>
            </Col>
          </Row>


        </Container>
      </section>

      <section className="highlight-section mt-0">
        <Container>
          <div className="highlight-section__content d-flex flex-column align-items-center text-center">
            <h4 className="highlight-section__title">
              <i className="bi bi-lightbulb me-2"></i>
              Une formation à suggérer ?
            </h4>
            <p>
              Vous proposez une formation en lien avec les enjeux de durabilité ? N'hésitez pas à nous contacter pour que nous puissions l'ajouter à cette liste.
              N'hésitez pas à nous contacter pour que nous puissions l'ajouter à cette liste.
            </p>
            <Button variant="secondary" href="/contact" className="mt-3">
              Nous contacter
            </Button>
          </div>
        </Container>
      </section>
    </div>
  );
}
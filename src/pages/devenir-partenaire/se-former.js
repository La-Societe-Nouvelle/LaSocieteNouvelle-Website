import { useState } from "react";
import { Button, Col, Container, Image, Row } from "react-bootstrap";
import { Helmet } from "react-helmet";

const DevenirPartenaire_ExpertComptable = () => {
  return (
    <>
      <Helmet>
        <title>La Société Nouvelle | Formations</title>

        <meta
          property="og:url"
          content="https://lasocietenouvelle.org/devenir-partenaire/expert-comptable"
        />
        <meta
          property="og:description"
          content="Devenir partenaire - Expert Comptable"
        />
      </Helmet>

      <section>
        <Container>
          <Row className="align-items-center">
            <Col lg={8}>
              <h2 className="h1">Se former sur les enjeux sociaux et environnementaux</h2>
              <h3>Vous souhaitez accompagner des entreprises ?</h3>
              <p>
                Vous trouverez au sein de cette page, un ensemble de liens internes et externes
                pour monter en compétences sur les thématiques
                liés au développement durable et sur les indicateurs que nous
                proposons.
              </p>
              <ul>
                <li>Liens vers des centres documentaires</li>
                <li>Liens vers des formations</li>
              </ul>
              <p>
                A noter que La Société Nouvelle n'est pas un organisme de formation, et
                nous n'a pas vocation à construire et proposer des offres
                de formation. Pour être accompagner, n'hésitez pas à vous rapprocher d'acteurs
                compétents sur le sujet, dont certains sont listés ci-dessous.
              </p>
            </Col>
            <Col className="text-end">
              <Image
                src="/illustrations/training-illu.svg"
                alt="Illustration lecture fec"
                fluid
              />
            </Col>
          </Row>
        </Container>
      </section>
      <section className="bg-light">
        <Container>
            <Row className="align-items-center">
              <Col className="text-end">
                <Image
                  src="/illustrations/capdurabilite-illu.png"
                  alt="Illustration espace cap'durabilité"
                  fluid
                />
              </Col>
              <Col lg={6}>
                <h2 className="h1">Vous êtes Expert-Comptable : Cap'Durabilité</h2>
                <p>
                  Espace de référence sur la Durabilité, créé par l'Ordre des experts-comptables.
                </p>
                <p>
                  Qautre niveaux
                </p>
                <ul>
                  <li>Je me sensibilise et je m'informe sur les enjeux sociétaux et environnementaux</li>
                  <li>J'accompagne dans leur démarche RSE et je développe de nouvelles missions</li>
                  <li>Je reporte et monte en compétences sur les informations extra-financières</li>
                  <li>J'innove dans ma manière de compter avec la comptabilité verte</li>
                </ul>
                <Button className="btn-outline-secondary me-3" target="_blank" href="https://capdurabilite.fr">
                  Accéder à l'espace Cap'durablité
                </Button>
              </Col>
            </Row>
          </Container>
      </section>
      <section>
        <Container>
          <h2 className="h1">Formations disponibles</h2>
          <Row className="align-items-center">
            <Col className="text-center">
              <h3>Formation ENOES</h3>
              <p>
                Cycle de formation « Intégrer la RSE dans la stratégie de l’entreprise ».
              </p>
              <p>
                Cette formation vous aide à repérer les enjeux majeurs de la Responsabilité Sociétale de l’Entreprise et vous donne les clés de mise en œuvre.
              </p>
              <p>
                Le contenu du programme vous permettra de réaliser des missions d’accompagnement ou d’audit de la RSE pour vos clients.
              </p>
              <Button className="btn-outline-primary " 
                target="_blank"
                href="https://enoes.com/entreprise-et-alternance/formation-continue/cycle-de-formation-bonnes-pratiques-rse-en-conduite-du-changement/">
                En savoir plus
              </Button>
            </Col>
            <Col className="text-center">
              <h3>Odyssée du Colibri</h3>
              <p>
                Odyssée du Colibri facilite l'intégration de la Responsabilité Sociétale chez les professionnels du chiffre.
              </p>
              <p>
                Nous les accompagnons dans la transformation de leur métier.
                Nous les aidons à faire le lien entre le financier et l'extra-financier.
              </p>
              <p>
                Offre de services : Conseil en stratégie / Accompagnement / Formation / Ateliers / Etudes & Prospectives.
              </p>
              <Button className="btn-outline-primary " 
                target="_blank"
                href="https://www.linkedin.com/company/odyssee-du-colibri">
                En savoir plus
              </Button>
            </Col>
            <Col className="text-center">
              <h3>Formation WAOU</h3>
              <p>
                Stratégie RSE et Durabilité
              </p>
              <p>
                Parcours en 3 étapes afin de vous permettre d’intégrer la RSE dans vos pratiques professionnelles pour améliorer la performance globale de vos clients et la pérennité de leurs activités :
              </p>
              <ul>
                <li>Etape 1 – Sensibiliser et former les équipes des cabinets</li>
                <li>Etape 2 – Produire un rapport intégré en alliant financier et extra financier</li>
                <li>Etape 3 – Développer l’offre marketing et vous accompagner à son déploiement.</li>
              </ul>
              <Button className="btn-outline-primary " 
                target="_blank"
                href="https://waou.expert/waou-pour-qui/waou-pour-expert-comptable/">
                En savoir plus
              </Button>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default DevenirPartenaire_ExpertComptable;
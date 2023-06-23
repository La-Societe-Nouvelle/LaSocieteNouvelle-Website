import { useState } from "react";
import { Button, Col, Container, Image, Row } from "react-bootstrap";
import { Helmet } from "react-helmet";

const DevenirPartenaire_ExpertComptable = () => {
  return (
    <>
      <Helmet>
        <title>La Société Nouvelle | Expert comptable</title>

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
              <h2 className="h1">Expert comptable</h2>
              <h3>Vous êtes un acteur de la comptabilité ?</h3>
              <p>
                Face à l'urgence sociale et environnementale, il est désormais
                incontournable de compléter les informations comptables
                traditionnelles par des indicateurs de performance
                extra-financière.
              </p>
              <p>
                La pérennité d'une entreprise passe désormais par la prise en
                compte des défis sociaux et environnementaux. Chaque entreprise
                se doit de s'assurer que la valeur qu'elle produit est
                compatible avec la transition vers une économie soutenable.
              </p>
              <p>
                Les indicateurs sur lesquels nous travaillons fournissent un
                positionnement de l'entreprise au regard d'objectifs clefs de
                développement durable. Ils sont comparables par rapport à la
                branche d'activité de l'entreprise et à des trajectoires cibles
                et assurent un suivi annuel.
              </p>
              <p>
                Le complément comptable obtenu, vous permet ainsi d'enrichir vos
                livrables en fin d'exercice pour :
              </p>
              <ul>
                <li>
                  Sensibiliser vos clients aux enjeux de développement durable
                </li>
                <li>
                  Informer vos clients sur leurs performances sociales et
                  environnementales
                </li>
                <li>Valoriser leurs actions et leurs engagements sociétaux</li>
                <li>
                  In fine, leur permettre de pleinement contribuer à une
                  économie durable
                </li>
              </ul>
            </Col>
            <Col className="text-end">
              <Image
                src="/illustrations/lecture-fec.svg"
                alt="Illustration lecture fec"
                fluid
              />
            </Col>
          </Row>
        </Container>
      </section>
      <section className="bg-light text-center">
        <blockquote className="blockquote">
          <p>
            "Toute compréhension de l'entreprise passe par sa comptabilité. Or
            les enjeux sociaux et environnementaux qui doivent être considérés
            en sont absents."
          </p>
          <footer>
            Rapport L'entreprise, objet d'intérêt général,
            <cite title="Source Title">
              Nicole NOTAT et Jean-Dominique SENARD, 2018
            </cite>
          </footer>
        </blockquote>
      </section>
      <section>
        <Container>
          <Row className="align-items-center">
            <Col>
              <Image
                alt="Illustration comparaison version simple version partenaire metriz application web"
                src="/illustrations/version-partenaire-cabinet-comptable.svg"
                fluid
              />
            </Col>
            <Col>
              <h3>Un outil de calcul sur mesure pour les partenaires</h3>
              <p>
                Devenez partenaire et bénéficiez d'une version spécifique à
                votre disposition. Vous disposerez également :
              </p>
              <ul className="list-unstyled">
                <li>
                  <i className="bi bi-check2"></i> Une maintenance évolutive
                </li>
                <li>
                  <i className="bi bi-check2"></i> Un support technique
                </li>
                <li>
                  <i className="bi bi-check2"></i> Des livrables personnalisés
                </li>
                <li>
                  <i className="bi bi-check2"></i> Un ajustement de l'outil à
                  vos fichiers internes
                </li>
              </ul>

              <Button className="btn-outline-secondary me-3" href="/ressources/application-mesure-impact">
                En savoir plus
              </Button>
              <Button className="btn-outline-primary " href="/contact">
                Contactez-nous
              </Button>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default DevenirPartenaire_ExpertComptable;
import { useState } from "react";
import { Button, Col, Container, Image, Row } from "react-bootstrap";
import { Helmet } from "react-helmet";

const BecomePartner = () => {
  return (
    <>
      <Helmet>
        <title>La Société Nouvelle | Données statistiques</title>

        <meta
          property="og:url"
          content="https://lasocietenouvelle.org/devenir-partenaire"
        />
        <meta
          property="og:description"
          content="Devenez partenaire du projet"
        />
      </Helmet>

      <section className="databrowser">
        <Container>
          <Row className="align-items-center">
            <Col>
              <h2 className="h1">Devenez partenaire</h2>
              <p>
                Les données et ressources mises à disposition sont publiques et libres d'exploitation, y compris
                pour un usage commercial.
              </p>
              <p>
                Vous pouvez les utiliser au sein de votre organisation, dans le cadre de vos services mais également participer
                à leur évolution.
              </p>
              <p>
                N'hésitez pas à nous contacter pour en savoir plus.
              </p>
            </Col>
            <Col lg={5}>
              <Image
                src="/illustrations/donnees-par-defaut.svg"
                alt="Illustration de personnes qui consultent des données"
              />
            </Col>
          </Row>
        </Container>
      </section>
      <section className="px-5">
        <Container fluid>
          <Row>
            <Col>
              <div className="text-center border p-4  illu-box ">
                <Image
                  fluid
                  src="/illustrations/open-source.svg"
                  alt="Icone open source"
                />
                <h3>Code source ouvert</h3>
                <p>
                  Le code source est ouvert, vous pouvez y accéder
                  via notre répertoire GitHub
                </p>
              </div>
            </Col>
            <Col>
              <div className="text-center border  p-4  illu-box ">
                <Image
                  fluid
                  src="/illustrations/loupe.svg"
                  alt="Icone Methodo "
                />
                <h3>Méthodologie publique</h3>
                <p>
                  La méthodologie est publique et accessible en ligne pour les
                  curieux et les experts
                </p>
              </div>
            </Col>
            <Col>
              <div className="text-center border  p-4  illu-box ">
                <Image
                  fluid
                  src="/illustrations/coop.svg"
                  alt="Icone Contribution"
                />
                <h3>Contribution bienvenue</h3>
                <p>
                  Une idée ? Une correction ? Une remarque ? Toute
                  contribution est la bienvenue
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default BecomePartner;
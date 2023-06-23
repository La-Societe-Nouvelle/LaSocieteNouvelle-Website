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
                  src="/illustrations/coop.svg"
                  alt="Icone Contribution"
                />
                <h3>Proposez la mesure des indicateurs</h3>
                <p>
                  Vous êtes expert-comptable et vous souhaitez informer
                  vos clients sur l'empreinte sociétale de leur production ?
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
                <h3>Faites évoluer l'application web Metriz</h3>
                <p>
                  Vous êtes développeur (JavaScript) et vous souhaitez
                  contribuer à l'amélioration de l'application web ?
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
                <h3>Sponsorisez nos travaux</h3>
                <p>
                  Vous souhaitez nous soutenir financièrement,
                  pour accélérer le déploiement du système d'information ?
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
                <h3>Collaborez avec nous</h3>
                <p>
                  Vous avez une idée, un projet de collaboration 
                  ou vous souhaitez mettre vos ressources ou vos compétences
                  au service du projet ?
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
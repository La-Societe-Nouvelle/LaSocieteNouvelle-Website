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
              <h2 className="h1">Devenir Sponsor de nos travaux !</h2>
              <h3>Vous souhaitez soutenir nos travaux autour de la transition écologique</h3>
              <p>
                60% de nos activités sont financées grâce à nos partenaires.
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

      <section>
        <p>Tableau avec tarifs</p>
        <Container>
          <Row className="align-items-center">
            <Col lg={8}>
              <h2 className="h1">Devenir Sponsor de nos travaux !</h2>
              <h3>Vous souhaitez soutenir nos travaux autour de la transition écologique</h3>
              <p>
                60% de nos activités sont financées grâce à nos partenaires.
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
    </>
  );
};

export default DevenirPartenaire_ExpertComptable;
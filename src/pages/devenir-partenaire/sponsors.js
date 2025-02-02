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
              <h2 className="h1">Vous souhaitez soutenir nos travaux ?</h2>
              <h3>Devenez sponsor !</h3>
              <p>
                60% de nos activités sont financées grâce à nos partenaires.
              </p>
              <p>
                Votre soutien est essentiel pour faire avancer notre mission 
                de transformation de l'économie vers plus de durabilité et 
                de responsabilité. En devenant adhérent de La Société Nouvelle, 
                vous participez activement au développement de METRIZ et à la 
                diffusion de la méthode de l'Empreinte Sociétale.
              </p>
              <p>
                Pour devenir partenaire, téléchargez la fiche partenaire et 
                renvoyez là à l'adresse contact@lasocietenouvelle.org
              </p>
              <Button
                variant="secondary"
                href="https://lasocietenouvelle.org/docs/Fiche-Partenaire-2025.pdf"
                target="_blank"
                title="Télécharger la fiche partenaire 2025"
              >
                Télécharger la fiche partenaire 2025
              </Button>
            </Col>
            <Col className="text-end">
              <Image
                src="/illustrations/illustration-sponsor.png"
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
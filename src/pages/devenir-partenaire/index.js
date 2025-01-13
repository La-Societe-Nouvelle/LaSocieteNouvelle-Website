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

      <section className="px-5 ">
        <h2 className="h1">
          Devenez partenaire du projet
        </h2>
        <p>Partenariat (fiche)</p>
        <Container fluid>
          <Row>
            <Col>
              <div className="text-center border border-2 p-4  illu-box ">
                <h3>Vous êtes expert-comptable ?</h3>
                <p>
                  Proposez le service de mesure de l'empreinte sociétale à vos clients
                  et accompagnez les dans le pilotage de leur performance extra-financière.
                </p>
                <Image
                  fluid
                  src="/illustrations/services.png"
                  alt="Icone Contribution"
                />
                <p></p>
                <Button size="sm" href="/devenir-partenaire/expert-comptable">
                  En savoir plus
                </Button>
              </div>
            </Col>
            <Col>
              <div className="text-center border border-2  p-4  illu-box ">
                <h3>Vous êtez développeur ?</h3>
                <p>
                  Vous êtes développeur (JavaScript) et vous souhaitez
                  contribuer à l'amélioration de l'application web ?
                </p>
                <Image
                  fluid
                  src="/illustrations/github.png"
                  alt="Icone Contribution"
                />
                <p></p>
                <Button
                  size="sm"
                  href="https://github.com/La-Societe-Nouvelle/LaSocieteNouvelle-METRIZ-WebApp"
                  target="_blank"
                >
                  Répertoire GitHub
                </Button>
              </div>
            </Col>
            <Col>
              <div className="text-center border border-2  p-4  illu-box ">
                <h3>Vous accompagnez des entreprises ?</h3>
                <p>
                  Vous êtes développeur (JavaScript) et vous souhaitez
                  contribuer à l'amélioration de l'application web ?
                </p>
                <Image
                  fluid
                  src="/illustrations/github.png"
                  alt="Icone Contribution"
                />
                <p></p>
                <Button
                  size="sm"
                  href="https://github.com/La-Societe-Nouvelle/LaSocieteNouvelle-METRIZ-WebApp"
                  target="_blank"
                >
                  Répertoire GitHub
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section>
        <p>Expert-Comptable, blablabla</p>
      </section>

      <section>
        <p>Communauté DISCORD</p>
      </section>
    </>
  );
};

export default BecomePartner;

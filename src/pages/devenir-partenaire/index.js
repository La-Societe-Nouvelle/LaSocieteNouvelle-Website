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

      <section className="py-0">
        <Container>
          <Row className="align-items-center">
            <Col>
              <h2 className="h1">Devenez partenaire</h2>
              <p>
                Les données et ressources mises à disposition sont publiques et
                libres d'exploitation, y compris pour un usage commercial.
              </p>
              <p>
                Vous pouvez les utiliser au sein de votre organisation, dans le
                cadre de vos services mais également participer à leur
                évolution.
              </p>
              <p>N'hésitez pas à nous contacter pour en savoir plus.</p>
              <Button
                variant="secondary"
                href="mailto:contact@lasocietenouvelle.org"
                className="mt-2"
              >
                Contactez-nous
              </Button>
            </Col>
            <Col lg={5}>
              <Image
                src="/illustrations/partenaires.svg"
                alt="Illustration de personnes qui se tappent dans les mains"
              />
            </Col>
          </Row>
        </Container>
      </section>
      <section className="px-5 ">
        <Container fluid>
          <Row>
            <Col>
              <div className="text-center border border-2 p-4  illu-box ">
                <Image
                  fluid
                  src="/illustrations/services.png"
                  alt="Icone Contribution"
                />
                <h3>Proposez la mesure des indicateurs</h3>
                <p>
                  Vous êtes expert-comptable et vous souhaitez informer vos
                  clients sur l'empreinte sociétale de leur production ?
                </p>
                <Button size="sm" href="/devenir-partenaire/expert-comptable">
                  En savoir plus
                </Button>
              </div>
            </Col>
            <Col>
              <div className="text-center border border-2  p-4  illu-box ">
                <Image
                  fluid
                  src="/illustrations/github.png"
                  alt="Icone Contribution"
                />
                <h3>Faites évoluer l'application web Metriz</h3>
                <p>
                  Vous êtes développeur (JavaScript) et vous souhaitez
                  contribuer à l'amélioration de l'application web ?
                </p>
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
                <Image
                  fluid
                  src="/illustrations/sponsorship.png"
                  alt="Icone Contribution"
                />
                <h3>Sponsorisez nos travaux</h3>
                <p>
                  Vous souhaitez nous soutenir financièrement, pour accélérer le
                  déploiement du système d'information ?
                </p>
                <Button size="sm" href="mailto:contact@lasocietenouvelle.org">
                  Contactez-nous
                </Button>
              </div>
            </Col>
            <Col>
              <div className="text-center border border-2 p-4  illu-box ">
                <Image
                  fluid
                  src="/illustrations/cadeau.png"
                  alt="Icone Contribution"
                />
                <h3>Collaborez avec nous</h3>
                <p>
                  Vous avez une idée, un projet de collaboration ou vous
                  souhaitez mettre vos ressources ou vos compétences au service
                  du projet ?
                </p>
                <Button size="sm" href="mailto:contact@lasocietenouvelle.org">
                  Contactez-nous
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default BecomePartner;

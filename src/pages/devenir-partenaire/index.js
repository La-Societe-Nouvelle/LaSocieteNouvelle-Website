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

      <section>
        <Container>
          <h2 className="h1 main-titles">
            Devenez partenaire
          </h2>
          <p>
            Le projet que nous portons est Open Data et Open Source grâce à vous !
          </p>
          <p>
            Que vous soyez un cabinet comptable, un acteur du numérique, une structure publique, ou une organisation engagée pour la transition durable, votre expertise est précieuse. Ensemble, nous pouvons accélérer l'adoption de nouvelles pratiques qui mettent la performance sociétale au cœur des décisions économiques.
          </p>
        </Container>
        {/* <Container>
          <Row className="align-items-center">
            <Col lg={9}>
              <p>
                Les données et ressources mises à disposition sont publiques et libres d'exploitation, y compris pour un usage commercial.
              </p>
              <p>
                Vous pouvez les utiliser au sein de votre organisation, dans le cadre de vos services mais également participer à leur évolution.
              </p>
              <p>
                Ensemble, nous pouvons accélérer l'adoption de nouvelles pratiques qui mettent la performance sociale et environnementale au cœur des décisions économiques.
              </p>
              <Button
                className="m-3"
                variant="primary"
                href="https://lasocietenouvelle.org/docs/Fiche-Partenaire-2025.pdf"
                target="_blank"
                title="Télécharger la fiche partenaire 2025"
              >
                Télécharger la fiche partenaire 2025
              </Button>
            </Col>
            <Col lg={3} className="text-end">
              <Image
                fluid
                src="/illustrations/illustration-sponsor.png"
                alt="Illustration Sponsor"
              />
            </Col>
          </Row>
        </Container> */}
        <Container fluid className="mt-5 px-5">
          <Row>
            <Col>
              <div className="text-center border border-2 p-4 ">
                <h3>Sponsoring</h3>
                <p>
                  Contribuer financièrement à nos travaux en devenant partenaire.
                </p>
                <Image
                  fluid
                  src="/illustrations/illustration-sponsor.png"
                  alt="Illustration Sponsor"
                />
                <p></p>
                <Button size="sm" href="/devenir-partenaire/sponsors">
                  En savoir plus
                </Button>
              </div>
            </Col>
            <Col>
              <div className="text-center border border-2 p-4">
                <h3>Expertise-Comptable</h3>
                <p>
                  Proposez le service de mesure de l'empreinte sociétale à vos clients
                  et accompagnez les dans le pilotage de leur performance extra-financière.
                </p>
                <Image
                  fluid
                  src="/illustrations/illustration-analyze.png"
                  alt="Illustration Expert-Comptable"
                />
                <p></p>
                <Button size="sm" href="/devenir-partenaire/expert-comptable">
                  En savoir plus
                </Button>
              </div>
            </Col>
            <Col>
              <div className="text-center border border-2  p-4">
                <h3>Développement Web</h3>
                <p>
                  Vous êtes développeur (JavaScript) et vous souhaitez
                  contribuer à l'amélioration de l'application web ?
                </p>
                <Image
                  fluid
                  src="/illustrations/illustration-dev.png"
                  alt="Illustration Developpement Web"
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
              <div className="text-center border border-2  p-4">
                <h3>Accompagnement RSE</h3>
                <p>
                  Vous accompagnez des entreprises sur les enjeux de durabilité ?
                  Proposez à vos clients la publication de leur empreinte sociétale.
                </p>
                <Image
                  fluid
                  src="/illustrations/illustration-csr.png"
                  alt="Illustration RSE Audit"
                />
                <p></p>
                <Button
                  size="sm"
                  href="/devenir-partenaire"
                  target="_blank"
                >
                  En savoir plus
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* <section className="bg-light">
        <p>Expert-Comptable...</p>
      </section> */}

      {/* <section>
        <p>Serveur Discord</p>
      </section> */}
    </>
  );
};

export default BecomePartner;

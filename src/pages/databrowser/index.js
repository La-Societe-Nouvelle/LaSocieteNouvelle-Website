// La Société Nouvelle

//-- React
import { useState } from "react";
import { Helmet } from "react-helmet";

//-- Bootstrap
import { Button, Col, Container, Image, Row } from "react-bootstrap";

//-- Components
import { KeyFigures } from "../../components/KeyFigures";

const DataBrowser = () => 
{
  return (
    <>
      <Helmet>
        <title>La Société Nouvelle | Données statistiques</title>
        <meta
          property="og:url"
          content="https://lasocietenouvelle.org/databrowser"
        />
        <meta
          property="og:description"
          content="Consultez les données statistiques produites par La Société Nouvelle."
        />
      </Helmet>

      <KeyFigures />

      <section className="bg-light">
        <Container fluid className="mt-1 px-5">
          <Row>
            <Col className="d-flex align-self-stretch">
              <div className="text-center border border-2 p-4 d-flex flex-column justify-content-between bg-white">
                <h3>Empreintes macroéconomiques</h3>
                <p>
                  Séries statistiques sur les externalités des activités économiques: suivis historiques, tendances
                  et trajectoires cibles.
                </p>
                <Image
                  fluid
                  src="/illustrations/illustration-documentation.png"
                  alt="Illustration Documentation"
                  style={{ height: "auto", width: "250px", margin: "auto" }}
                />
                <Button 
                  size="sm" 
                  href="https://docs.lasocietenouvelle.org"
                  target="_blank"
                  className="rounded-0"
                  variant="outline"
                >
                  Consulter la documentation
                </Button>
              </div>
            </Col>
            <Col className="d-flex align-self-stretch">
              <div className="text-center border border-2 p-4 d-flex flex-column justify-content-between bg-white">
                <h3>Facteurs d'impacts monétaires</h3>
                <p>
                  Mesurer l'empreinte sociétale de votre entreprise ou proposer le service pour vos clients.
                </p>
                <Image
                  fluid
                  src="/illustrations/illustration-webapp.png"
                  alt="Illustration WebApp"
                  style={{ height: "auto", width: "250px", margin: "auto" }}
                />
                <Button 
                  size="sm" 
                  target="_blank"
                  href="https://partners.metriz.lasocietenouvelle.org"
                  className="rounded-0"
                  variant="outline"
                >
                  Découvrir l'application
                </Button>
              </div>
            </Col>
            <Col className="d-flex align-self-stretch">
              <div className="text-center border border-2 p-4 d-flex flex-column justify-content-between bg-white">
                <h3>Espace partenaire</h3>
                <p>
                  Vous êtes expert-comptable ? Utilisez nos ressources pour informer vos clients sur leur
                  performance extra-financière.
                </p>
                <Image
                  fluid
                  src="/illustrations/illustration-partners.png"
                  alt="Illustration Partenaires"
                  style={{ height: "auto", width: "250px", margin: "auto" }}
                />
                <Button
                  size="sm"
                  href="/devenir-partenaire"
                  className="bg-blue-bis rounded-0"
                  variant="outline"
                >
                  Devenir partenaire
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <h3 className="mb-3">Packages R</h3>
          <Row>
            <Col>
              <Image
                src="/illustrations/package.svg"
                alt="Illustration de personnes qui consultent des données"
              />
            </Col>
            <Col lg={8}>
              <h4>Package CRAN - lsnstat - Accés aux données</h4>
              <p> Le package R <a
                  href="https://cran.r-project.org/web/packages/lsnstat/index.html"
                  target="_blank"
                >
                  lsnstat
                </a> facilite l'exploitation des données macroéconomiques produites 
                et utilisées par La Société Nouvelle, ainsi que leurs métadonnées associées,
                 dans le langage .R.
              </p>
              <p>
                Il fait le lien avec l'API publique 'La Société Nouvelle'.
              </p>
              <p>
                L'API est directement accessible via le lien suivant :{" "}
                <a href="https://api.lasocietenouvelle.org/" target="_blank">
                  https://api.lasocietenouvelle.org/
                </a>
              </p>
              <h4>Package lsnR-Lab - Production des données</h4>
              <p>
                Le package R lsnR-Lab contient le script de calcul
                des empreintes sociales et environnementales de la
                production des activités économiques françaises.
              </p>

              <p>
                Les fonctions disponibles permettent d'estimer les empreintes des
                agrégats macroéconomiques des branches (NACE 38) et des divisions (NACE 88)
                économiques, sur les douze dimensions
                sociales et environnementales de l'Empreinte Sociétale.
              </p>

              <p>
                Découvrez les fonctionnalités du package lsnR-Lab en consultant <a href="https://github.com/La-Societe-Nouvelle/lsnr-lab" target="_blank">notre dépôt GitHub</a> .
              </p>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default DataBrowser;

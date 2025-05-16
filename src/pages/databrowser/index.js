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

      <section className="bg-light-blue">
        <Container fluid className="mt-1 px-5">
          <Row>
            <Col lg={1}/>
            <Col lg={6}>
              <h2 className="text-blue">Bienvenue sur notre portail Open Data,</h2>
              <p>
                Accédez aux jeux de données statistiques macroéconomiques produits
                par La Société Nouvelle. Ils comprennent un suivi de l'empreinte des
                activités économiques françaises, leur tendance sur les années à
                venir et des trajectoires cibles sectorielles.
              </p>
              <p>
                Les données permettent à chaque entreprise de se situer par rapport
                à sa branche d'activité et d'assurer la compatibilité de ses
                activités avec la transition écologique et sociale.
              </p>
            </Col>
            {/* <Col lg={1}/>
            <Col lg={4}>
              <Image
                className="w-50 opacity-75"
                src="/illustrations/donnees-par-defaut.svg"
                alt="Illustration-Databrowser"
              />
            </Col> */}
          </Row>
        </Container>
      </section>

      <KeyFigures />

      <section className="bg-light">
        <Container fluid className="mt-1 px-5">
          <Row>
            <Col className="d-flex align-self-stretch">
              <div className="text-center border border-2 p-4 d-flex flex-column justify-content-between bg-white">
                <h3>Empreintes macroéconomiques</h3>
                <p>
                  Séries statistiques sur les externalités des activités
                  économiques: suivis historiques, tendances et trajectoires
                  cibles.
                </p>
                <div className="">
                  <i className="bi bi-database-fill" style={{ fontSize: "150px" }}/>
                </div>
                {/* <Image
                  fluid
                  src="/illustrations/illustration-documentation.png"
                  alt="Illustration Documentation"
                  style={{ height: "auto", width: "250px", margin: "auto" }}
                /> */}
                <Button
                  size="sm"
                  href="/databrowser/datasets"
                  className="rounded-0"
                  variant="outline"
                >
                  Explorer les jeux de données
                </Button>
              </div>
            </Col>
            <Col className="d-flex align-self-stretch">
              <div className="text-center border border-2 p-4 d-flex flex-column justify-content-between bg-white">
                <h3>Facteurs d'impacts monétaires</h3>
                <p>
                  Coefficients pour l'estimation des impacts sociaux et environnementaux par activité économique.
                </p>
                <div className="">
                  <i className="bi bi-calculator-fill" style={{ fontSize: "150px" }}/>
                </div>
                <Button
                  size="sm"
                  href="/databrowser/env_impact_factors"
                  className="rounded-0"
                  variant="outline"
                >
                  Accéder aux données
                </Button>
              </div>
            </Col>
            <Col className="d-flex align-self-stretch">
              <div className="text-center border border-2 p-4 d-flex flex-column justify-content-between bg-white">
                <h3>Baromètre des émissions de GES</h3>
                <p>
                  Estimation des émissions territoriales d'émission de gaz à effet de serre.
                </p>
                <div className="">
                  <i className="bi bi-bar-chart-fill" style={{ fontSize: "150px" }}/>
                </div>
                <Button
                  size="sm"
                  href="/databrowser/barometre-ges"
                  className="bg-blue-bis rounded-0"
                  variant="outline"
                >
                  Consulter les dernières estimations
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section>
        <Container className="my-5">
          <h2 className="">Nos engagements</h2>
          <Row>
            <Col>
              <Image
                src="/illustrations/package.svg"
                alt="Illustration de personnes qui consultent des données"
              />
            </Col>
            <Col lg={8}>
              <h4>Package CRAN - lsnstat - Accés aux données</h4>
              <p>
                {" "}
                Le package R{" "}
                <a
                  href="https://cran.r-project.org/web/packages/lsnstat/index.html"
                  target="_blank"
                >
                  lsnstat
                </a>{" "}
                facilite l'exploitation des données macroéconomiques produites
                et utilisées par La Société Nouvelle, ainsi que leurs
                métadonnées associées, dans le langage .R.
              </p>
              <p>Il fait le lien avec l'API publique 'La Société Nouvelle'.</p>
              <p>
                L'API est directement accessible via le lien suivant :{" "}
                <a href="https://api.lasocietenouvelle.org/" target="_blank">
                  https://api.lasocietenouvelle.org/
                </a>
              </p>
              <h4>Package lsnR-Lab - Production des données</h4>
              <p>
                Le package R lsnR-Lab contient le script de calcul des
                empreintes sociales et environnementales de la production des
                activités économiques françaises.
              </p>

              <p>
                Les fonctions disponibles permettent d'estimer les empreintes
                des agrégats macroéconomiques des branches (NACE 38) et des
                divisions (NACE 88) économiques, sur les douze dimensions
                sociales et environnementales de l'Empreinte Sociétale.
              </p>

              <p>
                Découvrez les fonctionnalités du package lsnR-Lab en consultant{" "}
                <a
                  href="https://github.com/La-Societe-Nouvelle/lsnr-lab"
                  target="_blank"
                >
                  notre dépôt GitHub
                </a>{" "}
                .
              </p>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default DataBrowser;
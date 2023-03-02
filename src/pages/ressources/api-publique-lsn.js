import React from "react";
import { Col, Container, Image, Row, Button } from "react-bootstrap";
import { DocButton } from "../../components/buttons/DocButton";
import PageHeader from "../../components/PageHeader";

const API = () => {
  return (
    <>
      <PageHeader
        title={"API Publique de La Société Nouvelle"}
        prev={"ressources"}
        prevTitle={"Ressources"}
        path={"ressources/api-publique-lsn"}
        hasBreadcrumb={true}
      />

      <section>
        <Container>
          <Row className="align-items-center">
            <Col>
              <h3>
                Accéder librement aux empreintes sociétales des entreprises
              </h3>
              <p>
                L'API La Société Nouvelle est une API (Application Programming
                Interface) publique permettant l'accès aux empreintes sociétales
                des unités légales françaises enregistrées au sein du répertoire
                SIRENE et aux données macroéconomiques produites par La Société
                Nouvelle.
              </p>
              <p>
                Elle permet d’intégrer les données publiées des entreprises au
                sein des outils comptables (pour assurer une traçabilité le long
                des chaines de valeur) et facilite leur exploitation.
              </p>
              <div className="text-end mt-4">
                <Button
                  className="me-3"
                  href="https://api.lasocietenouvelle.org/"
                  target="_blank"
                >
                  Lien de l'API
                </Button>

                <DocButton />
              </div>
            </Col>
            <Col>
              <Image fluid src="/illustrations/test.svg"  alt="Illustration API" />
            </Col>
          </Row>
        </Container>
      </section>
      <section className="bg-light-secondary">
        <Container>
          <Row className=" justify-content-between">
            <Col>
              <div className="box text-center">
                <div className="icon h2">
                  <i className="bi bi-building"></i>
                </div>
                <p className="h1">400</p>
                <p>
                  Entreprises analysées depuis <br></br>le 1er mars 2022
                </p>
              </div>
            </Col>
            <Col>
              <div className="box  text-center">
                <div className="icon h2">
                  <i className="bi bi-arrow-left-right"></i>
                </div>
                <p className="text-center">
                  <span className="h1">84 435</span>
                </p>
                <p className="text-center">
                  Requêtes reçues par l’API depuis <br />
                  le 1er janvier 2022
                </p>
              </div>
            </Col>
            <Col>
              <div className="box  text-center">
                <p className="h2 text-center">
                  <i className="bi bi-server"></i>
                </p>
                <p className="text-center">
                  <span className="h1">15 642</span>
                </p>
                <p className="text-center">
                  Données publiées dans <br></br>la base de données ouverte
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="text-center">
        <Container>
          <h3>Services disponibles via l'API</h3>
          <Row>
            <Col>
              <Image src="/illustrations/recherche-siren.svg" />
              <h4>Recherche unitaire par unité légale</h4>
              <p>
                Le service d’interrogation unitaire permet à partir du numéro de
                siren d'obtenir l'empreinte sociétale de l'unité légale.
              </p>
            </Col>
            <Col>
              <Image src="/illustrations/donnees-par-defaut.svg" />
              <h4> Données par défaut</h4>
              <p>
                Retourne les valeurs par défaut proposées à partir de la zone
                économique et l'activité principale , et pour
                l'agrégat souhaité.
              </p>
            </Col>
            <Col>
              <Image src="illustrations/default-data.png" />
              <h4>Séries de données</h4>
              <p>
                Les séries de données correspondent aux données statistiques
                macroéconomiques mises à disposition par La Société Nouvelle.
       
              </p>
            </Col>
          </Row>
          <div className="text-center mt-3">
            <Button
              variant="secondary"
              href="https://docs.lasocietenouvelle.org/public-api"
              target="_blank"
            >
              Consulter la Documentation
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
};

export default API;

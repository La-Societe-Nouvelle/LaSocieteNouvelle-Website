import React from "react";
import { Col, Container, Image, Row, Button } from "react-bootstrap";
import PageHeader from "../components/PageHeader";

const API = () => {
  return (
    <>
      <PageHeader title={"API La Société Nouvelle"} path={"api-lsn"} />
      <section className="pb-0">
        <Container>
          <Row>
            <Col>
              <h3>Accéder aux empreintes sociétales des entreprises</h3>
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
              <Button
                className="me-3"
                href="https://api.lasocietenouvelle.org/"
                target="_blank"
              >
                Lien vers l'API
              </Button>
              <Button variant="secondary" href="/portail" target="_blank">
                Portail des données
              </Button>
            </Col>
            <Col>
              <Image fluid src="/images/api.png" alt="Illustration API" />
            </Col>
          </Row>
        </Container>
      </section>
      <section className="bg-light">
        <Container>
          <Row className=" justify-content-between">
            <Col>
              <p className="h1 text-center">
                <i className="bi bi-building"></i>
              </p>
              <p className="text-center">
                <span className="h1">100</span>
              </p>
              <p className="text-center">
                Entreprises analysées depuis le 1er mars 2022
              </p>
            </Col>
            <Col>
              <p className="h1 text-center">
                <i className="bi bi-arrow-left-right"></i>
              </p>
              <p className="text-center">
                <span className="h1">35 534</span>
              </p>
              <p className="text-center">
              Requêtes reçues* par l’API depuis le 1er janvier 2022
              </p>
            </Col>
            <Col>
              <p className="h1 text-center">
              <i className="bi bi-server"></i>
              </p>
              <p className="text-center">
                <span className="h1">7 931</span> 
              </p>
              <p className="text-center">Données publiées</p>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="text-center">
        <Container>
          <h3>Services disponibles via l'API</h3>
          <Row>
            <Col>
              <Image src="images/api-siren.png" />
              <h4>Recherche unitaire par unité légale</h4>
              <p>
                Le service d’interrogation unitaire permet à partir du numéro de
                siren d'obtenir l'empreinte sociétale de l'unité légale.
              </p>
            </Col>
            <Col>
              <Image src="images/default-data.png" />
              <h4> Données par défaut</h4>
              <p>
                Retourne les valeurs par défaut proposées à partir de la zone
                économique (area) et l'activité principale (activity), et pour
                l'agrégat souhaité (flow).
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

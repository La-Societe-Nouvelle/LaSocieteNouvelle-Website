import React from "react";
import { Col, Container, Image, Row, Button } from "react-bootstrap";
import PageHeader from "../components/PageHeader";

const API = () => {
  return (
    <>
      <PageHeader title={"API La Société Nouvelle"} path={"api-lsn"} />
      <section>
        <Container>
          <Row>
            <Col>
              <h3>
                Accéder aux empreintes sociétales des entreprises
              </h3>
              <p>
                L'API La Société Nouvelle est une API (Application Programming Interface) 
                publique permettant l'accès aux empreintes sociétales des unités légales françaises 
                enregistrées au sein du répertoire SIRENE et aux données macroéconomiques produites par La Société Nouvelle.
              </p>
              <p>
              Elle permet d’intégrer les données publiées
               des entreprises au sein des outils comptables (pour assurer une traçabilité le long des chaines de valeur) 
               et facilite leur exploitation.
              </p>
  
            </Col>
            <Col>
              <Image
                fluid
                src="/images/api.png"
                alt="Illustration API"
              />
            </Col>
          </Row>
        </Container>
      </section>
      <section className="text-center">
        <Container>
          <h3>Services</h3>
          <Row>

            <Col>
              <div className="box shadow-sm">
              
                <Image src="images/api-siren.png" />
                <p>Recherche unitaire par unité légale</p>
              </div>
            </Col>
            <Col>
              <div className="box shadow-sm">
              <Image src="images/default-data.png" />

                <p> Données par défaut</p>
              </div>
            </Col>
          </Row>
          <div className="text-center mt-3">
            <Button
              variant="secondary"
              href="https://docs.lasocietenouvelle.org/public-api"
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

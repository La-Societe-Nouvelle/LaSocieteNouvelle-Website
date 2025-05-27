import React from "react";
import { Badge, Button, Col, Container, Image, Row, Stack } from "react-bootstrap";
import PageHeader from "../components/PageHeader";

const Page = () => {
  return (
    <>
      <PageHeader
        title="Nos services"
        path={""}
        hasBreadcrumb={false}
      />
      <section>
        <Container>
          <Row className="justify-content-around ">
            <Col lg={4} className="d-flex align-self-stretch position-relative">
              <div className="text-center border border-2 p-4 d-flex flex-column justify-content-between bg-white">
                <span className="badge rounded-1" style={{backgroundColor: "#202B3D", position: "absolute", top: "2%", left: "5%"}}>
                  Entreprise
                </span>
                <h2 className="section-titles mt-4 mb-5">
                  Empreinte Sociétale
                </h2>
                <p>
                  <b>Nous vous accompagnons dans la mesure de l'empreinte sociétale de votre entreprise.</b>
                </p>
                <div className="flex-grow-1 mb-3 text-start">
                  <p>
                    Nous produisons les 12 indicateurs du panel, et nous vous présentons
                    les résultats obtenus et nos recommandations.
                  </p>
                  <p>
                    <i className="bi bi-check me-1"/>Identification des données à collecter<br />
                    <i className="bi bi-check me-1"/>Production des indicateurs<br />
                    <i className="bi bi-check me-1"/>Présentation des résultats obtenus<br />
                    <i className="bi bi-check me-1"/>Recommandations<br />
                    <i>Si volontaire</i><br />
                    <i className="bi bi-check me-1"/>Publication de l'Empreinte Sociétale<br />
                  </p>
                </div>
                <p>
                  <b>Tarif : 500 €</b> (hors période fiscale)
                </p>
                <Button
                  variant="outline"
                  title="Contact"
                  className="mx-2 rounded-0"
                  href="/contact"
                >
                  Nous contacter
                </Button>
              </div>
            </Col>
            <Col lg={4} className="d-flex align-self-stretch">
              <div className="text-center border border-2 p-4 d-flex flex-column justify-content-between bg-white position-relative">
                <span className="badge rounded-1" style={{backgroundColor: "#F65656", position: "absolute", top: "2%", left: "5%"}}>
                  Syndicat professionnel
                </span>
                <h2 className="section-titles mt-4 mb-5">
                  Etude sectorielle
                </h2>
                <p>
                  <b>Nous mobilisons notre expertise statistique pour analyser votre branche d'activité.</b>
                </p>
                <div className="flex-grow-1 mb-3 text-start">
                  <p>
                    Nous analysons l'empreinte d'une activité économique sur une dimension sociale ou environnementale.
                  </p>
                  <p>
                    <i className="bi bi-check me-1"/>Modélisation désagrégée du secteur d'activité<br/>
                    <i className="bi bi-check me-1"/>Analyse des déterminants de l'empreinte<br/>
                    <i className="bi bi-check me-1"/>Empreinte historique de l'activité<br/>
                    <i className="bi bi-check me-1"/>Anticipation des évolutions (scénario tendanciel)<br/>
                    <i className="bi bi-check me-1"/>Objectif sectoriel à horizon 2030<br/>
                    <i className="bi bi-check me-1"/>Identification des enjeux et recommandations<br/>
                  </p>
                </div>
                <p>
                  <b>Tarif : 5 000 - 20 000 €</b>
                </p>
                <Button
                  variant="outline"
                  title="Contact"
                  className="mx-2 rounded-0"
                  href="/contact"
                >
                  Nous contacter
                </Button>
              </div>
            </Col>
            <Col lg={4} className="d-flex align-self-stretch">
              <div className="text-center border border-2 p-4 d-flex flex-column justify-content-between bg-white position-relative">
                <span className="badge rounded-1" style={{backgroundColor: "#36C575", position: "absolute", top: "2%", left: "5%"}}>
                  Collectivités territoriales
                </span>
                <h2 className="section-titles mt-4 mb-5">
                  Empreinte territoriale
                </h2>
                <p>
                  <b>Nous construisons un suivi des impacts sociaux et environnementaux sur votre territoire.</b>
                </p>
                <div className="flex-grow-1 mb-3 text-start">
                  <p>
                    Nous construisons un tableau de bord des impacts à l'échelle de votre commune, de votre département 
                    ou de votre région.
                  </p>
                  <p>
                    <i className="bi bi-check me-1"/>Empreinte du tissu économique<br/>
                    <i className="bi bi-check me-1"/>Emissions territoriales de GES<br/>
                    <i className="bi bi-check me-1"/>Anticipation des évolutions (scénario tendanciel)<br/>
                    <i className="bi bi-check me-1"/>Recommandations<br/>
                  </p>
                </div>
                <p>
                  <b>Tarif : 10 000 - 40 000 €</b>
                </p>
                <Button
                  variant="outline"
                  title="Contact"
                  className="mx-2 rounded-0"
                  href="/contact"
                >
                  Nous contacter
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section>
        <Container>
          <h2 className="section-titles mb-5">
            Un projet autour de la donnée extra-financière ?
          </h2>
          <p>
            Vous travaillez sur un projet en lien avec la donnée extra-financière (solution, etc.), et vous souhaitez
            faire appel à notre expertise ou à nos données ? N'hésitez pas à prendre contact avec nous, hors demande 
            spécifique, nos ressources sont libres d'utilisation.
          </p>
        </Container>
      </section>
    </>
  );
};

export default Page;
import React from "react";
import { Button, Col, Container, Image, Row } from "react-bootstrap";
import PageHeader from "../components/PageHeader";

const Missions = () => {
  return (
    <>
      <PageHeader title={"Nos missions"} path={"nos-missions"} />
      <section>
        <Container>
          <Row>
            <Col>
              <h3>
                Mesurer l'empreinte sociétale des entreprises
              </h3>
              <p>
                Notre mission est de fournir, de <b>manière ouverte</b>, les
                informations nécessaires pour connaître et mesurer <b>l'empreinte
                de la production des entreprises</b> sur des enjeux majeurs de
                développement durable.
              </p>
              <p>
              Elle s'inscrit dans la volonté de faire évoluer le modèle de
              gestion des entreprises en intégrant aux éléments comptables une
              information sur leurs externalités <b>sociales et environnementales.</b>
              </p>
                <p>
                Les documents, outils et autres éléments développés par La Société
              Nouvelle sont accessibles et utilisables librement. La base de <b>données est, et restera toujours, ouverte.
                  </b>
              
                </p>
   
            </Col>
          </Row>
  
        </Container>
      </section>
      <section className="bg-light text-center">
          <h3>Nos activités</h3>
          <Container>
          <Row>
            <Col>
              <Image src="/images/bdd.png" fluid className="my-2" />

              <h4>
                Administration d’une <br></br>base de données ouverte
              </h4>
              <p>
                Centraliser les données mesurées et publiées des entreprises
                pour permettre à tous de les exploiter librement et facilement.
              </p>
            </Col>
            <Col>
              <Image src="/images/support.png" fluid className="my-2" />

              <h4>Mise à disposition d’un outil de mesure open source</h4>
              <p>
                Développer et maintenir une application web pour que chacun
                puisse calculer les indicateurs et apprécier les résultats.
              </p>
            </Col>
            <Col>
              <Image src="/images/outils.png" fluid className="my-2" />

              <h4>
                Support et <br />
                Assistance{" "}
              </h4>
              <p>
                Accompagner les acteurs qui souhaitent porter la méthodologie
                pour faciliter son application.
              </p>
            </Col>
          </Row>
          </Container>
      </section>
        <section className="text-center">
            <Container>
            <h3>Gouvernance des indicateurs</h3>
           <p>
           Nous travaillons en continu sur les indicateurs disponibles: choix méthodologiques, données utilisées, outils supports, suivi à l'échelle macroéconomique, définition des objectifs, etc. L'ensemble des indicateurs forment l'Empreinte Sociétale de l'Entreprise. La gouvernance a vocation à être externalisée et partagée avec des organismes publics et privés.
           </p>
           <Button variant="primary">Les indicateurs</Button>  <Button variant="secondary">Documentation</Button>

            </Container>
        </section>
    </>
  );
};

export default Missions;

import { useState } from "react";
import { Button, Col, Container, Image, Row } from "react-bootstrap";
import { Helmet } from "react-helmet";

const Recrutement = () => {
  return (
    <>
      <Helmet>
        <title>La Société Nouvelle | Formations</title>

        <meta
          property="og:url"
          content="https://lasocietenouvelle.org/devenir-partenaire/expert-comptable"
        />
        <meta
          property="og:description"
          content="Devenir partenaire - Expert Comptable"
        />
      </Helmet>
      <section className="bg-light">
        <Container>
            <Row className="align-items-top">
              <Col className="text-end">
                <Image
                  src="/images/photo-team-lsn-202406.png"
                  alt="Photo de l'équipe - Juin 2024"
                  fluid
                />
              </Col>
              <Col lg={6}>
                <h2 className="h1">Rejoindre l'équipe</h2>
                <p>
                  Tu souhaites travailler sur un projet d'intérêt général au coeur de la transition 
                  écologique et sociale et des questions économiques : consulte nos offres ci-dessous !
                </p>
                <p>
                  Les principales compétences recherchées :
                </p>
                <ul>
                  <li>Information extra-financière</li>
                  <li>Statistiques macroéconomiques</li>
                  <li>Développement informatique</li>
                  <li>Comptabilité</li>
                  <li>Analyse de données</li>
                </ul>
              </Col>
            </Row>
          </Container>
      </section>
      <section>
        <Container>
          <h2 className="h1 mb-4">Offres actuelles</h2>
          <Row className="mb-3">
            <Col className="text-center d-flex align-items-stretch" lg={6}>
              <div className="border p-3 m-1 d-flex flex-column justify-content-between">
                <div>
                  <h3>Développement/Relations partenaires</h3>
                  <p>Alternance - 1 an - Septembre 2024 - Lille</p>
                </div>
                <div className="text-start flex-grow-1">
                <p>
                    Date de publication : 09/07/2024
                  </p>
                  <p><b>Mission(s)</b></p>
                  <p>
                    Ta mission sera d'informer et de mobiliser les acteurs de la comptabilité 
                    autour de cette initiative, et plus généralement de contribuer au développement 
                    des partenariats. Cela comprend :
                  </p>
                  <ul>
                    <li>
                      La rechercher et la prise de contact avec des cabinets comptables et experts 
                      comptables indépendants pour leur présenter l'approche et les ressources à leur disposition ;
                    </li>
                    <li>
                      L'accompagnement des acteurs intéressés dans la prise en main de l'outil et la 
                      compréhension de la méthodologie ;
                    </li>
                    <li>
                      L'assistance et le support auprès des utilisateurs de nos ressources ;
                    </li>
                    <li>
                      L'intervention sur le traitement et l'analyse de données extra-financières à partir de données comptables ; et,
                    </li>
                    <li>
                      La production de documents utiles (ressources documentaires, modèles, etc.) permettant de 
                      faciliter la construction et l'exécution du service de mesure ;
                    </li>
                  </ul>
                  <p>
                    Tu pourras également être amené à promouvoir et présenter la démarche auprès d'autres acteurs 
                    intéressés : entreprises, acteurs publics, organismes universitaires, etc.
                  </p>
                </div>
                <div>
                  <Button className="btn mx-2" 
                    target="_blank"
                    href="https://lasocietenouvelle.org/LaSocieteNouvelle_Offre-alternance-relation-partenaires.pdf">
                      Détails de l'offre
                  </Button>
                  <Button className="btn-outline-primary mx-2" 
                    href="mailto:contact@lasocietenouvelle.org">
                    Postuler
                  </Button>
                </div>
              </div>
            </Col>
            <Col className="text-center d-flex align-items-stretch" lg={6}>
              <div className="border p-3 m-1 d-flex flex-column justify-content-between">
                <div>
                  <h3>Communication</h3>
                  <p>Alternance - 1 an - Septembre 2024 - Lille</p>
                </div>
                <div className="text-start d-flex flex-column flex-grow-1">
                  <p>
                    Date de publication : 09/07/2024
                  </p>
                  <p><b>Mission(s)</b></p>
                  <p>
                    Ta mission sera de prendre en charge la communication externe de la structure :
                  </p>
                  <ul>
                    <li>Création de contenus (visuels, vidéos, infographies, etc.) autour du projet et des enjeux sociaux et environnementaux abordés ;</li>
                    <li>Création de support de communication et de maquettes (kit de communication pour des partenaires, interfaces de notre application web, etc.)</li>
                    <li>Administration du site web : structure, contenu et SEO</li>
                    <li>Organisation de moments d’échange / live et d’un évènement réunissant les partenaires du projet fin octobre</li>
                    <li>Gestion des réseaux sociaux et de nos canaux de diffusion</li>
                    <li>Rédaction de tribunes/communiqués de presse</li>
                  </ul>
                </div>
                <div>
                  <Button className="btn mx-2" 
                    target="_blank"
                    href="https://lasocietenouvelle.org/LaSocieteNouvelle_Offre-alternance-communication.pdf">
                      Détails de l'offre
                  </Button>
                  <Button className="btn-outline-primary mx-2" 
                    href="mailto:contact@lasocietenouvelle.org">
                    Postuler
                  </Button>
                </div>
              </div>
            </Col>
          </Row>
          <div className="mt-4">
            <i>Vous souhaitez nous soumettre une candidature spontanée : n'hésitez pas à nous contacter !</i>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Recrutement;
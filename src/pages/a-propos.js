import React from "react";
import {
  Button,
  ButtonGroup,
  Card,
  Carousel,
  Col,
  Container,
  Image,
  Row,
  Stack,
} from "react-bootstrap";
import PageHeader from "../components/PageHeader";

const About = () => {
  return (
    <>
      <section>
        <Container>
          <Row className=" align-items-center">
            <Col lg={7} className="align-items-center">
              <h2>La Société Nouvelle</h2>
              <p>
                C’est avec la volonté de contribuer à la construction d’une
                société durable que La Société Nouvelle prit son premier souffle
                : un nom choisi par l’envie de faire bouger les choses, pour
                marquer son engagement au service de cette transition.
              </p>
              <p>
                L’aventure commence en avril 2020, où Sylvain en dernière année
                à l’Ecole Centrale de Lille, initie le projet avec comme
                conviction que la transition écologique et sociale ne pourra se
                faire sans une information fiable et pertinente sur et pour les
                entreprises.
              </p>
              <p>
                En septembre 2020, nous avons rejoint l’incubateur
                Euratechnologies à Lille afin de poursuivre son développement.
                L’équipe s’est agrandie avec l’arrivée 5 nouveaux membres dans
                l’équipe depuis février 2022.
              </p>
              <p>
                Depuis, nous n’avons de cesse que d’améliorer les ressources que
                nous mettons à disposition aux entreprises et nous veillons à
                rendre tous nos travaux publics et accessibles. Nous vous
                invitons à vous engager dans la transition écologie en nous
                rejoignant dans cette aventure !
              </p>
            </Col>
            <Col>
              <Image
                src="images/equipe/notre-equipe.jpg"
                alt="Photo d'équipe"
                fluid
                rounded
              />
            </Col>
          </Row>
        </Container>
      </section>
      <section className="bg-light">
        <Container>
          <Carousel>
            <Carousel.Item>
              <Card>
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </Carousel.Item>
            <Carousel.Item>
              <Card>
                <Card.Body>
                  <Card.Title className="text-center">
                    {" "}
                    <h3 className="text-secondary">Nos valeurs</h3>
                  </Card.Title>
                  <Card.Text>
                    Maitre mot de notre état d’esprit, le sujet est
                    important,l’enthousiasme est donc de rigueur. Et sous les
                    bons conseils de Voltaire : “Rien ne se fait sans un peu
                    d’enthousiasme”.
                  </Card.Text>
                  <Card.Text>
                    Nous souhaitons mettre en oeuvre des solutions
                    opérationnelles, avec le souci de l’efficacité. Nos travaux
                    sont rendus publics : les ressources, données et
                    méthodologies sont ainsi librement acessibles, vérifiables
                    et réutilisables par tous. Nous nous efforçons de fournir la
                    meilleure qualité de service pour proposer une méthode
                    crédible et rigoureuse et ambitionner sa large diffusion.
                  </Card.Text>
                  <Card.Text>
                    Nous nous efforçons de fournir la meilleure qualité de
                    service pour proposer une méthode crédible et rigoureuse et
                    ambitionner sa large diffusion.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Carousel.Item>
            <Carousel.Item>
              <Card>
                <Card.Body>
                  <Card.Title className="text-center">
                    {" "}
                    <h3 className="text-secondary">Nos valeurs</h3>
                  </Card.Title>
                  <Card.Text>
                    Maitre mot de notre état d’esprit, le sujet est
                    important,l’enthousiasme est donc de rigueur. Et sous les
                    bons conseils de Voltaire : “Rien ne se fait sans un peu
                    d’enthousiasme”.
                  </Card.Text>
                  <Card.Text>
                    Nous souhaitons mettre en oeuvre des solutions
                    opérationnelles, avec le souci de l’efficacité. Nos travaux
                    sont rendus publics : les ressources, données et
                    méthodologies sont ainsi librement acessibles, vérifiables
                    et réutilisables par tous. Nous nous efforçons de fournir la
                    meilleure qualité de service pour proposer une méthode
                    crédible et rigoureuse et ambitionner sa large diffusion.
                  </Card.Text>
                  <Card.Text>
                    Nous nous efforçons de fournir la meilleure qualité de
                    service pour proposer une méthode crédible et rigoureuse et
                    ambitionner sa large diffusion.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Carousel.Item>{" "}
            <Carousel.Item>
              <Card>
                <Card.Body>
                  <Card.Title className="text-center">
                    <h3 className="text-secondary">Nos valeurs</h3>
                  </Card.Title>
                  <Card.Text>
                    Maitre mot de notre état d’esprit, le sujet est
                    important,l’enthousiasme est donc de rigueur. Et sous les
                    bons conseils de Voltaire : “Rien ne se fait sans un peu
                    d’enthousiasme”.
                  </Card.Text>
                  <Card.Text>
                    Nous souhaitons mettre en oeuvre des solutions
                    opérationnelles, avec le souci de l’efficacité. Nos travaux
                    sont rendus publics : les ressources, données et
                    méthodologies sont ainsi librement acessibles, vérifiables
                    et réutilisables par tous. Nous nous efforçons de fournir la
                    meilleure qualité de service pour proposer une méthode
                    crédible et rigoureuse et ambitionner sa large diffusion.
                  </Card.Text>
                  <Card.Text>
                    Nous nous efforçons de fournir la meilleure qualité de
                    service pour proposer une méthode crédible et rigoureuse et
                    ambitionner sa large diffusion.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Carousel.Item>
          </Carousel>
        </Container>
      </section>

      <section>
        <Container>
          <Row>
            <Col>
              <h3>Nos missions</h3>
              <p>
                Notre mission est de fournir, de manière ouverte, les
                informations nécessaires pour connaître et mesurer l’empreinte
                de la production des entreprises sur des enjeux majeurs de
                développement durable. Elle s’inscrit dans la volonté de faire
                évoluer le modèle de gestion des entreprises en intégrant aux
                éléments comptables une information sur leurs externalités
                sociales et environnementales.
              </p>
              <p>
                Les documents, outils et autres éléments développés par La
                Société Nouvelle sont accessibles et utilisables librement. La
                base de données est, et restera toujours, ouverte.
              </p>
            </Col>
            <Col>
              <h3>Nos activités</h3>
              <h4 className="h5 text-secondary">
                Administration d’une base de données ouverte
              </h4>
              <p>
                Centraliser les données mesurées et publiées des entreprises
                pour permettre à tous de les exploiter librement et facilement.
              </p>
              <h4 className="h5 text-secondary">
                Mise à disposition d’un outil de mesure open source
              </h4>
              <p>
                Développer et maintenir une application web pour que chacun
                puisse calculer les indicateurs et apprécier les résultats.
              </p>
              <h4 className="h5 text-secondary">
                Un support et une assistance aux différents acteurs
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
          <h3> Notre équipe</h3>
          <Row>
            <Col>
              <Card className="px-5">
                <Card.Img
                  variant="top"
                  src="images/equipe/Sylvain.jpg"
                  className="rounded"
                />
                <Card.Body>
                  <Card.Title className="text-center">
                    Sylvain Humilière
                  </Card.Title>
                  <Card.Text>Président - Fondateur</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className="px-5">
                <Card.Img
                  variant="top"
                  src="images/equipe/Laura.jpg"
                  className="rounded"
                />
                <Card.Body>
                  <Card.Title className="text-center">Laura Roost</Card.Title>
                  <Card.Text>Dévelopeur informatique</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className="px-5">
                <Card.Img
                  variant="top"
                  src="images/equipe/Joris.jpg"
                  className="rounded"
                />
                <Card.Body>
                  <Card.Title className="text-center">Joris Blain</Card.Title>
                  <Card.Text>Economètre</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <Row className="mt-5">
            <Col>
              <Card className="px-5">
                <Card.Img
                  variant="top"
                  src="images/equipe/Maelysse.jpg"
                  className="rounded"
                />
                <Card.Body>
                  <Card.Title className="text-center">
                    Maëlysse Lemaire
                  </Card.Title>
                  <Card.Text>Chargée de communication</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className="px-5">
                <Card.Img
                  variant="top"
                  src="images/equipe/Manal.jpg"
                  className="rounded"
                />
                <Card.Body>
                  <Card.Title className="text-center">Manal </Card.Title>
                  <Card.Text>Chargée de relations partenaires</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className="px-5">
                <Card.Img
                  variant="top"
                  src="images/equipe/Guillaume.jpg"
                  className="rounded"
                />
                <Card.Body>
                  <Card.Title className="text-center">Guillaume </Card.Title>
                  <Card.Text>Chargé de relations partenaires</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="text-center">
        <Container>
          <h4 className="h2">Gourvernance des indicateurs</h4>
          <p>
            Nous travaillons en continu sur les indicateurs disponibles: choix
            méthodologiques, données utilisées, outils supports, suivi à
            l’échelle macroéconomique, définition des objectifs, etc. L’ensemble
            des indicateurs forment l’Empreinte Sociétale de l’Entreprise. La
            gouvernance a vocation à être externalisée et partagée avec des
            organismes publics et privés.
          </p>
          <ButtonGroup>
          <Button>
            Les indicateurs
          </Button>
          <Button variant="info">
            La Documentation
          </Button>
          </ButtonGroup>
     
        </Container>
      </section>
    </>
  );
};

export default About;

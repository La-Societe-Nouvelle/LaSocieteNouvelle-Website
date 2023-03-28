import React from "react";
import {
  Button,
  ButtonGroup,
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
                C'est avec la volonté de contribuer à la construction d'une
                société durable que La Société Nouvelle prit son premier souffle
                : un nom choisi par l'envie de faire bouger les choses, pour
                marquer son engagement au service de cette transition.
              </p>
              <p>
                L'aventure commence en avril 2020, où Sylvain en dernière année
                à l'Ecole Centrale de Lille, initie le projet avec comme
                conviction que la transition écologique et sociale ne pourra se
                faire sans une information fiable et pertinente sur et pour les
                entreprises.
              </p>
              <p>
                En septembre 2020, nous avons rejoint l'incubateur
                Euratechnologies à Lille afin de poursuivre son développement.
                L'équipe s'est agrandie avec l'arrivée 5 nouveaux membres dans
                l'équipe depuis février 2022.
              </p>
              <p>
                Depuis, nous n'avons de cesse que d'améliorer les ressources que
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
          <Row>
            <Col>
              <div className="bg-white p-5 border rounded">
                <h3>Nos missions</h3>
                <p>
                  Notre mission est de fournir, de manière ouverte, les
                  informations nécessaires pour connaître et mesurer l'empreinte
                  de la production des entreprises sur des enjeux majeurs de
                  développement durable.
                </p>
                <p>
                Elle s'inscrit dans la volonté de faire
                  évoluer le modèle de gestion des entreprises en intégrant aux
                  éléments comptables une information sur leurs externalités
                  sociales et environnementales.
                </p>
                <p>
                  Les documents, outils et autres éléments développés par La
                  Société Nouvelle sont accessibles et utilisables librement. La
                  base de données est, et restera toujours, ouverte.
                </p>
              </div>
            </Col>
            <Col>
              <div className="bg-white p-5 border rounded">
                <h3>Nos activités</h3>
                <h4 className="h5 text-secondary">
                  Administration d'une base de données ouverte
                </h4>
                <p>
                  Centraliser les données mesurées et publiées des entreprises
                  pour permettre à tous de les exploiter librement et
                  facilement.
                </p>
                <h4 className="h5 text-secondary">
                  Mise à disposition d'un outil de mesure open source
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
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <Row>
            <h3 className="text-secondary">Notre Vision</h3>

            <p>
              Dans le contexte social et écologique actuel, il est
              incontournable pour une entreprise de connaître, a minima sur les
              enjeux clefs, ses impacts. Au-delà de sa pérennité, il s'agit d'un
              maillon essentiel pour identifier les entreprises les plus
              performantes sur les dimensions sociales et environnementales
              concernées.
            </p>

            <p>
              Plus globalement, il s'agit de repenser la valeur économique, en
              associant à sa dimension quantitative (volume monétaire), une
              approche qualitative et d'apprécier de manière plus juste et plus
              complète la valeur créée et produite d'une entreprise. Les enjeux
              sont conséquents et nous devons construire dès à présent un monde
              économique ayant à coeur de mesurer ses impacts de production,
              pour les générations futures.
            </p>

            <h3 className="text-secondary">Nos valeurs</h3>
            <p>
              Maitre mot de notre état d'esprit, le sujet est
              important,l'enthousiasme est donc de rigueur. Et sous les bons
              conseils de Voltaire : “Rien ne se fait sans un peu
              d'enthousiasme”.
            </p>

            <p>
              Nous souhaitons mettre en oeuvre des solutions opérationnelles,
              avec le souci de l'efficacité. Nos travaux sont rendus publics :
              les ressources, données et méthodologies sont ainsi librement
              acessibles, vérifiables et réutilisables par tous. Nous nous
              efforçons de fournir la meilleure qualité de service pour proposer
              une méthode crédible et rigoureuse et ambitionner sa large
              diffusion.
            </p>
            <p>
              Nous nous efforçons de fournir la meilleure qualité de service
              pour proposer une méthode crédible et rigoureuse et ambitionner sa
              large diffusion.
            </p>
            <h3 className="text-secondary">Notre positionnement</h3>
            <p>
              La Société Nouvelle oeuvre à la mise en place d'un service
              d'intérêt général. Nous avons à cœur de pousser le plus
              d'organisations possible à prendre conscience de leurs impacts à
              l'échelle de leurs activités. Dans cette optique, notre ambition
              est de compléter les pratiques comptables pour insérer
              l'information extra-financière au coeur des tableaux de gestion et
              informer entreprises et particuliers des impacts de leurs
              consommations.
            </p>
          </Row>
          <hr></hr>
        </Container>
      </section>
      <section className="text-center">
        <Container>
          <h3> Notre équipe</h3>
          <Row>
            <Col>
              <div className="px-5">

              <Image
                src="images/equipe/Sylvain.jpg"
                alt="Sylvain Humilière"
                
                
              />

            
                
                  <h4 className="text-center mt-4">
                    Sylvain Humilière
                  </h4>
                  <p>Président - Fondateur</p>
               
              </div>
            </Col>
            <Col>
              <div className="px-5">
                <Image
                 
                  src="images/equipe/Laura.jpg"
                  className="rounded"
                />
                
                  <h4 className="text-center mt-4">Laura Roost</h4>
                  <p>Dévelopeur informatique</p>
               
              </div>
            </Col>
            <Col>
              <div className="px-5">
                <Image
                 
                  src="images/equipe/Joris.jpg"
                  className="rounded"
                />
                
                  <h4 className="text-center mt-4">Joris Blain</h4>
                  <p>Economètre</p>
               
              </div>
            </Col>
          </Row>
          <Row className="mt-5">
            <Col>
              <div className="px-5">
                <Image>

                </Image>
                <Image
                 
                  src="images/equipe/Maelysse.jpg"
                  className="rounded"
                />
                
                  <h4 className="text-center mt-4">
                    Maëlysse Lemaire
                  </h4>
                  <p>Chargée de communication</p>
               
              </div>
            </Col>
            <Col>
              <div className="px-5">
                <Image
                 
                  src="images/equipe/Manal.jpg"
                  className="rounded"
                />
                
                  <h4 className="text-center mt-4">Manal </h4>
                  <p>Chargée de relations partenaires</p>
               
              </div>
            </Col>
            <Col>
              <div className="px-5">
                <Image
                 
                  src="images/equipe/Guillaume.jpg"
                  className="rounded"
                />
                
                  <h4 className="text-center mt-4">Guillaume </h4>
                  <p>Chargé de relations partenaires</p>
               
              </div>
            </Col>
          </Row>
        </Container>
      </section>
     
    </>
  );
};

export default About;

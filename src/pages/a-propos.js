import React from "react";
import { Button, Col, Container, Image, Row } from "react-bootstrap";
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
                src="images/notre-equipe.jpg"
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
          <h3>Aujourd’hui, qu’est-ce que La Société Nouvelle ?</h3>
          <p>
            C’est une initiative open data et open source dont la mission est de
            déployer un système d'information et de comptabilité et ainsi
            permettre aux entreprises de mesurer, sur des dimensions sociales et
            environnementales clefs, les impacts de la valeur qu’elles
            produisent.
          </p>
          <Button variant="secondary" href="/nos-missions">
            Nos missions
          </Button>
        </Container>
      </section>
      <section>
        <Container>
          <h3> Notre vision</h3>
          <h4> Pourquoi mesurer ce panel d'indicateurs ? </h4>
          <p>
            Dans le contexte social et écologique actuel, il est incontournable
            pour une entreprise de connaître, a minima sur les enjeux clefs, ses
            impacts. Au-delà de sa pérennité, il s’agit d’un maillon essentiel
            pour identifier les entreprises les plus performantes sur les
            dimensions sociales et environnementales concernées.
          </p>
          <p>
            Plus globalement, il s’agit de repenser la valeur économique, en
            associant à sa dimension quantitative (volume monétaire), une
            approche qualitative et d’apprécier de manière plus juste et plus
            complète la valeur créée et produite d’une entreprise. Les enjeux
            sont conséquents et nous devons construire dès à présent un monde
            économique ayant à coeur de mesurer ses impacts de production, pour
            les générations futures.
          </p>
          <Button variant="secondary" href="notre-approche">
            Notre méthodologie
          </Button>
        </Container>
      </section>
      <section className="bg-light">
        <Container>
          <div>
            <h3 className="subtitle">Notre positionnement</h3>
            <p>
              La Société Nouvelle oeuvre à la mise en place d’un service
              d’intérêt général. Nous avons à cœur de pousser le plus
              d’organisations possible à prendre conscience de leurs impacts à
              l’échelle de leurs activités. Dans cette optique, notre ambition
              est de compléter les pratiques comptables pour insérer
              l’information extra-financière au coeur des tableaux de gestion et
              informer entreprises et particuliers des impacts de leurs
              consommations.
            </p>
          </div>
        </Container>
      </section>
      <section className="pb-0">
        <Container>
          <div className="nos-valeurs">
            <h3 className="subtitle">Nos valeurs</h3>
            <Row>
              <Col lg={6}>
                <Image
                  src="/images/nos-valeurs.png"
                  alt="Euratechnologies"
                  className="img-fluid w-100"
                />
              </Col>
              <Col lg={6}>
                <p>
                  Maitre mot de notre état d’esprit, le sujet est important,
                  <b>l’enthousiasme </b> est donc de rigueur. Et sous les bons
                  conseils de Voltaire : “Rien ne se fait sans un peu
                  d’enthousiasme”.
                </p>
                <p>
                  Nous souhaitons mettre en oeuvre des solutions
                  opérationnelles, avec le souci de l’<b>efficacité</b>.
                </p>

                <p>
                  Nos travaux sont rendus <b>publics </b> : les ressources,
                  données et méthodologies sont ainsi librement acessibles,
                  vérifiables et réutilisables par tous.
                </p>
                <p>
                  Nous nous efforçons de fournir la{" "}
                  <b>meilleure qualité de service</b> pour proposer une méthode
                  crédible et rigoureuse et ambitionner sa large diffusion.
                </p>
              </Col>
            </Row>
          </div>
        </Container>
      </section>
      <section>
        <Container>
          <h2 className="text-center mb-5">Notre Equipe</h2>
          <Row className="text-center">
            <Col>
              <Image id="img-joris" src="/images/joris.jpg" alt="img-joris" />
              <p className="prenom">
                <b>Joris</b>
              </p>
              <p className="poste">Statistiques publiques</p>
            </Col>
            <Col>
              <Image id="img-laura" src="/images/laura.jpg" alt="img-laura" />
              <p className="prenom">
                <b>Laura</b>
              </p>
              <p className="poste">Développement Web</p>
            </Col>
            <Col>
              <Image id="img-maeva" src="/images/maeva.jpg" alt="img-maeva" />
              <p className="prenom">
                <b>Maëva</b>
              </p>
              <p className="poste">Communication</p>
            </Col>
            <Col>
              <Image
                id="img-sylvain"
                src="/images/sylvain.jpg"
                alt="img-sylvain"
              />
              <p className="prenom">
                <b>Sylvain</b>
              </p>
              <p className="poste">Relation partenaires</p>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default About;

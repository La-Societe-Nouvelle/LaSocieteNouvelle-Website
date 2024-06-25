import React from "react";
import { Col, Container, Image, Row, Stack } from "react-bootstrap";

const About = () => {
  return (
    <>
      <section>
        <Container>
          <Row className=" align-items-center">
            <Col lg={7} className="align-items-center">
              <h2>La Société Nouvelle</h2>
              <p>
                La Société Nouvelle se définit comme une société commerciale à
                but non lucratif.
              </p>
              <p>
                Notre mission est de mettre en oeuvre un {" "}
                <strong>
                  système d'information sur les impacts de la production des
                  entreprises françaises
                </strong>
                . L'enjeu est de pouvoir identifier les entreprises les plus
                performantes sur des dimensions <strong>sociales</strong> et{" "}
                <strong>environnementales</strong> clefs pour un développement
                soutenable, celles qui portent la transition et assument leur
                responsabilité sociétale.
              </p>
              <p>
                La structure juridique a été créée en août 2020 à Lille. Elle a
                pour bénéficiaire effectif Sylvain HUMILIERE.
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
                <h3>Notre mission</h3>
                <p>
                  Notre mission est de fournir, de manière ouverte, les
                  informations nécessaires pour que chaque entreprise puisse
                  mesurer et rendre compte de l'empreinte sociétale de sa
                  production.
                </p>
                <p>
                  Elle s'inscrit dans la volonté de faire évoluer le modèle de
                  gestion des entreprises en intégrant aux éléments comptables
                  une information sur leurs externalités sociales et
                  environnementales ; et sur un besoin de transparence pour
                  l'ensemble des agents économiques sur les impacts de leurs
                  consommations.
                </p>
                <p>
                  Les documents, outils et autres éléments développés par La
                  Société Nouvelle sont accessibles et utilisables librement, y
                  compris à des fins commerciales.
                </p>
                <p>La base de données est, et restera toujours, ouverte.</p>
              </div>
            </Col>
            <Col>
              <div className="bg-white p-5 border rounded">
                <h3>Nos activités</h3>
                <h4 className="h5 ">
                  Administration d'une base de données ouverte
                </h4>
                <p>
                  Nous centralisons les données mesurées et publiées des
                  entreprises pour permettre à tous de les exploiter librement
                  et facilement. Nous mettons également à disposition des jeux
                  de données statistiques macroéconomiques.
                </p>
                <h4 className="h5">
                  Développement et distribution d'un outil de mesure open source
                </h4>
                <p>
                  Nous développons et maintenons une application web pour que
                  chacun puisse calculer les indicateurs et apprécier les
                  résultats. Nous proposons des contrats de support et
                  d'assistance technique aux acteurs qui le souhaitent.
                </p>
                <h4 className="h5">Travaux statistiques</h4>
                <p>
                  Nous menons des travaux statistiques pour estimer l'empreinte
                  sociétale de la production des branches et divisions
                  économiques françaises, anticiper leurs évolutions et formuler
                  des trajectoires cibles compatibles avec les objectifs
                  nationaux fixés.
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
              L’économie actuelle présente l’extrême nécessité de se transformer
              : dérèglement climatique, inégalités sociales, destruction de la
              biodiversité… Nous devons assumer nos responsabilités vis-à-vis
              des impacts que nous générons ; et certains par l’ignorance dont
              ils ont été sujets, doivent faire l’objet de réponses immédiates.
            </p>
            <p>
              Notre conviction est que chaque entreprise se doit de s’assurer
              que la valeur qu’elle produit est compatible avec une économie
              durable ou s’inscrit dans une trajectoire visant à l’atteindre ;
              et que chaque entreprise se doit de faire preuve de transparence
              sur l’empreinte qu’elle laisse vis-à-vis de la société et de
              l’environnement.
            </p>
            <p>
              La transition vers une économie soutenable ne pourra se faire
              efficacement et de manière juste que si les impacts des
              entreprises sont liés à la valeur économique qu’elles créent, et
              si leur performance ainsi mesurée est rendue publique.
            </p>
            <p>
              Nous entreprenons donc la construction d’une base de données
              ouverte centralisant les impacts de la valeur produite des
              entreprises sur des enjeux sociaux et environnementaux clefs et la
              mise en œuvre des ressources nécessaires à leur mesure. Notre
              enjeu n'est pas de développer une activité commerciale mais de
              faire évoluer les normes comptables pour enfin s’outiller pour la
              transition écologique et sociale et ainsi se donner les moyens
              d’agir.
            </p>
            <p>
              La Société Nouvelle n’est que la structure porteuse de cette
              initiative : l’ensemble de nos travaux sont à l’entière
              disposition des acteurs économiques, et notre volonté est de
              transférer nos activités aux pouvoirs publics.
            </p>

            {/* <h3 className="text-secondary">Nos valeurs</h3>
            <p>
              Notre projet se construit autour des valeurs de transparence et d'engagement.
            </p>
            <p>
              Nous souhaitons mettre en oeuvre des solutions opérationnelles. 
              Nos travaux sont rendus publics :
              les ressources, données et méthodologies sont ainsi librement
              acessibles et réutilisables par tous.
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
            </p> */}
          </Row>
          <hr></hr>
        </Container>
      </section>
      <section className="text-center">
        <Container>
          <h3> L'équipe</h3>
          <Row>
            <Col>
              <div className="px-5">
                <Image
                  src="images/equipe/Sylvain.jpg"
                  alt="Sylvain Humilière"
                />

                <h4 className="text-center mt-4">Sylvain Humilière</h4>
                <p>Président - Fondateur</p>
              </div>
            </Col>
            <Col>
              <div className="px-5">
                <Image src="images/equipe/Laura.jpg" className="rounded" />

                <h4 className="text-center mt-4">Laura Roost</h4>
                <p>Développeur informatique</p>
              </div>
            </Col>
            <Col>
              <div className="px-5">
                <Image src="images/equipe/Joris.jpg" className="rounded" />

                <h4 className="text-center mt-4">Joris Blain</h4>
                <p>Economètre</p>
              </div>
            </Col>
          </Row>

        </Container>
      </section>
    </>
  );
};

export default About;

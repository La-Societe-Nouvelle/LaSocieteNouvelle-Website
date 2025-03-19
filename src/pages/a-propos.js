import React from "react";
import { Badge, Col, Container, Image, Row, Stack } from "react-bootstrap";
import PageHeader from "../components/PageHeader";

const About = () => {
  return (
    <>
      <PageHeader
        title="A-Propos"
        path={""}
        hasBreadcrumb={false}
      />
      <section>
        <Container>
          <h1 className="h1 main-titles mb-5">
            Notre mission
          </h1>
          <Row className=" align-items-start">
            <Col lg={7} className="align-items-start">
              <p>
                Notre mission est de <b>fournir, de manière ouverte, les informations nécessaires 
                pour que chaque entreprise puisse mesurer et rendre compte de l'empreinte sociétale 
                de sa production</b>.
              </p>
              <p>
                Elle s'inscrit dans la volonté de faire évoluer le modèle de gestion des entreprises 
                en intégrant aux éléments comptables une information sur leurs externalités sociales 
                et environnementales ; et sur un besoin de transparence pour l'ensemble des agents 
                économiques sur les impacts de leurs consommations.
              </p>
              <p>
                Les documents, outils et autres éléments développés par La Société Nouvelle sont accessibles 
                et utilisables librement, y compris à des fins commerciales.
              </p>
              <p>
                La base de données est, et restera toujours, ouverte.
              </p>
            </Col>
            <Col>
              <Image
                src="images/equipe/photo-equipe.png"
                alt="Photo d'équipe"
                fluid
                rounded
              />
            </Col>
          </Row>
        </Container>
      </section>
      <section>
        <Container>
          <h2 className="main-titles">Quelques chiffres clés</h2>
          <Row className="mb-4">
            <Col lg={4} className="text-center d-flex flex-column align-items-stretch">
              <div className="flex-grow-1 d-flex flex-column">
                <Image
                  src="/icons/icone-entreprises.png"
                  alt="Icone Entreprises"
                  className=""
                  style={{ height: "auto", width: "100px", margin: "auto" }}
                />
              </div>
              <div className="mb-2">
                <span className="h1">
                  <data value="v1">+ 5 millions</data>
                </span>
              </div>
              <p>d'entreprises référencées et modélisées</p>
            </Col>
            <Col lg={4} className="text-center d-flex flex-column align-items-stretch">
              <div className="flex-grow-1 d-flex flex-column">
                <Image
                  src="/icons/icone-db.png"
                  alt="Icone Database"
                  className=""
                  style={{ height: "auto", width: "100px", margin: "auto" }}
                />
              </div>
              <div className="mb-2">
                <span className="h1">
                  <data value="v1">84 150</data>
                </span>
              </div>
              <p>données extra-financières déjà disponibles</p>             
            </Col>
            <Col lg={4} className="text-center d-flex flex-column align-items-stretch">
              <div className="flex-grow-1 d-flex flex-column">
                <Image
                  src="/icons/icone-loading.png"
                  alt="Icone Chargement"
                  className=""
                  style={{ height: "auto", width: "100px", margin: "auto" }}
                />
              </div>
              <div className="mb-2">
                <span className="h1">
                  <data value="v1">+ 500 000</data>
                </span>
              </div>
              <p>requêtes reçues en 2024 via notre API Publique</p>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="bg-light">
        <Container>
          <h2>Nos principales activités</h2>
          <Row>
            <Col lg={4} className="d-flex align-self-stretch">
              <div className="bg-white p-5 border rounded">
                <h3>Administration d'une base de données ouverte</h3>
                <p>
                  Nous centralisons les données mesurées et publiées des
                  entreprises pour permettre à tous de les exploiter librement
                  et facilement. Nous mettons également à disposition des jeux
                  de données statistiques macroéconomiques.
                </p>
              </div>
            </Col>
            <Col lg={4} className="d-flex align-self-stretch">
              <div className="bg-white p-5 border rounded">
                <h3>
                  Développement et distribution d'un outil de mesure open source
                </h3>
                <p>
                  Nous développons et maintenons une application web pour que
                  chacun puisse calculer les indicateurs et apprécier les
                  résultats. Nous proposons des contrats de support et
                  d'assistance technique aux acteurs qui le souhaitent.
                </p>
              </div>
            </Col>
            <Col lg={4} className="d-flex align-self-stretch">
              <div className="bg-white p-5 border rounded">
                <h3>
                  Travaux statistiques
                </h3>
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
          <h2 className="main-titles">
            Notre Vision
          </h2>
          <Row>
            <p>
              L’économie actuelle présente l’extrême nécessité de se transformer
              : dérèglement climatique, inégalités sociales, destruction de la
              biodiversité… Nous devons assumer nos responsabilités vis-à-vis
              des impacts que nous générons ; et certains par l’ignorance dont
              ils ont été sujets, doivent faire l’objet de réponses immédiates.
            </p>
            <p>
              Notre conviction est <b>que chaque entreprise se doit de s’assurer
              que la valeur qu’elle produit est compatible avec une économie
              durable</b> ou s’inscrit dans une trajectoire visant à l’atteindre ;
              et que chaque entreprise se doit de faire preuve de transparence
              sur l’empreinte qu’elle laisse vis-à-vis de la société et de
              l’environnement.
            </p>
            <p>
              La transition vers une économie soutenable ne pourra se faire
              efficacement et de manière juste que si les <b>impacts des
              entreprises sont liés à la valeur économique qu’elles créent</b>, et
              si leur performance ainsi mesurée est rendue publique.
            </p>
            <p>
              <b>Nous entreprenons donc la construction d’une base de données
              ouverte centralisant les impacts de la valeur produite des
              entreprises sur des enjeux sociaux et environnementaux clefs</b> et la
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
        <Container className="mb-5">
          <h1 className="mb-5">L'équipe #engagée</h1>
          <Row>
            <Col>
              <div className="px-5">
                <Image
                  fluid
                  src="images/equipe/portrait-sylvain.png"
                  alt="Sylvain Humilière"
                  className="rounded" 
                />
                <h4 className="text-center mt-4">Sylvain Humilière</h4>
                <p>Partenariats</p>
                {/* <div>
                  <Badge className="bg-primary rounded-1 tags me-1">
                    Permanent
                  </Badge>
                </div> */}
              </div>
            </Col>
            <Col>
              <div className="px-5">
                <Image 
                  fluid
                  src="images/equipe/portrait-laura.png" 
                  alt="Laura Roost"
                  className="rounded" 
                />
                <h4 className="text-center mt-4">Laura Roost</h4>
                <p>Développement informatique</p>
                {/* <div>
                  <Badge className="bg-primary rounded-1 tags me-1">
                    Permanent
                  </Badge>
                </div> */}
              </div>
            </Col>
            <Col>
              <div className="px-5">
                <Image 
                  fluid
                  src="images/equipe/portrait-joris.png"
                  alt="Joris Blain"
                  className="rounded" 
                />
                <h4 className="text-center mt-4">Joris Blain</h4>
                <p>Econométrie</p>
                {/* <div>
                  <Badge className="bg-primary rounded-1 tags me-1">
                    Permanent
                  </Badge>
                </div> */}
              </div>
            </Col>
          </Row>
          <Row className="mt-5">
            <Col>
              <div className="px-5">
                <Image
                  fluid
                  src="images/equipe/portrait-elodie.png"
                  alt="Elodie Butez"
                  className="rounded" 
                />
                <h4 className="text-center mt-4">Elodie Butez</h4>
                <p>Econométrie</p>
              </div>
            </Col>
            <Col>
              <div className="px-5">
                <Image
                  fluid
                  src="images/equipe/portrait-lucie.png"
                  alt="Lucie Valet"
                  className="rounded" 
                />
                <h4 className="text-center mt-4">Lucie Valet</h4>
                <p>Communication</p>
              </div>
            </Col>
            <Col>
              <div className="px-5">
                <Image 
                  fluid
                  src="images/equipe/portrait-mathys.png" 
                  alt="Mathys Dezitter"
                  className="rounded" 
                />
                <h4 className="text-center mt-4">Mathys Dezitter</h4>
                <p>Développement informatique</p>
              </div>
            </Col>
          </Row>

        </Container>
      </section>
    </>
  );
};

export default About;

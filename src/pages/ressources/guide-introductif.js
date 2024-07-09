import React from "react";
import { Col, Container, Image, Row, Button, Ratio } from "react-bootstrap";
import { DocButton } from "../../components/buttons/DocButton";
import { MetrizButton } from "../../components/buttons/MetrizButton";
import PageHeader from "../../components/PageHeader";

const Metriz = () => {
  return (
    <>
      <PageHeader
        title={"Guide Introductif"}
        prev={"ressources"}
        prevTitle={"Ressources"}
        path={"ressources/application-mesure-impact"}
        hasBreadcrumb={true}
      />
      <section>
        <Container>
          <Row className="align-items-center">
            <Col>
              <h3>
                Qu'est-ce que l'Empreinte Sociétale de votre entreprise ?
              </h3>
              <p>
                L'Empreinte Sociétale est un panel d'indicateurs mesurant <b>les externalités
                associées à la production économique</b> de votre entreprise, sur 12 dimensions
                sociales et environnementales clés au regard des Objectifs de Développement 
                Durable.
              </p>
              <p>
                Elle traduit votre capacité à produire de la valeur (biens/services) en limitant
                les impacts négatifs ou en maximisant les impacts positifs associés.
              </p>
              <p>
                La mesure des indicateurs vous permet de prendre connaissance des impacts de vos 
                activités, et de vous situer par rapport à votre branche d'activité : performance
                actuelle et objectif attendu d'ici 2030.
              </p>
              <p>
                Vous pouvez ainsi cibler vos actions sur les dimensions prioritaires et valoriser
                celles pour lesquelles vous affichez une meilleure performance que la moyenne de 
                votre secteur.
              </p>
            </Col>
            <Col className="text-end">
              <Image
                fluid
                src="/images/carousel/carousel-1.png"
                alt="Illustration Application mesure impact"
              />
            </Col>
          </Row>
        </Container>
      </section>
      <section className="steps bg-light-secondary">
        <Container>
          <h3 className="mb-5 text-center ">Dimensions sociales et environnementales</h3>
          <Row>
            <Col className="m-2">
              <Row>
                <div className="bg-white rounded align-items-center p-3 shadow-sm mb-3">
                  <h4>Empreinte sociale</h4>
                  <p className="mb-0">Indice d'écart des rémunérations</p>
                  <p className="mb-0">Indice d'écart de rémunération Femmes/Hommes</p>
                  <p className="mb-0">Contribution à l'évolution des compétences et des connaissances</p>
                </div>
                <div className="bg-white rounded align-items-center p-3 shadow-sm mb-3">
                  <h4>Création de la valeur</h4>
                  <p className="mb-0">Contribution à l'économie françaises</p>
                  <p className="mb-0">Contribution aux métiers d'art et aux savoir-faire</p>
                  <p className="mb-0">Contribution aux acteurs d'intérêt social</p>
                </div>
              </Row>
            </Col>
            <Col className="m-2">
              <Row>
                <div className="bg-white rounded align-items-center p-3 shadow-sm mb-3">
                  <h4>Empreinte environnementale</h4>
                  <p className="mb-0">Intensité d'émission de gaz à effet de serre</p>
                  <p className="mb-0">Intensité d'extraction de matières premières</p>
                  <p className="mb-0">Intensité de consommation d'énergie</p>
                  <p className="mb-0">Intensité de consommation d'eau</p>
                  <p className="mb-0">Intensité de production de déchets</p>
                  <p className="mb-0">Intensité d'utilisation de produits dangereux</p>
                </div>
              </Row>
            </Col>
          </Row>

        </Container>
      </section>
      <section>
        <Container>
          <h3>Evaluation sur le périmètre de la production</h3>
          <Row>
            <Col>
              <div className="d-flex align-items-center">
                <img className="d-block" src="/images/carousel/carousel-3.png" alt="" />
              </div>
            </Col>
            <Col>
              <p>
                L'évaluation des externalités de la production prend en compte :
                <ul>
                  <li>Les impacts de votre valeur ajoutée (impacts directs liés à vos opérations)</li>
                  <li>Les impacts liés à vos consommations : intermédiaires et de capital fixe</li>
                </ul>
              </p>
              <h4>Impacts indirects amont</h4>
              <p>
                La mesure des impacts liés à vos consommations s'appuie sur l'empreinte de la 
                production de vos fournisseurs. Elles sont disponibles au sein de notre base 
                de données ouverte (en l'absence de données publiées, des données statistiques 
                sont utilisées).
              </p>
              <p>
                Ainsi, vos clients utiliseront une moyenne sectorielle en attendant que vous publiez
                votre empreinte sociétale.
              </p>
              <h4>Impacts directs</h4>
              <p>
                Les impacts directs de vos opérations sont obtenus à partir de vos données 
                d'activité :
                <ul>
                  <li>Données sociales (DSN...)</li>
                  <li>Consommations (eau, énergie, maières premières, etc.)</li>
                  <li>Déchets et polluants</li>
                </ul>
              </p>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="bg-light text-center">
        <Container>
          <h3>Les étapes au sein de l'application</h3>
          <div className="d-flex align-items-center">
            <img className="d-block" src="/images/carousel/carousel-6.png" alt="" />
          </div>
        </Container>
      </section>
      <section>
        <Container>
          <Row className="align-items-center">
            <Col>
              <h3>Les résultats disponibles</h3>
              <p>
                Les résultats disponibles au sein de l'application sont les suivants :
              </p>
              <ul>
                <li>Empreintes de vos soldes intermédiaires de gestion et de vos comptes de charges externes</li>
                <li>Comparaisons avec votre branche et l'objectif associé pour 2030 (lorsque défini)</li>
                <li>Courbes d'évolution : historique, tendance et trajectoires cibles</li>
              </ul>
            </Col>
            <Col className="text-end">
              <Image
                src="/images/carousel/carousel-7.png"
                alt=""
              />
            </Col>
          </Row>
        </Container>
      </section>
      <section>
        <Container>
          <Row className="align-items-center">
            <Col>
              <h3>Le traitement en local de vos données</h3>
              <p>
                Vos données sont traitées "côté client" par votre navigateur web sur votre ordinateur. 
                Vos données ne transitent pas au sein de nos serveurs et ne font pas l'objet d'une collecte.
              </p>
              <p>
                Un fichier de sauvegarde peut être enregistré sur votre ordinateur pour reprendre ultérieurement une analyse.
              </p>
            </Col>
            <Col className="text-end">
              <Image
                src="/images/carousel/carousel-8.png"
                alt=""
              />
            </Col>
          </Row>
        </Container>
      </section>
      <section>
        <Container>
          <Row className="align-items-center">
            <Col>
              <h3>Publication de votre empreinte sociétale</h3>
              <p>
                Pour valoriser votre démarche et votre performance, vous pouvez publier
                au sein de notre base de données ouverte pour les valoriser.
              </p>
              <Image
                src="/images/carousel/carousel-9.png"
                alt=""
              />
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Metriz;

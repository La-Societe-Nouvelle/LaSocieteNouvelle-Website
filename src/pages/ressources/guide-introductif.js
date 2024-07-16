import React from "react";
import { Col, Container, Image, Row, Button, Ratio } from "react-bootstrap";
import { DocButton } from "../../components/buttons/DocButton";
import { MetrizButton } from "../../components/buttons/MetrizButton";
import PageHeader from "../../components/PageHeader";

const Metriz = () => {
  return (
    <>
      <PageHeader
        title={"Mesurer l'Empreinte Sociétale de son entreprise"}
        prev={"ressources"}
        prevTitle={"Ressources"}
        path={"ressources/guide-introductif"}
        hasBreadcrumb={true}
      />
      <section>
        <Container>
          <Row className="align-items-center">
            <Col>
              <h3>
                Qu'est-ce que l'Empreinte Sociétale d'une entreprise ?
              </h3>
              <p>
                L'Empreinte Sociétale est un panel d'indicateurs mesurant <b>les externalités
                associées à la production économique</b> d'une entreprise. Le panel cible 12 dimensions
                sociales et environnementales clés au regard des <a href= "https://www.agenda-2030.fr/17-objectifs-de-developpement-durable/" 
                target="_blank">Objectifs de Développement Durable</a> définis par l'ONU.
              </p>
              <p>
                Les indicateurs sont exprimés par euro de chiffre d'affaires. Ils traduisent la capacité 
                de l'entreprise à produire de la valeur (biens/services) en limitant
                les impacts négatifs ou en maximisant les impacts positifs associés.
              </p>
              <p>
                De part son rapprochement possible avec des données statistiques macroéconomiques, l'empreinte sociétale permet de se situer par rapport à sa branche d'activité, que ce soit la moyenne
                actuelle ou l'objectif attendu d'ici 2030.
              </p>
              <p>
                Enfin, l'empreinte sociétale est un <b>outil de transparence et de valorisation</b> de la performance sociale et environnementale.
              </p>
              <p>
                A noter que lorsqu'ils sont publiés au sein de notre base de données ouverte, <b>les indicateurs sont repris par les clients de l'entreprise
                pour leur propre évaluation</b>. De la manière, la mesure des indicateurs pour une entreprise s'appuie sur ceux de ses fournisseurs.
              </p>
              <p>
                Les empreintes publiées (démarche volontaire) sont disponibles via <a href="https://lasocietenouvelle.org/portail" target="_blank">notre portail</a>
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
          <h3 className="mb-5 text-center ">Liste des dimensions sociales et environnementales mesurées</h3>
          <Row>
            <Col className="m-2">
              <Row>
                <div className="bg-white rounded align-items-center p-3 shadow-sm mb-3">
                  <h4>Création de la valeur</h4>
                  <p className="mb-0">Contribution à l'économie française</p>
                  <p className="mb-0">Contribution aux métiers d'art et aux savoir-faire</p>
                  <p className="mb-0">Contribution aux acteurs d'intérêt social</p>
                </div>
              </Row>
              <Row>
                <div className="bg-white rounded align-items-center p-3 shadow-sm mb-3">
                  <h4>Empreinte sociale</h4>
                  <p className="mb-0">Indice d'écart des rémunérations</p>
                  <p className="mb-0">Indice d'écart de rémunération Femmes/Hommes</p>
                  <p className="mb-0">Contribution à l'évolution des compétences et des connaissances</p>
                </div>
              </Row>
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
          <h3>Méthodologie de mesure de l'Empreinte Sociétale</h3>
          <Row>
            <Col>
              <div className="d-flex align-items-center">
                <img className="d-block" src="/images/carousel/carousel-3.png" alt="" />
              </div>
            </Col>
            <Col>
              <p>
                L'Empreinte Sociétale prend en compte :
                <ul>
                  <li>Les impacts de votre valeur ajoutée (impacts directs liés à vos opérations)</li>
                  <li>Les impacts liés à vos consommations : intermédiaires et de capital fixe</li>
                </ul>
              </p>
              <h4>Pour les impacts directs</h4>
              <p>
                Les impacts directs de vos opérations sont obtenus à partir de vos données 
                d'activité :
                <ul>
                  <li>Consommations (eau, énergie, maières premières, etc.)</li>
                  <li>Données sociales</li>
                  <li>Déchets et polluants</li>
                </ul>
              </p>
              <h4>Pour les impacts indirects amont</h4>
              <p>
                La mesure des impacts liés à vos consommations s'appuie sur l'empreinte de la 
                production de vos fournisseurs. Elles sont disponibles au sein de notre base 
                de données ouverte (en l'absence de données publiées, des données statistiques 
                sont utilisées).
              </p>
              <p>
                De la même manière, vos clients utiliseront une moyenne sectorielle en attendant que vous publiez
                votre empreinte sociétale.
              </p>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="bg-light text-left">
        <Container>
          <h3>Application web METRIZ (Outil libre et open source)</h3>
          <Row>
            <Col>
              <p>
                Afin de faciliter et de rendre accessible à toutes les entreprises la mesure
                de leur empreinte sociétale, La Société Nouvelle met à disposition une application
                web <b>libre et gratuit</b>{" "}.
              </p>
              <p>
                L'application permet de faire le lien entre le{" "}
                <b>fichier d'écritures comptables</b> (FEC), les données
                disponibles pour <b>les fournisseurs</b> et les impacts directs
                de l'entreprise.
              </p>
              <p>
                Vos données sont traitées "côté client" par votre navigateur web sur votre ordinateur. 
                Vos données ne transitent pas au sein de nos serveurs et ne font pas l'objet d'une collecte.
                Un fichier de sauvegarde peut être enregistré sur votre ordinateur pour reprendre ultérieurement une analyse.
              </p>
              <p>
                <b>Les résultats disponibles au sein de l'application</b> sont les suivants :
              </p>
              <ul>
                <li>Empreintes de vos soldes intermédiaires de gestion et de vos comptes de charges externes</li>
                <li>Comparaisons avec votre branche et l'objectif associé pour 2030 (lorsque défini)</li>
                <li>Courbes d'évolution : historique, tendance et trajectoires cibles</li>
              </ul>
            </Col>
            <Col className="text-center">
              <Image
                fluid
                src="/images/application-mesure-impact.png"
                alt="Illustration Application mesure impact"
                />
              <div className="mt-4 text-center">
                <MetrizButton />
                <DocButton margin={"ms-2"} />
              </div>
            </Col>
          </Row>
          <Row className="mt-5 text-center">
            <p>
              <b>Si vous avez besoin d'aide, n'hésitez pas à prendre contact avec nous : contact@lasocietenouvelle.org</b>
            </p>
          </Row>
        </Container>
      </section>
      <section>
        <Container>
          <Row className="align-items-center text-center">
            <Col>
              <h3>Publication de votre empreinte sociétale</h3>
              <p>
                Dernière étape, pour valoriser votre démarche et votre performance, vous pouvez publier
                votre empreinte sociétale au sein de notre base de données ouverte.
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

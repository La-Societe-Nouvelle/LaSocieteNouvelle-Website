import React from "react";
import { Col, Container, Image, Row, Button } from "react-bootstrap";
import PageHeader from "../../components/PageHeader";
import {MetrizButton} from "../../components/buttons/MetrizButton";

const Entreprises = () => {
  return (
    <>
      <PageHeader title={"Entreprises"} path={"entreprises"} />
      <section>
        <Container>
          <Row className="align-items-center">
            <Col lg={8}>
              <h3>Pilotez et valorisez votre performance extra-financière</h3>
              <p>
                Climat, inégalités sociales, raréfaction des ressources
                naturelles... Les entreprises ont un rôle majeur dans la
                construction d'une <strong>société durable</strong>. Il est désormais
                incontournable pour une entreprise de prendre en compte ces
                enjeux clefs si elle veut assurer sa pérennité.
              </p>
              <p>
              <strong>Mesurer les impacts de sa valeur ajoutée et de sa valeur
                produite</strong> permet d'évaluer sa capacité à produire de la valeur en
                <strong> limitant ses impacts négatifs</strong>, de se positionner vis-à-vis de sa
                branche d'activités et des objectifs de développement durable
                fixés.
              </p>
              <p>
                La publication des indicateurs à l'échelle de votre chiffre
                d'affaires <b>valorise votre performance</b> auprès de vos clients,
                leur performance faisant intervenir la vôtre.
              </p>
              <p>
                La démarche vous permet d'être <b>transparent</b> sur l'empreinte que
                vous laissez sur la société et l'environnement, et de prouver
                que vos activités s'inscrivent dans une trajectoire visant à
                atteindre une <strong>économie soutenable</strong>.
              </p>
            </Col>
            <Col className="text-end">
              <Image
                fluid
                src="/illustrations/mesure-entreprise.svg"
                alt="Illustration pour les entreprises avec représentation des données"
              />
            </Col>
          </Row>
        </Container>
      </section>
      <section className="text-center bg-light">
        <Container>
          <h3 >
            Mesurer vos indicateurs grâce à notre application web
          </h3>
          <p>
            Une application web Open Source est à votre disposition pour mesurer
            ces indicateurs. Elle permet de faire le lien entre votre FEC
            (Fichier d'Ecritures Comptables), les données disponibles relatives
            à vos fournisseurs et vos impacts directs pour produire
            automatiquement des livrables téléchargeables.
          </p>
          <Row className="mt-5">
            <Col>
              <div className="box shadow-sm">
                <div>
                  <Image
                    src="illustrations/performance-extra-financiere.svg"
                    alt="Performance Extra-financière"
                    height={80}
                    className="mb-4"
                  />
                </div>
                <h4 className="h6">
                  Suivez et valorisez votre performance extra-financière
                </h4>
              </div>
            </Col>
            <Col>
              <div className="box shadow-sm">
                <div>
                  <Image
                    src="illustrations/objectif-developpement.svg"
                    alt="Objectifs développement durable"
                    height={80}
                    className="mb-4"
                  />
                </div>
                <h4 className="h6">
                  Positionnez-vous par rapport aux objectifs de développement
                  durable
                </h4>
              </div>
            </Col>
            <Col>
              <div className="box shadow-sm">
                <div>
                  <Image
                    src="illustrations/anticipation-risque.svg"
                    alt="Risques"
                    height={80}
                    className="mb-4"
                  />
                </div>
                <h4 className="h6">
                  Anticipez de potentiels <br />
                  risques
                </h4>
              </div>
            </Col>
          </Row>
          <div className="text-center mt-5">

            <MetrizButton />
          </div>
        </Container>
      </section>
      <section>
        <Container>
          <Row className="align-items-center">
            <Col lg={8}>
              <h3> Principe de calcul</h3>
              <p>
                Du fait des consommations intermédiaires et de capital fixe, la
                valeur produite d'une entreprise fait intervenir celle d'autres
                entreprises. La mesure des indicateurs fait donc appel aux
                empreintes sociétales des fournisseurs pour estimer les impacts
                de ces flux sortants.
              </p>
              <p>
                Le modèle des indicateurs suit ainsi les principes suivants :
              </p>
              <ul>
                <li>
                  Les impacts liés à la valeur ajoutée nette (production réduite
                  des consommations) correspondent aux impacts directs de
                  l'entreprise sur son périmètre opérationnel ;
                </li>
                <li>
                  Les impacts liés aux flux économiques sortants (consommations
                  intermédiaires et consommations de capital fixe) sont obtenus
                  via l'empreinte sociétale des fournisseurs.
                </li>
              </ul>
              <p>
                Le modèle permet ainsi de mettre en place une traçabilité le
                long des chaînes de valeurs. L'empreinte sociétale d'une
                entreprise dépend de celle de ses fournisseurs et impacte celle
                de ses clients.
              </p>
            </Col>
            <Col>
              <Image
                fluid
                src="/images/graphique-donut.png"
                alt="Graphique Principe de calculs"
              />
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Entreprises;

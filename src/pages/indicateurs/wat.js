import React from "react";
import { Button, Col, Container, Image, Row } from "react-bootstrap";
import { Helmet } from "react-helmet";
import PageHeader from "../../components/PageHeader";

const wat = () => {
  return (
    <>
      <Helmet>
        <title>La société Nouvelle | Intensité de Consommation d'Eau </title>
      </Helmet>
      <PageHeader
        title="Intensité de Consommation d'Eau"
        prev={"indicateur"}
        prevTitle={"Liste des indicateurs"}
        path={"indicateur/wat"}
      />
      <section>
        <Container>
          <Row>
            <Col>
              <h3>Description de l'indicateur</h3>
              <Image  src="/ESE/WAT.svg" height="80" className="mb-3" />
              <p>
                Quantité d’eau consommée par unité de valeur produite, exprimée
                en L/€ (litres par euro)
              </p>
              <p>
                L’indicateur vise à informer sur l’utilisation de la ressource
                eau. Il s’inscrit dans une volonté de gestion globale des
                ressources naturelles, et occupe une importance particulière
                dans un contexte de diminution des quantités d’eau disponibles,
                conséquence du dérèglement climatique.
              </p>

              <p>
                <b>Code : </b> WAT
              </p>
              <Button variant="secondary" href="https://docs.lasocietenouvelle.org/empreinte-societale/indicateurs/indicateur-wat" target="_blank" rel="noreferrer">
                Documentation
              </Button>
            </Col>
            <Col className="odd">
              <h3>Objectifs de développement durable</h3>
              <Image
                id="logo-odd"
                src="/images/odd/odd_wat.png"
                alt="logo odd"
                className="mb-3"
              />
              <p>
                3.9 : D’ici à 2030, réduire nettement le nombre de décès et de
                maladies dus à des substances chimiques dangereuses et à la
                pollution et à la contamination de l’air, de l’eau et du sol.
              </p>
              <p>
                6.1 : D’ici à 2030, assurer l’accès universel et équitable à
                l’eau potable, à un coût abordable.
              </p>
              <p>
                6.4 : D’ici à 2030, augmenter considérablement l’utilisation
                rationnelle des ressources en eau dans tous les secteurs et
                garantir la viabilité des retraits et de l’approvisionnement en
                eau douce afin de tenir compte de la pénurie d’eau et de réduire
                nettement le nombre de personnes qui souffrent du manque d’eau.
              </p>
              <p>
                6.5 : D’ici à 2030, mettre en œuvre une gestion intégrée des
                ressources en eau à tous les niveaux, y compris au moyen de la
                coopération transfrontière selon qu’il convient.
              </p>
              <p>
                8.4 : Améliorer progressivement, jusqu’en 2030, l’efficience de
                l’utilisation des ressources mondiales du point de vue de la
                consommation comme de la production et s’attacher à ce que la
                croissance économique n’entraîne plus la dégradation de
                l’environnement, comme prévu dans le cadre décennal de
                programmation relatif à la consommation et à la production
                durables, les pays développés montrant l’exemple en la matière.{" "}
              </p>
              <p>
                12.2 : D’ici à 2030, parvenir à une gestion durable et à une
                utilisation rationnelle des ressources naturelles.{" "}
              </p>
              <p>
                15.1 : D’ici à 2020, garantir la préservation, la restauration
                et l’exploitation durable des écosystèmes terrestres et des
                écosystèmes d’eau douce et des services connexes, en particulier
                les forêts, les zones humides, les montagnes et les zones
                arides, conformément aux obligations découlant des accords
                internationaux.
              </p>
         
            </Col>
          </Row>
        </Container>
      </section>
      <section className="bg-light">
        <Container>
          <h3>Impact direct mesuré</h3>
          <p>
            <b>Grandeur mesurée : </b>Quantité consommée d’eau (en m³)
          </p>
          <p>
            Les prélèvements d’eau avec restitution dans le milieu d’origine,
            sans traitement, ne sont pas comptabilisés.
          </p>
          <p>
            Note : L'impact direct est associé à la valeur ajoutée nette de
            l'entreprise. Pour la valeur produite, la mesure est complétée par
            les impacts indirects liés aux consommations et aux amortissements,
            obtenus à partir des données des entreprises sollicitées{" "}
          </p>
        </Container>
      </section>
      <section className="pb-0">
        <Container>
          <h3>Données par défaut</h3>
          <p>
            Les données disponibles sont ventilées selon quatre secteurs :
            Agriculture, industrie, énergie et services. Ces derniers sont
            associés à la NACE selon la correspondance suivante : Agriculture :
            A, Industrie : B-E (hors D), Energie : E36, Service : H-U.
          </p>
          <p>
            Les quantités consommées sont associés à la valeur ajoutée des
            agrégats. Les intensités moyennes de la production française et
            mondiale sont affectées aux consommations selon le taux
            d’importations.
          </p>
          <p>
            L’intervalle de confiance associé à l’utilisation des données est de
            1000 %.{" "}
          </p>
        </Container>
      </section>
      <section className="info-supp">
        <Container>
          <hr></hr>
          <h4 className="mt-5">Pour aller plus loin </h4>
          <ul>
            <li>
              Ministère de la Transition Ecologique
              <a href="https://www.ecologie.gouv.fr/politiques/eau">
                Politiques publiques - Eau
              </a>
            </li>
            <li>
              <a href="https://www.eaufrance.fr/">Eau France</a>
            </li>
            <li>
              <a href="http://www.lesagencesdeleau.fr/">Agences de l’eau</a>
            </li>
            <li>
              European Environnement Agency (EEA)
              <a href="https://water.europa.eu/freshwater">WISE Freshwater</a>
            </li>
          </ul>
        </Container>
      </section>
    </>
  );
};

export default wat;

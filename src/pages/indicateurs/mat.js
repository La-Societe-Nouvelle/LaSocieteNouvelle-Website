import React from "react";
import { Button, Col, Container, Image, Row } from "react-bootstrap";
import { Helmet } from "react-helmet";
import DownloadFile from "../../components/indic/DownloadFile";
import TrendsChartBox from "../../components/indic/TrendsChartBox";
import PageHeader from "../../components/PageHeader";

const mat = () => {
  return (
    <>
      <Helmet>
        <title>
          La Société Nouvelle | Intensité d'Extraction de Matières premières
        </title>
      </Helmet>
      <PageHeader
        title="Intensité d'Extraction de Matières premières"
        prev={"indicateurs"}
        prevTitle={"Liste des indicateurs"}
        path={"indicateurs/mat"}
      />
      <section>
        <Container>
          <Row>
            <Col>
              <h3>Description de l'indicateur</h3>
              <Image src="/ESE/mat.svg" height="80" className="mb-3" />

              <p>
                Quantité de matières premières extraite (minerais, fossiles,
                biomasse) par unité de valeur produite, exprimée en g/€ (en
                grammes par euro).
              </p>
              <p>
                L’indicateur informe sur le recours à l’extraction de ressources
                naturelles. La réutilisation de matières premières est donc
                exclue de la mesure. L’objectif est de réduire l’extraction de
                matières premières et de favoriser la réutilisation et
                l’économie circulaire.
              </p>

              <p>
                <b>Code : </b> MAT
              </p>
              <Button
                variant="secondary"
                href="https://docs.lasocietenouvelle.org/empreinte-societale/indicateurs/indicateur-mat"
                target="_blank"
                rel="noreferrer"
              >
                Documentation
              </Button>
            </Col>
            <Col className="odd small">
              <h3>Objectifs de développement durable</h3>
              <Image
                id="logo-odd"
                src="/images/odd/F-WEB-Goal-08.png"
                alt="logo odd"
                className="mb-3"
              />
              <Image
                id="logo-odd"
                src="/images/odd/F-WEB-Goal-12.png"
                alt="logo odd"
                className="mb-3"
              />
              <Image
                id="logo-odd"
                src="/images/odd/F-WEB-Goal-14.png"
                alt="logo odd"
                className="mb-3"
              />
              <Image
                id="logo-odd"
                src="/images/odd/F-WEB-Goal-15.png"
                alt="logo odd"
                className="mb-3"
              />
              <p>
                8.4 : Améliorer progressivement, jusqu’en 2030, l’efficience de
                l’utilisation des ressources mondiales du point de vue de la
                consommation comme de la production et s’attacher à ce que la
                croissance économique n’entraîne plus la dégradation de
                l’environnement, comme prévu dans le cadre décennal de
                programmation relatif à la consommation et à la production
                durables, les pays développés montrant l’exemple en la matière.
              </p>
              <p>
                12.2 : D’ici à 2030, parvenir à une gestion durable et à une
                utilisation rationnelle des ressources naturelles.
              </p>
              <p>
                14.4 D’ici à 2020, réglementer efficacement la pêche, mettre un
                terme à la surpêche, et aux pratiques de pêche destructrices et
                exécuter des plans de gestion fondés sur des données
                scientifiques, l’objectif étant de rétablir les stocks de
                poissons le plus rapidement possible, au moins à des niveaux
                permettant d’obtenir un rendement constant maximal compte tenu
                des caractéristiques biologiques.
              </p>
              <p>
                15.1 : D’ici à 2020, garantir la préservation, la restauration
                et l’exploitation durable des écosystèmes terrestres et des
                écosystèmes d’eau douce et des services connexes, en particulier
                les forêts, les zones humides, les montagnes et les zones
                arides, conformément aux obligations découlant des accords
                internationaux
              </p>
              <p>
                15.2 : D’ici à 2020, promouvoir la gestion durable de tous les
                types de forêt, mettre un terme à la déforestation, restaurer
                les forêts dégradées et accroître considérablement le boisement
                et le reboisement au niveau mondial
              </p>
            </Col>
          </Row>
          <div className="mt-5 pt-4 border-top">
            <h3>Impact direct mesuré</h3>
            <p>
              <b>Grandeur mesurée : </b> Quantité extraite de matières premières
              (en kg)
            </p>
            <p>Familles de matières premières :</p>
            <ul>
              <li>Biomasse</li>
              <li>Minerais métalliques</li>
              <li>Minerais non métalliques</li>
              <li>Matières fossiles</li>
            </ul>
            <p>
              Note : L'impact direct est associé à la valeur ajoutée nette de
              l'entreprise. Pour la valeur produite, la mesure est complétée par
              les impacts indirects liés aux consommations et aux
              amortissements, obtenus à partir des données des entreprises
              sollicitées.
            </p>
          </div>
        </Container>
      </section>

      <TrendsChartBox indic="MAT" />

      <DownloadFile
        year={"2018"}
        file={"MAT-donnees-branches-2018"}
        title={"Intensité d'Extraction de Matières premières"}
      />
      <section className="info-supp pt-2">
        <Container>
          <hr></hr>
          <h4 className="mt-5">Pour aller plus loin </h4>
          <ul>
            <li>
              Données EUROSTAT -{" "}
              <a
                href="https://ec.europa.eu/eurostat/databrowser/view/env_ac_mfa/default/table?lang=fr"
                target="_blank"
              >
                Comptes de flux de matières
              </a>
            </li>
            <li>
              Données EUROSTAT -{" "}
              <a
                href="https://ec.europa.eu/eurostat/databrowser/view/env_ac_rmefd/default/table?lang=fr"
                target="_blank"
              >
                Comptes de flux de matières en équivalent matières premières par
                consommation finale de produits - modélisation
              </a>
            </li>
            <li>
              Ministère de la Transition écologique -{" "}
              <a
                href="https://www.ecologie.gouv.fr/productivite-des-ressources"
                target="_blank"
              >
                La productivité des ressources
              </a>
            </li>
          </ul>
        </Container>
      </section>
    </>
  );
};

export default mat;

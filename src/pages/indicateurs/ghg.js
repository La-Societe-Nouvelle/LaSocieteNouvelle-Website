import React from "react";
import { Button, Col, Container, Image, Row } from "react-bootstrap";
import { Helmet } from "react-helmet";
import DownloadFile from "../../components/indic/DownloadFile";
import TrendsChartBox from "../../components/indic/TrendsChartBox";
import PageHeader from "../../components/PageHeader";

const ghg = () => {
  return (
    <>
      <Helmet>
        <title>
          La Société Nouvelle | Intensité d'Emission de Gaz à effet de serre
        </title>
      </Helmet>
      <PageHeader
        title="Intensité d'Emission de Gaz à effet de serre"
        prev={"indicateurs"}
        prevTitle={"Liste des indicateurs"}
        path={"indicateurs/ghg"}
      />
      <section>
        <Container>
          <Row>
            <Col>
              <h3>Description de l'indicateur</h3>
              <Image  src="/ESE/ghg.svg"  height="80" className="mb-3" />
              <p>
                Quantité de gaz à effet de serre émise par unité de valeur
                produite, exprimée en gCO2e/€ (grammes de CO2 équivalent par
                euro ; équivalent pour la mise en équivalence des différents gaz
                à effet de serre, par rapport au CO2).
              </p>
              <p>
                L’indicateur informe sur la quantité émise de gaz à effet de
                serre liée à la production de l'entreprise avec pour objectif
                d'identifier les entreprises les plus performantes. Il s'inscrit
                dans l'objectif de réduction des émissions de gaz à effet de
                serre, dans le cadre de la lutte contre le déréglèment
                climatique.
              </p>

              <p>
                <b>Code : </b> GHG
              </p>
              <Button variant="secondary" href="https://docs.lasocietenouvelle.org/empreinte-societale/indicateurs/indicateur-ghg" target="_blank" rel="noreferrer">
                Documentation
              </Button>
            </Col>
            <Col className="odd">
              <h3>Objectifs de développement durable</h3>
              <Image
                id="logo-odd"
                src="/images/odd/odd_ghg.png"
                alt="logo odd"
                className="mb-3"
              />
              <p>
                7.2 : D’ici à 2030, accroître nettement la part de l’énergie
                renouvelable dans le bouquet énergétique mondial.
              </p>
              <p>
                8.4 : Améliorer progressivement, jusqu’en 2030, l’efficience de
                l’utilisation des ressources mondiales du point de vue de la
                consommation comme de la production et s’attacher à ce que la
                croissance économique n’entraîne plus la dégradation de
                l’environnement
              </p>
              <p>
                12.1 : Mettre en œuvre le Cadre décennal de programmation
                concernant les modes de consommation et de production durables
              </p>
              <p>
                13.1 : Renforcer, dans tous les pays, la résilience et les
                capacités d’adaptation face aux aléas climatiques et aux
                catastrophes naturelles liées au climat
              </p>
              <p>
                13.2 : Incorporer des mesures relatives aux changements
                climatiques dans les politiques, les stratégies et la
                planification nationales.
              </p>
              <p>
                14.3 Réduire au maximum l’acidification des océans et lutter
                contre ses effets, notamment en renforçant la coopération
                scientifique à tous les niveaux.
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
            <b>Grandeur mesurée : </b>Emissions directes de gaz à effet de serre
            - SCOPE 1 (en kgCO₂e)
          </p>
          <p>Postes d'émissions directes :</p>
          <ul>
            <li> Sources fixes de combustion</li>
            <li>Sources mobiles de combustion</li>
            <li> Procédés hors énergie</li>
            <li>Emissions fugitives</li>
            <li>Biomasse</li>
          </ul>
          <p>
            Note : L'impact direct est associé à la valeur ajoutée nette de
            l'entreprise. Pour la valeur produite, la mesure est complétée par
            les impacts indirects liés aux consommations et aux amortissements,
            obtenus à partir des données des entreprises sollicitées.
          </p>
        </Container>
      </section>
      <section>
        <Container>
          <h3>Données par défaut</h3>
          <p>
            Les valeurs par défaut affectées aux unités légales s'appuient sur leur activité principale. 
            Elles correspondent à l'intensité d'émission de gaz à effet de serre de la production de la division économique à laquelle appartient l'unité légale.
          </p>
          <p>
            Les données macro-économiques à l’échelle des divisions sont obtenues à partir des données EUROSTAT relatives aux émissions directes de gaz à effet de serre, 
            des comptes de production des divisions économiques, des modélisations des flux de consommations et de produits entre les branches d’activités 
            et des volumes des importations par produits.
          </p>
          <p>
            L’intervalle de confiance associé à l’utilisation des valeurs statistiques est de 100 % pour les valeurs sectorielles.
          </p>

        </Container>
      </section>
      
      <TrendsChartBox indic="GHG" />
      <DownloadFile
        year={"2018"}
        file={"GHG-donnees-branches-2018"}
        title={"Intensité d'Emission de Gaz à effet de serre"}
      />
      <section className="info-supp pt-2">
        <Container>
          <hr></hr>
          <h4 className="mt-5">Pour aller plus loin </h4>
          <ul>
            <li>
              <a href="https://appsso.eurostat.ec.europa.eu/nui/show.do?dataset=env_ac_ainah_r2&lang=fr" target="_blank">
                Compte d'émissions atmosphériques par activité de la NACE Rév. 2
              </a>
            </li>
            <li>
              Ministère de la Transition écologique -{" "}
              <a href="https://www.ecologie.gouv.fr/politiques/climat" target="_blank">
                Politiques publiques - Climat
              </a>
            </li>
            <li>
              <a href="https://www.citepa.org/fr/" target="_blank">
                Centre technique de référence en matière de pollution
                atmosphérique et de changement climatique (CITEPA)
              </a>
            </li>
          </ul>
        </Container>
      </section>
    </>
  );
};

export default ghg;

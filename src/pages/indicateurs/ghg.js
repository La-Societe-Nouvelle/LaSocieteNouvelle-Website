import React from "react";
import { Button, Col, Container, Image, Row } from "react-bootstrap";
import { Helmet } from "react-helmet";
import PageHeader from "../../components/PageHeader";

const ghg = () => {
  return (
    <>
      <Helmet>
        <title>
          La société Nouvelle | Intensité d'Emission de Gaz à Effet de Serre
        </title>
      </Helmet>
      <PageHeader
        title="Intensité d'Emission de Gaz à Effet de Serre"
        prev={"indicateur"}
        prevTitle={"Liste des indicateurs"}
        path={"indicateur/ghg"}
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
            obtenus à partir des données des entreprises sollicitées
          </p>
        </Container>
      </section>
      <section className="pb-0">
        <Container>
          <h3>Données par défaut</h3>
          <p>
            Les données disponibles sont ventilées par branche économique
            (NACE-Rev.2).
          </p>
          <p>
            Elles sont obtenues à partir des comptes macroéconomiques des
            branches économiques et des données EUROSTAT relatives aux émissions
            de gaz à effet de serre. Les émissions directes des branches sont
            associées au volume de la valeur ajoutée. Les émissions indirectes
            liées aux consommations intermédiaires sont obtenues à partir de la
            ventilation des consommations par branche (cf. TES INSEE).
          </p>
          <p>
            L’intervalle de confiance associé à l’utilisation des valeurs
            statistiques est de 500 % pour les valeurs sectorielles. (Travaux en
            cours)
          </p>
          <p>
            <b>Données brutes :</b>
          </p>
          <p>
            <a href="https://appsso.eurostat.ec.europa.eu/nui/show.do?dataset=env_ac_ainah_r2&lang=fr">
              Compte d'émissions atmosphériques par activité de la NACE Rév. 2
            </a>
          </p>
          <p>
            <b>Données financières :</b>
          </p>
          <p>
            <a href="https://www.insee.fr/fr/statistiques/4494213">Tableaux de synthèse : TES et TEE en 2019</a>
          </p>
        </Container>
      </section>
      <section className="info-supp">
        <Container>
          <hr></hr>
          <h4 className="mt-5">Pour aller plus loin </h4>
          <ul>
            <li>
              Ministère de la Transition écologique
              <a href="https://www.ecologie.gouv.fr/politiques/climat">
                Politiques publiques - Climat
              </a>
            </li>
            <li>
              <a href="https://www.citepa.org/fr/">
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

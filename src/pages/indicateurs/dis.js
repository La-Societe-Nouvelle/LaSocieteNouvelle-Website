import React from "react";
import { Button, Col, Container, Image, Row } from "react-bootstrap";
import { Helmet } from "react-helmet";
import PageHeader from "../../components/PageHeader";

const dis = () => {
  return (
    <>
      <Helmet>
        <title>
          La société Nouvelle | Indice de Répartition des Rémunérations
        </title>
      </Helmet>
      <PageHeader
        title="Indice de Répartition des Rémunérations"
        prev={"indicateur"}
        prevTitle={"Liste des indicateurs"}
        path={"indicateur/dis"}
      />
      <section>
        <Container>
          <Row>
            <Col>
              <h3>Description de l'indicateur</h3>
              <Image  src="/ESE/DIS.svg" height="80" className="mb-3" />

              <p>
                Coefficient de GINI. Valeur sans unité, comprise entre 0
                (égalité parfaite) et 100 (inégalité parfaite).
              </p>
              <p>
                L’indicateur vise à fournir un élément d’information sur la
                répartition des rémunérations au sein des entreprises ayant
                contribué à la production de la valeur, dans le but d'encourager
                celles qui ont un partage plus équitable de la valeur produite.
                D'autres indicateurs tel que le rapport interdécile D1/D9 sont
                en réflexion pour compléter cette information.
              </p>
              <p>
                *Note : Une meilleure répartition des rémunérations au sein de
                chaque entreprise n’implique pas nécessairement une meilleure
                répartition des revenus à l’échelle nationale, notamment en
                raison des disparités existantes entre certaines branches
                d’activités.*
              </p>
              <p>
                <b>Code : </b> DIS
              </p>
              <Button variant="secondary" href="https://docs.lasocietenouvelle.org/empreinte-societale/indicateurs/indicateur-dis" target="_blank" rel="noreferrer">
                Documentation
              </Button>
            </Col>
            <Col  className="odd">
              <h3>Objectifs de développement durable</h3>
              <Image
                id="logo-odd"
                src="/images/odd/odd_dis.png"
                alt="logo odd"
                className="mb-3"
              />
              <p>
                8.5 : D’ici à 2030, parvenir au plein emploi productif et
                garantir à toutes les femmes et à tous les hommes, y compris les
                jeunes et les personnes handicapées, un travail décent et un
                salaire égal pour un travail de valeur égale.
              </p>
              <p>
                10.1 : D’ici à 2030, faire en sorte, au moyen d’améliorations
                progressives, que les revenus des 40 % les plus pauvres de la
                population augmentent plus rapidement que le revenu moyen
                national, et ce de manière durable
              </p>
     
            </Col>
          </Row>
        </Container>
      </section>
      <section className="bg-light">
        <Container>
          <h3>Impact direct mesuré</h3>
          <p>
            <b>Grandeur mesurée : </b>Indice de GINI des taux horaires bruts
          </p>

          <p>
            *Note : L'impact direct est associé à la valeur ajoutée nette de
            l'entreprise. Pour la valeur produite, la mesure est complétée par
            les impacts indirects liés aux consommations et aux amortissements,
            obtenus à partir des données des entreprises sollicitées*
          </p>
        </Container>
      </section>
      <section className="pb-0">
        <Container>
          <h3>Données par défaut</h3>
          <p>
            Les données disponibles se limitent à l’indice de GINI à l’échelle
            nationale pour les revenus des ménages avant transferts sociaux. La
            valeur par défaut est appliquée à l’ensemble des unités légales dont
            les effectifs sont supérieurs à 2 collaborateurs.
          </p>

          <p>
            L’intervalle de confiance est de <b>50 %</b>.
          </p>
        </Container>
      </section>
      <section className="info-supp">
        <Container>
          <hr></hr>
          <h4 className="mt-5">Pour aller plus loin </h4>
          <ul>
            <li>
              Ministère du Travail, de l’Emploi et de l’Insertion
              <a href="https://travail-emploi.gouv.fr/droit-du-travail/la-remuneration/article/le-salaire-fixation-et-paiement">
                Le salaire : fixation et paiement
              </a>
            </li>
            <li>
              Ministère de l’Economie, des Finances et de la Relance
              <a href="https://www.economie.gouv.fr/entreprises/remuneration-salaries">
                Rémunération de vos salariés
              </a>
            </li>
          </ul>
        </Container>
      </section>
    </>
  );
};

export default dis;

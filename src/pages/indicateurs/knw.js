import React from "react";
import { Button, Col, Container, Image, Row } from "react-bootstrap";
import { Helmet } from "react-helmet"; 
import DownloadFile from "../../components/indic/DownloadFile";
import TrendsChartBox from "../../components/indic/TrendsChartBox";
import PageHeader from "../../components/PageHeader";

const knw = () => {
  return (
    <>
      <Helmet>
        <title>
          La Société Nouvelle | Contribution à l'Evolution des Compétences et
          des Connaissances
        </title>
      </Helmet>
      <PageHeader
        title="Contribution à l'Evolution des compétences et des connaissances"
        prev={"indicateurs"}
        prevTitle={"Liste des indicateurs"}
        path={"indicateurs/knw"}
      />
      <section>
        <Container>
          <Row>
            <Col>
              <h3>Description de l'indicateur</h3>
              <Image src="/ESE/knw.svg" height="80" className="mb-3" />
              <p>
                Part de la valeur produite, contribuant à la recherche, à la
                formation ou à l’enseignement, exprimée en % (de la valeur).
              </p>
              <p>
                L’indicateur informe sur la part des revenus de l’entreprise
                dédiée à la formation, la recherche ou l’enseignement.
              </p>

              <p>
                <b>Code : </b> KNW
              </p>
              <Button variant="secondary" href="https://docs.lasocietenouvelle.org/empreinte-societale/indicateurs/indicateur-knw" target="_blank" rel="noreferrer">
                Documentation
              </Button>
            </Col>
            <Col className="odd small">
              <h3>Objectifs de développement durable</h3>
              <Image
                id="logo-odd"
                src="/images/odd/F-WEB-Goal-04.png"
                alt="logo odd"
                className="mb-3"
              />
                 <Image
                id="logo-odd"
                src="/images/odd/F-WEB-Goal-08.png"
                alt="logo odd"
                className="mb-3"
              />
                 <Image
                id="logo-odd"
                src="/images/odd/F-WEB-Goal-09.png"
                alt="logo odd"
                className="mb-3"
              />
              <p>
                4.3 : D’ici à 2030, faire en sorte que les femmes et les hommes
                aient tous accès dans des conditions d’égalité à un enseignement
                technique, professionnel ou tertiaire, y compris universitaire,
                de qualité et d’un coût abordable.
              </p>
              <p>
                4.4 : D’ici à 2030, augmenter considérablement le nombre de
                jeunes et d’adultes disposant des compétences, notamment
                techniques et professionnelles, nécessaires à l’emploi, à
                l’obtention d’un travail décent et à l’entrepreneuriat
              </p>
              <p>
                8.6 : D’ici à 2020, réduire considérablement la proportion de
                jeunes non scolarisés et sans emploi ni formation
              </p>
              <p>
                9.5 : Renforcer la recherche scientifique, perfectionner les
                capacités technologiques des secteurs industriels de tous les
                pays, notamment en encourageant l’innovation et en augmentant
                considérablement le nombre de personnes travaillant dans le
                secteur de la recherche et du développement \[...\ et en
                accroissant les dépenses publiques et privées consacrées à la
                recherche et au développement d’ici à 2030.
              </p>
              
            </Col>
          </Row>
          <div className="mt-5 pt-4 border-top">
          <h3>Impact direct mesuré</h3>
          <p>
            <b>Grandeur mesurée : </b> Montant total des charges (hors charges
            externes) liées à la formation, l’éducation ou la recherche (en
            euros)
          </p>
          <p>Les postes de charges sont les suivants :</p>
          <ul>
            <li>
              Rémunérations de contrat de formation : stage, alternance, contrat
              d’apprentissage
            </li>
            <li>Rémunérations liées à l’encadrement de formation</li>
            <li>Rémunérations liées à des travaux de recherche</li>
            <li>
              Rémunérations liées à des partenariats avec des établissements de
              formation
            </li>
          </ul>
          <p>
          Note : L'impact direct est associé à la valeur ajoutée nette de l'entreprise. Pour la valeur produite, la mesure est complétée par les impacts indirects liés aux consommations et aux amortissements, obtenus à partir des données des entreprises sollicitées.
          </p>
                  </div>
        </Container>
      </section>

      <TrendsChartBox indic="KNW" />

      <DownloadFile
        year={"2015"}
        file={"KNW-donnees-branches-2015"}
        title={"Contribution à l'Evolution des compétences et des connaissances"}
      />
      <section className="info-supp pt-2">
        <Container>
          <hr></hr>
          <h4 className="mt-5">Pour aller plus loin </h4>
          <ul>
            <li>
              Données EUROSTAT : -{" "}
              <a href="https://ec.europa.eu/eurostat/databrowser/product/view/trng_cvt_16n2" target="_blank">
              Coûts des cours FPC par type et activité de la NACE Rév. 2
              </a>
            </li>
            <li>
            Ministère de l’Enseignement Supérieur, de la Recherche et de l’Innovation -{" "}
              <a href="https://www.enseignementsup-recherche.gouv.fr/" target="_blank">
              Ministère de l’Enseignement Supérieur, de la Recherche et de l’Innovation
              </a>
            </li>
            <li>
              Ministère du Travail, de l’Emploi et de l’Insertion -{" "}
              <a href="https://travail-emploi.gouv.fr/formation-professionnelle/" target="_blank">
              Formation professionnelle
              </a>
            </li>
            <li>
            Ministère de l’Economie, des Finances et de la Relance -{" "}
              <a href="https://www.economie.gouv.fr/entreprises/innovation-et-data" target="_blank">
              Innovation et data
              </a>
            </li>
          </ul>
        </Container>
      </section>
    </>
  );
};

export default knw;

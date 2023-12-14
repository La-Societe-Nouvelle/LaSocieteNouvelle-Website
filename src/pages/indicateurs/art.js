import React from "react";
import { Button, Col, Container, Image, Row } from "react-bootstrap";
import { Helmet } from "react-helmet";
import DownloadFile from "../../components/indic/DownloadFile";
import TrendsChartBox from "../../components/indic/TrendsChartBox";
import PageHeader from "../../components/PageHeader";

const art = () => {
  return (
    <>
      <Helmet>
        <title>
          La Société Nouvelle | Contribution aux Métiers d'art et aux
          Savoir-faire
        </title>
      </Helmet>
      <PageHeader
        title="Contribution aux Métiers d'art et aux Savoir-faire"
        prev={"indicateurs"}
        prevTitle={"Liste des indicateurs"}
        path={"indicateurs/art"}
      />
      <section>
      <Container>
          <Row>
            <Col>
              <h3>Description de l'indicateur</h3>
              <Image src="/ESE/art.svg" height="80" className="mb-3" alt="Pictogramme représentant l'indicateur" />

              <p>
                Part de la valeur produite par des entreprises artisanales,
                créatives ou dont le savoir-faire est reconnu ; exprimée en %
                (de la valeur). L'indicateur vise à informer sur la part
                *artisanale* de la valeur produite dans un objectif de
                valorisation des savoir-faire et des métiers de l'artisanat
                auprès des consommateurs finaux.
              </p>
              <p>
                <b>Code : </b> ART
              </p>
              <Button
                variant="secondary"
                href="https://docs.lasocietenouvelle.org/empreinte-societale/indicateurs/indicateur-art"
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
                src="/images/odd/F-WEB-Goal-09.png"
                alt="logo odd"
                className="mb-3"
              />
              <p>
                8.3 : Promouvoir des politiques axées sur le développement qui
                favorisent , la créativité et l’innovation et stimulent la
                croissance des micro-entreprises et des petites et moyennes
                entreprises.
              </p>
              <p>
                9.2 : Promouvoir une industrialisation durable qui profite à
                tous .
              </p>
            </Col>
          </Row>
          <div className="mt-5 pt-4 border-top">
          <h3>Impact direct mesuré</h3>
          <p>
            <b>Grandeur mesurée : </b>Valeur nette créée issue de l’artisanat ou
            d’un savoir-faire reconnu (en euros)
          </p>
          <p>
            <b>Critères</b>
          </p>
          <ul>
            <li>
              Activité principale répertoriée au registre des métiers / au sein
              de la Nomenclature d’Activités Française de secteur des métiers de
              l’Artisanat
            </li>
            <li>Labellisation Entreprise du Patrimoine Vivant (EPV)</li>
          </ul>
          <p>
            La valeur nette créée correspond à la valeur créée hors dotations
            aux amortissements.
          </p>
          <p>
            Note : L'impact direct est associé à la valeur ajoutée nette de
            l'entreprise. Pour la valeur produite, la mesure est complétée par
            les impacts indirects liés aux consommations et aux amortissements,
            obtenus à partir des données des entreprises sollicitées.
          </p>
          </div>
        </Container>
      </section>


      <TrendsChartBox indic="ART" />
      <DownloadFile
        year={"2015"}
        file={"ART-donnees-branches-2015"}
        title={"Contribution aux Métiers d'Art et aux Savoir-Faire"}
      />
      <section className="info-supp pt-2">
        <Container>
          <hr></hr>
          <h4 className="mt-5">Pour aller plus loin </h4>
          <ul>
            <li>
              Direction Générale des Entreprises -
              <a href="https://www.entreprises.gouv.fr/fr/etudes-et-statistiques/chiffres-cles/chiffres-cles-de-l-artisanat"
              target="_blank"
              >
                Rapport de la DGE
              </a>
            </li>
            <li>
              Ministère de l’Economie, des Finances et de la Relance -
              <a href="https://www.economie.gouv.fr/entreprises/labels-et-reconnaissance-de-savoir-faire"
              target="_blank"
              >
                Labels et reconnaissance de savoir-faire
              </a>
            </li>
            <li>
              <a href="https://www.institut-metiersdart.org"
              target="_blank"
              >
                Institut National des Métiers d'Art (INMA)
              </a>
            </li>
            <li>
              <a href="https://www.insee.fr/fr/statistiques/4277845?sommaire=4318291"
              target="_blank"
              >
                INSEE : Tableaux de l'économie française (2020) - Artisanat
              </a>
            </li>
          </ul>
        </Container>
      </section>
    </>
  );
};

export default art;

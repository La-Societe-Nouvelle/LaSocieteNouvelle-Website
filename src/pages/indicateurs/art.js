import React from "react";
import { Button, Col, Container, Image, Row } from "react-bootstrap";
import { Helmet } from "react-helmet";
import PageHeader from "../../components/PageHeader";

const art = () => {
  return (
    <>
      <Helmet>
        <title>
          La société Nouvelle | Contribution aux Métiers d'art et aux
          Savoir-faire
        </title>
      </Helmet>
      <PageHeader
        title="Contribution aux Métiers d'art et aux Savoir-faire"
        prev={"indicateur"}
        prevTitle={"Liste des indicateurs"}
        path={"indicateur/art"}
      />
      <section>
        <Container>
          <Row>
            <Col>
              <h3>Description de l'indicateur</h3>
              <p>
                Part de la valeur produite par des entreprises artisanales,
                créatives ou dont le savoir-faire est reconnu ; exprimée en %
                (de la valeur). L'indicateur vise à informer sur la part
                *artisanale* de la valeur produite dans un objectif de
                valorisation des savoir-faire et des métiers de l'artisanat
                auprès des consommateurs finaux.
              </p>
              <Image fluid src="/ESE/ART.svg" className="my-3" />
              <p>
                <b>Code : </b> ART
              </p>
              <Button variant="secondary" href="https://docs.lasocietenouvelle.org/empreinte-societale/indicateurs/indicateur-art" target="_blank" rel="noreferrer">
                Documentation
              </Button>
            </Col>
            <Col className="odd">
              <h3>Objectifs de développement durable</h3>
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
              <Image
                id="logo-odd"
                src="/images/odd/odd_art.svg"
                alt="logo odd"
                fluid
              />
            </Col>
          </Row>
        </Container>
      </section>
      <section className="bg-light">
        <Container>
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
            obtenus à partir des données des entreprises sollicitées
          </p>
        </Container>
      </section>
      <section className="pb-0">
        <Container>
          <h3>Données par défaut</h3>
          <p>
            Les données disponibles à l’échelle macroéconomique se limitent à la
            valeur ajoutée des entreprises artisanales. Elle est obtenue à
            partir du{" "}
            <a href="https://www.entreprises.gouv.fr/fr/etudes-et-statistiques/chiffres-cles/chiffres-cles-de-l-artisanat">
              rapport de la DGE{" "}
            </a>
            (Direction Générale des Entreprises) sur l’artisanat.
          </p>
          <p>
            La valeur par défaut des unités légales s’appuie sur l’activité
            principale au registre des métiers des établissements, à partir du
            répertoire SIRENE, pour la valeur ajoutée nette, et sur la valeur
            par défaut à l’échelle nationale pour les consommations domestiques.
            La contribution relative aux importations est considérée comme
            nulle.
          </p>
          <p>
            Les taux de valeur ajoutée, de consommation et d’importation sont
            obtenus à partir des agrégats de la comptabilité nationale de la
            branche économique au sein de laquelle se situe l’unité légale
            (activité principale).
          </p>
          <p>
            L’intervalle de confiance se situe entre 50 et 100 % et dépend
            fortement du taux de valeur ajoutée de l'entreprise. Pour une unité
            légale non reconnue, l’intervalle de confiance est de 500%.
          </p>
        </Container>
      </section>
      <section className="info-supp">
        <Container>
          <hr></hr>
          <h4 className="mt-5">Pour aller plus loin </h4>
          <ul>
            <li>
              Ministère de l’Economie, des Finances et de la Relance{" "}
              <a href="https://www.economie.gouv.fr/entreprises/labels-et-reconnaissance-de-savoir-faire">
                Labels et reconnaissance de savoir-faire
              </a>
            </li>
            <li>
              <a href="https://www.institut-metiersdart.org">
                Institut National des Métiers d'Art (INMA)
              </a>
            </li>
            <li>
              <a href="https://www.insee.fr/fr/statistiques/4277845?sommaire=4318291">
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

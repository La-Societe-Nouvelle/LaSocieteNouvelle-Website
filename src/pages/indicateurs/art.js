import React from "react";
import { Button, Col, Container, Image, Row } from "react-bootstrap";
import { Helmet } from "react-helmet";
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
        prev={"indicateur"}
        prevTitle={"Liste des indicateurs"}
        path={"indicateur/art"}
      />
      <section>
        <Container>
          <Row>
            <Col>
              <h3>Description de l'indicateur</h3>
              <Image src="/ESE/art.svg" height="80" className="mb-3"/>
        
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
              <Button variant="secondary" href="https://docs.lasocietenouvelle.org/empreinte-societale/indicateurs/indicateur-art" target="_blank" rel="noreferrer">
                Documentation
              </Button>
            </Col>
            <Col className="odd">
              <h3 >Objectifs de développement durable</h3>
              <Image
                id="logo-odd"
                src="/images/odd/odd_art.png"
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
            obtenus à partir des données des entreprises sollicitées.
          </p>
        </Container>
      </section>
      <section className="pb-0">
        <Container>
          <h3>Données par défaut</h3>
          <p>
            Les valeurs par défaut affectées aux unités légales s’appuient sur leur activité principale et 
            l’inscription de l’activité principale de leur(s) établissement(s) au registre des métiers, disponibles 
            au sein du répertoire SIRENE.
          </p>
          <p>
          Le calcul prend en compte :
          </p>
          <ul>
            <li>Le taux de valeur ajoutée et le taux de contribution aux métiers d’art et aux savoir-faire des consommations intermédiaires de la division économique à laquelle l’unité légale appartient ;</li>
            <li>Le taux d’inscription des activités des établissements au registre des métiers, assimilé au taux de contribution aux métiers d’art et aux savoir-faire de la valeur ajoutée de l’unité légale (ex. 10% si pour 10% des établissements actifs, l’activité est inscrite au registre des métiers).</li>
          </ul>
          <p>
            Pour les données par défaut génériques, les valeurs correspondent au taux de contribution aux métiers d’arts 
            et aux savoir-faire de la production des divisions économiques (x88).
          </p>
          <p>
            Les données macro-économiques à l’échelle des divisions sont obtenues à partir des données de la DGE (Direction Générales des Entreprises) sur l’Artisanat, 
            des comptes de production des divisions économiques, des modélisations des flux de consommations et de produits entre 
            les branches d’activités et des volumes des importations par produits.
          </p>
          <p>
            Pour les espaces économiques hors France, les valeurs sont nulles.
          </p>
          <p>
            L'intervalle de confiance est de 75% pour les données sectorielles et de 50% pour les données affectées aux unités légales.
          </p>
        </Container>
      </section>
      <section className="info-supp">
        <Container>
          <hr></hr>
          <h4 className="mt-5">Pour aller plus loin </h4>
          <ul>
            <li>
              Direction Générale des Entreprises -{" "}
              <a href="https://www.entreprises.gouv.fr/fr/etudes-et-statistiques/chiffres-cles/chiffres-cles-de-l-artisanat">
                Rapport de la DGE{" "}
              </a>
            </li>
            <li>
              Ministère de l’Economie, des Finances et de la Relance -{" "}
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

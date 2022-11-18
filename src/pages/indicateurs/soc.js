import React from "react";
import { Button, Col, Container, Image, Row } from "react-bootstrap";
import { Helmet } from "react-helmet";
import DownloadFile from "../../components/indic/DownloadFile";
import PageHeader from "../../components/PageHeader";

const soc = () => {
  return (
    <>
      <Helmet>
        <title>
          La Société Nouvelle | Contribution aux Acteurs d'Intérêt social
        </title>
      </Helmet>
      <PageHeader
        title="Contribution aux Acteurs d'Intérêt social"
        prev={"indicateurs"}
        prevTitle={"Liste des indicateurs"}
        path={"indicateur/soc"}
      />
      <section>
        <Container>
          <Row>
            <Col>
              <h3>Description de l'indicateur</h3>
              <Image src="/ESE/soc.svg" height="80" className="mb-3" />
              <p>
                Part de la valeur produite dans un intérêt social défini (raison
                d’être, etc.), exprimée en % (de la valeur).
              </p>
              <p>
                Face aux enjeux environnementaux et sociétaux, l’entreprise doit
                se positionner par sa raison d’être apportant sens à ses
                employés et ne devrait plus se qualifier uniquement par la
                recherche de profit.
              </p>
              <p>
                <b>Code : </b> SOC
              </p>
              <Button variant="secondary" href="https://docs.lasocietenouvelle.org/empreinte-societale/indicateurs/indicateur-soc" target="_blank" rel="noreferrer">
                Documentation
              </Button>
            </Col>
            <Col className="odd">
              <h3>Objectifs de développement durable</h3>
              <Image
                id="logo-odd"
                src="/images/odd/odd_soc.png"
                alt="logo odd"
                className="mb-3"
              />
              <p>
                12.1 : Mettre en œuvre le Cadre décennal de programmation
                concernant les modes de consommation et de production durables
                avec la participation de tous les pays, les pays développés
                montrant l’exemple en la matière, compte tenu du degré de
                développement et des capacités des pays en développement.
              </p>
              <p>
                12.6 : Encourager les entreprises, en particulier les grandes et
                les transnationales, à adopter des pratiques viables et à
                intégrer dans les rapports qu’elles établissent des informations
                sur la viabilité.
              </p>
       
            </Col>
          </Row>
        </Container>
      </section>
      <section className="bg-light">
        <Container>
          <h3>Impact direct mesuré</h3>
          <p>
            <b>Grandeur mesurée : </b>Valeur nette créée par des acteurs
            d’intérêt social (en euros)
          </p>
          <p>
            L’impact direct à l’échelle d’une unité légale est nul ou équivalent
            à la valeur ajoutée nette en fonction de la définition ou non d’un
            intérêt social.
          </p>
          <ul>
            <li>
              <a href="https://www.economie.gouv.fr/cedef/economie-sociale-et-solidaire">
                Qu'est-ce que l'économie sociale et solidaire ?
              </a>
            </li>
            <li>
              <a href="https://www.economie.gouv.fr/entreprises/agrement-entreprise-solidaire-utilite-sociale-ess">
                Qu’est-ce que l’agrément « Entreprise solidaire d’utilité
                sociale » ?
              </a>
            </li>
            <li>
              <a href="https://www.economie.gouv.fr/cedef/societe-mission">
                
                Que sont les sociétés à mission ?
              </a>
            </li>
          </ul>

          <p>Critères :</p>
          <ul>
            <li>Structure de l’ESS (Economie Sociale et Solidaire) </li>
            <li>Agrément ESUS (Entreprise Solidaire d'Utilité Sociale) </li>
            <li>
              Entreprise à mission / Raison d’être inscrite dans les statuts de
              l’entreprise
            </li>
          </ul>

          <p>
            La valeur ajoutée nette correspond à la valeur ajoutée hors
            dotations aux amortissements.
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
            Les valeurs par défaut affectées aux unités légales s’appuient sur leur activité principale 
            et l’appartenance de l’unité légale à l’ESS (variable disponible au sein du répertoire SIRENE).
          </p>
          <p>
           Le calcul prend en compte :
          </p>
          <ul>
            <li>Le taux de valeur ajoutée et le taux de contribution aux acteurs d’intérêt social des consommations intermédiaires de la division économique à laquelle l’unité légale appartient ;</li>
            <li>L’appartenance de l’unité légale à l’ESS : le taux de contribution aux acteurs d’intérêt social pour la valeur ajoutée sera de 100% si l’unité légale appartient à l’ESS et de 0% la cas contraire.</li>
          </ul>
          <p>
            Pour les données par défaut génériques, les valeurs correspondent au taux de contribution aux acteurs d’intérêt social de la production des divisions économiques (x88). 
          </p>
          <p>
            Les données macro-économiques à l’échelle des divisions sont obtenues à partir des données de l’ONESS (Observatoire National de l'ESS), des comptes de production des divisions économiques, des modélisations des flux de consommations et de produits entre les branches d’activités et des volumes des importations par produits.
          </p>
          <p>
            Pour les espaces économiques hors France, les valeurs sont nulles.
          </p>
          <p>
            L'intervalle de confiance est de 100% pour les données sectorielles et entre 50% et 100% pour les données affectées aux unités légales.
          </p>
          <DownloadFile
            year={"2015"}
            file={"SOC-donnees-branches-2015"}
            title={"Contribution aux Acteurs d'Intérêt social"}
          />
        </Container>
      </section>
      <section className="info-supp">
        <Container>
          <hr></hr>
          <h4 className="mt-5">Pour aller plus loin </h4>
          <ul>
            <li>
              Ministère de l’Economie, des Finances et de la Relance -
              <a href="https://www.economie.gouv.fr/loi-pacte-redefinir-raison-etre-entreprises">
                Redéfinir la raison d'être des entreprises
              </a>
            </li>
            <li>
              <a href="https://ess-france.org/fr">
                ESS France (Chambre française de l’ESS)
              </a>
            </li>
            <li>
              <a href="http://www.esspace.fr/index.html">
                Conseil National des Chambres Régionales de l’ESS
              </a>
            </li>
          </ul>
        </Container>
      </section>
    </>
  );
};

export default soc;

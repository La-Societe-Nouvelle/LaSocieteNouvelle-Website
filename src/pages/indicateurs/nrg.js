import React from "react";
import { Button, Col, Container, Image, Row } from "react-bootstrap";
import { Helmet } from "react-helmet";
import DownloadFile from "../../components/indic/DownloadFile";
import TrendsChartBox from "../../components/indic/TrendsChartBox";
import PageHeader from "../../components/PageHeader";

const geq = () => {
  return (
    <>
      <Helmet>
        <title>La Société Nouvelle | Intensité de Consommation d'Energie</title>
      </Helmet>
      <PageHeader
        title="Intensité de Consommation d'Energie"
        prev={"indicateurs"}
        prevTitle={"Liste des indicateurs"}
        path={"indicateurs/geq"}
      />
      <section>
        <Container>
          <Row>
            <Col>
              <h3>Description de l'indicateur</h3>
              <Image src="/ESE/nrg.svg" height="80" className="mb-3" />
              <p>
                Consommation d’énergie primaire par unité de valeur produite,
                exprimée en kJ/€ (kilojoules par euro).
              </p>
              <p>
                L’énergie est une grandeur qui caractérise la transformation
                d’un système. De nombreux enjeux sont ainsi directement liés à
                l’énergie tels que la consommation de ressources naturelles
                (matières fossiles, eau, minerais, etc.) ou les émissions de gaz
                à effet de serre. L’indicateur informe donc sur la pression
                exercée sur l’environnement.
              </p>
              <p>
                Associé à l’intensité d’émissions de gaz à effet de serre, il
                permet de connaître l’intensité carbone de l’énergie consommée.
              </p>
              <p>
                <b>Code : </b> NRG
              </p>
              <Button
                variant="secondary"
                href="https://docs.lasocietenouvelle.org/empreinte-societale/indicateurs/indicateur-nrg"
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
                src="/images/odd/F-WEB-Goal-07.png"
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
                src="/images/odd/F-WEB-Goal-12.png"
                alt="logo odd"
                className="mb-3"
              />
              <Image
                id="logo-odd"
                src="/images/odd/F-WEB-Goal-13.png"
                alt="logo odd"
                className="mb-3"
              />
              <p>
                7.3 : D’ici à 2030, multiplier par deux le taux mondial
                d’amélioration de l’efficacité énergétique.
              </p>
              <p>
                8.4 : Améliorer progressivement, jusqu’en 2030, l’efficience de
                l’utilisation des ressources mondiales du point de vue de la
                consommation comme de la production et s’attacher à ce que la
                croissance économique n’entraîne plus la dégradation de
                l’environnement.
              </p>
              <p>
                12.2 : D’ici à 2030, parvenir à une gestion durable et à une
                utilisation rationnelle des ressources naturelles.
              </p>
              <p>
                13.1 : Renforcer, dans tous les pays, la résilience et les
                capacités d’adaptation face aux aléas climatiques et aux
                catastrophes naturelles liées au climat.
              </p>
            </Col>
          </Row>
          <div className="mt-5 pt-4 border-top">
            <h3>Impact direct mesuré</h3>
            <p>
              <b>Grandeur mesurée : </b>Quantité consommée d’énergie (en MJ)
            </p>
            <p>Produits énergétiques comptabilisés :</p>
            <ul>
              <li>Electricité</li>
              <li>Energies fossiles (carburant, gaz, etc.)</li>
              <li>Biomasse</li>
              <li>Chaleur</li>
              <li>
                Energies renouvelables transformées (éolien, photovoltaïque,
                etc.)
              </li>
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

      <TrendsChartBox indic="NRG" />

      <DownloadFile
        year={"2018"}
        file={"NRG-donnees-branches-2018"}
        title={"Intensité de Consommation d'Energie"}
      />
      <section className="info-supp pt-2">
        <Container>
          <hr></hr>
          <h4 className="mt-5">Pour aller plus loin </h4>
          <ul>
            <li>
              Ministère de la Transition Ecologique -{" "}
              <a href="https://www.ecologie.gouv.fr/politiques/energies"
              target="_blank"
              >
                Politiques publiques - Energies
              </a>
            </li>
            <li>
              Données INSEE -{" "}
              <a href="https://www.insee.fr/fr/statistiques/4494213"
              target="_blank"
              >
                Tableaux de synthèse : TES et TEE en 2019
              </a>
            </li>
          </ul>
        </Container>
      </section>
    </>
  );
};

export default geq;

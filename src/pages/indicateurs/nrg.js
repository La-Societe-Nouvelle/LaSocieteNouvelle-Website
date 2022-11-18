import React from 'react'
import { Button, Col, Container, Image, Row } from "react-bootstrap";
import { Helmet } from 'react-helmet'
import DownloadFile from '../../components/indic/DownloadFile';
import PageHeader from '../../components/PageHeader'

const geq = () => {
  return (
    <>
    <Helmet>
      <title>La Société Nouvelle | Intensité de Consommation d'Energie</title>
    </Helmet>
    <PageHeader
      title="Intensité de Consommation d'Energie"
      prev={"indicateur"}
      prevTitle={"Liste des indicateurs"}
      path={"indicateur/geq"}
    />
      <section>
        <Container>
          <Row>
            <Col>
              <h3>Description de l'indicateur</h3>
              <Image src="/ESE/nrg.svg" height="80" className="mb-3" />
              <p>
              Consommation d’énergie primaire par unité de valeur produite, exprimée en kJ/€ (kilojoules par euro).
              </p>
              <p>
              L’énergie est une grandeur qui caractérise la transformation d’un système. De nombreux enjeux sont ainsi directement liés à l’énergie tels que la consommation de ressources naturelles (matières fossiles, eau, minerais, etc.) ou les émissions de gaz à effet de serre.
              L’indicateur informe donc sur la pression exercée sur l’environnement.
              </p>
              <p>
              Associé à l’intensité d’émissions de gaz à effet de serre, il permet de connaître l’intensité carbone de l’énergie consommée.
              </p>
              <p>
                <b>Code : </b> NRG
              </p>
              <Button variant="secondary" href="https://docs.lasocietenouvelle.org/empreinte-societale/indicateurs/indicateur-nrg" target="_blank" rel="noreferrer">
                Documentation
              </Button>
            </Col>
            <Col className="odd">
              <h3>Objectifs de développement durable</h3>
              <Image
                id="logo-odd"
                src="/images/odd/odd_nrg.png"
                alt="logo odd"
                className="mb-3"
              />
              <p>
              7.3 : D’ici à 2030, multiplier par deux le taux mondial d’amélioration de l’efficacité énergétique.
              </p>
              <p>
              8.4 : Améliorer progressivement, jusqu’en 2030, l’efficience de l’utilisation des ressources mondiales du point de vue de la consommation comme de la production et s’attacher à ce que la croissance économique n’entraîne plus la dégradation de l’environnement.
              </p>
              <p>
              12.2 : D’ici à 2030, parvenir à une gestion durable et à une utilisation rationnelle des ressources naturelles.
              </p>
              <p>
              13.1 : Renforcer, dans tous les pays, la résilience et les capacités d’adaptation face aux aléas climatiques et aux catastrophes naturelles liées au climat.
              </p>
           
            </Col>
          </Row>
        </Container>
      </section>
      <section className="bg-light">
        <Container>
          <h3>Impact direct mesuré</h3>
          <p>
            <b>Grandeur mesurée : </b>Quantité consommée d’énergie (en MJ)
          </p>
          <p>
          Produits énergétiques comptabilisés :
          </p>
          <ul>
            <li>Electricité</li>
            <li>Energies fossiles (carburant, gaz, etc.)</li>
            <li>Biomasse</li>
            <li>Chaleur</li>
            <li>Energies renouvelables transformées (éolien, photovoltaïque, etc.)</li>

          </ul>
          <p>
          Note : L'impact direct est associé à la valeur ajoutée nette de l'entreprise. Pour la valeur produite, la mesure est complétée par les impacts indirects liés aux consommations et aux amortissements, obtenus à partir des données des entreprises sollicitées.
          </p>
        </Container>
      </section>
      <section className="pb-0">
        <Container>
          <h3>Données par défaut</h3>
          <p>
            Les valeurs par défaut affectées aux unités légales s'appuient sur leur activité principale. 
            Elles correspondent à l'intensité de consommation d'énergie de la production de la division économique à laquelle appartient l'unité légale.
          </p>
          <p>
            Les données macro-économiques à l’échelle des divisions sont obtenues à partir des données EUROSTAT relatives aux ressources et emplois d'énergie par activité, 
            des comptes de production des divisions économiques, des modélisations des flux de consommations et de produits entre les branches d’activités 
            et des volumes des importations par produits.
          </p>
          <p>
            L’intervalle de confiance associé à l’utilisation des valeurs statistiques est de 100 % pour les valeurs sectorielles.
          </p>
          <DownloadFile
                year={"2018"}
                file={"NRG-donnees-branches-2018"}
                title={"Intensité de Consommation d'Energie"}
              />
        </Container>
      </section>
      <section className="info-supp">
        <Container>
          <hr></hr>
          <h4 className="mt-5">Pour aller plus loin </h4>
          <ul>
            <li>
            Ministère de la Transition Ecologique -{" "}
              <a href="https://www.ecologie.gouv.fr/politiques/energies">
              Politiques publiques - Energies
              </a>
            </li>
            <li>
            Données INSEE -{" "}
            <a href="https://www.insee.fr/fr/statistiques/4494213">
              Tableaux de synthèse : TES et TEE en 2019
              </a>
            </li>
          </ul>
        </Container>
      </section>
  </>  )
}

export default geq
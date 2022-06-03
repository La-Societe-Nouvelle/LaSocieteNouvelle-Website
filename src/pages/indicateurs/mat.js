import React from 'react'
import { Col, Container, Image, Row } from "react-bootstrap";
import { Helmet } from 'react-helmet'
import PageHeader from '../../components/PageHeader'

const mat = () => {
  return (
    <>
    <Helmet>
      <title>La société Nouvelle | Intensité d'Extraction de Matières Premières</title>
    </Helmet>
    <PageHeader
      title="Intensité d'Extraction de Matières Premières"
      prev={"indicateur"}
      prevTitle={"Liste des indicateurs"}
      path={"indicateur/mat"}
    />
      <section>
        <Container>
          <Row>
            <Col>
              <h3>Description de l'indicateur</h3>
              <p>
              Quantité de matières premières extraite (minerais, fossiles, biomasse) par unité de valeur produite, exprimée en g/€ (en grammes par euro).
              </p>
              <p>
              L’indicateur informe sur le recours à l’extraction (nouvelle) de ressources naturelles. La réutilisation de matières premières est donc exclue de la mesure.
L’objectif est de réduire l’extraction de matières premières et de favoriser la réutilisation et l’économie circulaire.
              </p>

              <Image fluid src="/ESE/mat.png" className="my-3" />
              <p>
                <b>Code : </b> MAT
              </p>
            </Col>
            <Col>
              <h3>Objectifs de développement durable</h3>
              <p>
              8.4 : Améliorer progressivement, jusqu’en 2030, l’efficience de l’utilisation des ressources mondiales du point de vue de la consommation comme de la production et s’attacher à ce que la croissance économique n’entraîne plus la dégradation de l’environnement, comme prévu dans le cadre décennal de programmation relatif à la consommation et à la production durables, les pays développés montrant l’exemple en la matière.
              </p>
              <p>
              12.2 : D’ici à 2030, parvenir à une gestion durable et à une utilisation rationnelle des ressources naturelles.
              </p>
              <p>
              14.4 D’ici à 2020, réglementer efficacement la pêche, mettre un terme à la surpêche, et aux pratiques de pêche destructrices et exécuter des plans de gestion fondés sur des données scientifiques, l’objectif étant de rétablir les stocks de poissons le plus rapidement possible, au moins à des niveaux permettant d’obtenir un rendement constant maximal compte tenu des caractéristiques biologiques.
              </p>
              <p>
              15.1 : D’ici à 2020, garantir la préservation, la restauration et l’exploitation durable des écosystèmes terrestres et des écosystèmes d’eau douce et des services connexes, en particulier les forêts, les zones humides, les montagnes et les zones arides, conformément aux obligations découlant des accords internationaux
              </p>
              <p>
              15.2 : D’ici à 2020, promouvoir la gestion durable de tous les types de forêt, mettre un terme à la déforestation, restaurer les forêts dégradées et accroître considérablement le boisement et le reboisement au niveau mondial
              </p>
              <Image
                id="logo-odd"
                src="/resources/odd_MAT.png"
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
            <b>Grandeur mesurée : </b>  Quantité extraite de matières premières (en kg)
          </p>
          <p>
          Familles de matières premières :
          </p>
          <ul>
            <li>Biomasse</li>
            <li>Minerais métalliques</li>
            <li>Minerais non métalliques</li>
            <li>Matières fossiles</li>

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
          Les données disponibles sont ventilées par branche économique (NACE-Rev.2).
          </p>
          <p>
          Elles sont obtenues à partir des apports directs 
          (extractions intérieures et importations) à l'échelle nationale et 
          de la répartition de la consommation de matières premières par produits 
          (nomenclature CPA) à l'échelle européenne. 
          La consommation de matières est directement associée à la production des 
          branches économiques via la classification des produits (alignés sur la noméclature des activités).         
          </p>
          <p>
          L’intervalle de confiance associé à l’utilisation des valeurs statistiques est de 1000 %.
          </p>
          <p>
          Données EUROSTAT : <a href="https://appsso.eurostat.ec.europa.eu/nui/show.do?dataset=env_ac_mfa&lang=fr">Comptes de flux de matières</a> , <a href="https://appsso.eurostat.ec.europa.eu/nui/show.do?dataset=env_ac_rmefd&lang=fr">Comptes de flux de matières en équivalent matières premières par consommation finale de produits - modélisation</a>
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
              <a href="https://www.ecologie.gouv.fr/productivite-des-ressources">
              La productivité des ressources
              </a>
            </li>
          </ul>
        </Container>
      </section>
  </>  )
}

export default mat
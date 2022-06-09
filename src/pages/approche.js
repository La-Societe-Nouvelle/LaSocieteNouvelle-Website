import React from 'react';
import { Helmet } from 'react-helmet';


import metaData from '../lib/metaData';
import { Container, Row, Col, Accordion } from 'react-bootstrap';

const first_set_indics = ["eco", "art", "knw", "soc", "dis", "geq"];
const second_set_indics = ["ghg", "nrg", "wat", "was", "mat", "haz"];

const impacts_euro = [
  "5400 kJ d'énergie",
  "17.4 L d'eau",
  "158 gCO2e de gaz à effet de serre",
  "78% de production française"
]

export default function Home() 
{
  return (
    <>
      <Helmet>
        <title>La société Nouvelle | Empreinte sociale de l'entreprise</title>
      </Helmet>

      <main className="main">
        <Container>
          <section className='bg-primary'>
            <h2 className="section-title text-center">Empreinte Sociétale de l'Entreprise</h2>
            <Row className='align-items-center'>
              <Col>
                <p>
                L’Empreinte Sociétale de l’Entreprise (ESE) est un panel d’indicateurs extra-financiers sociaux et environnementaux relatif à la production vendue d’une entreprise. Elle exprime sur des dimensions sociales et environnementales (émissions de gaz à effet de serre, écart de rémunérations femmes/hommes, consommation d’eau, etc.) les impacts d’un euro de production vendue.
                </p>
                <p>    
L’Empreinte Sociétale complète ainsi une approche RSE, en ciblant des enjeux communs sur lesquels chaque entreprise doit rendre compte de son impact (même s’il ne s’agit pas d’un enjeu majeur pour elle).
                </p>
              </Col>
              <Col>
                <div id="empreinte-societale-illustration">
                  <Ese_scrolling_informations />
                  <img id="icon-euro" src="/images/coin-brf-1-white.png" alt="icon-euro" />
                  <svg id="empreinte-societale-traits" viewBox="0 0 200 100">
                    <line id="trait-diagonal" x1="125" y1="35" x2="150" y2="10" />
                    <line id="trait-horizontal" x1="150" y1="10" x2="200" y2="10" />
                  </svg>
                </div>
              </Col>
            </Row>
          </section>

          <section>
            <h2>Les indicateurs</h2>
            <p>
            Aujourd’hui le panel comprend 12 indicateurs : 6 indicateurs socio-économiques et 6 indicateurs environnementaux. Le choix des indicateurs s’appuient sur les 17 Objectifs de Développement Durable émis par l’ONU (Organisation des Nations Unies) en 2015, pour l’horizon 2030. Les indicateurs sont évolutifs – ajout, modification de la définition, retrait – pour cibler les enjeux critiques et pertinents à l’échelle de l’entreprise. Un comité de gouvernance des indicateurs est en cours de constitution.
            </p>
            <div className="title-with-side-lines">
              <h2 className="titre-section">Indicateurs socio-économiques</h2>
            </div>
            <IndicatorsPanel indics={first_set_indics} />
          </section>

          <section>
            <div className="title-with-side-lines">
              <h2 className="titre-section">Indicateurs environnementaux</h2>
            </div>
            <IndicatorsPanel indics={second_set_indics} />
          </section>

          <section>
            <div className="title-with-side-lines">
              <h2 className="titre-section">Principe de calcul</h2>
            </div>
              <img id="graph-donut" src="/images/graphique-donut-1.jpg" className="img-fluid mx-auto d-block" alt="graphique" />
          </section>

          <section id="section-ressources">
            <div className="title-with-side-lines">
              <h2 className="titre-section">A votre disposition</h2>
            </div>
            <Row>
              <Col >
                <div className="bloc v-group white p-4">
                  <img  id="icon-documentation" src="/images/document.png" alt="icon-documentation" />
                  <h3 className="titre-bloc">Documentation</h3>
                  <a className="btn btn-primary" href="https://docs.lasocietenouvelle.org" target="_blank">Accéder à la ressource</a>
                </div>
              </Col>
              <Col >
                <div className="bloc v-group white p-4">

                  <img  id="icon-database" src="/images/database.png" alt="icon-database" />
                  <h3 className="titre-bloc">Base de données</h3>
                  <a className="btn btn-primary" target="_blank"
                    href="https://api.lasocietenouvelle.org"
                  >Accéder à la ressource</a>
                </div>
              </Col>
              <Col >
                <div className="bloc v-group white p-4">
                  <img  id="icon-webapp" src="/images/web-development.png" alt="icon-webapp" />
                  <h3 className="titre-bloc">Application web</h3>
                  <a className="btn btn-primary"
                    href='https://metriz.lasocietenouvelle.org' target="_blank"
                  >Accéder à la ressource</a>
                </div>
              </Col>
            </Row>
          </section>

          {/* <div className="section">
          <h1 className="titre-section">Partenaires</h1>
          <div className="h-group logos-partners">
            <img className="logo-partner" id="logo-easi" src="/images/logo-easi-1.png" alt="logo-easi"/>
            <img className="logo-partner" id="logo-te" src="/images/logo-te-1.png" alt="logo-te"/>
            <img className="logo-partner" id="logo-valoxy" src="/images/logo-valoxy-1.png" alt="logo-valoxy"/>
          </div>
        </div> */}
        </Container>
      </main>


    </>
  )
}

const Ese_scrolling_informations = () => {
  const [indexContent, setIndexContent] = React.useState(0);
  const updateText = () => { setIndexContent((indexContent + 1) % (impacts_euro.length)) }

  setTimeout(updateText, 3000)

  return (
    <p>
      {impacts_euro[indexContent]}
    </p>)
}

const IndicatorsPanel = (props) => 
{
  const [selectedIndic, setSelectedIndic] = React.useState(props.indics[0]); // or "none"

  const indics = props.indics;
  const listOdds = props.indics.map((indic) => metaData[indic].odds)
    .reduce((a, b) => a.concat(b), [])
    .filter((value, index, self) => index === self.findIndex(item => item === value))
    .sort();
  const icon = indics.includes("eco") ? "social-brf-1-blue.png" : "environnement-brf-1-blue.png";

  return (
    <Row className="indicator-section">
      <Col lg={8}>
        <Accordion flush defaultActiveKey={0}>
          {indics.map((indic, index) =>
            <Accordion.Item eventKey={index} key={index} onClick={() => setSelectedIndic(indic)} >
              <Accordion.Header> {metaData[indic].libelle}</Accordion.Header>
              <Accordion.Body>
                {selectedIndic == "none" ? <img className="default-icon" id="icon" src={"/images/" + icon} alt="icon" /> : <IndicatorDetails indic={selectedIndic} />}
              </Accordion.Body>
            </Accordion.Item>
          )}
        </Accordion>
      </Col>
      <Col lg={4}>
        <div className="icons-odd">
          {listOdds.map((odd, index) => <img key={index} className={"icon-odd" + (selectedIndic != "none" && metaData[selectedIndic].odds.includes(odd) ? "" : " not-concerned")} id={"icon-odd-" + odd} src={"/images/icon-odd-" + odd + ".png"} alt="icon-odd" />)}
        </div>
      </Col>
    </Row>
  )
}

const IndicatorDetails = ({ indic }) => 
{
  return (
    <div className="indicators-panel-details">
      <p><b>Description : </b>{metaData[indic].description}</p>
      <p><b>Finalité : </b>{metaData[indic].finalite}</p>
      <p><b>Impact direct mesuré : </b>{metaData[indic].descriptionImpactDirect}</p>
    </div>)
}

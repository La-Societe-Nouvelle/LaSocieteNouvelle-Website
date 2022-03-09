import React from 'react';
import { Helmet } from 'react-helmet';

import Head from 'next/head'
// Components
import Header from '../src/components/header'
import Footer from '../src/components/footer'

import metaData from '../lib/metaData';

const first_set_indics = ["eco", "art", "knw", "soc", "dis", "geq"];
const second_set_indics = ["ghg", "nrg", "wat", "was", "mat", "haz"];

const impacts_euro = [
  "5400 kJ d'énergie",
  "17.4 L d'eau",
  "158 gCO2e de gaz à effet de serre",
  "78% de production française"
]

export default function Home() {

  return (
    <div className="container">
      <Helmet>
        <title>La société Nouvelle | Empreinte sociale de l'entreprise</title>
      </Helmet>
      <Header />

      <main className="main">

        <div className="section">

          <div className="bloc blue">
            <h1 className="titre-bloc">Empreinte Sociétale de l'Entreprise</h1>
            <div className="h-group">
              <div className="v-group with-white-border" id="empreinte-societale-description">
                <p className="center">L’Empreinte Sociétale est un <b>Panel d’Indicateurs</b> qui rend compte des <b>impacts d’un euro de production vendue</b>, sur des dimensions sociales et environnementales clefs.</p>
              </div>
              <div id="empreinte-societale-illustration">
                <Ese_scrolling_informations />
                <img id="icon-euro" src="/images/coin-brf-1-white.png" alt="icon-euro" />
                <svg id="empreinte-societale-traits" viewBox="0 0 200 100">
                  <line id="trait-diagonal" x1="125" y1="35" x2="150" y2="10" />
                  <line id="trait-horizontal" x1="150" y1="10" x2="200" y2="10" />
                </svg>
              </div>
            </div>
          </div>

        </div>

        <div className="section">
          <div className="title-with-side-lines">
            <h2 className="titre-section">Indicateurs socio-économiques</h2>
          </div>
          <IndicatorsPanel indics={first_set_indics} />
        </div>

        <div className="section">
          <div className="title-with-side-lines">
            <h2 className="titre-section">Indicateurs environnementaux</h2>
          </div>
          <IndicatorsPanel indics={second_set_indics} />
        </div>

        <div className="section">
          <div className="title-with-side-lines">
            <h2 className="titre-section">Principe de calcul</h2>
          </div>
          <div className="bloc gray">
            <img id="graph-donut" src="/images/graphique-donut-1.png" alt="icon" />
          </div>
        </div>

        <div className="section" id="section-ressources">
          <div className="title-with-side-lines">
            <h2 className="titre-section">A votre disposition</h2>
          </div>
          <div className="h-group">
            <div className="bloc v-group white">
              <img className="main-icon" id="icon-documentation" src="/images/document.png" alt="icon-documentation" />
              <h3 className="titre-bloc">Documentation</h3>
              <button className="small"  onClick={() => window.open('https://lasocietenouvelle.notion.site/METRIZ-GUIDE-D-UTILISATION-ce7af947e69e47b1a3f90697374ad80b')}>Accéder à la ressource</button>
            </div>
            <div className="bloc v-group white">
              <img className="main-icon" id="icon-database" src="/images/database.png" alt="icon-database" />
              <h3 className="titre-bloc">Base de données</h3>
              <button className="small" onClick={() => window.open('https://api.lasocietenouvelle.org')}>Accéder à la ressource</button>
            </div>
            <div className="bloc v-group white">
              <img className="main-icon" id="icon-webapp" src="/images/web-development.png" alt="icon-webapp" />
              <h3 className="titre-bloc">Application web</h3>
              <button className="small" onClick={() => window.open('https://metriz.lasocietenouvelle.org')}>Accéder à la ressource</button>
            </div>
          </div>
        </div>

        {/* <div className="section">
          <h1 className="titre-section">Partenaires</h1>
          <div className="h-group logos-partners">
            <img className="logo-partner" id="logo-easi" src="/images/logo-easi-1.png" alt="logo-easi"/>
            <img className="logo-partner" id="logo-te" src="/images/logo-te-1.png" alt="logo-te"/>
            <img className="logo-partner" id="logo-valoxy" src="/images/logo-valoxy-1.png" alt="logo-valoxy"/>
          </div>
        </div> */}

      </main>

      <Footer />

    </div>
  )
}

const Ese_scrolling_informations = () => {
  const [indexContent, setIndexContent] = React.useState(0);
  const updateText = () => { setIndexContent((indexContent + 1) % (impacts_euro.length)) }

  setTimeout(updateText,3000)

  return (<p>{impacts_euro[indexContent]}</p>)
}

const IndicatorsPanel = (props) => {
  const [selectedIndic, setSelectedIndic] = React.useState(props.indics[0]); // or "none"

  const indics = props.indics;
  const listOdds = props.indics.map((indic) => metaData[indic].odds)
    .reduce((a, b) => a.concat(b), [])
    .filter((value, index, self) => index === self.findIndex(item => item === value))
    .sort();
  const icon = indics.includes("eco") ? "social-brf-1-blue.png" : "environnement-brf-1-blue.png";

  return (
    <div className="indicator-section">
      <div className="h-group icons-odd">
        {listOdds.map((odd) => <img className={"icon-odd" + (selectedIndic != "none" && metaData[selectedIndic].odds.includes(odd) ? "" : " not-concerned")} id={"icon-odd-" + odd} src={"/images/icon-odd-" + odd + ".png"} alt="icon-odd" />)}
      </div>
      <div className="h-group nogap">
        <div className="indicators-panel-view">
          {selectedIndic == "none" ? <img className="default-icon" id="icon" src={"/images/" + icon} alt="icon" /> : <IndicatorDetails indic={selectedIndic} />}
        </div>
        <div className="indicators-panel-list">
          {indics.map((indic) =>
            <p className={indic == selectedIndic ? "highlighted" : ""}
              onClick={() => setSelectedIndic(indic)}>
              {metaData[indic].libelle}
            </p>)}
        </div>
      </div>
    </div>
  )
}

const IndicatorDetails = ({ indic }) => {
  return (
    <div className="indicators-panel-details">
      {/* <h3>{metaData[indic].libelle}</h3> */}
      <p><b>Description : </b>{metaData[indic].description}</p>
      <p><b>Finalité : </b>{metaData[indic].finalite}</p>
      <p><b>Impact direct mesuré : </b>{metaData[indic].descriptionImpactDirect}</p>
    </div>)
}

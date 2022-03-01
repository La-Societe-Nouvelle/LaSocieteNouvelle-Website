import Head from 'next/head'
// Components
import Header from '../src/components/header'
import Footer from '../src/components/footer'
// Modules
import React from 'react';

import content from '../public/articles.json';

export default function Home() {

  return (
    <div className="container">
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />

      <Head>
        <title>La Société Nouvelle</title>
        <link rel="icon" href="/resources/logo_miniature.jpg" />
      </Head>

      <Header/>

      <main className="main">

        <div className="section">

          <div className="bloc blue h-group" id="chiffres-clefs">
            <div className="chiffre-clef">
              <img className="chiffre-clef-icone" id="icon-coins" src="/images/coins-brf-1-white.png" alt="icon-coins"/>
              <div className="chiffre-clef-valeur">
                <p>2 054</p>
                <span>Mrd €</span>
              </div>
              <p className="chiffre-clef-libelle">Production intérieure - France (2020)</p>
            </div>
            <div className="chiffre-clef">
              <img className="chiffre-clef-icone" id="icon-co2" src="/images/co2-brf-1-white.png" alt="icon-co2"/>
              <div className="chiffre-clef-valeur">
                <p>153</p>
                <span>gCO2e/€</span>
              </div>
              <p className="chiffre-clef-libelle">Intensité d'émission de gaz à effet de serre</p>
            </div>
            <div className="chiffre-clef">
              <img className="chiffre-clef-icone" id="icon-scales" src="/images/scale-brf-1-white.png" alt="icon-scales"/>
              <div className="chiffre-clef-valeur">
                <p>17.9</p>
                <span>%</span>
              </div>
              <p className="chiffre-clef-libelle">Ecart de rémunération F/H</p>
            </div>
          </div>

        </div>

        <div className="section h-group">
          
          <div className="bloc">
            <h2 className="titre-bloc">Actualités</h2>
            <div className="bloc-actualites">
              {content.blog.map((articleData) => <Vignette {...articleData}/>)}
            </div>
          </div>
          
          <div className="bloc" id="quick-access_container">
            <h2 className="titre-bloc">Accès rapide</h2>
            <div className="v-group">
              <div className="box"
                    onClick={() => window.open('https://lasocietenouvelle.notion.site/METRIZ-GUIDE-D-UTILISATION-ce7af947e69e47b1a3f90697374ad80b')}>
                <p>Ressources</p>
              </div>
              <div className="box"
                    onClick={() => window.open('/portail')}>
                <p>Données</p>
              </div>
              <div className="box"
                    onClick={() => window.open('https://metriz.lasocietenouvelle.org')}>
                <p>Outil</p>
              </div>
            </div>
          </div>

        </div>

        <div className="section">

          <h2 className="titre-section">Indicateurs clefs</h2>
          <div className="bloc gray">

          </div>

        </div>

      </main>

      <Footer/>

    </div>
  )
}

const Vignette = (props) =>
  <div className="vignette">
    <h3>{props.titre}</h3>
    <p>Publié le {props.date}</p>
    <p>{props.accroche}</p>
    <p>{props.texte}..</p>
  </div>

import Head from 'next/head'
import Header from '../pages/header.js'
import Footer from '../pages/footer.js'

var React = require('react');

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

        <div id="head-accueil">
          <h2 id="head-accueil-h4" className="head-accueil-item">
            Système d'Information extra-financière
          </h2>
          <h2 id="head-accueil-h2" className="head-accueil-item">
            Faire évoluer la comptabilité
          </h2>
          <h2 id="head-accueil-h3" className="head-accueil-item">
            Construire une économie durable
          </h2>
        </div>

        <div id="front-page">

          <img id="logo-accueil" src="/resources/logo.jpg" alt="logo"/>
          <div id="texte-logo-accueil">
            <h1 id="titre-logo-accueil">
            LA SOCIETE NOUVELLE
            </h1>
            <p>
            Working for an OpenEconomy
            </p>
          </div>

        </div>

      </main>

      <Footer/>

    </div>
  )
}

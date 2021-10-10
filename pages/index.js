import Head from 'next/head'
// Components
import Header from '../src/components/header'
import Footer from '../src/components/footer'
// Modules
import React from 'react';

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
          <h2 className="head-accueil-item">Système d'Information et de Comptabilité extra-financière.</h2>
          <h2 className="head-accueil-item-highlight">Base de données ouverte.</h2>
          <h2 className="head-accueil-item-highlight">Application web open source.</h2>
        </div>

        <div id="front-page">
          <img id="logo-accueil" src="/resources/logo.jpg" alt="logo"/>
          <div id="texte-logo-accueil">
            <h1 id="titre-logo-accueil">LA SOCIETE NOUVELLE</h1>
          </div>
        </div>

      </main>

      <Footer/>

    </div>
  )
}

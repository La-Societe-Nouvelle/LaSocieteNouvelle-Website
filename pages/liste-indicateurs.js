import React from 'react';

import Head from 'next/head'
// Components
import Header from '../src/components/header'
import Footer from '../src/components/footer'

import metaData from '../lib/metaData';

export default function Home() {
  
  return (
    <div className="container">

      <Head>
        <title>La Société Nouvelle | Empreinte Sociétale de l'Entreprise</title>
        <link rel="icon" href="/resources/logo_miniature.jpg" />
      </Head>

      <Header/>

      <main className="main">

        {metaData.indics.map((indic) =>
          <div className="section bloc white"
               onClick={() => window.open('/indicateur/'+indic)}>
            <h1 className="titre-section">{metaData[indic].libelle}</h1>
          </div>)}

      </main>

      <Footer/>
      
    </div>
  )
}
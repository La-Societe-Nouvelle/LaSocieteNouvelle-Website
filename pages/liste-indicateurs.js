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

        <div className="section bloc">
          <ul id="liste-indicateurs">
            {
              metaData.indics.map((indic) => <li onClick={() => window.open('/indicateur/'+indic)}>{metaData[indic].libelle}</li>)
            }
          </ul>
        </div>

      </main>

      <Footer/>
      
    </div>
  )
}
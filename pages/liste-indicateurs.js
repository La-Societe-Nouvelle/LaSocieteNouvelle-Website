import React from 'react';

import Head from 'next/head'
// Components
import Header from '../src/components/header'
import Footer from '../src/components/footer'

import metaData from '../lib/metaData';

export default function Home() {
  
  return (
    <div className="container">
      <Header/>

      <main className="main">

        <div className={"section bloc"}>
          <h2 className={"titre"}>Liste des indicateurs</h2>
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
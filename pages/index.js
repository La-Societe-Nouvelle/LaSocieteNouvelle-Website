import Head from 'next/Head'
import Header from '../pages/header.js'
import styles from '../styles/Home.module.css'

var React = require('react');

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>La Société Nouvelle</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header/>

      <main className={styles.main}>

        <div id="head-accueil">
          <h2 className="head-accueil">
            Système d'Information extra-financière
          </h2>
          <h2 className="head-accueil">
            Faire évoluer la comptabilité
          </h2>
          <h2 id="head-accueil-h3" className="head-accueil">
            Construire une économie durable
          </h2>
        </div>

        <img id="logo-accueil" src="/resources/logo.jpg" alt="logo"/>
        <h1 id="titre-logo-accueil" className={styles.title}>
          LA SOCIETE NOUVELLE
        </h1>
        <p>
          Working for an OpenEconomy
        </p>

      </main>

      <footer className={styles.footer}>
        <a>
          <p>
            Bas de Page
          </p>
        </a>
      </footer>
      
    </div>
  )
}

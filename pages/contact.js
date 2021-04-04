import Head from 'next/Head'
import Header from '../pages/header.js'
import Footer from '../pages/footer.js'
import styles from '../styles/Home.module.css'

var React = require('react');

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>La Société Nouvelle</title>
        <link rel="icon" href="/resources/logo_miniature.jpg" />
      </Head>

      <Header/>

      <main className={styles.main}>

        <h1>
        Formulaire de contact
        </h1>

        <div id="strip-form" className="strip">
          <div className="form">
            <div className="form-item">
              <label>
              Objet
              </label>
              <input id="objet-input" type="text"/>
            </div>
            <div className="form-item">
              <label>
              Message
              </label>
              <textarea id="message-input" type="text"/>
            </div>
            <div className="form-item">
              <label>
              Vos coordonnées
              </label>
              <textarea id="coordonnees-input" type="text"/>
            </div>
            <button id="submit-form">Envoyer le message</button>
          </div>
        </div>

      </main>

      <Footer/>

    </div>
  )
}

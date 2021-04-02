import Head from 'next/Head'
import Header from '../pages/header.js'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>La Société Nouvelle | Mentions légales</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header/>

      <main id="mentions-legales" className={styles.main}>

        <h1 className={styles.title}>
          Mentions légales
        </h1>

        <div id="mentions-societe" className="strip">
          <h2>
          La Société Nouvelle
          </h2>
          <p>
          SAS au capital de 1000 €<br/>
          Siège social : 31/33 rue Adolphe 59000 LILLE<br/>
          SIREN : 889 182 770<br/>
          Responsable : Sylvain HUMILIERE<br/>
          Contact : sylvain.humiliere@la-societe-nouvelle.fr<br/>
          </p>
        </div>

        <div id="mentions-hebergement" className="strip">
          <h2>
          Hébergement
          </h2>
          <p>
          Publication prévue le 06/04/2021
          </p>
        </div>

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

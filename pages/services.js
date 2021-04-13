import Head from 'next/head'
import Header from './header.js'
import Footer from './footer.js'
import styles from '../styles/Home.module.scss'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>La Société Nouvelle | Services disponibles</title>
        <link rel="icon" href="/resources/logo_miniature.jpg" />
      </Head>

      <Header/>

      <main className={styles.main}>

        <h1>
        Services disponibles
        </h1>

        <div id="services-strip">
          <ul id="services">
            <li className="services-item">
              <h3>Accès aux données</h3>
              <p>Les données sont accessibles librement via le portail web ou l'API. Elles peuvent ainsi être directement intégrées au sein de votre ERP, SME ou logiciel de comptabilité.</p>
              <p>Les requêtes se font via le numéro de siren (clef primaire). Un service de recherche par dénomination est également disponible.</p>
              <p>
                <a href="http://api.lasocietenouvelle.org" target="_blank">Lien vers l'API</a><br/>
                <a href="../documentation-api" target="_blank">Lien vers la documentation</a>
              </p>
            </li>
            <li className="services-item">
              <h3>Mesure des indicateurs</h3>
              <p>L'ensemble des documentations, outils et autres supports pour la mesure des indicateurs sont mis à disposition librement. (cf. Ressources)</p>
              <p>Les informations relatives aux indicateurs (description, données par défaut, etc.) sont disponibles à partir de la page Empreinte Sociétale.</p>
              <p>Nous proposons également un service d'audit pour la mesure des indicateurs</p>
            </li>
            <li className="services-item">
              <h3>Publication des indicateurs</h3>
              <p>Le coût de la formalité de publication est libre*.</p>
              <p>Nous préconisons une publication annuelle des données à chaque fin d'exercice. Une fois publiées, les données sont modifiables sur simple demande (pour un même exercice).</p>
              <p>*Les frais de publication permettent de financer l'hébergement, la maintenance et le développement de la base de données.</p>
            </li>
          </ul>
        </div>

        <div id="remaining-space"></div>

      </main>

      <Footer/>

    </div>
  )
}

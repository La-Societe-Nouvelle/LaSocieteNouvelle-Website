import Head from 'next/head'
import Header from './header.js'
import Footer from './footer.js'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>La Société Nouvelle | Services disponibles</title>
        <link rel="icon" href="/resources/logo_miniature.jpg" />
      </Head>
      <Header/>
      <main className="main">

        <h1>Choix de déclaration</h1>

        <div id="services-strip" className="strip">
          <ul id="services-publication">
            <li id="declaration" className="services-item">
              <h3>Déclaration complète</h3>
              <p>Pour tout ou une partie des indicateurs de l'Empreinte Sociétale, renseignez la valeur relative à votre dernier exercice comptable et son incertitude.</p>
              <p>
                <a className="text-link" href="empreinte-societale" target="_blank">Présentation des indicateurs</a><br/>
                <a className="text-link" href="guide" target="_blank">Guide méthodologique</a><br/>
                <a className="text-link" href="ressources" target="_blank">Ressources</a>
              </p>
              <p></p>
              <a  href="/publication" className="button">Formulaire de déclaration</a>
            </li>
            <li id="declaration-simplifiee" className="services-item">
              <h3>Déclaration simplifiée</h3>
              <p>Renseignez vos impacts directs pour ajuster les valeurs de l'Empreinte Sociétale de votre entreprise.</p>
              <p>Démarche simple et rapide. Les incertitudes liées aux valeurs peuvent cependant être élevées en raion de l'analyse incomplète.</p>
              <a href="/publication-simplifiee" className="button">Formulaire de déclaration</a>
            </li>
          </ul>
        </div>

      </main>
      <Footer/>
    </div>
  )
}
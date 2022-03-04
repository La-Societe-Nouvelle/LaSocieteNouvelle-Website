import Head from 'next/head'
import Header from '../src/components/header.js'
import Footer from '../src/components/footer.js'
import { Helmet } from 'react-helmet';


export default function Home() {
  return (
    <div className="container">
      <Helmet>
        <title>La société Nouvelle | Services disponibles </title>
      </Helmet>
      <Header />

      <main className="main">

        <h1>Services disponibles</h1>

        <div id="services-strip" className="strip">
          <ul id="services">
            <li id="declaration" className="services-item">
              <h2>Déclaration</h2>
              <p>Publiez les valeurs de l'Empreinte Sociétale de votre entreprise.</p>
              <a href="/publication" className="button">Accès au Formulaire</a>
            </li>
            <li id="mesure-indicateurs" className="services-item">
              <h2>Mesure</h2>
              <p>Calculez les indicateurs de l'Empreinte Sociétale de votre entreprise.</p>
              <a className="button" href="http://metriz.lasocietenouvelle.org" target="_blank">Accès à l'Application</a>
            </li>
            <li id="acces-donnees" className="services-item">
              <h2>Accès aux données</h2>
              <p>Accédez et exploitez librement les données via notre API. </p>
              <a href="http://api.lasocietenouvelle.org" target="_blank" className="button">Accès à l'API</a>
            </li>
          </ul>
        </div>

      </main>

      <Footer />

    </div>
  )
}

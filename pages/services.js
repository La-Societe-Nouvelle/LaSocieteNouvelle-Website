import Head from 'next/head'
import Header from '../src/components/header.js'
import Footer from '../src/components/footer.js'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>La Société Nouvelle | Services disponibles</title>
        <link rel="icon" href="/resources/logo_miniature.jpg" />
      </Head>

      <Header/>

      <main className="main">

        <h1>Services disponibles</h1>

        <div id="services-strip" className="strip">
          <ul id="services">
            <li id="declaration" className="services-item">
              <h2>Déclaration</h2>
              <p>Publiez les valeurs de l'Empreinte Sociétale de votre entreprise.</p>
              <a  href="/publication" className="button">Accès au Formulaire</a>
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
{/*
        <div id="services-partenaires-strip" className="strip">
          <h1>Partenaires</h1>
          <div className="partenaires">
            <img src="/resources/mestawet-logo.jpg" alt="mestawet-logo"/>
            <div className="partenaire-box">
              <p className="partenaire-title">MESTAWET</p>
              <p className="partenaire-presentation">
              Mestawet accompagne les entreprises pour développer des projets à impact positif.<br/>
              La méthode s’appuie sur 4 piliers :<br/>
              - Identifier (Assessment BCorp, Empreinte Sociétale, etc.)<br/>
              - Eclairer : inspirer, montrer les choses qui fonctionnent ailleurs, autour de soi<br/>
              - Concevoir : passer à l’action et tester des choses<br/>
              - Développer : faire grandir les projets, passer à l’échelle<br/>
              </p>
              <p><a href="https://www.mestawet.fr" target="_blank">www.mestawet.fr</a></p>
            </div>
          </div>
        </div>
*/}
      </main>

      <Footer/>

    </div>
  )
}

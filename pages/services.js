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
          <div id="services">
            <div id="declaration" className="services-item">
              <h3 className="serviceTitle">Déclaration</h3>
              <p className="serviceDesc">Publiez les valeurs de l'Empreinte Sociétale de votre entreprise.</p>
              <a  href="/publication" className="button">Formulaire de déclaration</a>
            </div>
            <div id="declaration-simplifiee" className="services-item">
              <h3 className="serviceTitle">Mesure</h3>
              <p className="serviceDesc">Calculez votre empreinte sociétale.</p>
              <a href="/publication-simplifiee" className="button">Mesure simplifiée</a>
              <a className="button" href="http://metriz.lasocietenouvelle.org" target="_blank">Mesure complète</a>
            </div>
            <div id="acces-donnees" className="services-item">
              <h3 className="serviceTitle">Accès aux données</h3>
              <p className="serviceDesc">Les données sont accessibles librement via le portail web ou l'API. </p>
              <p className="serviceDesc">
                <a href="../documentation-api" target="_blank">Lien vers la documentation</a>
              </p>
              <a href="http://api.lasocietenouvelle.org" target="_blank" className="button">Accès à l'API</a>
            </div>
          </div>
        </div>

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

      </main>

      <Footer/>

    </div>
  )
}

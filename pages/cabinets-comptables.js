import Head from 'next/head'
// Components
import Header from '../src/components/header'
import Footer from '../src/components/footer'

export default function Home() {
  return (
    <div className="container">

      <Head>
        <title>La Société Nouvelle | Empreinte Sociétale de l'Entreprise</title>
        <link rel="icon" href="/images/logo-lsn-header.png" />
      </Head>

      <Header page="cabinets-comptables"/>

      <main className="main">

        <div className="section">

          <div className="bloc blue">
            <h2 className="titre-bloc">Vous êtes un acteur de la comptabilité</h2>
            <div className="h-group">
              <div>
                <p>
                  Complétez les livrables comptables à destination de vos clients.
                </p>
                <p>
                  " Tout compréhension de l'entreprise passe par sa comptabilité. Or les enjeux sociaux
                  et environnementaux qui doivent être considérés en sont absents " - Rapport <i>Entreprise
                  et intérêt général</i>, Nicolas NOTAT et Dominique SENARD
                </p>
                <p>
                  La comptabilité actuelle ne permet pas de 
                </p>
              </div>
              <div>
                <img id="img-screen-video" src="/images/team_working.png" alt="img-screen-video"/>
              </div>
            </div>
          </div>

        </div>

        <div className="section">

          <h2>La mesure des indicateurs permet à vos clients de : </h2>
          <div className="wrapper">

            <div className="v-group one">
              <h3>Prendre conscience</h3>
              <img id="icon-light" src="/images/icon-light.png" alt="icon-light"/>
              <p>de leurs impacts à l'échelle de leurs activités / Être sensibilisé à la mesure des impacts de leurs activités</p>
            </div>

            <div className="v-group two">
              <h3>Suivre et valoriser</h3>
              <img id="icon-valorise" src="/images/icon-valorise.png" alt="icon-valorise"/>
              <p>leur performance extra-financière</p>
            </div>

            <div className="v-group three">
              <h3>Se positionner</h3>
              <img id="icon-position" src="/images/icon-position.png" alt="icon-position"/>
              <p>par rapport aux objectifs de développement durable</p>
            </div>

            <div className="v-group four">
              <h3>Anticiper</h3>
              <img id="icon-anticipate" src="/images/icon-anticipate.png" alt="icon-anticipate"/>
              <p>de potentiels risques</p>
            </div>
          </div>

        </div>

        <div className="section">
          <div className="bloc gray">
            <h1>Un outil de calcul open source à votre disposition</h1>
            <div className="h-group">
              <div className="v-group">
                <img id="img-screen-webapp" src="/images/img-screen-webapp.png" alt="img-screen-webapp"/>
                <div className="buttons-group">
                  <button>Tester avec la version libre</button>
                </div>
              </div>
              <div className="v-group">
                <p>Devenez partenaire et bénéficiez d'une version spécifique à votre disposition</p>
                <ul>
                  <li>Maintenance évolutive</li>
                  <li>Assistance</li>
                  <li>Personnalisation de vos livrables</li>
                  <li>Ajustements à vos fichiers internes</li>
                </ul>
                <div className="buttons-group">
                  <button>Demander une démonstration</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="section">
          <div className="bloc gray">
            <h1>Fonctionnement de l'Application</h1>
          </div>
        </div>        

      </main>


      <Footer/>
      
    </div>
  )
}
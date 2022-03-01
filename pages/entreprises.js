import Head from 'next/head'
// Components
import Header from '../src/components/header'
import Footer from '../src/components/footer'

export default function Home() {
  return (
    <div className="container">

      <Head>
        <title>La Société Nouvelle | Empreinte Sociétale de l'Entreprise</title>
        <link rel="icon" href="/resources/logo_miniature.jpg" />
      </Head>

      <Header page="entreprises"/>

      <main className="main">

        <div className="section h-group">
          <div className="bloc blue">

            <div className="h-group">
              <div>
                <h2>Pilotez et valorisez votre performance extra-financière</h2>
                <p>L’Empreinte Sociétale est un <b>Panel d’Indicateurs</b> qui rend compte des <b>impacts d’un euro de production vendue</b>, sur des dimensions sociales et environnementales clefs.</p>
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
            <h1>Comment mesurer ces indicateurs pour mon entreprise ?</h1>
            <div className="h-group">
              <div>
                <p>L'outil permet de faire le lien entre votre FEC (Fichier d'Ecritures Comptables), les données disponibles au sein de notre base de données ouverte et vos impacts directs pour produire automatiquement des livrables Téléchargeables.</p>
              </div>
              <div className="v-group">
                <img id="img-screen-webapp" src="/images/img-screen-webapp.png" alt="img-screen-webapp"/>
                <div className="buttons-group">
                  <button>Accéder à l'outil</button>
                  <button>Accéder au tutoriel</button>
                </div>
              </div>
            </div>
            <h2>Contactez les cabinets comptables partenaires pour bénéficier de leur expertise</h2>
            <div className="h-group">

            </div>
          </div>
        </div>

        <div className="section">
          <div className="bloc white">
            <h1>Aller plus loin...</h1>
            <div className="h-group">
              <div className="v-group">
                <img id="icon-database" src="/images/icon-database.png" alt="icon-database"/>
                <button>Je consulte mes données</button>
              </div>
              <div className="v-group">
                <img id="icon-publication" src="/images/icon-publication.png" alt="icon-publication"/>
                <button>Je publie mes données</button>
              </div>
              <div className="v-group">
                <img id="icon-publication" src="/images/icon-publication.png" alt="icon-publication"/>
                <button>Je soutiens l'initiative</button>
              </div>
            </div>
          </div>
        </div>     

      </main>

      <Footer/>
      
    </div>
  )
}

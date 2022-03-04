import Head from 'next/head'
// Components
import Header from '../src/components/header'
import Footer from '../src/components/footer'

export default function Home() {
  return (
    <div className="container">

      <Header page="entreprises"/>

      <main className="main">

        <div className="section h-group">
          
          <div className="bloc blue">
            <h1 className="titre-bloc">Pilotez et valorisez votre performance extra-financière</h1>

            <div className="h-group">
              <div>
                <p>
                  Climat, inégalités sociales, raréfaction des ressources naturelles... <b>Les entreprises ont un rôle majeur
                  dans la construction d'une société durable</b>. Il est désormais incontournable pour une entreprise de 
                  prendre en compte ses enjeux clefs s'il elle veut assurer sa pérennité.
                </p>
                <p>
                  Mesurer les impacts de sa valeur ajoutée et de sa valeur produite permet d'évaluer sa capacité à produire
                  de la valeur en limitant ses impacts négatifs, de se positionner vis-à-vis de sa branche d'activités et
                  des objectifs de développement durable fixé.
                </p>
                <p>
                  Les indicateurs permettent d'informer vos clients sur les impacts liés à leurs dépenses et apportent
                  ainsi une véritable transparence.
                </p>
              </div>
            </div>

          </div>
        </div>

        <div className="section">
          <div className="title-with-side-lines">
            <h2 className="titre-section">Principe de calcul</h2>
          </div>
          <div className="bloc gray">
            <img id="graph-donut" src="/images/graphique-donut-1.png" alt="icon"/>
          </div>
        </div>

        <div className="section">
          <div className="title-with-side-lines">
            <h2>La mesure des indicateurs vous permet de : </h2>
          </div>
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
          <div className="title-with-side-lines">
            <h2>Comment mesurer ces indicateurs pour mon entreprise ?</h2>
          </div>
          <div className="bloc gray">
            <div className="h-group">
              <div>
                <p>L'outil permet de faire le lien entre votre FEC (Fichier d'Ecritures Comptables), les données disponibles au sein de notre base de données ouverte et vos impacts directs pour produire automatiquement des livrables Téléchargeables.</p>
              </div>
              <div className="v-group">
                <img id="img-screen-webapp" src="/images/img-screen-webapp.png" alt="img-screen-webapp"/>
                <div className="buttons-group">
                  <button>Accéder à l'outil</button>
                  {/* <button>Accéder au tutoriel</button> */}
                </div>
              </div>
            </div>
            {/* <h2>Contactez les cabinets comptables partenaires pour bénéficier de leur expertise</h2> */}
            <div className="h-group">

            </div>
          </div>
        </div>

        {/* <div className="section">
          <div className="title-with-side-lines">
            <h2 className="titre-section">Les cabinets comptables partenaires</h2>
          </div>
          <div className="h-group logos-partners">
            <img className="logo-partner" id="logo-easi" src="/images/logo-easi-1.png" alt="logo-easi"/>
            <img className="logo-partner" id="logo-te" src="/images/logo-te-1.png" alt="logo-te"/>
            <img className="logo-partner" id="logo-valoxy" src="/images/logo-valoxy-1.png" alt="logo-valoxy"/>
          </div>
        </div> */}

        {/* <div className="section">
          <div className="title-with-side-lines">
            <h2>Aller plus loin...</h2>
          </div>
          <div className="bloc white">
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
        </div>      */}

      </main>

      <Footer/>
      
    </div>
  )
}

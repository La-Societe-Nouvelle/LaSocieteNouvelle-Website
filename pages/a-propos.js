import Head from 'next/head'
import Header from '../src/components/header'
import Footer from '../src/components/footer'

export default function Home() {
  
  return (
    <div className="container">
      
      <Head>
        <title>La Société Nouvelle | A propos</title>
        <link rel="icon" href="/resources/logo_miniature.jpg" />
      </Head>

      <Header/>

      <main className="main">

        <div className="section">
          <div className="bloc blue">
            <h1 className="titre-bloc">Notre mission</h1>
            <div className="h-group">
              <div className="bloc-container">
                <div className="text-container" id="mission-text_container">
                  <p>
                    Notre mission est de fournir, de manière ouverte, les informations nécessaires pour connaître et 
                    <b> mesurer l'empreinte de la production des entreprises sur des enjeux majeurs de développement durable</b>.
                  </p>
                  <p>
                    Elle s'inscrit dans la volonté de faire évoluer le modèle de gestion des entreprises en 
                    intégrant aux éléments comptables une information sur leurs externalités sociales et environnementales.
                  </p>
                  <p>
                    Les documents, outils et autres éléments développés par La Société Nouvelle sont accessibles et 
                    utilisables librement. La base de données est, et restera toujours, ouverte.
                  </p>
                </div>
                <div className="h-group" id="mission-buttons">
                  {/* <button onClick={() => windows.open("/approche")}>Découvrir l'approche</button> */}
                  <button>Nous contacter</button>
                </div>
              </div>
              {/* <div>
                <img id="img-screen-video" src="/images/img-screen-video.png" alt="img-screen-video"/>
              </div> */}
            </div>
          </div>
        </div>

        <div className="section">
          <div className="title-with-side-lines">
            <h2 className="titre-bloc">Gouvernance des indicateurs</h2>
          </div>
          <div className="bloc gray">
            <div className="bloc-container text-container">
              <p>
                Nous travaillons en continu sur les indicateurs disponibles: choix méthodologiques, 
                données utilisées, outils supports, suivi à l'échelle macroéconomique, définition 
                des objectifs, etc. L'ensemble des indicateurs forment l'Empreinte Sociétale de l'Entreprise. 
                La gouvernance a vocation à être externalisée et partagée avec des organismes publics et privés.
              </p>
            </div>
          </div>
        </div>

        <div className="section">
          <div className="title-with-side-lines">
            <h2 className="titre-bloc">Nos activités</h2>
          </div>
          <div className="bloc">
            <div className="h-group" id="nos-activites">
              <div className="v-group">
                <div className="activite">
                  <img id="icon-database" src="/images/bdd-brf-1-blue.png" alt="icon-database"/>
                  <h3>Administration d'une Base de données ouverte</h3>
                  <p>
                    Nous centralisons les données relatives aux indicateurs au sein d'une base de données ouverte accessible via le portail web ou une API pour faciliter l'exploitation des données.
                  </p>
                </div>
                <div className="buttons-group">
                  <button>En savoir plus</button>
                </div>
              </div>
              <div className="v-group">
                <div className="activite">
                  <img id="icon-tool" src="/images/webapp-brf-1-blue.png" alt="icon-tool"/>
                  <h3>Développement d'un outil de calcul Open Source</h3>
                  <p>
                    Nous mettons à disposition des documentations et développons des outils libres pour la mesure des indicateurs.
                    En complément, nous proposons un service de diagnostic pour la mesure des indicateurs.
                  </p>
                </div>
                <div className="buttons-group">
                  <button>En savoir plus</button>
                </div>
              </div>
              <div className="v-group">
                <div className="activite">
                  <img id="icon-support" src="/images/support-brf-1-blue.png" alt="icon-support"/>
                  <h3>Support et Assistance technique</h3>
                  <p>
                    Nous fournissons un support et une assistance technique pour l'application de la méthodologie comptable et 
                    l'utilisation de l'application web.
                  </p>
                </div>
                <div className="buttons-group">
                  <button>En savoir plus</button>
                </div>
              </div>
            </div>
          </div>

        </div>

        <div className="section">
          <div className="title-with-side-lines">
            <h2 className="titre-bloc">Equipe</h2>
          </div>
          <div className="bloc">
            <div className="h-group" id="photos-equipe">
              <div>
                <img id="img-laura" src="/images/img-laura.png" alt="img-laura"/>
                <p className="prenom"><b>Laura</b></p>
                <p className="poste">Développement Web</p>
              </div>
              <div>
                <img id="img-maeva" src="/images/img-maeva.png" alt="img-maeva"/>
                <p className="prenom"><b>Maëva</b></p>
                <p className="poste">Communication</p>
              </div>
              <div>
                <img id="img-sylvain" src="/images/img-sylvain.png" alt="img-sylvain"/>
                <p className="prenom"><b>Sylvain</b></p>
                <p className="poste">Relation partenaires</p>
              </div>
              <div>
                <img id="img-joris" src="/images/img-joris.jpeg" alt="img-joris"/>
                <p className="prenom"><b>Joris</b></p>
                <p className="poste">Statistiques publiques</p>
              </div>
            </div>
          </div>
        </div>

      </main>

      <Footer/>

    </div>
  )
}
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
            <h1>Notre mission</h1>
            <div className="h-group">
              <div id="mission-text_container">
                <p>Notre objectif est de fournir, de manière ouverte, les informations nécessaires pour connaître et mesurer l'empreinte de la production des entreprises sur des enjeux majeurs de développement durable.</p>
                <p>Elle s'inscrit également dans la volonté de faire évoluer le modèle de gestion des entreprises en intégrant aux éléments comptables une information sur leurs externalités sociales et environnementales.</p>
                <p>Les documents, outils et autres éléments développés par La Société Nouvelle sont open source et réutilisables librement. La base de données est, et restera toujours, ouverte.</p>
                <div className="h-group" id="mission-buttons">
                  <button>Approche</button>
                  <button>Nous contacter</button>
                </div>
              </div>
              <div>
                <img id="img-screen-video" src="/images/img-screen-video.png" alt="img-screen-video"/>
              </div>
            </div>
          </div>
        </div>

        <div className="section">
          <div className="bloc gray">
            <h1>Gouvernance des indicateurs</h1>
            <p>Nous travaillons en continu sur les indicateurs disponibles: choix méthodologiques, données utilisées, outils supports, suivi à l'échelle macroéconomique, définition des objectifs, etc. L'ensemble des indicateurs forment l'Empreinte Sociétale de l'Entreprise. La gouvernance a vocation à être externalisée et partagée avec des organismes publics et privés.</p>
          </div>
        </div>

        <div className="section">
          <h1>Nos activités</h1>
          <div className="h-group" id="activities">
            <div className="v-group">
              <div>
                <img id="icon-database" src="/images/icon-database.png" alt="icon-database"/>
                <h2>Administration de la base de données ouverte</h2>
                <p>
                  Nous centralisons les données relatives aux indicateurs au sein d'une base de données ouverte accessible via le portail web ou une API pour faciliter l'exploitation des données.
                  Les données sont fournies par les entreprises, obtenues à partir de publications ou correspondent à des données par défaut issus de travaux statistiques. 
                  Nous travaillonsà enrichir le plus possible la base de données.
                </p>
              </div>
              <div className="buttons-group">
                <button>En savoir plus</button>
              </div>
            </div>
            <div className="v-group">
              <div>
                <img id="icon-tool" src="/images/icon-tool.png" alt="icon-tool"/>
                <h2>Développement d'un outil de calcul open source</h2>
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
              <div>
                <img id="icon-support" src="/images/icon-support.png" alt="icon-support"/>
                <h2>Support et Assistance</h2>
                <p>
                  TEXTE.
                </p>
              </div>
              <div className="buttons-group">
                <button>En savoir plus</button>
              </div>
            </div>
          </div>
        </div>

        <div className="section">
          <h1>L'Equipe</h1>
          <div className="h-group">
            <div>
              <img id="img-laura" src="/images/img-laura.png" alt="img-laura"/>
              <p>laura</p>
              <p>Développeuse Web</p>
            </div>
            <div>
              <img id="img-maeva" src="/images/img-maeva.png" alt="img-maeva"/>
              <p>Maëva</p>
              <p>Développeuse Web</p>
            </div>
            <div>
              <img id="img-sylvain" src="/images/img-sylvain.png" alt="img-sylvain"/>
              <p>Sylvain</p>
              <p>Développeuse Web</p>
            </div>
            <div>
              <img id="img-joris" src="/images/img-joris.jpeg" alt="img-joris"/>
              <p>Joris</p>
              <p>Développeuse Web</p>
            </div>
          </div>
        </div>

      </main>

      <Footer/>

    </div>
  )
}
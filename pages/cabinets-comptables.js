import Head from 'next/head'
// Components
import Header from '../src/components/header'
import Footer from '../src/components/footer'

export default function Home() {
  return (
    <div className="container">
      <Header page="cabinets-comptables"/>

      <main className="main">

        <div className="section">
          
          <div className="bloc blue">
            <h1 className="titre-bloc">Vous êtes un acteur de la comptabilité</h1>
            <div className="h-group">
              <div>
                <p>
                  "Toute compréhension de l'entreprise passe par sa comptabilité. Or les enjeux sociaux
                  et environnementaux qui doivent être considérés en sont absents."
                </p>
                <p>
                  &nbsp;&nbsp; - Rapport <i>Entreprise et intérêt général</i>, Nicolas NOTAT et Dominique SENARD
                </p>
                <p>
                  Face aux enjeux sociaux et environnementaux, il est désormais incontournable de compléter les informations
                  comptables et les indicateurs de performance des entreprises. L'objectif de l'approche que nous poussons
                  et de fournir, sur des dimensions clefs, un positionnement de l'entreprise au regard des objectifs collectifs fixés.
                </p>
                <p>
                  Les cabinets comptables sont les acteurs clefs de la mise en oeuvre de ces indicateurs de par leurs expertises et
                  leur proximité avec les entreprises.
                </p>
                <p>
                  Complétez les livrables comptables à destination de vos clients.
                </p>
              </div>
              <div className="v-group">
                <img id="img-screen-video" src="/images/team_working.png" alt="img-screen-video"/>
              </div>
            </div>
          </div>

        </div>

        <div className="section">
          <div className="title-with-side-lines">
            <h2 className="text-center">Un outil de calcul open source à votre disposition</h2>
          </div>
          <div className="bloc gray">
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
          <div className="title-with-side-lines">
            <h2 className="text-center">Fonctionnement de l'Application</h2>
          </div>
          <div className="bloc">
            <FigureEtapes />
          </div>
        </div>        

      </main>


      <Footer/>
      
    </div>
  )
}

const FigureEtapes = () =>
  <div className="h-group" id="etapes">
    <div className="step-container">
      <h4>Import comptable</h4>
      <p>
        Import des écritures comptables à partir du FEC.
      </p>
      <p className="step-number">1</p>
    </div>
    <div className="step-container">
      <h4>Etats initiaux</h4>
      <p>
        Initialisation de l'empreinte des comptes de stocks et d'immobilisations à partir des résultats 
        de l'exercice précédent ou via l'utilisation de données par défaut.
      </p>
      <p className="step-number">2</p>
    </div>
    <div className="step-container">
      <h4>Numéros de siren</h4>
      <p>
        Association des numéros de siren aux comptes fournisseurs auxiliaires, et récupération des empreintes
        de la valeur produite des fournisseurs.
      </p>
      <p className="step-number">3</p>
    </div>
    <div className="step-container">
      <h4>Impacts directs</h4>
      <p>
        Evaluation et déclaration des impacts directs de l'entreprise. Des outils de calcul sont disponibles pour les indicateurs les plus complexes.
      </p>
      <p className="step-number">4</p>
    </div>
  </div>
import Head from 'next/head'
import { Helmet } from 'react-helmet';

import Header from '../src/components/header'
import Footer from '../src/components/footer'
import { Container , Row, Col} from 'react-bootstrap';

export default function Home() {

  return (
    <>
      <Helmet>
        <title>La société Nouvelle | A propos</title>
      </Helmet>
      <Header />
      <main>
    <Container>
        <section className="bg-primary text-center">
            <h2 className="section-title">Notre mission</h2>
              <div className="bloc-container">
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
                  <a className="btn btn-secondary" href="mailto:contact@lasocietenouvelle.org">Nous contacter</a>
              </div>
              {/* <div>
                <img id="img-screen-video" src="/images/img-screen-video.png" alt="img-screen-video"/>
              </div> */}
        </section>
        <section>
          <div className="title-with-side-lines">
            <h2 className="titre-bloc">Gouvernance des indicateurs</h2>
          </div>
              <p>
                Nous travaillons en continu sur les indicateurs disponibles: choix méthodologiques,
                données utilisées, outils supports, suivi à l'échelle macroéconomique, définition
                des objectifs, etc. L'ensemble des indicateurs forment l'Empreinte Sociétale de l'Entreprise.
                La gouvernance a vocation à être externalisée et partagée avec des organismes publics et privés.
              </p>
        </section>

        <section id="activite">
          <div className="title-with-side-lines">
            <h2 className="titre-bloc">Nos activités</h2>
          </div>
            <Row>
              <Col>
                  <img id="icon-database" src="/images/bdd-brf-1-blue.png" className="w-50" alt="icon-database" />
                  <h3>Administration d'une Base de données ouverte</h3>
                  <p>
                    Nous centralisons les données relatives aux indicateurs au sein d'une base de données ouverte accessible via le portail web ou une API pour faciliter l'exploitation des données.
                  </p>
    
              </Col>
              <Col>
                  <img id="icon-tool" className="w-50" src="/images/webapp-brf-1-blue.png" alt="icon-tool" />
                  <h3>Développement d'un outil de calcul Open Source</h3>
                  <p>
                    Nous mettons à disposition des documentations et développons des outils libres pour la mesure des indicateurs.
                    En complément, nous proposons un service de diagnostic pour la mesure des indicateurs.
                  </p>
         
              </Col>
              <Col>
                <div className="activite">
                  <img id="icon-support" src="/images/support-brf-1-blue.png" className="w-50" alt="icon-support" />
                  <h3>Support et <br/> Assistance technique</h3>
                  <p>
                    Nous fournissons un support et une assistance technique pour l'application de la méthodologie comptable et
                    l'utilisation de l'application web.
                  </p>
                </div>
              </Col>
            </Row>

        </section>

        <section>
          <div className="title-with-side-lines">
            <h2 className="titre-bloc">Equipe</h2>
          </div>
            <Row className='text-center'>
              <Col>
                <img id="img-joris" src="/images/joris.jpg" alt="img-joris" />
                <p className="prenom"><b>Joris</b></p>
                <p className="poste">Statistiques publiques</p>
              </Col>
              <Col>
                <img id="img-laura" src="/images/laura.jpg" alt="img-laura" />
                <p className="prenom"><b>Laura</b></p>
                <p className="poste">Développement Web</p>
              </Col>
              <Col>
                <img id="img-maeva" src="/images/maeva.jpg" alt="img-maeva" />
                <p className="prenom"><b>Maëva</b></p>
                <p className="poste">Communication</p>
              </Col>
              <Col>
                <img id="img-sylvain" src="/images/sylvain.jpg" alt="img-sylvain" />
                <p className="prenom"><b>Sylvain</b></p>
                <p className="poste">Relation partenaires</p>
              </Col>
            </Row>
        </section>
        </Container>
      </main>
      <Footer />
    </>
  )
}
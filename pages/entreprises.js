import Head from 'next/head'
// Components
import Header from '../src/components/header'
import Footer from '../src/components/footer'
import { Helmet } from 'react-helmet';
import { Container, Row, Col } from 'react-bootstrap';


export default function Home() {
  return (
    <>
      <Helmet>
        <title>La société Nouvelle | Pilotez et valorisez votre performance extra-financière </title>
      </Helmet>
      <Header page="entreprises" />

      <main className="main">
        <Container>

          <section className="bg-primary">

              <h2 className="section-title text-center">Pilotez et valorisez votre performance extra-financière</h2>

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

          </section>

          <section className='mt-2'>
            <div className="title-with-side-lines">
              <h2 className="titre-section">Principe de calcul</h2>
            </div>
            <div className="bloc gray">
              <img id="graph-donut" src="/images/graphique-donut-1.png" alt="icon" class="img-fluid" />
            </div>
          </section>

          <section>
            <div className="title-with-side-lines">
              <h2>La mesure des indicateurs vous permet de : </h2>
            </div>
            <Row className={"mesure-indicateur"}>
              <Col>
                <img id="icon-valorise" src="/images/icon-valorise.png" alt="icon-valorise" class="img-fluid"  />
                <h3>Suivre et valoriser</h3>
                <p>votre performance extra-financière</p>
              </Col>
              <Col>
                <img id="icon-position" src="/images/icon-position.png" alt="icon-position" class="img-fluid" />
                <h3>Vous positionner</h3>
                <p>par rapport aux objectifs de développement durable</p>
              </Col>
              <Col>
                <img id="icon-anticipate" src="/images/icon-anticipate.png" alt="icon-anticipate" class="img-fluid"  />
                <h3>Anticiper</h3>
                <p>de potentiels risques</p>
              </Col>
            </Row>
          </section>
          
          <section>
            <div className="title-with-side-lines">
              <h2>Comment mesurer ces indicateurs pour mon entreprise ?</h2>
            </div>
            <Row className="bloc gray">
              <Col>
              <p>
                Une application web Open Source est à votre disposition. Elle permet de faire le lien entre votre FEC (Fichier d'Ecritures Comptables),
                    les données disponibles au sein de notre base de données ouverte et vos impacts directs pour produire automatiquement des livrables téléchargeables.
                </p>
              </Col>
              <Col>
              <p className='text-center'>
                  <img id="img-screen-webapp" src="/images/img-screen-webapp.png" alt="img-screen-webapp" className='img-fluid' />
                  </p>
                  <p className='text-center'>
                  <a className="btn btn-secondary" href="https://metriz.lasocietenouvelle.org" target="_blank">Accéder à l'outil</a>
                    </p>
              </Col>
            </Row>
          </section>

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

        </Container>
      </main>

      <Footer />

    </>
  )
}

import React from 'react'
import { Col, Container, Image, Row, Button } from 'react-bootstrap'
import PageHeader from '../components/PageHeader'

const Cabinets = () => {
  return (

    <>
      <PageHeader title={"Cabinets comptables"} path={"cabinets-comptables"} />
      <section>
        <Container>
          <Row>
            <Col>
              <h3>Vous êtes un acteur de la comptabilité ?</h3>
              <p>
                Face à l'urgence sociale et environnementale, il est désormais incontournable de compléter les informations comptables traditionnelles 
                par des indicateurs de performance extra-financière. 
                
              </p>
              <p>
                La pérennité d'une entreprise passe désormais par la prise en compte les défis
                sociaux et environnementaux. Chaque entreprise se doit de s'assurer que la valeur qu'elle produit est compatible avec la transition vers
                une économie soutenable.
              </p>
              <p>
                Les indicateurs sur lesquels nous travaillons fournissent un positionnement de l'entreprise au regard d'objectifs clefs de développement durable.
                Ils sont comparables par rapport à la branche d'activité de l'entreprise et à des trajectoires cibles et assurent un suivi annuel.
              </p>
              <p>
                Le complément comptable obtenu, vous permet ainsi d'enrichir vos livrables en fin d'exercice pour :
              </p>
              <ul>
                <li>
                  Sensibiliser vos clients aux enjeux de développement durable
                </li>
                <li>
                  Informer vos clients sur leurs performances sociales et environnementales
                </li>
                <li>
                  Valoriser leurs actions et leurs engagements sociétaux
                </li>
                <li>
                  In fine, leur permettre de pleinement contribuer à une économie durable
                </li>
              </ul>
            </Col>
            <Col>
              <Image fluid src="/images/accounting-illu.jpg" alt="Illustration cabinet compotable" />

            </Col>
          </Row>
        </Container>
      </section>
      <section className="bg-light text-center">
        <blockquote className="blockquote">
          <p>
            "Toute compréhension de l'entreprise passe par sa comptabilité. Or les enjeux sociaux et environnementaux qui doivent être considérés en sont absents."
          </p>
          <footer>Rapport L'entreprise, objet d'intérêt général,<cite title="Source Title">Nicole NOTAT et Jean-Dominique SENARD, 2018</cite></footer>
        </blockquote>
      </section>
      <section>
        <Container>
          <Row className="align-items-center">
            <Col>
              <Image  alt="Metriz" src="images/metriz-partenaires.png" />
            </Col>
            <Col>
              <h3>
                Un outil de calcul sur mesure pour les partenaires
              </h3>
              <p>
                Devenez partenaire et bénéficiez d'une version spécifique à votre disposition. Vous disposerez également :
              </p>
              <ul className="list-unstyled">
                <li><i className="bi bi-check2"></i> Une maintenance évolutive</li>
                <li><i className="bi bi-check2"></i> Un support technique</li>
                <li><i className="bi bi-check2"></i> Des livrables personnalisés</li>
                <li><i className="bi bi-check2"></i> Un ajustement de l'outils à vos fichiers internes</li>
                <li>...</li>
              </ul>

              <Button className="btn-outline-secondary me-3" href="/metriz">
                En savoir plus
              </Button>
              <Button className="btn-outline-primary " href="/contact">
                Contactez-nous
              </Button>
            </Col> 

          </Row>
        </Container>

      </section>
      <section className="cta text-center">
        <Container>
          <h3>Besoin d'une démonstration ? </h3>
          <p>
            Lors d'une entretien nous vous présenterons l'outil et nous vous proposerons une démonstration personnalisée pour apprendre à utiliser l'outil avec vos données comptables.
          </p>
          <Button variant="secondary" href='https://calendly.com/sylvain-humiliere/demonstration-application-web' target="_blank" >
            Demander une démonstration
          </Button>
        </Container>
      </section>
      {/* <section className="partenaires">
          <Container>
              <h3>Nos partenaires</h3>
              <div className="d-flex justify-content-between">
              <Image thumbnail src="/partners/easi.jpg" alt="Cabinet comptable Easi"></Image>
              <Image thumbnail src="/partners/logo-te-1.png" alt="Cabinet comptable Terre Entrepreneur"></Image>
              <Image thumbnail src="/partners/logo-valoxy-1.png" alt="Cabinet comptable Valoxy"></Image>
              <Image thumbnail src="/partners/ACE4RSE.jpg" alt="Cabinet comptable ACE4RSE"></Image>
          
              </div>

          </Container>
        </section> */}
    </>
  )
}

export default Cabinets
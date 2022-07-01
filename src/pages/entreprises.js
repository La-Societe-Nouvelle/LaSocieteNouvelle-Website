import React from 'react'
import { Col, Container, Image, Row, Button } from 'react-bootstrap'
import PageHeader from '../components/PageHeader'

const Entreprises = () => {
  return (

    <>
      <PageHeader title={"Entreprises"} path={"entreprises"} />
      <section>
        <Container>
          <Row>
            <Col>
              <h3>
                Pilotez et valorisez votre performance extra-financière
              </h3>
              <p>
                Climat, inégalités sociales, raréfaction des ressources naturelles... Les entreprises ont un rôle majeur dans la construction d'une société durable. Il est désormais incontournable pour une entreprise de prendre en compte ses enjeux clefs si elle veut assurer sa pérennité.
              </p>
              <p>
                Mesurer les impacts de sa valeur ajoutée et de sa valeur produite permet d'évaluer sa capacité à produire de la valeur en limitant ses impacts négatifs, 
                de se positionner vis-à-vis de sa branche d'activités et des objectifs de développement durable fixés.
              </p>
              <p>
                La publication des indicateurs à l'échelle de votre chiffre d'affaires valorise votre performance auprès de vos clients, leur performance faisant intervenir la vôtre.
              </p>
              <p>  
                La démarche vous permet d'êre transparent sur l'empreinte que vous laissez sur la société et l'environnement, et de prouver que vos activités 
                s'inscrivent dans une trajectoire visant à atteindre une économie soutenable.
              </p>
            </Col>
            <Col>
              <Image fluid src="/images/entreprise.jpg" alt="Illustration Entreprises" />

            </Col>
          </Row>
        </Container>
      </section>
      <section id="cta-entreprise" className="text-center cta-metriz">
        <Container>
          <h3 className="h4">Mesurer vos indicateurs grâce à notre application web</h3>
          <p>
          Une application web Open Source est à votre disposition pour mesurer ces indicateurs. 
          Elle permet de faire le lien entre votre FEC (Fichier d'Ecritures Comptables), 
          les données disponibles relatives à vos fournisseurs et vos impacts directs pour produire automatiquement des 
          livrables téléchargeables.
          </p>
          <Row>
            <Col>
              <div className="box shadow-sm">
                <div>
                  <Image src="images/performance-extra-financiere.png" alt="Performance Extra-financière" />
                </div>
                <h4 className="h6">
                  Suivez et valorisez votre performance extra-financière
                </h4>
              </div>
            </Col>
            <Col>
              <div className="box shadow-sm">
                <div>
                  <Image src="images/position-odd.png" alt="Objectifs développement durable" />
                </div>
                <h4 className="h6">
                  Positionnez vous rapport aux objectifs de développement durable
                </h4>
              </div>
            </Col>
            <Col>
              <div className="box shadow-sm">
                <div>
                  <Image src="images/analyse-risques.png" alt="Risques" />
                </div>
                <h4 className="h6" >
                  Anticipez de potentiels <br/>risques
                </h4>

              </div>

            </Col>
          </Row>
          <div className="text-center mt-3">
            <Button variant="secondary" href="https://metriz.lasocietenouvelle.org" target='_blank' rel="noreferrer" >
                Utiliser l'application
            </Button>
          </div>
        </Container>
      </section>
      <section>
        <Container>
          <Row>
            <Col>
              <h3> Principe de calcul</h3>
              <p>
                Du fait des consommations intermédiaires et de capital fixe, la valeur produite d'une entreprise 
                fait intervenir celles d’autres entreprises. La mesure des indicateurs fait donc appel aux empreintes 
                sociétales des fournisseurs pour estimer les impacts de ces flux sortants.
              </p>
              <p>
                Le modèle des indicateurs suit ainsi les principes suivants : 
              </p>
              <ul>
                <li>Les impacts liés à la valeur ajoutée nette (production réduite des consommations) correspondent aux impacts directs de l'entreprise sur son périmètre opérationnel ;</li>
                <li>Les impacts liés aux flux économiques sortants (consommations intermédiaires et consommations de capital fixe) sont obtenus via l'empreinte sociétale des fournisseurs.</li>
              </ul>
              <p>
                Le modèle permet ainsi de mettre en place une traçabilité le long des chaines de valeurs. L’empreinte sociétale d’une entreprise dépend de celles de ses 
                fournisseurs et impacte celles de ses clients.
              </p>
            </Col>
            <Col>
            <Image fluid src="/images/graphique-donut.png" alt="Graphique Principe de calculs"/>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}

export default Entreprises
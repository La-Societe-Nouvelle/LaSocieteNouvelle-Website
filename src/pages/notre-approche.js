import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import PageHeader from '../components/PageHeader'

const Approche = () => {
  return (
    <>
    <PageHeader title={"Notre approche"} path={"notre-approche"}/>
      <section>
        <Container>
          <Row>
              <Col>
              <h3>Calculer l'empreinte sociétale</h3>
          <p>
          L’Empreinte Sociétale est un Panel d’Indicateurs qui rend compte des impacts d’un euro de production vendue, sur des dimensions sociales et environnementales clefs.
          </p>
              </Col>
              <Col>
                
              </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}

export default Approche
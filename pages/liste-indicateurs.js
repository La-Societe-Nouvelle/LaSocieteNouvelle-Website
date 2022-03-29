import React from 'react';
import { Helmet } from 'react-helmet';

// Components
import Header from '../src/components/header'
import Footer from '../src/components/footer'

import metaData from '../lib/metaData';
import { Container, ListGroup, ListGroupItem } from 'react-bootstrap';

export default function Home() {

  return (
    <>
      <Helmet>
        <title>La société Nouvelle | Liste des indicateurs </title>
      </Helmet>
      <Header />

      <main className="main">
      <Container>
        
        <section>
          <h2>Liste des indicateurs</h2>
          <ListGroup variant="flush">
          {
              metaData.indics.map((indic, index) => <ListGroupItem key={index} action href={'/indicateur/' + indic}>➥ {metaData[indic].libelle}</ListGroupItem>)
            }
          </ListGroup>

        </section>
        </Container>

      </main>

      <Footer />

    </>
  )
}
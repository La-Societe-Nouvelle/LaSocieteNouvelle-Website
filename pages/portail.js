import Head from 'next/head'
// Components
import Header from '../src/components/header'
import Footer from '../src/components/footer'
import { Helmet } from 'react-helmet';

// Modules
import React from 'react';
import { Container, Row, Col, Card, CardGroup } from 'react-bootstrap';

export default function Home() {
  return (
    <>
      <Helmet>
        <title>La société Nouvelle | Portail </title>
      </Helmet>
      <Header />
      <main className="main">
        <Container>
          <PortailView />
        </Container>
      </main>
      <Footer />
    </>
  )

}

class PortailView extends React.Component {

  constructor(props) {
    super(props);
    this.state =
    {
      input: '',
      isLoading: false,
      isLoaded: false,
      infoResults: { nbResults: 0 },
      results: {}
    };
    this.inputChange = this.inputChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  inputChange(event) {
    this.setState({ input: event.target.value });
  }

  handleClick(event) {
    if (this.state.input !== undefined && this.state.input !== '') {
      this.setState({
        isLoaded: false,
        isLoading: true
      });
      this.getResults(this.state.input);
    }
  }

  getResults(recherche) {
    fetch('https://systema-api.azurewebsites.net/api/v2/search?denomination=' + recherche, { method: 'get' })
      .then(response => response.json())
      .then((response) => {
        if (response.header.statut == 200) {
        
          this.setState({
            isLoaded: true,
            isLoading: false,
            infoResults: response.infoResults,
            results: Object.values(response.results),
          });
        } else {
          this.setState({
            isLoading: false,
            infoResults: { nbResults: 0 },
          })
        }
      }).catch(error => console.log(error))
  }

  render() {
    const { isLoading, isLoaded, infoResults, results } = this.state;
    const nbResults = infoResults.nbResults;

    return (
      <section className="portail-view">
        <h2>Portail d'accès aux données</h2>
        <Informations />
        <SearchBar parent={this} />
  
        <Row id="results-strip">
          {isLoading ? <p>Recherche en cours...</p> : ""}
          {isLoaded && nbResults == 0 ? <p>Aucun résultat</p> : ""}
          {isLoaded && nbResults > 0 ? 
          <CardGroup>
            <Results items={results} />
          </CardGroup>: ""}
        </Row>
      </section>
    )
  }

}

const Informations = () =>
  <div className='form-text'>
    <p>Accédez librement aux données publiées aux impacts de la valeur produite par les entreprises françaises.</p>
    <p>En cas d'absence de données fournies par l'entreprise, des valeurs par défaut sont attribuées selon les caractéristiques de l'entreprise. Ces valeurs peuvent être éloignées de la réalité de l'entreprise, merci d'utiliser ces données avec précautions.</p>
    <p>Pour toute publication, mise à jour ou retrait, contactez-nous.</p>
  </div>

const SearchBar = ({ parent }) =>
  <section className='bg-light p-4'>
  <h4 className="h6">Rechercher par dénomination ou numéro de Siren</h4>
      <input id="search-input" type="text" className="form-control"
        placeholder="Dénomination sociale, N° de siren"
        value={parent.state.input} onChange={parent.inputChange}></input>
    <button id="search-button" type="submit" className="btn btn-secondary m-0 mt-2" onClick={parent.handleClick}>Rechercher</button>
  </section>

const Results = ({ items }) => {
  return items.map((item) =>
    <Col key={'item-' + item.siren} lg="4">
      <Card>
        <Card.Body>
        <Card.Title>{item.denomination}</Card.Title>
        <Card.Text>
         siren : {item.siren} 
        </Card.Text>

        <Card.Text>

          Activite : {item.activitePrincipaleLibelle} ({item.activitePrincipale})        </Card.Text>

          <Card.Text>
          Domiciliation : {item.communeSiege} ({item.codePostalSiege})
          </Card.Text>

        </Card.Body>
        <Card.Footer>
        <button className="btn btn-primary" onClick={() => showCompanyData(item.siren)}>Consulter</button>

        </Card.Footer>
      </Card>

    </Col>
  )
}

function showCompanyData(siren) {
  window.open('http://lasocietenouvelle.org/company-data?siren=' + encodeURI(siren));
}

import Head from 'next/head'
// Components

import { Helmet } from 'react-helmet';

// Modules
import React from 'react';
import { Container, Row, Col, Card, CardGroup, Button } from 'react-bootstrap';
import PageHeader from '../components/PageHeader';

export default function Home() {
  return (
    <>
      <Helmet>
        <title>La société Nouvelle | Portail d'accès aux données </title>
      </Helmet>
      <>
      <PageHeader title={"Portail de données ouvertes"} path={"portail"} /> 
          <PortailView />
      </>
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
            results: []
          })
        }
      }).catch(error => console.log(error))
  }

  render() {
    const { isLoading, isLoaded, results } = this.state;
    return (
      <section className="portail-view">
        <Container>
        <h3>Rechercher l'empreinte sociétale d'une entreprise</h3>
         <div>
         <p>Accédez librement aux données publiées aux impacts de la valeur produite par les entreprises françaises.</p>
    <p>En cas d'absence de données fournies par l'entreprise, des valeurs par défaut sont attribuées selon les caractéristiques de l'entreprise. Ces valeurs peuvent être éloignées de la réalité de l'entreprise, merci d'utiliser ces données avec précautions.</p>
    <p>Pour toute publication, mise à jour ou retrait, <a href="/contact" target="_self" > contactez-nous</a>.</p>
         </div>
          <SearchBar parent={this} />
          <Row>

            {isLoading &&
             <Col>
              <div className="alert alert-info text-center">
              <p>Recherche en cours </p><div class="dot-pulse m-auto"></div>
              </div>
            </Col>
             }
            {isLoaded && results.length == 0 ? <Col><p className="alert alert-info">Aucun résultat</p></Col> : ""}
            {isLoaded && results.length > 0 ? 
              <Results items={results}  />
            : ""}
            </Row>

        </Container>
  
      </section>
    )
  }

}


const SearchBar = ({ parent }) =>
  <section className='bg-light p-4 mb-3'>
    <label>Rechercher par dénomination ou par numéro de Siren</label>
      <input id="search-input" type="text" className="form-control"
        placeholder="Rechercher des données.."
        value={parent.state.input} onChange={parent.inputChange}></input>
    <button id="search-button" type="submit" className="btn btn-secondary m-0 mt-2" onClick={parent.handleClick}>Rechercher</button>
  </section>

const Results = ({ items }) => {
  return items.map((item, index) =>
  <Col key={index} lg={3}>
      <Card className="my-2">
        <Card.Body>
        <Card.Title>{item.denomination}</Card.Title>
        <Card.Text>
         <b>Siren :</b> {item.siren} 
        </Card.Text>

        <Card.Text>

        <b>Activité :</b> {item.activitePrincipaleLibelle} ({item.activitePrincipale})        </Card.Text>

          <Card.Text>
          <b>Domiciliation :</b> {item.communeSiege} ({item.codePostalSiege})
          </Card.Text>

        </Card.Body>
        <Card.Footer>
        <a className="btn btn-outline-secondary" href={"company-data?siren="+item.siren}>
          
          Voir l'empreinte</a>


        </Card.Footer>
      </Card>
</Col>

  )
}

function showCompanyData(siren) {
  window.open('http://lasocietenouvelle.org/company-data?siren=' + encodeURI(siren));
}

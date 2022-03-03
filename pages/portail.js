import Head from 'next/head'
// Components
import Header from '../src/components/header'
import Footer from '../src/components/footer'
// Modules
import React from 'react';

export default function Home() 
{
  return (
    <div className="container">

      <Head>
        <title>La Société Nouvelle | Portail</title>
        <link rel="icon" href="/resources/logo_miniature.jpg" />
      </Head>

      <Header/>

      <main className="main">

        <div className="section">
          <div className="bloc blue h-group chiffres-clefs-bdd">
            <div className="h-group chiffre-clef-bdd">
              <p className="chiffre-clef-bdd-valeur">27</p>
              <p>Requêtes effectuées</p>
            </div>
            <div className="h-group chiffre-clef-bdd">
              <p className="chiffre-clef-bdd-valeur">12</p>
              <p>Valeurs publiées</p>
            </div>
          </div>
        </div>

        <h1>Portail d'accès aux données</h1>

        <PortailView/>

      </main>

      <Footer/>

    </div>
  )

}

class PortailView extends React.Component {

  constructor(props) 
  {
    super(props);
    this.state = 
    {
        input: '',
        isLoading: false,
        isLoaded: false,
        infoResults: {nbResults: 0},
        results: {}
    };
    this.inputChange = this.inputChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  inputChange(event) 
  {
    this.setState({input: event.target.value});
  }

  handleClick(event) 
  {
    if (this.state.input!==undefined && this.state.input!=='') 
    {
      this.setState({
        isLoaded: false,
        isLoading: true
      });
      this.getResults(this.state.input);
    }
  }

  getResults(recherche) 
  {
    fetch('https://systema-api.azurewebsites.net/api/v2/search?denomination='+recherche,{method:'get'})
        .then(response => response.json())
        .then((response) => 
        {
          if (response.header.statut==200) {
            this.setState({
                isLoaded: true,
                isLoading: false,
                infoResults: response.infoResults,
                results: Object.values(response.results),
            });
          } else {
            this.setState({
              isLoading: false,
              infoResults: {nbResults: 0},
            })
          }
        }).catch(error => console.log(error))
  }

  render() 
  {
    const {isLoading,isLoaded,infoResults,results} = this.state;
    const nbResults = infoResults.nbResults;

    return (
      <div className="section portail-view">
          <SearchBar parent={this}/>
          {
            isLoaded || isLoading ? <hr className="h-line"/> : ""
          }
          {!isLoaded && !isLoading ? <Informations /> : ""}
          <div id="results-strip">
            {isLoading ? <p>Recherche en cours...</p> : ""}
            {isLoaded && nbResults==0 ? <p>Aucun résultat</p> : ""}
            {isLoaded && nbResults>0 ? <Results items={results}/> : ""}
          </div>
      </div>
    )
  }

}

const Informations = () =>
  <div className="bloc" id="informations">
    <p>Accédez librement aux données publiées aux impacts de la valeur produite par les entreprises françaises.</p>
    <p>En cas d'absence de données fournies par l'entreprise, des valeurs par défaut sont attribuées selon les caractéristiques de l'entreprise. Ces valeurs peuvent être éloignées de la réalité de l'entreprise, merci d'utiliser ces données avec précautions.</p>
    <p>Pour toute publication, mise à jour ou retrait, contactez-nous.</p>
  </div>

const SearchBar = ({parent}) => 
    <div id="search-bar">
      <input id="search-input" type="text"
             placeholder="Dénomination sociale, N° de siren"
             value={parent.state.input} onChange={parent.inputChange}></input>
      <button id="search-button" type="submit" onClick={parent.handleClick}>Rechercher</button>
    </div>

const Results = ({items}) =>
{
  return items.map((item) =>
      <div key={'item-'+item.siren} className="result-item-container">
          <div className="result-item-data">
              <p className="result-item-denomination"><b>{item.denomination}</b></p>
              <p>siren : {item.siren}</p>
              <p>
              Activite : {item.activitePrincipaleLibelle} ({item.activitePrincipale})
              <br/>
              Domiciliation : {item.communeSiege} ({item.codePostalSiege})
              </p>
          </div>
          <button className="button-consulter" onClick={() => showCompanyData(item.siren)}>Consulter</button>
      </div>
  )
}

function showCompanyData(siren) {
  window.open('http://lasocietenouvelle.org/company-data?siren='+encodeURI(siren));
}

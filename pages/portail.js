import Head from 'next/head'
// Components
import Header from '../src/components/header'
import Footer from '../src/components/footer'
// Modules
import React from 'react';

export default function Home() {
  return (
    <div className="container">

      <Head>
        <title>La Société Nouvelle | Portail</title>
        <link rel="icon" href="/resources/logo_miniature.jpg" />
      </Head>

      <Header/>

      <main className="main">
        <h1>Portail d'accès aux données</h1>
        <div id="portail-informations" className="strip">
          <h2>Informations</h2>
          <p>Retrouvez les indicateurs de l'Empreinte Sociétale pour l'ensemble des entreprises françaises.</p>
          <p>En cas d'absence de données fournies par l'entreprise, des valeurs par défaut sont attribuées selon les caractéristiques de l'entreprise. Ces valeurs peuvent être éloignées de la réalité de l'entreprise, merci d'utiliser ces données avec précautions.</p>
          <p>La base de données s'appuie sur le répertoire SIRENE (Dernière mise à jour : 02/07/2021).</p>
          <p>Pour toute publication, mise à jour ou retrait, contactez-nous.</p>
        </div>
        <PortailView/>
      </main>

      <Footer/>

    </div>
  )

}

class PortailView extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
        input: '',
        isLoading: false,
        isLoaded: false,
        infoResults: {nbResults: 0},
        results: {}
    };
    this.inputChange = this.inputChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  inputChange(event) {
    this.setState({input: event.target.value});
  }

  handleClick(event) 
  {
    if (this.state.input!==undefined && this.state.input!=='') {
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
    // if results are loaded
    if (!isLoaded && !isLoading) {
      return (
        <div id="portail-view">
            {buildSearchBar(this)}
        </div>
      )
    // if waiting for results
    } else if (isLoading) {
      return (
        <div id="portail-view">
          {buildSearchBar(this)}
          <hr className="h-line"/>
          <div id="results-strip">
            <p>Recherche en cours...</p>
          </div>
        </div>
      )
    // if waiting for results
    } else if (nbResults===0) {
      return (
        <div id="portail-view">
          {buildSearchBar(this)}
          <hr className="h-line"/>
          <div id="results-strip">
            <p>Aucun résultat</p>
          </div>
        </div>
      )
    // default page
    } else {
      return (
        <div id="portail-view">
          {buildSearchBar(this)}
          <hr className="line-separator"/>
          <div id="results-strip">
            {buildResultItems(results)}
          </div>
        </div>
      );
    }
  }

}

function buildSearchBar(parent) {
  return (
    <div id="search-bar">
      <input id="search-input" type="text"
             placeholder="siren ou dénomination sociale"
             value={parent.state.input} onChange={parent.inputChange}></input>
      <button id="search-button" type="submit" onClick={parent.handleClick}>Rechercher</button>
    </div>
  )
}

function buildResultItems(items) {
  return items.map((item) =>
      <div key={'item-'+item.siren} className="result-item-container">
          <div className="result-item-data">
              <p className="result-item-denomination">{item.denomination}</p>
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

import Head from 'next/Head'
import Header from './header.js'
import Footer from './footer.js'

import styles from '../styles/Home.module.css'

import React from 'react';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>La Société Nouvelle | Portail</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header/>

      <main className={styles.main}>

        <h1>
        Portail d'accès aux données
        </h1>

        <div id="portail-informations" className="strip">
          <h2>
          Informations
          </h2>
          <p>
          Retrouvez les indicateurs de l'Empreinte Sociétale pour l'ensemble des entreprises françaises.
          </p>
          <p>
          En cas d'absence de données fournies par l'entreprise, des valeurs par défaut sont attribuées selon les caractéristiques de l'entreprise. Ces valeurs peuvent être éloignées de la réalité de l'entreprise, merci d'utiliser ces données avec précautions.
          </p>
          <p>
          La base de données s'appuie sur le répertoire sirene. Pour toute mise à jour ou retrait, contactez-nous.
          </p>
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
        results: {}
    };
    this.inputChange = this.inputChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  inputChange(event) {
    this.setState({input: event.target.value});
  }
  handleClick(event) {
    if (this.state.input!==undefined & this.state.input!=='') {
      this.getResults(this.state.input);
    }
  }

  getResults(recherche) {
    fetch('https://systema-api.azurewebsites.net/api/v2/search?denomination='+recherche,{method:'get'})
        .then(response => response.json())
        .then(
            (data) => {
                this.setState({
                    isLoaded: true,
                    results: Object.values(data.results),
                });
            }
        ).catch(error => console.log(error))
  }

  render() {
    const {input,isLoading,isLoaded,results} = this.state;
    if (!isLoaded) {
      return (
        <div id="portail-view">
            {buildSearchBar(this)}
        </div>
      )
    } else {
      return (
        <div id="portail-view">
          {buildSearchBar(this)}
          <hr class="line-separator"/>
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
      <input id="search-input" type="text" value={parent.state.input} onChange={parent.inputChange}></input>
      <button id="search-button" type="submit" onClick={parent.handleClick}>Rechercher</button>
    </div>
  )
}

function buildResultItems(items) {
  return items.map((item) =>
      <div class="result-item-container">
          <div id="result-item-data">
              <p id="result-item-denomination">{item.denomination}</p>
              <p>siren : {item.siren}</p>
              <p>
              Activite : {item.activitePrincipaleLibelle} ({item.activitePrincipale})
              <br/>
              Domiciliation : {item.communeSiege} ({item.codePostalSiege})
              </p>
          </div>
          <button id="button-consulter" onClick={() => showCompanyData(item.siren)}>Consulter</button>
      </div>
  )
}

function showCompanyData(siren) {
  window.open('http://localhost:3000/company-data?siren='+encodeURI(siren));
}

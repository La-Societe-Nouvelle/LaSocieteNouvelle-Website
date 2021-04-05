import Head from 'next/head'
import Header from './header.js'
import Footer from './footer.js'
import styles from '../styles/Home.module.css'

import React from 'react';

Home.getInitialProps = async (ctx) => {
  return {siren: ctx.query.siren}
}

export default function Home({siren}) {
  return(
      <div className={styles.container}>
        <Head>
          <title>La Société Nouvelle</title>
          <link rel="icon" href="/resources/logo_miniature.jpg" />
        </Head>

        <Header/>
        <main className={styles.main}>

          <h1 className={styles.title}>
          Empreinte Sociétale
          </h1>

          <EmpreinteSocietale siren={siren}/>

        </main>
        <Footer/>
      </div>
  )
}

class  EmpreinteSocietale extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      siren: props.siren,
      isLoaded: false,
      uniteLegale: {},
      empreinteSocietale: {},
      view: []
    }
    this.getResults();
  }

  getResults() {
    fetch('https://systema-api.azurewebsites.net/api/v2/siren/'+this.state.siren,{method:'get'})
        .then(response => response.json())
        .then(
            (data) => {
                this.setState({
                    isLoaded: true,
                    uniteLegale: data.profil.descriptionUniteLegale,
                    empreinteSocietale: data.profil.empreinteSocietale,
                    view: [data.profil.empreinteSocietale.ECO,data.profil.empreinteSocietale.ART,data.profil.empreinteSocietale.SOC,data.profil.empreinteSocietale.KNW]
                });
            }
        ).catch(error => console.log(error))
  }

  render () {
    const {siren,isLoaded,uniteLegale,empreinteSocietale,view} = this.state;
    if (!isLoaded) {
      return <p></p>
    } else {
      return (
        <div className="strip">

            <div id="sfp-company-data" className="strip">
              <h2>
              {uniteLegale.denomination}
              </h2>
              <p>
              siren : {uniteLegale.siren}
              </p>
              <p>
              Activité principale : {uniteLegale.activitePrincipaleLibelle}
              <br/>
              Domiciliation : {uniteLegale.communeSiege} ({uniteLegale.codePostalSiege})
              </p>
            </div>

            <MenuEmpreinteSocietale parent={this}/>

            <div id="sfp-view">
            {buildVueIndicateurs(view)}
            </div>

        </div>
      )
    }
  }

}

class MenuEmpreinteSocietale extends React.Component {

  constructor(props) {
    super(props);
    this.parent = props.parent;
    this.getEmpreinteEconomique  = this.getEmpreinteEconomique.bind(this);
    this.getEmpreinteEnvironnementale = this.getEmpreinteEnvironnementale.bind(this);
    this.getEmpreinteSociale = this.getEmpreinteSociale.bind(this);
  }

  getEmpreinteEconomique(event) {
    let empreinteSocietale = this.parent.state.empreinteSocietale;
    this.parent.setState({view:[empreinteSocietale.ECO,empreinteSocietale.ART,empreinteSocietale.SOC,,empreinteSocietale.KNW]});
    document.getElementById('sfp-menu-button1').className = 'sfp-menu-button-inverse';
    document.getElementById('sfp-menu-button2').className = 'sfp-menu-button';
    document.getElementById('sfp-menu-button3').className = 'sfp-menu-button';
  }
  getEmpreinteEnvironnementale(event) {
    let empreinteSocietale = this.parent.state.empreinteSocietale;
    this.parent.setState({view:[empreinteSocietale.GHG,empreinteSocietale.MAT,empreinteSocietale.WAS,empreinteSocietale.NRG,empreinteSocietale.WAT,empreinteSocietale.HAZ]});
    document.getElementById('sfp-menu-button1').className = 'sfp-menu-button';
    document.getElementById('sfp-menu-button2').className = 'sfp-menu-button-inverse';
    document.getElementById('sfp-menu-button3').className = 'sfp-menu-button';
  }
  getEmpreinteSociale(event) {
    let empreinteSocietale = this.parent.state.empreinteSocietale;
    this.parent.setState({view:[empreinteSocietale.DIS,empreinteSocietale.GEQ]});
    document.getElementById('sfp-menu-button1').className = 'sfp-menu-button';
    document.getElementById('sfp-menu-button2').className = 'sfp-menu-button';
    document.getElementById('sfp-menu-button3').className = 'sfp-menu-button-inverse';
  }

  render() {
    return (
    <div className="MenuEmpreinteSocietale">
          <div id="sfp-menu-items">
            <button id="sfp-menu-button1" className="sfp-menu-button-inverse" onClick={this.getEmpreinteEconomique}>Création de la valeur</button>
            <button id="sfp-menu-button2" className="sfp-menu-button" onClick={this.getEmpreinteEnvironnementale}>Empreinte environnementale</button>
            <button id="sfp-menu-button3" className="sfp-menu-button" onClick={this.getEmpreinteSociale}>Externalités sociales</button>
          </div>
    </div>
    );
  }
}

function buildVueIndicateurs(indicateurs) {
    console.log(indicateurs);
    return indicateurs.map((indicateur) => buildVueIndicateur(indicateur));
}

function buildVueIndicateur (data) {
  console.log(data);
  return (
    <div key={data.code} className="VueIndicateur">
      <h4 id="indic-view-label">{data.libelle}</h4>
      <p id="indic-value">{Math.round(data.value*10)/10} {data.unit}</p>
      <p className="indic-subdata">Source : {data.libelleFlag}</p>
      <p className="indic-subdata">Incertitude : {Math.round(data.uncertainty)} %</p>
      <p className="indic-subdata">Dernière mise à jour : {data.year}</p>
      <p className="indic-subdata">Valeur de référence : {data.value} {data.unit}</p>
    </div>
  );
}

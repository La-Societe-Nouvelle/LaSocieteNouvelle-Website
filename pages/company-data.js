import { useRouter } from 'next/router'
import Head from 'next/Head'
import Header from './header.js'
import styles from '../styles/Home.module.css'

import React from 'react';

export default function Home() {
  const router = useRouter();
  const siren = router.query.siren;
  Home.getInitialProps = async () => {return {};};
  return(
      <div className={styles.container}>  
        <Head>
          <title>La Société Nouvelle</title>
          <link rel="icon" href="/favicon.ico" />
        </Head> 
        <Header/>
  
        <EmpreinteSocietale siren={siren}/>
 
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
        <div className={styles.container}>

          <main className={styles.main}>

            <h1 className={styles.title}>
            Empreinte Sociétale
            </h1>

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
        
          </main>

          <footer className={styles.footer}>
            <a>
              <p>
                Bas de Page
              </p>
            </a>
          </footer>

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
  }
  getEmpreinteEnvironnementale(event) {
    let empreinteSocietale = this.parent.state.empreinteSocietale;
    this.parent.setState({view:[empreinteSocietale.GHG,empreinteSocietale.MAT,empreinteSocietale.WAS,empreinteSocietale.NRG,empreinteSocietale.WAT,empreinteSocietale.HAZ]});
  }
  getEmpreinteSociale(event) {
    let empreinteSocietale = this.parent.state.empreinteSocietale;
    this.parent.setState({view:[empreinteSocietale.DIS,empreinteSocietale.GEQ]});
  }

  render() {
    return (
    <div className="MenuEmpreinteSocietale">
          <div id="sfp-menu-items">
            <button id="sfp-menu-button1" class="sfp-menu-button" onClick={this.getEmpreinteEconomique}>Création de la valeur</button>
            <button id="sfp-menu-button2" class="sfp-menu-button" onClick={this.getEmpreinteEnvironnementale}>Empreinte environnementale</button>
            <button id="sfp-menu-button3" class="sfp-menu-button" onClick={this.getEmpreinteSociale}>Externalités sociales</button>
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
    <div className="VueIndicateur">
      <h4 id="indic-view-label">{data.libelle}</h4>
      <p id="indic-value">{data.value} {data.unit}</p>
      <p class="indic-subdata">Source : {data.libelleFlag}</p>
      <p class="indic-subdata">Incertitude : {data.uncertainty} %</p>
      <p class="indic-subdata">Dernière mise à jour : {data.year}</p>
      <p class="indic-subdata">Valeur de référence : {data.value} {data.unit}</p>
    </div>
  );
}

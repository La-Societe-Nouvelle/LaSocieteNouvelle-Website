import Head from 'next/head'
import Header from './header.js'
import Footer from './footer.js'

import React, {useState} from 'react';

import {sendDeclarationMail} from './api/mail-api.js'

/* The base URL of the API */
/* TODO: Must be exteriorized in a build variable */
const apiBaseUrl = "https://systema-api.azurewebsites.net/api/v2";

/* Defines every possible views. Each key is a view.
   Each value contains:
   - the name of the view.
   - the associated indicators.
*/
const indicators = ["eco","art","soc","knw","dis","geq","ghg","mat","was","nrg","wat","haz"];

// put in other file
const impactsDirectsUnits = {
  eco:"€", art:"€", soc:"€", knw:"€", dis:"/100", geq:"%", ghg:"kgCO2e", mat:"kg", was:"kg", nrg:"MJ", wat:"m3", haz:"kg"
}

/* Fetch default data */
Home.getInitialProps = async () => {
  try{
    const endpoint = `${apiBaseUrl}/default?pays=FRA`;
    const response = await fetch(endpoint, {method:'get'});
    const data = await response.json();
    const isLoaded = data.header.statut===200; // handle error / no response
    const defaultData = data.empreinteSocietale;
    return({
      defaultData
    })
  }
  catch(error){
    console.log(error);
    throw error;
  }
}

export default function Home(props) {
  return (
    <div className="container">
      <Head>
        <title>La Société Nouvelle | Publication</title>
        <link rel="icon" href="/resources/logo_miniature.jpg" />
      </Head>
      <Header/>
      <main className="main">

        <h1>Declaration - Empreinte Sociétale</h1>
        <p>Merci de vérifier que les valeurs déclarées correspondent bien à la définition des indicateurs.</p>

        <Form defaultData={props.defaultData}/>

      </main>
      <Footer/>
    </div>
  )
}

class Form extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      // Default data
      defaultData: props.defaultData,

      // general experience state
      selectedIndicator: "eco",
      message: "", coordonnees: "",
      certificationAutorisation: false, declarationSend: false,
      prixLibre: false,prix: "",
      messageButton: "Valider la publication",
      
      // Legal entity data
      siren: "", messageSIRENE: "Saisissez votre numéro de siren (9 chiffres)",
      uniteLegaleDataLoaded:false,
      uniteLegaleData: {}, defaultCSF: {},
      anneeExercice: undefined,

      // ES impacts
      valeurs: {
        eco: undefined, art: undefined, soc: undefined, knw: undefined, dis: undefined, geq: undefined,
        ghg: undefined, mat: undefined, was: undefined, nrg: undefined, wat: undefined, haz: undefined},
      incertitudes: {
        eco: undefined, art: undefined, soc: undefined, knw: undefined, dis: undefined, geq: undefined,
        ghg: undefined, mat: undefined, was: undefined, nrg: undefined, wat: undefined, haz: undefined}
      };
  }

  render() {
    const {selectedIndicator,
           message,coordonnees,
           certificationAutorisation,declarationSend,
           prixLibre,prix,
           messageButton,
           siren,uniteLegaleDataLoaded,uniteLegaleData,anneeExercice,
           valeurs,incertitudes,
           defaultData} = this.state;
    
    const value = valeurs[selectedIndicator]!==undefined ? valeurs[selectedIndicator] : "";
    const uncertainty = incertitudes[selectedIndicator]!==undefined ? incertitudes[selectedIndicator] : "";       
    const indicData = defaultData[selectedIndicator.toUpperCase()];

    const btnClass = (declarationSend | !certificationAutorisation) ? "disabled" : "";

    return (
          <div className="declarationForm">

            <div id="general-data" className="strip">
              <h2>Informations légales</h2>
              <div className="input">
                <p>Numéro de siren </p><input id="siren-input" type="text" value={siren} onChange={this.onSirenChange} /><p> {this.state.messageSIRENE}</p>
              </div>
              <div className="input">
                  <label htmlFor="annee-exercice">Année de l'exercice</label>
                  <input type="text"
                         id="annee-exercice"
                         value={anneeExercice!==undefined ? anneeExercice : ""} 
                         onChange={this.onAnneeExerciceChange} />
                </div>
                <div>
                <p>Dénomination sociale : {uniteLegaleDataLoaded ? uniteLegaleData.denomination : " - "}</p>
                <p>{uniteLegaleDataLoaded ? uniteLegaleData.activitePrincipaleLibelle : ""}</p>
              </div>
            </div>

            <div id="indicators" className="strip">
            <h2>
              Indicateurs
            </h2>

            <IndicatorViewMenu selected={selectedIndicator} parent={this}/>

            <IndicatorView indic={selectedIndicator}
                       indicData={indicData}
                       value={value}
                       uncertainty={uncertainty}
                       setValue={this.setValue}
                       setUncertainty={this.setUncertainty}/>
            </div>

            <div id="further-info" className="strip">
            <h2>
              Informations complémentaires
            </h2>
            <div className="form-item">
              <label>Message</label>
              <textarea id="message-input" type="text" value={message} onChange={this.onMessageChange} />
            </div>
            <div className="form-item">
              <label>Vos coordonnées (obligatoire)</label>
              <textarea id="coordonnees-input" type="text" value={coordonnees} onChange={this.onCoordonneesChange} />
            </div>
            <div className="input">
              <input type="checkbox" onChange={this.onCheckboxChange} /><p> Je certifie être autorisé(e) à soumettre la déclaration ci-présente</p>
            </div>
            <p>La publication des données est soumise à un prix libre. Les revenus permettent de couvrir les frais d'hébergement, de maintenance et d'accéssibilités des données et des supports mis à disposition.</p>
            <div className="input">
              <input type="checkbox" onChange={this.onPrixLibreChange} />
              <label htmlFor="contribution">J'accepte de contribuer, montant : </label>
              <input type="text"
                     id="contribution"
                     disabled={!prixLibre}
                    value={prix}
                    onChange={this.onPrixChange} />
              <span> &nbsp;€</span>
            </div>

            <button className={btnClass} id="submit-assessment" onClick={this.submitForm}>{messageButton}</button>
            </div>
          </div>

    )
  }

  /* SIREN */
  onSirenChange = (event) => {
    this.setState({siren: event.target.value})
    if (event.target.value.length===9 & !isNaN(parseFloat(event.target.value))) {
      this.getLegalUnitData(event.target.value);
    } else {
      let message = (event.target.value.length>0 & (!/^\d+$/.test(event.target.value) | event.target.value.length>9)) ? "erreur format (le numéro de siren est composé de 9 chiffres)" : "Saisissez votre numéro de siren (9 chiffres)";
      this.setState({ messageSIRENE: message, uniteLegaleDataLoaded: false, defaultCSFLoaded: false })
    }
  }
  // Fetch legal data
  getLegalUnitData = async (siren) => {
    try{
      const endpoint = `${apiBaseUrl}/siren/${siren}`;
      const response = await fetch(endpoint, {method:'get'});
      const data = await response.json();
      const isLoaded = data.header.statut===200;
      if (isLoaded) {
        this.setState({
          messageSIRENE: "OK", uniteLegaleDataLoaded: true,
          uniteLegaleData: data.profil.descriptionUniteLegale, defaultCSF : data.profil.empreinteSocietale,
        })
      } else {
        this.setState({
          messageSIRENE: "numéro non reconnu (non bloquant)", uniteLegaleDataLoaded: false,
        })
      }
    }
    catch(error){
      console.log(error);
      throw error;
    }
  }

  // Données comptables
  onAnneeExerciceChange = (event) => {
    let anneeExercice = this.state.anneeExercice;
    let input = parseInt(event.target.value);
    anneeExercice = isNaN(input) | !/^[0-9]*$/.test(event.target.value) ? undefined : input.toString().substring(0,4);
    this.setState({anneeExercice: anneeExercice});
  }

  // Message & Coordonnees
  onMessageChange = (event) => {
    this.setState({message: event.target.value})
  }
  onCoordonneesChange = (event) => {
    this.setState({coordonnees: event.target.value})
  }
  onCheckboxChange = (event) => {
    this.setState({certificationAutorisation: !this.state.certificationAutorisation})
  }

  onPrixLibreChange = (event) => {
    this.setState({prixLibre: !this.state.prixLibre, prix: ""});
    console.log(this.state.prixLibre);
    console.log(this.state.prix);
  }
  onPrixChange = (event) => {
    let input = parseInt(event.target.value);
    this.setState({prix: isNaN(input) ? undefined : input});
  }

  // Données - Impacts directs
  setValue = (event) => {
    let valeurs = this.state.valeurs;
    let value = parseFloat(event.target.value.replace(",","."));
    valeurs[this.state.selectedIndicator] = isNaN(value) ? undefined : value ;
    this.setState({valeurs});
  }
  setUncertainty = (event) => {
    let incertitudes = this.state.incertitudes;
    let value = parseFloat(event.target.value.replace(",","."));
    incertitudes[this.state.selectedIndicator] = isNaN(value) ? undefined : value ;
    this.setState({incertitudes});
  }

  submitForm = async(event) => {
    event.preventDefault();
    const objet = "Déclaration simplifiée (via website)";
    const siren = this.state.siren + " ("+this.state.anneeExercice+")";
    const note = this.state.message;
    const coordonnees = this.state.coordonnees;
    const participation = this.state.prixLibre ? "Participation : "+this.state.prix+" €" : "Pas de participation";

    // Obtention des valeurs
    const valeurs = this.state.valeurs;
    const incertitudes = this.state.incertitudes;
    const values = {};
    Object.entries(indicators).map(([index,indicator],_) => {
      if (!isNaN(valeurs[indicator])) { 
        values[indicator] = {
          valeur: valeurs[indicator],
          incertitude: incertitudes[indicator]
      }}
    });

    if (this.state.certificationAutorisation
        & Object.keys(values).length>0
        & coordonnees!="") {
      const res = await sendDeclarationMail(objet,siren,values,note,participation,coordonnees);
      if (res.status < 300) {
        this.setState ({
          declarationSend: true,
          messageButton: "Demande de publication envoyée"
        })
      } else {
        this.setState({messageButton: "Merci de remplir tous les champs."})
      }
    } else {
      console.log("here");
      const message = 
        (Object.keys(values).length==0 ? "(Aucune valeur déclarée)" : "(Coordoonées manquantes)");
      this.setState({messageButton: "Merci de remplir tous les champs "+message})
    }
  }

}

/* ViewMenu : Controls the selected view that must be displayed */
function IndicatorViewMenu({selected, parent}){
  return (
    <div className="menu">
      <div id="menu-items">
        {Object.entries(indicators).map(
          ([index,indicator],_) => (
            <button key={indicator}
                    onClick = {() => parent.setState({selectedIndicator: indicator})}
                    className={ (indicator == selected) ? "menu-button-inverse" : "menu-button"}>
              {indicator.toUpperCase()}
            </button>
          ))}
      </div>
    </div>
  );
}

/* Indicator Declaration View */
function IndicatorView({indic,indicData,value,uncertainty,setValue,setUncertainty}){

    return (
      <div id="indicator-view">
        <h3>
          {indicData.libelle}
        </h3>
        <div id="info-indicateur">
          <a href={"../indicateur/"+indic} target="_blank">Description de l'indicateur</a>
        </div>
        <div className="input">
          <p>Valeur : </p>
          <input type="text" value={value} onChange={setValue} />
          <p>  {indicData.unit}</p>
        </div>
        <div className="input">
          <p>Incertitude : </p>
          <input type="text" value={uncertainty} onChange={setUncertainty} />
          <p>  %</p>
        </div>
      </div>
    )

}

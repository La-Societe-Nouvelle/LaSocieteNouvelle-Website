import Head from 'next/head'
import Header from './header.js'
import Footer from './footer.js'

import React, {useState} from 'react';

import styles from '../styles/Home.module.css'

import {sendDeclarationMail} from './api/mail-api.js'
import { render } from 'react-dom';

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
const impactsDirectsIncertitudes = {
  eco:0, art:0, soc:0, knw:0, dis:0, geq:0, ghg:50, mat:50, was:50, nrg:50, wat:25, haz:50
}
const defaultIncertitudes = {
  eco:75, art:100, soc:100, knw:100, dis:50, geq:75, ghg:1000, mat:1000, was:1000, nrg:1000, wat:1000, haz:10000
}

/* Fetch default data */
Home.getInitialProps = async () => {
  try{
    const endpoint = `${apiBaseUrl}/default?pays=FRA`;
    const response = await fetch(endpoint, {method:'get'});
    const data = await response.json();
    const isLoaded = data.header.statut===200;
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
    <div className={styles.container}>
      <Head>
        <title>La Société Nouvelle</title>
        <link rel="icon" href="/resources/logo_miniature.jpg" />
      </Head>

      <Header/>

      <main className={styles.main}>

        <h1>
        Declaration - Procédure simplifiée
        </h1>
        <p>
          La déclaration simplifiée permet de déclarer vos impacts directs.
          La qualité de la production disponible en France (PIB et Importations) est affectée aux charges externes.
          Du fait de l'analyse incomplète, les incertitudes liées aux valeurs peuvent être élevées, notamment sur les indicateurs environnementaux.
        </p>

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
      // xp state
      selectedIndicator: "eco",
      message: "",
      coordonnees: "",
      certificationAutorisation: false,
      declarationSend: false,
      
      // Legal entity data
      siren: "",
      messageSIRENE: "Saisissez votre numéro de siren (9 chiffres)",
      uniteLegaleDataLoaded:false,
      uniteLegaleData: {},
      defaultCSF: {},

      // Accounting data
      donneesComptables: {
        debutExercice: undefined, finExercice: undefined,
        chiffreAffaires: undefined, valeurAjouteeNette: undefined},

      // ES impacts
      donneesImpacts: {
        eco: undefined, art: undefined, soc: undefined, knw: undefined, dis: undefined, geq: undefined,
        ghg: undefined, mat: undefined, was: undefined, nrg: undefined, wat: undefined, haz: undefined},

      // Default data
      defaultData: props.defaultData,
    };
  }

  render() {
    const {selectedIndicator,
           message,coordonnees,certificationAutorisation,declarationSend,
           siren,uniteLegaleDataLoaded,uniteLegaleData,defaultCSF,
           donneesComptables,donneesImpacts,
           defaultData} = this.state;
    
    const valueImpact = donneesImpacts[selectedIndicator]!==undefined ? donneesImpacts[selectedIndicator] : "";       
    const reference = uniteLegaleDataLoaded ? defaultCSF[selectedIndicator.toUpperCase()] : undefined;
    const indicData = defaultData[selectedIndicator.toUpperCase()];

    const btnClass = (declarationSend | !certificationAutorisation) ? "disabled" : "";

    return (

          <div className="declarationForm">
            
            <div id="general-data" className="strip">
              <h2>
              Informations légales
              </h2>
              <div className="input">
                <p>Numéro de siren </p>
                <input id="siren-input" type="text" value={siren} onChange={this.onSirenChange} />
                <p>{this.state.messageSIRENE}</p>
              </div>
              <div>
                <p>Dénomination sociale : {uniteLegaleDataLoaded ? uniteLegaleData.denomination : " - "}</p>
                <p>{uniteLegaleDataLoaded ? uniteLegaleData.activitePrincipaleLibelle : ""}</p>
              </div>
            </div>
            
            <div id="accounting-data" className="strip">
              <h2>
              Informations comptables
              </h2>
              <div id="dates-exercices">
                <div className="input">
                  <p>Début d'exercice </p>
                  <input type="date" value={donneesComptables.debutExercice} onChange={this.onDebutExerciceChange} />
                </div>
                <div className="input">
                  <p>Fin d'exercice </p>
                  <input type="date" value={donneesComptables.finExercice} onChange={this.onFinExerciceChange} />
                </div>
              </div>
              <div className="input">
                <p>Chiffre d'Affaires* </p>
                <input type="text" value={donneesComptables.chiffreAffaires!==undefined ? donneesComptables.chiffreAffaires : ""} onChange={this.onChiffreAffairesChange} />
                <p>  €</p>
              </div>
              <div className="input">
                <p>Valeur Ajoutée Nette* </p>
                <input type="text" value={donneesComptables.valeurAjouteeNette!==undefined ? donneesComptables.valeurAjouteeNette : ""} onChange={this.onValeurAjouteeNetteChange} />
                <p>  € (taux de Valeur Ajoutée : {(donneesComptables.chiffreAffaires!==undefined & donneesComptables.valeurAjouteeNette!==undefined) ? Math.round(donneesComptables.valeurAjouteeNette/donneesComptables.chiffreAffaires*100) : " - "} %)</p>
              </div>
              <p id="note">* Les valeur sont utilisées uniquement sur la page pour obtenir les valeurs. Elles ne sont ni transmises, ni enregistrées.</p>
            </div>

            <h2>
              Indicateurs
            </h2>
            <IndicatorViewMenu selected={selectedIndicator} parent={this}/>
            
            <IndicatorView indic={selectedIndicator}
                       indicData={indicData}
                       valueImpact={valueImpact}
                       setValue={this.setValue}
                       donneesComptables={donneesComptables}
                       reference={reference}/>

            <h2>
              Informations complémentaires
            </h2>
            <div className="form-item">
              <label>
              Message
              </label>
              <textarea id="message-input" type="text" value={message} onChange={this.onMessageChange} />
            </div>
            <div className="form-item">
              <label>
              Vos coordonnées
              </label>
              <textarea id="coordonnees-input" type="text" value={coordonnees} onChange={this.onCoordonneesChange} />
            </div>

            <div className="input">
              <input type="checkbox" onChange={this.onCheckboxChange} />
              <p> Je certifie être autorisée à soumettre la déclaration ci-présente</p>
            </div>

            <button className={btnClass} id="submit-assessment" onClick={this.submitForm}>Valider la publication</button>

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
      this.setState({
        messageSIRENE: message,
        uniteLegaleDataLoaded: false,
        defaultCSFLoaded: false,
      })
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
          messageSIRENE: "OK",
          uniteLegaleDataLoaded: true,
          uniteLegaleData: data.profil.descriptionUniteLegale,
          defaultCSFLoaded: true,
          defaultCSF : data.profil.empreinteSocietale,
        })
      } else {
        this.setState({
          messageSIRENE: "numéro non reconnu (non bloquant)",
          uniteLegaleDataLoaded: false,
          defaultCSFLoaded: false,
        })
      }
    }
    catch(error){
      console.log(error);
      throw error;
    }
  }


  // Données comptables
  onDebutExerciceChange = (event) => {
    let donneesComptables = this.state.donneesComptables;
    donneesComptables.debutExercice = event.target.value;
    this.setState({donneesComptables});
  }
  onFinExerciceChange = (event) => {
    let donneesComptables = this.state.donneesComptables;
    donneesComptables.finExercice = event.target.value;
    this.setState({donneesComptables});
  }
  onChiffreAffairesChange = (event) => {
    let donneesComptables = this.state.donneesComptables;
    let input = parseInt(event.target.value);
    donneesComptables.chiffreAffaires = isNaN(input) ? undefined : input;
    this.setState({donneesComptables});
  }
  onValeurAjouteeNetteChange = (event) => {
    let donneesComptables = this.state.donneesComptables;
    let input = parseInt(event.target.value);
    donneesComptables.valeurAjouteeNette = isNaN(input) ? undefined : input;
    this.setState({donneesComptables});
  }

  // Message & Coordonnees
  onMessageChange = (event) => {
    this.setState({message: event.target.value})
  }
  onCoordonneesChange = (event) => {
    this.setState({coordonnees: event.target.value})
  }
  onCheckboxChange = (event) => {
    this.setState({certificationAutorisation: true})
  }

  // Données - Impacts directs
  setValue = (event) => {
    let donneesImpacts = this.state.donneesImpacts;
    let value = parseFloat(event.target.value.replace(",","."));
    donneesImpacts[this.state.selectedIndicator] = isNaN(value) ? undefined : value ;
    this.setState({donneesImpacts});
  }

  submitForm = async(event) => {
    event.preventDefault();
    const recipientMail = "sylvain.humiliere@la-societe-nouvelle.fr";
    const objet = "Déclaration simplifiée (via website)";
    const siren = this.state.siren;
    const note = this.state.message;
    const coordonnees = this.state.coordonnees;
    const {valeurAjouteeNette,chiffreAffaires,finExercice} = this.state.donneesComptables;
    const donneesImpacts = this.state.donneesImpacts;
    const defaultData = this.state.defaultData;
    if (valeurAjouteeNette!==null & chiffreAffaires!==null & finExercice!==null) {
      const values = {};
      Object.entries(this.state.donneesImpacts).map(([indicateur],_) => {
        let [quality,uncertainty] = getQuality(indicateur,donneesImpacts[indicateur],valeurAjouteeNette,defaultData[indicateur.toUpperCase()].value,chiffreAffaires);
        if (!isNaN(quality)) { values[indicateur] = {
          valeur: quality,
          incertitude: uncertainty
        }}
      });
      const res = await sendDeclarationMail(recipientMail,objet,siren,values,note,coordonnees);
      if (res.status < 300) {
        this.setState ({
          declarationSend: true
        })
      } else {
        this.setState({formButtontext: "Merci de remplir tous les champs."})
      }
    }
  }

}

/* Quality */
function getQuality(indic,impactDirect,valeurAjouteeNette,defaultValue,chiffreAffaires) {
  if (impactDirect!==null & impactDirect!=="" 
      & valeurAjouteeNette!==null & valeurAjouteeNette!==""
      & chiffreAffaires!=null & chiffreAffaires!==""
      & defaultValue!==null) {

    let NVAi = impactsDirectsIncertitudes[indic];
    let Ci = defaultIncertitudes[indic];
    let precision = 1;
    let NVAq = undefined;

    if (["eco","art","soc","knw"].indexOf(indic) > -1) {
      NVAq = impactDirect*100/valeurAjouteeNette;
      precision = 10;
    } else if (["dis","geq"].indexOf(indic) > -1) {
      NVAq = impactDirect;
      precision = 10;
    } else if (["wat","haz"].indexOf(indic) > -1) {
      NVAq = impactDirect*1000/valeurAjouteeNette;
      precision = 10;
    } else {
      NVAq = impactDirect*1000/valeurAjouteeNette;
    }

    let quality = (NVAq*valeurAjouteeNette + defaultValue*(chiffreAffaires-valeurAjouteeNette))/chiffreAffaires ;
    let qualityMax = (NVAq*coefUp(NVAi,indic)*valeurAjouteeNette + defaultValue*coefUp(Ci,indic)*(chiffreAffaires-valeurAjouteeNette))/chiffreAffaires;
    let qualityMin = (NVAq*coefDown(NVAi)*valeurAjouteeNette + defaultValue*coefDown(Ci)*(chiffreAffaires-valeurAjouteeNette))/chiffreAffaires;
    let uncertainty = Math.max(qualityMax-quality,quality-qualityMin)/quality*100;
    return[Math.round(quality*precision)/precision,Math.round(uncertainty)];

  } else {
    return[undefined,undefined];
  }
}
function coefUp(value,indic) {
  if (["eco","art","soc","knw","dis","geq"].indexOf(indic) > -1) {
    return Math.min((100+value)/100,100);
  } else {
    return (100+value)/100;
  }
}
function coefDown(value) {
  return Math.max((100-value)/100,0);
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
function IndicatorView({indic,indicData,valueImpact,setValue,donneesComptables,reference}){

    const [valueAddedQuality,valueAddedUncertainty]=getQuality(indic,valueImpact,donneesComptables.valeurAjouteeNette,0.0,donneesComptables.valeurAjouteeNette);
    const [revenueQuality,revenueUncertainty]=getQuality(indic,valueImpact,donneesComptables.valeurAjouteeNette,indicData.value,donneesComptables.chiffreAffaires);
    const valueReference = reference!==undefined ? reference.valueReference : indicData.value;
    
    return (
      <div id="indicator-view">
        <h3>
          {indicData.libelle}
        </h3>
        <a href={"../indicateur/"+indic} target="_blank">Description de l'indicateur</a>
        <div className="input">
          <p>Impact direct : </p>
          <input type="text" value={valueImpact} onChange={setValue} />
          <p>  {impactsDirectsUnits[indic]}</p>
        </div>
        <div className="quality-boxes">
          <div className="quality-box">
            <p className="quality-title">Qualité de la Valeur Ajoutée</p>
            <p className="quality-value">{valueAddedQuality!== undefined ? valueAddedQuality : "-"}</p>
            <p>{indicData.unit}</p>
            <p className="uncertainty">Incertitude : {valueAddedUncertainty!==undefined ? valueAddedUncertainty : "-"} %</p>
          </div>
          <div className="quality-box">
            <p className="quality-title">Qualité du Chiffre d'Affaires<br/>
               (Valeur publiée)</p>
            <p id={revenueQuality!==undefined ? "declared-value" : ""} className="quality-value">{revenueQuality!==undefined ? revenueQuality : "-"}</p>
            <p>{indicData.unit}</p>
            <p className="uncertainty">Incertitude : {revenueUncertainty!==undefined ? revenueUncertainty : "-"} %</p>
          </div>
          <div className="quality-box">
            <p className="quality-title">Valeur comparative</p>
            <p className="quality-value">{valueReference}</p>
            <p>{indicData.unit}</p>
            <p className="uncertainty">Incertitude : {defaultIncertitudes[indic]} %</p>
          </div>
        </div>
      </div>
    )

}

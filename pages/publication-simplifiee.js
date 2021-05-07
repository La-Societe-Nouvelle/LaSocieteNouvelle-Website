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
import * as IndicData from '../../public/indic-data/data.js'

// put in other file
const defaultIncertitudes = {
  eco:75, art:100, soc:100, knw:100, dis:50, geq:75, ghg:1000, mat:1000, was:1000, nrg:1000, wat:1000, haz:10000
}

/* Fetch default data */
Home.getInitialProps = async () => {
  try{
    const endpoint = `${apiBaseUrl}/default?pays=FRA`;
    const response = await fetch(endpoint, {method:'get'});
    const data = await response.json();
    //const isLoaded = data.header.statut===200; // handle error => service unvailable
    const defaultData = data.empreinteSocietale;
    return({
      defaultData
    })
  }
  catch(error){
    throw error;
  }
}

export default function Home(props) {
  return (
    <div className="container">
      <Head>
        <title>La Société Nouvelle | Publication simplifiée</title>
        <link rel="icon" href="/resources/logo_miniature.jpg" />
      </Head>
      <Header/>
      <main className="main">

        <h1>Declaration - Procédure simplifiée</h1>
        <p>La déclaration simplifiée permet d'ajuster votre Empreinte Sociétale en déclarant vos impacts directs.</p>
        <p>La qualité de la production disponible en France (PIB et Importations) est affectée aux charges externes. Du fait de l'analyse incomplète, les incertitudes liées aux valeurs peuvent être élevées, notamment sur les indicateurs environnementaux.</p>
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
      certificationAutorisation: false,
      declarationSend: false,
      prixLibre: false,
      prix: "",
      messageButton: "Valider la publication",
      
      // Legal entity data
      siren: "",
      messageSIRENE: "Saisissez votre numéro de siren (9 chiffres)",
      uniteLegaleDataLoaded:false,
      uniteLegaleData: {},
      defaultCSF: {},

      // Accounting data
      donneesComptables: {
        anneeExercice: undefined,
        chiffreAffaires: undefined,
        valeurAjoutee: undefined},

      // ES impacts
      donneesImpacts: {
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
           siren,uniteLegaleDataLoaded,uniteLegaleData,defaultCSF,
           donneesComptables,donneesImpacts,
           defaultData} = this.state;
    
    const valueImpact = donneesImpacts[selectedIndicator]!==undefined ? donneesImpacts[selectedIndicator] : "";       
    const reference = uniteLegaleDataLoaded ? defaultCSF[selectedIndicator.toUpperCase()] : undefined; // use default Data if defaultCSF undefined
    const indicData = defaultData[selectedIndicator.toUpperCase()];

    const btnClass = (declarationSend | !certificationAutorisation) ? "disabled" : "";

    return (
          <div className="declarationForm">

            <div id="general-data" className="strip">
              <h2>Informations légales</h2>
              <div className="input">
                <p>Numéro de siren </p><input id="siren-input" type="text" value={siren} onChange={this.onSirenChange} /><p> {this.state.messageSIRENE}</p>
              </div>
              <div>
                <p>Dénomination sociale : {uniteLegaleDataLoaded ? uniteLegaleData.denomination : " - "}</p>
                <p>{uniteLegaleDataLoaded ? uniteLegaleData.activitePrincipaleLibelle : ""}</p>
              </div>
            </div>

            <div id="accounting-data" className="strip">
              <h2>Informations comptables</h2>
              <div id="dates-exercices">
                <div className="input">
                  <label htmlFor="annee-exercice">Année de l'exercice</label>
                  <input type="text"
                         id="annee-exercice"
                         value={donneesComptables.anneeExercice!==undefined ? donneesComptables.anneeExercice : ""} 
                         onChange={this.onAnneeExerciceChange} />
                </div>
              </div>
              <div className="input">
                <label>Chiffre d'Affaires*</label>
                <input type="text" 
                       id="chiffre-affaires"
                       value={donneesComptables.chiffreAffaires!==undefined ? donneesComptables.chiffreAffaires : ""} onChange={this.onChiffreAffairesChange} />
                <span> &nbsp;€</span>
              </div>
              <div className="input">
                <label htmlFor="valeur-ajoutee">Valeur Ajoutée Nette*</label>
                <input type="text"
                       id="valeur-ajoutee"
                       placeholder=""
                       value={donneesComptables.valeurAjoutee!==undefined ? donneesComptables.valeurAjoutee : ""}
                       onChange={this.onValeurAjouteeChange} />
                <span> &nbsp;€</span>
              </div>
                  <div className="input">
                    <label htmlFor="taux-valeur-ajoutee">Taux de Valeur Ajoutée</label>
                    <input type="text"
                           id="taux-valeur-ajoutee"
                           disabled={true}
                           value={
                             (donneesComptables.chiffreAffaires!==undefined & donneesComptables.valeurAjoutee!==undefined)
                               ? Math.round(donneesComptables.valeurAjoutee/donneesComptables.chiffreAffaires*100) +" %": " - %"} />
                  </div>
              <p id="note">* Les données comptables sont utilisées uniquement sur la page pour obtenir les valeurs des indicateurs. Elles ne sont ni transmises, ni enregistrées.</p>
            </div>

            <div id="indicators" className="strip">
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
    let donneesComptables = this.state.donneesComptables;
    let input = parseInt(event.target.value);
    console.log(input);
    donneesComptables.anneeExercice = isNaN(input) | !/^[0-9]*$/.test(event.target.value) ? undefined : input.toString().substring(0,4);
    this.setState({donneesComptables});
  }
  onChiffreAffairesChange = (event) => {
    let donneesComptables = this.state.donneesComptables;
    let input = parseInt(event.target.value);
    donneesComptables.chiffreAffaires = isNaN(input) ? undefined : input;
    this.setState({donneesComptables});
  }
  onValeurAjouteeChange = (event) => {
    let donneesComptables = this.state.donneesComptables;
    let input = parseInt(event.target.value);
    donneesComptables.valeurAjoutee = isNaN(input) ? undefined : input;
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
    let donneesImpacts = this.state.donneesImpacts;
    let value = parseFloat(event.target.value.replace(",","."));
    donneesImpacts[this.state.selectedIndicator] = isNaN(value) ? undefined : value ;
    this.setState({donneesImpacts});
  }

  submitForm = async(event) => {
    event.preventDefault();
    const objet = "Déclaration simplifiée (via website)";
    const siren = this.state.siren + " ("+this.state.donneesComptables.anneeExercice+")";
    const note = this.state.message;
    const coordonnees = this.state.coordonnees;
    const participation = this.state.prixLibre ? "Participation : "+this.state.prix+" €" : "Pas de participation";

    // Obtention des valeurs
    const {valeurAjoutee,chiffreAffaires} = this.state.donneesComptables;
    const donneesImpacts = this.state.donneesImpacts;
    const defaultData = this.state.defaultData;
    const values = {};
    Object.entries(this.state.donneesImpacts).map(([indicateur],_) => {
      let [quality,uncertainty] = getQuality(indicateur,donneesImpacts[indicateur],valeurAjoutee,defaultData[indicateur.toUpperCase()].value,chiffreAffaires);
      if (!isNaN(quality)) { values[indicateur] = {
        valeur: quality,
        incertitude: uncertainty
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

/* Quality */
function getQuality(indic,impactDirect,valeurAjoutee,defaultValue,chiffreAffaires) {
  if (impactDirect!==undefined & impactDirect!==""
      & valeurAjoutee!==undefined & valeurAjoutee!==""
      & chiffreAffaires!=undefined & chiffreAffaires!==""
      & defaultValue!==undefined) {

    let NVAi = IndicData.defaultUncertainty[indic];
    let Ci = defaultIncertitudes[indic];
    let precision = 1;
    let NVAq = undefined;

    if (["eco","art","soc","knw"].indexOf(indic) > -1) {
      NVAq = impactDirect*100/valeurAjoutee;
      precision = 10;
    } else if (["dis","geq"].indexOf(indic) > -1) {
      NVAq = impactDirect;
      precision = 10;
    } else if (["wat","haz"].indexOf(indic) > -1) {
      NVAq = impactDirect*1000/valeurAjoutee;
      precision = 10;
    } else {
      NVAq = impactDirect*1000/valeurAjoutee;
    }

    let quality = (NVAq*valeurAjoutee + defaultValue*(chiffreAffaires-valeurAjoutee))/chiffreAffaires ;
    let qualityMax = (NVAq*coefUp(NVAi,indic)*valeurAjoutee + defaultValue*coefUp(Ci,indic)*(chiffreAffaires-valeurAjoutee))/chiffreAffaires;
    let qualityMin = (NVAq*coefDown(NVAi)*valeurAjoutee + defaultValue*coefDown(Ci)*(chiffreAffaires-valeurAjoutee))/chiffreAffaires;
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

    const [valueAddedQuality,valueAddedUncertainty]=getQuality(indic,valueImpact,donneesComptables.valeurAjoutee,0.0,donneesComptables.valeurAjoutee);
    const [revenueQuality,revenueUncertainty]=getQuality(indic,valueImpact,donneesComptables.valeurAjoutee,indicData.value,donneesComptables.chiffreAffaires);
    const valueReference = reference!==undefined ? reference.valueReference : indicData.value;

    return (
      <div id="indicator-view">
        <h3>
          {indicData.libelle}
        </h3>
        <div id="info-indicateur">
          <a href={"../indicateur/"+indic} target="_blank">Description de l'indicateur</a>
        </div>
        <div className="input">
          <p>Impact direct : </p>
          <input type="text" value={valueImpact} onChange={setValue} />
          <p>  {IndicData.unitAbsoluteCode[indic]}</p>
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

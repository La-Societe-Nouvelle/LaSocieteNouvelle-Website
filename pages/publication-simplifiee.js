import Head from 'next/head'
import Header from './header.js'
import Footer from './footer.js'

import React, {useState} from 'react';

import {sendSimplifiedAssessment} from './api/mail-api.js'

/* The base URL of the API */
/* TODO: Must be exteriorized in a build variable */
const apiBaseUrl = "https://systema-api.azurewebsites.net/api/v2";

/* Defines every possible views. Each key is a view.
   Each value contains:
   - the name of the view.
   - the associated indicators.
*/
const indicators = ["eco","art","soc","knw","dis","geq","ghg","mat","was","nrg","wat","haz"];
import * as IndicData from '../public/indic-data/data.js'

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
      message: "",
      coordonnees: "",
      prixLibre: false, prix: "",
      certificationAutorisation: false,
      declarationSend: false,

      // Legal entity data
      siren: "",
      anneeExercice: undefined,
      uniteLegaleDataLoaded: false,
      uniteLegaleData: {},

      // ES impacts
      donneesImpacts: {
        art: undefined,
        dis: undefined,
        eco: undefined,
        geq: undefined,
        ghg: undefined,
        haz: undefined,
        knw: undefined,
        mat: undefined,
        nrg: undefined,
        soc: undefined,
        was: undefined,
        wat: undefined,
      },

      // Accounting data (temp)
      donneesComptables: {
        chiffreAffaires: undefined,
        valeurAjoutee: undefined
      }

    };
  }

  render() {
    const {selectedIndicator,
           message,coordonnees,prixLibre,prix,certificationAutorisation,
           declarationSend,
           siren,anneeExercice,
           uniteLegaleDataLoaded,uniteLegaleData,
           donneesImpacts,donneesComptables,
           defaultData} = this.state;

    const valueImpact = donneesImpacts[selectedIndicator]!==undefined ? donneesImpacts[selectedIndicator] : "";
    const reference = uniteLegaleDataLoaded ? uniteLegaleData.empreinteSocietale[selectedIndicator.toUpperCase()] : undefined; // use default Data if defaultCSF undefined
    const indicData = defaultData[selectedIndicator.toUpperCase()];
    const btnClass = (declarationSend | !certificationAutorisation) ? "disabled" : "";

    return (
          <div className="declarationForm">

            <div id="general-data" className="strip">
              <h2>Informations légales</h2>
              <div className="input">
                <label>Numéro de siren </label>
                <input id="siren-input" type="text" value={siren} onChange={this.onSirenChange} />
                <span> {getMessageSiren(siren,uniteLegaleDataLoaded)}</span>
              </div>
              <div>
                <p>Dénomination sociale : {uniteLegaleDataLoaded ? uniteLegaleData.descriptionUniteLegale.denomination : " - "}</p>
                <p>{uniteLegaleDataLoaded ? uniteLegaleData.descriptionUniteLegale.activitePrincipaleLibelle : ""}</p>
              </div>
            </div>

            <div id="accounting-data" className="strip">
              <h2>Informations comptables</h2>
              <div className="input">
                <label htmlFor="annee-exercice">Année de l'exercice</label>
                <input type="text"
                        id="annee-exercice"
                        value={anneeExercice!==undefined ? anneeExercice : ""}
                        onChange={this.onAnneeExerciceChange} />
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
                           value={getValueAddedRate(donneesComptables.valeurAjoutee,donneesComptables.chiffreAffaires) +" %"} />
                  </div>
              <p id="note">* Les données comptables sont utilisées uniquement sur la page pour obtenir les valeurs des indicateurs. Elles ne sont ni transmises, ni enregistrées.</p>
            </div>

            <div id="indicators" className="strip">
              <h2>Indicateurs</h2>
              <IndicatorViewMenu selected={selectedIndicator} parent={this}/>
              <IndicatorView indic={selectedIndicator}
                        indicData={indicData}
                        valueImpact={valueImpact}
                        setValue={this.setValue}
                        donneesComptables={donneesComptables}
                        reference={reference}/>
            </div>

            <div id="further-info" className="strip">
              <h2>Informations complémentaires</h2>
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

              <button className={btnClass} id="submit-assessment" onClick={this.submitAssessment}>{getMessageButton(declarationSend,siren,coordonnees)}</button>
            </div>
          </div>

    )
  }

  /* --- SIREN --- */
  onSirenChange = (event) => {
    this.setState({siren: event.target.value})
    if (event.target.value.length===9 & !isNaN(parseFloat(event.target.value))) {
      this.getLegalUnitData(event.target.value);
    } else {
      this.setState({ uniteLegaleDataLoaded: false, defaultCSFLoaded: false })
    }
  }
  // Fetch legal unit data
  getLegalUnitData = async (siren) => {
    try{
      const endpoint = `${apiBaseUrl}/siren/${siren}`;
      const response = await fetch(endpoint, {method:'get'});
      const data = await response.json();
      if (data.header.statut===200) {
        this.setState({uniteLegaleDataLoaded: true, uniteLegaleData: data.profil })
      } else {
        this.setState({uniteLegaleDataLoaded: false })
      }
    } catch(error){
      throw error;
    }
  }

  /* --- Financial data --- */
  onAnneeExerciceChange = (event) => {
    let anneeExercice = this.state.anneeExercice;
    let input = parseInt(event.target.value);
    anneeExercice = isNaN(input) | !/^[0-9]*$/.test(event.target.value) ? undefined : input.toString().substring(0,4);
    this.setState({anneeExercice: anneeExercice});
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

  /* --- Set values --- */
  setValue = (event) => {
    let donneesImpacts = this.state.donneesImpacts;
    let value = parseFloat(event.target.value.replace(",","."));
    donneesImpacts[this.state.selectedIndicator] = isNaN(value) ? undefined : value ;
    this.setState({donneesImpacts});
  }

  /* --- Assessment message --- */
  onMessageChange = (event) => { this.setState({message: event.target.value}) }
  onCoordonneesChange = (event) => { this.setState({coordonnees: event.target.value}) }
  onCheckboxChange = (event) => { this.setState({certificationAutorisation: !this.state.certificationAutorisation}) }
  onPrixLibreChange = (event) => { this.setState({prixLibre: !this.state.prixLibre, prix: ""}); }
  onPrixChange = (event) => {
    let input = parseInt(event.target.value);
    this.setState({prix: isNaN(input) ? undefined : input});
  }

  /* --- Submit assessment --- */
  submitAssessment = async(event) => {
    event.preventDefault();

    const siren = this.state.siren + " ("+this.state.anneeExercice+")";
    const message = this.state.message;
    const coordonnees = this.state.coordonnees;
    const participation = this.state.prixLibre ? "Participation : "+this.state.prix+" €" : "Pas de participation";
    const assessment = buildAssessedValues(this.state.donneesImpacts, this.state.donneesComptables, this.state.defaultData);

    if (this.state.certificationAutorisation & coordonnees!="" & siren!="") {
      const res = await sendSimplifiedAssessment(siren,assessment,message,coordonnees,participation);
      this.setState({declarationSend: res.status<300});
    }
  }

}


/* ----- ViewMenu : Controls the selected view that must be displayed ----- */
function IndicatorViewMenu({selected, parent}){
  return (
    <div className="menu">
      <div id="menu-items">
        {Object.entries(indicators).map(
          ([index,indicator],_) => (
            <button key={indicator}
                    onClick = {() => parent.setState({selectedIndicator: indicator})}
                    className= {"menu-button " +
                                ((indicator == selected) ? "selected" : "")}>
              {indicator.toUpperCase()}
            </button>
          ))}
      </div>
    </div>
  );
}

/* ----- Indicator Declaration View ----- */
function IndicatorView({indic,indicData,valueImpact,setValue,donneesComptables,reference}){

    const valueAddedQuality=Math.round(getQualityValueAdded(indic,valueImpact,donneesComptables.valeurAjoutee)*10)/10;
    const valueAddedUncertainty = defaultIncertitudes[indic];
    const [revenueQuality,revenueUncertainty]=getQuality(indic,valueImpact,donneesComptables,indicData.value);
    const valueReference = reference!==undefined ? reference.valueReference : indicData.value;

    return (
      <div id="indicator-view">
        <h3>{indicData.libelle}</h3>
        <div id="info-indicateur">
          <a href={"../indicateur/"+indic} target="_blank">Description de l'indicateur</a>
        </div>
        <div className="input">
          <label>Impact direct : </label>
          <input type="text" value={valueImpact} onChange={setValue} />
          <span>  {IndicData.indicateurs.unitAbsoluteCode[indic]}</span>
        </div>
        <div className="quality-boxes">
          <div className="quality-box">
            <p className="quality-title">Qualité de la Valeur Ajoutée</p>
            <p className="quality-value">{valueAddedQuality!== undefined & !isNaN(valueAddedQuality) ? valueAddedQuality : "-"}</p>
            <p>{indicData.unit}</p>
            <p className="uncertainty">Incertitude : {valueAddedUncertainty!==undefined ? valueAddedUncertainty : "-"} %</p>
          </div>
          <div className="quality-box">
            <p className="quality-title">Qualité du Chiffre d'Affaires<br/>(Valeur publiée)</p>
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

/* ----- Formulas ----- */

// Quality & Uncertainty
function getQuality(indic,impactDirect,donneesComptables,defaultValue) {

  let valeurAjoutee = donneesComptables.valeurAjoutee;
  let chiffreAffaires = donneesComptables.chiffreAffaires;

  if (impactDirect!==undefined & impactDirect!==""
      & valeurAjoutee!==undefined & valeurAjoutee!==""
      & chiffreAffaires!=undefined & chiffreAffaires!==""
      & defaultValue!==undefined) {

    let NVAq = getQualityValueAdded(indic,impactDirect,valeurAjoutee);
    let NVAi = IndicData.indicateurs.defaultUncertainty[indic];
    let Ci = defaultIncertitudes[indic];
    let NvaRate = getValueAddedRate(valeurAjoutee,chiffreAffaires)/100;

    let quality = NVAq*NvaRate + defaultValue*(1.0-NvaRate) ;

    let qualityMax = NVAq*NvaRate*coefUp(NVAi,indic)  + defaultValue*(1.0-NvaRate)*coefUp(Ci,indic);
    let qualityMin = NVAq*NvaRate*coefDown(NVAi)      + defaultValue*(1.0-NvaRate)*coefDown(Ci);
    let uncertainty = Math.max(qualityMax-quality,quality-qualityMin)/quality*100;

    return[Math.round(quality*getPrecision(indic))/getPrecision(indic),Math.round(uncertainty)];
  } else {
    return[undefined,undefined];
  }
}

// Quality Net Value Added
function getQualityValueAdded(indic,impactDirect,valeurAjoutee) {
  if        (["eco","art","soc","knw"].indexOf(indic) > -1)   { return impactDirect*100/valeurAjoutee; }
  else if   (["dis","geq"].indexOf(indic) > -1)               { return impactDirect; }
  else                                                        { return impactDirect*1000/valeurAjoutee; }
}

// Net Value Added Rate
function getValueAddedRate(valeurAjoutee,chiffreAffaires) {
  if    (valeurAjoutee!==undefined & chiffreAffaires!==undefined) { return Math.round(valeurAjoutee/chiffreAffaires*100) }
  else                                                            { return " - " }
}

// Rounding
function getPrecision(indic) {
  if        (["eco","art","soc","knw","dis","geq","wat","haz"].indexOf(indic) > -1)   { return 10; }
  else                                                                                { return  1; }
}

// Coef uncertainty
function coefUp(value,indic) {
  if (["eco","art","soc","knw","dis","geq"].indexOf(indic) > -1)  { return Math.min((100+value)/100,100); }
  else                                                            { return (100+value)/100; }
}
function coefDown(value) {
  return Math.max((100-value)/100,0);
}

// Assessed values
function buildAssessedValues(donneesImpacts,donneesComptables,defaultData) {
  let assessment = {};
  Object.entries(donneesImpacts).map(([indicateur],_) => {
    let [quality,uncertainty] = getQuality(indicateur,donneesImpacts[indicateur],donneesComptables,defaultData[indicateur.toUpperCase()].value);
    if (!isNaN(quality)) { assessment[indicateur] = {
      value: quality,
      uncertainty: uncertainty
    }};
  });
  return assessment;
}

/* ----- Builder message ----- */

function getMessageSiren(siren,uniteLegaleDataLoaded) {
  if (/[0-9]{9}/.test(siren) & uniteLegaleDataLoaded)  { return "OK" }
  else if (/[0-9]{9}/.test(siren))                     { return "(non reconnu)" }
  else if (siren.length>0 & !/[0-9]{1,9}/.test(siren)) { return "erreur format" }
  else                                                 { return "" }
}

function getMessageButton(declarationSend,siren,coordonnees) {
  if (declarationSend)        { return "Demande de publication envoyée"}
  else if (siren==="")        { return "Numéro de siren manquant"}
  else if (coordonnees==="")  { return "Coordonnées manquantes"}
  else                        { return "Envoyer la publication" }
}

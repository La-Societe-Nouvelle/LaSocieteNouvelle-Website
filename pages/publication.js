import React from 'react';

import Head from 'next/head'
import Header from './header.js'
import Footer from './footer.js'

import EmblaCarousel from '../src/lasocietenouvelle/component/carousel.js';

import {sendAssessment} from './api/mail-api.js'

/* The base URL of the API */
/* TODO: Must be exteriorized in a build variable */
const apiBaseUrl = "https://systema-api.azurewebsites.net/api/v2";

/* Defines every possible views. Each key is a view.
   Each value contains:
   - the name of the view.
   - the associated indicators.
*/
const indicators = ["eco","art","soc","knw","dis","geq","ghg","mat","was","nrg","wat","haz"];

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
      // general experience state
      selectedIndicator: "eco",
      message: "",
      coordonnees: "",
      prixLibre: false,prix: "",
      certificationAutorisation: false,
      declarationSend: false,

      // Legal entity data
      siren: "",
      anneeExercice: undefined,
      uniteLegaleDataLoaded:false,
      uniteLegaleData: {},

      // ES impacts
      assessment: {}
    }
  }

  render() {
    const {message,coordonnees,certificationAutorisation,prixLibre,prix,
           declarationSend,
           siren,anneeExercice,
           uniteLegaleDataLoaded,uniteLegaleData,
           assessment} = this.state;
    const {defaultData} = this.props;
    

    let disabled = (declarationSend | !certificationAutorisation);

    return (
          <div className="declarationForm">
            <div id="general-data" className="strip">
              <h2>Informations légales</h2>
              <div className="siren-input input">
                <label>Numéro de siren </label>
                <input id="siren-input" type="text" value={siren} onChange={this.onSirenChange} />
                <span> {getMessageSiren(siren,uniteLegaleDataLoaded)}</span>
              </div>
              <div className="input">
                <label htmlFor="annee-exercice">Année de l'exercice</label>
                <input type="text"
                        id="annee-exercice"
                        value={anneeExercice!==undefined ? anneeExercice : ""}
                        onChange={this.onAnneeExerciceChange} />
              </div>
              <div>
                <p>Dénomination sociale : {uniteLegaleDataLoaded ? uniteLegaleData.descriptionUniteLegale.denomination : " - "}</p>
                <p>Activité principale : {uniteLegaleDataLoaded ? uniteLegaleData.descriptionUniteLegale.activitePrincipaleLibelle : ""}</p>
                <p>Siège : {uniteLegaleDataLoaded ? uniteLegaleData.descriptionUniteLegale.communeSiege+" ("+uniteLegaleData.descriptionUniteLegale.codePostalSiege+")" : ""}</p>
              </div>
            </div>    
              
            <EmblaCarousel
             assessmentType="final"
             assessment={assessment}
             onIndicatorCommit={this.commitIndicator.bind(this)}/>
                
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
              <div className="input" id="certification">
                <input type="checkbox" onChange={this.onCheckboxChange} /><label htmlFor="certification">Je certifie être autorisé(e) à soumettre la déclaration ci-présente.</label>
              </div>
              <p>La publication des données est soumise à un prix libre. Les revenus permettent de couvrir les frais d'hébergement, de maintenance et d'accessibilité des données.</p>
              <div className="input" id="contribution">
                <input type="checkbox" onChange={this.onPrixLibreChange} />
                <label htmlFor="contribution">J'accepte de contribuer, montant : </label>
                <input type="text"
                      id="contribution"
                      disabled={!prixLibre}
                      value={prix}
                      onChange={this.onPrixChange} />
                <span> &nbsp;€</span>
              </div>
              <button className="form-btn submit" id="submit-assessment" onClick={this.submitAssessment} disabled={disabled}>{getMessageButton(declarationSend,siren,coordonnees,certificationAutorisation)}</button>
            </div>
          </div>
    )
  }

  /* --- Submit commit --- */
  commitIndicator = (commitedIndicator, value, uncertainty, skipped) =>
  {
    let assessment = this.state.assessment;
    // When skipped : the assessment is set to an empty object (The indicator has been purposefully skipped)
    // When fully filled : the assessment is set to a non-empty object (The indicator has been filled (data can be retrieved later))
    assessment[commitedIndicator] = skipped ? {} : {value, uncertainty};
    this.setState({assessment});
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
    const assessment = this.state.assessment;

    if (this.state.certificationAutorisation & coordonnees!="" &siren!="") {
      const res = await sendAssessment(siren,assessment,message,coordonnees,participation);
      this.setState({declarationSend: res.status<300});
    }
  }
}

/* ----- Counter Indicator ----- */
function IndicatorCounter({counter, counted}){
  return (
    <div className="counter">
      Complété(s) : {counter}/{counted}
    </div>
  );
}

/* ----- ViewMenu : Controls the selected view that must be displayed ----- */
function IndicatorViewMenu({selected, parent}){
  return (
    <div className="menu">
      <div className="menu-items">
        {Object.entries(indicators).map(
          ([index,indicator],_) => (
            <button key={indicator}
                    onClick = {() => parent.setState({selectedIndicator: indicator})}
                    className={"menu-button " +
                               ((indicator == selected) ? "selected" : "")}>
              <span></span>
              {indicator.toUpperCase()}
              <span id={"validated-" + indicator.toString()} className=""></span>
            </button>
          ))
        }
      </div>
    </div>
  );
}

/* ----- Builder message ----- */

function getMessageSiren(siren,uniteLegaleDataLoaded) {
  if (/[0-9]{9}/.test(siren) & uniteLegaleDataLoaded)  { return "OK" }
  else if (/[0-9]{9}/.test(siren))                     { return "(non reconnu)" }
  else if (siren.length>0 & !/[0-9]{1,9}/.test(siren)) { return "erreur format" }
  else                                                 { return "" }
}

function getMessageButton(declarationSend,siren,coordonnees,autorisation) {
  if (declarationSend)        { return "Demande de publication envoyée"}
  else if (siren==="")        { return "Numéro de siren manquant"}
  else if (coordonnees==="")  { return "Coordonnées manquantes"}
  else if (!autorisation)     { return "Autorisation manquante"}
  else                        { return "Envoyer la publication" }
}
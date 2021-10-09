// La Société Nouvelle

// react
import React from 'react';

import Head from 'next/head'
import Header from '../src/components/header.js'
import Footer from '../src/components/footer.js'

import { sendAssessment } from './api/mail-api.js'

/* The base URL of the API */
/* TODO: Must be exteriorized in a build variable */
const apiBaseUrl = "https://systema-api.azurewebsites.net/api/v2";

/* Defines every possible views. Each key is a view.
   Each value contains:
   - the name of the view.
   - the associated indicators.
*/
const indicators = ["eco","art","soc","knw","dis","geq","ghg","mat","was","nrg","wat","haz"];

import * as IndicData from '../public/indic-data/data';

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
      //
      step: 0,
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

      // Statements
      socialfootprint: Object.fromEntries(indicators.map(indic => [indic,{value: null,uncertainty: null, info: null}]))
    }
  }

  render() 
  {
    const {step,certificationAutorisation,declarationSend} = this.state; 
    
    console.log(this.state.socialfootprint);

    return (
      <div className="declarationForm">
        {this.buildForm(step)}
      </div>
    )
  }

  buildForm = (step) => 
  {
    switch(step)
    {
      case 0: return <LegalDataForm onCommit={this.commit.bind(this)}/>
      case 1: return <SocialFootprintForm socialfootprint={this.state.socialfootprint}
                                          onCommit={this.commit.bind(this)}/>
      case 2: return <ContactDetailsForm/>
    }
  }

  /* --- Submit commit --- */

  commit = () => {
    this.setState({step: this.state.step+1});
  }

  /* --- Submit assessment --- */
  submitAssessment = async(event) => 
  {
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

class LegalDataForm extends React.Component {

  // form for legal data

  constructor(props)
  {
    super(props);
    this.state = {
      siren: "",
      anneeExercice: undefined,
      uniteLegaleDataLoaded:false,
      uniteLegaleData: {},
    }
  }

  render()
  {
    const {siren,anneeExercice,uniteLegaleDataLoaded,uniteLegaleData} = this.state;

    const isAllValid = /[0-9]{9}/.test(siren) && /[0-9]{4}/.test(anneeExercice);

    return(
      <div id="general-data" className="strip">
        <h2>Informations légales</h2>

        <div className="form_inner">
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
        <button disabled={!isAllValid} onClick={this.commit}>Valider</button>
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

  commit = () => this.props.onCommit();

}

/* ---------- SOCIALFOOTPRINT STATEMENT ---------- */

const SocialFootprintForm = ({socialfootprint,onCommit}) => {

  // form for each indicator
  // inputs : value / uncertainty / infos

  const onUpdateProps = (nextProps) => socialfootprint[nextProps.indic] = nextProps
  const commit = () => onCommit();

  return(
    <div className="strip">
      <h2>Déclaration des données</h2>
      <div className="form_inner">
        {indicators.map(indic => <IndicatorForm key={indic} indic={indic} {...socialfootprint[indic]} updateProps={onUpdateProps}/>)}
      </div>
      <button onClick={commit}>Valider</button>
    </div>
  )

}
class IndicatorForm extends React.Component {

  // form for each indicator
  // inputs : value / uncertainty / infos

  constructor(props)
  {
    super(props);
    this.state = {
      value: props.value || "",
      uncertainty: props.uncertainty || "",
      info: props.info || ""
    }
  }

  render()
  {
    const {indic} = this.props;
    const {value,uncertainty,info} = this.state;

    return(
      <div className="group">
        <h3>{IndicData.indicateurs.libelle[indic]}</h3>
        <div className="input">
          <label>Valeur :</label>
          <input type="text" 
                 value={value} 
                 onChange={this.onValueChange}
                 onBlur={this.onBlur} />
          <span>&nbsp;{IndicData.indicateurs.unitCode[indic]}</span>
        </div>
        <div className="input">
          <label>Incertitude :</label>
          <input type="text" 
                 value={uncertainty} 
                 onChange={this.onUncertaintyChange}
                 onBlur={this.onBlur} />
          <span>&nbsp;%</span>
        </div>
        <div className="form-item">
          <label>Informations complémentaires :</label>
          <textarea type="text" 
                    value={info} 
                    onChange={this.onInfoChange}
                    onBlur={this.onBlur} />
        </div>
      </div>
    )
  }

  onValueChange = (event) => this.setState({value: event.target.value})
  onUncertaintyChange = (event) => this.setState({uncertainty: event.target.value})
  onInfoChange = (event) => this.setState({info: event.target.value})

  onBlur = () => this.props.updateProps({indic: this.props.indic,...this.state})

}

class ContactDetailsForm extends React.Component {

  // form for contact details

  constructor(props)
  {
    super(props);
    this.state = {
      message: props.message,
      coordonnees: "",
      contribution: false,
      certificationAutorisation: false
    }
  }

  render()
  {
    const {message,coordonnees,certificationAutorisation,contribution} = this.state;
    
    return(
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
          <input type="checkbox" onChange={this.onContributionChange} />
          <label htmlFor="contribution">J'accepte de contribuer, montant : </label>
          <input type="text"
                 id="contribution"
                 disabled={!contribution}
                 value={"25"}
                 onChange={this.onPrixChange} />
          <span> &nbsp;€</span>
        </div>
        <button className="form-btn submit" id="submit-assessment" onClick={this.props.onCommit} disabled={false}>{getMessageButton(false,coordonnees,certificationAutorisation)}</button>
      </div>
    )
  }

  /* --- Assessment message --- */
  onMessageChange = (event) => { this.setState({message: event.target.value}) }
  onCoordonneesChange = (event) => { this.setState({coordonnees: event.target.value}) }
  onCheckboxChange = (event) => { this.setState({certificationAutorisation: !this.state.certificationAutorisation}) }
  onContributionChange = (event) => { this.setState({prixLibre: !this.state.prixLibre, prix: ""}); }
  onPrixChange = (event) => {
    let input = parseInt(event.target.value);
    this.setState({prix: isNaN(input) ? undefined : input});
  }


}


/* ----- Builder message ----- */

function getMessageSiren(siren,uniteLegaleDataLoaded) {
  if (/[0-9]{9}/.test(siren) & uniteLegaleDataLoaded)  { return "OK" }
  else if (/[0-9]{9}/.test(siren))                     { return "(non reconnu)" }
  else if (siren.length>0 & !/[0-9]{1,9}/.test(siren)) { return "erreur format" }
  else                                                 { return "" }
}

function getMessageButton(coordonnees,autorisation) {
  if (false)        { return "Demande de publication envoyée"}
  //else if (siren==="")        { return "Numéro de siren manquant"}
  else if (coordonnees==="")  { return "Coordonnées manquantes"}
  else if (!autorisation)     { return "Autorisation manquante"}
  else                        { return "Envoyer la publication" }
}
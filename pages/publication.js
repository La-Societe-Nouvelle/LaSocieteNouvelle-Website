// La Société Nouvelle

// react
import React, { useState } from 'react';

// Components
import Head from 'next/head'
import Header from '../src/components/header.js'
import Footer from '../src/components/footer.js'

import { sendAssessment, sendStatementToAdmin } from './api/mail-api.js'

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
import { exportStatementPDF, getPDF } from '../src/outputs/statementWriter.js';

/* ---------- MAIN FUNCTION ---------- */

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

/* ---------- FOOTPRINT STATEMENT FORM ---------- */

class Form extends React.Component {

  constructor(props) {
    super(props);
    this.state = 
    {
      // Progression
      step: 6,

      // Legal entity data (steps 1 to 3)
      siren: "889182770",
      denomination: "LA SOCIETE NOUVELLE",
      year: "2020",

      // Statements (step 4 & 5)
      socialfootprint: {"eco" : {value: 75.0, uncertainty: 10.0, info: ""},"wat" : {value: 7.5, uncertainty: 15.0, info: ""}},
      message: "",

      // declarant data (step 6 & 7)
      declarant: "HUMILIERE Sylvain",
      email: "",
      phone: "",
      autorisation: false,

      // prix
      price: "25",
      declarationSend: false,
    }
  }

  render() 
  {
    const {step} = this.state; 

    console.log(this.state);
    
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
      case 1: return <SirenForm {...this.state} commitSiren={this.commitSiren.bind(this)}/>
      case 2: return <DenominationForm {...this.state} commitDenomination={this.commitDenomination.bind(this)} goBack={this.goBack.bind(this)}/>
      case 3: return <YearForm {...this.state} commitYear={this.commitYear.bind(this)} goBack={this.goBack.bind(this)}/>
      case 4: return <SocialFootprintForm {...this.state} commitSocialFootprint={this.commitSocialFootprint.bind(this)} goBack={this.goBack.bind(this)}/>
      case 5: return <ContactDetailsForm {...this.state} commitDeclarant={this.commitDeclarant.bind(this)} goBack={this.goBack.bind(this)}/>
      case 6: return <PriceForm {...this.state} commitPrice={this.commitPrice.bind(this)} goBack={this.goBack.bind(this)}/>
      case 7: return <Summary {...this.state} exportStatement={this.exportStatement.bind(this)} submitStatement={this.submitAssessment.bind(this)} goBack={this.prevStep.bind(this)}/>
      case 8: return <EndForm />
    }
  }

  /* --- Submit commit --- */

  nextStep = () => this.setState({step: this.state.step+1}); 
  prevStep = () => this.setState({step: this.state.step-1});

  commit = () => this.setState({step: this.state.step+1})
  goBack = () => this.setState({step: this.state.step-1})

  // Commit siren
  commitSiren = async (siren) => 
  {
    // fetch denomination
    try{
      const endpoint = `${apiBaseUrl}/siren/${siren}`;
      const response = await fetch(endpoint, {method:'get'});
      const data = await response.json();
      if (data.header.statut===200) {
        this.setState({siren: siren, 
                       denomination: data.profil.descriptionUniteLegale.denomination,
                       step: 2})
      } else {
        this.setState({siren: siren,
                       step: 2})
      }
    } catch(error) {
      throw error;
    }
  }

  // Commit denomination
  commitDenomination = (denomination) => this.setState({denomination: denomination, step: 3})

  // Commit year
  commitYear = (year) => this.setState({year: year, step: 4})
  
  // Commit values
  commitSocialFootprint = (socialfootprint) => this.setState({socialfootprint: socialfootprint, step: 5})
  
  // Commit Declarant
  commitDeclarant = (declarant,email,autorisation) => this.setState({declarant: declarant, email: email, autorisation: autorisation, step: 6})
  
  // Commit price
  commitPrice = (price) => this.setState({price: price, step: 7})

  // Export statement
  exportStatement = () => exportStatementPDF(this.state)

  /* --- Submit assessment --- */
  submitAssessment = async (event) => 
  {
    event.preventDefault();

    const message = mailToAdminWriter(this.state);

    const doc = getPDF(this.state);
    const file = doc.output('datauristtring');

    const res = await sendStatementToAdmin(message,file);
    this.setState({declarationSend: res.status<300, step: 8});
  }
}

/* ----- SIREN FORM ----- */
const SirenForm = ({siren,commitSiren}) => 
{
  const [sirenInput, setSiren] = useState(siren);
  const onSirenChange = (event) => setSiren(event.target.value);
  const onEnterPress = (event) => {if (event.which==13) event.target.blur()}
  const onCommit = () => commitSiren(sirenInput)

  const isAllValid = /^[0-9]{9}$/.test(sirenInput);

  return(
    <div className="strip">
      <h2>Numéro de siren</h2>
      <div className="form_inner">
        <div className="siren-input input">
          <label>Numéro de siren (9 chiffres) : </label>
          <input id="siren-input" type="text" value={sirenInput} onChange={onSirenChange} onKeyPress={onEnterPress}/>
        </div>
      </div>
      <div className="form_footer">
        <button disabled={!isAllValid} onClick={onCommit}>Valider</button>
      </div>
    </div> 
  )
}

/* ----- DENOMINATION FORM ----- */
const DenominationForm = ({denomination,commitDenomination,goBack}) => 
{
  const [denominationInput, setDenomination] = useState(denomination);
  const onDenominationChange = (event) => setDenomination(event.target.value);
  const onEnterPress = (event) => {if (event.which==13) event.target.blur()};
  const onCommit = () => commitDenomination(denominationInput);
  const onGoBack = () => goBack();

  const isAllValid = denomination.length > 0;

  return(
    <div id="general-data" className="strip">
      <h2>Informations légales</h2>
      <div className="form_inner">
        <div className="siren-input input long left">
          <label>Dénomination sociale : </label>
          <input id="denomination-input" type="text" value={denominationInput} onChange={onDenominationChange} onKeyPress={onEnterPress}/>
        </div>
      </div>
      <div className="form_footer">
        <button onClick={onGoBack}>Retour</button>
        <button disabled={!isAllValid} onClick={onCommit}>Valider</button>
      </div>
    </div> 
  )
}

/* ----- YEAR FORM ----- */
const YearForm = ({year,commitYear,goBack}) => 
{
  const [yearInput, setYear] = useState(year);
  const onYearChange = (event) => setYear(event.target.value);
  const onEnterPress = (event) => {if (event.which==13) event.target.blur()}
  const onCommit = () => commitYear(yearInput);
  const onGoBack = () => goBack();

  const isAllValid = /20[0-1][0-9]/.test(yearInput) || /202[0-1]/.test(yearInput);

  return(
    <div id="general-data" className="strip">
      <h2>Année de référence</h2>
      <div className="form_inner">
        <div className="siren-input input">
          <label>Année de l'exercice (fin) : </label>
          <input id="year-input" type="text" value={yearInput} onChange={onYearChange} onKeyPress={onEnterPress}/>
        </div>
      </div>
      <div className="form_footer">
        <button onClick={onGoBack}>Retour</button>
        <button disabled={!isAllValid} onClick={onCommit}>Valider</button>
      </div>
    </div> 
  )
}

/* ---------- SOCIAL FOOTPRINT FORM ---------- */

const SocialFootprintForm = ({socialfootprint,commitSocialFootprint,goBack}) => 
{
  const onUpdateProps = (nextProps) => socialfootprint[nextProps.indic] = nextProps;
  const onCommit = () => commitSocialFootprint(socialfootprint);
  const onGoBack = () => goBack();

  return(
    <div className="strip">
      <h2>Déclaration des données</h2>
      <div className="form_inner">
        {indicators.map(indic => <IndicatorForm key={indic} indic={indic} {...socialfootprint[indic]} updateProps={onUpdateProps}/>)}
      </div>
      <div className="form_footer">
        <button onClick={onGoBack}>Retour</button>
        <button onClick={onCommit}>Valider</button>
      </div>
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

    const isValueValid = /[0-9]*[.,][0-9]*/.test(value);
    const isUncertaintyValid = isValueValid && /[0-9]*[.,][0-9]*/.test(uncertainty);

    return(
      <div className="indicator-form">
        <h3>{IndicData.indicateurs.libelle[indic]}</h3>
        <a className="text-link" href={"https://lasocietenouvelle.org/indicateur/"+indic} target="_blank">Informations sur l'indicateur</a>
        <div className="input">
          <label>Valeur :</label>
          <input type="text" 
                 value={value} 
                 onChange={this.onValueChange}
                 onBlur={this.onBlur} 
                 onKeyPress={this.onEnterPress}/>
          <span>&nbsp;{IndicData.indicateurs.unitCode[indic]}</span>
        </div>
        <div className="input">
          <label>Incertitude :</label>
          <input type="text" 
                 value={uncertainty} 
                 onChange={this.onUncertaintyChange}
                 onBlur={this.onBlur} 
                 onKeyPress={this.onEnterPress}/>
          <span>&nbsp;%</span>
        </div>
        <div className="input-column">
          <label>Informations complémentaires :</label>
          <textarea type="text" 
                    value={info} 
                    onChange={this.onInfoChange}
                    onBlur={this.onBlur} 
                    onKeyPress={this.onEnterPress}/>
        </div>
      </div>
    )
  }

  onValueChange = (event) => this.setState({value: event.target.value})
  onUncertaintyChange = (event) => this.setState({uncertainty: event.target.value})
  onInfoChange = (event) => this.setState({info: event.target.value})
  onBlur = () => this.props.updateProps({indic: this.props.indic,...this.state})
  onEnterPress = (event) => {if (event.which==13) event.target.blur()}

}

/* ----- DECLARANT FORM ----- */
class ContactDetailsForm extends React.Component {

  // form for contact details

  constructor(props)
  {
    super(props);
    this.state = {
      declarant: props.declarant,
      email: props.declarant,
      autorisation: props.autorisation
    }
  }

  render()
  {
    const {declarant,email,autorisation} = this.state;

    const isAllValid = declarant.length > 0 && email.length > 0 && autorisation;
    
    return(
      <div id="further-info" className="strip">
        <h2>Déclarant</h2>
        <div className="form_inner">
          <div className="input-column">
            <label>Nom - Prénom : </label>
            <textarea className="textarea-line" type="text" value={declarant} onChange={this.onDeclarantChange} />
          </div>
          <div className="input-column">
            <label>Adresse e-mail : </label>
            <textarea className="textarea-line" type="text" value={email} onChange={this.onEmailChange} />
          </div>
          <div className="input" id="certification">
            <input type="checkbox" onChange={this.onCheckboxChange}/><label htmlFor="certification">Je certifie être autorisé(e) à soumettre la déclaration ci-présente.</label>
          </div>
        </div>
        <div className="form_footer">
          <button onClick={this.onGoBack}>Retour</button>
          <button disabled={!isAllValid} onClick={this.onCommit}>Valider</button>
        </div>
      </div>
    )
  }

  /* --- Assessment message --- */
  onDeclarantChange = (event) => { this.setState({declarant: event.target.value})}
  onEmailChange = (event) => { this.setState({email: event.target.value}) }
  onCheckboxChange = () => { this.setState({autorisation: !this.state.autorisation})}
  onCommit = () => this.props.commitDeclarant(this.state.declarant,this.state.email,this.state.autorisation);
  onGoBack = () => this.props.goBack();

}

/* ----- PRICE FORM ----- */
const PriceForm = ({price,commitPrice,goBack}) => 
{
  const [priceInput, setPrice] = useState(price);
  const changePrice = (event) => setPrice(event.target.value);
  const onCommit = () => commitPrice(priceInput);

  return(
    <div id="general-data" className="strip">
      <h2>Coût de la formalité</h2>
      <div className="form_inner">
        <div className="radio-button-input">
          <div className="input">
            <input id="price" type="radio" value="0" checked={priceInput=="0"} onChange={changePrice}/>
            <label>Première déclaration : publication offerte</label>
          </div>
          <div className="input">
            <input id="price" type="radio" value="25" checked={priceInput=="25"} onChange={changePrice}/>
            <label>Société unipersonnelle : 25 €</label>
          </div>
          <div className="input">
            <input id="price" type="radio" value="50" checked={priceInput=="50"} onChange={changePrice}/>
            <label>Société : 50 €</label>
          </div>
          <div className="input">
            <input id="price" type="radio" value="10" checked={priceInput=="10"} onChange={changePrice}/>
            <label>Organise à but non lucratif : 10 €</label>
          </div>
        </div>
        </div>
      <div>
        <p>Les revenus couvrent la réalisation des formalités, ainsi que les frais d'hébergement et de maintenance pour l'accessibilité des données.</p>
      </div>
      <div className="form_footer">
        <button onClick={goBack}>Retour</button>
        <button disabled={priceInput==""} onClick={onCommit}>Valider</button>
      </div>
    </div> 
  )
}

/* ----- DECLARANT FORM ----- */
const Summary = ({siren,denomination,socialfootprint,year,declarant,price,exportStatement,submitStatement,goBack}) => 
{
  return(
    <div className="strip">
      <h2>Recapitulatif</h2>
      <div className="summary">
        <p><b>Siren : </b>{siren}</p>
        <p><b>Dénomination : </b>{denomination}</p>
        <p><b>Année : </b>{year}</p>
        <p><b>Indicateurs : </b></p>
        {Object.entries(socialfootprint).map(([indic,_]) => <p key={indic}>&emsp;{IndicData.indicateurs.libelle[indic]}</p>)}
        <p><b>Fait le </b>25/10/2021<b> par </b>{declarant}</p>
        <p>Coût de la formalité : {price} €</p>
      </div>
      <div className="form_footer">
        <button onClick={goBack}>Retour</button>
        <button onClick={exportStatement}>Télécharger</button>
        <button onClick={submitStatement}>Envoyer</button>
      </div>
    </div> 
  )
}

/* ---------- END ---------- */

const EndForm = () => 
{
  return(
    <div className="strip">
      <h2>Déclaration envoyée</h2>
    </div>
  )
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

const mailToAdminWriter = (statementData) => 
(
    "Unité légale : "+statementData.siren + "\r"
  + "Dénomination : "+statementData.denomination + "\r"
  + "Année : "+statementData.year + "\r"
  + "\r"
  + "Valeurs à publier :" + "\r"
  + "\r"
  + Object.entries(statementData.socialfootprint).map(([indic,data]) => 
    (indic+" : "+data.value+" +/- "+data.uncertainty+" % "+(data.info.length > 0 ? "("+data.info+")" : "")+"\r"))
  + "\r"
  + "Déclarant :" + "\r"
  + "Nom : "+statementData.declarant + "\r"
  + "Mail : "+statementData.email + "\r"
  + "\r"
  + "Tarif :" +statementData.price +" €" + "\r"
)

const mailToDeclarantWriter = (statementData) => 
(
    "Unité légale : "+statementData.siren + "\r"
  + "Dénomination : "+statementData.denomination + "\r"
  + "Année : "+statementData.year + "\r"
  + "\r"
  + "Valeurs à publier :" + "\r"
  + "\r"
  + Object.entries(statementData.socialfootprint).map(([indic,data]) => 
    (indic+" : "+data[indic].value+" +/- "+data[indic].uncertainty+" % "+(data.info.length > 0 ? "("+data.info+")" : "")+"\r"))
  + "\r"
  + "Déclarant :" + "\r"
  + "Nom : "+statementData.declarant + "\r"
  + "Mail : "+statementData.email + "\r"
  + "\r"
  + "Tarif :" +statementData.price +" €" + "\r"
)
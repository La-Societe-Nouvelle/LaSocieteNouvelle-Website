// La Société Nouvelle

// react
import React, { useState } from 'react';

// Components
import Head from 'next/head'
import Header from '../src/components/header.js'
import Footer from '../src/components/footer.js'

import { sendStatementToAdmin, sendStatementToDeclarant } from './api/mail-api.js'

/* The base URL of the API */
/* TODO: Must be exteriorized in a build variable */
const apiBaseUrl = "https://systema-api.azurewebsites.net/api/v2";

/* Defines every possible views. Each key is a view.
   Each value contains:
   - the name of the view.
   - the associated indicators.
*/

import metaData from '../public/indic-data/metaData';
import { exportStatementPDF, getBinaryPDF } from '../src/outputs/statementWriter.js';

/* ---------- MAIN FUNCTION ---------- */

export default function Home(props) 
{
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
      step: 1,

      // Legal entity data (steps 1 to 3)
      siren: "",
      denomination: "",
      year: "",

      // Statements (step 4)
      socialfootprint: {},

      // declarant data (step 5)
      declarant: "",
      email: "",
      phone: "",
      autorisation: false,

      // tarif (step 6)
      price: ""
    }
  }

  render() 
  {
    return (
      <div className="declarationForm">
        {this.buildForm()}
      </div>
    )
  }

  buildForm = () => 
  {
    switch(this.state.step)
    {
      case 0: return <ErrorMessage />
      case 1: return <SirenInput {...this.state} commitSiren={this.commitSiren.bind(this)}/>
      case 2: return <DenominationInput {...this.state} commitDenomination={this.commitDenomination.bind(this)} goBack={this.goBack.bind(this)}/>
      case 3: return <YearInput {...this.state} commitYear={this.commitYear.bind(this)} goBack={this.goBack.bind(this)}/>
      case 4: return <SocialFootprintForm {...this.state} commitSocialFootprint={this.commitSocialFootprint.bind(this)} goBack={this.goBack.bind(this)}/>
      case 5: return <DeclarantForm {...this.state} commitDeclarant={this.commitDeclarant.bind(this)} goBack={this.goBack.bind(this)}/>
      case 6: return <PriceInput {...this.state} commitPrice={this.commitPrice.bind(this)} goBack={this.goBack.bind(this)}/>
      case 7: return <Summary {...this.state} exportStatement={this.exportStatement.bind(this)} submitStatement={this.submitStatement.bind(this)} goBack={this.prevStep.bind(this)}/>
      case 8: return <StatementSendingMessage />
      case 9: return <StatementSendMessage />
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
                       denomination: "",
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
  submitStatement = async (event) => 
  {
    event.preventDefault();
    this.setState({step: 8})
    
    const statementFile = getBinaryPDF(this.state);

    const messageToAdmin = mailToAdminWriter(this.state);
    const resAdmin = await sendStatementToAdmin(messageToAdmin,statementFile);

    const messageToDeclarant = mailToDeclarantWriter(this.state);
    const resDeclarant = await sendStatementToDeclarant(this.state.email,messageToDeclarant,statementFile);

    if (resAdmin.status<300 && resDeclarant<300) this.setState({step: 9})
    else this.setState({step: 0})
  }
}

/* ----- SIREN FORM ----- */
const SirenInput = ({siren,commitSiren}) => 
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
        <p>Etape 1/7</p>
        <div className="actions">
          <button disabled={!isAllValid} onClick={onCommit}>Valider</button>
        </div>
      </div>
    </div> 
  )
}

/* ----- DENOMINATION FORM ----- */
const DenominationInput = ({denomination,commitDenomination,goBack}) => 
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
        <p>Etape 2/7</p>
        <div className="actions">
          <button onClick={onGoBack}>Retour</button>
          <button disabled={!isAllValid} onClick={onCommit}>Valider</button>
        </div>
      </div>
    </div> 
  )
}

/* ----- YEAR FORM ----- */
const YearInput = ({year,commitYear,goBack}) => 
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
          <label>Année de l'exercice<sup>1</sup> : </label>
          <input id="year-input" type="text" value={yearInput} onChange={onYearChange} onKeyPress={onEnterPress}/>
        </div>
        <p className="note"><sup>1</sup> Année en fin d'exercice si l'exercice se déroule sur deux années civiles.</p>
      </div>
      <div className="form_footer">
        <p>Etape 3/7</p>
        <div className="actions">
          <button onClick={onGoBack}>Retour</button>
          <button disabled={!isAllValid} onClick={onCommit}>Valider</button>
        </div>
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
        {metaData.indics.map(indic => <IndicatorForm key={indic} indic={indic} {...socialfootprint[indic]} updateProps={onUpdateProps}/>)}
      </div>
      <div className="form_footer">
        <p>Etape 4/7</p>
        <div className="actions">
          <button onClick={onGoBack}>Retour</button>
          <button onClick={onCommit}>Valider</button>
        </div>
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
        <h3>{metaData.libelle[indic]}</h3>
        <div className="input-intro">
          <a className="text-link" href={"https://lasocietenouvelle.org/indicateur/"+indic} target="_blank">Informations sur l'indicateur</a>
        </div>
        <div className="inputs">
          <div className="input">
            <label>Valeur :</label>
            <input type="text" 
                  value={value} 
                  onChange={this.onValueChange}
                  onBlur={this.onBlur} 
                  onKeyPress={this.onEnterPress}/>
            <span>&nbsp;{metaData.unitCode[indic]}</span>
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
                      onBlur={this.onBlur}/>
          </div>
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
class DeclarantForm extends React.Component {

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
          <p>Etape 5/7</p>
          <div className="actions">
            <button onClick={this.onGoBack}>Retour</button>
            <button disabled={!isAllValid} onClick={this.onCommit}>Valider</button>
          </div>
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
const PriceInput = ({price,commitPrice,goBack}) => 
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
        <p>Etape 6/7</p>
        <div className="actions">
          <button onClick={goBack}>Retour</button>
          <button disabled={priceInput==""} onClick={onCommit}>Valider</button>
        </div>
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
        {Object.entries(socialfootprint).map(([indic,_]) => <p key={indic}>&emsp;{metaData.libelle[indic]}</p>)}
        {Object.entries(socialfootprint).length == 0 &&
          <p>&emsp; - </p>}
        <p><b>Fait le : </b>25/10/2021</p>
        <p><b>Déclarant : </b>{declarant}</p>
        <p><b>Coût de la formalité : </b>{price} €</p>
      </div>
      <div className="form_footer">
        <p>Etape 7/7</p>
        <div className="actions">
          <button onClick={goBack}>Retour</button>
          <button onClick={exportStatement}>Télécharger</button>
          <button onClick={submitStatement}>Envoyer</button>
        </div>
      </div>
    </div> 
  )
}

/* ---------- END ---------- */

const StatementSendingMessage = () => 
{
  return(
    <div className="strip">
      <h2>Déclaration validée</h2>
      <div className="form_inner">
        <p>Envoi en cours...</p>
      </div>
    </div>
  )
}

const StatementSendMessage = () => 
{
  return(
    <div className="strip">
      <h2>Déclaration validée</h2>
      <div className="form_inner">
        <p>Demande de publication envoyée ! Merci.</p>
      </div>
    </div>
  )
}

const ErrorMessage = () => 
{
  return(
    <div className="strip">
      <div className="form_inner">
        <p>Error</p>
      </div>
    </div>
  )
}

/* ----- Builder message mails ----- */

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
    statementData.declarant+"," + "\r"
  + "\r"
  + "Votre demande de publication a bien été prise en compte. Vous trouverez ci-joint votre déclaration." + "\r"
  + "Le délai de traitement est de 7 jours." + "\r"
  + "\r"
  + "Pour modifier ou supprimer les données publiées, contactez-nous directement via cette adresse mail" + "\r"
  + "\r"
  + "Bien à vous," + "\r"
  + "\r"
  + "La Société Nouvelle." + "\r"
)
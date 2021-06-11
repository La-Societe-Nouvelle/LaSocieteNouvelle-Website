import React from 'react'

import Head from 'next/head'
import Header from './header.js'
import Footer from './footer.js'

import {sendSimplifiedAssessment} from './api/mail-api.js'
import EmblaCarousel from '../src/lasocietenouvelle/component/carousel.js';

/* The base URL of the API */
const apiBaseUrl = "https://systema-api.azurewebsites.net/api/v2";


/* Fetch default data */
Home.getInitialProps = async () => {
  try{
    const endpoint = `${apiBaseUrl}/default?pays=FRA&flow=GAP`;
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

/* ---------- MAIN FUNCTION ---------- */

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
        <p>Les valeurs déclarées sont complétées par des données issues de statistiques macroéconomiques selon la branche d'activité de l'entreprise. Du fait de l'analyse incomplète, les incertitudes liées aux valeurs peuvent être élevées. En cas de doute, n'hésitez pas à nous solliciter.</p>
        <Form defaultData={props.defaultData}/>
      </main>
      <Footer/>
    </div>
  )
}

/* ---------- FORM ---------- */

class Form extends React.Component {

  constructor(props) {
    super(props);
    this.state = 
    {
      // Default data
      defaultData: props.defaultData,
      reference: props.defaultData,

      // general experience state
      selectedIndicator: "eco",
      message: "",
      coordonnees: "",
      prixLibre: false, prix: "",
      certificationAutorisation: false,
      declarationSend: false,

      // Legal entity data
      siren: "",
      anneeExercice: null,
      uniteLegaleDataLoaded: false,
      uniteLegaleData: {},

      // Accounting data (temp)
      donneesComptables: {
        chiffreAffaires: null,
        valeurAjoutee: null
      },

      // Assessment
      assessment: {},
    };
  }

  render() {
    const {selectedIndicator,
      siren,uniteLegaleDataLoaded,uniteLegaleData,
      anneeExercice,donneesComptables,
      defaultData,reference,
      assessment,
      message,coordonnees,prixLibre,prix,certificationAutorisation,declarationSend,
          } = this.state;

    // Form button
    const btnClass = (declarationSend | !certificationAutorisation) ? "disabled" : "";
    // Props for assessment view in embla carousel
    let indicatorViewProps = {
      defaultData: defaultData,
      valeurAjoutee: donneesComptables.valeurAjoutee,
      chiffreAffaires: donneesComptables.chiffreAffaires,
      reference: reference}

    return (
          <div className="declarationForm">

            <div id="general-data" className="strip">
              <h2>Informations légales </h2>
              <div className="input">
                <label>Numéro de siren </label>
                <input id="siren-input" type="text" value={siren} onChange={this.onSirenChange} />
                <span> {getMessageSiren(siren,uniteLegaleDataLoaded)}</span>
              </div>
              <div>
                <p>Dénomination sociale : {uniteLegaleDataLoaded ? uniteLegaleData.descriptionUniteLegale.denomination : ""}</p>
                <p>Activité principale : {uniteLegaleDataLoaded ? uniteLegaleData.descriptionUniteLegale.activitePrincipaleLibelle : ""}</p>
                <p>Siège : {uniteLegaleDataLoaded ? uniteLegaleData.descriptionUniteLegale.communeSiege+" ("+uniteLegaleData.descriptionUniteLegale.codePostalSiege+")" : ""}</p>
              </div>
            </div>

            <div id="accounting-data" className="strip">
              <h2>Informations comptables</h2>
              <div className="input">
                <label htmlFor="annee-exercice">Année de l'exercice </label>
                <input type="text"
                        id="annee-exercice"
                        value={anneeExercice!==null ? anneeExercice : ""}
                        onChange={this.onAnneeExerciceChange} />
              </div>
              <div className="input">
                <label>Chiffre d'Affaires* </label>
                <input type="text"
                       id="chiffre-affaires"
                       value={donneesComptables.chiffreAffaires!==null ? donneesComptables.chiffreAffaires : ""} onChange={this.onChiffreAffairesChange} />
                <span> &nbsp;€</span>
              </div>
              <div className="input">
                <label htmlFor="valeur-ajoutee">Valeur Ajoutée Nette* </label>
                <input type="text"
                       id="valeur-ajoutee"
                       placeholder=""
                       value={donneesComptables.valeurAjoutee!==null ? donneesComptables.valeurAjoutee : ""}
                       onChange={this.onValeurAjouteeChange} />
                <span> &nbsp;€</span>
              </div>
                  <div className="input">
                    <label htmlFor="taux-valeur-ajoutee">Taux de Valeur Ajoutée</label>
                    <input type="text"
                           id="taux-valeur-ajoutee"
                           disabled={true}
                           value={getValueAddedRate(donneesComptables.valeurAjoutee,donneesComptables.chiffreAffaires)} />
                    <span> &nbsp;%</span>
                  </div>
              <p id="note">* Les données comptables sont utilisées uniquement sur la page pour obtenir les valeurs des indicateurs. Elles ne sont ni transmises, ni enregistrées.</p>
            </div>

            <EmblaCarousel
              assessmentType="simplified"
              assessment={assessment}
              indicatorViewProps={indicatorViewProps}
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
              <div className="input">
                <input type="checkbox" onChange={this.onCheckboxChange} /><p> Je certifie être autorisé(e) à soumettre la déclaration ci-présente</p>
              </div>
              <p>La publication des données est soumise à un prix libre. Les revenus permettent de couvrir les frais d'hébergement, de maintenance et d'accessibilité des données.</p>

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

              <button className="form-btn submit" id="submit-assessment" 
              disabled={!this.canFormBeSend()}
              onClick={this.submitAssessment}>{getMessageButton(declarationSend,siren,coordonnees,certificationAutorisation)}</button>
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
      this.updateDefaultData('00');
      this.updateReference('00');
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
        this.updateDefaultData(data.profil.descriptionUniteLegale.activitePrincipale.substring(0,2));
        this.updateReference(data.profil.descriptionUniteLegale.activitePrincipale.substring(0,2));
      } else {
        this.setState({uniteLegaleDataLoaded: false });
        this.updateDefaultData('00');
        this.updateReference('00');
      }
    } catch(error){
      throw error;
    }
  }
  updateDefaultData = async (codeActivite) => {
    try{
      const endpoint = `${apiBaseUrl}/default?pays=FRA&activite=`+codeActivite+'&flow=IC';
      const response = await fetch(endpoint, {method:'get'});
      const data = await response.json();
      if (data.header.statut===200) {
        this.setState({defaultData: data.empreinteSocietale })
      }
    }
    catch(error){
      throw error;
    }
  }
  updateReference = async (codeActivite) => {
    try{
      const endpoint = `${apiBaseUrl}/default?pays=FRA&activite=`+codeActivite+'&flow=PRD';
      const response = await fetch(endpoint, {method:'get'});
      const data = await response.json();
      console.log(data);
      if (data.header.statut===200) {
        this.setState({reference: data.empreinteSocietale })
      }
    }
    catch(error){
      throw error;
    }
  }

  /* --- Financial data --- */
  onAnneeExerciceChange = (event) => {
    let anneeExercice = this.state.anneeExercice;
    let input = parseInt(event.target.value);
    anneeExercice = isNaN(input) | !/^[0-9]*$/.test(event.target.value) ? null : input.toString().substring(0,4);
    this.setState({anneeExercice: anneeExercice});
  }
  onChiffreAffairesChange = (event) => {
    let donneesComptables = this.state.donneesComptables;
    let input = parseInt(event.target.value);
    donneesComptables.chiffreAffaires = isNaN(input) ? null : input;
    this.setState({donneesComptables});
  }
  onValeurAjouteeChange = (event) => {
    let donneesComptables = this.state.donneesComptables;
    let input = parseInt(event.target.value);
    donneesComptables.valeurAjoutee = isNaN(input) ? null : input;
    this.setState({donneesComptables});
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

  /* --- Set values --- */
  setValue = (event) => {
    let donneesImpacts = this.state.donneesImpacts;
    let value = parseFloat(event.target.value.replace(",","."));
    donneesImpacts[this.state.selectedIndicator].value = isNaN(value) ? undefined : value ;
    this.setState({donneesImpacts});
  }
  setSkipped = (event) => {
    let donneesImpacts = this.state.donneesImpacts;
    donneesImpacts[this.state.selectedIndicator].skipped = event.target.checked;
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
  canFormBeSend() {
    return (
      this.state.siren!="" 
      & this.state.coordonnees!="" 
      & this.state.certificationAutorisation
      & !this.state.declarationSend)
  }

  submitAssessment = async(event) => {
    event.preventDefault();

    const siren = this.state.siren + " ("+this.state.anneeExercice+")";
    const message = this.state.message;
    const coordonnees = this.state.coordonnees;
    const participation = this.state.prixLibre ? "Participation : "+this.state.prix+" €" : "Pas de participation";
    const assessment = this.state.assessment;

    if (this.state.certificationAutorisation & coordonnees!="" & siren!="") {
      const res = await sendSimplifiedAssessment(siren,assessment,message,coordonnees,participation);
      this.setState({declarationSend: res.status<300});
    }
  }

}

// Net Value Added Rate
function getValueAddedRate(valeurAjoutee,chiffreAffaires) {
  if    (valeurAjoutee!==null & chiffreAffaires!==null) { return Math.round(valeurAjoutee/chiffreAffaires*100) }
  else                                                            { return " - " }
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

function getSaveButtonProps(value, checked) {
  let disabled = (!checked && (value==="")); // parse to int
  let message = disabled ? "Remplir les données de l'indicateur ou cocher la case" : "Sauvegarder";
  return {disabled, message};
}
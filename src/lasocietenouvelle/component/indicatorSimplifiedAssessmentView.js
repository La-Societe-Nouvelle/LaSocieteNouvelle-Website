import React from 'react';

import * as IndicData from '../../../public/indic-data/data.js'

// put in other file
const defaultIncertitudes = {
  eco:75, art:100, soc:100, knw:100, dis:50, geq:75, ghg:1000, mat:1000, was:1000, nrg:1000, wat:1000, haz:10000
}
const defaultIncertitudesNVA = {
  eco:0, art:0, soc:0, knw:0, dis:0, geq:0, ghg:50, mat:50, was:50, nrg:50, wat:25, haz:50
}

export class IndicatorSimplifiedAssessmentView extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      uncertainty: "",
      skipped: "",
    }
  }
  
  componentDidUpdate(prevProps) {
    if (prevProps.valeurAjoutee !== this.props.valeurAjoutee | prevProps.chiffreAffaires !== this.props.chiffreAffaires) {
      if (this.state.value!=="" & !this.state.skipped) {
        let indic = this.props.indic;
        let [value,uncertainty] = getQuality(indic,this.state.value,this.state.uncertainty,this.props.valeurAjoutee,this.props.chiffreAffaires,this.props.defaultData[indic.toUpperCase()].value);
        this.props.onUpdate(
            indic,
            value,
            uncertainty,
            this.state.skipped);
      }
    }
  }

  render() {
    
    const {value,uncertainty,skipped} = this.state;
    const {indic,defaultData,valeurAjoutee,chiffreAffaires,reference} = this.props;

    let {message, disabled} = getSaveButtonProps(value,skipped)
    const valueAddedQuality = Math.round(getQualityValueAdded(indic,value,valeurAjoutee)*10)/10;
    const [revenueQuality,revenueUncertainty] = getQuality(indic,value,uncertainty,valeurAjoutee,chiffreAffaires,defaultData[indic.toUpperCase()].value);

    let isFinancialDataSet = (
      valeurAjoutee!==undefined & valeurAjoutee!=="" & valeurAjoutee!==null
      & chiffreAffaires!=undefined & chiffreAffaires!=="" & chiffreAffaires!==null);

    return (
      <div className="indicateur-form">
        <h3>{IndicData.indicateurs.libelle[indic]}</h3>
        <div className="info-indicateur">
          <a href={"../indicateur/"+indic} target="_blank">Description de l'indicateur</a>
        </div>
        <div>
          <p>Valeur à renseigner : {IndicData.indicateurs.descriptionImpactDirect[indic]} (en {IndicData.indicateurs.unitAbsoluteCode[indic]})</p>
        </div>
        <div className="input">
          <label>Impact direct : </label>
          <input 
            type="text" 
            value={value} 
            onChange={this.onValueChange}/>
          <span>&nbsp;{IndicData.indicateurs.unitAbsoluteCode[indic]}</span>
        </div>
        <div className="input">
          <label>Incertitude : </label>
          <input 
            type="text" 
            value={uncertainty} 
            onChange={this.onUncertaintyChange}
            disabled={["eco","art","dis","geq","knw","soc"].indexOf(indic) > -1}/>
          <span>&nbsp; %</span>
        </div>
        <div className="input">
          <input type="checkbox" id="skipped" name="skipped" checked={skipped} onChange={this.setSkipped}/>
          <label htmlFor="skipped">Je ne dispose pas de cette information</label>
        </div>
        <div className="quality-boxes">
          <div className="quality-box">
            <p className="quality-title">Qualité de la Valeur Ajoutée</p>
            <p className="quality-value">{valueAddedQuality!== undefined & !isNaN(valueAddedQuality) ? valueAddedQuality : "-"}</p>
            <p>{defaultData[indic.toUpperCase()].unit}</p>
            <p className="uncertainty">Incertitude : {uncertainty!=="" ? uncertainty : "-"} %</p>
          </div>
          <div className="quality-box">
            <p className="quality-title">Qualité du Chiffre d'Affaires<br/>(Valeur publiée)</p>
            <p id={revenueQuality!==undefined ? "declared-value" : ""} className="quality-value">{revenueQuality!==undefined ? revenueQuality : "-"}</p>
            <p>{defaultData[indic.toUpperCase()].unit}</p>
            <p className="uncertainty">Incertitude : {revenueUncertainty!==undefined ? revenueUncertainty : "-"} %</p>
          </div>
          <div className="quality-box">
            <p className="quality-title">Valeur comparative</p>
            <p className="quality-value">{reference[indic.toUpperCase()].value}</p>
            <p>{reference[indic.toUpperCase()].unit}</p>
            <p className="uncertainty">Incertitude : {reference[indic.toUpperCase()].uncertainty} %</p>
          </div>
        </div>
        <p><i>Note : La valeur comparative correspond à la production disponible en France ou à celle de la branche d'activité de l'entreprise, si le numéro de siren est reconnu.</i></p>
        <button className="form-btn commit" id="submit-indicator" type="submit" 
          onClick={this.onCommit} disabled={disabled}>{message}</button>
      </div>
    )
  }

  onValueChange = (event) => {
    this.setState({value: event.target.value});
    if (this.state.uncertainty=="") this.setState({uncertainty: defaultIncertitudesNVA[this.props.indic]})
  }
  onUncertaintyChange = (event) => {
    this.setState({uncertainty: event.target.value})
  }

  setSkipped = (event) => {
    this.setState({skipped: event.target.checked})
  }

  onCommit = (event) => {
    let {indic,valeurAjoutee,chiffreAffaires,defaultData} = this.props;
    let [value,uncertainty] = getQuality(indic,this.state.value,this.state.uncertainty,valeurAjoutee,chiffreAffaires,defaultData[indic.toUpperCase()].value);
    this.props.onCommit(
        indic,
        value,
        uncertainty,
        this.state.skipped);
  }

}

/* ----- Formulas ----- */

// Quality & Uncertainty
function getQuality(indic,impactDirect,assessmentUncertainty,valeurAjoutee,chiffreAffaires,defaultValue) {

  if (impactDirect!==undefined & impactDirect!=="" & impactDirect!==null
      & valeurAjoutee!==undefined & valeurAjoutee!=="" & valeurAjoutee!==null
      & chiffreAffaires!=undefined & chiffreAffaires!=="" &chiffreAffaires!==null
      & defaultValue!==undefined) {

    let NVAq = getQualityValueAdded(indic,impactDirect,valeurAjoutee);
    let NVAi = isNaN(parseInt(assessmentUncertainty)) ? defaultIncertitudesNVA[indic] : parseInt(assessmentUncertainty);
    let Ci = defaultIncertitudes[indic];
    let NvaRate = getValueAddedRate(valeurAjoutee,chiffreAffaires)/100;

    let quality = NVAq*NvaRate + defaultValue*(1.0-NvaRate) ;
    
    let qualityMax = NvaRate*valueUp(NVAq*coefUp(NVAi)) + (1.0-NvaRate)*valueUp(defaultValue*coefUp(Ci),indic);
    let qualityMin = NvaRate*valueDown(NVAq*coefDown(NVAi)) + (1.0-NvaRate)*valueDown(defaultValue*coefDown(Ci));
    let uncertainty = Math.max(qualityMax-quality,quality-qualityMin)/quality*100;
    return[Math.round(quality*getPrecision(indic))/getPrecision(indic),Math.round(uncertainty)];
  } else {
    return[undefined,undefined];
  }
}

// Quality Net Value Added
function getQualityValueAdded(indic,impactDirect,valeurAjoutee) {
  if (valeurAjoutee!==null & impactDirect!=="") {
    if        (["eco","art","soc","knw"].indexOf(indic) > -1)   { return impactDirect*100/valeurAjoutee; }
    else if   (["dis","geq"].indexOf(indic) > -1)               { return impactDirect; }
    else                                                        { return impactDirect*1000/valeurAjoutee; }
  } else {
    return (" - ")
  }
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
function coefUp(value) {
  return (100+value)/100;
}
function coefDown(value) {
  return Math.max((100-value)/100,0);
}

function valueUp(value,indic) {
  if (["eco","art","soc","knw","dis","geq"].indexOf(indic) > -1)  { return Math.min(value,100); }
  else                                                            { return value; }
}
function valueDown(value) {
  return Math.max(value,0);
}

function getSaveButtonProps(value, checked) {
  let disabled = (!checked && (value==="")); // parse to int
  let message = disabled ? "Remplir les données de l'indicateur ou cocher la case" : "Sauvegarder";
  return {disabled, message};
}
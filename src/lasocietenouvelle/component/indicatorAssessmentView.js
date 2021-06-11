import React from 'react';

import * as IndicData from '../../../public/indic-data/data.js'

export class IndicatorAssessmentView extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      value: "",
      uncertainty: "",
      skipped: "", 
    }
  }

  render() {

    const {value,uncertainty,skipped} = this.state;
    const {indic} = this.props;

    const commitable = isCommitable(value,uncertainty,skipped);
    const message = commitable ? "Sauvegarder" : "Remplir les données de l'indicateur ou cocher la case";
  
    return (
      <div className="indicateur-form">
        <h3>{IndicData.indicateurs.libelle[indic]}</h3>
        <div className="info-indicateur">
          <a href={"../indicateur/"+indic} target="_blank">Description de l'indicateur</a>
        </div>
        <div>
          <p>Valeur à renseigner : {IndicData.indicateurs.description[indic]} (en {IndicData.indicateurs.unitCode[indic]})</p>
        </div>
        <div className="input">
          <label>Valeur :</label>
          <input type="text" value={value} onChange={this.onValueChange} />
          <span>&nbsp;{IndicData.indicateurs.unitCode[indic]}</span>
        </div>
        <div className="input">
          <label>Incertitude :</label>
          <input type="text" value={uncertainty} onChange={this.onUncertaintyChange} />
          <span>&nbsp;%</span>
        </div>
        <div className="input">
          <input type="checkbox" id="skipped" name="skipped" checked={skipped} onChange={this.setSkipped}/>
          <label htmlFor="skipped">Je n'ai pas calculé cet indicateur</label>
        </div>
        <button className="form-btn commit" id="submit-indicator" type="submit" disabled={!commitable} 
          onClick={this.onCommit}>{message}
        </button>
      </div>    
    )
  }

  onValueChange = (event) => {
    this.setState({value: event.target.value})
  }
  onUncertaintyChange = (event) => {
    this.setState({uncertainty: event.target.value})
  }

  setSkipped = (event) => {
    this.setState({skipped: event.target.checked})
  }

  onCommit = (event) => {
    this.props.onCommit(
        this.props.indic,
        this.state.value,
        this.state.uncertainty,
        this.state.skipped);
  }

}

function isCommitable(value, uncertainty,skipped){
  return (skipped || (value!=="" && uncertainty!==""));
}
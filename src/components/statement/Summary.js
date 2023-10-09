import React from "react";
import { Button } from "react-bootstrap";
import { exportStatementPDF } from "../../utils/statementWriter";

import metaData from "../../lib/metaData.json";

const Summary = ({
  siren,
  denomination,
  socialfootprint,
  year,
  declarant,
  price,
  submitStatement,
  goBack,
}) => {
  let newDate = new Date();
  let date = newDate.getDate();
  let month = newDate.getMonth() + 1;
  let currentYear = newDate.getFullYear();

  const formData = {siren,denomination,socialfootprint,year,declarant,price};

  const exportStatement = () => exportStatementPDF(formData);

  return (
    <div className="box">
      <h4 className="text-secondary mb-4 bg-light-secondary p-3 rounded text-center text-uppercase">
        Formulaire de publication
      </h4>

      <div className="statement-form border rounded border-2">
        <h5 className="text-secondary">Récapitulatif</h5>
        <div className="summary">
          <p>
            <b>Siren</b> : {siren}
          </p>
          <p>
            <b>Dénomination</b> : {denomination}
          </p>
          <p>
            <b>Année</b> : {year}
          </p>
          <p>
            <b>Indicateurs déclarés</b> :
          </p>
          <ul className="small">
            {Object.entries(socialfootprint).map(([indic, _]) => (
              <li key={indic}>&emsp;{metaData[indic].libelle}</li>
            ))}
          </ul>

          <p>
            <b>Fait le :</b> {date}/{month}/{currentYear}
          </p>
          <p>
            <b>Déclarant</b> : {declarant}
          </p>
          <p>
            <b>Coût de la formalité </b>: {price} €
          </p>
        </div>
      </div>
      <div className="mt-4 d-flex justify-content-between">
        <Button variant="light" size="sm" onClick={exportStatement}>
          <i className="bi bi-file-earmark-arrow-down"></i> Télécharger le
          récapitulatif
        </Button>
        <div>
          <Button variant="primary" onClick={goBack} className="me-2" size="sm">
            Retour
          </Button>
          <Button variant="secondary" onClick={submitStatement} size="sm">
            Envoyer
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Summary;

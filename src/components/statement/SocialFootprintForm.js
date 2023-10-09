import React, { useEffect, useState } from "react";

import metaData from "../../lib/metaData.json";

import IndicatorForm from "./IndicatorForm";
import { Button, Col, Row } from "react-bootstrap";

/* ---------- SOCIAL FOOTPRINT FORM ---------- */

export const SocialFootprintForm = ({
  socialfootprint,
  submitSocialFootprint,
  goBack,
}) => {
  const [formError, setFormError] = useState(false);
  const [isDisabled, setIsDisabled] = useState(true);


  const validateIndicators = () => {

    for (const indicator in socialfootprint) {
      if (socialfootprint[indicator].value && !socialfootprint[indicator].uncertainty) {
        return false;
      }
    }
    return true; 
  };

  const onUpdate = (nextProps) => {
    socialfootprint[nextProps.indic] = nextProps;
    const isNextStepAvailable = validateIndicators();
    setIsDisabled(!isNextStepAvailable);
    setFormError(!isNextStepAvailable);

  };

  const onSubmit = () => {
    submitSocialFootprint(socialfootprint);
  };

  const onGoBack = () => goBack();

  return (
    <div className="box">
      <h4 className="text-secondary mb-3 bg-light-secondary p-3 rounded text-center text-uppercase ">
        Formulaire de publication
      </h4>

      <Row>
        {metaData.indics.map((indic) => (
          <Col lg={6} key={indic}>
            <div className="border rounded border-2 mb-4 p-3">
              <IndicatorForm
                indic={indic}
                socialfootprint={socialfootprint[indic]}
                updateProps={onUpdate}
              />
            </div>
          </Col>
        ))}
      </Row>
      {formError && (
        <div className="alert alert-warning small  mt-2">
              <p className="mb-0 fw-bold">
              <i className="bi bi-exclamation-triangle"></i> Incertitude manquante pour un indicateur déclaré
              </p>
        </div>
      )}

      <div className="mt-2 text-end">
        <Button
          variant="secondary"
          size="sm"
          className="me-2"
          onClick={onGoBack}
        >
          Retour
        </Button>

        <Button size="sm" variant="primary" onClick={onSubmit} disabled={isDisabled}>
          Valider
        </Button>
      </div>
    </div>
  );
};

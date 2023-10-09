import React from "react";

import metaData from "../../lib/metaData.json";

import IndicatorForm from "./IndicatorForm";
import { Button, Col, Row } from "react-bootstrap";

/* ---------- SOCIAL FOOTPRINT FORM ---------- */

export const SocialFootprintForm = ({
  socialfootprint,
  commitSocialFootprint,
  goBack,
}) => {
  const onUpdateProps = (nextProps) =>
    (socialfootprint[nextProps.indic] = nextProps);
  const onCommit = () => {
    commitSocialFootprint(socialfootprint);
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
            <div className="border rounded border-2 mb-4">
              <IndicatorForm
                indic={indic}
                {...socialfootprint[indic]}
                updateProps={onUpdateProps}
              />
            </div>
          </Col>
        ))}
      </Row>

      <div className="mt-2 text-end">
      <Button variant="secondary" size="sm" className="me-2" onClick={onGoBack}>
              Retour
            </Button>
            <Button
            size="sm"
              variant="primary"
              onClick={onCommit}
            >
              Valider
            </Button>
   
      </div>
    </div>
  );
};

import React, { useState } from "react";
import { Image, Form, Col, Row, Button, InputGroup } from "react-bootstrap";

import metaData from "../../lib/metaData.json";

const IndicatorForm = (props) => {

  const {indic, updateProps, socialfootprint} = props;
  const [formData, setFormData] = useState({
    value: socialfootprint?.value || "",
    uncertainty: socialfootprint?.uncertainty || "",
    info: socialfootprint?.info || ""
  });


  const handleChange = (event, field) => {
    const newValue = event.target.value;
    setFormData((prevData) => ({
      ...prevData,
      [field]: newValue
    }));
    updateProps({ indic, ...formData, [field]: newValue });
  };


  return (
    <div className="mb-2 indicator-form">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div className="d-flex align-items-center">
          <div className="picto">
            <Image
              src={`images/picto-ese/raspberry/${indic}.svg`}
              className="img-fluid"
            />
          </div>
          <h5 className="mb-0">{metaData[indic].libelle}</h5>
        </div>

        <Button
          variant="light"
          size="sm"
          href={`https://lasocietenouvelle.org/indicateurs/${indic}`}
          target="_blank"
          rel="noopener noreferrer"
          className=""
        >
          Informations
          <i className="bi bi-box-arrow-up-right ms-2"></i>
        </Button>
      </div>

      <Row className="align-items-center mb-3">
        <Form.Label column>Valeur</Form.Label>
        <Col>
          <InputGroup size="sm">
            <Form.Control type="text" value={formData.value} onChange={(e) => handleChange(e, "value")} />
            {metaData[indic].unitCode && (
              <InputGroup.Text>{metaData[indic].unitCode}</InputGroup.Text>
            )}
          </InputGroup>
        </Col>
      </Row>
      <Row className="align-items-center mb-3">
        <Form.Label column>Incertitude</Form.Label>
        <Col>
          <InputGroup size="sm">
            <Form.Control
              type="text"
              value={formData.uncertainty}
              onChange={(e) => handleChange(e, "uncertainty")}
            />
            <InputGroup.Text>%</InputGroup.Text>
          </InputGroup>
        </Col>
      </Row>
      <Row className="align-items-center mb-3">
        <Form.Label column>Informations complémentaires</Form.Label>
        <Col>
          <Form.Control
            as="textarea"
            size="sm"
            value={formData.info}            
            onChange={(e) => handleChange(e, "info")}
          />
        </Col>
      </Row>
    </div>
  );
};

export default IndicatorForm;

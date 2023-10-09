import React, { useState } from "react";
import metaData from "../../lib/metaData.json";
import { Image, Form, Col, Row, Button, InputGroup } from "react-bootstrap";
const IndicatorForm = (props) => {
  const {
    indic,
    value: propValue,
    uncertainty: propUncertainty,
    info: propInfo,
  } = props;

  const [value, setValue] = useState(propValue || "");
  const [uncertainty, setUncertainty] = useState(propUncertainty || "");
  const [info, setInfo] = useState(propInfo || "");

  const onValueChange = (event) => setValue(event.target.value);
  const onUncertaintyChange = (event) => setUncertainty(event.target.value);
  const onInfoChange = (event) => setInfo(event.target.value);
  const onBlur = () => props.updateProps({ indic, value, uncertainty, info });

  return (
    <div className="mb-2 statement-form">
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
            <Form.Control
              type="text"
              value={value}
              onChange={onValueChange}
              onBlur={onBlur}
            />
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
              value={uncertainty}
              onChange={onUncertaintyChange}
              onBlur={onBlur}
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
            value={info}
            onChange={onInfoChange}
            onBlur={onBlur}
          />
        </Col>
      </Row>
    </div>
  );
};

export default IndicatorForm;

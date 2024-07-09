import React, { useState, useEffect } from "react";
import { Form, Col, Row, Button } from "react-bootstrap";

import axios from "axios";
import { MetrizButton } from "../buttons/MetrizButton";

export const LegalForm = (props) => {

  const [siren, setSiren] = useState(props.siren);
  const [denomination, setDenomination] = useState(props.denomination);
  const [year, setYear] = useState(props.year);
  const [error, setError] = useState(false);
  const [isNextStepAvailable, setNextStepAvailable] = useState(true);

  useEffect(() => {
    const validateForm = () => {
      const isValidSiren = /^[0-9]{9}$/.test(siren);
      const isValidDenomination = denomination.length > 0;
      const isValidYear = /20[0-1][0-9]|202[0-3]/.test(year);

      setNextStepAvailable(
        !(isValidSiren && isValidDenomination && isValidYear)
      );
    };

    validateForm();
  }, [siren, denomination, year]);

  const onSirenChange = (event) => {
    const newSiren = event.target.value;
    setSiren(newSiren);

    if (/^[0-9]{9}$/.test(newSiren)) {
      axios
        .get(`${process.env.NEXT_PUBLIC_API_URL}/legalunit/${newSiren}`)
        .then((response) => {
          if (response.data.header.code === 200) {
            setDenomination(response.data.legalUnits[0].denomination);
            setError(false);
          } else {
            setError(true);
          }
        });
    } 
  };

  const onDenominationChange = (event) => setDenomination(event.target.value);
  const onYearChange = (event) => setYear(event.target.value);

  const onSubmit = () => props.commitLegal(siren, denomination, year);

  return (
    <Row>
      <Col>
      <div className="box border border-2">
      <h3>Publier l'empreinte de mon entreprise</h3>

          <p>
            Vous avez déjà évalué l'empreinte de votre entreprise et vous
            souhaitez <b> publier vos résultats </b> ?<br></br>
          Complétez le formulaire et envoyez votre demande de publication.
          </p>

          <h4>Informations légales</h4>
          <Form>
            <Form.Group as={Row} className="mb-3">
              <Form.Label column sm={5}>
                SIREN * :
              </Form.Label>
              <Col sm={7}>
                <Form.Control
                  id="siren-input"
                  type="text"
                  value={siren}
                  onChange={onSirenChange}
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3">
              <Form.Label column sm={5}>
                Dénomination sociale * :
              </Form.Label>
              <Col sm={7}>
                <Form.Control
                  id="denomination-input"
                  type="text"
                  value={denomination}
                  onChange={onDenominationChange}
                />
              </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3">
              <Form.Label column sm={5}>
                Année de l'exercice<sup>1</sup> * :
              </Form.Label>
              <Col sm={7}>
                <Form.Control
                  id="year-input"
                  type="text"
                  value={year}
                  onChange={onYearChange}
                />
                <p className="source mt-2">
                  <sup>1</sup> Année en fin d'exercice si l'exercice se déroule
                  sur deux années civiles.
                </p>
              </Col>
            </Form.Group>
          </Form>
          <div className="text-end">
            <Button
              variant="secondary"
              disabled={isNextStepAvailable}
              onClick={onSubmit}
            >
              Formulaire de publication
            </Button>
          </div>
          </div>
      </Col>
      <Col xs={12} lg={5}>
        <div className="box border border-2">
          <h3>Mesurer l'empreinte de mon entreprise</h3>
          <p>
            Vous ne connaissez pas encore votre empreinte sociétale et vous
            souhaitez calculer les impacts de votre entreprise ?
          </p>
          <p>
            Un outil gratuit et open source vous permet de faire ce calcul grâce
            à votre fichier d'écriture comptable.
          </p>
          <MetrizButton />
        </div>
      </Col>
    </Row>
  );
};

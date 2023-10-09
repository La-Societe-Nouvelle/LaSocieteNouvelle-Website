/* ----- DECLARANT FORM ----- */

import React, { useState, useEffect } from "react";
import { Form, Row, Col, Button } from "react-bootstrap";

export const DeclarantForm = (props) => {
  const [declarant, setDeclarant] = useState(props.declarant);
  const [email, setEmail] = useState(props.email);
  const [autorisation, setAutorisation] = useState(props.autorisation);
  const [price, setPrice] = useState();
  const [isDisabled, setDisabled] = useState(true);

  const changePrice = (event) => setPrice(event.target.value);
  const changeDeclarant = (event) => setDeclarant(event.target.value);
  const changeEmail = (event) => setEmail(event.target.value);
  const changeAutorisation = (event) => setAutorisation(event.target.checked);

  useEffect(() => {
    if (price && autorisation && declarant.length > 0) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [price, autorisation, declarant]);

  const onSubmit = () => props.commitDeclarant(declarant, email, autorisation, price);

  return (
    <div className="box">
      <h4 className="text-secondary mb-4 bg-light-secondary p-3 rounded text-center text-uppercase">
        Formulaire de publication
      </h4>
      <Row>
        <Col>
          <div className="statement-form border rounded border-2">
            <h5>Déclarant</h5>
            <Form.Group as={Row} className="mb-3">
              <Form.Label column sm={4}>
                Nom - Prénom :
              </Form.Label>
              <Col sm={3}>
                <Form.Control
                  type="text"
                  size="sm"
                  required
                  value={declarant}
                  onChange={changeDeclarant}
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3">
              <Form.Label column sm={4}>
                Adresse e-mail :
              </Form.Label>
              <Col sm={3}>
                <Form.Control
                  size="sm"
                  type="email"
                  required
                  value={email}
                  onChange={changeEmail}
                />
              </Col>
            </Form.Group>

            <h5 className="mt-5">Coût de la formalité</h5>
            <Form.Group>
              <Form.Check
                type="radio"
                label="Première déclaration : publication offerte"
                name="price"
                id="price-0"
                value="0"
                checked={price === "0"}
                onChange={changePrice}
              />
              <Form.Check
                type="radio"
                label="Société unipersonnelle : 25 €"
                name="price"
                id="price-1"
                value="25"
                checked={price === "25"}
                onChange={changePrice}
              />
              <Form.Check
                type="radio"
                label="Société : 50 €"
                name="price"
                id="price-2"
                value="50"
                checked={price === "50"}
                onChange={changePrice}
              />
              <Form.Check
                type="radio"
                label="Organisme à but non lucratif : 10 €"
                name="price"
                id="price-3"
                value="10"
                checked={price === "10"}
                onChange={changePrice}
              />
            </Form.Group>
            <p className="my-3 small">
              Les revenus couvrent la réalisation des formalités, ainsi que les
              frais d'hébergement et de maintenance pour l'accessibilité des
              données.
            </p>
            <Form.Group className="mt-3">
              <Form.Check
                type="checkbox"
                label="Je certifie être autorisé(e) à soumettre la déclaration ci-présente."
                id="certification"
                checked={autorisation}
                onChange={changeAutorisation}
              />
            </Form.Group>
          </div>
        </Col>
      </Row>
      <div className="mt-4 text-end">
        <Button
          variant="secondary"
          size="sm"
          className="me-2"
          onClick={props.goBack}
        >
          Retour
        </Button>
        <Button
          size="sm"
          variant="primary"
          disabled={isDisabled}
          onClick={onSubmit}
        >
          Valider
        </Button>
      </div>
    </div>
  );
};

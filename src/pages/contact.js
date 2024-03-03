import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { Alert, Button, Col, Container, Form, Row } from "react-bootstrap";
import PageHeader from "../components/PageHeader";
import { sendContactMail } from "./api/mail-api";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [objet, setObjet] = useState("");
  const [message, setMessage] = useState("");
  const [rgpdChecked, setRgpdChecked] = useState(false);
  const [alert, setAlert] = useState(null);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsFormSubmitted(true);

    if (!validateForm()) {
      return;
    }

    try {
      const res = await sendContactMail(objet, message, email);
      if (res.status < 300) {
        setAlert("success");
        resetForm();
      } else {
        setAlert("warning");
      }
    } catch (error) {
      setAlert("warning");
    }
  };

  const validateForm = () => {
    const hasErrors =
      name.trim() === "" ||
      email.trim() === "" ||
      objet.trim() === "" ||
      message.trim() === "" ||
      !rgpdChecked;

    return !hasErrors;
  };

  const resetForm = () => {
    setName("");
    setEmail("");
    setObjet("");
    setMessage("");
    setRgpdChecked(false);
    setIsFormSubmitted(false);
  };

  return (
    <>
      <Helmet>
        <title>La Société Nouvelle | Nous contacter</title>
      </Helmet>
      <PageHeader title="Contactez-nous" path="contact" />
      <section>
        <Container>
          <Row>
            <Col md={{ span: 8, offset: 2 }}>
              <div className="border border-2 rounded border-light p-4">
                <h3 className="text-center my-3">Formulaire de contact</h3>
                <Form id="contact-form" onSubmit={handleSubmit} noValidate>
                  <Form.Group className="mb-3">
                    <Form.Label>Nom - Prénom</Form.Label>
                    <Form.Control
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      isInvalid={isFormSubmitted && name.trim() === ""}
                    />
                    {isFormSubmitted && name.trim() === "" && (
                      <Form.Control.Feedback type="invalid">
                        Ce champ est requis.
                      </Form.Control.Feedback>
                    )}
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>Adresse e-mail *</Form.Label>
                    <Form.Control
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      isInvalid={
                        isFormSubmitted &&
                        (email.trim() === "" || !isValidEmail(email))
                      }
                    />
                    {isFormSubmitted &&
                      (email.trim() === "" || !isValidEmail(email)) && (
                        <Form.Control.Feedback type="invalid">
                          Veuillez fournir une adresse email valide.
                        </Form.Control.Feedback>
                      )}
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>Objet *</Form.Label>
                    <Form.Control
                      type="text"
                      value={objet}
                      onChange={(e) => setObjet(e.target.value)}
                      isInvalid={isFormSubmitted && objet.trim() === ""}
                    />
                    {isFormSubmitted && objet.trim() === "" && (
                      <Form.Control.Feedback type="invalid">
                        Ce champ est requis.
                      </Form.Control.Feedback>
                    )}
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>Message *</Form.Label>
                    <Form.Control
                      as="textarea"
                      style={{ height: "150px" }}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      isInvalid={isFormSubmitted && message.trim() === ""}
                    />
                    {isFormSubmitted && message.trim() === "" && (
                      <Form.Control.Feedback type="invalid">
                        Ce champ est requis.
                      </Form.Control.Feedback>
                    )}
                  </Form.Group>
                  <Form.Group>
                    <Form.Check
                      inline
                      label="En cochant cette case, j'accepte que mes données personnelles soient utilisées pour me recontacter dans le cadre de ma demande indiquée dans ce formulaire. Aucun autre traitement ne sera effectué avec mes informations personnelles."
                      checked={rgpdChecked}
                      onChange={(e) => setRgpdChecked(e.target.checked)}
                      isInvalid={isFormSubmitted && !rgpdChecked}
                      className="small"
                    />
                    {isFormSubmitted && !rgpdChecked && (
                      <Form.Control.Feedback type="invalid">
                        Vous devez accepter pour soumettre le formulaire.
                      </Form.Control.Feedback>
                    )}
                  </Form.Group>
                  <div className="text-end">
                    <Button variant="secondary" type="submit">
                      Envoyer
                    </Button>
                  </div>
                  <div className="my-2">
                    {alert === "success" && <SuccessAlert />}
                    {alert === "warning" && <WarningAlert />}
                  </div>
                </Form>
              </div>

              <p className="mt-4 small">
                Pour connaître et exercer vos droits, notamment de retrait de
                votre consentement à l'utilisation de données collectées par ce
                formulaire, veuillez consulter{" "}
                <a href="/politique-confidentialite">
                  notre politique de confidentialité
                </a>
                .
              </p>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

const SuccessAlert = () => (
  <Alert variant="success">Votre message a bien été envoyé.</Alert>
);

const WarningAlert = () => (
  <Alert variant="warning">
    Une erreur s'est produite lors de l'envoi de votre message. Veuillez
    réessayer plus tard.
  </Alert>
);

function isValidEmail(email) {
  const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
  return emailRegex.test(email);
}

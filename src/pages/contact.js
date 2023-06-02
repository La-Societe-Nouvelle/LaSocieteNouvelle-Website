// React
import React from "react";
import { Helmet } from "react-helmet";

// API
import { sendContactMail } from "../pages/api/mail-api.js";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import PageHeader from "../components/PageHeader.js";

export default function Home() {
  return (
    <>
      <Helmet>
        <title>La Société Nouvelle | Nous contacter</title>
      </Helmet>
      <PageHeader title={"Contactez-nous"} path={"contact"} />
      <section>
        <Container>
          <Row>
            <Col md={{ span: 8, offset: 2 }}>
              <div className="border border-2 rounded border-light p-4">
                <h3 className="text-center my-3">Formulaire de contact</h3>
                <ContactForm />
              </div>

              <p className="mt-4 small">
                Pour connaitre et exercer vos droits , notamment de retrait de
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

class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      objet: "",
      message: "",
      email: "",
      name: "",
      checked: false,
      validated: false,
      alert: "",
    };
  }

  render() {
    const { objet, name, message, email, validated, alert, checked } =
      this.state;

    return (
      <Form id="contact-form" >
        <Form.Group className="mb-3">
          <Form.Label>Nom - Prénom</Form.Label>
          <Form.Control
            type="text"
            onChange={this.onNameChange}
            value={name}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Adresse e-mail *</Form.Label>
          <Form.Control
            required
            type="email"
            onChange={this.onEmailChange}
            value={email}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Objet *</Form.Label>
          <input
            required
            type="text"
            value={objet}
            onChange={this.onObjetChange}
            className="form-control"
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Message *</Form.Label>
          <Form.Control
            required
            as="textarea"
            value={message}
            style={{ height: "150px" }}
            onChange={this.onMessageChange}
          />
        </Form.Group>
        <Form.Group>
          <Form.Check
            inline
            label="En cochant cette case, j'accepte que mes données personnelles soient utilisées pour me recontacter dans le cadre de ma demande indiquée dans ce formulaire. Aucun autre traitement ne sera effectué avec mes informations personnelles.
            "
            name="rgpd"
            onChange={this.onCheck}
            checked={checked}
            type="checkbox"
            className="small"
          />
        </Form.Group>
        <div className="text-end">
          <Button variant="secondary" type="submit" onClick={this.handleSubmit}>
            Envoyer
          </Button>
        </div>
      </Form>
    );
  }

  onNameChange = (event) => this.setState({ name: event.target.value });

  onObjetChange = (event) => this.setState({ objet: event.target.value });

  onMessageChange = (event) => this.setState({ message: event.target.value });

  onEmailChange = (event) => this.setState({ email: event.target.value });

  onCheck = (event) => {
    this.setState({ checked: event.target.checked });
  };

  handleSubmit = (event) => {
    const form = event.currentTarget;
      console.log(form)
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
      this.setState({ alert: "danger" });
    } else {
      this.submitContactForm();
    }
    console.log(form.checkValidity());
  };

  submitContactForm = async () => {
    console.log(this.state)
    const { objet, message, email } = this.state;
    const res = await sendContactMail(objet, message, email);
    if (res.status < 300) {
      this.setState({
        objet: "",
        message: "",
        email: "",
        alert: "success",
        validated: true,
      });
    } else {
      this.setState({ alert: "warning" });
    }
  };
}

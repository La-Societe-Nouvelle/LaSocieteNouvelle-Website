// React
import React from "react";
import { Helmet } from "react-helmet";

// API
import { sendContactMail } from "../pages/api/mail-api.js";
import { Col, Container, Row } from "react-bootstrap";
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
            <Col md={{ span: 6, offset: 3 }}>
          <h2 className="titre-bloc">Formulaire de contact</h2>
              <ContactForm />
              <hr/>
              <p className="small">
                Nous nous engageons à n’utiliser les informations communiquées dans ce formulaire que pour les traitements nécessaires à une réponse la plus précise possible.
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
      coordonnees: "",
      formButtontext: "Envoyer le message",
      messageSend: false,
    };
  }

  render() {
    const { objet, message, coordonnees, formButtontext, messageSend } =
      this.state;
    const btnClass = messageSend ? "disabled" : "";

    return (
      <div id="contact-form" className="section form">
        <div className="form-section v-group">
          <label className="titre-form-section">Objet</label>
          <input
            id="objet-input"
            type="text"
            value={objet}
            onChange={this.onObjetChange}
            className="form-control"
          />
        </div>
        <div className="form-section v-group">
          <label className="titre-form-section">Message</label>
          <textarea
            id="message-input"
            type="text"
            value={message}
            onChange={this.onMessageChange}
            className="form-control"
          />
        </div>
        <div className="form-section v-group">
          <label className="titre-form-section">Vos coordonnées</label>
          <textarea
            id="coordonnees-input"
            type="text"
            value={coordonnees}
            onChange={this.onCoordonneesChange}
            className="form-control"
          />
        </div>
        <div className="form-section v-group">
          <button
            className={"btn btn-secondary my-3" + btnClass}
            onClick={this.submitContactForm}
          >
            {formButtontext}
          </button>
        </div>
      </div>
    );
  }

  onObjetChange = (event) => this.setState({ objet: event.target.value });

  onMessageChange = (event) => this.setState({ message: event.target.value });

  onCoordonneesChange = (event) =>
    this.setState({ coordonnees: event.target.value });

  submitContactForm = async (event) => {
    event.preventDefault();

    const { objet, message, coordonnees } = this.state;
    const res = await sendContactMail(objet, message, coordonnees);

    if (res.status < 300) {
      this.setState({
        objet: "",
        message: "",
        coordonnees: "",
        formButtontext: "Message envoyé",
        messageSend: true,
      });
    } else {
      this.setState({ formButtontext: "Merci de remplir tous les champs." });
    }
  };
}

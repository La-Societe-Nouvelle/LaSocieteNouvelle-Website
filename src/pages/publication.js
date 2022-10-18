// La Société Nouvelle

// react
import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";

import {
  sendStatementToAdmin,
  sendStatementToDeclarant,
} from "./api/mail-api.js";

/* The base URL of the API */
/* TODO: Must be exteriorized in a build variable */
const apiBaseUrl = "https://systema-api.azurewebsites.net/api/v2";

/* Defines every possible views. Each key is a view.
   Each value contains:
   - the name of the view.
   - the associated indicators.
*/

import metaData from "../lib/metaData.json";

import { exportStatementPDF, getBinaryPDF } from "../outputs/statementWriter";

import { Button, Card, Col, Container, Image, Row } from "react-bootstrap";
import PageHeader from "../components/PageHeader.js";

/* ---------- MAIN FUNCTION ---------- */

export default function Home(props) {
  return (
    <>
      <Helmet>
        <title>La Société Nouvelle | Déclaration - Empreinte sociétale </title>
      </Helmet>
      <PageHeader
        title={"Publier mon empreinte sociétale"}
        path={"/publication"}
      />
      <Container>
        <section className="report-form">
          <Form defaultData={props.defaultData} />
        </section>
      </Container>
    </>
  );
}

/* ---------- FOOTPRINT STATEMENT FORM ---------- */

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // Progression
      step: 1,
      siren: "",
      denomination: "",
      year: "",

      // Statements (step 4)
      socialfootprint: {},

      // declarant data (step 5)
      declarant: "",
      email: "",
      phone: "",
      autorisation: false,

      // tarif (step 6)
      price: "",
    };
  }

  render() {
    return <Row>{this.buildForm()}</Row>;
  }

  buildForm = () => {
    switch (this.state.step) {
      case 0:
        return <ErrorMessage goBack={this.nextStep.bind(this)} />;
      case 1:
        return (
          <LegalForm
            {...this.state}
            commitLegal={this.commitLegal.bind(this)}
          />
        );
      case 2:
        return (
          <SocialFootprintForm
            {...this.state}
            commitSocialFootprint={this.commitSocialFootprint.bind(this)}
            goBack={this.goBack.bind(this)}
          />
        );
      case 3:
        return (
          <DeclarantForm
            {...this.state}
            commitDeclarant={this.commitDeclarant.bind(this)}
            goBack={this.goBack.bind(this)}
          />
        );
      case 4:
        return (
          <Summary
            {...this.state}
            exportStatement={this.exportStatement.bind(this)}
            submitStatement={this.submitStatement.bind(this)}
            goBack={this.prevStep.bind(this)}
          />
        );
      case 5:
        return <StatementSendMessage />;
    }
  };

  /* --- Submit commit --- */

  nextStep = () => this.setState({ step: this.state.step + 1 });
  prevStep = () => this.setState({ step: this.state.step - 1 });

  commit = () => this.setState({ step: this.state.step + 1 });
  goBack = () => this.setState({ step: this.state.step - 1 });

  // Commit Legal Data

  commitLegal = (siren, denomination, year) =>
    this.setState({
      siren: siren,
      denomination: denomination,
      year: year,
      step: 2,
    });

  // Commit values
  commitSocialFootprint = (socialfootprint) =>
    this.setState({ socialfootprint: socialfootprint, step: 3 });

  // Commit Declarant
  commitDeclarant = (declarant, email, autorisation, price) =>
    this.setState({
      declarant: declarant,
      email: email,
      autorisation: autorisation,
      price: price,
      step: 4,
    });

  // Export statement
  exportStatement = () => exportStatementPDF(this.state);

  /* --- Submit assessment --- */
  submitStatement = async (event) => {
    event.preventDefault();

    const statementFile = getBinaryPDF(this.state);

    const messageToAdmin = mailToAdminWriter(this.state);
    const resAdmin = await sendStatementToAdmin(messageToAdmin, statementFile);

    const messageToDeclarant = mailToDeclarantWriter(this.state);
    const resDeclarant = await sendStatementToDeclarant(
      this.state.email,
      messageToDeclarant,
      statementFile
    );

    if (resAdmin.status < 300) this.setState({ step: 5 });
    else this.setState({ step: 0 });
  };
}

/* ---------- LEGAL FORM ---------- */

const LegalForm = (props) => {
  const [siren, setSiren] = useState(props.siren);
  const onSirenChange = (event) => setSiren(event.target.value);

  const [denomination, setDenomination] = useState(props.denomination);
  const onDenominationChange = (event) => setDenomination(event.target.value);

  const handleOnBlur = async () => {
    // fetch denomination
    try {
      const endpoint = `${apiBaseUrl}/siren/${siren}`;
      const response = await fetch(endpoint, { method: "get" });
      const data = await response.json();

      if (data.header.statut === 200) {
        setDenomination(data.profil.descriptionUniteLegale.denomination);
      }
    } catch (error) {
      throw error;
    }
  };

  const [year, setYear] = useState(props.year);
  const onYearChange = (event) => setYear(event.target.value);

  const [isNextStepAvailable, setNextStepAvailable] = useState(true);

  const onCommit = () => props.commitLegal(siren, denomination, year);

  useEffect(() => {
    if (
      (/^[0-9]{9}$/.test(siren) &&
        denomination.length > 0 &&
        /20[0-1][0-9]/.test(year)) ||
      /202[0-1]/.test(year)
    ) {
      setNextStepAvailable(false);
    } else {
      setNextStepAvailable(true);
    }
  });

  return (
    <div className="publish-form">
      <Row>

      <Col xs={12} lg={7}>
      <h3>Publier ses données</h3>
        <p>
          Vous avez déjà mesuré votre empreinte sociétale et vous souhaitez publier vos données sur notre portail ? 
        </p>
        <p>
        Complétez les différentes étapes du formulaire de publication des données.
        </p>
        <hr/>
      
        <h5>1. Informations légales</h5>
        <div className="mb-3 row">
          <label className="col-sm-5 col-form-label">
            Numéro de siren (9 chiffres) :
          </label>
          <div className="col-sm-7">
            <input
              id="siren-input"
              className="form-control"
              maxLength="9"
              type="text"
              value={siren}
              onChange={onSirenChange}
              onBlur={handleOnBlur}
            />
          </div>
        </div>
        <div className="mb-3 row">
          <label className="col-sm-5 col-form-label">
            Dénomination sociale :
          </label>
          <div className="col-sm-7">
            <input
              id="denomination-input"
              className="form-control"
              type="text"
              value={denomination}
              onChange={onDenominationChange}
            />
          </div>
        </div>
        <div className="mb-3 row">
          <label className="col-sm-5 col-form-label">
            Année de l'exercice<sup>1</sup>
          </label>
          <div className="col-sm-7">
            <input
              className="form-control"
              id="year-input"
              type="text"
              value={year}
              onChange={onYearChange}
            />
            <p className="source mt-2">
              <sup>1</sup> Année en fin d'exercice si l'exercice se déroule sur
              deux années civiles.
            </p>
          </div>
        </div>
        <div className="text-end">
          <Button
            variant="secondary"
            disabled={isNextStepAvailable}
            onClick={onCommit}
          >
            Compléter les impacts
          </Button>
        </div>
      </Col>
      <Col xs={12} lg={5}>
        <div className="card">
          <div className="card-body">
          <h3>Calculer l'impact de son entreprise</h3>
        <p>
         Vous ne connaissez pas encore votre empreinte sociétale et vous souhaitez calculer les impacts de votre entreprise ?
        </p>
        <p>
          Un outil gratuit et open source vous permet de faire ce calcul grâce à votre fichier
          d'écriture comptable.
        </p>
        <Button variant="secondary" href="/metriz">En savoir plus</Button>
          </div>

        </div>
  
      </Col>
      </Row>

    </div>
  );
};

/* ---------- SOCIAL FOOTPRINT FORM ---------- */

const SocialFootprintForm = ({
  socialfootprint,
  commitSocialFootprint,
  goBack,
}) => {
  const onUpdateProps = (nextProps) =>
    (socialfootprint[nextProps.indic] = nextProps);
  const onCommit = () =>{commitSocialFootprint(socialfootprint)};
  const onGoBack = () => goBack();

  return (
    <div className="publish-form">
      <Col lg={12}>
        <h3>Déclaration des données</h3>
        <Row>
          {metaData.indics.map((indic) => (
            <IndicatorForm
              key={indic}
              indic={indic}
              {...socialfootprint[indic]}
              updateProps={onUpdateProps}
            />
          ))}
        </Row>
        <div className="mt-2 text-end">
          <button className="btn btn-primary me-2" onClick={onGoBack}>
            Retour
          </button>
          <button className="btn btn-secondary" onClick={onCommit}>
            Valider
          </button>
        </div>
      </Col>
    </div>
  );
};
class IndicatorForm extends React.Component {
  // form for each indicator
  // inputs : value / uncertainty / infos

  constructor(props) {
    super(props);
    this.state = {
      value: props.value || "",
      uncertainty: props.uncertainty || "",
      info: props.info || "",
    };
  }

  render() {
    const { indic } = this.props;
    const { value, uncertainty, info } = this.state;
    const isValueValid = /[0-9]*[.,][0-9]*/.test(value);
    const isUncertaintyValid =
      isValueValid && /[0-9]*[.,][0-9]*/.test(uncertainty);

    return (
      <Col lg={6}>
        <Card className="mb-3">
          <Card.Body className="indicator-form">
            <div className="d-flex align-items-center">
              <Image
                src={"images/icon-ese-bleues/" + indic + ".png"}
                className="img-fluid me-3"
              />
              <div className="indic-libelle">
                <h5>{metaData[indic].libelle}</h5>
                <a
                  href={"https://lasocietenouvelle.org/indicateurs/" + indic}
                  target="_blank"
                >
               Informations sur l'indicateur    <i className="bi bi-box-arrow-up-right"></i> 
                </a>
              </div>
            </div>
            <div className="source"></div>
            <div className="my-3 row align-items-center">
              <label className="col-sm-3 col-form-label">
                Valeur<span>({metaData[indic].unitCode})</span>
              </label>
              <div className="col-sm-9">
                <input
                  className="form-control"
                  type="text"
                  value={value}
                  onChange={this.onValueChange}
                  onBlur={this.onBlur}
                  onKeyPress={this.onEnterPress}
                />
              </div>
            </div>
            <div className="my-3 row align-items-center">
              <label className="col-sm-3 col-form-label">
                Incertitude<span>(%)</span>
              </label>
              <div className="col-sm-9">
                <input
                  className="form-control"
                  type="text"
                  value={uncertainty}
                  onChange={this.onUncertaintyChange}
                  onBlur={this.onBlur}
                  onKeyPress={this.onEnterPress}
                />
              </div>
            </div>

            <div className="my-3 row align-items-center">
              <label className="col-sm-3 col-form-label">
                Informations complémentaires
              </label>
              <div className="col-sm-9">
                <textarea
                  className="form-control"
                  type="text"
                  value={info}
                  onChange={this.onInfoChange}
                  onBlur={this.onBlur}
                />
              </div>
            </div>
          </Card.Body>
        </Card>
      </Col>
    );
  }

  onValueChange = (event) => this.setState({ value: event.target.value });
  onUncertaintyChange = (event) =>
    this.setState({ uncertainty: event.target.value });
  onInfoChange = (event) => this.setState({ info: event.target.value });
  onBlur = () =>
    this.props.updateProps({ indic: this.props.indic, ...this.state });
  onEnterPress = (event) => {
    if (event.which == 13) event.target.blur();
  };
}

/* ----- DECLARANT FORM ----- */

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
  },[price,autorisation,declarant]);

  const onCommit = () =>
    props.commitDeclarant(declarant, email, autorisation, price);

  return (
    <section className="publish-form">
      <Col lg={6}>
        <h3>Déclarant</h3>

        <div className="mb-3 row">
          <label className="col-sm-4 col-form-label">Nom - Prénom : </label>
          <div className="col-sm-7">
            <input
              type="text"
              className="form-control"
              required
              value={declarant}
              onChange={changeDeclarant}
            />
          </div>
        </div>
        <div className="mb-3 row">
          <label className="col-sm-4 col-form-label">Adresse e-mail : </label>
          <div className="col-sm-7">
            <input
              className="form-control"
              type="email"
              required
              value={email}
              onChange={changeEmail}
            />
          </div>
        </div>

        <h3 className="mt-5">Coût de la formalité</h3>
        <div className="form-group">
          <div className="form-check">
            <input
              className="form-check-input"
              name="price"
              id="price-0"
              type="radio"
              value="0"
              checked={price == "0"}
              onChange={changePrice}
            />

            <label className="form-check-label" htmlFor="price-0">
              Première déclaration : publication offerte
            </label>
          </div>

          <div className="form-check">
            <input
              className="form-check-input"
              name="price"
              id="price-1"
              type="radio"
              value="25"
              checked={price == "25"}
              onChange={changePrice}
            />
            <label className="form-check-label" htmlFor="price-1">
              Société unipersonnelle : 25 €
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              name="price"
              id="price-2"
              type="radio"
              value="50"
              checked={price == "50"}
              onChange={changePrice}
            />
            <label className="form-check-label" htmlFor="price-2">
              Société : 50 €
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              name="price"
              id="price-3"
              type="radio"
              value="10"
              checked={price == "10"}
              onChange={changePrice}
            />
            <label className="form-check-label" htmlFor="price-3">
              Organise à but non lucratif : 10 €
            </label>
          </div>
        </div>
        <p className="my-3 smaller-text">
          Les revenus couvrent la réalisation des formalités, ainsi que les
          frais d'hébergement et de maintenance pour l'accessibilité des
          données.
        </p>
        <div className="form-check mt-3">
          <input
            className="form-check-input"
            id="certification"
            type="checkbox"
            checked={autorisation}
            onChange={changeAutorisation}
          />
          <label className="form-check-label" htmlFor="certification">
            Je certifie être autorisé(e) à soumettre la déclaration ci-présente.
          </label>
        </div>
        <div className="mt-4 text-end">
          <button className="btn btn-secondary me-2" onClick={props.goBack}>
            Retour
          </button>
          <button
            className="btn btn-primary"
            disabled={isDisabled}
            onClick={onCommit}
          >
            Valider
          </button>
        </div>
      </Col>
    </section>
  );
};

/* ----- DECLARANT FORM ----- */
const Summary = ({
  siren,
  denomination,
  socialfootprint,
  year,
  declarant,
  price,
  exportStatement,
  submitStatement,
  goBack,
}) => {
  let newDate = new Date();
  let date = newDate.getDate();
  let month = newDate.getMonth() + 1;
  let currentYear = newDate.getFullYear();

  return (
    <section className="publish-form">
      <Col lg={6}>
        <h3>Recapitulatif</h3>
        <div className="summary">
          <p>Siren :{siren}</p>
          <p>Dénomination :{denomination}</p>
          <p>Année :{year}</p>
          <p>Indicateurs :</p>
          {Object.entries(socialfootprint).map(([indic, _]) => (
            <p key={indic}>&emsp;{metaData[indic].libelle}</p>
          ))}
          {Object.entries(socialfootprint).length == 0 && <p>&emsp; - </p>}
          <p>
            <b>Fait le :</b> {date}/{month}/{currentYear}
          </p>
          <p>Déclarant :{declarant}</p>
          <p>Coût de la formalité :{price} €</p>
        </div>
        <button className="btn btn-outline-primary" onClick={exportStatement}>
          <i className="bi bi-file-earmark-arrow-down"></i> Télécharger le
          récapitulatif
        </button>

        <div className="mt-4 text-end">
          <button className="btn btn-primary me-2 " onClick={goBack}>
            Retour
          </button>
          <button className="btn btn-secondary" onClick={submitStatement}>
            Envoyer
          </button>
        </div>
      </Col>
    </section>
  );
};

/* ---------- END ---------- */

const StatementSendMessage = () => {
  return (
    <>
      <h3>Déclaration validée</h3>
      <div className="alert alert-success">
        Demande de publication envoyée ! Merci.
      </div>
    </>
  );
};

const ErrorMessage = ({ goBack }) => {
  return (
    <>
      <div className="alert alert-danger">
        Erreur lors de l'envoi de la publication. Si l'erreur persiste, veuillez
        nous contacter.
      </div>
      <button className="btn btn-primary" onClick={goBack}>
        Retour
      </button>
    </>
  );
};

/* ----- Builder message mails ----- */

const mailToAdminWriter = (statementData) =>
  "Unité légale : " +
  statementData.siren +
  "\r" +
  "Dénomination : " +
  statementData.denomination +
  "\r" +
  "Année : " +
  statementData.year +
  "\r" +
  "\r" +
  "Valeurs à publier :" +
  "\r" +
  "\r" +
  Object.entries(statementData.socialfootprint).map(
    ([indic, data]) =>
      indic +
      " : " +
      data.value +
      " +/- " +
      data.uncertainty +
      " % " +
      (data.info.length > 0 ? "(" + data.info + ")" : "") +
      "\r"
  ) +
  "\r" +
  "Déclarant :" +
  "\r" +
  "Nom : " +
  statementData.declarant +
  "\r" +
  "Mail : " +
  statementData.email +
  "\r" +
  "\r" +
  "Tarif :" +
  statementData.price +
  " €" +
  "\r";

const mailToDeclarantWriter = (statementData) =>
  "" +
  statementData.declarant +
  "," +
  "\r" +
  "\r" +
  "Votre demande de publication a bien été prise en compte. Vous trouverez ci-joint votre déclaration." +
  "\r" +
  "Le délai de traitement est de 7 jours." +
  "\r" +
  "\r" +
  "Pour modifier ou supprimer les données publiées, contactez-nous directement via l'adresse mail admin@lasocietenouvelle.org" +
  "\r" +
  "\r" +
  "Bien à vous," +
  "\r" +
  "\r" +
  "La Société Nouvelle." +
  "\r";

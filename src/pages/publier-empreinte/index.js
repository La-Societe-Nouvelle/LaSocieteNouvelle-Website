// La Société Nouvelle

// react
import React, { useState } from "react";
import { Helmet } from "react-helmet";

import { Container } from "react-bootstrap";
import { SocialFootprintForm } from "../../components/statement/SocialFootprintForm";
import { LegalForm } from "../../components/statement/LegalForm";
import { DeclarantForm } from "../../components/statement/DeclarantForm";
import Summary from "../../components/statement/Summary";
import { exportStatementPDF, getBinaryPDF } from "../../utils/statementWriter";
import {
  sendStatementToAdmin,
  sendStatementToDeclarant,
} from "../api/mail-api";

const initialFormData = {
  step: 1,
  siren: "",
  denomination: "",
  year: "",
  socialfootprint: {},
  declarant: "",
  email: "",
  phone: "",
  autorisation: false,
  price: "",
};


export default function Page() {

  const [formData, setFormData] = useState(initialFormData);
  const [statementError, setStatementError] = useState(false);

  const buildView = () => {
    const { step, ...rest } = formData;

    switch (step) {
      case 1:
        return <LegalForm {...{ step, ...rest }} commitLegal={commitLegal} />;
      case 2:
        return (
          <SocialFootprintForm
            {...{ step, ...rest }}
            commitSocialFootprint={commitSocialFootprint}
            goBack={prevStep}
          />
        );
      case 3:
        return (
          <DeclarantForm
            {...{ step, ...rest }}
            commitDeclarant={commitDeclarant}
            goBack={prevStep}
          />
        );
      case 4:
        return (
          <Summary
            {...{ step, ...rest }}
            exportStatement={exportStatement}
            submitStatement={submitStatement}
            goBack={prevStep}
          />
        );
      case 5:
        return <StatementSendMessage hasError={statementError} />;
    }
  };
  const updateFormData = (newData) => {
    setFormData((prevData) => ({ ...prevData, ...newData }));
  };

  const prevStep = () => updateFormData({ step: formData.step - 1 });

  const commitLegal = (siren, denomination, year) => {
    updateFormData({ siren, denomination, year, step: 2 });
  };

  const commitSocialFootprint = (socialfootprint) => {
    updateFormData({ socialfootprint, step: 3 });
  };

  const commitDeclarant = (declarant, email, autorisation, price) => {
    updateFormData({ declarant, email, autorisation, price, step: 4 });
  };

  const exportStatement = () => exportStatementPDF(formData);

  const submitStatement = async (event) => {
    event.preventDefault();

    const statementFile = getBinaryPDF(formData);

    const messageToAdmin = mailToAdminWriter(formData);

    const resAdmin = await sendStatementToAdmin(messageToAdmin, statementFile);

    const messageToDeclarant = mailToDeclarantWriter(formData.declarant);

    const resDeclarant = await sendStatementToDeclarant(
      formData.email,
      messageToDeclarant,
      statementFile
    );

    if (resAdmin.status < 300 && resDeclarant.status < 300) {
      setStatementError(false);
      updateFormData({ step: 5 });
    } else {
      updateFormData({ step: 5 });

      setStatementError(true);
    }
  };
  return (
    <>
      <Helmet>
        <title> Publication - Empreinte Sociétale | La Société Nouvelle </title>
      </Helmet>

      <Container fluid className="bg-light">
        <div className="px-5">{buildView()}</div>
      </Container>
    </>
  );
}

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

const mailToDeclarantWriter = (declarant) =>
  "" +
  declarant +
  "," +
  "\r" +
  "\r" +
  "votre demande de publication a bien été prise en compte. Vous trouverez ci-joint votre déclaration." +
  "\r" +
  " Le délai de traitement est de 7 jours." +
  "\r" +
  "\r" +
  " Pour modifier ou supprimer les données publiées, contactez-nous directement via l'adresse mail admin@lasocietenouvelle.org." +
  "\r" +
  "\r" +
  " Bien à vous," +
  "\r" +
  "\r" +
  "La Société Nouvelle." +
  "\r";

/* ---------- END ---------- */

const StatementSendMessage = (hasError) => {
  if (hasError) {
    return (
      <div className="box">
        <h5>Erreur de publication</h5>

        <div className="alert alert-danger">
          Erreur lors de l'envoi de la publication. Si l'erreur persiste,
          veuillez nous contacter.
        </div>
        <div className="text-end">
          <button className="btn btn-primary">Retour</button>
        </div>
      </div>
    );
  } else {
    return (
      <div className="box">
        <h5>Déclaration validée</h5>
        <div className="alert alert-success">
          Demande de publication envoyée ! Merci.
        </div>
        <div className="text-end">
          <button className="btn btn-primary" size="sm">
            Retour à l'accueil
          </button>
        </div>
      </div>
    );
  }
};

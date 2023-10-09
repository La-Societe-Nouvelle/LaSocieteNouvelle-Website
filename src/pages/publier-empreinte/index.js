// La Société Nouvelle

// react
import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { Button, Container } from "react-bootstrap";

import { SocialFootprintForm } from "../../components/statement/SocialFootprintForm";
import { LegalForm } from "../../components/statement/LegalForm";
import { DeclarantForm } from "../../components/statement/DeclarantForm";

import Summary from "../../components/statement/Summary";

import {
  sendStatementToAdmin,
  sendStatementToDeclarant,
} from "../api/mail-api";

import {
  mailToAdminWriter,
  mailToDeclarantWriter,
} from "../../components/statement/statementUtils";
import { getBinaryPDF } from "../../utils/statementWriter";
import { useEffect } from "react";

const initialFormData = {
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

export default function PublishStatement() {
  const [formData, setFormData] = useState(initialFormData);
  const [statementError, setStatementError] = useState(false);
  const [step, setStep] = useState(1);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [step]);
  const buildView = () => {
    switch (step) {
      case 1:
        return <LegalForm {...formData} commitLegal={commitLegal} />;
      case 2:
        return (
          <SocialFootprintForm
            socialfootprint={formData.socialfootprint}
            submitSocialFootprint={commitSocialFootprint}
            goBack={prevStep}
          />
        );
      case 3:
        return (
          <DeclarantForm
            {...formData}
            commitDeclarant={commitDeclarant}
            goBack={prevStep}
          />
        );
      case 4:
        return (
          <Summary
            {...formData}
            submitStatement={submitStatement}
            goBack={prevStep}
          />
        );
      case 5:
        return (
          <StatementSendMessage hasError={statementError} goBack={prevStep} />
        );
    }
  };
  const updateFormData = (newData) => {
    setFormData((prevData) => ({ ...prevData, ...newData }));
  };

  const prevStep = () => setStep(step - 1);

  const commitLegal = (siren, denomination, year) => {
    updateFormData({ siren, denomination, year });
    setStep(2);
  };

  const commitSocialFootprint = (socialfootprint) => {
    updateFormData({ socialfootprint });
    setStep(3);
  };

  const commitDeclarant = (declarant, email, autorisation, price) => {
    updateFormData({ declarant, email, autorisation, price });
    setStep(4);
  };

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
    } else {
      setStatementError(true);
    }

    setStep(5);
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

/* ---------- END ---------- */

const StatementSendMessage = ({ goBack, hasError }) => {
  if (!hasError) {
    return (
      <div className="box">
        <h5>Erreur de publication</h5>

        <div className="alert alert-danger">
          Erreur lors de l'envoi de la publication. Si l'erreur persiste,
          veuillez nous contacter à l'adresse <a
            href="mailto:support@lasocietenouvelle.org"
            className="text-secondary fw-bold"
          >
             support@lasocietenouvelle.org
          </a>
        </div>
        <div className="text-end">
          <Button
            variant="secondary"
            size="sm"
            className="me-2"
            onClick={goBack}
          >
            Retour
          </Button>
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
        <Button href="/">
                Retour à l'accueil
           </Button>
        </div>
      </div>
    );
  }
};

'use client';

import { useState } from "react";
import { Button, Col, Container, Image, Row, Form, Spinner, Modal } from "react-bootstrap";

export default function FormulairePartenariat() {
  const [formData, setFormData] = useState({
    organisme: '',
    siren: '',
    adresse: '',
    codePostal: '',
    ville: '',
    siteInternet: '',
    activitesPrincipales: '',
    nomContact: '',
    fonction: '',
    tel: '',
    email: '',
    contributionFinanciere: '',
    montantAutre: '',
    contribuerAutrement: '',
    autreContributionTexte: ''
  });
  const [showContributionFinanciere, setShowContributionFinanciere] = useState(false);
  const [showContribuerAutrement, setShowContribuerAutrement] = useState(false);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({ type: "", text: "" });
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage({ type: "", text: "" });

    // Validation 
    const hasFinancialContribution = showContributionFinanciere && formData.contributionFinanciere;
    const hasOtherContribution = showContribuerAutrement && formData.contribuerAutrement;

    if (!hasFinancialContribution && !hasOtherContribution) {
      setMessage({
        type: "danger",
        text: "Veuillez sélectionner au moins une forme de contribution (financière ou autre)."
      });
      setLoading(false);
      return;
    }

    try {
      const response = await fetch("/api/partenariat-contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setShowSuccessModal(true);
        setFormData({
          organisme: '',
          siren: '',
          adresse: '',
          codePostal: '',
          ville: '',
          siteInternet: '',
          activitesPrincipales: '',
          nomContact: '',
          fonction: '',
          tel: '',
          email: '',
          contributionFinanciere: '',
          montantAutre: '',
          contribuerAutrement: '',
          autreContributionTexte: ''
        });
        setShowContributionFinanciere(false);
        setShowContribuerAutrement(false);
      } else {
        setMessage({ type: "danger", text: data.error || "Une erreur s'est produite." });
      }
    } catch (error) {
      setMessage({ type: "danger", text: "Erreur de connexion. Veuillez réessayer." });
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="formulaire-partenariat-page">
      <div className="formulaire-partenariat-page__background-pattern" />

      <Container className="formulaire-partenariat-page__container py-5">
        <Row className="justify-content-center">
          <Col lg={8} md={10}>
            <div className="formulaire-partenariat-page__form-card">
              <div className="formulaire-partenariat-page__logo-container mb-4">
                <Image
                  src="/logo-La-Societe-Nouvelle.svg"
                  alt="Logo La Société Nouvelle"
                  height={80}
                />
              </div>

              <h2 className="formulaire-partenariat-page__title text-center mb-3">
                Bulletin de partenariat - 2026
              </h2>

              <p className="formulaire-partenariat-page__subtitle mb-3 text-center">
                Entreprises, Cabinets comptables, Structures publiques
              </p>

              <div className="mb-4">
                <div className="formulaire-partenariat-page__divider" />
              </div>

              <p className="text-center text-muted mb-4">
                En devenant partenaire de La Société Nouvelle, vous soutenez nos
                projets dédiés à la transparence des entreprises et la recherche
                statistique extra-financière.
              </p>
              <hr></hr>


              <Form onSubmit={handleSubmit}>
                {/* Section: Informations sur la structure */}
                <h4 className="formulaire-partenariat-page__section-title">
                  Votre structure
                </h4>

                <Row>
                  <Col md={8} className="mb-3">
                    <Form.Group>
                      <Form.Label className="formulaire-partenariat-page__form-label">
                        Dénomination *
                      </Form.Label>
                      <Form.Control
                        type="text"
                        name="organisme"
                        value={formData.organisme}
                        onChange={handleChange}
                        required
                        disabled={loading}
                        placeholder="Nom de votre organisme"
                        className="formulaire-partenariat-page__input"
                      />
                    </Form.Group>
                  </Col>
                  <Col md={4} className="mb-3">
                    <Form.Group>
                      <Form.Label className="formulaire-partenariat-page__form-label">
                        Numéro SIREN
                      </Form.Label>
                      <Form.Control
                        type="text"
                        name="siren"
                        value={formData.siren}
                        onChange={handleChange}
                        disabled={loading}
                        placeholder="9 chiffres"
                        maxLength="9"
                        className="formulaire-partenariat-page__input"
                      />
                    </Form.Group>
                  </Col>
                </Row>

                <Form.Group className="mb-3">
                  <Form.Label className="formulaire-partenariat-page__form-label">
                    Adresse
                  </Form.Label>
                  <Form.Control
                    type="text"
                    name="adresse"
                    value={formData.adresse}
                    onChange={handleChange}
                    disabled={loading}
                    placeholder="Numéro et rue"
                    className="formulaire-partenariat-page__input"
                  />
                </Form.Group>

                <Row>
                  <Col md={4} className="mb-3">
                    <Form.Group>
                      <Form.Label className="formulaire-partenariat-page__form-label">
                        Code postal
                      </Form.Label>
                      <Form.Control
                        type="text"
                        name="codePostal"
                        value={formData.codePostal}
                        onChange={handleChange}
                        disabled={loading}
                        placeholder="75000"
                        maxLength="5"
                        className="formulaire-partenariat-page__input"
                      />
                    </Form.Group>
                  </Col>
                  <Col md={8} className="mb-3">
                    <Form.Group>
                      <Form.Label className="formulaire-partenariat-page__form-label">
                        Ville
                      </Form.Label>
                      <Form.Control
                        type="text"
                        name="ville"
                        value={formData.ville}
                        onChange={handleChange}
                        disabled={loading}
                        placeholder="Ville"
                        className="formulaire-partenariat-page__input"
                      />
                    </Form.Group>
                  </Col>
                </Row>

                <Form.Group className="mb-3">
                  <Form.Label className="formulaire-partenariat-page__form-label">
                    Site internet
                  </Form.Label>
                  <Form.Control
                    type="url"
                    name="siteInternet"
                    value={formData.siteInternet}
                    onChange={handleChange}
                    disabled={loading}
                    placeholder="https://www.exemple.fr"
                    className="formulaire-partenariat-page__input"
                  />
                </Form.Group>

                <Form.Group className="mb-4">
                  <Form.Label className="formulaire-partenariat-page__form-label">
                    Vos activités
                  </Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={2}
                    name="activitesPrincipales"
                    value={formData.activitesPrincipales}
                    onChange={handleChange}
                    disabled={loading}
                    placeholder="Décrivez brièvement vos activités principales"
                    className="formulaire-partenariat-page__input"
                  />
                </Form.Group>

                <h4 className="formulaire-partenariat-page__section-title">
                  Contact
                </h4>
                <Row>
                  <Col md={6} className="mb-3">
                    <Form.Group>
                      <Form.Label className="formulaire-partenariat-page__form-label">
                        Nom - Prénom *
                      </Form.Label>
                      <Form.Control
                        type="text"
                        name="nomContact"
                        value={formData.nomContact}
                        onChange={handleChange}
                        required
                        disabled={loading}
                        placeholder="Prénom et nom"
                        className="formulaire-partenariat-page__input"
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6} className="mb-3">
                    <Form.Group>
                      <Form.Label className="formulaire-partenariat-page__form-label">
                        Fonction
                      </Form.Label>
                      <Form.Control
                        type="text"
                        name="fonction"
                        value={formData.fonction}
                        onChange={handleChange}
                        disabled={loading}
                        placeholder="Votre fonction"
                        className="formulaire-partenariat-page__input"
                      />
                    </Form.Group>
                  </Col>
                </Row>

                <Row>
                  <Col md={6} className="mb-3">
                    <Form.Group>
                      <Form.Label className="formulaire-partenariat-page__form-label">
                        Tél.
                      </Form.Label>
                      <Form.Control
                        type="tel"
                        name="tel"
                        value={formData.tel}
                        onChange={handleChange}
                        disabled={loading}
                        placeholder="06 12 34 56 78"
                        className="formulaire-partenariat-page__input"
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6} className="mb-3">
                    <Form.Group>
                      <Form.Label className="formulaire-partenariat-page__form-label">
                        E-Mail *
                      </Form.Label>
                      <Form.Control
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        disabled={loading}
                        placeholder="votre@email.com"
                        className="formulaire-partenariat-page__input"
                      />
                    </Form.Group>
                  </Col>
                </Row>

                {/* Section: Contribution */}
                <h4 className="formulaire-partenariat-page__section-title">
                  Contribution
                </h4>

                {/* Checkbox: Contribution financière annuelle */}
                <Form.Group className="mb-3">
                  <Form.Check
                    type="checkbox"
                    id="checkContributionFinanciere"
                    checked={showContributionFinanciere}
                    onChange={(e) => {
                      setShowContributionFinanciere(e.target.checked);
                      if (!e.target.checked) {
                        setFormData({
                          ...formData,
                          contributionFinanciere: "",
                        });
                      }
                    }}
                    disabled={loading}
                    label="Je souhaite soutenir financièrement les travaux de La Société Nouvelle"
                    className="formulaire-partenariat-page__checkbox-label"
                  />
                </Form.Group>

                {/* Radio buttons pour contribution financière */}
                <Form.Group className="mb-4 ms-4">
                  <div>
                    {[
                      {
                        value: "ca_500",
                        label: "CA < 500 k€",
                        montant: "500 €",
                      },
                      {
                        value: "ca_500_1M",
                        label: "CA compris entre 500 k€ et 1 M€",
                        montant: "1 000 €",
                      },
                      {
                        value: "ca_1M_10M",
                        label: "CA compris entre 1 M€ et 10 M€",
                        montant: "2 500 €",
                      },
                      {
                        value: "ca_10M_50M",
                        label: "CA compris entre 10 M€ et 50 M€",
                        montant: "5 000 €",
                      },
                      {
                        value: "ca_50M",
                        label: "CA > 50 M€",
                        montant: "7 500 €",
                      },
                      {
                        value: "autre",
                        label: "Autre",
                        montant: "",
                      },
                    ].map((option) => (
                      <div key={option.value}>
                        <div
                          className={`formulaire-partenariat-page__radio-option ${formData.contributionFinanciere === option.value
                            ? "formulaire-partenariat-page__radio-option--selected"
                            : ""
                            }`}
                          onClick={() =>
                            !loading && showContributionFinanciere &&
                            setFormData({
                              ...formData,
                              contributionFinanciere: option.value,
                            })
                          }
                        >
                          <Form.Check
                            type="radio"
                            id={option.value}
                            name="contributionFinanciere"
                            value={option.value}
                            checked={
                              formData.contributionFinanciere === option.value
                            }
                            onChange={handleChange}
                            disabled={loading || !showContributionFinanciere}
                            label={option.label}
                          />
                          {option.montant && (
                            <span className="formulaire-partenariat-page__radio-amount">
                              {option.montant}
                            </span>
                          )}
                        </div>

                        {/* Input pour montant "Autre" */}
                        {option.value === "autre" && formData.contributionFinanciere === "autre" && (
                          <Form.Group className="ms-4 mt-2 mb-3">
                            <Form.Control
                              type="text"
                              name="montantAutre"
                              value={formData.montantAutre}
                              onChange={handleChange}
                              disabled={loading}
                              placeholder="Autre montant (€)"
                              className="formulaire-partenariat-page__input text-end"
                            />
                          </Form.Group>
                        )}
                      </div>
                    ))}
                  </div>
                </Form.Group>

                {/* Checkbox: Contribuer autrement */}
                <Form.Group className="mb-3">
                  <Form.Check
                    type="checkbox"
                    id="checkContribuerAutrement"
                    checked={showContribuerAutrement}
                    onChange={(e) => {
                      setShowContribuerAutrement(e.target.checked);
                      if (!e.target.checked) {
                        setFormData({ ...formData, contribuerAutrement: "", autreContributionTexte: "" });
                      }
                    }}
                    disabled={loading}
                    label="Je souhaite soutenir le projet autrement"
                    className="formulaire-partenariat-page__checkbox-label"
                  />
                </Form.Group>

                {/* Radio buttons Contribution non financière */}
                <Form.Group className="mb-4 ms-4">
                  <div>
                    {[
                      {
                        value: "expertComptable",
                        label: "Je suis expert-comptable, et je souhaite collaborer pendant la période fiscale autour de la production de données extra-financières",
                      },
                      {
                        value: "entreprise",
                        label: "Je suis une entreprise, et je souhaite mesurer et publier l'empreinte sociétale de mes activités",
                      },
                      {
                        value: "developpeur",
                        label: "Je suis développeur et je souhaite contribuer au développement des ressources informatiques",
                      },
                      {
                        value: "autre",
                        label: "Autre",
                      },
                    ].map((option) => (
                      <div key={option.value}>
                        <div
                          className={`formulaire-partenariat-page__radio-option ${formData.contribuerAutrement === option.value
                            ? "formulaire-partenariat-page__radio-option--selected"
                            : ""
                            }`}
                          onClick={() =>
                            !loading && showContribuerAutrement &&
                            setFormData({
                              ...formData,
                              contribuerAutrement: option.value,
                            })
                          }
                        >
                          <Form.Check
                            type="radio"
                            id={`contribuer-${option.value}`}
                            name="contribuerAutrement"
                            value={option.value}
                            checked={formData.contribuerAutrement === option.value}
                            onChange={handleChange}
                            disabled={loading || !showContribuerAutrement}
                            label={option.label}
                          />
                        </div>

                        {/* Textarea pour "Autre" */}
                        {option.value === "autre" && formData.contribuerAutrement === "autre" && (
                          <Form.Group className="ms-4 mt-2 mb-3">
                            <Form.Control
                              as="textarea"
                              rows={3}
                              name="autreContributionTexte"
                              value={formData.autreContributionTexte}
                              onChange={handleChange}
                              disabled={loading}
                              placeholder="Précisez comment vous souhaitez contribuer..."
                              className="formulaire-partenariat-page__input"
                            />
                          </Form.Group>
                        )}
                      </div>
                    ))}
                  </div>
                </Form.Group>

                {message.text && message.type === "danger" && (
                  <div
                    className={`formulaire-partenariat-page__alert formulaire-partenariat-page__alert--${message.type} mb-4`}
                  >
                    <div className="d-flex align-items-center">
                      <i
                        className={`bi bi-exclamation-triangle-fill formulaire-partenariat-page__alert-icon formulaire-partenariat-page__alert-icon--${message.type}`}
                      ></i>
                      <span>{message.text}</span>
                    </div>
                  </div>
                )}

                <div className="text-center mt-5">
                  <Button
                    type="submit"
                    variant="secondary"
                    className="formulaire-partenariat-page__submit-button"
                    disabled={loading}
                  >
                    {loading ? (
                      <>
                        <Spinner
                          as="span"
                          animation="border"
                          size="sm"
                          role="status"
                          className="me-2"
                        />
                        Envoi en cours...
                      </>
                    ) : (
                      <>
                        <i className="bi bi-send me-2"></i> Valider mon soutien
                      </>
                    )}
                  </Button>
                </div>
              </Form>
            </div>

            {/* Footer contact */}
            <Row className="formulaire-partenariat-page__footer">
              <Col>
                <h4 className="formulaire-partenariat-page__footer-title mb-4">
                  Besoin d'informations ?
                </h4>
                <div className="d-flex flex-wrap justify-content-center gap-3">
                  <Button
                    href="/appel-partenariat"
                    className="formulaire-partenariat-page__footer-button"
                  >
                    <i className="bi bi-info-circle me-2"></i> En savoir plus
                  </Button>

                  <Button
                    href="mailto:contact@lasocietenouvelle.org"
                    variant="outline-light"
                    className="formulaire-partenariat-page__footer-button formulaire-partenariat-page__footer-button--outline"
                  >
                    <i className="bi bi-envelope me-2"></i> Nous contacter
                  </Button>
                </div>

                {/* Liens sociaux */}
                <div className="formulaire-partenariat-page__social-links">
                  <a
                    href="https://www.linkedin.com/company/la-societe-nouvelle"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="bi bi-linkedin"></i>
                  </a>
                  <a
                    href="https://discord.gg/ANFwWZc3eu"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="bi bi-discord"></i>
                  </a>
                  <a
                    href="https://github.com/La-Societe-Nouvelle/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="bi bi-github"></i>
                  </a>
                </div>
              </Col>
            </Row>

            <Row>
              <Col className="text-center">
                <p className="formulaire-partenariat-page__footer-description mb-3">
                  La Société Nouvelle porte le projet de l'Empreinte Sociétale :
                  un modèle public, open data et open source pour mesurer les
                  impacts sociaux et environnementaux des entreprises.
                </p>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>

      {/* Modal de succès */}
      <Modal
        show={showSuccessModal}
        onHide={() => setShowSuccessModal(false)}
        centered
        size="lg"
        className="formulaire-partenariat-page__success-modal"
      >
        <Modal.Header closeButton className="border-0 pb-0 "></Modal.Header>
        <Modal.Body className="text-center px-4 pb-5 ">
          <div className="mb-4">
            <div className="formulaire-partenariat-page__success-icon mx-auto mb-3">
              <i className="bi bi-check-circle-fill"></i>
            </div>
            <h3 className="formulaire-partenariat-page__success-title mb-3">
              Merci pour votre soutien !
            </h3>
            <p className="text-muted mb-4">
              Le formulaire a bien été envoyé.
              <br />Nous reviendrons
              vers vous rapidement pour échanger ensemble.
            </p>
          </div>

          <div className="formulaire-partenariat-page__success-divider mx-auto mb-4"></div>

          <div className="mb-4">
            <h5 className="fw-bold mb-3">Partager l'appel à partenaire</h5>
            <p className="text-muted mb-3">
              Pour nous aider à trouver de nouveaux partenaires,
              <br />n'hésitez pas à republier notre appel au sein de votre réseau.
            </p>
          </div>

          <div className="d-flex flex-wrap justify-content-center gap-3 mb-4">
            <Button
              variant="primary"
              size="sm"
              className="formulaire-partenariat-page__share-button"
              onClick={() => {
                // TO DO : Ajouter lien de partage
              }}
            >
              <i className="bi bi-linkedin me-2"></i>
              Accéder au post LinkedIn
            </Button>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
}

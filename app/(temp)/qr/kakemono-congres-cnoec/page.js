'use client';

import { useState } from "react";
import { Button, Col, Container, Image, Row, Form, Spinner } from "react-bootstrap";
import styles from './styles.module.css';

export default function CongresCEC() {
  const [formData, setFormData] = useState({ email: "" });
  const [newsletter, setNewsletter] = useState(true);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({ type: "", text: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage({ type: "", text: "" });

    try {
      const response = await fetch("/api/congres-contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, newsletter }),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage({ type: "success", text: "Merci ! Vous allez recevoir votre plaquette par email sous peu." });
        setFormData({ email: "" });
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

  const handleInputFocus = (e) => {
    e.target.style.borderColor = '#F7941D';
    e.target.style.boxShadow = '0 0 0 0.2rem rgba(247, 148, 29, 0.18)';
  };

  const handleInputBlur = (e) => {
    e.target.style.borderColor = '#e9ecef';
    e.target.style.boxShadow = 'none';
  };

  return (
    <div className={styles.container}>
      {/* Pattern de fond subtil */}
      <div className={styles.backgroundPattern} />

      <Container className={`${styles.contentWrapper} py-3 py-md-5 mt-5 mt-md-4`}>
        <Row className="justify-content-center">
          <Col lg={8} md={10} xs={11}>
            {/* Card principale */}
            <div className={`${styles.card} p-3 p-md-5 mt-4 mt-md-3`}>
              {/* Logos en haut */}
              <div className={styles.logosSection}>
                <div className={styles.logosCongres}>
                  <Image
                    src="/images/congres-2026-lockup.png"
                    alt="81e Congrès de l'Ordre des experts-comptables — [Re]fondation des cabinets. Du 16 au 18 septembre 2026, Paris Expo Porte de Versailles."
                    fluid
                  />
                </div>
                <Image
                  src="/logo-La-Societe-Nouvelle.svg"
                  alt="Logo La Société Nouvelle"
                  height={72}
                />
              </div>

              {/* Titre de remerciement */}
              <h2 className={`mb-3 ${styles.title}`}>
                Bonjour 👋
              </h2>

              {/* Texte descriptif */}
              <p className={`mb-4 ${styles.description}`}>
                Vous souhaitez en savoir plus sur nos ressources ?
              </p>

              {/* Séparateur décoratif */}
              <div className={styles.dividerWrapper}>
                <div className={styles.divider} />
              </div>

              <p className={`mb-4 small fw-bold ${styles.formLabel}`}>
                Saisissez votre email et recevez directement notre plaquette.
              </p>

              {/* Alert / Message */}
              {message.text && (
                <div className={`${styles.alert} ${message.type === 'success' ? styles.alertSuccess : styles.alertError} mb-4`}>
                  <i
                    className={`bi ${message.type === 'success' ? 'bi-check-circle-fill' : 'bi-exclamation-triangle-fill'} ${styles.alertIcon} ${message.type === 'success' ? styles.alertIconSuccess : styles.alertIconError}`}>
                  </i>
                  <span>{message.text}</span>
                </div>
              )}

              {/* Formulaire */}
              <Form onSubmit={handleSubmit}>
                <Row className="justify-content-center">
                  <Col md={8} className="mb-3">
                    <Form.Group>
                      <Form.Control
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        disabled={loading}
                        className={styles.formControl}
                        onFocus={handleInputFocus}
                        onBlur={handleInputBlur}
                      />
                    </Form.Group>
                  </Col>
                </Row>

                <Row className="justify-content-center">
                  <Col md={8}>
                    <div className={styles.newsletterCheck}>
                      <input
                        type="checkbox"
                        id="newsletter"
                        checked={newsletter}
                        disabled={loading}
                        onChange={(e) => setNewsletter(e.target.checked)}
                      />
                      <label htmlFor="newsletter" className={styles.newsletterCheckLabel}>
                        Je souhaite recevoir la newsletter de La Société Nouvelle pour suivre l'avancée du projet.
                      </label>
                    </div>
                  </Col>
                </Row>

                <div className="text-center">
                  <Button
                    type="submit"
                    disabled={loading}
                    className={`${styles.submitButton} ${loading ? styles.submitButtonLoading : styles.submitButtonActive}`}
                  >
                    {loading ? (
                      <>
                        <Spinner as="span" animation="border" size="sm" role="status" className="me-2" />
                        Envoi en cours...
                      </>
                    ) : (
                      <>
                        <i className="bi bi-download me-2"></i> Recevoir la plaquette
                      </>
                    )}
                  </Button>
                </div>
              </Form>
            </div>

            {/* Section de contact */}
            <Row className={styles.contactSection}>
              <Col>
                <h4 className={styles.contactTitle}>
                  Pour nous suivre
                </h4>
                <div className={styles.contactButtons}>
                  <Button
                    href="https://www.linkedin.com/company/la-societe-nouvelle"
                    target="_blank"
                    className={`${styles.socialButton} ${styles.linkedinButton}`}
                  >
                    <i className={`bi bi-linkedin ${styles.socialIcon}`}></i>
                    <span>LinkedIn</span>
                  </Button>

                  <Button
                    href="https://discord.gg/ANFwWZc3eu"
                    target="_blank"
                    className={`${styles.socialButton} ${styles.discordButton}`}
                  >
                    <i className={`bi bi-discord ${styles.socialIcon}`}></i>
                    <span>Discord</span>
                  </Button>

                  <h4 className={`my-3 ${styles.contactTitle}`}>
                    Pour rester en contact
                  </h4>

                  <Button
                    href="https://calendly.com/sylvain-humiliere/"
                    target="_blank"
                    className={`${styles.socialButton} ${styles.calendlyButton}`}
                  >
                    <i className={`bi bi-calendar ${styles.socialIcon}`}></i>
                    <span>Prendre rendez-vous</span>
                  </Button>
                </div>
              </Col>
            </Row>

            {/* Footer */}
            <Row className={styles.footer}>
              <Col className="text-center text-white">
                <p className={styles.footerText}>
                  La Société Nouvelle porte le projet de l'Empreinte Sociétale : un modèle public, open data et open source pour mesurer les impacts sociaux et environnementaux des entreprises. Notre mission : permettre à tous de participer à la construction d'une économie durable.
                </p>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

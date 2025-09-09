import { useState } from "react";
import { Button, Col, Container, Image, Row, Form, Alert, Spinner } from "react-bootstrap";
import { Helmet } from "react-helmet";

const CongresCEC2025 = () => {
  const [formData, setFormData] = useState({ email: "", prenom: "" });
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
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage({ type: "success", text: "Merci ! Vous allez recevoir votre plaquette par email sous peu." });
        setFormData({ email: "", prenom: "" });
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
    <>
      <Helmet>
        <title>La Société Nouvelle | Congrès de l'ordre des experts comptables - 2025</title>
        <meta
          property="og:url"
          content="https://lasocietenouvelle.fr/qr/kakemono-congres-2025"
        />
        <meta
          property="og:description"
          content="Retrouvez-nous au Congrès de l'Ordre des Experts Comptables 2025 à Paris du 17 au 19 septembre 2025."
        />
      </Helmet>

      <div style={{
        background: 'linear-gradient(135deg, #191558 0%, #2a1f7a 50%, #191558 100%)',
        minHeight: '100vh',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Subtle background pattern */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: `radial-gradient(circle at 20% 50%, rgba(255,255,255,0.03) 1px, transparent 1px),
                          radial-gradient(circle at 80% 80%, rgba(255,255,255,0.02) 1px, transparent 1px)`,
          backgroundSize: '50px 50px, 80px 80px',
          opacity: 0.7
        }} />

        {/* Logo watermark - Desktop: haut à droite */}
        <div style={{
          position: 'absolute',
          top: '10px',
          right: '20px',
          zIndex: 1,
          opacity: 0.3,
          pointerEvents: 'none'
        }}
        className="d-none d-md-block">
          <img 
            src="/logos/congres-cnoec-2025.png" 
            alt="" 
            style={{
              width: '400px',
              height: 'auto',
              filter: 'brightness(2)'
            }}
          />
        </div>

        {/* Logo watermark - Mobile: bas à droite et plus petit */}
        <div style={{
          position: 'absolute',
          top: '0px',
          right: '10px',
          zIndex: 1,
          opacity: 0.2,
          pointerEvents: 'none'
        }}
        className="d-block d-md-none">
          <img 
            src="/logos/congres-cnoec-2025.png" 
            alt="" 
            style={{
              width: '100px',
              height: 'auto',
              filter: 'brightness(2)'
            }}
          />
        </div>

        <Container className="py-5" style={{ position: 'relative', zIndex: 2, paddingTop: '3rem', paddingBottom: '3rem' }}>
          <Row className="justify-content-center">
            <Col lg={8} md={10}>
              {/* Card principale unifiée */}
              <div style={{
                background: 'white',
                borderRadius: '24px',
                padding: '50px',
                marginBottom: '40px',
                boxShadow: '0 25px 80px rgba(25, 21, 88, 0.15)',
                border: '1px solid rgba(250, 89, 95, 0.1)',
                position: 'relative',
                textAlign: 'center'
              }}>
                {/* Logos en haut */}
                <div className="d-flex align-items-center justify-content-center mb-4 gap-4">
                  <Image
                    src="/logo-La-Societe-Nouvelle.svg"
                    alt="Logo La Société Nouvelle"
                    height={80}
                    style={{ maxWidth: '180px', maxHeight: '80px', width: 'auto', height: 'auto' }}
                  />
                </div>

                {/* Titre de remerciement */}
                <h2 className="mb-3" style={{ 
                  color: '#191558', 
                  fontWeight: '700',
                  fontSize: '1.8rem',
                  lineHeight: '1.3'
                }}>
                  Merci de votre visite sur notre stand !
                </h2>
                
                <p className="mb-4" style={{ color: '#666', fontSize: '16px' }}>
                  Explorez nos ressources et construisons ensemble une économie durable.
                </p>

                {/* Séparateur décoratif */}
                <div className="mb-4">
                  <div style={{
                    width: '60px',
                    height: '3px',
                    background: 'linear-gradient(45deg, #fa595f, #ff7b81)',
                    borderRadius: '2px',
                    margin: '0 auto',
                    opacity: '0.8'
                  }} />
                </div>

                <h3 className="mb-2" >
                  Recevez la plaquette du projet
                </h3>
                <p className="mb-4 small" style={{ color: '#666'}}>
                  Laissez-nous vos coordonnées et recevez directement notre plaquette dans votre boîte mail.
                </p>

                {message.text && (
                  <Alert
                    variant={message.type}
                    className="mb-4"
                    style={{
                      border: 'none',
                      borderRadius: '16px',
                      padding: '20px',
                      fontSize: '16px',
                      fontWeight: '500',
                      background: message.type === 'success'
                        ? 'linear-gradient(135deg, #d4edda 0%, #c3e6cb 100%)'
                        : 'linear-gradient(135deg, #f8d7da 0%, #f1c0c5 100%)',
                      color: message.type === 'success' ? '#155724' : '#721c24',
                      boxShadow: message.type === 'success'
                        ? '0 12px 30px rgba(40, 167, 69, 0.15)'
                        : '0 12px 30px rgba(220, 53, 69, 0.15)',
                      border: message.type === 'success'
                        ? '2px solid rgba(40, 167, 69, 0.1)'
                        : '2px solid rgba(220, 53, 69, 0.1)'
                    }}
                  >
                    <div className="d-flex align-items-center">
                      <i className={`bi ${message.type === 'success' ? 'bi-check-circle-fill' : 'bi-exclamation-triangle-fill'} me-3`} 
                         style={{ fontSize: '24px', color: message.type === 'success' ? '#28a745' : '#dc3545' }}>
                      </i>
                      <span>{message.text}</span>
                    </div>
                  </Alert>
                )}

                <Form onSubmit={handleSubmit}>
                  <Row>
                    <Col md={6} className="mb-4">
                      <Form.Group>
                        <Form.Label style={{ color: '#191558', fontWeight: '600' }}>
                          <i className="bi bi-person me-2"></i> Prénom *
                        </Form.Label>
                        <Form.Control
                          type="text"
                          name="prenom"
                          value={formData.prenom}
                          onChange={handleChange}
                          required
                          disabled={loading}
                          style={{
                            borderRadius: '12px',
                            border: '2px solid #e9ecef',
                            padding: '12px 16px',
                            fontSize: '15px',
                            transition: 'all 0.2s ease',
                            backgroundColor: loading ? '#f8f9fa' : 'white'
                          }}
                          onFocus={(e) => {
                            e.target.style.borderColor = '#fa595f';
                            e.target.style.boxShadow = '0 0 0 0.2rem rgba(250, 89, 95, 0.15)';
                          }}
                          onBlur={(e) => {
                            e.target.style.borderColor = '#e9ecef';
                            e.target.style.boxShadow = 'none';
                          }}
                        />
                      </Form.Group>
                    </Col>
                    <Col md={6} className="mb-4">
                      <Form.Group>
                        <Form.Label style={{ color: '#191558', fontWeight: '600' }}>
                          <i className="bi bi-envelope me-2"></i> Email *
                        </Form.Label>
                        <Form.Control
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          disabled={loading}
                          style={{
                            borderRadius: '12px',
                            border: '2px solid #e9ecef',
                            padding: '12px 16px',
                            fontSize: '15px',
                            transition: 'all 0.2s ease',
                            backgroundColor: loading ? '#f8f9fa' : 'white'
                          }}
                          onFocus={(e) => {
                            e.target.style.borderColor = '#fa595f';
                            e.target.style.boxShadow = '0 0 0 0.2rem rgba(250, 89, 95, 0.15)';
                          }}
                          onBlur={(e) => {
                            e.target.style.borderColor = '#e9ecef';
                            e.target.style.boxShadow = 'none';
                          }}
                        />
                      </Form.Group>
                    </Col>
                  </Row>
                  <div className="text-center">
                    <Button 
                      type="submit" 
                      variant="secondary" 
                      className="border-rounded" 
                      disabled={loading}
                      style={{
                        borderRadius: '16px',
                        padding: '14px 32px',
                        fontSize: '16px',
                        fontWeight: '600',
                        background: loading ? '#6c757d' : 'linear-gradient(45deg, #fa595f, #fc6d72ff)',
                        border: 'none',
                        boxShadow: '0 6px 20px rgba(250, 89, 95, 0.3)'
                      }}>
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


              {/* Footer contact */}
              <Row className="text-center">
                <Col>
                  <h4 className="mb-4" style={{ 
                    color: '#ffffff', 
                    fontWeight: '700',
                  }}>
                    Restons en contact
                  </h4>
                  <div className="d-flex flex-wrap justify-content-center gap-3">
                    <Button 
                      href="https://calendly.com/lasocietenouvelle/30min" 
                      target="_blank" 
                      style={{
                        borderRadius: '16px',
                        padding: '12px 24px',
                        fontSize: '16px',
                        fontWeight: '600',
                        background: '#fa595f',
                        border: 'none',
                        color: 'white',
                        textDecoration: 'none',
                        boxShadow: 'none'
                      }}
     >
                      <i className="bi bi-calendar me-2"></i> Prendre rendez-vous
                    </Button>

                    <Button 
                      href="https://lasocietenouvelle.org" 
                      target="_blank" 
                      variant="outline-info"
                      style={{
                        borderRadius: '12px',
                        padding: '10px 20px',
                        borderWidth: '2px',
                        fontWeight: '500'
                      }}>
                      <i className="bi bi-globe me-2"></i> Site internet
                    </Button>

                  </div>
                  
                  {/* Liens sociaux supplémentaires */}
                  <div className="d-flex justify-content-center gap-3 mt-4">
                    <a 
                      href="https://www.linkedin.com/company/la-societe-nouvelle" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      style={{
                        color: 'white',
                        fontSize: '24px',
                        textDecoration: 'none',
                        opacity: 0.8
                      }}
                      onMouseEnter={(e) => e.target.style.opacity = 1}
                      onMouseLeave={(e) => e.target.style.opacity = 0.8}>
                      <i className="bi bi-linkedin"></i>
                    </a>
                    <a 
                      href="https://discord.gg/ANFwWZc3eu" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      style={{
                        color: 'white',
                        fontSize: '24px',
                        textDecoration: 'none',
                        opacity: 0.8
                      }}
                      onMouseEnter={(e) => e.target.style.opacity = 1}
                      onMouseLeave={(e) => e.target.style.opacity = 0.8}>
                      <i className="bi bi-discord"></i>
                    </a>
                    <a 
                      href="https://github.com/La-Societe-Nouvelle/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      style={{
                        color: 'white',
                        fontSize: '24px',
                        textDecoration: 'none',
                        opacity: 0.8
                      }}
                      onMouseEnter={(e) => e.target.style.opacity = 1}
                      onMouseLeave={(e) => e.target.style.opacity = 0.8}>
                      <i className="bi bi-github"></i>
                    </a>
                  </div>
                </Col>
              </Row>

              <Row className="mt-2 pt-4" style={{ borderTop: '1px solid rgba(255,255,255,0.1)' }}>
                <Col className="text-center" style={{ color: 'rgba(255,255,255,0.8)' }}>
                  <p className="mb-3" style={{ fontSize: '14px', lineHeight: '1.6', fontStyle: 'italic' }}>
                    La Société Nouvelle porte le projet de l'Empreinte Sociétale : un modèle public, open data et open source pour mesurer les impacts sociaux et environnementaux des entreprises. Notre mission : permettre à tous de participer à la construction d'une économie durable.
                  </p>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

CongresCEC2025.getLayout = (page) => page;

export default CongresCEC2025;

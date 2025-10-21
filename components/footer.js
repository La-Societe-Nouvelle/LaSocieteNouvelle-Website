'use client';

import React from "react";
import { Col, Container, Image, Nav, Row } from "react-bootstrap";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      {/* Top section - CTA & Social */}
      <div className="footer-top">
        <Container>
          <Row className="align-items-center">
            <Col xs={12} lg={4} className="mb-4 mb-lg-0">
              <h3 className="footer-heading">Restez informé·e</h3>
              <p className="footer-subtitle">Abonnez-vous à notre newsletter</p>
              <a href="/newsletter" className="footer-cta-link">
                <i className="bi bi-envelope-paper me-2"></i>
                S'inscrire à la newsletter
              </a>
            </Col>

            <Col xs={12} lg={4} className="mb-4 mb-lg-0 text-center">
              <h3 className="footer-heading">Suivez-nous</h3>
              <div className="social-links">
                <a
                  href="https://www.linkedin.com/company/la-societe-nouvelle/"
                  target="_blank"
                  rel="noreferrer"
                  title="LinkedIn"
                  aria-label="LinkedIn"
                >
                  <i className="bi bi-linkedin"></i>
                </a>
                <a
                  href="https://github.com/La-Societe-Nouvelle/"
                  target="_blank"
                  rel="noreferrer"
                  title="GitHub"
                  aria-label="GitHub"
                >
                  <i className="bi bi-github"></i>
                </a>
                <a
                  href="https://discord.gg/ANFwWZc3eu"
                  target="_blank"
                  rel="noreferrer"
                  title="Discord"
                  aria-label="Discord"
                >
                  <i className="bi bi-discord"></i>
                </a>
              </div>
            </Col>

            <Col xs={12} lg={4} className="text-lg-end">
              <h3 className="footer-heading">Contactez-nous</h3>
              <p className="footer-subtitle">Une question ? Un projet ?</p>
              <a href="/contact" className="footer-cta-link">
                <i className="bi bi-envelope-fill me-2"></i>
                Formulaire de contact
              </a>
            </Col>
          </Row>
        </Container>
      </div>

      {/* Main footer - Links */}
      <div className="footer-main">
        <Container>
          <Row>
            <Col xs={12} lg={3} className="mb-4 mb-lg-0">
              <h4 className="footer-section__title">Le projet</h4>
              <Nav className="flex-column footer-nav">
                <Nav.Link href="/a-propos">À propos</Nav.Link>
                <Nav.Link href="/projet-sinese">Projet SINESE</Nav.Link>
                <Nav.Link href="/indicateurs">Les 12 indicateurs</Nav.Link>
                <Nav.Link href="/statistics">Statistiques d'usage</Nav.Link>
                <Nav.Link href="/faq">FAQ</Nav.Link>
              </Nav>
            </Col>

            <Col xs={12} lg={3} className="mb-4 mb-lg-0">
              <h4 className="footer-section__title">Nos services</h4>
              <Nav className="flex-column footer-nav">
                <Nav.Link href="/nos-services">Vue d'ensemble</Nav.Link>
                <Nav.Link href="/devenir-partenaire/expert-comptable">
                  Experts-comptables
                </Nav.Link>
                <Nav.Link href="/devenir-partenaire/entreprises">
                  Entreprises
                </Nav.Link>
                <Nav.Link href="/devenir-partenaire/chercheurs-experts  ">
                  Chercheurs et experts
                </Nav.Link>
                <Nav.Link href="/devenir-partenaire/sponsors">
                  Nous soutenir
                </Nav.Link>
              </Nav>
            </Col>

            <Col xs={12} lg={3} className="mb-4 mb-lg-0">
              <h4 className="footer-section__title">Ressources</h4>
              <Nav className="flex-column footer-nav">
                <Nav.Link href="/ressources/application-mesure-impact">
                  Application Metriz
                </Nav.Link>
                <Nav.Link href="/ressources/repetoire-sinese">
                  Portail SINESE
                </Nav.Link>
                <Nav.Link href="/ressources/travaux-statistiques">
                  Data Browser
                </Nav.Link>
                <Nav.Link href="/ressources/api-publique">
                  API publique
                </Nav.Link>
                <Nav.Link href="/docs">
                  Documentation
                </Nav.Link>
              </Nav>
            </Col>

            <Col xs={12} lg={3}>
              <h4 className="footer-section__title">Publications</h4>
              <Nav className="flex-column footer-nav">
                <Nav.Link href="/blog">Blog</Nav.Link>
                <Nav.Link href="/categorie/notes-analyse">
                  Notes d'analyse
                </Nav.Link>
                <Nav.Link href="/categorie/fiches-methodologiques">
                  Fiches méthodologiques
                </Nav.Link>
                <Nav.Link href="/infographies">Infographies</Nav.Link>
                <Nav.Link href="/podcast">Podcast</Nav.Link>
              </Nav>
            </Col>
          </Row>

          <div className="footer-logo">
            <Image
              src="/celeste-blanc.svg"
              height={40}
              alt="Celeste - Mascotte de La Société Nouvelle"
            />
          </div>
        </Container>
      </div>

      {/* Bottom footer - Legal */}
      <div className="footer-bottom">
        <Container>
          <Row className="align-items-center">
            <Col xs={12} lg={6} className="mb-3 mb-lg-0">
              <p className="copyright-text">
                &copy; {year} La Société Nouvelle - Initiative OpenData & OpenSource
              </p>
            </Col>
            <Col xs={12} lg={6}>
              <Nav className="footer-legal-nav justify-content-lg-end">
                <Nav.Link href="/mentions-legales">Mentions légales</Nav.Link>
                <Nav.Link href="/politique-confidentialite">
                  Confidentialité
                </Nav.Link>
                <Nav.Link href="https://sinese.fr/entreprise/889182770" target="_blank">
                  Notre empreinte
                </Nav.Link>
              </Nav>
            </Col>
          </Row>
        </Container>
      </div>
    </footer>
  );
}

export default Footer;

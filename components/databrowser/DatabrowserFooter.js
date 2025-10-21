'use client';

import { Container, Row, Col } from "react-bootstrap";
import Link from "next/link";
import Image from "next/image";

export default function DatabrowserFooter() {
  return (
    <footer className="databrowser-footer">
      <div className="footer-main">
        <Container>
          <Row className="g-4">
            <Col lg={4}>
              <div className="footer-brand">
                <Link href="/">
                  <Image
                    src="/logo-La-Societe-Nouvelle.svg"
                    height={50}
                    width={160}
                    alt="La Société Nouvelle"
                  />
                </Link>
                <p className="footer-description">
                  Portail Open Data de La Société Nouvelle. Données statistiques
                  extra-financières sous licence libre.
                </p>
                <div className="footer-socials">
                  <a href="https://www.linkedin.com/company/la-societe-nouvelle/" target="_blank" rel="noopener noreferrer" className="social-link" title="LinkedIn">
                    <i className="bi bi-linkedin"></i>
                  </a>
                  <a href="https://discord.gg/ANFwWZc3eu" target="_blank" rel="noopener noreferrer" className="social-link" title="Discord">
                    <i className="bi bi-discord"></i>
                  </a>
                  <a href="https://github.com/La-Societe-Nouvelle" target="_blank" rel="noopener noreferrer" className="social-link" title="GitHub">
                    <i className="bi bi-github"></i>
                  </a>
                </div>
              </div>
            </Col>
            <Col lg={2} md={4}>
              <div className="footer-section">
                <h4 className="footer-title">Données</h4>
                <ul className="footer-links">
                  <li><Link href="/databrowser/datasets">Empreintes macro</Link></li>
                  <li><Link href="/databrowser/env_impact_factors">Facteurs d'impacts</Link></li>
                  <li><Link href="/databrowser/barometre-ges">Baromètre GES</Link></li>
                </ul>
              </div>
            </Col>
            <Col lg={2} md={4}>
              <div className="footer-section">
                <h4 className="footer-title">Ressources</h4>
                <ul className="footer-links">
                  <li><a href="https://api.lasocietenouvelle.org" target="_blank" rel="noopener noreferrer">API publique</a></li>
                  <li><a href="https://docs.lasocietenouvelle.org" target="_blank" rel="noopener noreferrer">Documentation</a></li>
                  <li><a href="https://github.com/La-Societe-Nouvelle" target="_blank" rel="noopener noreferrer">GitHub</a></li>
                </ul>
              </div>
            </Col>
            <Col lg={2} md={4}>
              <div className="footer-section">
                <h4 className="footer-title">Outils R</h4>
                <ul className="footer-links">
                  <li><a href="https://cran.r-project.org/web/packages/lsnstat/index.html" target="_blank" rel="noopener noreferrer">Package lsnstat</a></li>
                  <li><a href="https://github.com/La-Societe-Nouvelle/lsnr-lab" target="_blank" rel="noopener noreferrer">Package lsnR-Lab</a></li>
                </ul>
              </div>
            </Col>
            <Col lg={2} md={4}>
              <div className="footer-section">
                <h4 className="footer-title">Site principal</h4>
                <ul className="footer-links">
                  <li><Link href="/">Accueil</Link></li>
                  <li><Link href="/a-propos">À propos</Link></li>
                  <li><Link href="/contact">Contact</Link></li>
                  <li><Link href="/mentions-legales">Mentions légales</Link></li>
                </ul>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      <div className="footer-bottom">
        <Container>
          <div className="footer-bottom-content">
            <p className="footer-copyright">
              © {new Date().getFullYear()} La Société Nouvelle - Données ouvertes sous licence libre
            </p>
            <div className="footer-badges">
              <span className="badge-item">
                <i className="bi bi-unlock-fill me-1"></i>
                Open Data
              </span>
              <span className="badge-item">
                <i className="bi bi-braces me-1"></i>
                API REST
              </span>
            </div>
          </div>
        </Container>
      </div>
    </footer>
  );
}

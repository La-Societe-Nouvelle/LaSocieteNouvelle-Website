'use client';

import { Container, Navbar, Nav } from "react-bootstrap";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

export default function DatabrowserHeader() {
  const pathname = usePathname();
  const isActive = (path) => pathname?.startsWith(path);

  return (
    <header className="header databrowser-theme">
      <div className="header-brand">
        <Container>
          <div className="d-flex justify-content-between align-items-center">
            <Link href="/" className="brand-logo">
              <Image
                src="/logo-La-Societe-Nouvelle.svg"
                height={65}
                width={213}
                alt="La Société Nouvelle"
                className="section__logo"
              />
            </Link>
            <div className="header-title-section">
              <h1 className="databrowser-title">
                <i className="bi bi-database me-2"></i>
                Data Browser
              </h1>
              <p className="databrowser-subtitle">
                Portail Open Data - Statistiques extra-financières
              </p>
            </div>
            <div className="header-actions">
              <a
                href="https://api.lasocietenouvelle.org"
                target="_blank"
                rel="noopener noreferrer"
                className="api-link"
              >
                <i className="bi bi-braces"></i>
                <span>API</span>
              </a>
              <a
                href="https://docs.lasocietenouvelle.org"
                target="_blank"
                rel="noopener noreferrer"
                className="docs-link"
              >
                <i className="bi bi-book"></i>
                <span>Docs</span>
              </a>
            </div>
          </div>
        </Container>
      </div>

      <div className="navigation-bar">
        <Container>
          <Navbar expand="lg" className="p-0">
            <Navbar.Toggle aria-controls="databrowser-navigation" />
            <Navbar.Collapse id="databrowser-navigation">
              <Nav>
                <Nav.Link
                  href="/databrowser"
                  className={pathname === "/databrowser" ? "active" : ""}
                >
                  <i className="bi bi-house-door me-2"></i>
                  Accueil
                </Nav.Link>
                <Nav.Link
                  href="/databrowser/datasets"
                  className={isActive("/databrowser/dataset") ? "active" : ""}
                >
                  <i className="bi bi-bar-chart-line me-2"></i>
                  Empreintes macroéconomiques
                </Nav.Link>
                <Nav.Link
                  href="/databrowser/env_impact_factors"
                  className={isActive("/databrowser/env_impact_factors") ? "active" : ""}
                >
                  <i className="bi bi-calculator me-2"></i>
                  Facteurs d'impacts
                </Nav.Link>
                <Nav.Link
                  href="/databrowser/barometre-ges"
                  className={isActive("/databrowser/barometre-ges") ? "active" : ""}
                >
                  <i className="bi bi-speedometer2 me-2"></i>
                  Baromètre GES
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </Container>
      </div>
    </header>
  );
}

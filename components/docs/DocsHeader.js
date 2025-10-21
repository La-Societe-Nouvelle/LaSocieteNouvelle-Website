'use client';

import { Container, Navbar, Nav } from "react-bootstrap";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

export default function DocsHeader() {
  const pathname = usePathname();
  const isActive = (path) => pathname?.startsWith(path);

  return (
    <header className="header docs-theme">
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
              <h1 className="docs-title">
                <i className="bi bi-book me-2"></i>
                Documentation
              </h1>
              <p className="docs-subtitle">
                Guides, ressources et références techniques de SINESE
              </p>
            </div>

          </div>
        </Container>
      </div>

      <div className="navigation-bar">
        <Container>
          <Navbar expand="lg" className="p-0">
            <Navbar.Toggle aria-controls="docs-navigation" />
            <Navbar.Collapse id="docs-navigation">
              <Nav>
                <Nav.Link
                  href="/docs"
                  className={pathname === "/docs" ? "active" : ""}
                >
                  <i className="bi bi-house-door me-2"></i>
                  Accueil
                </Nav.Link>
                <Nav.Link
                  href="/docs/empreinte-societale"
                  className={pathname === "/docs/empreinte-societale" ? "active" : ""}
                >
                  Empreinte Sociétale
                </Nav.Link>

                <Nav.Link
                  href="/docs/donnees-par-defaut"
                  className={pathname === "/docs/donnees-par-defaut" ? "active" : ""}
                >
                  Données par défaut
                </Nav.Link>



                <Nav.Link
                  href="/docs/metriz-webapp"
                  className={pathname === "/docs/metriz-webapp" ? "active" : ""}
                >
                  Application Web - Metriz
                </Nav.Link>



                <Nav.Link
                  href="/docs/donnees-statistiques"
                  className={pathname === "/docs/donnees-statistiques" ? "active" : ""}
                >
                 Données statistiques
                </Nav.Link>

                


                <Nav.Link
                  href="https://lasocietenouvelle.readme.io/"
                  target="_blank"
                  rel="noreferrer"
                >
                 API SINESE
                 <i className="bi bi-box-arrow-up-right ms-2"></i>
                </Nav.Link>


              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </Container>
      </div>
    </header>
  );
}

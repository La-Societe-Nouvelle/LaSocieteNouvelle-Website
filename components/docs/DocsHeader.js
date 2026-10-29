'use client';

import { Container, Navbar, Nav } from "react-bootstrap";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { docsSections, externalLinks, getSection } from "@/lib/docsConfig";

export default function DocsHeader() {
  const pathname = usePathname();
  const activeSection = getSection(pathname);
  const isActive = (href) => activeSection?.href === href;

  return (
    <header className="header docs-theme">
      <div className="header-brand">
        <Container>
          <div className="d-flex justify-content-between align-items-center">
            <Link href="/" className="brand-logo">
              <Image
                src="/logo-La-Societe-Nouvelle.svg"
                height={81}
                width={213}
                alt="La Société Nouvelle"
                className="section__logo"
                priority
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
                {docsSections.map((section) => (
                  <Nav.Link
                    key={section.id}
                    href={section.href}
                    className={isActive(section.href) ? "active" : ""}
                  >
                    {section.title}
                  </Nav.Link>
                ))}

                {externalLinks.map((link) => (
                  <Nav.Link
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {link.title}
                    <i className="bi bi-box-arrow-up-right ms-2"></i>
                  </Nav.Link>
                ))}
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </Container>
      </div>
    </header>
  );
}

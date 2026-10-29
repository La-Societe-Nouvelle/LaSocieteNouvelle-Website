'use client';

import { Navbar, Nav } from "react-bootstrap";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { docsSections, externalLinks, getSection } from "@/lib/docsConfig";

export default function DocsHeader() {
  const pathname = usePathname();
  const activeSection = getSection(pathname);

  return (
    <header className="docs-header">
      <Navbar expand="lg" className="docs-header-bar" collapseOnSelect>
        <div className="docs-header-inner">
          <div className="docs-brand">
            <Link href="/" className="docs-brand-logo">
              <Image
                src="/logo-La-Societe-Nouvelle.svg"
                height={40}
                width={105}
                alt="La Société Nouvelle"
                priority
              />
            </Link>
            <span className="docs-brand-divider" aria-hidden="true" />
            <Link href="/docs" className="docs-brand-label">
              Documentation
            </Link>
          </div>

          <Navbar.Toggle aria-controls="docs-navigation" />
          <Navbar.Collapse id="docs-navigation">
            <Nav className="docs-header-nav">
              {docsSections.map((section) => {
                const isActive = activeSection?.id === section.id;
                return (
                  <Nav.Link
                    as={Link}
                    key={section.id}
                    href={section.href}
                    eventKey={section.href}
                    className={isActive ? "active" : ""}
                    aria-current={isActive ? "page" : undefined}
                  >
                    {section.shortTitle || section.title}
                  </Nav.Link>
                );
              })}

              {externalLinks.map((link) => (
                <Nav.Link
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="docs-header-external"
                >
                  {link.title}
                  <i className="bi bi-box-arrow-up-right ms-1" aria-hidden="true"></i>
                </Nav.Link>
              ))}
            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>
    </header>
  );
}

'use client';

import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import DocsSearch from "./DocsSearch";
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

          <DocsSearch />

          <Navbar.Toggle aria-controls="docs-navigation" />
          <Navbar.Collapse id="docs-navigation">
            <Nav className="docs-header-nav">
              {docsSections.map((section, index) => {
                const isActive = activeSection?.id === section.id;

                // Sections d'un même groupe : un seul menu déroulant, à la place de la première
                if (section.navGroup) {
                  if (docsSections.findIndex((s) => s.navGroup === section.navGroup) !== index) return null;
                  const members = docsSections.filter((s) => s.navGroup === section.navGroup);
                  const groupActive = members.some((s) => s.id === activeSection?.id);
                  return (
                    <NavDropdown
                      key={section.navGroup}
                      title={section.navGroup}
                      id={`docs-nav-${section.id}`}
                      className={`docs-header-group${groupActive ? " active" : ""}`}
                    >
                      {members.map((member) => (
                        <NavDropdown.Item
                          as={Link}
                          key={member.id}
                          href={member.href}
                          active={member.id === activeSection?.id}
                        >
                          <i className={`bi ${member.icon}`} aria-hidden="true"></i>
                          <span>
                            <span className="docs-resource-title">{member.shortTitle || member.title}</span>
                            <span className="docs-resource-text">{member.description}</span>
                          </span>
                        </NavDropdown.Item>
                      ))}
                    </NavDropdown>
                  );
                }

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

              <NavDropdown title="Ressources" id="docs-resources" align="end" className="docs-header-resources">
                {[...new Set(externalLinks.map((link) => link.group))].map((group) => (
                  <div key={group}>
                    <NavDropdown.Header>{group}</NavDropdown.Header>
                    {externalLinks.filter((link) => link.group === group).map((link) => (
                      <NavDropdown.Item key={link.href} href={link.href} target="_blank" rel="noreferrer">
                        <i className={`bi ${link.icon}`} aria-hidden="true"></i>
                        <span>
                          <span className="docs-resource-title">
                            {link.title}
                            <i className="bi bi-box-arrow-up-right" aria-hidden="true"></i>
                          </span>
                          <span className="docs-resource-text">{link.description}</span>
                        </span>
                      </NavDropdown.Item>
                    ))}
                  </div>
                ))}
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>
    </header>
  );
}

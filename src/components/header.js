import React, { useEffect, useState } from "react";
import {
  Col,
  Container,
  Dropdown,
  Image,
  Nav,
  Navbar,
  NavDropdown,
  Row,
} from "react-bootstrap";

import metaData from "../lib/metaData.json";

import { useRouter } from "next/router";

const Header = () => {
  const router = useRouter();
  const [page, setPage] = useState(router.pathname);

  useEffect(() => {
    setPage(router.pathname);
  });

  if (page.startsWith("/portail")) {

    return (
      <Navbar expand="lg">
        <Container fluid>
          <Navbar.Brand href="/">
            <Image
              src="/logo-La-Societe-Nouvelle.svg"
              height="80"
              className="d-inline-block align-center"
              alt="logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/portail" className="border-end border-3">
                <i className="bi bi-search"></i> Rechercher une entreprise
              </Nav.Link>
              <Nav.Link href="/publier-mon-empreinte" target="_blank">
                Publier mes données
              </Nav.Link>
              <Nav.Link
                href="https://api.lasocietenouvelle.org"
                target="_blank"
                rel="noreferrer"
              >
                API publique
              </Nav.Link>
              <Nav.Link
                href="https://docs.lasocietenouvelle.org/public-api"
                target="_blank"
              >
                Documentation
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
  console.log(page)
  if (page.startsWith("/databrowser")) {
    return (
      <Navbar >
        <Container>
          <Navbar.Brand href="/">
            <Image
              src="/logo-La-Societe-Nouvelle.svg"
              height="80"
              className="d-inline-block align-center"
              alt="logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
            <NavDropdown title="Data">
                <NavDropdown.Item href="/databrowser/#">
                  Macrodata
                </NavDropdown.Item>
                <NavDropdown.Item href="/databrowser/#">
                Macrodata
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link
                href="https://api.lasocietenouvelle.org"
                target="_blank"
                rel="noreferrer"
              >
                Data
              </Nav.Link>
              <Nav.Link
                href="https://docs.lasocietenouvelle.org/public-api"
                target="_blank"
              >
                Documentation
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
  // Retour pour toutes les autres pages du site
  return (
    <div className="header">
      <Container>
        <div className="top-bar d-flex justify-content-between align-items-center">
          <Nav className="socials">
            <Nav.Link
              href="https://twitter.com/LSN_FR?s=20"
              target="_blank"
              rel="noreferrer"
              title="Twitter"
            >
              <i className="bi bi-twitter"></i>
            </Nav.Link>
            <Nav.Link
              href="https://www.linkedin.com/company/la-societe-nouvelle/"
              target="_blank"
              rel="noreferrer"
              title="Linkedin"
            >
              <i className="bi bi-linkedin"></i>
            </Nav.Link>
            <Nav.Link
              href="https://github.com/La-Societe-Nouvelle/"
              target="_blank"
              rel="noreferrer"
              title="GitHub"
            >
              <i className="bi bi-github"></i>
            </Nav.Link>
            <Nav.Link
              href="/blog"
              rel="noreferrer"
              title="Consulter notre blog"
            >
              <span className="top-bar-link"> Blog</span>
            </Nav.Link>
            <Nav.Link href="faq" rel="noreferrer" title="Accéder à la FAQ">
              <span className="top-bar-link"> Aide</span>
            </Nav.Link>
          </Nav>
          <div className="text-end">
            <small>Initiative OpenData - OpenSource</small>
          </div>
        </div>

        <Row className="py-3 align-items-center justify-content-between ">
          <Col>
            <Navbar.Brand href="/">
              <Image
                src="/logo-La-Societe-Nouvelle.svg"
                height={100}
                className="d-inline-block align-center"
                alt="logo"
              />
            </Navbar.Brand>
          </Col>
          <Col>
            <h1 className="text-center">
              Système d'Information national sur les impacts des entreprises
            </h1>
          </Col>
          <Col>
            <Nav className="justify-content-end">
              <NavDropdown title="Vous êtes ?">
                <NavDropdown.Item href="/categorie/notes-analyse">
                  Un expert-comptable
                </NavDropdown.Item>
                <NavDropdown.Item href="/categorie/fiches-methodologiques">
                  Une entreprise
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Col>
        </Row>
      </Container>
      <div className="menu">
        <Navbar expand="lg">
          <Container>
            <Navbar.Toggle aria-controls="main-navbar-nav" />
            <Navbar.Collapse
              id="main-navbar-nav"
              className="justify-content-between"
            >
              <Nav className="flex-grow-1 justify-content-between">
                <Nav.Link href="/">Accueil</Nav.Link>

                <NavDropdown title="Notre approche ">
                  <NavDropdown.Item href="/mesurer-empreinte-societale">
                    Mesure de l'empreinte sociétale
                  </NavDropdown.Item>

                  <NavDropdown
                    title="Les indicateurs"
                    className="dropdown-item subdropdown"
                    key="end"
                    drop="end"
                  >
                    {metaData.indics.map((indic, index) => (
                      <Dropdown.Item
                        eventKey={index}
                        key={index}
                        href={"/indicateurs/" + indic}
                        className="subdropdown-item"
                      >
                        {metaData[indic].libelle}
                      </Dropdown.Item>
                    ))}
                  </NavDropdown>
                </NavDropdown>

                <NavDropdown title="Ressources ">
                  <NavDropdown.Item href="/ressources/application-mesure-impact">
                    Metriz - Application de mesure d'impact
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/ressources/api-publique-lsn">
                    API Publique
                  </NavDropdown.Item>

                  <NavDropdown.Item href="/ressources/consulter-impacts-entreprises">
                    Portail d'accès aux données des entreprises
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    href="https://docs.lasocietenouvelle.org"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Documentation <i className="bi bi-box-arrow-up-right"></i>
                  </NavDropdown.Item>
                </NavDropdown>

                <NavDropdown title="Publications">
                  <NavDropdown.Item href="/categorie/notes-analyse">
                    Notes d'analyses
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/categorie/fiches-methodologiques">
                    Fiches méthodologiques
                  </NavDropdown.Item>

                  <NavDropdown.Item href="/infographies">
                    Infographies
                  </NavDropdown.Item>
                </NavDropdown>

                <Nav.Link href="/a-propos">A propos</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </div>
  );
};

export default Header;

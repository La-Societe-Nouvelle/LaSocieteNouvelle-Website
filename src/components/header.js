import React, { useEffect, useState } from "react";
import {
  Button,
  Col,
  Container,
  Image,
  Nav,
  Navbar,
  NavDropdown,
  Row,
} from "react-bootstrap";
import { useRouter } from "next/router";

const Header = () => {
  const router = useRouter();
  const [page, setPage] = useState(router.pathname);

  useEffect(() => {
    setPage(router.pathname);
  });

  return page.includes("portail") ? (
    <Navbar expand="lg">
      <Container fluid>
        <Navbar.Brand href="/">
          <Image
            src="/logo.svg"
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
            <Nav.Link href="/">La Société Nouvelle</Nav.Link>
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
  ) : (
    <div className="header">
      <Container>
        <div className="top-bar d-flex justify-content-between align-items-center">
          <Nav className="socials">
            <Nav.Link
              href="https://twitter.com/LSN_FR"
              target="_blank"
              rel="noreferrer"
            >
              <i className="bi bi-twitter"></i>
            </Nav.Link>
            <Nav.Link
              href="https://www.linkedin.com/company/la-societe-nouvelle/"
              target="_blank"
              rel="noreferrer"
            >
              <i className="bi bi-linkedin"></i>
            </Nav.Link>
            <Nav.Link
              href="/https://github.com/La-Societe-Nouvelle/"
              target="_blank"
              rel="noreferrer"
            >
              <i className="bi bi-github"></i>
            </Nav.Link>
            <Nav.Link href="/blog" rel="noreferrer">
              <span className="top-bar-link"> Blog</span>
            </Nav.Link>
            <Nav.Link href="faq" rel="noreferrer">
              <span className="top-bar-link"> Aide</span>
            </Nav.Link>
          </Nav>
          <div className="text-end">
            <small>Initiative OpenData - OpenSource</small>
          </div>
        </div>

        <Row className="py-3 align-items-center ">
          <Col xs={12} lg={4}>
            <Navbar.Brand href="/">
              <Image
                src="/logo-La-Societe-Nouvelle.svg"
                height={120}
                className="d-inline-block align-center"
                alt="logo"
              />
            </Navbar.Brand>
          </Col>
          <Col xs={12} lg={4} className="text-center">
            <h1>
              Système d'Information national sur les impacts des entreprises
            </h1>
          </Col>
          <Col xs={12} lg={3} className="offset-lg-1 text-end">
            <div className="d-flex flex-column ps-5">
              <Button
                href="https://metriz.lasocietenouvelle.org"
                size="sm"
                variant="outline-secondary"
                target="_blank"
                rel="noreferrer"
                className=""
              >
                Mesurer mon impact <i className="bi bi-box-arrow-up-right"></i>
              </Button>
              <Button
                href="/portail"
                variant="secondary"
                size="sm"
                className="mt-2"
              >
                Consulter les données
              </Button>
            </div>
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
                <Nav.Link href="/mesurer-empreinte-societale">
                  Notre approche
                </Nav.Link>

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
                <Nav.Link href="/entreprises">Entreprises</Nav.Link>
                <Nav.Link href="/cabinets-comptables">
                  Cabinets comptables
                </Nav.Link>
                <NavDropdown title="Publications">
                  <NavDropdown.Item href="/categorie/notes-analyse">
                    Notes d'analyses
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/categorie/fiches-methodologiques">
                    Fiches méthodologiques
                  </NavDropdown.Item>

                  <NavDropdown.Item href="/categorie/infographies">
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

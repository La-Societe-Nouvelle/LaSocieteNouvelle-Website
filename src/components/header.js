import React from "react";
import { Button, Container, Nav, Navbar, NavDropdown } from "react-bootstrap";

const Header = () => {
  return (
    <div className="header">
      <Container>
        <div className="top-bar d-flex justify-content-between align-items-center">
          <Nav className="socials">
            <Nav.Link href="">
              <i className="bi bi-twitter"></i>
            </Nav.Link>
            <Nav.Link href="">
              <i className="bi bi-linkedin"></i>
            </Nav.Link>
            <Nav.Link href="">
              <i className="bi bi-github"></i>
            </Nav.Link>
          </Nav>
          <div className="text-end">
            <small>Initiative OpenData - OpenSource</small>
          </div>
        </div>
      <div className="middle-header d-flex justify-content-between align-items-center ">
          <Navbar.Brand href="/">
            <img
              src="/logo.svg"
              width="120"
              height="120"
              className="d-inline-block align-center"
              alt="logo"
            />
          </Navbar.Brand>
          <div>
            <h1 className="h6">
                "Mesurer, Informer pour une économie durable"
            </h1>
          </div>
          <div>
          <Button href="#" variant="outline-secondary">
                Mesurer mon impact
              </Button>
              <Button href="#" variant="outline-primary" className="ms-2">
                Publier mes données
              </Button>
          </div>
      </div>
      </Container>
      <div className="menu">
          <Container>
        <Navbar expand="lg">
            <Navbar.Toggle aria-controls="main-navbar-nav" />
            <Navbar.Collapse id="main-navbar-nav">
              <Nav>
              <Nav.Link href="/">
                 Accueil
                </Nav.Link>
                <NavDropdown title="Notre approche">
                  <NavDropdown.Item href="/notre-approche">
                    Methodologie
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/liste-indicateurs">
                    Liste des indicateurs
                  </NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="/portail">
                 Données
                </Nav.Link>
                <NavDropdown title="Outils">
                  <NavDropdown.Item href="/metriz">
                    {" "}
                    Application Web - METRIZ
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/sirese">
                    Système d'informations
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    href="https://docs.lasocietenouvelle.org"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Documentation
                  </NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="/cabinets-comptables">
                  Cabinets comptables
                </Nav.Link>
                <Nav.Link href="/entreprises">Entreprises</Nav.Link>
                <NavDropdown title="Actualités">
                  <NavDropdown.Item href="/blog/publications">
                    Publications
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/blog/actualites">
                    Actualités
                  </NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="A propos">
                  <NavDropdown.Item href="/la-societe-nouvelle">
                    Qui sommes-nous ?
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/nos-missions">
                    Nos missions
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/notre-equipe">
                    L'équipe
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
  
            </Navbar.Collapse>
        </Navbar>
          </Container>
      </div>
    </div>
  );
};

export default Header;

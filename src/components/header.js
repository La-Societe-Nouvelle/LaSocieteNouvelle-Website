import React, { useEffect, useState } from "react";
import { Button, Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { useRouter } from "next/router";

const Header = () => {
  const router = useRouter();
  const [page, setPage] = useState(router.pathname);

  useEffect(() => {
    setPage(router.pathname);
  });

  return (
    page == "/portail" ? (
      <Navbar bg="dark" expand="lg">
        <Container fluid>
        <Navbar.Brand href="/portail">
              <img
                src="/logo.svg"
                width="80"
                height="80"
                className="d-inline-block align-center"
                alt="logo"
              />
            </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/portail">Accueil</Nav.Link>
              <Nav.Link href="/api-lsn">API</Nav.Link>
              <Nav.Link href="https://docs.lasocietenouvelle.org/public-api" target="_blank">Documentation</Nav.Link>
              <Nav.Link href="/">La société nouvelle</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    ) : (
      <div className="header">
        <Container>
          <div className="top-bar d-flex justify-content-between align-items-center">
            <Nav className="socials">
              <Nav.Link href="https://twitter.com/LSN_FR" target="_blank" rel="noreferrer">
                <i className="bi bi-twitter"></i>
              </Nav.Link>
              <Nav.Link href="https://www.linkedin.com/company/la-societe-nouvelle/" target="_blank" rel="noreferrer" >
                <i className="bi bi-linkedin"></i>
              </Nav.Link>
              <Nav.Link href="https://github.com/La-Societe-Nouvelle/LaSocieteNouvelle-Website" target="_blank" rel="noreferrer">
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
                width="100"
                height="100"
                className="d-inline-block align-center"
                alt="logo"
              />
              <h1>
                Mesurer, Informer pour une économie durable
              </h1>
            </Navbar.Brand>
            <div></div>
            <div>
              <Button href="https://metriz.lasocietenouvelle.org" variant="outline-secondary" target="_blank" rel="noreferrer">
                Mesurer mon impact
              </Button>
              <Button href="/publier-mes-donnees" variant="outline-primary" className="ms-2">
                Publier mes données
              </Button>
            </div>
          </div>
        </Container>
        <div className="menu">
          <Navbar expand="lg" className="p-0">
            <Container>
              <Navbar.Toggle aria-controls="main-navbar-nav" />
              <Navbar.Collapse id="main-navbar-nav" className="justify-content-between">
                <Nav className="flex-grow-1 justify-content-between">
                  <Nav.Link href="/">Accueil</Nav.Link>
                  <NavDropdown title="Notre approche">
                    <NavDropdown.Item href="/notre-approche">
                      Methodologie
                    </NavDropdown.Item>
                    <NavDropdown.Item href="/indicateur">
                      Liste des indicateurs
                    </NavDropdown.Item>
                    <NavDropdown.Item href="/sinese">
                      S.I.N.E.S.E
                    </NavDropdown.Item>
                  </NavDropdown>
                  <NavDropdown title="Ressources " >
                    <NavDropdown.Item href="/metriz">
                      Application Web - METRIZ
                    </NavDropdown.Item>
                    <NavDropdown.Item href="/api-lsn">
                      API
                    </NavDropdown.Item>
                    <NavDropdown.Item
                      href="https://docs.lasocietenouvelle.org"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Documentation
                    </NavDropdown.Item>
                  </NavDropdown>
                  <Nav.Link href="/entreprises">Entreprises</Nav.Link>
                  <Nav.Link href="/cabinets-comptables">
                    Cabinets comptables
                  </Nav.Link>
                  <Nav.Link href="/blog">
                    Actualités
                  </Nav.Link>
             
                  <NavDropdown title="A propos">
                    <NavDropdown.Item href="/la-societe-nouvelle">
                      Qui sommes-nous ?
                    </NavDropdown.Item>
                    <NavDropdown.Item href="/nos-missions">
                      Nos missions
                    </NavDropdown.Item>
                  </NavDropdown>
                </Nav>
                <div className="ms-5">
                  <a href="/portail" className="btn btn-info"><i className="bi bi-server"></i> Données</a>
                </div>

              </Navbar.Collapse>
            </Container>
          </Navbar>
        </div>
      </div>
    )
  );
};

export default Header;

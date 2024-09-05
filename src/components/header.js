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
              <Nav.Link href="/publier-empreinte" target="_blank">
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

  if (page.startsWith("/databrowser")) {
    return (
      <Navbar className="justify-content-end border-bottom border-2">
        <Container fluid>
          <Navbar.Brand href="/databrowser" className="me-4">
            <Image src="/logo-La-Societe-Nouvelle.svg" height="80" alt="logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="databrowser-navbar-nav" />
          <Navbar.Collapse id="databrowser-navbar-nav">
            <Nav>
              <NavDropdown
                title="Données"
                id="data-dropdown"
      
              >
                <NavDropdown
                  title="Empreintes des activités économiques"
                  className="dropdown-item"
                  key="end"
                  drop="end"
      
                >
                  <NavDropdown.Item href="/databrowser/dataset/macro_fpt">
                    Empreintes des activités économiques - données historiques
                  </NavDropdown.Item>
                  {/* <NavDropdown.Item href="/databrowser/dataset/macro_fpt_a38">
                    Empreintes des branches d'activité - données historiques
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/databrowser/dataset/macro_fpt_a88">
                    Empreintes des divisions économiques - données historiques
                  </NavDropdown.Item> */}
                  <NavDropdown.Item href="/databrowser/dataset/macro_fpt_trd">
                    Empreintes des activités économiques - tendances
                  </NavDropdown.Item>
                  {/* <NavDropdown.Item href="/databrowser/dataset/macro_fpt_trd_a38">
                    Empreintes des branches d'activité - tendances
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/databrowser/dataset/macro_fpt_trd_a88">
                    Empreintes des divisions économiques - tendances
                  </NavDropdown.Item> */}
                  <NavDropdown.Item href="/databrowser/dataset/macro_fpt_tgt">
                    Objectifs annuels par activité économique
                  </NavDropdown.Item>
                  {/* <NavDropdown.Item href="/databrowser/dataset/macro_fpt_tgt_a38">
                    Objectifs annuels par branches d'activité
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/databrowser/dataset/macro_fpt_tgt_a88">
                    Objectifs annuels des divisions économiques
                  </NavDropdown.Item> */}
                </NavDropdown>

                <NavDropdown.Divider />
                <NavDropdown
                  title="Données des comptes nationaux"
                  className="dropdown-item"
                  key="end"
                  drop="end"
                  
                >
                  <NavDropdown.Item href="/databrowser/dataset/na_cpeb">
                    Comptes de production et d'exploitation par branche
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/databrowser/dataset/na_ere">
                    Tableau des entrées ressources emplois
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/databrowser/dataset/na_pat_nf">
                    Comptes de patrimoine non-financier
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/databrowser/dataset/na_tei">
                    Tableau des entrées intermédiaires
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/databrowser/dataset/na_tess">
                    Tableau des entrées-sorties symétrique
                  </NavDropdown.Item>
                </NavDropdown>

                <NavDropdown.Divider />
                <NavDropdown
                  title="Autres jeux de données"
                  className="dropdown-item"
                  key="end"
                  drop="end"
                >
                  <NavDropdown.Item href="/databrowser/dataset/bts_data">
                    Indicateurs issus de la base tous salariés
                  </NavDropdown.Item>
                </NavDropdown>
              </NavDropdown>
              <Nav.Link
                href="https://api.lasocietenouvelle.org"
                target="_blank"
              >
                API
              </Nav.Link>
              <Nav.Link
                href="https://cran.r-project.org/web/packages/lsnstat/index.html"
                target="_blank"
              >
                LSN-stat
              </Nav.Link> 
              <Nav.Link
                href="https://github.com/La-Societe-Nouvelle/lsnr-lab"
                target="_blank"
              >
                LsnR-Lab
              </Nav.Link> 
              <Nav.Link href="/databrowser/publications">Publications</Nav.Link>
              <Nav.Link
                href="https://docs.lasocietenouvelle.org/series-donnees"
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

  if (page.startsWith("/devenir-partenaire")) {
    return (
      <Navbar className="justify-content-end border-bottom border-2">
        <Container fluid>
          <Navbar.Brand href="/devenir-partenaire" className="me-4">
            <Image src="/logo-La-Societe-Nouvelle.svg" height="80" alt="logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="databrowser-navbar-nav" />
          <Navbar.Collapse id="databrowser-navbar-nav">
            <Nav>
              <Nav.Link
                href="/devenir-partenaire/expert-comptable"
              >
                EXPERTS COMPTABLES
              </Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link
                href="/devenir-partenaire/se-former"
              >
                SE FORMER
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
  if (page.startsWith("/publier-empreinte")) {
    return (
      <Navbar className="bg-light">
        <Container fluid>
          <Navbar.Brand href="/" className="m-auto">
            <Image src="/logo-La-Societe-Nouvelle.svg" height="75" alt="logo" />
          </Navbar.Brand>
   
        </Container>
      </Navbar>
    );
  }

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
              href="https://discord.gg/ANFwWZc3eu"
              target="_blank"
              rel="noreferrer"
              title="Discord"
            >
              <i className="bi bi-discord"></i>
            </Nav.Link>
            <Nav.Link
              href="/blog"
              rel="noreferrer"
              title="Consulter notre blog"
            >
              <span className="top-bar-link"> Blog</span>
            </Nav.Link>
            <Nav.Link href="/faq" rel="noreferrer" title="Accéder à la FAQ">
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
                <NavDropdown.Item href="/devenir-partenaire/expert-comptable">
                  Un expert-comptable
                </NavDropdown.Item>
                <NavDropdown.Item href="/devenir-partenaire/entreprises">
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

                <NavDropdown title="Notre approche">
                  <NavDropdown.Item href="/mesurer-empreinte-societale">
                    Mesure de l'empreinte sociétale
                  </NavDropdown.Item>

                  <NavDropdown
                    title="Les indicateurs"
                    className="dropdown-item"
                    key="end"
                    drop="end"
                  >
                    {metaData.indics.map((indic, index) => (
                      <NavDropdown.Item
                        key={index}
                        href={"/indicateurs/" + indic}
                        className="subdropdown-item"
                      >
                        {metaData[indic].libelle}
                      </NavDropdown.Item>
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

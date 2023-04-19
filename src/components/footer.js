import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { Col, Container, Image, ListGroup, Nav, Row } from "react-bootstrap";

function Footer() {
  const router = useRouter();
  const [page, setPage] = useState(router.pathname);
  const year = new Date().getFullYear();

  useEffect(() => {
    setPage(router.pathname);
  });

  return (
    <footer>
      <div className="top-footer">
        <Container>
          <Row>
            <Col xs={12} lg={4}>
              <h6>Abonnez-vous !</h6>
              <div className="d-flex align-items-center icon-link">
                <i className="bi bi-envelope-paper" role="img"></i>
                <a href="/newsletter" title="Inscription à la newsletter">
                  Newsletter
                </a>
              </div>
            </Col>
            <Col xs={12} lg={4}>
              <h6>Suivez-nous </h6>

              <ListGroup horizontal>
                <ListGroup.Item>
                  <a
                    href="https://github.com/La-Societe-Nouvelle/"
                    target="_blank"
                    rel="noreferrer"
                    title="GitHub"
                  >
                    <i className="bi bi-github" role="img"></i>
                  </a>
                </ListGroup.Item>
                <ListGroup.Item>
                  <a
                    href="https://twitter.com/LSN_FR"
                    target="_blank"
                    rel="noreferrer"
                    title="Twitter"
                  >
                    <i className="bi bi-twitter" role="img"></i>
                  </a>
                </ListGroup.Item>
                <ListGroup.Item>
                  <a
                    href="https://www.linkedin.com/company/la-societe-nouvelle/"
                    target="_blank"
                    rel="noreferrer"
                    title="LinkedIn"
                  >
                    <i className="bi bi-linkedin" role="img"></i>
                  </a>
                </ListGroup.Item>
              </ListGroup>
            </Col>
            <Col xs={12} lg={4}>
              <h6> Contactez-nous</h6>
              <div className="d-flex align-items-center icon-link">
                <i className="bi bi-envelope-fill" role="img"></i>
                <a href="/contact" title="Contactez nous">
                  Formulaire de contact
                </a>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="footer">
        <Container>
          <Row>
            <Col xs={12} lg={3}>
              <h6>La société nouvelle</h6>
              <Nav defaultActiveKey="/" className="flex-column">
                <Nav.Link href="/a-propos">Qui sommes-nous ?</Nav.Link>
                <Nav.Link href="/mesurer-empreinte-societale">
                  Notre approche
                </Nav.Link>
                <Nav.Link href="/indicateurs">Liste des indicateurs</Nav.Link>
              </Nav>
            </Col>
            <Col xs={12} lg={3}>
              <h6>Nos ressources</h6>
              <Nav defaultActiveKey="/" className="flex-column">
                <Nav.Link href="/ressources/application-mesure-impact">
                  Metriz - Application Web de mesure d'impact
                </Nav.Link>
                <Nav.Link href="/ressources/api-publique-lsn">
                  API publique
                </Nav.Link>
                <Nav.Link href="/ressources/consulter-impacts-entreprises">
                  Portail d'accès aux données des entreprises
                </Nav.Link>

                <Nav.Link
                  href="https://docs.lasocietenouvelle.org/"
                  target="_blank"
                >
                  Documentation
                </Nav.Link>
              </Nav>
            </Col>
            <Col xs={12} lg={3}>
              <h6>Nos services</h6>
              <Nav defaultActiveKey="/" className="flex-column">
                <Nav.Link href="/cabinets-comptables">
                  Cabinets comptables
                </Nav.Link>
                <Nav.Link href="/entreprises">Entreprises</Nav.Link>
              </Nav>
            </Col>
            <Col xs={12} lg={3}>
              <h6>Nos articles</h6>
              <Nav defaultActiveKey="/" className="flex-column">
                <Nav.Link href="/categorie/notes-analyse">Notes d'analyse</Nav.Link>
                <Nav.Link href="/categorie/fiches-methodologiques">
                  Fiches méthodologiques
                </Nav.Link>
                <Nav.Link href="/infographies">Infographies</Nav.Link>
                <Nav.Link href="/categorie/actualites">Actualités </Nav.Link>
              </Nav>
            </Col>
          </Row>
        </Container>
        <div className="text-center mt-4">
          <Image src="/celeste-blanc.svg" height={30} alt="Celeste personnage du logo de La Société Nouvelle"></Image>
        </div>
        <div className="bottom-footer">
          <Container>
            <div className="d-flex justify-content-between align-items-center">
              <p className="mx-2 mb-0">&copy;{year} La Société Nouvelle</p>
              <ul className="nav">
                <li className="nav-item">
                  <a className="nav-link" href="/mentions-legales">
                    Mentions légales
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/politique-confidentialite">
                   Politique de confidentialité
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/portail/company/889182770">
                    Empreinte Sociétale
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/newsletter">
                    Newsletter
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/contact">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </Container>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { Col, Container, ListGroup, Nav, Row } from "react-bootstrap";

function Footer() {
  const router = useRouter();
  const [page, setPage] = useState(router.pathname);

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
                <a href="/newsletter">Newsletter</a>
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
                  >
                    <i className="bi bi-github" role="img"></i>
                  </a>
                </ListGroup.Item>
                <ListGroup.Item>
                  <a
                    href="https://twitter.com/LSN_FR"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="bi bi-twitter" role="img"></i>
                  </a>
                </ListGroup.Item>
                <ListGroup.Item>
                  <a
                    href="https://www.linkedin.com/company/la-societe-nouvelle/"
                    target="_blank"
                    rel="noreferrer"
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
                <a href="/contact">Formulaire de contact</a>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="footer">
        <Container>
          <Row>
            <Col xs={12} lg={4}>
              <h6>La société nouvelle</h6>
              <Nav defaultActiveKey="/" className="flex-column">
                <Nav.Link href="/a-propos">Qui sommes-nous ?</Nav.Link>
                <Nav.Link href="/mesurer-empreinte-societale">Notre approche</Nav.Link>
                <Nav.Link href="/indicateurs">
                  Liste des indicateurs
                </Nav.Link>
              </Nav>
            </Col>
            <Col xs={12} lg={4}>
              <h6>Nos outils</h6>
              <Nav defaultActiveKey="/" className="flex-column">
                <Nav.Link href="https://metriz.lasocietenouvelle.org/" target="_blank">
                  Application Web
                </Nav.Link>
                <Nav.Link href="https://docs.lasocietenouvelle.org/" target="_blank">
                  Documentation
                </Nav.Link>
                <Nav.Link href="/portail" target="_blank">Portail d'accès aux données</Nav.Link>
              </Nav>
            </Col>
            <Col xs={12} lg={4}>
              <h6>Nos services</h6>
              <Nav defaultActiveKey="/" className="flex-column">
                <Nav.Link href="/cabinets-comptables">
                  Cabinets comptables
                </Nav.Link>
                <Nav.Link href="/entreprises">Entreprises</Nav.Link>
              </Nav>
            </Col>
          </Row>
        </Container>
        <div className="bottom-footer">
          <Container>
            <div className="d-flex justify-content-between align-items-center">
              <p className="mx-2">© 2022 La Société Nouvelle</p>
              <ul className="nav">
                <li className="nav-item">
                  <a className="nav-link" href="/a-propos">
                    A propos
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/mentions-legales">
                    Mentions légales
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

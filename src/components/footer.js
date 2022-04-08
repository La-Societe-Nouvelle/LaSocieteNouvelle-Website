import { Col, Container, ListGroup, Nav, Row } from 'react-bootstrap';

var React = require('react');

export default class Footer extends React.Component {
  render() {
    return (
      <footer>
        <div className="top-footer">
          <Container>
            <Row>
            <Col xs={12} lg={4}>
                <h6>Abonnez-vous !</h6>
                <div className="d-flex align-items-center icon-link">
                  <p>
                    <i className="bi bi-envelope-paper" role="img" ></i>
                  </p>
                  <p>
                    <a href="/newsletter">Newsletter</a>
                  </p>
                </div>
              </Col>
              <Col xs={12} lg={4}>
                <h6>Suivez-nous </h6>

                <ListGroup horizontal>
                  <ListGroup.Item>
                    <a href="https://github.com/La-Societe-Nouvelle/LaSocieteNouvelle-Website" target="_blank">
                      <i className="bi bi-github" role="img" ></i>
                    </a>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <a href="https://twitter.com/LSN_FR" target="_blank"><i className="bi bi-twitter" role="img" ></i></a>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <a href="https://www.linkedin.com/company/la-societe-nouvelle/" target="_blank">
                      <i className="bi bi-linkedin" role="img" ></i></a>
                  </ListGroup.Item>
                </ListGroup>
              </Col>
              <Col xs={12} lg={4}>
                <h6> Contactez-nous</h6>
                <div className="d-flex align-items-center icon-link">
                  <p>
                    <i className="bi bi-envelope-fill" role="img" ></i>
                  </p>
                  <p>
                    <a href="/contact">Formulaire de contact</a>
                  </p>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="footer">
          <Container>
            <Row>
            <Col xs={12} lg={4}>
                <h6>
                  La société nouvelle
                </h6>
                <Nav defaultActiveKey="/" className="flex-column">
                  <Nav.Link href="/blog">Qui sommes-nous ?</Nav.Link>
                  <Nav.Link href="/approche">Notre approche</Nav.Link>
                  <Nav.Link href="/liste-indicateurs">Liste des indicateurs</Nav.Link>
                </Nav>
              </Col>
              <Col xs={12} lg={4}>
                <h6>
                  Nos outils
                </h6>
                <Nav defaultActiveKey="/" className="flex-column">
                  <Nav.Link href="https://metriz.lasocietenouvelle.org/">Application Web</Nav.Link>
                  <Nav.Link href="https://docs.lasocietenouvelle.org/">Documentation</Nav.Link>
                  <Nav.Link href="/portail">Publications des données</Nav.Link>
                </Nav>
              </Col>
              <Col xs={12} lg={4}>
                <h6>
                  Nos services
                </h6>
                <Nav defaultActiveKey="/" className="flex-column">
                  <Nav.Link href="/cabinets-comptables">Cabinets comptables</Nav.Link>
                  <Nav.Link href="/entreprises">Entreprises</Nav.Link>
                </Nav>
              </Col>

            </Row>
          </Container>
          <div className="bottom-footer">
            <Container>
              <div className="d-flex justify-content-between align-items-center">
                <p className="mx-2">
                  © 2022 La Société Nouvelle
                </p>
                <ul className='nav'>
                <li className="nav-item">
                    <a className="nav-link" href="/a-propos">A propos</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/mentions-legales">Mentions légales</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/company-data?siren=889182770">Empreinte Sociétale</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/contact">Contact</a>
                  </li>
                </ul>
              </div>
            </Container>
          </div>
        </div>
      </footer >

    );
  }
}
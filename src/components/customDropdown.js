import {React} from 'react';
import { Nav, NavDropdown, Navbar, Container } from "react-bootstrap";

const CustomDropdown = () => {
  return (

    <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark" >
    <Container>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav variant="pills" className='nav-justified flex-grow-1' >
          <Nav.Item>
            <Nav.Link href="/" eventKey="default"><i className="bi bi-house-fill"></i> </Nav.Link>
          </Nav.Item>
          <NavDropdown title="Approche" id="nav-dropdown">
            <NavDropdown.Item href="/approche" >Présentation</NavDropdown.Item>
            <NavDropdown.Item href="/liste-indicateurs">Indicateurs</NavDropdown.Item>
            <NavDropdown.Item href="https://metriz.lasocietenouvelle.org" target="_blank">Application Web</NavDropdown.Item>
            <NavDropdown.Item href="https://docs.lasocietenouvelle.org" target="_blank" eventKey="4.5">Documentation</NavDropdown.Item>
          </NavDropdown>
          <Nav.Item>
            <Nav.Link href="/portail">Données</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/cabinets-comptables">Cabinets comptables</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/entreprises">Entreprises</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/a-propos">La Société Nouvelle</Nav.Link>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Container>
    </Navbar>

  );
}

export default CustomDropdown;
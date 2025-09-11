import React from "react";
import { Container, Row, Col, Button, Image } from "react-bootstrap";

const CongresBanner = () => {
  const currentDate = new Date();
  const congressEndDate = new Date('2025-09-20');

  // Ne pas afficher le bandeau après le 20 septembre 2025
  if (currentDate > congressEndDate) {
    return null;
  }

  return (
    <section className="p-0 m-0 bg-primary">
      <div className="alert alert-primary d-flex justify-content-between align-items-center m-0 px-5 py-3 rounded-0 bg-primary border-0">
        <Container fluid>
          <Row className="align-items-center">
            <Col md={1} >
              <Image
                src="/logos/congres-cnoec-2025-min.png"
                alt="80e Congrès de l'Ordre des Experts-Comptables"
                style={{ height: "80px", width: "auto" }}
              />
            </Col>
            <Col md={9}>
              <p className="m-0 text-white ">
                Retrouvez-nous au 80e <span className="fw-bold"> Congrès de l'Ordre des Experts-Comptables </span>
                  du 17 au 19 septembre 2025 à Lyon <br></br>

                <i className="bi bi-geo-alt"></i> Stand <span className="fw-bold">R381 - Zone Orange</span>
              </p>
            </Col>
            <Col md={2} className="text-end">
              <Button
                variant="outline-light"
                size="sm"
                className="rounded-0 fw-bold"
                href="https://www.linkedin.com/posts/la-societe-nouvelle_80%E1%B5%89-congr%C3%A8s-de-lordre-des-experts-comptables-activity-7371860842016870400-XoUG/?utm_source=share&utm_medium=member_desktop&rcm=ACoAACTC4N4BTxpYLyvZQ3MbAyPcSydn5sUCgxc"
                target="_blank"
              >
                En savoir plus
                <i className="bi bi-arrow-right ms-2"></i>
              </Button>
            </Col>
          </Row>
        </Container>
      </div>
    </section>
  );
};

export default CongresBanner;
import { Helmet } from "react-helmet";

// Components

import { Container, Row, Col, Image, Button, Card } from "react-bootstrap";
import PageHeader from "../components/PageHeader";

export default function Infographie() {
  return (
    <>
      <Helmet>
        <title>La Société Nouvelle | Infographies</title>
      </Helmet>
      <PageHeader title="Infographies" path="infographies" />
      <Container>
        <Row>
        <Col lg={3}>
            <Card className="my-3 post-preview">
              <div className="img-container">
                <a href="/LSN_infographie-was.pdf" target="_blank">
                  {" "}
                  <Card.Img src="/LSN_infographie-was.jpg" className="border border-2"/>
                </a>
              </div>
              <Card.Body>
                <Card.Title>
                  <h3 className="h4 mt-3 text-center">
                    <a href="/LSN_infographie-was.pdf" target="_blank">
                      La production de déchets
                    </a>
                  </h3>
                </Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={3}>
            <Card className="my-3 post-preview">
              <div className="img-container">
                <a href="/LSN_infographie-eco.pdf" target="_blank">
                  {" "}
                  <Card.Img src="/LSN_infographie-eco.jpg" className="border border-2"/>
                </a>
              </div>
              <Card.Body>
                <Card.Title>
                  <h3 className="h4 mt-3 text-center">
                    <a href="/LSN_infographie-eco.pdf" target="_blank">
                      Production intérieure et Importations en France
                    </a>
                  </h3>
                </Card.Title>
              </Card.Body>
            </Card>
          </Col>

          <Col lg={3}>
            <Card className="my-3 post-preview">
              <div className="img-container">
                <a href="/LSN_infographie-art.pdf" target="_blank">
                  {" "}
                  <Card.Img src="/LSN_infographie-art.jpg" className="border border-2" />
                </a>
              </div>
              <Card.Body>
                <Card.Title>
                  <h3 className="h4 mt-3 text-center">
                    <a href="/LSN_infographie-art.pdf" target="_blank">
                      L'artisanat
                    </a>
                  </h3>
                </Card.Title>
              </Card.Body>
            </Card>
          </Col>

          <Col lg={3}>
            <Card className="my-3 post-preview">
              <div className="img-container">
                <a href="/LSN_infographie-nrg.pdf" target="_blank" >
                  <Card.Img src="/LSN_infographie_nrg.jpg" className="border border-2" />
                </a>
              </div>
              <Card.Body>
                <Card.Title>
                  <h3 className="h4 mt-3 text-center">
                    <a href="/LSN_infographie-nrg.pdf" target="_blank">
                    Ressources et consommations d'énergie
                    </a>
                  </h3>
                </Card.Title>
              </Card.Body>
            </Card>
          </Col>

          <Col lg={3}>
            <Card className="my-3 post-preview">
              <div className="img-container">
                <a href="/LSN_infographie-geq.pdf" target="_blank">
                  {" "}
                  <Card.Img src="/LSN_infographie-geq.jpg" className="border border-2"/>
                </a>
              </div>
              <Card.Body>
                <Card.Title>
                  <h3 className="h4 mt-3 text-center">
                    <a href="/LSN_infographie-geq.pdf" target="_blank">
                      Egalité hommes femmes
                    </a>
                  </h3>
                </Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={3}>
            <Card className="my-3 post-preview">
              <div className="img-container">
                <a href="/LSN_infographie-wat.pdf" target="_blank">
                  <Card.Img src="/LSN-infographie-wat.jpg" className="border border-2"/>
                </a>
              </div>
              <Card.Body>
                <Card.Title>
                  <h3 className="h4 mt-3 text-center">
                    <a href="/LSN_infographie-wat.pdf" target="_blank">
                      Prélèvements et consommation d'eau en France
                    </a>
                  </h3>
                </Card.Title>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

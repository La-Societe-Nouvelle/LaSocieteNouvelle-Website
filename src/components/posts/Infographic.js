import React from "react";
import { Button, Card, Col } from "react-bootstrap";

function Infographic({ file, image, title }) {
  return (
    <Col lg={3}>
      <Card className="my-3 post-preview infographic">
        <div className="img-container">
          <a href={"/" + file} target="_blank">
            <Card.Img src={"/" + image} className="border border-2" />
          </a>
        </div>
        <Card.Body>
          <Card.Title>
            <h3 className="h4 mt-3 text-center">
              <a href={"/" + file} target="_blank">
                {title}
              </a>
            </h3>
          </Card.Title>
          <div className="text-center">
            <Button href={"/" + file} variant="primary" target="_blank" size="sm">
              Télécharger
            </Button>
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default Infographic;

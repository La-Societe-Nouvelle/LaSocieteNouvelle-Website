import React from "react";
import { Card, Col } from "react-bootstrap";

function PostPreviewLoading() {
  return (
    <>
      <Col lg={3}>
        <Card className="mb-3 post-preview is-loading">
          <div className="img-container">
            <div className="card-img"></div>
          </div>

          <Card.Body>
            <Card.Title></Card.Title>
            <Card.Text className="small"></Card.Text>
            <div className="text-end">
              <p className="card-button"></p>
            </div>
          </Card.Body>
        </Card>
      </Col>
      <Col lg={3}>
        <Card className="mb-3 post-preview is-loading">
          <div className="img-container">
            <div className="card-img"></div>
          </div>

          <Card.Body>
            <Card.Title></Card.Title>
            <Card.Text className="small"></Card.Text>
            <div className="text-end">
              <p className="card-button"></p>
            </div>
          </Card.Body>
        </Card>
      </Col>
      <Col lg={3}>
        <Card className="mb-3 post-preview is-loading">
          <div className="img-container">
            <div className="card-img"></div>
          </div>

          <Card.Body>
            <Card.Title></Card.Title>
            <Card.Text className="small"></Card.Text>
            <div className="text-end">
              <p className="card-button"></p>
            </div>
          </Card.Body>
        </Card>
      </Col>
      <Col lg={3}>
        <Card className="mb-3 post-preview is-loading">
          <div className="img-container">
            <div className="card-img"></div>
          </div>

          <Card.Body>
            <Card.Title></Card.Title>
            <Card.Text className="small"></Card.Text>
            <div className="text-end">
              <p className="card-button"></p>
            </div>
          </Card.Body>
        </Card>
      </Col>
    </>
  );
}

export default PostPreviewLoading;

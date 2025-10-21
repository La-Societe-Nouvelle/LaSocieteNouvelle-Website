import React from "react";
import { Col } from "react-bootstrap";
import Image from "next/image";

function Infographic({ file, image, title }) {
  return (
    <Col lg={3} md={6}>
      <div className="infographic-card h-100">
        <a href={`/${file}`} target="_blank" rel="noopener noreferrer" className="img-link">
          <div className="img-container">
            <Image
              src={`/${image}`}
              alt={title}
              width={400}
              height={500}
              className="infographic-img"
            />
          </div>
        </a>
        <div className="infographic-body">
          <h3 className="infographic-title">
            <a href={`/${file}`} target="_blank" rel="noopener noreferrer">
              {title}
            </a>
          </h3>
          <a href={`/${file}`} target="_blank" rel="noopener noreferrer" className="download-link">
            Télécharger
            <i className="bi bi-download ms-1"></i>
          </a>
        </div>
      </div>
    </Col>
  );
}

export default Infographic;

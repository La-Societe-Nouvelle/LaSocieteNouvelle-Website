'use client';

import { Container, Row, Col } from "react-bootstrap";
import Image from "next/image";

export default function Newsletter() {
  return (
    <div className="newsletter-page p-0">

      <section className="highlight-section mt-4">
        <Container>
          <div className="highlight-section__content">
            <Row className="align-items-top">
              <Col lg={6}>
                <div className="section__content">
                  <iframe
                    width="100%"
                    height="800px"
                    src="https://a2dec458.sibforms.com/serve/MUIEAE87cWMEBduAwTKh6kNCKZRFF4iVG4F1d0WT5TuD4LYdWSn_LdL8FHgC0SuDGKSKe7PVrx-vcOQn8KwHR6JmimxBzdH7seeIYDD_5K31DYP3Y-qGV8gcbVSHehd2qWU8j90PIYaydyKOEGO6S_ijEsBCiialfd2BEvM6AB8_FZXMOJgtsFu6sOOtOd7zLqnu4tEIEE8HEHTc"
                  ></iframe>
                </div>
              </Col>
              <Col lg={6}>
                  <Image
                    src="/illustrations/newsletter.svg"
                    alt="Newsletter"
                    width={500}
                    height={500}
                    className="img fluid"
                  />
              </Col>
            </Row>
          </div>
        </Container>
      </section>
    </div>
  );
}

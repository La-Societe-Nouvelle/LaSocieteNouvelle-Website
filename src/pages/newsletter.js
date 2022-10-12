import { Helmet } from "react-helmet";

// Components

import { Container, Row, Col, Image } from "react-bootstrap";
import PageHeader from "../components/PageHeader";

export default function Newsletter() {
  return (
    <>
      <Helmet>
        <title>La Société Nouvelle | Newsletter</title>
      </Helmet>
      <PageHeader title="Inscription à notre Newsletter" path="newsletter" />
        <Container>
          <div>
          <Row>
            <Col md={8}>
            <iframe width="100%" height="650" src="https://a2dec458.sibforms.com/serve/MUIEAAM5_uzMBmA2XvCDybECJekJcvgKpEir_BfDxg8oWxjYYknTx-mcfgLipT7aEac7_wSnElKSBRobR0YHyWCT-Qjab9XMnNIFoCl5JGy9YXOkYq9Xhnl3KSDGd1PwXpKLM-Hk8MOSvxTk_E2jTz3NgHiEXci2FOQaI-zrHgA3StaW2sbBsYkZC_r5BV4znKfobC4aJ9IbO9a3" frameborder="0" scrolling="auto" allowfullscreen ></iframe>
 
            </Col>
            <Col>
            <Image className="mt-5" fluid src="images/Newsletter-cuate.svg"></Image>
            </Col>
          </Row>
          </div>
        
        </Container>
    </>
  );
}

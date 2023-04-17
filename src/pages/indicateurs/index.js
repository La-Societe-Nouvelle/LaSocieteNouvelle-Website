import React from "react";
import { Helmet } from "react-helmet";

// Components

import metaData from "../../lib/metaData";
import { Card, Col, Container, Image, Row } from "react-bootstrap";
import PageHeader from "../../components/PageHeader";

export default function Home() {
  return (
    <>
      <Helmet>
        <title>La Société Nouvelle | Liste des indicateurs </title>
      </Helmet>
      <PageHeader
        title="Panel d'indicateurs"
        prev={"mesurer-empreinte-societale"}
        prevTitle={"Méthodologie"}
        path={"indicateurs/"}
      />

      <section className="indic">
        <Container>
          <Row>
            {metaData.indics.map((indic, index) => (
              <Col lg={3} key={index} className="mb-3">
                <Card className="indics text-center border border-2 ">
                  <a href={"/indicateurs/" + indic}>
                    <Image
                      roundedCircle
                      src={"/ESE/" + indic + ".svg"}
                      alt={"Pictogramme " + indic}
                    />
                  </a>
                  <h3 className="mb-4">
                    <a href={"/indicateurs/" + indic} title={metaData[indic].libelle}>
                      {metaData[indic].libelle}
                    </a>
                  </h3>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </>
  );
}

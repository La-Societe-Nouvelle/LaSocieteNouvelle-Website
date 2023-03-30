import React from "react";
import { Helmet } from "react-helmet";

// Components

import metaData from "../../lib/metaData";
import { Card, Col, Container, Image, Row } from "react-bootstrap";
import PageHeader from "../../components/PageHeader";
import Link from "next/link";

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
                <Card className="indics text-center border-2 border-light">
                  <Link href={"/indicateurs/" + indic}>
                    <Image roundedCircle src={"/ESE/" + indic + ".svg"} />
                  </Link>
                  <Link href={"/indicateurs/" + indic}>
                    <h3 className="mb-4">
                      {" "}
                      <a>{metaData[indic].libelle}</a>
                    </h3>
                  </Link>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </>
  );
}

import React from "react";
import { Helmet } from "react-helmet";

// Components

import metaData from "../../lib/metaData";
import { Card, Col, Container, Image, ListGroup, ListGroupItem, Row } from "react-bootstrap";
import PageHeader from "../../components/PageHeader";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Helmet>
        <title>La société Nouvelle | Liste des indicateurs </title>
      </Helmet>
      <PageHeader
        title="Panel d'indicateurs"
        prev={"notre-approche"}
        prevTitle={"Méthodologie"}
        path={"indicateur/"}
      />

      <section className="indic">
        <Container>
        <Row>

        {metaData.indics.map((indic, index) => (
                <Col lg={3} key={index} className="mb-3">
                  <Card className="indics text-center" >
                    <Link href={"/indicateur/" + indic}>
                      <Image roundedCircle src={"/ESE/" + indic + ".png"} />
                    </Link>
                    <Link href={"/indicateur/" + indic}>
                    <h3 className="mb-4"> <a>
                        {metaData[indic].libelle}
                      </a></h3>
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

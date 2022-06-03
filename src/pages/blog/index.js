import React from "react";
import { Helmet } from "react-helmet";

// Components

import {
  Card,
  Col,
  Container,
  Image,
  ListGroup,
  ListGroupItem,
  Row,
} from "react-bootstrap";
import PageHeader from "../../components/PageHeader";
import Link from "next/link";

export default function Blog() {
  return (
    <>
      <Helmet>
        <title>La société Nouvelle | Blog </title>
      </Helmet>
      <PageHeader
        title="Blog"
        path={"blog"}
      />

      <section className="blog">
        <Container>
          <Row></Row>
        </Container>
      </section>
    </>
  );
}

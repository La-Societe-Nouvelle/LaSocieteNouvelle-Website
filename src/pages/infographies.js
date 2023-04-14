import { Helmet } from "react-helmet";

// Components

import { Container, Row, Col, Image, Button, Card } from "react-bootstrap";
import PageHeader from "../components/PageHeader";
import GraphicPost from "../components/posts/GraphicPost";

export default function Infographie() {
  return (
    <>
      <Helmet>
        <title>La Société Nouvelle | Infographies</title>
      </Helmet>
      <PageHeader title="Infographies" path="infographies" />
      <Container>
        <Row>
          <GraphicPost
            title="La production de déchets"
            file="LSN_infographie-was.pdf"
            image="LSN_infographie-was.jpg"
          />
          <GraphicPost
            title="Production intérieure et Importations en France"
            file="LSN_infographie-eco.pdf"
            image="LSN_infographie-eco.jpg"
          />
          <GraphicPost
            title="L'artisanat"
            file="LSN_infographie-art.pdf"
            image="LSN_infographie-art.jpg"
          />
          <GraphicPost
            title="Ressources et consommations d'énergie"
            file="LSN_infographie-nrg.pdf"
            image="LSN_infographie_nrg.jpg"
          />
          <GraphicPost
            title="Egalité hommes femmes"
            file="LSN_infographie-geq.pdf"
            image="LSN_infographie-geq.jpg"
          />
          <GraphicPost
            title=" Prélèvements et consommation d'eau en France"
            file="LSN_infographie-wat.pdf"
            image="LSN-infographie-wat.jpg"
          />

        </Row>
      </Container>
    </>
  );
}

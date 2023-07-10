import { Helmet } from "react-helmet";

// Components

import { Container, Row} from "react-bootstrap";
import PageHeader from "../components/PageHeader";
import InfographicPost from "../components/posts/Infographic";

export default function Infographie() {
  return (
    <>
      <Helmet>
        <title>La Société Nouvelle | Infographies</title>
      </Helmet>
      <PageHeader title="Infographies" path="infographies" />
      <Container>
        <Row>
        <InfographicPost
            title="Emissions de Gaz à
            effet de Serre"
            file="LSN_infographie-ges.pdf"
            image="LSN_infographie-ges.png"
          />
        <InfographicPost
            title="Evolution des compétences et des connaissances"
            file="LSN_infographie-knw.pdf"
            image="LSN_infographie-knw.jpg"
          />
          <InfographicPost
            title="La production de déchets"
            file="LSN_infographie-was.pdf"
            image="LSN_infographie-was.jpg"
          />
          <InfographicPost
            title="Production intérieure et Importations en France"
            file="LSN_infographie-eco.pdf"
            image="LSN_infographie-eco.jpg"
          />
          <InfographicPost
            title="L'artisanat"
            file="LSN_infographie-art.pdf"
            image="LSN_infographie-art.jpg"
          />
          <InfographicPost
            title="Ressources et consommations d'énergie"
            file="LSN_infographie-nrg.pdf"
            image="LSN_infographie_nrg.jpg"
          />
          <InfographicPost
            title="Egalité hommes femmes"
            file="LSN_infographie-geq.pdf"
            image="LSN_infographie-geq.jpg"
          />
          <InfographicPost
            title=" Prélèvements et consommation d'eau en France"
            file="LSN_infographie-wat.pdf"
            image="LSN-infographie-wat.jpg"
          />

        </Row>
      </Container>
    </>
  );
}

'use client';

import { Container, Row } from "react-bootstrap";
import PageHeader from "@/components/PageHeader";
import Infographic from "@/components/posts/Infographic";

export default function Infographie() {
  return (
    <div className="blog-page">
      <PageHeader
        title={"Nos infographies"}
        subtitle={"Découvrez les chiffres clés des indicateurs de l'empreinte sociétale"}
        icon="bi bi-bar-chart"
      />
      <section className="section">
        <Container>
          <Row className="g-4">
            <Infographic
              title="Emissions de Gaz à effet de Serre"
              file="LSN_infographie-ges.pdf"
              image="LSN_infographie-ges.png"
            />
            <Infographic
              title="Evolution des compétences et des connaissances"
              file="LSN_infographie-knw.pdf"
              image="LSN_infographie-knw.jpg"
            />
            <Infographic
              title="La production de déchets"
              file="LSN_infographie-was.pdf"
              image="LSN_infographie-was.jpg"
            />
            <Infographic
              title="Production intérieure et Importations en France"
              file="LSN_infographie-eco.pdf"
              image="LSN_infographie-eco.jpg"
            />
            <Infographic
              title="L'artisanat"
              file="LSN_infographie-art.pdf"
              image="LSN_infographie-art.jpg"
            />
            <Infographic
              title="Ressources et consommations d'énergie"
              file="LSN_infographie-nrg.pdf"
              image="LSN_infographie_nrg.jpg"
            />
            <Infographic
              title="Egalité hommes femmes"
              file="LSN_infographie-geq.pdf"
              image="LSN_infographie-geq.jpg"
            />
            <Infographic
              title="Prélèvements et consommation d'eau en France"
              file="LSN_infographie-wat.pdf"
              image="LSN-infographie-wat.jpg"
            />
          </Row>
        </Container>
      </section>
    </div>
  );
}

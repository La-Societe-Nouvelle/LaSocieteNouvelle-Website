import { Col, Container, Row } from "react-bootstrap";
import metaData from "@/lib/metaData.json";
import PageHeader from "@/components/PageHeader";
import IndicCard from "@/components/indic/IndicCard";
import { METADATA, PAGE_CONFIG } from "./config";

/**
 * Métadonnées de la page pour le SEO (Next.js App Router)
 */
export const metadata = {
  title: METADATA.title,
  description: METADATA.description,
};

/**
 * Page d'affichage de la liste des indicateurs de l'Empreinte Sociétale
 *
 * Cette page présente l'ensemble des 12 indicateurs de l'ESE organisés
 * sous forme de grille responsive avec des cartes interactives.
 */
export default function IndicateursPage() {
  return (
    <>
      {/* En-tête de la page */}
      <PageHeader
        title={PAGE_CONFIG.title}
        subtitle={PAGE_CONFIG.subtitle}
        icon={PAGE_CONFIG.icon}
      />

      {/* Section principale avec la grille d'indicateurs */}
      <section className="indicateurs-page">
        <Container>
          {/* Information de dernière mise à jour */}
          <p className="update-info">
            Dernière mise à jour : {PAGE_CONFIG.updateDate}
          </p>

          {/* Grille responsive des cartes d'indicateurs */}
          <Row className="g-4">
            {metaData.indics.map((indic) => (
              <Col lg={3} md={6} key={indic}>
                <IndicCard
                  indic={indic}
                  indicData={metaData[indic]}
                />
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </>
  );
}

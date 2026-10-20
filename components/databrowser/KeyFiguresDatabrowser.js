import { Container, Row, Col } from "react-bootstrap";
import Link from "next/link";
import KeyFigureCardDatabrowser from "./KeyFigureCardDatabrowser";
import { fetchKeyFiguresData } from "../../lib/keyFigures";

export default async function KeyFiguresDatabrowser() {
  const keyFigures = await fetchKeyFiguresData({
    emissionsTooltip: 'Consulter le baromètre des émissions',
  });

  if (!keyFigures.length) {
    return null;
  }

  return (
    <section className="key-figures-databrowser">
      <Container>
        <div className="section-header">
          <h3 className="section__title section__title--center text-center">
            Empreinte de la production française
          </h3>
          <p className="section-subtitle mt-5">
            Dernières données statistiques macroéconomiques disponibles
          </p>
        </div>

        <Row className="key-figures-grid g-4 justify-content-center">
          {keyFigures.map((keyFigureData) => (
            <Col
              key={keyFigureData.id}
              xs={12}
              sm={6}
              lg={4}
            >
              <KeyFigureCardDatabrowser data={keyFigureData} />
            </Col>
          ))}
        </Row>

        <div className="section-cta">
          <Link href="/databrowser/datasets" className="cta-button">
            <i className="bi bi-bar-chart-line me-2"></i>
            Explorer toutes les données macroéconomiques
            <i className="bi bi-arrow-right ms-2" />
          </Link>
        </div>
      </Container>
    </section>
  );
}

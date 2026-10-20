import { Container, Row, Col, Button } from "react-bootstrap";
import KeyFigureCard from "./KeyFigureCard";
import { fetchKeyFiguresData, formatMonth } from "../../lib/keyFigures";

export default async function KeyFigures() {
  const keyFigures = await fetchKeyFiguresData({
    formatEmissionsPeriod: formatMonth,
    emissionsTooltip: 'Consulter le baromètre des émissions territoriales de GES',
  });

  if (!keyFigures.length) {
    return null;
  }

  return (
    <section className="section">
      <Container>
        <div className="section-header text-center mb-4 mb-md-5">
          <h3 className="section__title section__title--center">
            Données sur l'empreinte <br />
            de la production intérieure française
          </h3>
        </div>

        <Row className="key-figures-grid g-4 justify-content-center">
          {keyFigures.map((keyFigureData) => (
            <Col
              key={keyFigureData.id}
              xs={12}
              sm={6}
              lg={4}
            >
              <KeyFigureCard data={keyFigureData} />
            </Col>
          ))}
        </Row>

        <div className="section-cta text-center mt-4 mt-md-5">
          <Button
            size="lg"
            href="https://www.sinese.fr/macroeconomies"
            target="_blank"
            rel="noopener noreferrer"
            title="Voir toutes les données macroéconomiques"
            className="cta-button"
          >
            Empreinte sociétale des activités économiques
            <i className="bi bi-arrow-right ms-2" />
          </Button>
        </div>
      </Container>
    </section>
  );
}

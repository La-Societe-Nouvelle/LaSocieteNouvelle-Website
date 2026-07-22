import { Container, Row, Col, Button } from "react-bootstrap";
import KeyFigureCard from "./KeyFigureCard";

const refYear = "2024";

async function fetchKeyFiguresData() {
  const urls = [
    `${process.env.NEXT_PUBLIC_API_URL}/v2/macrodata/macro_fpt_trd?industry=TOTAL&country=FRA&aggregate=NVA&indic=GHG&year=${refYear}`,
    `${process.env.NEXT_PUBLIC_API_URL}/v2/macrodata/macro_fpt_trd?industry=TOTAL&country=FRA&aggregate=NVA&indic=GEQ&year=${refYear}`,
    'https://api.stats.lasocietenouvelle.org/barometre-ges/derniere-publication',
  ];

  try {
    const responses = await Promise.all(
      urls.map((url) =>
        fetch(url, {
          headers: url.startsWith(process.env.NEXT_PUBLIC_API_URL)
            ? { 'Authorization': `Bearer ${process.env.SINESE_API_TOKEN}` }
            : undefined,
        }).then(res => res.json())
      )
    );

    const data_ghg = responses[0].data?.length > 0
      ? responses[0].data[0].value.toFixed(0)
      : "";
    const data_geq = responses[1].data?.length > 0
      ? responses[1].data[0].value.toFixed(1)
      : "";

    let data_emissions = "";
    let emissions_period = "";
    if (responses[2].header.code === 200 && responses[2].data.length > 0) {
      const sortedData = [...responses[2].data].sort((a, b) => a.mois.localeCompare(b.mois));
      const lastDataPoint = sortedData[sortedData.length - 1];
      data_emissions = lastDataPoint.valeur.toFixed(1);

      const [year, month] = lastDataPoint.mois.split('-');
      const months = ['janv.', 'févr.', 'mars', 'avr.', 'mai', 'juin',
                      'juil.', 'août', 'sept.', 'oct.', 'nov.', 'déc.'];
      emissions_period = `${months[parseInt(month) - 1]} ${year}`;
    }

    return [
      {
        id: 'ghg',
        period: '2024',
        value: data_ghg,
        unit: 'gCO₂e/€',
        title: "Intensité d'émission de gaz à effet de serre",
        icon: 'activity'
      },
      {
        id: 'emissions',
        period: emissions_period,
        value: data_emissions,
        unit: 'MtCO₂e',
        title: 'Emissions intérieures de gaz à effet de serre',
        icon: 'cloud-haze',
        href: '/databrowser/barometre-ges',
        tooltip: 'Consulter le baromètre des émissions territoriales de GES'
      },
      {
        id: 'geq',
        period: '2024',
        value: data_geq,
        unit: '%',
        title: 'Ecart de rémunération F/H',
        icon: 'gender-ambiguous'
      }
    ];
  } catch (error) {
    console.error('Error fetching key figures:', error);
    return [];
  }
}

export default async function KeyFigures() {
  const keyFigures = await fetchKeyFiguresData();

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

// La Société Nouvelle

//-- React
import { Helmet } from "react-helmet";

//-- Bootstrap
import { Button, Col, Container, Image, Row } from "react-bootstrap";
import { DefaultLineChart } from "../../components/charts/DefaultLineChart";

const BarometreGES = () => 
{
  return (
    <>
      <Helmet>
        <title>La Société Nouvelle | Données statistiques</title>
        <meta
          property="og:url"
          content="https://lasocietenouvelle.org/databrowser"
        />
        <meta
          property="og:description"
          content="Consultez les données statistiques produites par La Société Nouvelle."
        />
      </Helmet>

      <section>
        <Container className="mt-1 px-5">
          <h1>Baromètre des émissions territoriales de GES</h1>
        </Container>
      </section>
      <section className="">
        <Container fluid className="mt-1 px-5">
          <h2>Nos dernières données</h2>
          <Row className="slide justify-content-center">
            <Col lg={3} className="statistic-item mx-4 p-0">
              <Row className="w-100 py-4 mx-auto" style={{height: "200px", position: "relative"}}>
                <p>Janvier 2025</p>
                <p className="text-center my-4">
                  <span className="h1">
                    <data>35.2</data>
                  </span>
                  <sup> MtCO2e</sup>
                </p>
              </Row>
              <Row className="w-100 m-auto">
                <p className="text-center my-3 text-primary">Donnée consolidée</p>
              </Row>
            </Col>
            <Col lg={3} className="statistic-item mx-4 p-0">
              <Row className="w-100 py-4 mx-auto" style={{height: "200px", position: "relative"}}>
                <p>Février 2025</p>
                <p className="text-center my-4">
                  <span className="h1">
                    <data>33.5</data>
                  </span>
                  <sup> MtCO2e</sup>
                </p>
              </Row>
              <Row className="w-100 m-auto">
                <p className="text-center my-3 text-primary">Donnée consolidée</p>
              </Row>
            </Col>
            <Col lg={3} className="statistic-item mx-4 p-0">
              <Row className="w-100 py-4 mx-auto" style={{height: "200px", position: "relative"}}>
                <p>Mars 2025</p>
                <p className="text-center my-4">
                  <span className="h1">
                    <data>33.8</data>
                  </span>
                  <sup> MtCO2e</sup>
                </p>
              </Row>
              <Row className="w-100 m-auto">
                <p className="text-center my-3 text-primary">Donnée consolidée</p>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="">
        <Container fluid className="mt-1 px-5">
          <h2>Suivi</h2>
          <Row className="slide">
            <DefaultLineChart
              labels={['2024-01','2024-02','2024-03','2024-04','2024-05','2024-06','2024-07','2024-08','2024-09','2024-10','2024-11','2024-12','2025-01','2025-02','2025-03']}
              datasets={[{
                label: 'Prévisions-LSN',
                data: [,,,,,,,,,,,33.4,35.2,33.5,33.8],
                borderColor: '#191558',
                borderDash: [6,6],
              }, {
                label: 'Baromètre-CITEPA',
                data: [35.6,32.3,33.7,31.8,28.3,27.1,29.0,27.2,27.4,29.4,31.1,33.4],
                borderColor: '#191558',
              }]}
              options={{}}
            />
          </Row>
          <Row>
            <p>Sources : CITEPA - Baromètre mensuel (Données de 01/2024 à 12/2024), La Société Nouvelle (Données de 01/2025 à 03/2025)</p>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default BarometreGES;
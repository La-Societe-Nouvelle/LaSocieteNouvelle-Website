// La Société Nouvelle

//-- React
import { Helmet } from "react-helmet";

//-- Bootstrap
import { Button, Col, Container, Image, Row, Table } from "react-bootstrap";
import { DefaultLineChart } from "../../components/charts/DefaultLineChart";
import { DefaultBarChart } from "../../components/charts/DefaultBarChart";

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

      <section className="bg-light-blue">
        <Container className="mt-1 px-5">
          <h1>Baromètre des émissions territoriales de GES</h1>
        </Container>
      </section>

      <section>
        <Container className="mt-1 px-5">
          <h2>Nos dernières données</h2>
          <Row className="slide justify-content-center">
            <Col lg={3} className="statistic-item mx-4 p-0">
              <Row
                className="w-100 py-4 mx-auto"
                style={{ height: "200px", position: "relative" }}
              >
                <p>Avril 2025</p>
                <p className="text-center my-4">
                  <span className="h1">
                    <data>30.7</data>
                  </span>
                  <sup> MtCO2e</sup>
                </p>
                <p className="h3">
                  <i className="bi bi-arrow-down-right me-2" />
                  3.5 % (2024)
                </p>
              </Row>
              <Row className="w-100 m-auto">
                <p className="text-center my-3 text-primary">
                  Consolidée le 31/07/2025
                </p>
              </Row>
            </Col>
            <Col lg={3} className="statistic-item mx-4 p-0">
              <Row
                className="w-100 py-4 mx-auto"
                style={{ height: "200px", position: "relative" }}
              >
                <p>Mai 2025</p>
                <p className="text-center my-4">
                  <span className="h1">
                    <data>27.6</data>
                  </span>
                  <sup> MtCO2e</sup>
                </p>
                <p className="h3">
                  <i className="bi bi-arrow-down-right me-2" />
                  2.5 % (2024)
                </p>
              </Row>
              <Row className="w-100 m-auto">
                <p className="text-center my-3 text-primary">
                  Consolidée le 15/07/2025
                </p>
              </Row>
            </Col>
            <Col lg={3} className="statistic-item mx-4 p-0">
              <Row
                className="w-100 py-4 mx-auto"
                style={{ height: "200px", position: "relative" }}
              >
                <p>Juin 2025</p>
                <p className="text-center my-4">
                  <span className="h1">
                    <data>27.8</data>
                  </span>
                  <sup></sup>
                </p>
                <p className="h3">
                  <i className="bi bi-arrow-up-right me-2" />
                  2.5 % (2024)
                </p>
              </Row>
              <Row className="w-100 m-auto">
                <p className="text-center my-3 text-primary">
                  Estimée le 31/07/2025
                </p>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="">
        <Container className="mt-1 px-5">
          <h2>Suivi mensuel des émissions territoriales</h2>
          <Row className="slide">
            <p>en MtCO2e</p>
            <DefaultBarChart
              labels={[
                "2024-01",
                "2024-02",
                "2024-03",
                "2024-04",
                "2024-05",
                "2024-06",
                "2024-07",
                "2024-08",
                "2024-09",
                "2024-10",
                "2024-11",
                "2024-12",
                "2025-01",
                "2025-02",
                "2025-03",
                "2025-04",
                "2025-05",
                "2025-06"
              ]}
              datasets={[
                {
                  label: 'Prévisions-LSN',
                  data: [, , , , , , , , , , , , , , , 30.7, 27.6, 27.8],
                  backgroundColor: '#191558',
                  stack: '1'
                },
                {
                  label: 'Baromètre-CITEPA',
                  data: [
                    35.6, 32.3, 33.7, 31.8, 28.3, 27.1, 29.0, 27.2, 27.4, 29.4, 31.1, 33.4,
                    35.3, 34.3, 34.7
                  ],
                  backgroundColor: '#0b478b',
                  stack: '1'
                },
              ]}
              options={{
                aspectRatio: 3,
              }}
            />
          </Row>
          <Row>
            <p>
              <b>Sources :</b>
              <ul>
                <li>Pour les données de janvier 2024 à mars 2025 : CITEPA (Baromètre mensuel)</li>
                <li>Pour les données d'avril 2025 à juin 2025 : La Société Nouvelle</li>
              </ul>
            </p>
          </Row>
          {/* <Row>
            <div className="table-responsive">
              <Table className="data-table">
                <thead>
                  <tr>
                    <th className="">2024-01</th>
                    <th className="">2024-02</th>
                    <th className="">2024-03</th>
                    <th className="">2024-04</th>
                    <th className="">2024-05</th>
                    <th className="">2024-06</th>
                    <th className="">2024-07</th>
                    <th className="">2024-08</th>
                    <th className="">2024-09</th>
                    <th className="">2024-10</th>
                    <th className="">2024-11</th>
                    <th className="">2024-12</th>
                    <th className="">2025-01</th>
                    <th className="">2025-02</th>
                    <th className="">2025-03</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="">35.6</td>
                    <td className="">32.3</td>
                    <td className="">33.7</td>
                    <td className="">31.8</td>
                    <td className="">28.3</td>
                    <td className="">27.1</td>
                    <td className="">29.0</td>
                    <td className="">27.2</td>
                    <td className="">27.4</td>
                    <td className="">29.4</td>
                    <td className="">31.3</td>
                    <td className="">33.4</td>
                    <td className="">35.2</td>
                    <td className="">33.5</td>
                    <td className="">33.8</td>
                  </tr>
                </tbody>
              </Table>
            </div>
          </Row> */}
        </Container>
      </section>

      <section>
        <Container className="mt-1 px-5">
          <h2>Méthodologie</h2>
          <p>
            Le baromètre s'appuie sur des techniques statistiques de{" "}
            <i>Nowcasting</i>.
          </p>
          <p>
            La démarche vise à estimer en temps quasi réel (M-1) les émissions
            territoriales de gaz à effet de serre en France à partir de
            l'exploitation de données publiées avec une fréquence plus élevée ou
            un délai plus court (production industrielle, consommation
            d'énergie, transport, etc.). Ce baromètre fournit ainsi une
            estimation anticipée et dynamique de l'évolution des émissions, en
            amont des bilans officiels souvent publiés avec plusieurs mois de
            décalage.
          </p>
          <p>
            La méthodologie complète et les scripts de traitements seront rendus
            publics prochainement.
          </p>
        </Container>
      </section>
    </>
  );
};

export default BarometreGES;
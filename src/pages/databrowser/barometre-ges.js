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
                <p>Février 2025</p>
                <p className="text-center my-4">
                  <span className="h1">
                    <data>33.5</data>
                  </span>
                  <sup> MtCO2e</sup>
                </p>
                <p className="h3">
                  <i className="bi bi-arrow-up-right me-2" />
                  3.7 % (2024)
                </p>
              </Row>
              <Row className="w-100 m-auto">
                <p className="text-center my-3 text-primary">
                  Consolidée le 14/03/2025
                </p>
              </Row>
            </Col>
            <Col lg={3} className="statistic-item mx-4 p-0">
              <Row
                className="w-100 py-4 mx-auto"
                style={{ height: "200px", position: "relative" }}
              >
                <p>Mars 2025</p>
                <p className="text-center my-4">
                  <span className="h1">
                    <data>33.8</data>
                  </span>
                  <sup> MtCO2e</sup>
                </p>
                <p className="h3">
                  <i className="bi bi-arrow-up-right me-2" />
                  0.3 % (2024)
                </p>
              </Row>
              <Row className="w-100 m-auto">
                <p className="text-center my-3 text-primary">
                  Consolidée le 15/04/2025
                </p>
              </Row>
            </Col>
            <Col lg={3} className="statistic-item mx-4 p-0">
              <Row
                className="w-100 py-4 mx-auto"
                style={{ height: "200px", position: "relative" }}
              >
                <p>Avril 2025</p>
                <p className="text-center my-4">
                  <span className="h1">
                    <data>-</data>
                  </span>
                  <sup> MtCO2e</sup>
                </p>
              </Row>
              <Row className="w-100 m-auto">
                <p className="text-center my-3 text-primary">
                  Parution le 30/05
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
            <DefaultLineChart
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
              ]}
              datasets={[
                {
                  label: "Prévisions-LSN",
                  data: [, , , , , , , , , , , 33.4, 35.2, 33.5, 33.8],
                  backgroundColor: "#191558",
                  borderColor: "#191558",
                  borderDash: [6, 6],
                },
                {
                  label: "Baromètre-CITEPA",
                  data: [
                    35.6, 32.3, 33.7, 31.8, 28.3, 27.1, 29.0, 27.2, 27.4, 29.4,
                    31.1, 33.4,
                  ],
                  borderColor: "#191558",
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
                <li>Pour les données de janvier 2024 à décembre 2024 : CITEPA (Baromètre mensuel)</li>
                <li>Pour les données de janvier 2025 à mars 2025 : La Société Nouvelle</li>
              </ul>
            </p>
          </Row>
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
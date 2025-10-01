// La Société Nouvelle

//-- React
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";

//-- Bootstrap
import { Button, Col, Container, Image, Row, Table } from "react-bootstrap";
import { DefaultLineChart } from "../../components/charts/DefaultLineChart";
import { DefaultBarChart } from "../../components/charts/DefaultBarChart";

//-- dayjs
import dayjs from "dayjs";
import "dayjs/locale/fr.js";
dayjs.locale("fr");

//-- lodash
import _ from "lodash";

const BarometreGES = () => 
{
  // --------------------------------------------------
  // States

  const [data, setData] = useState(null)

  // --------------------------------------------------
  // Effects
  
  useEffect(() => {
    fetchData();
  }, [])
  
  const fetchData = async () => 
  {
    // Url
    const url = `https://api.stats.lasocietenouvelle.org/barometre-ges/derniere-publication`;	

    try {
      // fetch data
      const res = await fetch(url);

      if (res.ok) {
        const results = await res.json();
        if (results.header?.code == 200) {
          setData(results.data);
        } else {
          setData(null)
        }
      } else {
        setData(null);
      }
    } catch (error) {
      console.log(error);
      setData(null)
    }
  };

  // --------------------------------------------------

  const printMonth = (date) =>
  {
    const label = dayjs(date, "YYYY-MM").format("MMMM YYYY");
    const labelCapitalized = label.charAt(0).toUpperCase() + label.slice(1);
    return labelCapitalized;
  }

  const printDate = (date) =>
  {
    const label = dayjs(date).format("DD/MM/YYYY");
    return label;
  }

  const getEvolution = (month) =>
  {
    if (!data || !month) {
      return null;
    } else {
      let valeur2025 = data.find((item) => item.mois == month);
      let valeur2024 = data.find((item) => item.mois == month.replace('2025','2024'));
      let evolution = _.round( (valeur2025.valeur - valeur2024.valeur) / valeur2024.valeur *100, 1);
      return evolution;
    }

  }

  let last_data_1 = data?.[data.length-3];
  let last_data_2 = data?.[data.length-2];
  let last_data_3 = data?.[data.length-1];

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
                <p>{last_data_1 ? printMonth(last_data_1.mois) : '-'}</p>
                <p className="text-center my-4">
                  <span className="h1">
                    <data>{last_data_1 ? _.round(last_data_1.valeur, 1) : '-'}</data>
                  </span>
                  <sup> MtCO2e</sup>
                </p>
                <p className="h3">
                  {getEvolution(last_data_1?.mois)>0 && <i className="bi bi-arrow-up-right me-2" />}
                  {getEvolution(last_data_1?.mois)<=0 && <i className="bi bi-arrow-down-right me-2" />}
                  {getEvolution(last_data_1?.mois)} % (2024)
                </p>
              </Row>
              <Row className="w-100 m-auto">
                <p className="text-center my-3 text-primary">
                  Publiée le {last_data_1 ? printDate(last_data_1.date_publication) : '-'}
                </p>
              </Row>
            </Col>
            <Col lg={3} className="statistic-item mx-4 p-0">
              <Row
                className="w-100 py-4 mx-auto"
                style={{ height: "200px", position: "relative" }}
              >
                <p>{last_data_2 ? printMonth(last_data_2.mois) : '-'}</p>
                <p className="text-center my-4">
                  <span className="h1">
                    <data>{last_data_2 ? _.round(last_data_2.valeur, 1) : '-'}</data>
                  </span>
                  <sup> MtCO2e</sup>
                </p>
                <p className="h3">
                  {getEvolution(last_data_2?.mois)>0 && <i className="bi bi-arrow-up-right me-2" />}
                  {getEvolution(last_data_2?.mois)<=0 && <i className="bi bi-arrow-down-right me-2" />}
                  {getEvolution(last_data_2?.mois)} % (2024)
                </p>
              </Row>
              <Row className="w-100 m-auto">
                <p className="text-center my-3 text-primary">
                  Publiée le {last_data_2 ? printDate(last_data_2.date_publication) : '-'}
                </p>
              </Row>
            </Col>
            <Col lg={3} className="statistic-item mx-4 p-0">
              <Row
                className="w-100 py-4 mx-auto"
                style={{ height: "200px", position: "relative" }}
              >
                <p>{last_data_3 ? printMonth(last_data_3.mois) : '-'}</p>
                <p className="text-center my-4">
                  <span className="h1">
                    <data>{last_data_3 ? _.round(last_data_3.valeur, 1) : '-'}</data>
                  </span>
                  <sup></sup>
                </p>
                <p className="h3">
                  {getEvolution(last_data_3?.mois)>0 && <i className="bi bi-arrow-up-right me-2" />}
                  {getEvolution(last_data_3?.mois)<=0 && <i className="bi bi-arrow-down-right me-2" />}
                  {getEvolution(last_data_3?.mois)} % (2024)
                </p>
              </Row>
              <Row className="w-100 m-auto">
                <p className="text-center my-3 text-primary">
                  Publiée le {last_data_3 ? printDate(last_data_3.date_publication) : '-'}
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
              labels={data ? data.filter((item) => item.mois >= '2024-01').map((item) => item.mois) : []}
              datasets={[
                {
                  label: 'Prévisions-LSN',
                  data: data ? data.filter((item) => item.mois >= '2024-01').map((item) => item.source == 'La Société Nouvelle' ? item.valeur : null) : [],
                  backgroundColor: '#191558',
                  stack: '1'
                },
                {
                  label: 'Baromètre-CITEPA',
                  data: data ? data.filter((item) => item.mois >= '2024-01').map((item) => item.source == 'CITEPA' ? item.valeur : null) : [],
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
                <li>Pour les données à partir d'avril 2025 : La Société Nouvelle</li>
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
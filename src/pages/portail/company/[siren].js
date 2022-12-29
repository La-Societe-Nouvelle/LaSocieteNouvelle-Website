import React, { useEffect, useState } from "react";
import { Button, Card, Col, Container, Image, Row } from "react-bootstrap";

import { Helmet } from "react-helmet";
import { useRouter } from "next/router";

import Chart from "chart.js/auto";
import ChartDataLabels from "chartjs-plugin-datalabels";

Chart.register(ChartDataLabels);

import { Bar } from "react-chartjs-2";

import axios from "axios";
import ErrorAlert from "../../../components/Error";

const CompanyData = () => {
  const router = useRouter();

  const [siren, setSiren] = useState(router.query.siren);
  const [error, setError] = useState();

  const [dataFetched, isDataFetched] = useState(false);
  const [legalUnit, setLegalUnit] = useState();
  const [footprint, setFootprint] = useState();
  const [meta, setMeta] = useState();

  useEffect(() => {
    setSiren(router.query.siren);
    if (siren) {
      getLegalUnitFootprint(siren);
    }
  }, [router, siren]);

  async function getLegalUnitFootprint(siren) {
    axios
      .get(`https://api.lasocietenouvelle.org/legalunitFootprint/${siren}`)
      .then((response) => {
        isDataFetched(true);
        if (response.data.header.code == 200) {
          setLegalUnit(response.data.legalUnit);
          setFootprint(response.data.footprint);
          setMeta(response.data.metaData);
        } else {
          setError(response.data.header);
        }
      });
  }

  return (
    <>
      <Helmet>
        <title>
          {` Portail La Société Nouvelle | Empreinte sociétale de l'entreprise #` +
            siren}
        </title>
      </Helmet>
      <section className="open-data-portal bg-light">
        <Container>
          {!dataFetched && (
            <>
              <h2 className="text-center">
                Empreinte Sociétale de l'entreprise <b>#{siren}</b>
              </h2>
              <div className="text-center">
                <p>Chargement des données... </p>
                <div className="dot-pulse m-auto"></div>
              </div>
            </>
          )}
          {error && <ErrorAlert code={error.code} />}
          {dataFetched && footprint && meta && (
            <>
              <div className="legalUnit bg-white p-4 border rounded-3 ">
                <h2>
                  Empreinte Sociétale de <b>{legalUnit.denomination}</b>
                </h2>
                <div>
                  <ul className="list-unstyled">
                    <li>Siren : {legalUnit.siren}</li>
                    <li>
                      Activité principale :{" "}
                      {legalUnit.activitePrincipaleLibelle}
                    </li>
                    <li>
                      Siège :{" "}
                      {legalUnit.codePostalSiege + " " + legalUnit.communeSiege}
                    </li>
                    {!legalUnit.societeMission && (
                      <li>Société à mission : Oui</li>
                    )}
                  </ul>
                </div>
              </div>
              <div className="footprint">
                <ContentSocialFootprint footprint={footprint} meta={meta} />
              </div>
            </>
          )}
          <p className="text-end">
            <Button
              title="Retour au portail"
              href="/portail"
              variant="secondary"
            >
              « Retour
            </Button>
          </p>
        </Container>
      </section>
    </>
  );
};

/* Body of the page : Viewing the "EmpreinteSocietale" aka "ESE" */
function ContentSocialFootprint({ footprint, meta }) {
  const indicators = Object.entries(footprint).filter(([k, v]) => k !== "DIS");

  const indicatorsDetails = indicators.map(([code], _) => ({
    ...footprint[code],
    ...meta[code],
    code,
  }));

  return (
    <Row className="indic-details">
      {indicatorsDetails.map((details) => (
        <IndicatorDetails key={details.code} {...details} />
      ))}
    </Row>
  );
}

/* Basic indicator view */
function IndicatorDetails({
  code,
  flag,
  description,
  indicatorLabel,
  info,
  source,
  uncertainty,
  year,
  value,
  unitSymbol,
}) {
  const displayedValue = Math.round(10 * value) / 10;

  return (
    <Col key={code} className=" mb-4" lg={4}>
      <Card>
        <Card.Body>
          <div className="d-flex align-items-center mb-4 pb-3">
            <Image
              height="30px"
              src={"/ESE/icon-ese-bleues/" + code.toLowerCase() + ".svg"}
              alt={code}
            />
            <h3 className="ms-2 mb-0 h6">{indicatorLabel} </h3>
          </div>

          <ColumnChart
            performance={Math.round(displayedValue)}
            unit={unitSymbol}
            flag={flag}
          />
          <div className="small mt-3 ">
            {/* {info && <p className="mb-1">{info}</p>} */}
            <p className="mb-1">&#9642; Incertitude : {Math.round(uncertainty)} %</p>
            {year && <p className="mb-0">&#9642; Dernière mise à jour : {year}</p>}
          </div>
        </Card.Body>
        <Card.Footer>
          {source && <p>Source : {source}</p>}
        </Card.Footer>
      </Card>
    </Col>
  );
}

function ColumnChart({ performance, unit, flag }) {
  let bgColor;
  let legend;

  if (flag == "p") {
    bgColor = "RGBA(250, 89, 95,0.8)";
    legend = "Valeur publiée";
  } else {
    bgColor = "RGBA(25, 21, 88,0.8)";
    legend = "Valeur par défaut";
  }

  const data = {
    datasets: [
      {
        label: legend,
        barPercentage: 0.3,
        data: [performance],
        backgroundColor: [bgColor],
      },
    ],
    labels: ["Unité legale"],
  };

  let suggestedMax;

  if (unit == "%") {
    switch (true) {
      case performance < 10:
        suggestedMax = 10;
        break;
      case performance > 10 && performance < 25:
        suggestedMax = 25;
        break;
      case performance > 25 && performance < 50:
        suggestedMax = 50;
        break;
      default:
        suggestedMax = 100;
        break;
    }
  } else {
    suggestedMax = null;
  }

  const options = {
    responsive: true,
    maintainAspectRatio: true,
    devicePixelRatio: 2,
    layout: {
      padding: {
        top: 30,
        bottom : 10,
        left : 10,
        right : 10
      },
    },
    plugins: {
      legend: {
        display: true,
        labels: {
          color: "#373c42",
          padding: 20,
          boxWidth: 5,
          boxHeight: 5,
        },
        position: "bottom",
  
      },
      datalabels: {
        anchor: "end",
        align: "top",
        formatter: function (value, context) {
          return value + " " + unit;
        },
        color: bgColor,
        font: {
          size: 18,
          family: "Raleway",
          weight: "bold",
        },
      },
      tooltip: {
        enabled: false //
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        suggestedMax: suggestedMax,

        ticks: {
          color: "#191558",
          font: {
            size: 10,
            family: "Roboto",
          },
        },
        grid: {
          color: "#ececff",
        },
      },
      x: {
        display: false,
        grid: {
          color: "#ececff",
        },
      },
    },
  };

  return (
    <div className="border"  >
      <Bar data={data} options={options} />
    </div>
  );
}

export default CompanyData;

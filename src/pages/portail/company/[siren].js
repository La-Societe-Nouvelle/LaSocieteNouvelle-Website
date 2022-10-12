import React, { useEffect, useState } from "react";
import {
  Button,
  Card,
  Col,
  Container,
  Image,
  Nav,
  NavItem,
  NavLink,
  Row,
} from "react-bootstrap";

import { Helmet } from "react-helmet";
import { useRouter } from "next/router";

import Chart from "chart.js/auto";

import { Bar } from "react-chartjs-2";

import axios from "axios";
import ErrorAlert from "../../../components/Error";

const CompanyData = () => {
  const router = useRouter();

  const [siren, setSiren] = useState(router.query.siren);
  const [error, setError] = useState();

  const [views, setView] = useState({
    empreinteEconomique: {
      name: "Création de la valeur",
      indicators: {
        ECO: { min: 0, max: 100 },
        ART: { min: 0, max: 100 },
        SOC: { min: 0, max: 100 },
      },
    },
    empreinteEnvironnementale: {
      name: "Empreinte environnementale",
      indicators: {
        GHG: { min: 0 },
        MAT: { min: 0 },
        WAS: { min: 0 },
        NRG: { min: 0 },
        WAT: { min: 0 },
        HAZ: { min: 0 },
      },
    },
    empreinteSociale: {
      name: "Empreinte sociale",
      indicators: {
        DIS: { min: 0, max: 100 },
        GEQ: { min: 0, max: 100 },
        KNW: { min: 0, max: 100 },
      },
    },
  });
  const [selectedView, setSelectedView] = useState("empreinteEconomique");
  const [dataFetched, isDataFetched] = useState(false);
  const [legalUnit, setLegalUnit] = useState();
  const [footprint, setFootprint] = useState();

  useEffect(() => {
    setSiren(router.query.siren);
    if (siren) {
      getData(siren);
    }
  }, [router, siren]);

  async function getData(siren) {
    axios
      .get(`https://api.test.lasocietenouvelle.org/legalunitFootprint/${siren}`)
      .then((response) => {
        isDataFetched(true);
        if (response.data.header.code == 200) {
          setLegalUnit(response.data.legalUnit);
          setFootprint(response.data.footprint);
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
      <section className="open-data-portal">

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
          {dataFetched && footprint && (
            <>
              <div className="legalUnit">
                <h2 className="text-center">
                  Empreinte Sociétale de{" "}
                  <b>{legalUnit.denomination + " #" + siren}</b>
                </h2>
                <div className="d-flex justify-content-between">
                  <p>
                    <b>SIREN :</b> {legalUnit.siren}
                  </p>
                  <p>
                    <b>Activité principale : </b>
                    {legalUnit.activitePrincipaleLibelle}
                  </p>
                  <p>
                    <b>Siège : </b>{" "}
                    {legalUnit.codePostalSiege + " " + legalUnit.communeSiege}
                  </p>
                </div>
              </div>
              <div className="footprint">
                <Nav pills="true" tabs="true" fill>
                  {Object.entries(views).map(([viewKey, viewValue], _) => (
                    <NavItem
                      key={viewKey}
                      className={viewKey == selectedView ? "selected" : ""}
                    >
                      <NavLink onClick={() => setSelectedView(viewKey)}>
                        {viewValue.name}
                      </NavLink>
                    </NavItem>
                  ))}
                </Nav>
                <ContentSocialFootprint
                  views={views}
                  selectedView={selectedView}
                  empreinteSocietale={footprint}
                />
              </div>
            </>
          )}
          <p className="text-end">
            <Button
              title="Retour au portail"
              href="/portail"
              variant="secondary"
            >
              « Retour{" "}
            </Button>
          </p>
        </Container>
      </section>
    </>
  );
};

/* Body of the page : Viewing the "EmpreinteSocietale" aka "ESE" */
function ContentSocialFootprint({ views, selectedView, empreinteSocietale }) {
  const selectedIndicatorDetails = Object.entries(
    views[selectedView].indicators
  ).map(([code, viewWindow], _) => ({
    ...empreinteSocietale[code],
    viewWindow,
    code,
  }));

  return (
    <Row className="indic-details">
   
      {selectedIndicatorDetails.map(
        (details) => (
          (<IndicatorDetails key={details.code} {...details} />)
        )
      )}
    </Row>
  );
}

/* Basic indicator view */
function IndicatorDetails({
  code,
  flag,
  indicatorLabel,
  source,
  uncertainty,
  year,
  value,
  unitSymbol,
}) {
  const displayedValue = Math.round(10 * value) / 10;

  return (
    <Col key={code} className="indic-view my-4" lg={4}>
      <Card>
        <Card.Body>
          <div className="indic d-flex align-items-center">
            <Image
              className="icon-ese"
              fluid
              src={"/ESE/icon-ese-bleues/" + code.toLowerCase() + ".svg"}
              alt={code}
            />
            <h4 id="indic-view-label">{indicatorLabel} </h4>
          </div>
          <div className="indic-value text-center">
            <h5 className={flag ? "value" : "value default"}>
              {Math.round(displayedValue)} {unitSymbol}
            </h5>
            <p className="small"> 
            {flag && flag == 'p' ? <p> : Valeur publiée </p> : <p> Valeur par défaut</p>}
            </p>
            <p className="incertitude">
              Incertitude : {Math.round(uncertainty)} %
            </p>
          </div>

          <ColumnChart title={indicatorLabel} performance={displayedValue} />
        </Card.Body>
        <Card.Footer className="d-flex justify-content-between">
          {source && <p>Source : {source}</p>}
          {year && <p>Dernière mise à jour : {year}</p>}
        </Card.Footer>
      </Card>
    </Col>
  );
}

function ColumnChart({ title, performance }) {
  const data = {
    datasets: [
      {
        barPercentage: 0.5,
        data: [performance],
        backgroundColor: ["RGB(251, 122, 127)"],
      },
    ],
    labels: ["Unité legale"],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    devicePixelRatio: 2,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        suggestedMax: 100,
      },
    },
  };

  return (
    <div align="center">
      <Bar id={title} data={data} options={options} />
    </div>
  );
}

export default CompanyData;

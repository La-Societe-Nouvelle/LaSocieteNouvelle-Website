import React, { useEffect, useState } from "react";
import { Alert, Card, Col, Container, Image, Nav, NavItem, NavLink, Row } from "react-bootstrap";
import { Helmet } from "react-helmet";
import { useRouter } from "next/router";

/* The base URL of the API */
const apiBaseUrl = "https://systema-api.azurewebsites.net/api/v2";

import Chart from 'chart.js/auto';
import { Bar } from "react-chartjs-2";

const CompanyData = () => {
  const router = useRouter();

  const [siren, setSiren] = useState(router.query.siren);
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
  const [dataFetched, isDataFetched] = useState();
  const [uniteLegale, setUniteLegale] = useState();
  const [empreinte, setEmpreinte] = useState();

  useEffect(() => {
    setSiren(router.query.siren);

    if (router.query.siren) {
      getData(router.query.siren);
    }
  }, [router]);

  async function getData(siren) {
    try {

      const endpoint = `${apiBaseUrl}/siren/${siren}`;

      const response = await fetch(endpoint, { method: "get" });
      const data = await response.json();

      const dataFetched = data.header.statut === 200;
      const profil = data.profil;
      isDataFetched(dataFetched);
      setUniteLegale(profil.descriptionUniteLegale);
      setEmpreinte(profil.empreinteSocietale);
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  return (
    <>
      <Helmet>
        <title>
          Portail La société Nouvelle | Empreinte sociétale de l'entreprise
        </title>
      </Helmet>
      <div className="open-data-portal p-0">
        <Container fluid>
          <section className="px-3">
       
            {dataFetched && empreinte && (
              <>
                <h2 className="text-center">
                  Empreinte Sociétale de <b>{uniteLegale.denomination + " #" + siren}</b>
                </h2>
                  <div className="d-flex justify-content-between">
                    <p>
                      <b>SIREN :</b> {uniteLegale.siren}</p>
                    <p>
                      <b>Activité principale : </b>{uniteLegale.activitePrincipaleLibelle}
                    </p>
                    <p>
                      <b>Siège : </b> {uniteLegale.codePostalSiege + " " + uniteLegale.communeSiege}
                    </p>
                  </div>
              <div className="footprint graph-section ">
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
                <ContentSocialFootprint views={views} selectedView={selectedView} empreinteSocietale={empreinte} />

                </div>
              </>
            )}
          </section>
        </Container>
      </div>
    </>
  );
};

/* Body of the page : Viewing the "EmpreinteSocietale" aka "ESE" */
function ContentSocialFootprint({ views,selectedView, empreinteSocietale }) {

  const selectedIndicatorDetails = Object.entries(
    views[selectedView].indicators
  ).map(([code, viewWindow], _) => ({
    ...empreinteSocietale[code],
    viewWindow,
  }));

  return (
    <section className="px-4">
      <Row className="indic-details">
        {selectedIndicatorDetails.map((details) => (
          <IndicatorDetails key={details.code} {...details} />
        ))}
      </Row>
    </section>
  );
}

/* Basic indicator view */
function IndicatorDetails({
  code,
  libelle,
  libelleFlag,
  uncertainty,
  year,
  value,
  unit,
  valueDeclared,
}) {
  const displayedValue = Math.round(10 * value) / 10;

  return (
    <Col key={code} className="indic-view mb-4" lg={4}>
      <Card>
        <Card.Body>
          <div className="d-flex align-items-center">
            <Image className="icon-ese" fluid src={"/ESE/icon-ese-bleues/" + code.toLowerCase() + ".svg"}  alt={code}/>
            <h4 id="indic-view-label">{libelle} </h4>
          </div>
          <div className="indic-value text-center">
            <p className={valueDeclared ? "value" : "value default"}>
              {Math.round(displayedValue)} {unit}
            </p>
            <p className="incertitude">
              Incertitude : {Math.round(uncertainty)} %
            </p>
          </div>

          <ColumnChart title={libelle} performance={displayedValue} />
        </Card.Body>
        <Card.Footer className="d-flex justify-content-between">
          <p>Source : {libelleFlag}</p>
          <p>Dernière mise à jour : {year}</p>
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

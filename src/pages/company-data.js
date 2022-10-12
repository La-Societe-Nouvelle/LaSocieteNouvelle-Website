// React
import React, { useState } from "react";
import { Helmet } from "react-helmet";

// Modules
//import { Chart } from "react-google-charts";
import {
  Alert,
  Card,
  Col,
  Container,
  Nav,
  NavItem,
  NavLink,
  Row,
} from "react-bootstrap";

import { Bar } from "react-chartjs-2";
import PageHeader from "../components/PageHeader";

/* The base URL of the API */
/* TODO: Must be exteriorized in a build variable */
const apiBaseUrl = "https://systema-api.azurewebsites.net/api/v2";

/* Defines every possible views. Each key is a view.
   Each value contains:
   - the name of the view.
   - the associated indicators.
*/
const views = {
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
};

/* Fetch (on server side) the profile of the company given its SIREN number */
Home.getInitialProps = async (ctx) => {
  try {
    const siren = ctx.query.siren;
    const endpoint = `${apiBaseUrl}/siren/${siren}`;

    const response = await fetch(endpoint, { method: "get" });
    const data = await response.json();

    const dataFetched = data.header.statut === 200;
    const header = data.header;
    const profil = data.profil;

    return {
      siren,
      dataFetched,
      header,
      uniteLegale: dataFetched ? profil.descriptionUniteLegale : null,
      empreinteSocietale: dataFetched ? profil.empreinteSocietale : null,
    };
  } catch (error) {
    console.log(error);
    throw error;
  }
};

/* General Page Layout */
export default function Home(props) {
  return (
    <>
      <Helmet>
        <title>La Société Nouvelle | Empreinte sociétale</title>
      </Helmet>
      <PageHeader
        title={"Empreinte sociétale de " + props.uniteLegale.denomination}
        prev={"portail"}
        prevTitle={"Portail"}
        path={"company-data/?siren=" + props.siren}
      />
      <Container>
        <section className="societal-footprint">

          {props.dataFetched ? (
            <ContentSocialFootprint {...props} />
          ) : (
            <ContentError {...props} />
          )}
        </section>
      </Container>
    </>
  );
}

/* Body of the page : Viewing the "EmpreinteSocietale" aka "ESE" */
function ContentSocialFootprint({ uniteLegale, empreinteSocietale }) {
  /* Use a state Hook with a default value */
  const [selectedView, setSelectedView] = useState("empreinteEconomique");
  const selectedIndicatorDetails = Object.entries(
    views[selectedView].indicators
  ).map(([code, viewWindow], _) => ({
    ...empreinteSocietale[code],
    viewWindow,
  }));

  return (
    <>
        <ul className="legal-unit-data">
          <li>SIREN : {uniteLegale.siren}</li>
          <li>Activité principale : {uniteLegale.activitePrincipaleLibelle}</li>
          {uniteLegale.communeSiege ||
            (uniteLegale.codePostalSiege && (
              <li>
                Siège :
                {uniteLegale.codePostalSiege + " " + uniteLegale.communeSiege}
              </li>
            ))}
        </ul>
        <Nav pills="true" tabs="true" fill>
          {Object.entries(views).map(([viewKey, viewValue], _) => (
            <NavItem key={viewKey}  className={viewKey == selectedView ? "inverse" : ""}>
              <NavLink
                onClick={() => setSelectedView(viewKey)}
               
              >
                {viewValue.name}
              </NavLink>
            </NavItem>
          ))}
        </Nav>

      <Row className="indic-details">
        {selectedIndicatorDetails.map((details) => (
          <IndicatorDetails key={details.code} {...details} />
        ))}
      </Row>

      <Alert variant="info"  className="my-4">
        <p>
          <i className="bi bi-exclamation-triangle-fill"></i> Les valeurs
          affichées peuvent correspondre à des données par défaut non spécifique
          à l'entreprise, et peuvent donc être éloignées de la réalité de
          l'entreprise. Merci de prendre ces données avec précaution.
        </p>
        <p>
          La valeur de référence correspond à la valeur de l'indicateur pour
          l'agrégat macroéconomique le plus proche.
        </p>
      </Alert>
    </>
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
    <Col key={code} className="indic-view" lg={4}>
      <Card>
    
        <Card.Body>
        <h4 id="indic-view-label">{libelle} </h4> 
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

/* default body of the page */
function ContentError({ header }) {
  return (
    <div id="default-message">
      <p>404 | Empreinte Sociétale non trouvée</p>
      <p>Error : {header.message}</p>
    </div>
  );
}

// React
import React, { useState } from 'react';
import { Helmet } from 'react-helmet';

// Imports
import Head from 'next/head'

// Components
import Header from '../src/components/header'
import Footer from '../src/components/footer'

// Modules
import { Chart } from "react-google-charts";


/* The base URL of the API */
/* TODO: Must be exteriorized in a build variable */
const apiBaseUrl = "https://systema-api.azurewebsites.net/api/v2";

/* Defines every possible views. Each key is a view.
   Each value contains:
   - the name of the view.
   - the associated indicators.
*/
const views =
{
  empreinteEconomique: {
    name: "Création de la valeur",
    indicators: {
      "ECO": { min: 0, max: 100 },
      "ART": { min: 0, max: 100 },
      "SOC": { min: 0, max: 100 }
    }
  },
  empreinteEnvironnementale: {
    name: "Empreinte environnementale",
    indicators: {
      "GHG": { min: 0 },
      "MAT": { min: 0 },
      "WAS": { min: 0 },
      "NRG": { min: 0 },
      "WAT": { min: 0 },
      "HAZ": { min: 0 }
    }
  },
  empreinteSociale: {
    name: "Empreinte sociale",
    indicators: {
      "DIS": { min: 0, max: 100 },
      "GEQ": { min: 0, max: 100 },
      "KNW": { min: 0, max: 100 }
    }
  }
}

/* Fetch (on server side) the profile of the company given its SIREN number */
Home.getInitialProps = async (ctx) => {
  try {
    const siren = ctx.query.siren;
    const endpoint = `${apiBaseUrl}/siren/${siren}`;

    const response = await fetch(endpoint, { method: 'get' });
    const data = await response.json();

    const dataFetched = data.header.statut === 200;
    const header = data.header;
    const profil = data.profil;

    return {
      siren,
      dataFetched,
      header,
      uniteLegale: dataFetched ? profil.descriptionUniteLegale : null,
      empreinteSocietale: dataFetched ? profil.empreinteSocietale : null
    };
  }
  catch (error) {
    console.log(error);
    throw error;
  }
}

/* General Page Layout */
export default function Home(props) {
  return (
    <div className="container">
      <Helmet>
        <title>La société Nouvelle | Empreinte sociétale</title>
      </Helmet>
      <Header />

      <main className="main" id="company-footprint">

        <div className="section">
          <h1> Empreinte Sociétale #{props.siren}</h1>
        </div>

        {
          props.dataFetched ? <ContentSocialFootprint {...props} />
            : <ContentError {...props} />
        }

      </main>

      <Footer />

    </div>
  )
}

/* Body of the page : Viewing the "EmpreinteSocietale" aka "ESE" */
function ContentSocialFootprint({ uniteLegale, empreinteSocietale }) {
  /* Use a state Hook with a default value */
  const [selectedView, setSelectedView] = useState("empreinteEconomique");
  const selectedIndicatorDetails = Object.entries(views[selectedView].indicators).map(([code, viewWindow], _) => ({ ...empreinteSocietale[code], viewWindow }));

  return (
    <>
      <div className="section" id="legal-unit-data">
        <h2> {uniteLegale.denomination} </h2>
        <p>
          SIREN : {uniteLegale.siren}
        </p>
        <p>
          Activité principale : {uniteLegale.activitePrincipaleLibelle} <br />
          Siège : {uniteLegale.communeSiege} ({uniteLegale.codePostalSiege})
        </p>
      </div>

      <div id="notes">
        <p>
          /!\ Les valeurs affichées peuvent correspondre à des données par défaut non spécifique à l'entreprise,
          et peuvent donc être éloignées de la réalité de l'entreprise.
          Merci de prendre ces données avec précaution.
        </p>
        <p>
          La valeur de référence correspond à la valeur de l'indicateur pour l'agrégat macroéconomique le plus proche.
        </p>
      </div>

      <div className="h-group" id="menu-footprint">
        {Object.entries(views).map(([viewKey, viewValue], _) => (
          <button key={viewKey}
            onClick={() => setSelectedView(viewKey)}
            className={(viewKey == selectedView) ? "inverse" : ""}>
            {viewValue.name}
          </button>))}
      </div>

      <div id="sfp-view">
        {selectedIndicatorDetails.map(details => (
          <IndicatorDetails key={details.code} {...details} />
        ))}
      </div>
    </>
  )
}


/* Basic indicator view */
function IndicatorDetails
  ({ code, libelle, libelleFlag, uncertainty, year, value, unit, valueDeclared, viewWindow }) {
  const displayedValue = Math.round(10 * value) / 10;
  const displayedColor = valueDeclared ? "#616161" : "#b0b0b0";

  return (
    <div key={code} className="indic-view">
      <h4 id="indic-view-label">{libelle}</h4>
      <ColumnChart title={libelle} viewWindow={viewWindow} performance={displayedValue} color={displayedColor} />
      <p className={valueDeclared ? "indic-value" : "indic-value default"}>{Math.round(displayedValue)} {unit}</p>
      <p className="indic-subdata">Source : {libelleFlag}</p>
      <p className="indic-subdata">Incertitude : {Math.round(uncertainty)} %</p>
      <p className="indic-subdata">Dernière mise à jour : {year}</p>
    </div>
  );
}

function ColumnChart({ title, performance, color, viewWindow = {} }) {
  return (
    <div align="center">
      <Chart
        width={"80%"}
        height={"150px"}
        chartType="ColumnChart"
        loader={<div>Chargement</div>}
        data={
          (performance != NaN && title)
            ? [
              ["", title, { role: "style" }],
              ["Unité légale", performance, color],
            ]
            : []}
        options={{
          legend: { position: 'none' },
          vAxis: { viewWindow: viewWindow, viewWindowMode: "explicit" },
          enableInteractivity: false,
          animation: { duration: 600, easing: "inAndOut" }
        }}
      />
    </div>)
}


/* default body of the page */
function ContentError({ header }) {
  return (
    <div id="default-message">
      <p>404 | Empreinte Sociétale non trouvée</p>
      <p>Error : {header.message}</p>
    </div>
  )
}
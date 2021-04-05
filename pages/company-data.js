import Head from 'next/head'
import Header from './header.js'
import Footer from './footer.js'
import styles from '../styles/Home.module.css'
import React, {useState} from 'react';
import { Chart } from "react-google-charts";


/* The base URL of the API */
/* TODO: Must be exteriorized in a build variable */
const apiBaseUrl = "https://systema-api.azurewebsites.net/api/v2";

/* Defines every possible views. Each key is a view.
   Each value contains:
   - the name of the view.
   - the associated indicators.
*/
const viewsForESE = {
  empreinteEconomique: {
    name: "Création de la valeur",
    indicators: {"ECO": {min:0, max:100},
                 "ART": {min:0, max:100},
                 "SOC": {min:0, max:100}}},
  empreinteEnvironnementale: {
    name: "Empreinte environnementale",
    indicators: {"GHG": {min:0},
                 "MAT": {min:0},
                 "WAS": {min:0},
                 "NRG": {min:0},
                 "WAT": {min:0},
                 "HAZ": {min:0}}},
  empreinteSociale: {
    name: "Empreinte sociale",
    indicators:  {"DIS":{min:0, max:100},
                  "GEQ":{min:0, max:100},
                  "KNW": {min:0, max:100}}}
}

/* Fetch (on server side) the profile of the company given its SIREN number */
Home.getInitialProps = async (ctx) => {
  try{
    const siren = ctx.query.siren;
    const endpoint = `${apiBaseUrl}/siren/${siren}`;
    const response = await fetch(endpoint, {method:'get'});
    const data = await response.json();
    return {
      siren,
      uniteLegale: data.profil.descriptionUniteLegale,
      empreinteSocietale: data.profil.empreinteSocietale
    };
  }
  catch(error){
    console.log(error);
    throw error;
  }
}

/* General Page Layout */
export default function Home(props){
  return(
    <div className={styles.container}>
      <Head>
        <title>La Société Nouvelle</title>
        <link rel="icon" href="/resources/logo_miniature.jpg" />
      </Head>
      <Header/>
      <main className={styles.main}>
        <h1 className={styles.title}> Empreinte Sociétale </h1>
        <EmpreinteSocietale {...props}/>
      </main>
      <Footer/>
    </div>
  )
}

/* Body of the page : Viewing the "EpreinteSocietale" aka "ESE" */
function EmpreinteSocietale ({siren,isLoaded,uniteLegale,empreinteSocietale}){

  /* Use a state Hook with a default value */
  const [selectedView, setSelectedView] = useState("empreinteEconomique");

  return (
    <div className="strip">
      <UniteLegale {...uniteLegale}/>

      {/* Forward state and state handler to the menu */}
      <ESEViewMenu selected={selectedView} selector={setSelectedView} views={viewsForESE}/>

      <Indicators
        selectedIndicators={viewsForESE[selectedView].indicators}
        ESE={empreinteSocietale}/>
    </div>
  )
}

/* View of a Legal Entity */
function UniteLegale(uniteLegale)
{
  return (
    <div id="sfp-company-data" className="strip">
      <h2> {uniteLegale.denomination} </h2>
      <p> SIREN : {uniteLegale.siren} </p>
      <p>
        Activité principale : {uniteLegale.activitePrincipaleLibelle} <br/>
        Domiciliation : {uniteLegale.communeSiege} ({uniteLegale.codePostalSiege})
      </p>
    </div>
  )
}

/* ViewMenu : Controls the selected view that must be displayed */
function ESEViewMenu({selected, selector, views}){
  return (
    <div className="MenuEmpreinteSocietale">
      <div id="sfp-menu-items">
        {Object.entries(views).map(
          ([viewKey,viewValue],_) => (
            <button key={viewKey}
                    onClick = {() => selector(viewKey)}
                    className={ (viewKey == selected) ? "sfp-menu-button" : "sfp-menu-button-inverse"}>
              {viewValue.name}
            </button>
          ))}
      </div>
    </div>
  );
}

/* Takes the ESE and outputs some indicators given their codes */
function Indicators({selectedIndicators, ESE}) {
  const selectedIndicatorDetails = Object.entries(selectedIndicators)
        .map(([code,viewWindow],_) => ({...ESE[code], viewWindow}));
  return (
    <div id="sfp-view">
      {selectedIndicatorDetails.map(details => (
        <IndicatorDetails key={details.code} {...details}/>
      ))}
    </div>
  )
}

/* Basic indicator view */
function IndicatorDetails
({code, libelle, libelleFlag, uncertainty, year, value, unit, valueDeclared, valueReference, viewWindow}){
  const displayedValue = Math.round(10*value)/10;
  const displayedValueReference = Math.round(10*valueReference)/10;
  return (
    <div key={code} className="VueIndicateur">
      <h4 id="indic-view-label">{libelle}</h4>
      <ColumnChart title={libelle} viewWindow={viewWindow}
                performance={displayedValue} reference={displayedValueReference}/>
      <p id={valueDeclared ? "indic-value" : "indic-value-default"}>{Math.round(displayedValue)} {unit}</p>
      <p className="indic-subdata">Source : {libelleFlag}</p>
      <p className="indic-subdata">Incertitude : {Math.round(uncertainty)} %</p>
      <p className="indic-subdata">Dernière mise à jour : {year}</p>
      <p className="indic-subdata">Valeur de référence : {Math.round(valueReference)} {unit}</p>
    </div>
  );
}

function ColumnChart({title, performance, reference, viewWindow = {}}) {
  return (
    <div align="center">
      <Chart
        width={"80%"}
        height={"150px"}
        chartType="ColumnChart"
        loader={<div>Chargement</div>}
        data={
          (performance != NaN && reference != NaN && title)
            ? [
              ["", title, { role: "style" }],
              ["Référence", reference, "#B0B0B0"],
              ["Unité légale", performance, "#616161"],
            ]
          : []}
        options={{
          legend: {position: 'none'},
          vAxis: {viewWindow: viewWindow, viewWindowMode: "explicit"},
          enableInteractivity: false,
          animation:{duration:600, easing:"inAndOut"}
        }}
      />
    </div>)
}

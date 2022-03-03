import Head from 'next/head'
// Components
import Header from '../src/components/header'
import Footer from '../src/components/footer'
// Modules
import React from 'react';

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  LogarithmicScale,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  LogarithmicScale,
  Title,
  Tooltip,
  Legend
);

import content from '../lib/articles.json';

const apiBaseUrl = "https://systema-api.azurewebsites.net/api/v2";

/* Fetch (on server side)  */
Home.getInitialProps = async () => {
  try {
    const endpoint = `${apiBaseUrl}/serie?indic=GHG&area=FRA&flow=GDP`;

    const response = await fetch(endpoint, { method: 'get' });
    const data = await response.json();

    const dataFetched = data.header.statut === 200;
    const header = data.header;
    const serie = data.serie;
    const title = data.metaData.info;

    return {
      dataFetched,
      header,
      serie,
      title
    };
  }
  catch (error) {
    console.log(error);
    throw error;
  }
}

export default function Home(props) {

  var obj = props.serie;
  var result = Object.keys(obj).map((key) => [Number(key), obj[key]]);

  const options = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: props.title,
        color: "#191558",
        font: {
          size: 15,
          family : 'Raleway, sans-serif',
        },
        padding: {
          top: 10,
          bottom: 30
        }
      },
      legend: {
        display: false,
      },
    },
    scales: {
      y: {
        min: 0,
      }
    }
  };

  var labels = [];

  for (let i = 0; i < result.length; i++) {
    labels.push(result[i][0]);
  }

  const dataset = [];

  for (let i = 0; i < result.length; i++) {
    dataset.push(result[i][1].value);
  }

  const data = {
    labels,
    datasets: [
      {
        label: "Valeur",
        data: dataset,
        borderColor: 'rgba(250, 89, 103,0.5)',
        backgroundColor: 'rgba(250, 89, 103,1)',
      },

    ],
  };


  return (
    <div className="container">
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />

      <Head>
        <title>La Société Nouvelle</title>
        <link rel="icon" href="/resources/logo_miniature.jpg" />
      </Head>

      <Header />

      <main className="main">

        <div className="section">

          <div className="bloc blue h-group" id="chiffres-clefs">
            <div className="chiffre-clef">
              <img className="chiffre-clef-icone" id="icon-coins" src="/images/coins-brf-1-white.png" alt="icon-coins" />
              <div className="chiffre-clef-valeur">
                <p>2 054</p>
                <span>Mrd €</span>
              </div>
              <p className="chiffre-clef-libelle">Production intérieure - France (2020)</p>
            </div>
            <div className="chiffre-clef">
              <img className="chiffre-clef-icone" id="icon-co2" src="/images/co2-brf-1-white.png" alt="icon-co2" />
              <div className="chiffre-clef-valeur">
                <p>153</p>
                <span>gCO2e/€</span>
              </div>
              <p className="chiffre-clef-libelle">Intensité d'émission de gaz à effet de serre</p>
            </div>
            <div className="chiffre-clef">
              <img className="chiffre-clef-icone" id="icon-scales" src="/images/scale-brf-1-white.png" alt="icon-scales" />
              <div className="chiffre-clef-valeur">
                <p>17.9</p>
                <span>%</span>
              </div>
              <p className="chiffre-clef-libelle">Ecart de rémunération F/H</p>
            </div>
          </div>

        </div>

        <div className="section h-group">

          <div className="bloc">
            <h2 className="titre-bloc">Actualités</h2>
            <div className="bloc-actualites">
              {content.blog.map((articleData) => <Vignette key={articleData.titre} {...articleData} />)}
            </div>
          </div>

          <div className="bloc" id="quick-access_container">
            <h2 className="titre-bloc">Accès rapide</h2>
            <div className="v-group">
              <div className="box"
                onClick={() => window.open('https://lasocietenouvelle.notion.site/METRIZ-GUIDE-D-UTILISATION-ce7af947e69e47b1a3f90697374ad80b')}>
                <p>Ressources</p>
              </div>
              <div className="box"
                onClick={() => window.open('/portail')}>
                <p>Données</p>
              </div>
              <div className="box"
                onClick={() => window.open('https://metriz.lasocietenouvelle.org')}>
                <p>Outil</p>
              </div>
            </div>
          </div>

        </div>

        <div className="section">
          <div className="bloc">

            <h2 className="titre-section">Indicateurs clefs</h2>
            <div className="graph">

              <Line
                data={data} options={options}
              />

            </div>
          </div>
        </div>

      </main>

      <Footer />

    </div>
  )
}

const Vignette = (props) =>
  <div className="vignette">
    <h3>{props.titre}</h3>
    <p>Publié le {props.date}</p>
    <p>{props.accroche}</p>
    <p>{props.texte}..</p>
  </div>

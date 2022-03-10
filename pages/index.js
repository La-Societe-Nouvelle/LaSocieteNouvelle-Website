// Components
import Header from '../src/components/header'
import Footer from '../src/components/footer'
// Modules
import React from 'react';
import { Helmet } from 'react-helmet';

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
import { Container, Row, Col, Nav, Card, Button } from 'react-bootstrap';

const apiBaseUrl = "https://systema-api.azurewebsites.net/api/v2";

/* Fetch (on server side)  */
Home.getInitialProps = async () => {
  try {
    const endpoint = `${apiBaseUrl}/serie?indic=GHG&area=FRA&flow=GDP`;
    const endPointWat = `${apiBaseUrl}/serie?indic=WAT&area=FRA&flow=GDP`;

    const response = await fetch(endpoint, { method: 'get' });
    const responseWat = await fetch(endPointWat, { method: 'get' });

    const data = await response.json();
    const dataWat = await responseWat.json();

    const dataFetched = data.header.statut === 200;
    const dataFetchedWat = dataWat.header.statut === 200;

    const header = data.header;
    const headerWat = dataWat.header;

    const serie = data.serie;
    const serieWat = dataWat.serie;

    const title = data.metaData.info;
    const titleWat = dataWat.metaData.info;

    return {
      dataFetched,
      responseWat,
      dataFetchedWat,
      header,
      headerWat,
      serie,
      serieWat,
      title,
      titleWat,
    };
  }
  catch (error) {
    console.log(error);
    throw error;
  }
}

export default function Home(props) {

  var obj = props.serie;
  var objWat = props.serieWat;
  var result = Object.keys(obj).map((key) => [Number(key), obj[key]]);
  var resultWat = Object.keys(objWat).map((key) => [Number(key), objWat[key]]);

  const optionsGHG = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: props.title,
        color: "#191558",
        font: {
          size: 15,
          family: 'Raleway, sans-serif',
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
        title: {
          display: true,
          text: 'gCO² e / €',
          padding: 10,
          font: {
            size: 12,
            weight: "bold",
          }
        }
      }
    }
  };

  const optionsWat = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: props.titleWat,
        color: "#191558",
        font: {
          size: 15,
          family: 'Raleway, sans-serif',
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
        title: {
          display: true,
          text: 'L / €',
          padding: 10,
          font: {
            size: 12,
            weight: "bold",
          }
        }
      }
    }
  };

  var labels = [];
  const labelWat = [];

  for (let i = 0; i < result.length; i++) {
    labels.push(result[i][0]);
  }

  for (let i = 0; i < resultWat.length; i++) {
    labelWat.push(resultWat[i][0]);
  }


  const datasetGHG = [];
  const datasetWAT = [];

  for (let i = 0; i < result.length; i++) {
    datasetGHG.push(result[i][1].value);
  }

  for (let i = 0; i < resultWat.length; i++) {
    datasetWAT.push(resultWat[i][1].value);
  }


  const dataGHG = {
    labels,
    datasets: [
      {
        label: "Valeur",
        data: datasetGHG,
        borderColor: 'rgba(250, 89, 103,0.5)',
        backgroundColor: 'rgba(250, 89, 103,1)',
      },

    ],
  };


  const dataWAT = {
    labels: labelWat,
    datasets: [
      {
        label: "Valeur",
        data: datasetWAT,
        borderColor: 'rgba(250, 89, 103,0.5)',
        backgroundColor: 'rgba(250, 89, 103,1)',
      },

    ],
  };

  return (

    <>
      <Helmet>
        <title>La société Nouvelle | Accueil</title>
      </Helmet>
      <Header />
      <main className="main" id="index">
        <Container fluid="lg">
          <section id="chiffres-clefs" className="bg-primary">
            <Row>
              <Col className='text-center'>
                <img className="fluid" src="/images/coins.png" alt="icon-coins" />
                <p className='my-2'> <span className="big-text">2054</span> <sup>Mrd €</sup> </p>
                <p>Production intérieure - France (2020)</p>
              </Col>
              <Col className='text-center'>
                <img className="fluid" id="icon-co2" src="/images/carbon-dioxide.png" alt="icon-co2" />

                <p className='my-2'><span className="big-text">153</span> <sup>gCO2e/€</sup></p>
                <p className="chiffre-clef-libelle">Intensité d'émission de gaz à effet de serre</p>

              </Col>
              <Col className='text-center'>
                <img className="chiffre-clef-icone" id="icon-scales" src="/images/balance.png" alt="icon-scales" />
                <div className="chiffre-clef-valeur">
                  <p className='my-2'><span className="big-text">17.9</span> <sup>%</sup></p>
                </div>
                <p className="chiffre-clef-libelle">Ecart de rémunération F/H</p>
              </Col>
            </Row>
          </section>
          <section>
            <Row>
              <Col lg={9} id="post">
                <div className="title-with-left-line">
                  <h2>Actualités</h2>
                </div>
                <div className="actualites">
                  {content.blog.map((articleData) => <Vignette key={articleData.titre} {...articleData} />)}
                </div>
              </Col>
              <Col lg={3} id="access">
                <div className="title-with-left-line">
                  <h2>Accès rapide</h2>
                </div>
                <Nav className="flex-column">
                  <Nav.Link className="btn w-100" href="https://lasocietenouvelle.notion.site/METRIZ-GUIDE-D-UTILISATION-ce7af947e69e47b1a3f90697374ad80b" target="_blank">Ressources</Nav.Link>
                  <Nav.Link className="btn w-100" href="/portail">Données</Nav.Link>
                  <Nav.Link className="btn w-100" href="https://metriz.lasocietenouvelle.org" target="_blank">Outils</Nav.Link>
                </Nav>
              </Col>
            </Row>

          </section>
          <section>
            <div className="title-with-side-lines">
              <h2>Suivi macro-économique</h2>
            </div>
            <Row>

              <Col>
                <Card>
                  <Card.Body>
                    <Line
                      data={dataGHG} options={optionsGHG}
                    />
                  </Card.Body>
                  <Card.Footer>
                    <p className="source">
                      Source : Insee, Eurostat | Traitement : La Société Nouvelle
                    </p>
                  </Card.Footer>
                </Card>

              </Col>
              <Col>
                <Card>
                  <Card.Body>

                    <Line
                      data={dataWAT} options={optionsWat}
                    />
                  </Card.Body>
                  <Card.Footer>

                    <p className="source">
                      Source : Insee, Eurostat | Traitement : La Société Nouvelle
                    </p>
                  </Card.Footer>

                </Card>

              </Col>
            </Row>
          </section>
        </Container>

      </main>

      <Footer />

    </>
  )
}

const Vignette = (props) =>

  <>
    <Card>
      {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
      <Card.Body>
        <Card.Title>{props.titre}</Card.Title>
        <Card.Subtitle>{props.accroche}</Card.Subtitle>
        <p className='date'>
          Publié le {props.date}
        </p>
        <Card.Text>
          {props.texte}
        </Card.Text>
        <p className='text-end'>
          <a href="/blog" className='btn btn-secondary'>
            Lire la suite
          </a>
        </p>

      </Card.Body>
    </Card>

  </>

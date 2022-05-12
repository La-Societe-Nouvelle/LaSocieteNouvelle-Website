// Components
import Header from '../components/header'
import Footer from '../components/footer'
// Modules
import React from 'react';
import { Helmet } from 'react-helmet';
import { Button, Col, Container, Image, Row } from "react-bootstrap";
import Graph from "../components/Graph";
import LatestPosts from "../components/posts/LatestPosts";

const Home = () => {
  return (
    <>
      <div className="bloc-statistics py-4 bg-light">
        <Container>
          <div className="d-flex justify-content-between">
            <div className="statistic-item">
              <img
                src="images/france.png"
                height="60"
                className="mx-auto d-block my-2"
                alt="eco"
              />
              <p className="text-center">
                <span className="h1">2054</span> <sup> Mrd €</sup>
              </p>
              <p className="text-center">
                Production intérieure
              </p>
            </div>
            <div className="statistic-item">
              <img
                src="images/CO2.png" 
                height="60"
                className="mx-auto d-block my-2"
                alt="co²"
              />
              <p className="text-center">
                <span className="h1">153</span>  <sup>gCOe/€</sup>
              </p>
              <p className="text-center">
                Intensité d'émission de gaz à effet de serre
              </p>
            </div>
            <div className="statistic-item">
              <img
                src="images/egalites.png"
                height="60"
                className="mx-auto d-block my-2"
                alt="Egalité"
              />
              <p className="text-center">
                <span className="h1">17,9</span>  <sup>%</sup>
              </p>
              <p className="text-center">
                Ecart de rémunération F/H
              </p>
            </div>
          </div>
        </Container>
      </div>
      <div className="content">
        <Container>
          <section className="py-5">
            <LatestPosts />
          </section>
        </Container>
        <section className="text-center graph-section">
          <Container>
            <h2>Suivi macro-économique</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            </p>
            <Row>
              <Col>
              
                <Graph indic={"GHG"} unit={"gCO² e"} />
              </Col>
              <Col>
               <Graph indic={"WAT"} unit={"L"} />
              </Col>
              <Col>
              <Graph indic={"NRG"} unit={"KJ"}/>
              </Col>
            </Row>
          </Container>
        </section>
        <section className="py-5">
          <Container>
            <Row>
              <Col lg={5}>
                <h2>Une solution Open Data à votre disposition</h2>
                  <p>
                  Nous proposons une solution open data (données ouvertes), c'est à dire, la mise à disposition librement et 
                  gratuitement des données des impacts de la valeur produite par les entreprises françaises.
                    </p> 
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Etiam nunc erat, hendrerit consequat libero a, suscipit auctor risus. 
                    </p>
                    <p>
                    Etiam eros purus, eleifend sed neque pellentesque, blandit ullamcorper quam. Sed eu tempor lectus.
                    Interdum et malesuada fames ac ante ipsum primis in faucibus. 
                    </p>
                    <Button className="me-3 mt-4">
                      Consulter les données
                    </Button>
                    <Button variant="secondary" className="mt-4">
                      Publier mes données
                    </Button>
              </Col>
              <Col>
                <Image src="images/illus.svg" fluid />
              </Col>
            </Row>
          </Container>
        </section>
        <section className="text-center cta-metriz">
          <Container>
            <h2>Mesurez l'empreinte sociétale de votre entreprise</h2>
            <p>
              Utilisez gratuitement notre outils pour mesurer l'empreinte de votre production selon plusieurs enjeux majeurs et comparez
              vos résultats à votre secteur d'activité.
            </p>
            <Row>
              <Col>
              <div className="box">
                <Image src="/images/sustainable.svg" height={80} />
                <h3 className="h6">
                  Le développement durable
                </h3>
              </div>
              </Col>
              <Col>
              <div className="box">
                <Image src="/images/performance.svg" height={80} />
                <h3  className="h6">
                  La performance extra-financière
                </h3>
              </div>
              </Col>
              <Col>
              <div className="box">
                <Image src="/images/goals.svg" height={80} />
                <h3  className="h6">
                  Les engagements sociaux-environementaux
                </h3>
                </div>
              </Col>
            </Row>
            <p>
              <a className="btn btn-secondary " href="https://metriz.lasocietenouvelle.org" target="_blank" rel="noreferrer">
                Utiliser l'outil <i className="bi bi-arrow-right"></i>
              </a>
            </p>
          </Container>
        </section>
        <section className="partenaires">
          <Container>
              <div className="d-flex"></div>
              <div>
                <h4>Ils nous soutiennent</h4>
              </div>
              <div></div>
          </Container>

        </section>

      </div>
    </>
  );
};

export default Home;


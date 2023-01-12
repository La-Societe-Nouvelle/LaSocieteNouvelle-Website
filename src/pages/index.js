// Components

// Modules
import React, {  useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { Button, Col, Container, Image, Row } from "react-bootstrap";
import Graph from "../components/charts/Graph";
import LatestPosts from "../components/posts/LatestPosts";
import axios from "axios";

const Home = () => 
{

  const [pinKeyfigure, setPinKeyFigure] = useState();
  const [geqKeyFigure, setGeqKeyFigure] = useState();
  const [ghgKeyFigure, setGhgKeyFigure] = useState();

  useEffect(() => {
    fetchKeyFiguresData();

  }, []);

  const fetchKeyFiguresData = async() => {

    const getPinKeyFigure = axios.get(
      `http://localhost:8080/serie/MACRO_FINANCIALDATA___FRA_CPMEUR/?area=FRA&aggregate=PIN`
    );

    const getGhgKeyFigure =  axios.get(
        `http://localhost:8080/serie/MACRO_HISTORICALDATA_DISCOUNTED_GHG_FRA_BRANCH?area=FRA&code=TOTAL&aggregate=NVA`
      );
    
    const getGeqKeyFigure = axios.get(
      `http://localhost:8080/serie/MACRO_HISTORICALDATA_DISCOUNTED_GEQ_FRA_BRANCH?area=FRA&code=TOTAL&aggregate=NVA`
    );
      
    await axios
    .all([getPinKeyFigure, getGhgKeyFigure, getGeqKeyFigure])
    .then(
      axios.spread((...responses) => {

        const pinKeyfigure = responses[0];
        const ghgKeyFigure = responses[1];
        const geqKeyFigure = responses[2];

        if (pinKeyfigure.data.header.code == 200) {

          const value = pinKeyfigure.data.data[0].value.toFixed(0);
          const convertedValue = (value / 1000).toFixed(2);
          setPinKeyFigure(convertedValue);
        }
    

        if (ghgKeyFigure.data.header.code == 200) {

          const value = ghgKeyFigure.data.data[0].value.toFixed(0);

          setGhgKeyFigure(value);
        }
    
        if (geqKeyFigure.data.header.code == 200) {
          const value = geqKeyFigure.data.data[0].value.toFixed(1);
          setGeqKeyFigure(value)

        }
   
  
      })
    )
    .catch((error) => {
      console.log(error)
    });

  };

  return (
    <>
      <Helmet>
        <title>
          La Société Nouvelle | Système d'Information national sur les impacts des entreprises 
        </title>
      </Helmet>
      <div className="bloc-statistics pt-5 pb-2 bg-light">
        <Container>
          <Row className="d-flex justify-content-between">
            <Col className="statistic-item" xs={12} lg={4}>
       
              <Image
                src="ESE/icon-ese-bleues/eco.svg"
                height="60"
                className="mx-auto d-block my-2"
                alt="eco"
              />
              <p className="text-center">
                <span className="h1">{pinKeyfigure}</span> <sup> Mds €</sup>
              </p>
              <p className="text-center">Production intérieure nette</p>
            </Col>
            <Col className="statistic-item" xs={12} lg={4}>
              <Image
                src="ESE/icon-ese-bleues/ghg.svg"
                height="60"
                className="mx-auto d-block my-2"
                alt="co²"
              />
              <p className="text-center">
                <span className="h1">{ghgKeyFigure}</span> <sup>gCO₂e/€</sup>
              </p>
              <p className="text-center">
                Intensité d'émission de gaz à effet de serre
              </p>
            </Col>
            <Col className="statistic-item" xs={12} lg={4}>
              <Image
                src="ESE/icon-ese-bleues/idr.svg"
                height="60"
                className="mx-auto d-block my-2"
                alt="Egalité"
              />
              <p className="text-center">
                <span className="h1">{geqKeyFigure}</span> <sup>%</sup>
              </p>
              <p className="text-center">Ecart de rémunération F/H</p>
            </Col>
            <p className="source text-end mt-3">Données estimées par La Société Nouvelle pour l'année 2021 | Sources : Insee, Eurostat et Banque mondiale</p>
          </Row>
        </Container>
      </div>

      <div className="content">
        <Container>
          <section className="py-5">
            <h2>Derniers articles</h2>
            <LatestPosts />
          </section>
        </Container>
        <section className="text-center graph-section ">
          <Container >
            <h2>Suivis macro-économiques</h2>
            <p>
              Indicateurs clefs relatifs à l'empreinte sociale et
              environnementale de l'économie française.
            </p>
            <Row>
              <Col lg={4} xs={12} className="mb-2">
                <Graph indic={"GHG"} />
              </Col>
              <Col lg={4} xs={12} className="mb-2">
                <Graph indic={"WAT"}/>
              </Col>
              <Col lg={4} xs={12} className="mb-2">
                <Graph indic={"NRG"}  />
              </Col>
            </Row>
          </Container>
        </section>
        <section className="py-5" id="open-data">
          <Container>
            <Row>
              <Col lg={5}>
                <h2>
                  Une base de données ouverte sur les impacts de la production
                  des entreprises
                </h2>
                <p>
                  Nous administrons une base de données répertoriant les
                  publications des entreprises françaises sur{" "}
                  <b>l'empreinte sociétale</b> de leur production. La base
                  s'appuie directement sur le répertoire SIRENE.
                </p>
                <p>
                  Les données sont accessibles{" "}
                  <strong>librement et gratuitement</strong> via une API
                  publique ou via notre portail web.
                </p>
                <p>
                  La publication des données est gratuite. Des frais
                  administratifs pourront s'appliquer à partir du 1er janvier
                  2023 afin d'assurer la maintenance des ressources
                  informatiques et la pérennité du service.
                </p>
                <Button className="me-3 mt-4" href="/portail">
                  Consulter les données
                </Button>
                <Button
                  variant="secondary"
                  className="mt-4"
                  href="/publication"
                >
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
              Nous mettons à disposition un outil libre pour mesurer l'empreinte
              de votre production sur des dimensions sociales et
              environnementales clefs. La démarche vous permet de disposer de
              nouveaux ratios de performance et de participer à la construction
              d'une économie durable.
            </p>
            <Row>
              <Col>
                <div className="box">
                  <Image src="/images/performance.svg" height={80} />
                  <h3 className="h6">
                    Comprendre <strong>l'origine de ses impacts</strong> et
                    apprécier son compte de résultats de manière plus juste et
                    plus complète
                  </h3>
                </div>
              </Col>
              <Col>
                <div className="box">
                  <Image src="/images/sustainable.svg" height={80} />
                  <h3 className="h6">
                    <b>Se positionner</b> par rapport à sa branche et aux{" "}
                    <strong>objectifs sociaux et environnementaux</strong> à
                    atteindre pour agir à la hauteur des enjeux
                  </h3>
                </div>
              </Col>
              <Col>
                <div className="box">
                  <Image src="/images/goals.svg" height={80} />
                  <h3 className="h6">
                    Valoriser ses résultats et être identifié comme une
                    entreprise engagée pour la <strong>transition écologique et sociale</strong>
                  </h3>
                </div>
              </Col>
            </Row>
            <p>
              <a
                className="btn btn-secondary "
                href="https://metriz.lasocietenouvelle.org"
                target="_blank"
                rel="noreferrer"
              >
                Utiliser l'outil <i className="bi bi-arrow-right"></i>
              </a>
            </p>
          </Container>
        </section>
        <section className="partenaires ">
          <Container >
            <h3 className="text-center">Avec le soutien de</h3>
            <Row className="align-items-center">
              <Col className="text-center" xs={4} lg={2}>
              <a href="https://www.euratechnologies.com/" target="_blank">
                <Image  fluid src="/partners/euratech.svg" alt="Euratech"></Image>
              </a>
              </Col>
              <Col className="text-center" xs={4} lg={2}>
              <a
                href="https://www.bpifrance.fr/communaute-du-coq-vert"
                target="_blank"
              >
                <Image fluid src="/partners/Coq_Vert_RVB.png" alt="Coq Vert"></Image>
              </a>
              </Col >
              <Col className="text-center" xs={4} lg={2}>
              <a href="https://www.impactfrance.eco/" target="_blank">
                <Image fluid
                  src="/partners/Logo_du_Mouvement_Impact_France.png"
                  alt="Impact France"
                ></Image>
              </a>
              </Col>
              <Col className="text-center" xs={4} lg={2}>
               
              <a href="https://www.bpifrance.fr/" target="_blank">
                <Image fluid src="/partners/bpifrance.svg" alt="BPI France" style={{height:"50px"}}></Image>
              </a>
              </Col>
              <Col className="text-center">
              <a href="https://www.hautsdefrance.fr/" target="_blank">
                <Image fluid
                  src="/partners/HDF-financementLogo-r.png"
                  alt="Financement Hauts-De-France"
                ></Image>
              </a>
              </Col>
              <Col xs={4} lg={2}>
              <Row>
              <Col className="text-center" lg={5} xs={4}> 
                <a href="https://www.economie.gouv.fr/" target="_blank">
                <Image fluid
                  src="/partners/Logotype-rouge-bleu.png"
                  alt="France 2030"
                ></Image>
              </a>
                </Col>
                <Col className="text-center" lg={7}  xs={8}>
                <a href="https://www.economie.gouv.fr/" target="_blank">
                <Image fluid
                  src="/partners/ministere_de_l_economie.svg"
                  alt="Ministère de l'économie "
                ></Image>
              </a>
                </Col>
  
              </Row>
          
              </Col>

            </Row>
          
          </Container>
        </section>
      </div>
    </>
  );
};

export default Home;

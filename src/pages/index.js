// Components

// Modules
import React from "react";
import { Helmet } from "react-helmet";
import { Button, Col, Container, Image, Row } from "react-bootstrap";
import Graph from "../components/Graph";
import LatestPosts from "../components/posts/LatestPosts";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>La société Nouvelle | Système d'Information national sur les impacts des entreprises </title>
      </Helmet>
      <div className="bloc-statistics py-4 bg-light">
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
                <span className="h1">2054</span> <sup> Mrd €</sup>
              </p>
              <p className="text-center">Production intérieure</p>
            </Col>
            <Col className="statistic-item" xs={12} lg={4}>
              <Image
                src="ESE/icon-ese-bleues/ghg.svg"
                height="60"
                className="mx-auto d-block my-2"
                alt="co²"
              />
              <p className="text-center">
                <span className="h1">153</span> <sup>gCO₂e/€</sup>
              </p>
              <p className="text-center">
                Intensité d'émission de gaz à effet de serre
              </p>
            </Col>
            <Col className="statistic-item" xs={12} lg={4}>
              <Image
                src="ESE/icon-ese-bleues/dis.svg"
                height="60"
                className="mx-auto d-block my-2"
                alt="Egalité"
              />
              <p className="text-center">
                <span className="h1">17,9</span> <sup>%</sup>
              </p>
              <p className="text-center">Ecart de rémunération F/H</p>
            </Col>
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
        <section className="text-center graph-section">
          <Container>
            <h2>Suivis macro-économiques</h2>
            <p>
              Indicateurs clefs relatifs à l'empreinte sociale et
              environnementale de l'économie française.
            </p>
            <Row>
              <Col lg={4} xs={12} className="mb-2">
                <Graph indic={"GHG"} unit={"gCO² e"} />
              </Col>
              <Col lg={4} xs={12} className="mb-2">
                <Graph indic={"WAT"} unit={"L"} />
              </Col>
              <Col lg={4} xs={12} className="mb-2">
                <Graph indic={"NRG"} unit={"KJ"} />
              </Col>
            </Row>
          </Container>
        </section>
        <section className="py-5" id="open-data">
          <Container>
            <Row>
              <Col lg={5}>
                <h2>
                  Un base de données ouverte sur les impacts de la production
                  des entreprises
                </h2>
                <p>
                  Nous administrons une base de données répertoriant les
                  publications des entreprises françaises sur{" "}
                  <b>l'empreinte sociétale</b> de leur production. La base
                  s'appuie directement sur le répertoire SIRENE.
                </p>
                <p>
                  Les données sont accessibles <strong>librement et gratuitement</strong> via une API publique ou via notre portail web.
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
                    <b>Se positionner</b> par rapport à sa branche et aux <strong>objectifs sociaux et environnementaux</strong> à
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
        <section className="partenaires">
          <Container>
            <h3 className="text-center">Nos partenaires</h3>
            <div className="d-flex justify-content-between">
              {/* <Image thumbnail src="/partners/easi.jpg" alt="Cabinet comptable Easi"></Image>
              <Image thumbnail src="/partners/logo-te-1.png" alt="Cabinet comptable Terre Entrepreneur"></Image>
              <Image thumbnail src="/partners/logo-valoxy-1.png" alt="Cabinet comptable Valoxy"></Image>
              <Image thumbnail src="/partners/ACE4RSE.jpg" alt="Cabinet comptable ACE4RSE"></Image> */}
              <a href="https://www.euratechnologies.com/" target="_blank">
                <Image
                  thumbnail
                  src="/partners/euratech.svg"
                  alt="Euratech"
                ></Image>
              </a>
              <a
                href="https://www.bpifrance.fr/communaute-du-coq-vert"
                target="_blank"
              >
                <Image
                  thumbnail
                  src="/partners/Coq_Vert_RVB.png"
                  alt="Coq Vert"
                ></Image>
              </a>
              <a href="https://www.impactfrance.eco/" target="_blank">

              <Image
                thumbnail
                src="/partners/Logo_du_Mouvement_Impact_France.png"
                alt="Impact France"
              ></Image>
              </a>
            </div>
          </Container>
        </section>
      </div>
    </>
  );
};

export default Home;

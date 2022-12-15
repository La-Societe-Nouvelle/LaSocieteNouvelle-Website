import React from "react";
import { Col, Container, Image, Row, Tab, Tabs } from "react-bootstrap";
import { Helmet } from "react-helmet";
import IndicatorsPanel from "../components/indic/IndicatorsPanel";
import PageHeader from "../components/PageHeader";

const first_set_indics = ["eco", "art", "knw", "soc", "idr", "geq"];
const second_set_indics = ["ghg", "nrg", "wat", "was", "mat", "haz"];

const impacts_euro = [
  "5400 kJ d'énergie",
  "17.4 L d'eau",
  "158 gCO₂e de gaz à effet de serre",
  "78% de production française",
];

const Approche = () => {
  return (
    <>
      <Helmet>
        <title>La Société Nouvelle | Notre approche </title>
      </Helmet>
      <PageHeader title={"Notre approche"} path={"notre-approche"} />
      <section>
        <Container>
          <Row>
            <Col>
              <h3>Mesurer l'Empreinte Sociétale de l'Entreprise</h3>
              <p>
                L’Empreinte Sociétale de l’Entreprise (ESE) est un panel
                d’indicateurs extra-financiers sociaux et environnementaux
                relatif à la production vendue d’une entreprise. Elle exprime
                sur des dimensions sociales et environnementales (émissions de
                gaz à effet de serre, écart de rémunérations femmes/hommes,
                consommation d’eau, etc.) les impacts d’un euro de production
                vendue.
              </p>
              <p>
                L’Empreinte Sociétale complète ainsi une approche RSE, en
                ciblant des enjeux communs sur lesquels chaque entreprise doit
                rendre compte de son impact (même s’il ne s’agit pas d’un enjeu
                majeur pour elle).
              </p>
            </Col>
            <Col>
              <div id="empreinte-societale-illustration" className="cta">
                <Ese_scrolling_informations />
                <Image
                  id="icon-euro"
                  src="/images/coin-brf-1-white.png"
                  alt="icon-euro"
                />
                <svg id="empreinte-societale-traits" viewBox="0 0 200 100">
                  <line id="trait-diagonal" x1="125" y1="35" x2="150" y2="10" />
                  <line
                    id="trait-horizontal"
                    x1="149"
                    y1="10"
                    x2="200"
                    y2="10"
                  />
                </svg>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section>
        <Container>
          <h3>Les indicateurs </h3>
          <p>
            Aujourd’hui le panel comprend 12 indicateurs : 6 indicateurs
            socio-économiques et 6 indicateurs environnementaux. Le choix des
            indicateurs s’appuient sur les 17 Objectifs de Développement Durable
            émis par l’ONU (Organisation des Nations Unies) en 2015, pour
            l’horizon 2030. Les indicateurs sont évolutifs – ajout, modification
            de la définition, retrait – pour cibler les enjeux critiques et
            pertinents à l’échelle de l’entreprise. Un comité de gouvernance des
            indicateurs est en cours de constitution.
          </p>
          <Tabs defaultActiveKey="soc" className="mb-3 panel-indicateurs">
            <Tab
              eventKey="soc"
              title="Indicateurs
                socio-économiques"
            >
         
              <IndicatorsPanel indics={first_set_indics} />
            </Tab>
            <Tab
              eventKey="env"
              title="Indicateurs
                environnementaux"
            >
      
              <IndicatorsPanel indics={second_set_indics} />
            </Tab>
          </Tabs>
        </Container>
      </section>
    </>
  );
};
const Ese_scrolling_informations = () => {
  const [indexContent, setIndexContent] = React.useState(0);
  const updateText = () => {
    setIndexContent((indexContent + 1) % impacts_euro.length);
  };

  setTimeout(updateText, 3000);

  return <p>{impacts_euro[indexContent]}</p>;
};

export default Approche;

import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import IndicatorsPanel from "../components/indic/IndicatorsPanel";
import PageHeader from "../components/PageHeader";
import metaData from "../lib/metaData";

const first_set_indics = ["eco", "art", "knw", "soc", "dis", "geq"];
const second_set_indics = ["ghg", "nrg", "wat", "was", "mat", "haz"];

const impacts_euro = [
  "5400 kJ d'énergie",
  "17.4 L d'eau",
  "158 gCO2e de gaz à effet de serre",
  "78% de production française",
];

const Approche = () => {
  return (
    <>
      <PageHeader title={"Notre approche"} path={"notre-approche"} />
      <section>
        <Container>
          <Row>
            <Col>
              <h3>Calcul de l'empreinte sociétale</h3>
              <p>
                L’Empreinte Sociétale est un Panel d’Indicateurs qui rend compte
                des impacts d’un euro de production vendue, sur des dimensions
                sociales et environnementales clefs.
              </p>
            </Col>
            <Col>
              <div id="empreinte-societale-illustration" className="cta">
                <Ese_scrolling_informations />
                <img
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
          <h3>Indicateurs socio-économiques</h3>
          <IndicatorsPanel indics={first_set_indics} />
        </Container>
      </section>
      <section>
        <Container>
          <h3> Indicateurs environnementaux</h3>

          <IndicatorsPanel indics={second_set_indics} />
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

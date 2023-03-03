import React from "react";
import { Col, Container, Image, Row, Tab, Tabs } from "react-bootstrap";
import { Helmet } from "react-helmet";
import IndicatorsPanel from "../components/indic/IndicatorsPanel";
import PageHeader from "../components/PageHeader";
import { DocButton } from "../components/buttons/DocButton";

const first_set_indics = ["eco", "art", "knw", "soc", "idr", "geq"];
const second_set_indics = ["ghg", "nrg", "wat", "was", "mat", "haz"];

const Approche = () => {
  return (
    <>
      <Helmet>
        <title>La Société Nouvelle | Notre approche </title>
      </Helmet>
      <PageHeader
        title={"Notre approche"}
        path={"mesurer-empreinte-societale"}
        hasBreadcrumbs={false}
      />
      <section>
        <Container>
          <Row>
            <Col>
              <h2>Mesurer l'Empreinte Sociétale de l'Entreprise</h2>
              <p>
                L'Empreinte Sociétale de l'Entreprise (ESE) est un panel
                d'indicateurs extra-financiers sociaux et environnementaux
                relatif à la production vendue d'une entreprise. Elle exprime
                sur des dimensions sociales et environnementales (émissions de
                gaz à effet de serre, écart de rémunérations femmes/hommes,
                consommation d'eau, etc.) les impacts d'un euro de production
                vendue.
              </p>
              <p>
                L'Empreinte Sociétale complète ainsi une approche RSE, en
                ciblant des enjeux communs sur lesquels chaque entreprise doit
                rendre compte de son impact (même s'il ne s'agit pas d'un enjeu
                majeur pour elle).
              </p>
            </Col>
            <Col></Col>
          </Row>
        </Container>
      </section>
      <section className="bg-light-secondary">
        <Container>
          <Row>
            <Col lg={{ span: 6, offset: 3 }}>
              <div className="text-center">
                <p className="fw-bold">
                  Pour en savoir plus au sujet de nos méthodes de calcul, le
                  guide d'utilisation ou encore concernant les données
                  utilisées, consultez notre espace de documentation.
                </p>
                <DocButton />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section>
        <Container>
          <h2>Les indicateurs </h2>
          <p>
            Aujourd'hui le panel comprend 12 indicateurs : 6 indicateurs
            socio-économiques et 6 indicateurs environnementaux. Le choix des
            indicateurs s'appuient sur les 17 Objectifs de Développement Durable
            émis par l'ONU (Organisation des Nations Unies) en 2015, pour
            l'horizon 2030. Les indicateurs sont évolutifs - ajout, modification
            de la définition, retrait - pour cibler les enjeux critiques et
            pertinents à l'échelle de l'entreprise. Un comité de gouvernance des
            indicateurs est en cours de constitution.
          </p>
          <Tabs defaultActiveKey="soc" className="mR-5 panel-indicateurs" fill>
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

export default Approche;

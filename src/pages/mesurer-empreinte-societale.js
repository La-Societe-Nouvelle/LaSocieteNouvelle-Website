import React from "react";
import {
  Button,
  ButtonGroup,
  Col,
  Container,
  Image,
  Row,
  Tab,
  Tabs,
} from "react-bootstrap";
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
        <title>La Société Nouvelle | Notre approche : Mesurer l'empreinte sociétale des entreprises</title>
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
            <Col className="text-end">
              <Image
                fluid
                src="/illustrations/metriz_illus.svg"
                alt="Illustration Application mesure impact"
              />
            </Col>
          </Row>
        </Container>
      </section>
      <section>
        <Container>
          <h3 className="mb-4">Les indicateurs </h3>
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
          <Tabs defaultActiveKey="soc" className="mt-4 panel-indicateurs" fill>
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

          <div className="text-center mt-5">
            <hr></hr>
            <h4 className="h2 mt-5">Gourvernance des indicateurs</h4>
            <p>
              Nous travaillons en continu sur les indicateurs disponibles: choix
              méthodologiques, données utilisées, outils supports, suivi à
              l'échelle macroéconomique, définition des objectifs, etc.La
              gouvernance a vocation à être externalisée et partagée avec des
              organismes publics et privés.
            </p>
            <p>
              Pour en savoir plus au sujet de nos méthodes de calcul, le guide
              d'utilisation ou encore concernant les données utilisées,
              consultez notre espace de documentation.
            </p>
            <ButtonGroup>
              <Button>Les indicateurs</Button>
              <Button variant="info">La Documentation</Button>
            </ButtonGroup>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Approche;

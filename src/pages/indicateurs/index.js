import React from "react";
import { Helmet } from "react-helmet";

// Components

import metaData from "../../lib/metaData";
import { Badge, Button, Card, Col, Container, Image, Row } from "react-bootstrap";
import PageHeader from "../../components/PageHeader";

const lightenColor = (colorHex, lumFactor) => 
{
  let r = parseInt(colorHex.substr(1,2), 16);
  let g = parseInt(colorHex.substr(3,2), 16);
  let b = parseInt(colorHex.substr(5,2), 16);
  let total = r+g+b;

  let lighten_r = parseInt(r + ((255-r)/(765-total))*(lumFactor*(765-total)));
  let lighten_g = parseInt(g + ((255-g)/(765-total))*(lumFactor*(765-total)));
  let lighten_b = parseInt(b + ((255-b)/(765-total))*(lumFactor*(765-total)));

  const ligtenColor = "#"+lighten_r.toString(16)+lighten_g.toString(16)+lighten_b.toString(16);
	return ligtenColor;
}

const IndicVisual = ({indic}) => {
  let ligtenColor = lightenColor(metaData[indic].primaryColor, 0.7)
  return(
    <Card className="indics text-center border border-2 h-100 pb-3">
      <div className="visual p-4 d-flex align-items-center" style={{backgroundColor: ligtenColor, height: "200px"}}>
        {metaData[indic].section && 
          <span className="badge bg-primary rounded-1 me-1" style={{backgroundColor: "#F65656", position: "absolute", top: "2%", left: "3%"}}>
            {metaData[indic].section}
          </span>}
        <Image
          src={"/ESE/gen2/illustration-g2-" + indic + ".png"}
          alt={"Pictogramme " + indic}
          style={{aspectRatio: "auto", maxHeight: "75px", width: "auto"}}
        />
      </div>
      <div className="d-flex ms-3 mt-3">
        {metaData[indic].odds.map((odd, index) => (
          <Image
            key={index}
            className="F-WEB-Goal"
            src={"/images/odd/F-WEB-Goal-" + odd + ".png"}
            style={{width: "25px", margin: "0 2px"}}
            alt="F-WEB-Goal"
          />
        ))}
      </div>
      <div className="mx-3 mt-2 text-start flex-grow-1">
        <div>
          <span className="badge rounded-1 me-1" style={{backgroundColor: "#36C575"}}>
            Valide
          </span>
          {metaData[indic].esrs && 
            <span className="badge rounded-1 me-1" style={{backgroundColor: "#202B3D"}}>
              {metaData[indic].esrs}
            </span>}
          {metaData[indic].hasTarget && 
            <span className="badge rounded-1 me-1" style={{backgroundColor: "#F65656"}}>
              Objectif sectoriel
            </span>}
        </div>
        <h3 className="mt-3 mb-2 mx-0">
          <a href={"/indicateurs/" + indic} title={metaData[indic].libelle}>
            {metaData[indic].libelle}
          </a>
        </h3>
        <p>
          {metaData[indic].description}
        </p>
      </div>
      <div className="text-end mx-3">
        <Button
          className="rounded-0 px-5 py-1"
          href={"/indicateurs/"+indic}
          title="Details"
          variant="outline"
        >
          Détails
        </Button>
      </div>
    </Card>
  )
}

export default function Home() {
  return (
    <>
      <Helmet>
        <title>La Société Nouvelle | Liste des indicateurs </title>
      </Helmet>
      <PageHeader
        title="Les indicateurs de l'Empreinte Sociétale"
        prev={"mesurer-empreinte-societale"}
        prevTitle={"Méthodologie"}
        path={"indicateurs/"}
      />
      {/* <section>
        <p>
          L'Empreinte Sociétale de l'Entreprise (ESE) est un panel d'indicateurs extra-financiers sociaux et environnementaux relatif à la production vendue d'une entreprise. Elle exprime sur des dimensions sociales et environnementales (émissions de gaz à effet de serre, écart de rémunérations femmes/hommes, consommation d'eau, etc.) les impacts d'un euro de production vendue.
        </p>
        <p>
          Nous travaillons en continu sur les indicateurs disponibles : choix méthodologiques, données utilisées, outils supports, suivi à l'échelle macroéconomique, définition des objectifs, etc. La gouvernance a vocation à être externalisée et partagée avec des organismes publics et privés.
        </p>
      </section> */}
      <section className="indic">
        <Container>
          <h2>Panel d'indicateurs de l'Empreinte Sociétale</h2>
          <p>Dernière mise à jour : 01/03/2025</p>
          <Row className="my-5">
            {metaData.indics.map((indic, index) => (
              <Col lg={3} key={index} className="mb-4">
                <IndicVisual indic={indic} />
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </>
  );
}

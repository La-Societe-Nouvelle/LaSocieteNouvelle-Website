import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

import { Button, Col, Container, Image, Row } from "react-bootstrap";
import { Helmet } from "react-helmet";
import PageHeader from "../../components/PageHeader";

import metaData from "../../lib/metaData";
import odds_targets from "../../lib/odds_targets";
import TrendChart from "../../components/charts/TrendChart";

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

const IndicPresentation = () => 
{
  const router = useRouter();
  const [indic, setIndic] = useState(router.query.indic);

  useEffect(async () => {
    setIndic(router.query.indic);
  }, [router, indic]);

  const indicData = metaData[indic];

  if (!indicData) {
    return(
      <>
        <Helmet>
          <title>La Société Nouvelle</title>
        </Helmet>
        <PageHeader
          title={"Indicateur introuvable"}
          prev={"indicateurs"}
          prevTitle={"Liste des indicateurs"}
          path={"indicateurs/"}
        />
        <section>

        </section>
      </>
    )
  } else {
    return (
      <>
        <Helmet>
          <title>La Société Nouvelle | {indicData?.libelle || ""} </title>
        </Helmet>
        <PageHeader
          title={indicData?.libelle || ""}
          prev={"indicateurs"}
          prevTitle={"Liste des indicateurs"}
          path={"indicateurs/"+indic}
        />
        <section>
          <Container>
            <Row>
              <Col>
                {metaData.odds_ese.map((odd, index) => (
                  <Image
                    key={index}
                    className="F-WEB-Goal"
                    src={"/images/odd/F-WEB-Goal-" + odd + ".png"}
                    style={{width: "75px", margin: "0 4px", opacity: indicData?.odds.includes(odd) ? "100%" : "25%"}}
                    alt="F-WEB-Goal"
                  />
                ))}
                <div className="d-flex mt-5">
                  <Image src={"/ESE/gen2/illustration-g2-"+indic+".png"} height="40" className="mb-3 me-4" />
                  <h1>{indicData?.libelle}</h1>
                </div>
                <div className="mt-2 mb-5">
                  <p>
                    <b>Codification : </b> {indic?.toUpperCase()}
                  </p>
                </div>
                <h2>Présentation</h2>
                <div className="mb-3 mb-5">
                  <p>
                    L'indicateur vise à informer sur l'utilisation de la ressource
                    eau. Il s'inscrit dans une volonté de gestion globale des
                    ressources naturelles, et occupe une importance particulière
                    dans un contexte de diminution des quantités d'eau disponibles,
                    conséquence du dérèglement climatique.
                  </p>
                </div>
                <h2>Objectifs de Développement Durable</h2>
                <div className="mb-3 pb-4">
                  <h3>Liste des objectifs associés à l'indicateur</h3>
                  <div className="d-flex my-3">
                    {indicData?.odds.map((odd, index) => (
                      <Image
                        key={index}
                        className="F-WEB-Goal"
                        src={"/images/odd/F-WEB-Goal-" + odd + ".png"}
                        style={{width: "50px", margin: "0 4px"}}
                        alt="F-WEB-Goal"
                      />
                    ))}
                  </div>
                  <h3>Détails des cibles</h3>
                  <div>
                    <table className="odds-targets-table" responsive>
                      <thead style={{backgroundColor: lightenColor(indicData.primaryColor, 0.7)}}>
                        <tr>
                          <th className="px-3">Code</th>
                          <th className="px-3">Description de la cible</th>
                        </tr>
                      </thead>
                      <tbody style={{backgroundColor: lightenColor(indicData.primaryColor, 0.95)}}>
                        {indicData.odds_targets.map((target,index) =>
                          <tr key={index}>
                            <th className="text-center">{target}</th>
                            <th className="px-2 py-2">{odds_targets[target]}</th>
                          </tr>)}
                      </tbody>
                    </table>
                  </div>
                </div>
                <h2>Impact direct mesuré</h2>
                <div className="mb-3 pb-4">
                  <p>
                    <b>Grandeur mesurée : </b>Quantité consommée d’eau (en m³)
                  </p>
                  <p>
                    Les prélèvements d’eau avec restitution dans le milieu d’origine,
                    sans traitement, ne sont pas comptabilisés.
                  </p>
                  <p>
                    Note : L'impact direct est associé à la valeur ajoutée nette de
                    l'entreprise. Pour la valeur produite, la mesure est complétée par
                    les impacts indirects liés aux consommations et aux
                    amortissements, obtenus à partir des données des entreprises
                    sollicitées.
                  </p>
                </div>
                <h2>Suivi macroéconomique</h2>
                <div className="mb-3 pb-4">
                  {indicData &&
                    <Row className="h-100">
                      <Col lg={12} className="w-75">
                        <h3>Empreinte de la production française</h3>
                        <TrendChart
                          indic={indic.toUpperCase()}
                          country="FRA"
                          industry="TOTAL"
                          aggregate="PRD"
                        />
                      </Col>
                    </Row>}
                </div>
              </Col>
            </Row>
          </Container>
        </section>
        {/* <Button
          variant="primary"
          href="https://docs.lasocietenouvelle.org/empreinte-societale/indicateurs/indicateur-wat"
          target="_blank"
          rel="noreferrer"
        >
          Documentation
        </Button> */}
      </>
    );
  }
};

export default IndicPresentation;

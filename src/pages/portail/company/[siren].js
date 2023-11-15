import React, { useEffect, useState } from "react";
import {
  Badge,
  Button,
  Col,
  Container,
  Image,
  Row,
} from "react-bootstrap";

import { Helmet } from "react-helmet";
import { useRouter } from "next/router";

import axios from "axios";
import ErrorAlert from "../../../components/Error";
import { ContentSocialFootprint } from "../../../components/portal/ContentSocialFootprint";

const CompanyData = () => {
  const router = useRouter();

  const [siren, setSiren] = useState(router.query.siren);
  const [error, setError] = useState();

  const [dataFetched, isDataFetched] = useState(false);
  const [legalUnit, setLegalUnit] = useState();
  const [footprint, setFootprint] = useState();
  const [additionnalData, setAdditionnalData] = useState();
  const [divisionFootprint, setDivisionFootpint] = useState();
  const [historicalDivisionFootprint, setHistoricalDivisionFootprints] = useState();

  const [meta, setMeta] = useState();

  useEffect(async () => {
    setSiren(router.query.siren);

    if (siren) {
      await getLegalUnitFootprint(siren);
    }
  }, [router, siren]);

  useEffect(async () => {
    if (legalUnit) {
      const code = legalUnit.activitePrincipaleCode.slice(0, 2);
      await getDivisionFootprint(code);
      await getHistoricalDivisionFootprint(code);
    }
  }, [legalUnit]);

  async function getLegalUnitFootprint(siren) {
    axios
      .get(`${process.env.NEXT_PUBLIC_API_URL}/legalunitFootprint/${siren}`)
      .then((response) => {
        if (response.data.header.code == 200) {
          setLegalUnit(response.data.legalUnit);
          setFootprint(response.data.footprint);
          setAdditionnalData(response.data.additionnalData);
          setMeta(response.data.metaData);
        } else {
          setError(response.data.header);
        }
      })
      .catch((error) => {
        setError({ code: 500 });
        return error;
      });
  }
  async function getDivisionFootprint(code) {

    axios
      .get(
        `${process.env.NEXT_PUBLIC_API_URL}/defaultfootprint/?code=${code}&aggregate=PRD&area=FRA`
      )
      .then((response) => {
        isDataFetched(true);
        if (response.data.header.code == 200) {
          setDivisionFootpint(response.data.footprint);
        } else {
          setError(response.data.header);
        }
      })
      .catch((error) => {
        setError({ code: 500 });
        return error;
      });
  }
  async function getHistoricalDivisionFootprint(code) {

    axios
      .get(
        `${process.env.NEXT_PUBLIC_API_URL}/macrodata/macro_fpt_a88?division=${code}&aggregate=PRD&area=FRA`
      )
      .then((response) => {
        isDataFetched(true);
        if (response.data.header.code == 200) {
          let divisionFootprints = {};
          response.data.data.forEach(element => {
            const indic = element.indic;
            if (!divisionFootprints[indic]) {
              divisionFootprints[indic] = []; 
            }
            
            divisionFootprints[indic].push(element);
          });
          setHistoricalDivisionFootprints(divisionFootprints);
        } else {
          setError(response.data.header);
        }
      })
      .catch((error) => {
        setError({ code: 500 });
        return error;
      });
  }
  return (
    <>
      <Helmet>
        <title>
          {` Portail La Société Nouvelle | Empreinte sociétale de l'entreprise #` +
            siren}
        </title>
      </Helmet>
      <section className="open-data-portal bg-light">
        <Container>
          {!error && !dataFetched && (
            <div className="bg-white p-5 rounded-3">
              <h2 className="text-center">
                Empreinte Sociétale de l'entreprise <b>#{siren}</b>
              </h2>
              <div className="text-center">
                <p>Chargement des données... </p>
                <div className="dot-pulse m-auto"></div>
              </div>
            </div>
          )}
          {error && <ErrorAlert code={error.code} />}
          {dataFetched && footprint && divisionFootprint && meta && (
            <>
              <div className="legalUnit bg-white mb-4 p-5 rounded-3 ">
                <Row>
                  <h1 className=" h2 mb-4 border-bottom border-3 pb-2">
                    Empreinte Sociétale de l'entreprise
                  </h1>
                  <Col lg={4}>
                    <h2 className="text-wrap mb-2">
                      {legalUnit.statutdiffusion
                        ? legalUnit.denomination
                        : legalUnit.siren}
                    </h2>
                    {!legalUnit.statutdiffusion && (
                      <p
                        className="small"
                        title="Informations partiellement rendues publiques par l'entreprise"
                      >
                        <i className="bi bi-exclamation-triangle-fill">
                          {" "}
                          Diffusion partielle
                        </i>
                      </p>
                    )}
                    {legalUnit.statutdiffusion &&
                      legalUnit.denominationUsuelle && (
                        <h3>({legalUnit.denominationUsuelle})</h3>
                      )}

                    {legalUnit.societeMission && (
                      <Badge pill bg="secondary" className="me-2">
                        Société à mission
                      </Badge>
                    )}
                    {legalUnit.economieSocialeSolidaire && (
                      <Badge pill bg="secondary" className="me-2">
                        Économie sociale et solidaire
                      </Badge>
                    )}
                    {legalUnit.hasCraftedActivities && (
                      <Badge pill bg="secondary" className="">
                        Activité(s) enregistrée(s) au registre des métiers
                      </Badge>
                    )}
                  </Col>
                  <Col>
                    <p>
                      <b>SIREN</b> : {legalUnit.siren}
                    </p>
                    <p>
                      <b>Activité principale </b> :{" "}
                      {legalUnit.activitePrincipaleLibelle} (
                      {legalUnit.activitePrincipaleCode})
                    </p>
                    <p>
                      <b>Siège</b>:{" "}
                      {legalUnit.statutdiffusion
                        ? `${legalUnit.codePostalSiege} ${legalUnit.communeSiege}`
                        : legalUnit.communeSiege}
                    </p>
                  </Col>
                </Row>
              </div>
              <div className="footprint">
                <ContentSocialFootprint
                  footprint={footprint}
                  meta={meta}
                  historicalDivisionFootprint={historicalDivisionFootprint}
                  divisionFootprint={divisionFootprint}
                  additionnalData={additionnalData}
                />
              </div>
            </>
          )}
          <p className="text-end mt-3">
            <Button
              title="Retour au portail"
              href="/portail"
              variant="secondary"
              size="sm"
            >
              « Retour
            </Button>
          </p>
        </Container>
      </section>
      <section className="bg-white">
        <Container>
          <Row>
            <Col>
              <div className="border border-3 p-5 rounded-3 mt-3">
                <Image
                  src="/illustrations/default-data-illu.png"
                  alt="Illustration calcul données par défaut"
                  className="mx-auto d-block"
                />
                <h4 className="my-3 text-center">
                  A quoi correspondent les valeurs par défaut ?
                </h4>
                <p className="my-4">
                  Les données par défaut correspondent aux valeurs utilisées
                  lorsque l'empreinte sociétale d'une entreprise n'est pas
                  publiée. Elles visent à permettre une estimation des impacts
                  indirects d'une dépense auprès de cette entreprise, en
                  s'appuyant sur ses caractéristiques (activité principale,
                  effectifs, etc.).
                </p>
                <div className="text-center">
                  <Button
                    variant="primary"
                    size="sm"
                    href="https://docs.lasocietenouvelle.org/donnees"
                    target="_blank"
                    title="Accéder à la documentation complète"
                  >
                    Voir la documentation
                  </Button>
                </div>
              </div>
            </Col>
            <Col>
              <div className="border border-3 p-5 rounded-3 mt-3">
                <Image
                  src="/illustrations/publish-footprint-illu.png"
                  alt="Illustration publication de données"
                  className="mx-auto d-block"
                />
                <h4 className="my-3 text-center">
                  Comment publier mon empreinte sociétale ?
                </h4>
                <p className="my-4">
                  Une demande de publication doit être envoyée via le formulaire
                  de publication, accessible ci-dessous. Un outil libre et open
                  source est à votre disposition pour faciliter la mesure des
                  indicateurs. Vous pouvez également solliciter votre expert
                  comptable sur ce sujet.
                </p>
                <div className="text-center">
                  <Button
                    variant="secondary"
                    size="sm"
                    href="/publier-empreinte"
                    target="_blank"
                    title="Publier directement vos résultats"
                    className="me-2"
                  >
                    Publier mon empreinte
                  </Button>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};





export default CompanyData;

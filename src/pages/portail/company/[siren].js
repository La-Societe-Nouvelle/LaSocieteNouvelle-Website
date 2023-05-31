import React, { useEffect, useState } from "react";
import {
  Accordion,
  Badge,
  Button,
  Col,
  Container,
  Image,
  Modal,
  Row,
} from "react-bootstrap";

import { Helmet } from "react-helmet";
import { useRouter } from "next/router";

import Chart from "chart.js/auto";
import ChartDataLabels from "chartjs-plugin-datalabels";

Chart.register(ChartDataLabels);

import { Bar } from "react-chartjs-2";

import axios from "axios";
import ErrorAlert from "../../../components/Error";
import Description from "../../indicateurs/parts/Description";
import AdditionalDataChart from "../../../components/charts/AdditionalDataChart";
import FootprintDataChart from "../../../components/charts/FootprintDataChart";

const CompanyData = () => {
  const router = useRouter();

  const [siren, setSiren] = useState(router.query.siren);
  const [error, setError] = useState();

  const [dataFetched, isDataFetched] = useState(false);
  const [legalUnit, setLegalUnit] = useState();
  const [footprint, setFootprint] = useState();
  const [additionnalData, setAdditionnalData] = useState();
  const [divisionFootprint, setDivisionFootpint] = useState();
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
                    <h2 className="text-wrap mb-2">{legalUnit.denomination}</h2>
                    {legalUnit.denominationUsuelle && (
                      <h3>( {legalUnit.denominationUsuelle} )</h3>
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
                      <b>Siège</b> :{" "}
                      {legalUnit.codePostalSiege + " " + legalUnit.communeSiege}
                    </p>
                  </Col>
                </Row>
              </div>
              <div className="footprint">
                <ContentSocialFootprint
                  footprint={footprint}
                  meta={meta}
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
                    href="/publication"
                    target="_blank"
                    title="Publier directement vos résultats"
                    className="me-2"
                  >
                    Publier mon empreinte
                  </Button>
                  <Button
                    variant="outline-secondary"
                    size="sm"
                    href="https://metriz.lasocietenouvelle.org"
                    target="_blank"
                    title="Mesurer l'empreinte sociétale de votre entreprise"
                  >
                    Mesurer mon empreinte{" "}
                    <i className="bi bi-box-arrow-up-right"></i>
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

/* Body of the page : Viewing the "EmpreinteSocietale" aka "ESE" */
function ContentSocialFootprint({
  footprint,
  meta,
  divisionFootprint,
  additionnalData,
}) {
  //  INDICATORS CATEGORIES
  const valueCreation = ["ECO", "ART", "SOC"];
  const socialFootprint = ["IDR", "GEQ", "KNW"];
  const environmentalFootprint = ["GHG", "NRG", "WAT", "MAT", "WAS", "HAZ"];
  const additionnalIndicators = ["IEP"];

  const valueCreationList = Object.fromEntries(
    Object.entries(footprint).filter(([key]) => valueCreation.includes(key))
  );
  const socialFootprintList = Object.fromEntries(
    Object.entries(footprint).filter(([key]) => socialFootprint.includes(key))
  );
  const environmentalFootprintList = Object.fromEntries(
    Object.entries(footprint).filter(([key]) =>
      environmentalFootprint.includes(key)
    )
  );
  const additionnalIndicatorsList = Object.fromEntries(
    Object.entries(additionnalData).filter(([key]) =>
      additionnalIndicators.includes(key)
    )
  );

  const valueCreationComponents = Object.entries(valueCreationList).map(
    ([key, data]) => (
      <IndicatorDetails
        key={key}
        code={key}
        unitSymbol={meta[key].unitSymbol}
        indicatorLabel={meta[key].indicatorLabel}
        source={meta[key].source}
        divisionFootprint={divisionFootprint}
        {...data}
      />
    )
  );

  const socialFootprintComponents = Object.entries(socialFootprintList).map(
    ([key, data]) => (
      <IndicatorDetails
        key={key}
        code={key}
        unitSymbol={meta[key].unitSymbol}
        indicatorLabel={meta[key].indicatorLabel}
        source={meta[key].source}
        divisionFootprint={divisionFootprint}
        {...data}
      />
    )
  );
  const environmentalFootprintComponents = Object.entries(
    environmentalFootprintList
  ).map(([key, data]) => (
    <IndicatorDetails
      key={key}
      code={key}
      unitSymbol={meta[key].unitSymbol}
      indicatorLabel={meta[key].indicatorLabel}
      source={meta[key].source}
      divisionFootprint={divisionFootprint}
      {...data}
    />
  ));

  const additionnalIndicatorsComponents = Object.entries(
    additionnalIndicatorsList
  ).map(([key, data]) => (
    <AdditionnalIndicatorDetails
      key={key}
      code={key}
      unitSymbol={meta[key].unitSymbol}
      indicatorLabel={meta[key].indicatorLabel}
      source={meta[key].source}
      divisionFootprint={divisionFootprint}
      {...data}
    />
  ));

  return (
    <Row className="indic-details">
      <Accordion defaultActiveKey={["0", "1", "2", "3"]} alwaysOpen>
        <Accordion.Item eventKey="0">
          <Accordion.Header as={"h3"}>Création de la valeur</Accordion.Header>
          <Accordion.Body>
            <Row>{valueCreationComponents}</Row>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Empreinte sociale</Accordion.Header>
          <Accordion.Body>
            <Row> {socialFootprintComponents}</Row>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>Empreinte environnementale</Accordion.Header>
          <Accordion.Body>
            <Row>{environmentalFootprintComponents}</Row>
          </Accordion.Body>
        </Accordion.Item>
        {additionnalIndicatorsComponents.length > 0 && (
          <Accordion.Item eventKey="3">
            <Accordion.Header>Autres indicateurs disponibles</Accordion.Header>
            <Accordion.Body>
              <Row>{additionnalIndicatorsComponents}</Row>
            </Accordion.Body>
          </Accordion.Item>
        )}
      </Accordion>
    </Row>
  );
}

const getFlagLabel = (flag) => {
  switch (flag) {
    case "p":
      return "Valeur publiée";
      break;
    case "e":
      return "Valeur Estimée";
    default:
      return "Valeur par défaut";
      break;
  }
};
/* Basic indicator view */
const IndicatorDetails = ({
  code,
  flag,
  lastupdate,
  info,
  description,
  indicatorLabel,
  uncertainty,
  source,
  year,
  value,
  unitSymbol,
  divisionFootprint,
  historicalData
}) => {
  const [modalOpen, setModalOpen] = useState(null);

  const legalUnitValue = Math.round(10 * value) / 10;
  const divisionValue = Math.round(10 * divisionFootprint[code].value) / 10;

  return (
    <Col key={code} className="my-4" lg={4}>
      <div className="p-3 border border-3 rounded-3">
        <div className="indic-title">
          <div className="indic-icon">
            <Image
              height="20px"
              src={"/ESE/icon-ese-bleues/" + code.toLowerCase() + ".svg"}
              alt={code}
            />
          </div>
          <div>
            <h3 className="h6">{indicatorLabel} </h3>
            <p className="source mt-1">
              <a
                href={"/indicateurs/" + code.toLowerCase()}
                target="_blank"
                className="text-primary"
                title="Plus d'informations sur l'indicateur"
              >
                Informations sur l'indicateur &raquo;
              </a>
            </p>
          </div>
        </div>
        <div className="text-end">
          <Badge
            pill
            bg="light"
            className="ms-2 text-primary"
            title="Plus de détails"
          >
            <i className="bi bi-plus-circle-fill"></i>{" "}
            <button className="btn-badge" onClick={() => setModalOpen(code)}>
              Détails &raquo;
            </button>
          </Badge>
        </div>
        <p className="source mt-3 mb-0 fw-bold">{unitSymbol}</p>
        <FootprintDataChart
          historicalValues={historicalData}
          latestValue={legalUnitValue}
          divisionFootprint={divisionFootprint[code]}
          unit={unitSymbol}
          flag={flag}
          year={year}
        />
        <div className="mb-3 d-flex justify-content-evenly">
          {flag == "p" && (
            <Badge pill bg="secondary" title="Valeur publiée par l'entreprise">
              Valeur Publiée
            </Badge>
          )}
          {flag == "d" && (
            <Badge
              pill
              bg="primary"
              title="Valeur proposée à partir de données statistiques"
            >
              Valeur par défaut
            </Badge>
          )}
          {flag == "e" && (
            <Badge
              pill
              bg="light-secondary"
              title="Valeur estimée à partir de données publiées par l'entreprise"
            >
              Valeur estimée
            </Badge>
          )}
          {flag == "r" && (
            <Badge
              pill
              bg="light-secondary"
              title="Valeur issue d'un reporting"
            >
              Valeur issue d'un reporting
            </Badge>
          )}
             <Badge
              pill
              bg="warning"
              title="Valeur de la branche"
            >
              Valeur de la branche
            </Badge>
          {/* {year && year != "NA" && (
            <Badge pill bg="year" title="Année de référence">
              {year}
            </Badge>
          )} */}

          {/* <Badge
            pill
            bg="light"
            className="ms-2 text-body"
            title="Intervalle de confiance "
          >
            {Math.round(uncertainty)} % d'incertitude
          </Badge> */}
        </div>

        <div className="mt-2">
          {/* <p className="source mb-0">
            Incertitude ({getFlagLabel(flag)}) : 
            <br></br> {Math.round(uncertainty)} %
          </p> */}
          <p className="source mb-0">
            Source (Valeur de la branche) : {divisionFootprint[code].source} 
          </p>
        </div>
      </div>

      {modalOpen == code && (
        <Modal show={true} onHide={() => setModalOpen(null)} centered size="lg">
          <Modal.Header closeButton>
            <Modal.Title className="text-center">{indicatorLabel} </Modal.Title>
          </Modal.Header>
          <Modal.Body className="bg-white rounded-3 mx-3">
            <h4>Informations</h4>
            <ul className="list-unstyled">
              <li className="mb-1">
                Valeur : <b>{legalUnitValue + unitSymbol}</b>
              </li>
              <li className="mb-1">
                Type de donnée : <b>{getFlagLabel(flag)}</b>
              </li>
              {flag == "p" && (
                <li className="mb-1">
                  Année de référence : <b>{year}</b>
                </li>
              )}
              <li className="mb-1">
                Incertitude : <b> {uncertainty}%</b>
              </li>
              <li className="mb-1">
                Dernière mise à jour :{" "}
                <b>{new Date(lastupdate).toLocaleDateString("fr-FR")}</b>
              </li>
            </ul>
            <h5>Informations complémentaires</h5>
            {/* {description && <p>{description}</p>} */}
            {info ? (
              <p>{info}</p>
            ) : (
              <p className="fst-italic">Aucune précision ajoutée.</p>
            )}
            {source && <p>Source : {source} </p>}
            <h5>Précisions sur l'indicateur</h5>

            <Description indic={code} />
          </Modal.Body>
          <Modal.Footer>
            <Button
              variant="secondary"
              size="sm"
              onClick={() => setModalOpen(null)}
            >
              Fermer
            </Button>
          </Modal.Footer>
        </Modal>
      )}
    </Col>
  );
};

/* Additionnal indicator view */
const AdditionnalIndicatorDetails = ({
  code,
  flag,
  lastupdate,
  info,
  indicatorLabel,
  source,
  year,
  value,
  unitSymbol,
  historicalData,
}) => {
  const [modalOpen, setModalOpen] = useState(null);

  const performance = Math.round(10 * value) / 10;
  return (
    <Col key={code} className="my-4" lg={4}>
      <div className="p-3 border border-3 rounded-3">
        <h3 className="h6 text-center">{indicatorLabel} </h3>
        <div className="text-end my-3">
          <Badge
            pill
            bg="light"
            className="ms-2 text-primary"
            title="Plus de détails"
          >
            <i className="bi bi-plus-circle-fill"></i>{" "}
            <button className="btn-badge" onClick={() => setModalOpen(code)}>
              Détails &raquo;
            </button>
          </Badge>
        </div>
        <AdditionalDataChart
          historical={historicalData}
          mostCurrent={performance}
          year={year}
          unit={unitSymbol}
        />

        <div className="my-3 text-center">
          {flag == "p" && (
            <Badge pill bg="secondary" title="Valeur publiée par l'entreprise">
              Valeur Publiée
            </Badge>
          )}
          {flag == "d" && (
            <Badge
              pill
              bg="primary"
              title="Valeur proposée à partir de données statistiques"
            >
              Valeur par défaut
            </Badge>
          )}
          {flag == "e" && (
            <Badge
              pill
              bg="light-secondary"
              title="Valeur estimée à partir de données publiées par l'entreprise"
            >
              Valeur estimée
            </Badge>
          )}
          {flag == "r" && (
            <Badge
              pill
              bg="light-secondary"
              title="Valeur issue d'un reporting"
            >
              Valeur issue d'un reporting
            </Badge>
          )}
        </div>
      </div>

      {modalOpen == code && (
        <Modal show={true} onHide={() => setModalOpen(null)} centered size="lg">
          <Modal.Header closeButton>
            <Modal.Title className="text-center">{indicatorLabel} </Modal.Title>
          </Modal.Header>
          <Modal.Body className="bg-white rounded-3 mx-3">
            <h4>Informations</h4>
            <ul className="list-unstyled">
              <li className="mb-1">
                Dernière valeur : <b>{performance + unitSymbol}</b>
              </li>
              <li className="mb-1">
                Type de donnée : <b>{getFlagLabel(flag)}</b>
              </li>
              {flag == "p" && (
                <li className="mb-1">
                  Année de référence : <b>{year}</b>
                </li>
              )}
              <li className="mb-1">
                Dernière mise à jour :{" "}
                <b>{new Date(lastupdate).toLocaleDateString("fr-FR")}</b>
              </li>
            </ul>
            <h5>Informations complémentaires</h5>
            {/* {description && <p>{description}</p>} */}
            {info ? (
              <p dangerouslySetInnerHTML={{ __html: info }}></p>
            ) : (
              <p className="fst-italic">Aucune précision ajoutée.</p>
            )}

            {source && <p>Source : {source} </p>}
          </Modal.Body>
          <Modal.Footer>
            <Button
              variant="secondary"
              size="sm"
              onClick={() => setModalOpen(null)}
            >
              Fermer
            </Button>
          </Modal.Footer>
        </Modal>
      )}
    </Col>
  );
};

export default CompanyData;

import { Badge, Button, Col, Image, Modal } from "react-bootstrap";
import FootprintDataChart from "../charts/FootprintDataChart";
import Description from "../../pages/indicateurs/parts/Description";
import { useState } from "react";
import { getFlagLabel } from "../../utils/utils";
import FlagBadge from "./FlagBadges";
import HistoricalDataChart from "../charts/HistoricalDatachart";

/* Basic indicator view */
export const IndicatorDetails = ({
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
  historicalData,
  historicalDivisionFootprint
}) => {
  const [modalOpen, setModalOpen] = useState(null);
  const [showHistoricalChart, setShowHistoricalChart] = useState(false);
  const legalUnitValue = Math.round(10 * value) / 10;

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
        <div
          className={
            historicalData && historicalData.length > 0
              ? "d-flex justify-content-between"
              : "text-end"
          }
        >
          {historicalData &&
            historicalData.length > 0 &&
            (showHistoricalChart ? (
              <Badge
                pill
                bg="light-secondary"
                className="ms-2 text-primary"
                title="Afficher les données actuelles"
              >
                <i className="bi bi-bar-chart-line"></i>
                <button
                  className="btn-badge ms-2"
                  onClick={() => setShowHistoricalChart(false)}
                >
                  Données actuelles
                </button>
              </Badge>
            ) : (
              <Badge
                pill
                bg="light-secondary"
                className="ms-2 text-primary"
                title="Afficher les données historiques"
              >
                <i className="bi bi-bar-chart-line"></i>
                <button
                  className="btn-badge ms-2"
                  onClick={() => setShowHistoricalChart(true)}
                >
                  Données historiques
                </button>
              </Badge>
            ))}
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
      
        {showHistoricalChart ? (
          <HistoricalDataChart
            historical={historicalData}
            latestValue={legalUnitValue}
            divisionFootprint={divisionFootprint[code]}
            historicalDivisionFootprint={historicalDivisionFootprint[code]}
            year={year}
            flag={getFlagLabel(flag)}
            unit={unitSymbol}
          />
        ) : (
          <FootprintDataChart
            latestValue={legalUnitValue}
            divisionFootprint={divisionFootprint[code]}
            unit={unitSymbol}
            flag={flag}
            year={year}
          />
        )}

        <div className="mb-3 d-flex justify-content-evenly">
          <FlagBadge flag={flag} />
          {showHistoricalChart && (
            <Badge
              pill
              bg="info"
              title="Valeur inconnue"
              className="text-primary"
            >
              Valeur inconnue
            </Badge>
          )}
          <Badge pill bg="warning" title="Valeur de la branche">
            Valeur de la branche
          </Badge>
        </div>
        <div className="mb-3 d-flex justify-content-evenly"></div>

        <div className="mt-2">
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

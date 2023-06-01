import { Badge, Button, Col, Modal } from "react-bootstrap";
import AdditionalDataChart from "../charts/AdditionalDataChart";
import { useState } from "react";
import { getFlagLabel } from "../../utils/utils";
import FlagBadge from "./FlagBadges";

/* Additionnal indicator view */
export const AdditionnalIndicatorDetails = ({
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
        <p className="source mt-3 mb-0 fw-bold">{unitSymbol}</p>
        <AdditionalDataChart
          historical={historicalData}
          latestValue={performance}
          year={year}
          flag={getFlagLabel(flag)}
          unit={unitSymbol}
        />

        <div className="my-3 text-center">
          <FlagBadge flag={flag} />
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

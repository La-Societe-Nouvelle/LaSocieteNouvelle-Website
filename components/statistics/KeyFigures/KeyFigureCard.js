import { Col } from "react-bootstrap";
import { printDate } from "../../../utils/dateHelpers";

const KeyFigureCard = ({ icon, value, label, period, unit = "" }) => {
  return (
    <Col md={3}>
      <div className="key-figure-card">
        <div className="key-figure-icon">
          <i className={`bi bi-${icon}`}></i>
        </div>
        {period && (
          <div className="key-figure-period">{printDate(period)}</div>
        )}

        <div className="key-figure-value">
          <span className="value-number">
            {value !== null && value !== undefined ? value.toLocaleString('fr-FR') : '-'}
          </span>
          {unit && <span className="value-unit">{unit}</span>}
        </div>
        <div className="key-figure-title">{label}</div>
      </div>
    </Col>
  );
};

export default KeyFigureCard;

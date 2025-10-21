"use client";

import { Row, Col, Form } from "react-bootstrap";

export default function DatasetFilters({
  parameters,
  selectedValues,
  metadata,
  onFilterChange,
  onReset
}) {
  const generateOptions = (paramCode) => {
    if (!metadata?.[paramCode]) return [];

    const values = [...metadata[paramCode]];

    if (paramCode === "branch" || paramCode === "indic" || paramCode === "division") {
      values.sort((a, b) => a.code.localeCompare(b.code));
    } else {
      values.sort((a, b) => {
        if (a.label === null || b.label === null) return 0;
        return a.label.localeCompare(b.label);
      });
    }

    return values.map(({ code, label }) => (
      <option key={code} value={code}>
        {code !== label ? `${code} - ${label}` : label}
      </option>
    ));
  };

  return (
    <div className="dataset-filters">
      <div className="filters-header">
        <h3 className="filters-title">
          <i className="bi bi-funnel me-2"></i>
          Filtres
        </h3>
        <button
          className="reset-btn"
          onClick={onReset}
          type="button"
        >
          <i className="bi bi-arrow-counterclockwise me-2"></i>
          Réinitialiser
        </button>
      </div>

      <Form>
        <Row className="g-3">
          {parameters?.map((parameter) => (
            <Col key={parameter.code} md={4}>
              <Form.Group controlId={parameter.code}>
                <Form.Label className="filter-label">
                  {parameter.label}
                </Form.Label>
                <Form.Select
                  name={parameter.code}
                  value={selectedValues[parameter.code] || ""}
                  onChange={onFilterChange}
                  className="filter-select"
                >
                  {generateOptions(parameter.code)}
                </Form.Select>
              </Form.Group>
            </Col>
          ))}
        </Row>
      </Form>
    </div>
  );
}

"use client";

import { useState } from "react";
import { Form } from "react-bootstrap";

export default function DatasetSidebar({
  parameters,
  selectedValues,
  metadata,
  onFilterChange,
  onReset
}) {
  const [expandedSections, setExpandedSections] = useState(
    parameters?.reduce((acc, param) => {
      acc[param.code] = true; // Tout ouvert par défaut
      return acc;
    }, {}) || {}
  );

  const toggleSection = (paramCode) => {
    setExpandedSections((prev) => ({
      ...prev,
      [paramCode]: !prev[paramCode],
    }));
  };

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

    return values;
  };

  const getIconForParameter = (paramCode) => {
    const icons = {
      branch: "diagram-3",
      indic: "graph-up",
      year: "calendar3",
      aggregate: "layers",
      division: "grid",
      default: "filter"
    };
    return icons[paramCode] || icons.default;
  };

  return (
    <div className="dataset-sidebar">
      <div className="sidebar-header">
        <h3 className="sidebar-title">
          <i className="bi bi-sliders me-2"></i>
          Filtres
        </h3>
        <button className="reset-btn" onClick={onReset} type="button" title="Réinitialiser les filtres">
          <i className="bi bi-arrow-counterclockwise"></i>
        </button>
      </div>

      {parameters?.map((parameter) => {
        const options = generateOptions(parameter.code);
        const selectedOption = options.find(opt => opt.code === selectedValues[parameter.code]);

        return (
          <div key={parameter.code} className="filter-section">
            <button
              className="section-header"
              onClick={() => toggleSection(parameter.code)}
              type="button"
            >
              <i className={`bi bi-chevron-${expandedSections[parameter.code] ? 'down' : 'right'} me-2`}></i>
              <i className={`bi bi-${getIconForParameter(parameter.code)} me-2`}></i>
              <span>{parameter.label}</span>
            </button>

            {expandedSections[parameter.code] && (
              <div className="section">
                <Form.Group controlId={parameter.code}>
                  <Form.Select
                    name={parameter.code}
                    value={selectedValues[parameter.code] || ""}
                    onChange={onFilterChange}
                    className="filter-select-sidebar"
                    size="sm"
                  >
                    {options.map(({ code, label }) => (
                      <option key={code} value={code}>
                        {code !== label ? `${code} - ${label}` : label}
                      </option>
                    ))}
                  </Form.Select>
                </Form.Group>

              </div>
            )}
          </div>
        );
      })}

    </div>
  );
}

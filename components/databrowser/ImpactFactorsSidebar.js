'use client';

import { useState } from 'react';

const INDICATORS = [
  { code: 'GHG', label: 'Émissions de GES' },
  { code: 'NRG', label: 'Consommation d\'énergie' },
  { code: 'WAS', label: 'Production de déchets' },
  { code: 'WAT', label: 'Consommation d\'eau' },
  { code: 'MAT', label: 'Extraction de matières premières' },
  { code: 'HAZ', label: 'Utilisation de produits dangereux'},
];

const NOMENCLATURES = [
  { code: 'A88', label: 'NAF rév.2 – Agrégation A88' }
];


const YEARS = Array.from({ length: 15 }, (_, i) => 2025 - i); // 2024 to 2010

export default function ImpactFactorsSidebar({ filters, onFilterChange, onReset }) {
  const [expandedSections, setExpandedSections] = useState({
    indicator: true,
    year: true,
    nomenclature: true,
  });

  const toggleSection = (section) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const handleFilterChange = (filterType, value) => {
    onFilterChange(filterType, value);
  };

  return (
    <div className="dataset-sidebar">
      <div className="sidebar-header">
        <h3 className="sidebar-title">
          <i className="bi bi-sliders me-2"></i>
          Filtres
        </h3>
        <button className="reset-btn" onClick={onReset} title="Réinitialiser les filtres">
          <i className="bi bi-arrow-counterclockwise"></i>
        </button>
      </div>

      {/* Indicator Section */}
      <div className="filter-section">
        <button
          className="section-header"
          onClick={() => toggleSection('indicator')}
        >
          <i className={`bi bi-chevron-${expandedSections.indicator ? 'down' : 'right'} me-2`}></i>
          <i className="bi bi-graph-up me-2"></i>
          <span>Indicateur</span>
        </button>
        {expandedSections.indicator && (
          <div className="section">
            {INDICATORS.map((indicator) => (
              <label key={indicator.code} className="filter-option">
                <input
                  type="radio"
                  name="indicator"
                  value={indicator.code}
                  checked={filters.indicator === indicator.code}
                  onChange={(e) => handleFilterChange('indicator', e.target.value)}
                />
                <span>{indicator.label}</span>
              </label>
            ))}
          </div>
        )}
      </div>

      {/* Year Section */}
      <div className="filter-section">
        <button
          className="section-header"
          onClick={() => toggleSection('year')}
        >
          <i className={`bi bi-chevron-${expandedSections.year ? 'down' : 'right'} me-2`}></i>
          <i className="bi bi-calendar3 me-2"></i>
          <span>Année</span>
        </button>
        {expandedSections.year && (
          <div className="section year-content">
            {YEARS.map((year) => (
              <label key={year} className="filter-option">
                <input
                  type="radio"
                  name="year"
                  value={year}
                  checked={filters.year === year}
                  onChange={(e) => handleFilterChange('year', parseInt(e.target.value))}
                />
                <span className={year === 2025 ? 'year-latest' : ''}>{year}</span>
                {year === 2025 && <span className="badge-latest">Dernières données</span>}
              </label>
            ))}
          </div>
        )}
      </div>

      {/* Nomenclature Section */}
      <div className="filter-section">
        <button
          className="section-header"
          onClick={() => toggleSection('nomenclature')}
        >
          <i className={`bi bi-chevron-${expandedSections.nomenclature ? 'down' : 'right'} me-2`}></i>
          <i className="bi bi-diagram-3 me-2"></i>
          <span>Nomenclature</span>
        </button>
        {expandedSections.nomenclature && (
          <div className="section">
            {NOMENCLATURES.map((nomenclature) => (
              <label key={nomenclature.code} className="filter-option">
                <input
                  type="radio"
                  name="nomenclature"
                  value={nomenclature.code}
                  disabled
                  checked={filters.nomenclature === nomenclature.code}
                  onChange={(e) => handleFilterChange('nomenclature', e.target.value)}
                />
                <span>{nomenclature.label}</span>
              </label>
            ))}
          </div>
        )}
      </div>

    </div>
  );
}

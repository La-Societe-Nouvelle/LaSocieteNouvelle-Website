'use client';

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import { Container, Row, Col } from "react-bootstrap";
import Link from "next/link";
import * as XLSX from "xlsx";
import _ from "lodash";

import DatasetSidebar from "../../../../components/databrowser/DatasetSidebar";
import DatasetTable from "../../../../components/databrowser/DatasetTable";
import metaDatasets from "../../../../lib/datasets.json";

export default function DatasetPage() {
  const params = useParams();
  const dataset = params.dataset;

  const [settings, setSettings] = useState({});
  const [data, setData] = useState(null);
  const [metadata, setMetadata] = useState(null);
  const [selectedValues, setSelectedValues] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // --------------------------------------------------

  // Initialize settings and default filters
  useEffect(() => {
    if (dataset && metaDatasets[dataset]) {
      const { parameters } = metaDatasets[dataset];

      const defaultFilters = _.chain(parameters)
        .filter((parameter) => parameter.defaultValue)
        .keyBy("code")
        .mapValues("defaultValue")
        .value();

      setSettings({
        ...metaDatasets[dataset],
        defaultFilters,
      });
      setSelectedValues(defaultFilters);
    }
  }, [dataset]);

  const { label, docs, parameters, columnsParameter, rowsParameter, defaultFilters } = settings;

  // Fetch data and metadata
  useEffect(() => {
    if (!dataset || !Object.keys(selectedValues).length) return;

    const fetchDataAndMetadata = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const filters = Object.entries(selectedValues)
          .map(([key, value]) => `${key}=${value}`)
          .join("&");

        const [dataResponse, metadataResponse] = await Promise.all([
          fetch(`${process.env.NEXT_PUBLIC_API_URL}/macrodata/${dataset}?${filters}`),
          fetch(`${process.env.NEXT_PUBLIC_API_URL}/macrodata/metadata/${dataset}`)
        ]);

        const dataResults = await dataResponse.json();
        const metadataResults = await metadataResponse.json();

        setData(dataResults.data);
        setMetadata(metadataResults.metadata);
      } catch (err) {
        setError("Erreur lors du chargement des données");
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchDataAndMetadata();
  }, [dataset, selectedValues]);

  // Handlers
  const handleFilterChange = (event) => {
    const { name, value } = event.target;
    setSelectedValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleResetFilters = () => {
    setSelectedValues(defaultFilters);
  };

  const exportToExcel = () => {
    if (!data) return;
    const workbook = XLSX.utils.book_new();
    const worksheet = XLSX.utils.json_to_sheet(data);
    XLSX.utils.book_append_sheet(workbook, worksheet, "Data");
    const fileName = `LSN-${dataset}.xlsx`;
    XLSX.writeFile(workbook, fileName);
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

  // Loading state
  if (isLoading) {
    return (
      <div className="dataset-page">
        <Container>
          <div className="loading-state">
            <div className="spinner">
              <div className="dot-pulse"></div>
            </div>
            <p>Chargement des données...</p>
          </div>
        </Container>
      </div>
    );
  }

  // Error state
  if (error) {
    return (
      <div className="dataset-page">
        <Container>
          <div className="error-state">
            <i className="bi bi-exclamation-triangle"></i>
            <h2>Erreur</h2>
            <p>{error}</p>
            <Link href="/databrowser/datasets" className="back-link">
              Retour aux jeux de données
            </Link>
          </div>
        </Container>
      </div>
    );
  }

  return (
    <div className="dataset-page">
      {/* Hero Section */}
      <section className="dataset-hero">
        <Container>

          <div className="hero-header">
            <div className="hero-title-section">
              <div className="dataset-icon">
                <i className="bi bi-database-fill"></i>
              </div>
              <div>

                <h2 className="page-title">{label || "Jeu de données"}</h2>
                <p className="dataset-code mb-3">
                  <i className="bi bi-table me-2"></i>
                  Table : &nbsp; <span>{dataset}</span>
                </p>

                {/* Badges des filtres sélectionnés */}
                {parameters && parameters.length > 0 && (
                  <div className="hero-badges">
                    {parameters.map((param) => {
                      const selectedValue = selectedValues[param.code];
                      if (!selectedValue || !metadata?.[param.code]) return null;

                      const option = metadata[param.code].find(opt => opt.code === selectedValue);
                      if (!option) return null;

                      return (
                        <span key={param.code} className="filter-badge">
                          <i className={`bi bi-${getIconForParameter(param.code)} me-2`}></i>
                          {option.code !== option.label ? `${option.code}` : option.label}
                        </span>
                      );
                    })}
                    {data && data.length > 0 && (
                      <span className="stat-badge">
                        <i className="bi bi-list-check me-2"></i>
                        {data.length} {data.length > 1 ? 'valeurs' : 'valeur'}
                      </span>
                    )}
                  </div>
                )}

              </div>
            </div>
            <div className="hero-actions">
              <button className="export-btn" onClick={exportToExcel}>
                <i className="bi bi-download me-2"></i>
                Exporter Excel
              </button>
              {docs && (
                <a
                  href={docs}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="doc-link"
                >
                  <i className="bi bi-book me-2"></i>
                  Documentation
                </a>
              )}
            </div>
          </div>
        </Container>
      </section>

      {/* Main Content */}
      <section className="dataset-content">
        <Container fluid>
          <Row className="g-0">
            {/* Sidebar */}
            <Col lg={3} className="sidebar-col">
              <DatasetSidebar
                parameters={parameters}
                selectedValues={selectedValues}
                metadata={metadata}
                onFilterChange={handleFilterChange}
                onReset={handleResetFilters}
              />
            </Col>

            {/* Data Table */}
            <Col lg={9} className="content-col">
              <div className="dataset-table-wrapper">
                <DatasetTable
                  data={data}
                  metadata={metadata}
                  columnsParameter={columnsParameter}
                  rowsParameter={rowsParameter}
                />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
}


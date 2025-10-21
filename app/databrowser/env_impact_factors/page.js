'use client';

import { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Link from "next/link";
import * as XLSX from "xlsx";
import ImpactFactorsSidebar from "../../../components/databrowser/ImpactFactorsSidebar";
import ImpactFactorsTable from "../../../components/databrowser/ImpactFactorsTable";

export default function ImpactFactorsPage() {
  const [data, setData] = useState([]);
  const [filters, setFilters] = useState({
    indicator: 'GHG',
    year: 2024,
    nomenclature: 'A88',
  });
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    setIsLoading(true);
    setError(null);
    try {
      // Construct API URL with filters
      const params = new URLSearchParams({
        env_impact: filters.indicator,
        area: 'FRA',
        year: filters.year,
      });

      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/env_impact_factors?${params}`
      );
      if (!response.ok) {
        throw new Error('Erreur lors du chargement des données');
      }

      const results = await response.json();

      setData(results.data || []);
    } catch (err) {
      setError("Erreur lors du chargement des données");
      console.error("Erreur fetch data:", err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [filters]);

  const handleFilterChange = (filterType, value) => {
    setFilters((prev) => ({
      ...prev,
      [filterType]: value,
    }));
  };

  const handleReset = () => {
    setFilters({
      indicator: 'GHG',
      year: 2024,
      // nomenclature: 'A88',
    });
  };

  const exportToExcel = () => {
    const workbook = XLSX.utils.book_new();
    const worksheet = XLSX.utils.json_to_sheet(data);
    XLSX.utils.book_append_sheet(workbook, worksheet, "Facteurs d'impacts");
    const fileName = `LSN-facteurs-impacts-${filters.indicator}-${filters.year}.xlsx`;
    XLSX.writeFile(workbook, fileName);
  };

  // Loading state
  if (isLoading) {
    return (
      <div className="dataset-page">
        <Container fluid>
          <div className="loading-state">
            <div className="spinner">
              <div className="dot-pulse"></div>
            </div>
            <p>Chargement des facteurs d'impacts...</p>
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
                <i className="bi bi-calculator-fill"></i>
              </div>
              <div>
                <h2 className="page-title">Facteurs d'impacts monétaires</h2>
                <p className="dataset-code mb-3">
                  <i className="bi bi-info-circle me-2"></i>
                  Coefficients pour l'estimation des impacts environnementaux par activité économique
                </p>

                {/* Badges des filtres sélectionnés */}
                <div className="hero-badges">
                  <span className="filter-badge">
                    <i className="bi bi-calendar-check me-2"></i>
                    Données {filters.year}
                  </span>
                  <span className="filter-badge">
                    <i className="bi bi-graph-up me-2"></i>
                    {filters.indicator}
                  </span>
                  {data.length > 0 && (
                    <>
                      <span className="stat-badge">
                        <i className="bi bi-list-check me-2"></i>
                        {data.length} {data.length > 1 ? 'résultats' : 'résultat'}
                      </span>
                      <span className="filter-badge">
                        <i className="bi bi-clock-history me-2"></i>
                        MAJ : {new Date(data[0].lastupdate).toLocaleDateString('fr-FR')}
                      </span>
                    </>
                  )}
                </div>
              </div>
            </div>
            <div className="hero-actions">
              <button className="export-btn" onClick={exportToExcel}>
                <i className="bi bi-download me-2"></i>
                Exporter Excel
              </button>
              <a
                href="https://docs.lasocietenouvelle.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="doc-link"
              >
                <i className="bi bi-book me-2"></i>
                Documentation
              </a>
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
              <ImpactFactorsSidebar
                filters={filters}
                onFilterChange={handleFilterChange}
                onReset={handleReset}
              />
            </Col>

            {/* Data Table */}
            <Col lg={9} className="content-col">
              <div className="dataset-table-wrapper">
                <ImpactFactorsTable data={data} />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
}

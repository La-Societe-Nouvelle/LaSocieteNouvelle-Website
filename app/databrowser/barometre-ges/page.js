'use client';

import { useEffect, useState, useMemo, useCallback } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Link from "next/link";
import dayjs from "dayjs";
import "dayjs/locale/fr.js";
import _ from "lodash";

import { DefaultBarChart } from "../../../components/charts/DefaultBarChart";

dayjs.locale("fr");

// ============================================
// CONSTANTS
// ============================================

const API_URL = "https://api.stats.lasocietenouvelle.org/barometre-ges/derniere-publication";

// ============================================
// UTILITY FUNCTIONS
// ============================================

const printMonth = (date) => {
  const label = dayjs(date, "YYYY-MM").format("MMMM YYYY");
  return label.charAt(0).toUpperCase() + label.slice(1);
};

const printDate = (date) => {
  return dayjs(date).format("DD/MM/YYYY");
};

// ============================================
// MAIN COMPONENT
// ============================================

const BarometreGES = () => {
  // ============================================
  // STATE
  // ============================================

  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  // ============================================
  // DATA FETCHING
  // ============================================

  const fetchData = useCallback(async () => {
    setIsLoading(true);
    setError(null);

    try {
      const res = await fetch(API_URL);

      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }

      const results = await res.json();

      if (results.header?.code === 200) {
        // Trier les données par mois (ordre croissant)
        const sortedData = [...results.data].sort((a, b) => a.mois.localeCompare(b.mois));
        setData(sortedData);
      } else {
        throw new Error("Code de réponse invalide");
      }
    } catch (err) {
      console.error("Erreur lors du chargement des données:", err);
      setError("Erreur lors du chargement des données");
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  // ============================================
  // COMPUTED VALUES (MEMOIZED)
  // ============================================

  // Dernières 3 données publiées
  const lastThreeData = useMemo(() => {
    if (!data || data.length < 3) return [null, null, null];
    return [
      data[data.length - 3],
      data[data.length - 2],
      data[data.length - 1],
    ];
  }, [data]);

  // Cache des évolutions année N vs N-1
  const evolutionsCache = useMemo(() => {
    if (!data) return new Map();

    const cache = new Map();
    const dataByMonth = new Map(data.map(item => [item.mois, item]));

    data.forEach((item) => {
      const month = item.mois;
      const previousYearMonth = month.replace("2025", "2024");
      const valeur2024 = dataByMonth.get(previousYearMonth);

      if (valeur2024) {
        const evolution = _.round(
          ((item.valeur - valeur2024.valeur) / valeur2024.valeur) * 100,
          1
        );
        cache.set(month, evolution);
      }
    });

    return cache;
  }, [data]);

  // Données formatées pour le graphique
  const { chartLabels, chartDatasets } = useMemo(() => {
    if (!data) return { chartLabels: [], chartDatasets: [] };

    const filteredData = data.filter((item) => item.mois >= "2024-01");

    return {
      chartLabels: filteredData.map((item) => item.mois),
      chartDatasets: [
        {
          label: "La Société Nouvelle (Prévisions)",
          data: filteredData.map((item) =>
            item.source === "La Société Nouvelle" ? item.valeur : null
          ),
          backgroundColor: "#191558",
        },
        {
          label: "CITEPA (Baromètre mensuel)",
          data: filteredData.map((item) =>
            item.source === "CITEPA" ? item.valeur : null
          ),
          backgroundColor: "#3B82F6",
        },
      ],
    };
  }, [data]);

  // ============================================
  // HELPER FUNCTIONS
  // ============================================

  const getEvolution = useCallback((month) => {
    if (!month) return null;
    return evolutionsCache.get(month) ?? null;
  }, [evolutionsCache]);

  // ============================================
  // DESTRUCTURING
  // ============================================

  const [last_data_1, last_data_2, last_data_3] = lastThreeData;

  // ============================================
  // RENDER STATES
  // ============================================

  if (isLoading) {
    return (
      <div className="barometre-page">
        <Container>
          <div className="loading-state">
            <div className="spinner">
              <div className="dot-pulse"></div>
            </div>
            <p>Chargement des données du baromètre...</p>
          </div>
        </Container>
      </div>
    );
  }

  if (error) {
    return (
      <div className="barometre-page">
        <Container>
          <div className="error-state">
            <i className="bi bi-exclamation-triangle"></i>
            <h2>Erreur</h2>
            <p>{error}</p>
            <Link href="/databrowser" className="back-link">
              Retour au databrowser
            </Link>
          </div>
        </Container>
      </div>
    );
  }

  // ============================================
  // MAIN RENDER
  // ============================================

  return (
    <div className="barometre-page">
      {/* Hero Section */}
      <HeroSection lastUpdate={last_data_3} />

      {/* Latest Data Cards */}
      <LatestDataSection
        data={[last_data_1, last_data_2, last_data_3]}
        getEvolution={getEvolution}
      />

      {/* Chart Section */}
      <ChartSection chartLabels={chartLabels} chartDatasets={chartDatasets} />

      {/* Methodology Section */}
      <MethodologySection />
    </div>
  );
};

// ============================================
// SUB-COMPONENTS
// ============================================

const HeroSection = ({ lastUpdate }) => (
  <section className="barometre-hero">
    <Container>

      <div className="hero-header">
        <div className="hero-title-section">
          <div className="barometre-icon">
            <i className="bi bi-speedometer2"></i>
          </div>
          <div>
            <div className="hero-badges">
              <span className="badge-france">
                <i className="bi bi-geo-alt me-2"></i>
                France
              </span>
              {lastUpdate && (
                <span className="badge-update">
                  <i className="bi bi-clock-history me-2"></i>
                  MAJ : {printDate(lastUpdate.date_publication)}
                </span>
              )}
            </div>
            <h2 className="page-title">Baromètre des émissions territoriales de GES</h2>
            <p className="page-subtitle">
              Suivi en temps quasi-réel des émissions de gaz à effet de serre en France métropolitaine
            </p>
          </div>
        </div>
        <div className="hero-actions">
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
);

const LatestDataSection = ({ data, getEvolution }) => (
  <section className="barometre-latest">
    <Container>
      <div className="section-header">
        <h2 className="section__title">
          <i className="bi bi-calendar3 me-2"></i>
          Dernières données publiées
        </h2>
      </div>

      <Row className="g-4">
        {data.map((monthData, index) => {
          if (!monthData) return null;

          const evolution = getEvolution(monthData.mois);
          const isIncrease = evolution > 0;

          return (
            <Col key={index} lg={4}>
              <div className="data-card">
                <div className="card-header">
                  <span className="month-label">{printMonth(monthData.mois)}</span>
                </div>
                <div className="card-body">
                  <div className="value-display">
                    <span className="value-number">{_.round(monthData.valeur, 1)}</span>
                    <span className="value-unit">MtCO₂e</span>
                  </div>
                  {evolution !== null && (
                    <div className={`evolution-badge ${isIncrease ? 'increase' : 'decrease'}`}>
                      <i className={`bi bi-arrow-${isIncrease ? 'up' : 'down'}-right me-2`}></i>
                      {Math.abs(evolution)}% vs 2024
                    </div>
                  )}
                </div>
                <div className="card-footer">
                  <i className="bi bi-calendar-check me-2"></i>
                  Publiée le {printDate(monthData.date_publication)}
                </div>
              </div>
            </Col>
          );
        })}
      </Row>
    </Container>
  </section>
);

const ChartSection = ({ chartLabels, chartDatasets }) => (
  <section className="barometre-chart">
    <Container>
      <div className="section-header">
        <h2 className="section__title">
          <i className="bi bi-graph-up me-2"></i>
          Suivi mensuel des émissions territoriales
        </h2>
      </div>

      <div className="chart-wrapper">
        <DefaultBarChart
          labels={chartLabels}
          datasets={chartDatasets}
          options={{
            aspectRatio: 3,
            legendDisplay: true,
            legendPosition: 'bottom',
          }}
        />
      </div>
    </Container>
  </section>
);

const MethodologySection = () => (
  <section className="barometre-methodology">
    <Container>
      <div className="methodology-card">
        <div className="methodology-header">
          <i className="bi bi-lightbulb"></i>
          <h2 className="text-white">Méthodologie</h2>
        </div>
        <div className="methodology-content">
          <p>
            Le baromètre s'appuie sur des techniques statistiques de <strong>Nowcasting</strong>.
          </p>
          <p>
            La démarche vise à estimer en temps quasi réel (M-1) les émissions territoriales de gaz à
            effet de serre en France à partir de l'exploitation de données publiées avec une fréquence
            plus élevée ou un délai plus court (production industrielle, consommation d'énergie,
            transport, etc.).
          </p>
          <p>
            Ce baromètre fournit ainsi une estimation anticipée et dynamique de l'évolution des
            émissions, en amont des bilans officiels souvent publiés avec plusieurs mois de décalage.
          </p>
          <div className="methodology-footer">
            <i className="bi bi-code-slash me-2"></i>
            La méthodologie complète et les scripts de traitements seront rendus publics prochainement.
          </div>
        </div>
      </div>
    </Container>
  </section>
);

export default BarometreGES;

'use client';

import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";

import PageHeader from "@/components/PageHeader";

// Chart.js config
import "@/components/statistics/charts/chartConfig";

// Charts
import ApiNbQueriesChart from "@/components/statistics/charts/ApiNbQueriesChart";
import ApiEndpointUsageChart from "@/components/statistics/charts/ApiEndpointUsageChart";
import WebsiteNbVisitsChart from "@/components/statistics/charts/WebsiteNbVisitsChart";
import PackageLsnStatChart from "@/components/statistics/charts/PackageLsnStatChart";

// Key Figures
import { KeyFigureCard } from "@/components/statistics/KeyFigures";

const Statistics = () => {
  const [analytics, setAnalytics] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetchAnalytics();
  }, []);

  const fetchAnalytics = async () => {
    setLoading(true);
    setError(false);

    const url = `https://api.lasocietenouvelle.org/analytics`;

    try {
      const res = await fetch(url);

      if (res.ok) {
        const results = await res.json();
        if (results.header?.code == 200) {
          setAnalytics(results.body);
        } else {
          setError(true);
        }
      } else {
        setError(true);
      }
    } catch (err) {
      console.error(err);
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  if (!analytics && loading) {
    return (
      <div className="statistics-page">
        <PageHeader
          title="Statistiques d'usage"
          subtitle="Découvrez comment notre API publique et notre site web sont utilisés par la communauté."
          icon="graph-up"
        />
        <section className="section">
          <Container>
            <div className="loading-container">
              <div className="spinner"></div>
              <p className="loading-text">Chargement des statistiques...</p>
            </div>
          </Container>
        </section>
      </div>
    );
  }
  if (!analytics && error) {
    return (
      <div className="statistics-page">
        <PageHeader
          title="Statistiques d'usage"
          subtitle="Découvrez comment notre API publique et notre site web sont utilisés par la communauté."
          icon="graph-up"
        />
        <section className="section">
          <Container>
            <div className="error-container">
              <div className="error-icon">
                <i className="bi bi-exclamation-triangle"></i>
              </div>
              <h2 className="error-title">Erreur de chargement</h2>
              <p className="error-message">
                Impossible de charger les statistiques. Veuillez réessayer plus tard.
              </p>
            </div>
          </Container>
        </section>
      </div>
    );
  }

  return (
    <div className="statistics-page">

      <PageHeader
        title="Statistiques d'usage"
        subtitle="Découvrez comment notre API publique et notre site web sont utilisés par la communauté."
        icon="graph-up"
      />

    
      {/* Key Figures Section */}
      <section className="key-figures-section">
        <Container>
          <Row className="g-4">
            <KeyFigureCard
              icon="buildings"
              value={analytics?.nombre_unites_legales}
              label="Unités légales concernées"
              period={analytics?.date}
            />
            <KeyFigureCard
              icon="leaf"
              value={analytics?.nombre_empreintes}
              label="Empreintes disponibles"
              period={analytics?.date}
            />
            <KeyFigureCard
              icon="table"
              value={analytics?.nombre_donnees}
              label="Données extra-financières disponibles"
              period={analytics?.date}
            />
            <KeyFigureCard
              icon="globe-europe-africa"
              value={analytics?.nombre_donnees_defaut}
              label="Empreintes par défaut"
              period={analytics?.date}
            />
          </Row>
        </Container>
      </section>

      {/* API Usage Section */}
      <section className="section">
        <Container>
          <h3 className="section__title">Utilisation de notre API Publique</h3>
          <div className="charts-grid two-columns">
            <div className="chart-wrapper">
              <ApiNbQueriesChart analytics={analytics} />
            </div>
            <div className="chart-wrapper">
              <ApiEndpointUsageChart analytics={analytics} />
            </div>
          </div>
        </Container>
      </section>

      {/* Website Visits Section */}
      <section className="section">
        <Container>
          <h3 className="section__title">Visites sur notre site web</h3>
          <div className="charts-grid single-column">
            <div className="chart-wrapper">
              <WebsiteNbVisitsChart />
            </div>
          </div>
        </Container>
      </section>

      {/* Package Downloads Section */}
      <section className="section">
        <Container>
          <h3 className="section__title">Téléchargement de notre package CRAN</h3>
          <p style={{ marginBottom: '2rem', color: 'rgba(25, 21, 88, 0.7)' }}>
            Package R pour l'accès aux données statistiques
          </p>
          <div className="charts-grid half-width">
            <div className="chart-wrapper">
              <PackageLsnStatChart />
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default Statistics;

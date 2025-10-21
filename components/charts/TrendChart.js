"use client";

import { useState, useEffect, useMemo } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
} from 'chart.js';
import metaData from "../../lib/metaData";

// Enregistrement des composants Chart.js nécessaires
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

/**
 * Composant interne pour afficher le graphique de ligne
 */
const LineChart = ({ indic, historicalData, trendData }) => {
  const indicData = metaData[indic.toLowerCase()];

  // Calcul des données du graphique avec useMemo pour optimisation
  const chartConfig = useMemo(() => {
    if (!historicalData.length && !trendData.length) {
      return null;
    }

    // Récupérer toutes les années disponibles et les convertir en nombres
    const allYears = [
      ...historicalData.map(item => Number(item.year)),
      ...trendData.map(item => Number(item.year))
    ];

    if (allYears.length === 0) {
      return null;
    }

    const minYear = Math.min(...allYears);
    const maxYear = Math.max(...allYears);
    const maxYearHistoricalData = historicalData.length > 0
      ? Math.max(...historicalData.map(item => Number(item.year)))
      : minYear;

    // Créer la liste complète des années
    const years = Array.from(
      { length: maxYear - minYear + 1 },
      (_, i) => minYear + i
    );

    // Fonction helper pour mapper les valeurs aux années
    const getValuesForYears = (data, years) => {
      const valuesByYear = data.reduce((acc, item) => {
        acc[Number(item.year)] = item.value ?? null;
        return acc;
      }, {});
      return years.map(year => valuesByYear[year] ?? null);
    };

    // Générer les valeurs pour chaque dataset
    const historicalValues = getValuesForYears(historicalData, years);

    // Pour la tendance, on commence à partir de la dernière année historique
    const trendValues = years.map(year => {
      if (year < maxYearHistoricalData) {
        return null;
      }
      // Chercher dans les données historiques pour l'année de jonction
      if (year === maxYearHistoricalData) {
        const histValue = historicalData.find(item => Number(item.year) === year);
        return histValue ? histValue.value ?? null : null;
      }
      // Chercher dans les données de tendance
      const trendValue = trendData.find(item => Number(item.year) === year);
      return trendValue ? trendValue.value ?? null : null;
    });

    // Calculer la valeur max pour l'échelle Y
    const valueMax = Math.max(
      ...historicalValues.filter(v => v !== null),
      ...trendValues.filter(v => v !== null)
    ) * 1.25 || 1.0;

    return { years, historicalValues, trendValues, valueMax };
  }, [historicalData, trendData]);

  if (!chartConfig) {
    return <div className="text-center py-8 text-gray-500">Aucune donnée disponible</div>;
  }

  const { years, historicalValues, trendValues, valueMax } = chartConfig;

  // Créer un dégradé pour le remplissage
  const createGradient = (ctx, color, opacity = 1) => {
    const gradient = ctx.createLinearGradient(0, 0, 0, 400);
    // Convertir la couleur hex en rgba pour l'opacité
    const rgbColor = color.match(/\w\w/g).map(x => parseInt(x, 16));
    gradient.addColorStop(0, `rgba(${rgbColor[0]}, ${rgbColor[1]}, ${rgbColor[2]}, ${0.3 * opacity})`);
    gradient.addColorStop(1, `rgba(${rgbColor[0]}, ${rgbColor[1]}, ${rgbColor[2]}, ${0.05 * opacity})`);
    return gradient;
  };

  const data = {
    labels: years,
    datasets: [
      {
        label: 'Historique',
        data: historicalValues,
        borderColor: indicData.primaryColor,
        backgroundColor: function(context) {
          const chart = context.chart;
          const {ctx, chartArea} = chart;
          if (!chartArea) {
            return null;
          }
          return createGradient(ctx, indicData.primaryColor);
        },
        fill: 'origin',
        tension: 0.4,
        borderWidth: 3,
        pointRadius: 2,
        pointHoverRadius: 5,
        pointBackgroundColor: indicData.primaryColor,
        pointBorderColor: '#fff',
        pointBorderWidth: 1,
        pointHoverBackgroundColor: indicData.primaryColor,
        pointHoverBorderColor: '#fff',
        pointHoverBorderWidth: 2,
        showLine: true,
        spanGaps: true
      },
      {
        label: 'Tendance',
        data: trendValues,
        borderColor: indicData.primaryColor,
        backgroundColor: function(context) {
          const chart = context.chart;
          const {ctx, chartArea} = chart;
          if (!chartArea) {
            return null;
          }
          return createGradient(ctx, indicData.primaryColor, 0.6);
        },
        fill: 'origin',
        borderDash: [10, 5],
        tension: 0.4,
        borderWidth: 3,
        pointRadius: 2,
        pointHoverRadius: 5,
        pointBackgroundColor: indicData.primaryColor,
        pointBorderColor: '#fff',
        pointBorderWidth: 1,
        pointHoverBackgroundColor: indicData.primaryColor,
        pointHoverBorderColor: '#fff',
        pointHoverBorderWidth: 2,
        showLine: true,
        spanGaps: true
      }
    ]
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    interaction: {
      intersect: false,
      mode: 'index'
    },
    plugins: {
      legend: {
        display: true,
        position: 'bottom',
        labels: {
          font: {
            size: 13,
            family: "'Raleway', sans-serif",
            weight: 600
          },
          color: '#191558',
          padding: 15,
          usePointStyle: true,
          generateLabels: () => {
            return [
              {
                text: 'Historique',
                fillStyle: indicData.primaryColor,
                strokeStyle: '#fff',
                lineWidth: 2,
                pointStyle: 'circle',
                hidden: false
              },
              {
                text: 'Tendance (projection)',
                fillStyle: 'transparent',
                strokeStyle: indicData.primaryColor,
                lineWidth: 2,
                pointStyle: 'circle',
                lineDash: [5, 3],
                hidden: false
              }
            ];
          }
        }
      },
      tooltip: {
        backgroundColor: 'rgba(25, 21, 88, 0.95)',
        titleFont: {
          size: 14,
          family: "'Raleway', sans-serif",
          weight: 600
        },
        bodyFont: {
          size: 13,
          family: "'Raleway', sans-serif"
        },
        padding: 12,
        cornerRadius: 8,
        displayColors: true,
        callbacks: {
          label: function(context) {
            const value = context.parsed.y;
            if (value === null) return null;
            return `${context.dataset.label}: ${value.toLocaleString('fr-FR')}`;
          }
        }
      }
    },
    scales: {
      x: {
        grid: {
          color: 'rgba(25, 21, 88, 0.06)',
          drawBorder: false
        },
        ticks: {
          color: 'rgba(25, 21, 88, 0.7)',
          font: {
            size: 12,
            family: "'Raleway', sans-serif"
          }
        }
      },
      y: {
        beginAtZero: true,
        suggestedMax: valueMax,
        grid: {
          color: 'rgba(25, 21, 88, 0.06)',
          drawBorder: false
        },
        ticks: {
          color: 'rgba(25, 21, 88, 0.7)',
          font: {
            size: 12,
            family: "'Raleway', sans-serif"
          },
          callback: function(value) {
            return value.toLocaleString('fr-FR');
          }
        }
      }
    }
  };

  return <Line data={data} options={options} />;
};

/**
 * Composant principal TrendChart
 * Affiche l'évolution historique et la tendance future d'un indicateur
 */
function TrendChart({ indic }) {
  const [historicalData, setHistoricalData] = useState([]);
  const [trendData, setTrendData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const baseParams = 'country=FRA&industry=TOTAL&aggregate=PRD';

        // Fetch en parallèle pour optimiser les performances
        const [historicalResponse, trendResponse] = await Promise.all([
          fetch(`${process.env.NEXT_PUBLIC_API_URL}/macrodata/macro_fpt?${baseParams}&indic=${indic}`),
          fetch(`${process.env.NEXT_PUBLIC_API_URL}/macrodata/macro_fpt_trd?${baseParams}&indic=${indic}`)
        ]);

        if (!historicalResponse.ok || !trendResponse.ok) {
          throw new Error('Erreur lors du chargement des données');
        }

        const [historicalResults, trendResults] = await Promise.all([
          historicalResponse.json(),
          trendResponse.json()
        ]);

        setHistoricalData(historicalResults.data || []);
        setTrendData(trendResults.data || []);
      } catch (err) {
        setError(err.message);
        console.error('Erreur de chargement:', err);
      } finally {
        setIsLoading(false);
      }
    };

    if (indic) {
      fetchData();
    }
  }, [indic]);

  if (isLoading) {
    return (
      <div className="bg-white border border-gray-200 rounded-lg p-4">
        <div className="flex items-center justify-center h-64">
          <div className="text-center">
            <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-primary border-r-transparent mb-2"></div>
            <p className="text-sm text-gray-600">Chargement des données...</p>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-white border border-red-200 rounded-lg p-4">
        <div className="flex items-center justify-center h-64">
          <div className="text-center text-red-600">
            <p className="font-semibold">Erreur</p>
            <p className="text-sm">{error}</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white border border-gray-200 rounded-lg p-4">
      <div style={{ height: '400px', width: '100%' }}>
        <LineChart
          indic={indic}
          historicalData={historicalData}
          trendData={trendData}
        />
      </div>
    </div>
  );
}

export default TrendChart;

'use client';

import { useMemo } from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

// ============================================
// DEFAULT THEME (DATABROWSER)
// ============================================

const DEFAULT_THEME = {
  primary: '#3B82F6',
  secondary: '#191558',
  success: '#10b981',
  danger: '#ef4444',
  grid: 'rgba(0, 0, 0, 0.05)',
  text: '#191558',
};

// ============================================
// COMPONENT
// ============================================

/**
 * Modern Bar Chart Component with databrowser theme
 *
 * @param {Array} labels - X-axis labels
 * @param {Array} datasets - Array of dataset objects with { label, data, backgroundColor, stack }
 * @param {Object} options - Custom chart options
 * @param {number} options.aspectRatio - Chart aspect ratio (default: 2)
 * @param {boolean} options.legendDisplay - Show/hide legend (default: true)
 * @param {string} options.legendPosition - Legend position (default: 'top')
 * @param {boolean} options.responsive - Responsive behavior (default: true)
 * @param {boolean} options.maintainAspectRatio - Maintain aspect ratio (default: true)
 * @param {string} options.title - Chart title
 */
export const DefaultBarChart = ({
  labels = [],
  datasets = [],
  options: customOptions = {},
}) => {
  // ============================================
  // DATA PREPARATION
  // ============================================

  const chartData = useMemo(() => ({
    labels,
    datasets: datasets.map((dataset) => ({
      ...dataset,
      borderRadius: 6,
      borderSkipped: false,
      maxBarThickness: 50,
    })),
  }), [labels, datasets]);

  // ============================================
  // OPTIONS CONFIGURATION
  // ============================================

  const chartOptions = useMemo(() => {
    const {
      aspectRatio = 2,
      legendDisplay = true,
      legendPosition = 'top',
      responsive = true,
      maintainAspectRatio = true,
      title,
    } = customOptions;

    return {
      responsive,
      maintainAspectRatio,
      aspectRatio,

      // Layout
      layout: {
        padding: {
          top: 10,
          right: 10,
          bottom: 10,
          left: 10,
        },
      },

      // Animations
      animation: {
        duration: 1000,
        easing: 'easeInOutQuart',
      },

      // Interactions
      interaction: {
        mode: 'index',
        intersect: false,
      },

      // Scales
      scales: {
        x: {
          stacked: true,
          grid: {
            display: false,
          },
          ticks: {
            color: DEFAULT_THEME.text,
            font: {
              size: 11,
              weight: '500',
            },
            maxRotation: 45,
            minRotation: 0,
          },
          border: {
            display: true,
            color: DEFAULT_THEME.grid,
          },
        },
        y: {
          stacked: true,
          beginAtZero: true,
          grid: {
            color: DEFAULT_THEME.grid,
            lineWidth: 1,
          },
          ticks: {
            color: DEFAULT_THEME.text,
            font: {
              size: 11,
              weight: '500',
            },
            callback: (value) => {
              // Format large numbers
              if (value >= 1000000) return `${(value / 1000000).toFixed(1)}M`;
              if (value >= 1000) return `${(value / 1000).toFixed(1)}k`;
              return value;
            },
          },
          border: {
            display: false,
          },
        },
      },

      // Plugins
      plugins: {
        // Legend
        legend: {
          display: legendDisplay,
          position: legendPosition,
          align: 'center',
          labels: {
            color: DEFAULT_THEME.text,
            font: {
              size: 12,
              weight: '600',
            },
            padding: 15,
            boxWidth: 12,
            boxHeight: 12,
            usePointStyle: true,
            pointStyle: 'circle',
          },
        },

        // Title
        title: title ? {
          display: true,
          text: title,
          color: DEFAULT_THEME.text,
          font: {
            size: 16,
            weight: '700',
          },
          padding: {
            top: 10,
            bottom: 20,
          },
        } : {
          display: false,
        },

        // Tooltip
        tooltip: {
          enabled: true,
          backgroundColor: 'rgba(25, 21, 88, 0.95)',
          titleColor: '#fff',
          bodyColor: '#fff',
          borderColor: DEFAULT_THEME.primary,
          borderWidth: 1,
          padding: 12,
          cornerRadius: 8,
          displayColors: true,
          boxWidth: 10,
          boxHeight: 10,
          usePointStyle: true,
          titleFont: {
            size: 13,
            weight: '600',
          },
          bodyFont: {
            size: 12,
            weight: '500',
          },
          callbacks: {
            label: (context) => {
              const label = context.dataset.label || '';
              const value = context.parsed.y;

              // Handle null/undefined values
              if (value === null || value === undefined) {
                return `${label}: N/A`;
              }

              // Format the value
              let formattedValue;
              if (value >= 1000000) {
                formattedValue = `${(value / 1000000).toFixed(2)}M`;
              } else if (value >= 1000) {
                formattedValue = `${(value / 1000).toFixed(2)}k`;
              } else {
                formattedValue = value.toFixed(2);
              }

              return `${label}: ${formattedValue}`;
            },
          },
        },
      },
    };
  }, [customOptions]);

  // ============================================
  // RENDER
  // ============================================

  if (!labels.length || !datasets.length) {
    return (
      <div className="chart-empty-state">
        <i className="bi bi-bar-chart"></i>
        <p>Aucune donnée à afficher</p>
      </div>
    );
  }

  return (
    <div className="modern-bar-chart">
      <Bar data={chartData} options={chartOptions} />
    </div>
  );
};

export default DefaultBarChart;

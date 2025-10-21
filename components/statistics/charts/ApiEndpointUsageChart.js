import { Doughnut } from "react-chartjs-2";
import _ from "lodash";

const ApiEndpointUsageChart = ({ analytics }) => {
  const total_requetes = _.sumBy(analytics?.nombre_requetes_par_endpoint || {}, 'nombre_requetes');
  const nombre_requetes_legalunit_footprint = analytics?.nombre_requetes_par_endpoint?.find((item) => item.endpoint == 'legalunitfootprint')?.nombre_requetes || 0;
  const nombre_requetes_default_footprint = analytics?.nombre_requetes_par_endpoint?.find((item) => item.endpoint == 'defaultfootprint')?.nombre_requetes || 0;
  const nombre_requetes_macrodata = analytics?.nombre_requetes_par_endpoint?.find((item) => item.endpoint == 'macrodata')?.nombre_requetes || 0;

  const data = [
    nombre_requetes_legalunit_footprint,
    nombre_requetes_default_footprint,
    nombre_requetes_macrodata,
    total_requetes - (nombre_requetes_legalunit_footprint + nombre_requetes_default_footprint + nombre_requetes_macrodata)
  ];

  const chartData = {
    labels: ['Empreinte d\'une unité légale', 'Empreinte par défaut', 'Données statistiques', 'Autres'],
    datasets: [
      {
        label: 'Nombre de requêtes',
        data: data,
        backgroundColor: [
          '#191558',
          '#6C8EEF',
          'rgba(108, 142, 239, 0.6)',
          'rgba(108, 142, 239, 0.3)'
        ],
        hoverBackgroundColor: [
          '#2a2570',
          '#5a7dd8',
          'rgba(108, 142, 239, 0.75)',
          'rgba(108, 142, 239, 0.45)'
        ],
        borderWidth: 0,
        hoverOffset: 8
      }
    ]
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    cutout: '65%',
    plugins: {
      title: {
        display: true,
        text: 'Données utilisées via l\'API Publique',
        font: {
          size: 18,
          weight: 700,
          family: "'Raleway', sans-serif"
        },
        color: '#191558',
        padding: {
          top: 0,
          bottom: 20
        }
      },
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
          pointStyle: 'circle',
          generateLabels: (chart) => {
            const data = chart.data;
            if (data.labels.length && data.datasets.length) {
              return data.labels.map((label, i) => {
                const value = data.datasets[0].data[i];
                const total = data.datasets[0].data.reduce((a, b) => a + b, 0);
                const percentage = ((value / total) * 100).toFixed(1);
                return {
                  text: `${label} (${percentage}%)`,
                  fillStyle: data.datasets[0].backgroundColor[i],
                  hidden: false,
                  index: i
                };
              });
            }
            return [];
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
            const value = context.parsed;
            const total = context.dataset.data.reduce((a, b) => a + b, 0);
            const percentage = ((value / total) * 100).toFixed(1);
            return `${context.label}: ${value.toLocaleString('fr-FR')} requêtes (${percentage}%)`;
          }
        }
      }
    }
  };

  return (
    <div className="chart-container">
      <Doughnut
        id="api-endpoints"
        data={chartData}
        options={chartOptions}
      />
    </div>
  );
};

export default ApiEndpointUsageChart;

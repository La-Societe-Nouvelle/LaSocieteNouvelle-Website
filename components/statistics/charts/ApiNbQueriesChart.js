import { Bar } from "react-chartjs-2";

const ApiNbQueriesChart = ({ analytics }) => {
  const months = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];

  const chartData = {
    labels: ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'],
    datasets: [
      {
        label: '2024',
        data: months.map((month) => analytics?.nombre_requetes_par_mois?.find((item) => item.month == '2024-' + month)?.nombre_requetes ?? 0),
        backgroundColor: 'rgba(108, 142, 239, 0.7)',
        hoverBackgroundColor: 'rgba(108, 142, 239, 0.9)',
        borderRadius: {
          topLeft: 8,
          topRight: 8,
          bottomLeft: 0,
          bottomRight: 0
        },
        borderSkipped: false
      },
      {
        label: '2025',
        data: months.map((month) => analytics?.nombre_requetes_par_mois?.find((item) => item.month == '2025-' + month)?.nombre_requetes ?? 0),
        backgroundColor: '#191558',
        hoverBackgroundColor: '#2a2570',
        borderRadius: {
          topLeft: 8,
          topRight: 8,
          bottomLeft: 0,
          bottomRight: 0
        },
        borderSkipped: false
      }
    ]
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    interaction: {
      intersect: false,
      mode: 'index'
    },
    plugins: {
      title: {
        display: true,
        text: 'Nombre de requêtes reçues par l\'API Publique',
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
          pointStyle: 'circle'
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
            return context.dataset.label + ': ' + context.parsed.y.toLocaleString('fr-FR') + ' requêtes';
          }
        }
      }
    },
    scales: {
      x: {
        grid: {
          display: false
        },
        ticks: {
          font: {
            size: 12,
            family: "'Raleway', sans-serif"
          },
          color: 'rgba(25, 21, 88, 0.7)'
        }
      },
      y: {
        beginAtZero: true,
        grid: {
          color: 'rgba(25, 21, 88, 0.06)',
          drawBorder: false
        },
        ticks: {
          font: {
            size: 12,
            family: "'Raleway', sans-serif"
          },
          color: 'rgba(25, 21, 88, 0.7)',
          callback: function(value) {
            return value.toLocaleString('fr-FR');
          }
        }
      }
    }
  };

  return (
    <div className="chart-container">
      <Bar
        id="api-usage"
        data={chartData}
        options={chartOptions}
      />
    </div>
  );
};

export default ApiNbQueriesChart;

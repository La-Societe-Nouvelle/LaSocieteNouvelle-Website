import { Bar } from "react-chartjs-2";

const PackageLsnStatChart = () => {
  const chartData = {
    labels: ['Janv. 24', 'Févr. 24', 'Mars 24', 'Avr. 24', 'Mai 24', 'Juin 24', 'Juil. 24', 'Août 24', 'Sept. 24', 'Oct. 24', 'Nov. 24', 'Déc. 24', 'Janv. 25', 'Févr. 25'],
    datasets: [
      {
        label: 'Nombre de téléchargements',
        data: [330, 110, 163, 178, 165, 116, 190, 157, 259, 175, 161, 137, 220, 182],
        backgroundColor: '#6C8EEF',
        hoverBackgroundColor: '#5a7dd8',
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
        text: 'Téléchargements mensuels du package npm',
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
        display: false
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
        displayColors: false,
        callbacks: {
          label: function(context) {
            return context.parsed.y.toLocaleString('fr-FR') + ' téléchargements';
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
            size: 11,
            family: "'Raleway', sans-serif"
          },
          color: 'rgba(25, 21, 88, 0.7)',
          maxRotation: 45,
          minRotation: 45
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
        id="package-downloads"
        data={chartData}
        options={chartOptions}
      />
    </div>
  );
};

export default PackageLsnStatChart;

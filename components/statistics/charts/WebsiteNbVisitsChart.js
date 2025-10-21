import { Line } from "react-chartjs-2";

const WebsiteNbVisitsChart = () => {
  const chartData = {
    labels: ['Juil. 24', 'Août 24', 'Sept. 24', 'Oct. 24', 'Nov. 24', 'Déc. 24', 'Janv. 25', 'Févr. 25', 'Mars 25', 'Avr. 25', 'Mai 25', 'Juin 25'],
    datasets: [
      {
        label: 'Nombre de visites',
        data: [359, 236, 374, 466, 427, 330, 342, 382, 341, 477, 356, 325],
        backgroundColor: 'rgba(108, 142, 239, 0.1)',
        borderColor: '#6C8EEF',
        borderWidth: 3,
        fill: true,
        tension: 0.4,
        pointBackgroundColor: '#191558',
        pointBorderColor: '#fff',
        pointBorderWidth: 2,
        pointRadius: 5,
        pointHoverRadius: 7,
        pointHoverBackgroundColor: '#191558',
        pointHoverBorderColor: '#fff',
        pointHoverBorderWidth: 3
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
        text: 'Visites mensuelles sur notre site web',
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
            return context.parsed.y.toLocaleString('fr-FR') + ' visites';
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
          color: 'rgba(25, 21, 88, 0.7)',
          maxRotation: 45,
          minRotation: 0
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
      <Line
        id="website-visits"
        data={chartData}
        options={chartOptions}
      />
    </div>
  );
};

export default WebsiteNbVisitsChart;

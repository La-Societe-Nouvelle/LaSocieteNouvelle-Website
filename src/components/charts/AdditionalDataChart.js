import React from "react";

import Chart from "chart.js/auto";
import ChartDataLabels from "chartjs-plugin-datalabels";

Chart.register(ChartDataLabels);
import { Line } from "react-chartjs-2";

const AdditionalDataChart = ({ historical, mostCurrent, year, unit }) => {
  // Créer un tableau pour les années historiques
  const historicalYears = historical.map((data) => data.year);

  // Créer un tableau pour les valeurs historiques
  const historicalValues = historical.map((data) => data.value);

  // Ajouter la valeur la plus récente à la fin des tableaux
  historicalYears.push(year.toString());
  historicalValues.push(mostCurrent);

  // Créer le dataset avec les données historiques et la valeur la plus récente
  const dataset = {
    label: "Valeur",
    data: historicalValues,
    fill: false,
    borderColor: "#f0f0f8",
    borderWidth: 3,
    pointBorderWidth: 0,
    pointHoverBorderWidth: 0,
    pointBackgroundColor: "#fa595F",
    pointRadius: historicalYears.map((y) => (y === year.toString() ? 8 : 6)),
    pointHoverRadius: historicalYears.map((y) =>
      y === year.toString() ? 8 : 6
    ),
    tension: 0.4,
  };

  // Créer le graphique
  const data = {
    labels: historicalYears,
    datasets: [dataset],
  };

  const options = {
    plugins: {
      legend: {
        display: false,
      },
      datalabels: {
        display: false,
      },
      tooltip: {
        backgroundColor: "#191558",
      },
    },

    scales: {
      y: {
        beginAtZero: true,
        color: "#191558",
        grid: {
          color: "#ececff",
        },
        title: {
          display: true,
          text: unit,
          color: "#191558",
          position: "top",
          padding : 10,
          font: {
            size: 11,
            weight: "bold"
          },
        },
        ticks: {
          color: "#191558",
          font: {
            size: 9,
          },
        },
      },
      x: {
        ticks: {
          color: "#191558",
          font: {
            size: 10,
          },
        },
        grid: {
          color: "#ececff",
        },
      },
    },
  };

  return <Line height={250} data={data} options={options} />;
};

export default AdditionalDataChart;

import React from "react";

import Chart from "chart.js/auto";
import ChartDataLabels from "chartjs-plugin-datalabels";

Chart.register(ChartDataLabels);
import { Line } from "react-chartjs-2";

const AdditionalDataChart = ({ historical, mostCurrent, year, unit }) => {
  const sortedHistorical = historical.sort((a, b) => a.year - b.year);
  const historicalYears = sortedHistorical.map((data) => data.year);

  const historicalValues = sortedHistorical.map((data) => data.value);

  historicalYears.push(year.toString());
  historicalValues.push(mostCurrent);

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
          padding: 10,
          font: {
            size: 11,
            weight: "bold",
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

import React from "react";

import Chart from "chart.js/auto";
import ChartDataLabels from "chartjs-plugin-datalabels";

Chart.register(ChartDataLabels);
import { Line } from "react-chartjs-2";

const AdditionalDataChart = ({ historical, latestValue, year, flag,unit }) => {
  const sortedHistorical = historical.sort((a, b) => a.year - b.year);
  const historicalYears = sortedHistorical.map((data) => data.year);

  const historicalValues = sortedHistorical.map((data) => data.value);

  historicalYears.push(year);
  historicalValues.push(latestValue);

  const dataset = {
    label: flag,
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
    maintainAspectRatio: true,
    layout: {
      padding: {
        top: 0,
        bottom: 10,
        left: 0,
        right: 0,
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      datalabels: {
        display: false,
      },
      tooltip: {
        backgroundColor: "#191558",
        callbacks: {
          label: function (context) {
            let label = " " + context.parsed.y + " " + unit;
            return label;
          },
        },
      },
    },

    scales: {
      y: {
        beginAtZero: true,
        color: "#191558",
        grid: {
          color: "#ececff",
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

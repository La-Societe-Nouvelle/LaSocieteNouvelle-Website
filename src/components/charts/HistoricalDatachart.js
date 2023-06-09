import React from "react";

import Chart from "chart.js/auto";
import ChartDataLabels from "chartjs-plugin-datalabels";

Chart.register(ChartDataLabels);
import { Line } from "react-chartjs-2";

const HistoricalDataChart = ({
  historical,
  latestValue,
  year,
  flag,
  unit,
  historicalDivisionFootprint,
}) => {
  const sortedHistorical = historical.sort((a, b) => a.year - b.year);
  const historicalYears = sortedHistorical.map((data) => data.year);

  const historicalValues = sortedHistorical.map((data) => data.value);
  historicalYears.push(year);

  const lastKnownYear =
    historicalDivisionFootprint[historicalDivisionFootprint.length - 1].year;
  historicalYears.push(lastKnownYear);
  historicalValues.push(latestValue);

  const lastKnownValue = historicalValues[historicalValues.length - 1];

  const extendedValues = historicalYears.map((year, index) => {
    if (
      index === historicalYears.length - 1 ||
      index === historicalYears.length - 2
    ) {
      return historicalValues[historicalYears.indexOf(year)] || lastKnownValue;
    } else {
      return null;
    }
  });

  const filteredData = historicalDivisionFootprint.filter((item) =>
    historicalYears.includes(item.year)
  );
  const nextYear = Number(lastKnownYear) + 1;

  historicalYears.push(nextYear);
  const dataset = [
    {
      label: flag,
      data: historicalValues,
      fill: false,
      borderColor: "#fa595F",
      borderWidth: 2,
      pointBorderWidth: 0,
      pointHoverBorderWidth: 0,
      pointBackgroundColor: "#fa595F",
      pointRadius: historicalYears.map((y) => (y === year.toString() ? 8 : 6)),
      pointHoverRadius: historicalYears.map((y) =>
        y === year.toString() ? 8 : 6
      ),
      tension: 0.4,
    },
    {
      label: flag,
      data: extendedValues,
      fill: false,
      borderColor: "#f0f0f8",
      borderDash: [5, 5],
      pointBorderWidth: 0,
      pointHoverBorderWidth: 0,
      pointBackgroundColor: "#e2e2fc",
      pointRadius: historicalYears.map((y) => (y === year.toString() ? 8 : 6)),
      pointHoverRadius: historicalYears.map((y) =>
        y === year.toString() ? 8 : 6
      ),
      tension: 0.4,
    },
    {
      label: "Historique de la branche",
      data: filteredData.map((item) => item.value),
      fill: false,
      borderColor: "#ffb642",
      borderWidth: 2,
      pointBorderWidth: 0,
      pointHoverBorderWidth: 0,
      pointBackgroundColor: "#ffb642",
      pointRadius: historicalYears.map((year) =>
        historicalYears.includes(parseInt(year)) ? 8 : 6
      ),
      pointHoverRadius: historicalYears.map((year) =>
        historicalYears.includes(parseInt(year)) ? 8 : 6
      ),
      tension: 0.4,
    },
  ];
  const data = {
    labels: historicalYears,
    datasets: dataset,
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
          color: "#fff",
        },
      },
    },
  };

  return <Line data={data} options={options} />;
};

export default HistoricalDataChart;

import React from "react";
import Chart from "chart.js/auto";
import ChartDataLabels from "chartjs-plugin-datalabels";

Chart.register(ChartDataLabels);

import { Bar } from "react-chartjs-2";

const FootprintDataChart = ({
  historical,
  mostCurrent,
  unit,
  flag,
  year,
  comparative,
}) => {
  let bgColor;

  if (flag == "p") {
    bgColor = "RGBA(250, 89, 95,1)";
  } else if (flag == "e") {
    bgColor = "rgb(251, 129, 133)";
  } else {
    bgColor = "RGBA(25, 21, 88,1)";
  }

  const sortedHistorical = historical.sort((a, b) => a.year - b.year);
  const footprintYears = sortedHistorical.map((data) => data.year);

  const historicalValues = sortedHistorical.map((data) => data.value);

  footprintYears.push(year != "NA" ? year : "");
  historicalValues.push(mostCurrent);
  historicalValues.push(comparative);

  console.log(year)
  console.log(mostCurrent)

  const historicalDataset = {
    label: "Empreinte de l'Unité Légale",
    data: historicalValues,
    backgroundColor: bgColor,
    barPercentage: 0.6,
    categoryPercentage: 0.6,
  };


  const comparativeDataset = {
    label: "Empreinte de la branche",
    data: [comparative],
    backgroundColor: "#ffb642",
    skipNull: true,
    barPercentage: 0.6,
    categoryPercentage: 0.6,
  };

  const datasets = [historicalDataset, comparativeDataset];

  const data = {
    labels: footprintYears,
    datasets: datasets,
  };




  let suggestedMax;

  if (unit == "%") {
    switch (true) {
      case mostCurrent < 10:
        suggestedMax = 10;
        break;
      case mostCurrent > 10 && mostCurrent < 25:
        suggestedMax = 25;
        break;
      case mostCurrent > 25 && mostCurrent < 50:
        suggestedMax = 50;
        break;
      default:
        suggestedMax = 100;
        break;
    }
  } else {
    suggestedMax = null;
  }

  const options = {
    responsive: true,
    maintainAspectRatio: true,
    devicePixelRatio: 2,
    layout: {
      padding: {
        top: 20,
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
        anchor: "end",
        align: "top",

        formatter: function (value, context) {
          if (value) {
            return value + " " + unit;
          }
        },
        color: "#191558",
        font: {
          size: 10,
          family: "Roboto",
          weight: "bold",
        },
      },
      tooltip: {
        enabled: true, //
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        suggestedMax: suggestedMax,

        ticks: {
          color: "#191558",
          font: {
            size: 10,
            family: "Roboto",
          },
        },
        grid: {
          color: "#ececff",
        },
      },
      x: {
        display: true,
        ticks: {
          color: "#191558",
          font: {
            size: 12,
            family: "Roboto",
          },
        },
        grid: {
          color: "#ececff",
        },
      },
    },
  };

  return (
    <div className="mt-3 mb-3">
      <Bar data={data} options={options} />
    </div>
  );
};

export default FootprintDataChart;

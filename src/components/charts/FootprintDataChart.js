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
  const footprintLabels = sortedHistorical.map((data) => data.year);

  const historicalValues = sortedHistorical.map((data) => data.value);

  footprintLabels.push(year != "NA" ? year : "");
  historicalValues.push(mostCurrent);

  const historicalDataset = {
    label: "Unité Légale",
    data: historicalValues,
    backgroundColor: "#191558",
  };

  const historicalComparative = sortedHistorical.map((data) => null);
  historicalComparative.push(comparative);

  const comparativeDataset = {
    label: "Branche",
    data: historicalComparative,
    backgroundColor: "#fa595F",
    skipNull: true,
  };

  const datasets = [historicalDataset, comparativeDataset];

  //   const dataset = {
  //     label: "Valeur",
  //     data: historicalValues,
  //     barPercentage: 0.4,
  //     categoryPercentage: 0.4,
  //   };

  const data = {
    labels: footprintLabels,
    datasets: datasets,
  };

  //   const data = {
  //     datasets: [
  //         dataset,
  //       {
  //         label: "Empreinte",
  //         barPercentage: 0.4,
  //         categoryPercentage: 0.4,
  //         data: [mostCurrent],
  //         backgroundColor: [bgColor],
  //       },
  //       {
  //         label: "Empreinte de la branche",
  //         barPercentage: 0.4,
  //         categoryPercentage: 0.4,
  //         data: [comparative],
  //         backgroundColor: "RGBA(255, 182, 66,1)",
  //       },
  //     ],
  //   };

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
        top: 30,
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
        enabled: false, //
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

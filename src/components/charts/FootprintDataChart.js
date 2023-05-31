import React from "react";
import Chart from "chart.js/auto";
import ChartDataLabels from "chartjs-plugin-datalabels";

Chart.register(ChartDataLabels);

import { Bar } from "react-chartjs-2";

const FootprintDataChart = ({
  historicalValues,
  latestValue,
  unit,
  flag,
  year,
  divisionValue,
}) => {
  let bgColor;

  if (flag == "p") {
    bgColor = "RGBA(250, 89, 95,1)";
  } else if (flag == "e") {
    bgColor = "rgb(251, 129, 133)";
  } else {
    bgColor = "RGBA(25, 21, 88,1)";
  }

  const sortedHistorical = historicalValues.sort((a, b) => a.year - b.year);
  const footprintYears = sortedHistorical.map((data) => data.year);

  const legalUnitFootprints = sortedHistorical.map((data) => data.value);

  footprintYears.push(year != "NA" ? year : "");
  legalUnitFootprints.push(latestValue);

  console.log(year)
  console.log(latestValue)

  const legalUnitFootprint = {
    label: "Empreinte de l'Unité Légale",
    data: legalUnitFootprints,
    backgroundColor: bgColor,
    barPercentage: 0.6,
    categoryPercentage: 0.6,
  };


  const divisionFootprint = {
    label: "Empreinte de la branche",
    data: [divisionValue],
    backgroundColor: "#ffb642",
    skipNull: true,
    barPercentage: 0.6,
    categoryPercentage: 0.6,
  };

  const datasets = [legalUnitFootprint, divisionFootprint];

  const data = {
    labels: footprintYears,
    datasets: datasets,
  };




  let suggestedMax;

  if (unit == "%") {
    switch (true) {
      case latestValue < 10:
        suggestedMax = 10;
        break;
      case latestValue > 10 && latestValue < 25:
        suggestedMax = 25;
        break;
      case latestValue > 25 && latestValue < 50:
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

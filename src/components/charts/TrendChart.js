import React from "react";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  LogarithmicScale,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  LogarithmicScale,
  Title,
  Tooltip,
  Legend
);

// Lib
import metaIndics from "/src/lib/metaData";
import { Alert } from "react-bootstrap";

function TrendChart({ indic, aggregate, code, branch }) {
  const [title, setTitle] = useState("");
  const [chartData, setChartData] = useState({ datasets: [] });

  const [options, setOptions] = useState({});

  const [historical, setHistorical] = useState([]);
  const [trends, setTrends] = useState([]);
  const [sourceTrend, setSourceTrend] = useState();

  const [target, setTarget] = useState([]);
  const [sourceTarget, setSourceTarget] = useState();
  const [infoTarget, setInfoTarget] = useState();

  const [error, setError] = useState(false);

  const getHistoricalData = async () => {
    await axios
      .get(
        `${process.env.NEXT_PUBLIC_API_URL}/macrodata/macro_fpt?indic=${indic}&country=FR&industry=${code}&aggregate=${aggregate}`
      )
      .then((response) => {
        if (response.data.header.code == 200) {
          setTitle(response.data.meta.label);
          setSourceTrend(response.data.meta.source);
          setHistorical(response.data.data);
        } else {
          setError(response.data.header);
        }
      })
      .catch((error) => {
        setError(true);
      });
  };

  const getTargetData = async () => {
    await axios
      .get(
        `${process.env.NEXT_PUBLIC_API_URL}/macrodata/macro_fpt_tgt?indic=${indic}&country=FR&industry=${code}&aggregate=${aggregate}&target=GEO`
      )
      .then((response) => {
        if (response.data.header.code == 200) {
          setSourceTarget(response.data.meta.source);
          setInfoTarget(response.data.meta.info);
          setTarget(response.data.data);
        } else {
          setError(response.data.header);
        }
      })
      .catch((error) => {
        console.log(error);
        setError(true);
  
      });
  };
  const getTrendData = async () => {
    await axios
      .get(
        `${process.env.NEXT_PUBLIC_API_URL}/macrodata/macro_fpt_trd?indic=${indic}&country=FR&industry=${code}&aggregate=${aggregate}`
      )
      .then((response) => {
        if (response.data.header.code == 200) {
          setTrends(response.data.data);
        } else {
          setError(response.data.header);
        }
      })
      .catch((error) => {
        setError(true);
        console.log(error);
      });
  };

  useEffect(async () => {
    if (code && aggregate) {
  
      await getHistoricalData();
      await getTargetData();
      await getTrendData();
    }
  }, [indic, aggregate, code]);

  const buildChartData = async () => {
    const datasets = [];

    // --------------------------------------------------
    // Division - Historical

    const branchHistoricalData = buildBranchHistoricalData(historical);

    const branchHistoricalDataset = {
      label: "Historique",
      data: branchHistoricalData,
      borderColor: "rgb(255, 182, 66)",
      backgroundColor: "rgb(255, 182, 66)",
      order: 2,
      borderWidth: 4,
    };

    datasets.push(branchHistoricalDataset);

    // --------------------------------------------------
    // Division - Trend
    if (trends.length > 0) {
      const branchTrendData = buildBranchTrendData(trends, historical);
  

      const branchTrendDataset = {
        label: "Tendance",
        data: branchTrendData.map((data) => ({
          x: data.year,
          y: data.value,
        })),
        borderColor: "rgb(255, 182, 66)",
        backgroundColor: "rgb(255, 182, 66)",
        borderWidth: 4,
        borderDash: [12, 6],
        order: 3,
      };
      datasets.push(branchTrendDataset);
    }

    // --------------------------------------------------
    // Division - Target

    if (target.length > 0) {
      const branchTargetData = buildBranchTargetData(target, historical);
      const branchTargetDataset = {
        label: "Objectif",
        data: branchTargetData.map((data) => ({
          x: data.year,
          y: data.value,
        })),
        skipNull: true,
        borderColor: "rgba(255,238,200,1)",
        backgroundColor: "rgba(255,238,200,1)",
        borderWidth: 4,
        order: 4,
      };
      datasets.push(branchTargetDataset);
    }

    const chartData = {
      datasets,
    };
    return chartData;
  };

  useEffect(async () => {
    if (historical.length > 1) {
      const chartData = await buildChartData();
      setChartData(chartData);
      const chartOptions = buildChartOptions(chartData, indic);
      setOptions(chartOptions);
    }
  }, [historical, trends, target]);

  return (
    chartData &&
    options && (
      <div className="bg-white border rounded p-4">
        {
          error && 
          (
            <Alert variant="danger">
              Une erreur est survenue.
            </Alert>
          )
        }
        <Line data={chartData} options={options} />
        <div className="mt-5 small">
          <p>
            Note : Tendance pour
            {code == "TOTAL"
              ? " toutes les activités"
              : ' la branche "' + branch + '"'}
            {infoTarget && ", " + infoTarget}
          </p>

          <p className="small-text">
            Sources : {sourceTrend} (Historique)
            {sourceTarget && ", " + sourceTarget + " (Objectif) "}
          </p>
        </div>
      </div>
    )
  );
}

// ################################################## DATASET ##################################################

const buildBranchHistoricalData = (historical) => {
  const historicalData = historical.map((data) => ({
    x: data.year,
    y: data.value,
  }));

  return historicalData;
};

const buildBranchTrendData = (trends, historicalData) => {
  let lastYearHistoricalData = historicalData.at(-1).year;

  let data = trends
    .filter((item) => item.year > lastYearHistoricalData)
    .concat([historicalData.at(-1)])
    .sort((a, b) => a.year - b.year);

  return data;
};

const buildBranchTargetData = (target, historical) => {
  const path = "GEO";

  let lastYearHistoricalData = historical.at(-1).year;

  const data = target
    .filter((item) => item.target == path || item.path == path)
    .filter((item) => item.year > lastYearHistoricalData)
    .concat([historical.at(-1)])
    .sort((a, b) => a.year - b.year);

  return data;
};

// ################################################## OPTIONS ##################################################

const buildChartOptions = (chartData, indic) => {
  const { unitCode } = metaIndics[indic.toLowerCase()];
  const maxY = unitCode === "%" ? getMaxY(chartData.datasets) : null;

  const chartOptions = {
    pointRadius: 0,
    scales: {
      y: {
        display: true,
        min: 0,
        suggestedMax: maxY,
        title: {
          display: true,
          text: unitCode,
          color: "#191558",
          font: {
            size: 12,
            weight: "bold",
            family: "Roboto",
          },
        },
        ticks: {
          color: "#191558",
          font: {
            size: 11,
            family: "Roboto",
          },
        },
        grid: {
          color: "#ececff",
        },
      },
      x: {
        ticks: {
          color: "#191558",
          font: {
            size: 11,
          },
        },
        grid: {
          color: "#ececff",
        },
      },
    },
    plugins: {
      legend: {
        display: true,
        position: "right",
        labels: {
          usePointStyle: true,
          fullsize: true,
          color: "#191558",
          generateLabels: function (chart) {
            const dataset = chart.data.datasets;
            return dataset
              .map((data, i) => ({
                hidden: !chart.getDataVisibility(i),
                index: i,
                lineWidth: 3,
                lineDashOffset: i == 1 ? 10 : 0,
                lineDash: i == 1 ? [5, 3] : [],
                order: data.order,
                pointStyle: "line",
                strokeStyle: data.borderColor,
                text: data.label,
              }))
              .sort((a, b) => a.order - b.order);
          },
        },

        onClick(click, legendItem, legend) {
          legend.chart.toggleDataVisibility(legendItem.index);

          if (legend.chart.getDatasetMeta(legendItem.index).hidden == true) {
            legend.chart.getDatasetMeta(legendItem.index).hidden = false;
          } else {
            legend.chart.getDatasetMeta(legendItem.index).hidden = true;
          }
          legend.chart.update();
          return;
        },
      },

      datalabels: {
        labels: {
          display: false,
        },
      },
      title: {
        display: true,
        text: "",
        color: "#251f81",
        font: {
          size: 15,
          weight: "bold",
          family: "Raleway",
        },
        padding: {
          top: 10,
          bottom: 30,
        },
      },
      tooltip: {
        backgroundColor: "rgba(25,21,88,0.9)",
        padding: 15,
        cornerRadius: 3,
        usePointStyle: true,
        callbacks: {
          label: function (context) {
            let label = " " + context.parsed.y + " " + unit;
            return label;
          },
        },
      },
    },
  };

  return chartOptions;
};
const getMaxY = (datasets) => {
  const maxValues = datasets.map((dataset) => {
    if (dataset) {
      const max = Math.max(
        ...dataset.data
          .filter((value) => value)
          .map((value) => value.y || value)
          .filter((yValue) => isValidNumber(yValue))
      );
      return max;
    }
    return 0;
  });

  const max = Math.max(...maxValues);

  // Thresholds to determine the maximum value
  const threshold1 = 10;
  const threshold2 = 25;
  const threshold3 = 50;

  // Return the appropriate maximum value
  if (max < threshold1) {
    return threshold1;
  } else if (max < threshold2) {
    return threshold2;
  } else if (max < threshold3) {
    return threshold3;
  } else {
    return 100;
  }
};

const isValidNumber = (value, min, max) => {
  // is a number
  if (!isNaN(value) && value !== "" && value !== null) {
    // check min
    if (min != undefined) {
      if (!isValidNumber(min)) {
        return false;
      } else if (isValidNumber(min) && parseFloat(min) > parseFloat(value)) {
        return false;
      }
    }
    // check max
    if (max != undefined) {
      if (!isValidNumber(max)) {
        return false;
      } else if (isValidNumber(max) && parseFloat(max) < parseFloat(value)) {
        return false;
      }
    }
    // a number and between min & max (if defined)
    return true;
  }
  // not a number
  else {
    return false;
  }
};
export default TrendChart;

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

function TrendChart({ indic, aggregate, code, branch }) {
  const [title, setTitle] = useState("");
  const [data, setData] = useState({ datasets: [] });

  const [options, setOptions] = useState({});

  const [trends, setTrends] = useState([]);
  const [sourceTrend, setSourceTrend] = useState();
  const [infoTrend, setInfoTrend] = useState();

  const [target, setTarget] = useState([]);
  const [sourceTarget, setSourceTarget] = useState();
  const [infoTarget, setInfoTarget] = useState();

  const [unit, setUnit] = useState();

  const [error, setError] = useState(false);

  const getHistoricalDataTrend = async () => {
    await axios
      .get(
        `${process.env.NEXT_PUBLIC_API_URL}/serie/MACRO_HISTORICALDATA_TREND_${indic}_FRA_BRANCH?area=FRA&code=${code}&aggregate=${aggregate}`
      )
      .then((response) => {
        if (response.data.header.code == 200) {
          setTitle(response.data.meta.label);
          setSourceTrend(response.data.meta.source);
          setInfoTrend(response.data.meta.info);
          setUnit(response.data.meta.unitSymbol);
          setTrends(response.data.data);
        } else {
          setError(response.data.header);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const getTargetData = async (id) => {

    await axios
      .get(
        `${process.env.NEXT_PUBLIC_API_URL}/serie/${id}?area=FRA&code=${code}&aggregate=${aggregate}`
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
      });
  };

  useEffect(async () => {
    if (code && aggregate) {
      const id = getTargetSerieId(indic);
      await getHistoricalDataTrend();
      if (id) {
        await getTargetData(id);
      }
    }
  }, [aggregate, code]);

  useEffect(async () => {

    if (trends.length > 1) {

      const trendsData = trends.map((data) =>
      data.flag == 'e'
          ? { x: data.year, y: data.value }
          : { x: data.year, y: null }
      );

      let lastNonNull = trendsData.findLast((element) => element.y != null);
      const trendsDataForecast = trends.map((data) =>
      data.flag == 'f' || data.year == lastNonNull.x
          ? { x: data.year, y: data.value }
          : { x: data.year, y: null }
      );

      let suggestedMax = null;

      if (unit === "%") {
        const max = Math.max(...trends.map((o) => o.value));
      
        if (max < 10) {
          suggestedMax = 10;
        } else if (max < 25) {
          suggestedMax = 25;
        } else if (max < 50) {
          suggestedMax = 50;
        } else {
          suggestedMax = 100;
        }
      }
      
      const options = {
        pointRadius: 0,
        scales: {
          y: {
            display: true,
            min: 0,
            suggestedMax: suggestedMax,
            title: {
              display: true,
              text: unit,
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

              if (
                legend.chart.getDatasetMeta(legendItem.index).hidden == true
              ) {
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
            text: title,
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

      const data = {
        datasets: [
          {
            label: "Historique",
            data: trendsData,
            borderColor: "rgb(255, 182, 66)",
            backgroundColor: "rgb(255, 182, 66)",
            order: 2,
            borderWidth: 4,
          },
          {
            label: "Tendance",
            data: trendsDataForecast,
            borderColor: "rgb(255, 182, 66)",
            backgroundColor: "rgb(255, 182, 66)",
            borderWidth: 4,
            borderDash: [5, 8],
            order: 3,
          },
        ],
      };

      if (target.length > 1) {
        const targetData = target.map((data) => ({
          x: data.year,
          y: data.value,
        }));

        data.datasets.push({
          label: "Objectif",
          data: targetData,
          skipNull: true,
          borderColor: "rgb(255, 238, 200)",
          backgroundColor: "rgb(255, 238, 200)",
          borderWidth: 4,
          order: 4,
        });
      }
      setData(data);
      setOptions(options);
    }
  }, [trends, target]);

  return (
    data &&
    options && (
      <div className="bg-white border rounded p-4">
        <Line data={data} options={options} />
        <div className="mt-5 small">
          <p>
            Note : Tendance pour
            {code == "TOTAL" ? " toutes les activités" : " la branche \"" + branch + "\""}
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

const getTargetSerieId = (indic) => {
  let id;
  switch (indic) {
    case "IDR":
      id = "MACRO_TARGET_IDR_LSN_FRA_BRANCH";
      break;
    case "GEQ":
      id = "MACRO_TARGET_GEQ_LSN_FRA_BRANCH";
      break;
    case "GHG":
      id = "MACRO_TARGET_GHG_SNBC_FRA_BRANCH";
      break;
    case "KNW":
      id = "MACRO_TARGET_KNW_LSN_FRA_BRANCH";
      break;
    case "MAT":
      id = "MACRO_TARGET_MAT_LSN_FRA_BRANCH";
      break;
    case "NRG":
      id = "MACRO_TARGET_NRG_PPE_FRA_BRANCH";
      break;
    case "SOC":
      id = "MACRO_TARGET_SOC_LSN_FRA_BRANCH";
      break;
    case "WAS":
      id = "MACRO_TARGET_WAS_PNPD_FRA_BRANCH";
      break;
    case "WAT":
      id = "MACRO_TARGET_WAT_LSN_FRA_BRANCH";
      break;
    default:
      null;
      break;
  }

  return id;
};

export default TrendChart;

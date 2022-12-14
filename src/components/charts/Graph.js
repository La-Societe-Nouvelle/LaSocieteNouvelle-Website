import React from "react";

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
import { useCallback } from "react";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

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

function Graph({ indic }) {
  let [title, setTitle] = useState("");
  let [serie, setSerie] = useState("");
  let [source, setSource] = useState();
  let [unit, setUnit] = useState();
  let [error, setError] = useState(false);

  const fetchData = useCallback(() => {
    axios
      .get(
        `https://api.lasocietenouvelle.org/serie/MACRO_${indic}_FRA_BRANCH?area=FRA&code=TOTAL&aggregate=NVA`
      )
      .then((response) => {
        if (response.data.header.code == 200) {
          setTitle(response.data.meta.label);
          setSource(response.data.meta.source);
          setUnit(response.data.meta.unitSymbol);
          setSerie(response.data.data);
        } else {
          setError(response.data.header);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, [indic]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const options = {
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      y: {
        min: 0,
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
  let labels = [];
  const dataset = [];

  for (let i = 0; i < serie.length; i++) {
    if (serie[i].year != "2021") {
      labels.push(serie[i].year);
      dataset.push(serie[i].value.toFixed(2));
    }
  }

  const data = {
    labels,
    datasets: [
      {
        label: "Valeur",
        data: dataset,
        borderColor: "rgba(250, 89, 103,0.5)",
        backgroundColor: "rgba(250, 89, 103,1)",
      },
    ],
  };
  return (
    <div
      className="bg-white border rounded p-4 mx-2 mt-4"
      style={{ height: "475px" }}
    >
      <p className="small text-primary text-start fw-500">{title}</p>
      <p className="source text-primary text-start fw-bold">En {unit}</p>
      <Line height={250} data={data} options={options} />
      <div className="mt-3">
        <p className="text-start source">
          Sources : {source} - Traitement : La Société Nouvelle
        </p>
      </div>
    </div>
  );
}

export default Graph;

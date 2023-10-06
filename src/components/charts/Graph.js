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

const metaGraphs = {
  ghg: {
    title: "Empreinte carbone de la production intérieure française",
    unit: "gCO2e/€"
  },
  wat: {
    title: "Empreinte eau de la production intérieure française",
    unit: "L/€"
  },
  nrg: {
    title: "Empreinte énergétique de la production intérieure française",
    unit: "kJ/€"
  }
}

const Graph = ({ indic }) => {
  let [title, setTitle] = useState("");
  let [serie, setSerie] = useState("");
  let [source, setSource] = useState();
  let [unit, setUnit] = useState();
  let [error, setError] = useState(false);

  const fetchData = useCallback(() => {
    axios
      .get(
        `${process.env.NEXT_PUBLIC_API_URL}/macrodata/macro_fpt_a38?branch=TOTAL&aggregate=NVA&indic=${indic.toUpperCase()}`
      )
      .then((response) => {
        if (response.data.header.code == 200) {
          setTitle(metaGraphs[indic].title);
          setSource(response.data.meta.doc);
          setUnit(metaGraphs[indic].unit);
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
      <p className="small   ">{title}</p>
      <p className="source  fw-bold">En {unit}</p>
      <Line height={250} data={data} options={options} />
      <div className="mt-3">
        <p className=" source">
          <a href={source} target="_blank">Documentation relative aux données</a>
        </p>
      </div>
    </div>
  );
}

export default Graph;

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

import metaData from "../../lib/metaData";

export const changeOpacity = (rgbaColor, newOpacity) => {
  const rgbaArray = rgbaColor.split(",");
  rgbaArray[3] = newOpacity <= 0 ? 0.3 : newOpacity > 1 ? 1 : newOpacity;
  return rgbaArray.join(",");
};

const LineChart = ({indic,historicalData,trendData}) => 
{
  const indicData = metaData[indic.toLowerCase()];
  console.log(indicData);

  // Récupérer les années de chaque set de données
  const allYears = [
    ...historicalData.map(item => item.year),
    ...trendData.map(item => item.year)
  ];

  // Trouver la plus petite et la plus grande année
  const minYear = Math.min(...allYears);
  const maxYear = Math.max(...allYears);
  const maxYearHistoricalData = Math.max(...historicalData.map(item => item.year));

  // Créer la liste des années entre la plus petite et la plus grande
  const years = Array.from({ length: maxYear - minYear + 1 }, (_, i) => minYear + i);

  // Fonction pour générer les valeurs par année (avec `null` si une année manque)
  const getValuesForYears = (data, years) => {
    const valuesByYear = {};
    data.forEach(item => {
      valuesByYear[item.year] = item.value || null;
    });
    return years.map(year => valuesByYear[year] || null);
  };

  // Générer les valeurs pour chaque dataset
  const historicalValues = getValuesForYears(historicalData, years);
  const trendValues = getValuesForYears([...historicalData.filter(item => item.year == maxYearHistoricalData), ...trendData], years);

  //
  const valueMax = Math.max(...historicalValues, ...trendValues) * 1.25 || 1.0;

  const data = {
    labels: years,
    datasets: [
      {
        label: 'Historique',
        data: historicalValues,
        borderColor: indicData.primaryColor,
        backgroundColor: indicData.primaryColor,
        fill: false,
        tension: 0.3,
        borderWidth: 3,
        pointRadius: 0,
        pointBorderWidth: 0,
        serieType: "historical",
        showLine: true,
        spanGaps: true
      },
      {
        label: 'Tendance',
        data: trendValues,
        borderColor: indicData.primaryColor,
        backgroundColor: indicData.primaryColor,
        fill: false,
        borderDash: [10, 5],
        tension: 0.3,
        borderWidth: 3,
        pointRadius: 0,
        pointBorderWidth: 0,
        serieType: "trend",
        showLine: true,
        spanGaps: true
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      datalabels: {
        display: false,
      },
      legend: {
        display: false
      }
    },
    scales: {
      x: {
        ticks: {
          color: '#737393',
          font: {
            size: 10,
          }
        },
      },
      y: {
        beginAtZero: true,
        suggestedMax: valueMax,
        ticks: {
          color: '#737393',
          font: {
            size: 10,
          }
        },
      },
    },
  };

  return (
    <Line 
      data={data} 
      options={options} 
    />
  );
}

function TrendChart({ indic, country, industry, aggregate }) 
{
  const [historicalData, setHistoricalData] = useState([]);
  const [trendData, setTrendData] = useState([]);

  const [options, setOptions] = useState({});

  const fetchHistoricalData = async () => {
    const baseUrl = `${process.env.NEXT_PUBLIC_API_URL}/macrodata/macro_fpt?country=FRA&industry=TOTAL&aggregate=PRD&indic=`+indic  
    const response = await fetch(baseUrl);
    const results = await response.json();
    setHistoricalData(results.data);
  };

  const fetchTrendData = async () => {
    const baseUrl = `${process.env.NEXT_PUBLIC_API_URL}/macrodata/macro_fpt_trd?country=FRA&industry=TOTAL&aggregate=PRD&indic=`+indic  
    const response = await fetch(baseUrl);
    const results = await response.json();
    console.log(results.data);
    setTrendData(results.data);
  };

  useEffect(() => {
    fetchHistoricalData();
    fetchTrendData();
  }, []);

  return (
    trendData &&
    options && (
      <div className="bg-white border rounded p-4">
        <div className="h-auto w-auto">
          <LineChart 
            indic={indic} 
            historicalData={historicalData} 
            trendData={trendData} 
          />
        </div>
      </div>
    )
  );
}

export default TrendChart;

// La Société Nouvelle

import Chart from "chart.js/auto";
import { Bar, Line } from "react-chartjs-2";

/**
 *  Data :
 *    - labels (abscisse)
 *    - datasets (séries de données)
 *    - options (options du graphique)
 * 
 *  Datasets :
 *    - label (nom de la série)
 *    - data (valeurs)
 *    - backgroundColor (couleur de remplissage)
 * 
 *  Options :
 *    - aspectRatio
 *    - legendDisplay
 * 
 */

export const DefaultLineChart = ({
  labels,
  datasets,
  options: custumOptions
}) => {


  // --------------------------------------------------
  // Data

  const data = {
    labels,
    datasets: datasets.map((dataset) => {
      return({
        ...dataset,
        tension: 0.5
      });
    })
  }

  // --------------------------------------------------
  // Options

  const options = {
    aspectRatio: custumOptions.aspectRatio ? custumOptions.aspectRatio : 2,
    plugins: {
      legend: {
        display: custumOptions.legendDisplay ? custumOptions.legendDisplay : false,
      }
    },
    scales: {
      y: {
        suggestedMin: 0
    }
    }
  }

  // --------------------------------------------------

  return (
    <div className="mb-3">
      <Line 
        data={data} 
        options={options} 
      />
    </div>
  );
}
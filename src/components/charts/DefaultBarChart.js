// La Société Nouvelle

import Chart from "chart.js/auto";
import { Bar } from "react-chartjs-2";

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

export const DefaultBarChart = ({
  labels,
  datasets,
  options: custumOptions
}) => {


  // --------------------------------------------------
  // Data

  const data = {
    labels,
    datasets
  }

  // --------------------------------------------------
  // Options

  const options = {
    aspectRatio: custumOptions.aspectRatio ? custumOptions.aspectRatio : 2,
    plugins: {
      legend: {
        display: custumOptions.legendDisplay ? custumOptions.legendDisplay : false,
      }
    }
  }

  // --------------------------------------------------

  return (
    <div className="mb-3">
      <Bar 
        data={data} 
        options={options} 
      />
    </div>
  );
}
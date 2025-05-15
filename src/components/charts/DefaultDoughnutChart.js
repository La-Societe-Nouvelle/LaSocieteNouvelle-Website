// La Société Nouvelle

import { isArray } from "@apollo/client/utilities";
import Chart from "chart.js/auto";
import { Doughnut } from "react-chartjs-2";

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

const lightenColor = (colorHex, lumFactor) => 
{
  console.log(colorHex);
  let r = parseInt(colorHex.substr(1,2), 16);
  let g = parseInt(colorHex.substr(3,2), 16);
  let b = parseInt(colorHex.substr(5,2), 16);
  let total = r+g+b;

  let lighten_r = parseInt(r + ((255-r)/(765-total))*(lumFactor*(765-total)));
  let lighten_g = parseInt(g + ((255-g)/(765-total))*(lumFactor*(765-total)));
  let lighten_b = parseInt(b + ((255-b)/(765-total))*(lumFactor*(765-total)));

  const ligtenColor = "#"+lighten_r.toString(16)+lighten_g.toString(16)+lighten_b.toString(16);
  return ligtenColor;
}

export const DefaultDoughnutChart = ({
  labels,
  datasets,
  options: custumOptions
}) => {


  // --------------------------------------------------
  // Data

  const data = {
    labels,
    datasets: datasets.map((dataset) => {
      let primaryColor = dataset.backgroundColor;
      if (!isArray(primaryColor)) {
        dataset.backgroundColor = dataset.data.map((_,index,arr) => lightenColor(primaryColor, (1.0/arr.length)*index))
      }
      return(dataset);
    })
  }

  // --------------------------------------------------
  // Options

  const options = {
    aspectRatio: custumOptions.aspectRatio ? custumOptions.aspectRatio : 2,
    plugins: {
      legend: {
        display: custumOptions.legendDisplay ? custumOptions.legendDisplay : false,
        position: custumOptions.legendPosition ? custumOptions.legendPosition : 'bottom',
      }
    }
  }

  // --------------------------------------------------

  return (
    <div className="mb-3">
      <Doughnut 
        data={data} 
        options={options} 
      />
    </div>
  );
}
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { useMemo } from "react";

ChartJS.register(ArcElement, Tooltip, Legend);

export const MIFDatachart = ({ latestValue }) => {
  const chartData = useMemo(() => {
    return {
      labels: ["Score", ""], 
      datasets: [
        {
          data: [latestValue, 100 - latestValue], 
          backgroundColor: ["rgb(250, 89, 95)", "#f0f0f8"], 
          borderWidth : 0
        },
      ],
    };
  }, [latestValue]);

  const chartOptions = {
    responsive: true,
    cutout: "70%",
    layout: {
        padding: {
          left: 20,  
          right: 20,  

        },
      },
    plugins: {
      legend: {
        display : false
      },
      tooltip: {
        enabled: false,  
      },
      datalabels: {
        display: false,
      },
    },
  };

  return (
    <div style={{ position: "relative", width: "100%",  margin: "0 auto" }}>
      <Doughnut data={chartData} options={chartOptions} />
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          textAlign: "center",
          fontSize: "1.2em",
          fontWeight: "bold",
          color: "#191558",
        }}
      >
        {latestValue}/100
      </div>
    </div>
  );
};

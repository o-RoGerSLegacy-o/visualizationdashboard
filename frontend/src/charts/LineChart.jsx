// import React, { useEffect, useState } from "react";
import {
  Chart as ChartJs,
  BarElement,
  CategoryScale, //x axis
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { Legend } from "chart.js";

ChartJs.register(
  LineElement,
  CategoryScale,
  LinearScale,
  BarElement,
  LinearScale,
  PointElement,
  Legend,
  Tooltip
);

const LineChart = () => {
  const data = {
    labels: ["monday", "tuesday", "wednesday", "thursday", "friday"],
    datasets: [
      {
        label: "salesof the week",
        data: [3, 6, 9, 7, 8],
        backgroundColor: "aqua",
        borderColor: "black",
        pointBorderColor: "aqua",
      },
    ],
  };

  const options = {
    plugins: {
      Legend: true,
    },
  };

  return (
    <div style={{ width: "600px", height: "300px", padding: "20px" }}>
      <Line data={data} options={options}></Line>
    </div>
  );
};

export default LineChart;

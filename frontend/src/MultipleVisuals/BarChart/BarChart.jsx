import React, { useState } from "react";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import ".//BarChart.css";

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const BarChart = ({ data }) => {
  const [yearRange, setYearRange] = useState([2018, 2065]);

  const filteredData = data.filter(
    (x) => x.end_year >= yearRange[0] && x.end_year <= yearRange[1]
  );

  const chartData = {
    labels: filteredData.map((x) => x.end_year),
    datasets: [
      {
        label: "this is intensity",
        data: filteredData.map((x) => x.intensity),
        backgroundColor: "rgba(75,192,192,0.6)",
      },
    ],
  };

  const options = {
    scales: {
      y: {
        type: "linear",
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="container">
      <div className="chart-container">
        {chartData.labels.length > 0 ? (
          <Bar data={chartData} options={options} />
        ) : (
          <p>No data available for the selected year range.</p>
        )}
      </div>
      <div className="filter-container">
        <div className="filter-section">
          <label className="filter-label">Select Year Range:</label>
          <input
            className="filter-input"
            type="number"
            value={yearRange[0]}
            onChange={(e) => setYearRange([+e.target.value, yearRange[1]])}
          />
          <input
            className="filter-input"
            type="number"
            value={yearRange[1]}
            onChange={(e) => setYearRange([yearRange[0], +e.target.value])}
          />
          <button className="filter-button">Apply Filter</button>
        </div>
      </div>
    </div>
  );
};

export default BarChart;

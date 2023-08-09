import React from "react";
import {
  PieChart,
  Pie,
  Cell,
  Legend,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const generateRandomColor = () => {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

const DoughnutChart = ({ data }) => {
  // Filter out null values and count unique regions
  const regionData = {};
  data.forEach((item) => {
    const region = item.region;
    if (region && item.impact !== null) {
      if (!regionData[region]) {
        regionData[region] = item.impact || 0;
      } else {
        regionData[region] += item.impact || 0;
      }
    }
  });

  // Prepare data for the chart
  const chartData = Object.keys(regionData).map((region) => ({
    name: region,
    value: regionData[region],
    color: generateRandomColor(),
  }));

  return (
    <div className="doughnut-chart-container">
      <ResponsiveContainer width="100%" height={400}>
        <PieChart>
          <Pie
            data={chartData}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={120}
            fill="#8884d8"
            label
          >
            {chartData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
          <Tooltip formatter={(value) => `${value} impact`} />
          <Legend verticalAlign="middle" align="right" layout="vertical">
            {chartData.map((entry, index) => (
              <span key={`legend-${index}`} style={{ color: entry.color }}>
                {index + 1}. {entry.name} - {entry.value} impact
              </span>
            ))}
          </Legend>
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default DoughnutChart;

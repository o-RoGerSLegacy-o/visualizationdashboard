/* import React, { useState, useEffect } from "react";
import axios from "axios";
import { Bar } from "react-chartjs-2";

function BarGraph() {
  const [chartData, setChartData] = useState({});

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:8080/api/v1/main/"); // Replace with your API endpoint
      const data = response.data; // Assuming your data is an array of objects

      console.log("Fetched data:", data); // Debugging line

      // Check if data is an array before mapping
      if (Array.isArray(data)) {
        /* const labels = data.map((item) => item.label);
        const values = data.map((item) => item.value); 
      const intensity = data.map((item) => item.intensity);
      const startYear = data.map((item) => item.start_year);
        setChartData({
          labels:startYear,
          datasets: [
            {
              label: "Data",
              data: intensity,
              backgroundColor: "rgba(75,192,192,0.2)",
              borderColor: "rgba(75,192,192,1)",
              borderWidth: 1,
            },
          ],
        });
      } else {
        console.error("Data is not an array:", data);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div>
      <h2>Bar Chart Example</h2>
      <Bar data={chartData} options={{ responsive: true }} />
    </div>
  );
}

export default BarGraph;
 */

import React, { useState, useEffect } from "react";
import axios from "axios";
import { Bar } from "react-chartjs-2";

function BarChartComponent() {
  const [chartData, setChartData] = useState({});
  const api = "coinranking75db724b2e35158d7ec034deacd88280b92c55d6f9d70031";
  const baseURL = "https://api.coinranking.com/v2/coins/?limit=13";
  var proxyUrl = "https://corsproxy.io/?";

  useEffect(() => {
    fetchData();
  }, [api, proxyUrl, baseURL]);

  const fetchData = async () => {
    try {
      const response = await axios.get(`${proxyUrl}${baseURL}`, {
        method: "GET",
        headers: {
          "content-type": "application/json",
          "x-access-token": `${api}`,
          "Access-Control-Allow-Origin": `*`,
        },
      });
      // Replace with your API endpoint
      const data = response.data; // Assuming your data is an array of objects

      console.log("Fetched data:", data); // Debugging line

      // Check if data is an array before mapping
      if (Array.isArray(data)) {
        const intensity = data?.coins?.map((x) => x.price);
        const startYear = data?.coins?.map((x) => x.name);
        setChartData({
          labels: startYear,
          datasets: [
            {
              label: "Data",
              data: intensity,
              backgroundColor: "rgba(75,192,192,0.2)",
              borderColor: "rgba(75,192,192,1)",
              borderWidth: 1,
            },
          ],
        });
      } else {
        console.error("Data is not an array:", data);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div>
      <h2>Bar Chart Example</h2>
      <Bar data={chartData} options={{ responsive: true }} />
    </div>
  );
}

export default BarChartComponent;

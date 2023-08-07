import React, { useEffect, useState } from "react";
import axios from "axios";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJs,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";

ChartJs.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

/* const user1 = [
  { name: "roger", items: 20, something: 100 },
  { name: "stefan", items: 21, something: 148 },
  { name: "henry", items: 22, something: 164 },
  { name: "hella", items: 23, something: 125 },
  { name: "brad", items: 24, something: 110 },
  { name: "leo", items: 25, something: 101 },
  { name: "richards", items: 26, something: 105 },
  { name: "monica", items: 27, something: 146 },
]; */

const ChartBar = () => {
  const [storedDataPlotting, settingStoredDataPlotting] = useState([]);
  const api = "coinranking75db724b2e35158d7ec034deacd88280b92c55d6f9d70031";
  const baseURL = "https://api.coinranking.com/v2/coins/?limit=13";
  var proxyUrl = "https://corsproxy.io/?";

  function fetchfunction() {
    try {
      const response = axios.get(`${proxyUrl}${baseURL}`, {
        headers: {
          "content-type": "application/json",
          "x-access-token": `${api}`,
          "Access-Control-Allow-Origin": `*`,
        },
      });
      const dataGathered = response;
      /*  console.log(
        "the intensity",
        dataGathered.map((user) => user.intensity)
      );
      console.log(
        "the end year data",
        dataGathered.map((user) => user.end_year)
      ); */
      const endYear = dataGathered?.coins?.map((data) => data.end_year);
      const yearsIntensity = dataGathered?.coins?.map((user) => user.intensity);
      settingStoredDataPlotting({
        labels: endYear,
        datasets: [
          {
            label: "items example",
            data: yearsIntensity,
            backgroundColor: "rgba(255,99,132)",
          },
        ],
      });
    } catch (error) {
      console.log("cant plot the data ");
    }
  }
  useEffect(() => {
    fetchfunction();
  }, []);

  return (
    <div>
      <Bar data={storedDataPlotting} />
    </div>
  );
};

export default ChartBar;

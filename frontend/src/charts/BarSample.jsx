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

const BarSample = () => {
  const [storedDataPlotting, settingStoredDataPlotting] = useState();
  const url = "http://localhost:5000/api/data";
  async function fetchfunction() {
    try {
      const response = await axios.get(url, {});
      console.log(1);

      const dataGathered = response.data;

      // const intensity = response.data?.intensity;
      console.log(2);
      console.log(
        "the intensity",
        // dataGathered.map((user) => user.intensity)
        dataGathered?.map((user) => user.intensity)
      );
      console.log(
        "the end year data",
        dataGathered?.map((user) => user.end_year)
      );
      const endYear = dataGathered?.map((data) => data.end_year);
      // const yearsIntensity = dataGathered?.map((user) => user.intensity);
      settingStoredDataPlotting({
        labels: endYear,
        datasets: [
          {
            label: "items example",
            data: "",
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
  }, [url]);

  return storedDataPlotting ? (
    <div>
      <Bar data={storedDataPlotting} />
    </div>
  ) : (
    ""
  );
};

export default BarSample;

import React, { useEffect, useState } from "react";
import {
  Chart as ChartJs,
  BarElement,
  CategoryScale,
  LinearScale,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJs.register(CategoryScale, LinearScale, BarElement);

const BarGraph = () => {
  const [chart, setChart] = useState([]);

  const api = "coinranking75db724b2e35158d7ec034deacd88280b92c55d6f9d70031";
  const baseURL = "https://api.coinranking.com/v2/coins/?limit=13";
  var proxyUrl = "https://corsproxy.io/?";
  useEffect(() => {
    const fetchCoins = async () => {
      await fetch(`${proxyUrl}${baseURL}`, {
        method: "GET",
        headers: {
          "content-type": "application/json",
          "x-access-token": `${api}`,
          "Access-Control-Allow-Origin": `*`,
        },
      })
        .then((response) => {
          response.json().then((json) => {
            console.log(json);
            setChart(json.data);
          });
        })
        .catch((error) => {
          console.log(error);
        });
    };
    fetchCoins();
  }, [api, baseURL, proxyUrl]);

  let data = {
    labels: [chart?.coins?.map((x) => x.name)],
    datasets: [
      {
        label: `${chart?.coins?.length} coins available `,
        data: chart?.coins?.map((x) => x.price),
        borderWidth: 1,
      },
    ],
  };
  var options = {
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true,
      },
    },
    legend: {
      fontSize: 26,
    },
  };

  return (
    <div>
      <Bar data={data} height={400} options={options} />
    </div>
  );
};

export default BarGraph;

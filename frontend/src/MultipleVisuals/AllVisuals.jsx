import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";

import DoughnutChart from "./DoughnutChart/DoughnutChart";
import "./AllVisuals.css";
import BarChart from "./BarChart/BarChart";

const url = "http://localhost:4000/api/alldata";
const AllVisuals = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const allDataGathered = await axios.get(url);
        const responseGatheredData = allDataGathered.data;
        setData(responseGatheredData);
        console.log(responseGatheredData);
      } catch (error) {
        console.error("error fetching the data", data);
      }
    };
    fetchData();
  }, [url]);

  return (
    <div class="container">
      <div class="component">
        <DoughnutChart data={data} />
      </div>
      <div class="component">
        <BarChart data={data} />
      </div>
      <div class="component">
        <DoughnutChart data={data} />
      </div>
      <div class="component">
        <BarChart data={data} />
      </div>
      <div class="component">
        <DoughnutChart data={data} />
      </div>
      <div class="component">
        <BarChart data={data} />
      </div>
      <div class="component">
        <DoughnutChart data={data} />
      </div>
    </div>
  );
};
/*
checking if the fetching is working or not
  const fetching = async () => {
    try {
      const response = await axios.get(url);
      console.log(response.data);
    } catch (error) {
      console.log("i think it is not fetching");
    }
  };
  useEffect(() => {
    fetching();

    return console.log("cleaning it up nigga");
  }, []);


*/

export default AllVisuals;

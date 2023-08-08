import axios from "axios";
import React, { useEffect } from "react";
const url = "http://localhost:4000/api/alldata";
const FetchedData = () => {
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
  return <div>fetchedData</div>;
};

export default FetchedData;

const express = require("express");
const fs = require("fs");
const mongoose = require("mongoose");
const cors = require("cors");
const MyData = require("./models/MyData.js");
const bodyParser = require("body-parser");
const csvParser = require("csv-parser");
const DataRoutes = require("./routes/routes");

const PORT = 4000;

//mongoConection
mongoose
  .connect(
    "mongodb+srv://shubhamhugay1:bec0DkL8F39g6q4h@rogerscluster.mhjukf9.mongodb.net/",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => console.log("the Db is connected"))
  .catch((error) => {
    console.error(error);
    console.log("cant connect the DB");
  });

//used npms
const app = express();

/* 
//this code imports the csv file form the folder and inserts it into the  mongoDB
const result = [];
fs.createReadStream("./Data.csv")
  .pipe(csvParser())
  .on("data", (data) => {
    result.push(data);
  })
  .on("end", async () => {
    try {
      await MyData.insertMany(result);
      console.log("the Data is imported successsffullyyyy nigga");
    } catch (error) {
      console.log(
        "error importing or it might be imported before or it has redundancy :-",
        error
      );
    }
  }); */
app.use(cors());
app.use(DataRoutes);

app.listen(PORT, () => {
  console.log(`the server has been started successfully - ${PORT}`);
});

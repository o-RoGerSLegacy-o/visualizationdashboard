const express = require("express");
const routes = require("./routes/routes");
const PORT = 5000;
const app = express();

//mongo connection usin mongoose
const mongoString = "mongodb+srv://root:root@cluster0.bywupkq.mongodb.net/";
const mongoose = require("mongoose");
mongoose.connect(mongoString);
const database = mongoose.connection;

database.on("error", (error) => {
  console.log(error);
});

database.once("connected", () => {
  console.log("Database Connected");
});
/////////////////////////////////////////////////////////////////////////////////////////

app.use(express.json());
app.use("api", routes);

app.listen(PORT, () => {
  console.log(`the server is started in port ${PORT}`);
});

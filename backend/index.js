/* const express = require("express");
const routes = require("./routes/routes");
const PORT = 3000;
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
 */

const express = require("express");
const mongoose = require("mongoose");
const mongoString = "mongodb+srv://root:root@cluster0.bywupkq.mongodb.net/";
const routes = require("./routes/routes");
const app = express();
app.use("/api", routes);
mongoose.connect(mongoString);
const database = mongoose.connection;

database.on("error", (error) => {
  console.log(error);
});

database.once("connected", () => {
  console.log("Database Connected");
});

app.use(express.json());

app.listen(5000, () => {
  console.log(`Server Started at ${5000}`);
});

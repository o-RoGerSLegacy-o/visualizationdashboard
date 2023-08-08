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

/* const express = require("express");
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
 */

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

// Connect to MongoDB

const app = express();
const port = 5000;
app.use(cors());

app.get("/api/data/", (req, res) => {
  MongoClient.connect(
    "mongodb+srv://root:root@cluster0.bywupkq.mongodb.net/",
    (err, client) => {
      if (err) throw err;
      const db = client.db("BlackOffer");
      const collection = db.collection("Data");

      collection.find({}).toArray((err, data) => {
        if (err) throw err;
        res.json(data);
        client.close();
      });
    }
  );
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

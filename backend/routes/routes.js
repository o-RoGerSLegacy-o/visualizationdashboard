const express = require("express");
const router = express.Router();

//posting data to the data base

//get all the methods
router.get("/getAll", (req, res) => {
  res.send("get all api");
});

//get the methods by id
router.get("/getOne", (req, res) => {
  res.send("get it by Id");
});

//update by ID methoid
router.patch("/update/:id", (req, res) => {
  res.send("updated by ud");
});

//delte the data by ID method

router.delete("/delete/:id", (req, res) => {
  res.send("deleted the data by Id");
});

module.exports = router;

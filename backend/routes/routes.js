const express = require("express");
const router = express.Router();
const MyData = require("../models/MyData");

router.get("/api/alldata", async (req, res) => {
  try {
    const allData = await MyData.find();
    res.json(allData);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
});

module.exports = router;

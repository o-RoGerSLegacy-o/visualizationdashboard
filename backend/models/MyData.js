const mongoose = require("mongoose");

const dataSchema = new mongoose.Schema({
  start_year: Number,
  end_year: Number,
  citylng: Number,
  citylat: Number,
  intensity: Number,
  impact: Number,
  relevance: Number,
  likelihood: Number,
  topics: String,
  insight: String,
  swot: String,
  url: String,
  region: String,
  addTime: String,
  sector: String,
  publishTime: String,
  city: String,
  country: String,
  pestle: String,
  source: String,
  title: String,
});

const MyData = mongoose.model("MyData", dataSchema);

module.exports = MyData;

const express = require("express");
const mongoose = require("mongoose");
const { Moviemodel } = require("./mongo");

const mongo = async () => {
  try {
    const connection = await mongoose.connect("mongodb://127.0.0.1:27017/imdb");
    console.log("Connected to mongo");
  } catch (error) {
    console.log("Can't connect to server");
    console.log(error);
  }
};
mongo();

const getRouter = express.Router();

const get_query = async (data) => {
  let name = data.name;
  var query = { name: { $regex: name } };
  const res = await Moviemodel.find(query);
  return res;
};

getRouter.get("/", async (req, res) => {
  if (Object.keys(req.query).length === 0) {
    const emptyQuery = await Moviemodel.find().limit(1);
    res.send(emptyQuery);
  } else {
    const ans = await get_query(req.query);
    res.send(ans);
  }
});

module.exports = { getRouter };

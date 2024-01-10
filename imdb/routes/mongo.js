const mongoose = require("mongoose")

const movieschema = mongoose.Schema(
  {
    name: { type: String, requires: true },
    rating: String,
    plot: String,
    year: { type: String, requires: true },
  },
  {
    versionKey: false,
  }
);

const Moviemodel = mongoose.model("movie", movieschema);

module.exports = { Moviemodel }
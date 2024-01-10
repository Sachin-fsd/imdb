const mongoose = require("mongoose");
const express = require("express");
const {getRouter} = require("../routes/getRouter");
const {postRouter} = require("../routes/postRouter");

const app = express();

app.use(express.json());

app.get("/",(req,res)=>{
  res.send("Welcome to imdb")
})

app.use("/get", getRouter)

app.use("/post", postRouter);


app.listen(3000, () => {
  console.log("server runnung at 3000");
});

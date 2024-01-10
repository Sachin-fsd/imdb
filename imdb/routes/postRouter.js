const express = require("express");
const mongoose = require("mongoose");
const {Moviemodel} = require("./mongo")

const postRouter = express.Router()

const post_movie = async (data) => {
  try {
    const new_movie = new Moviemodel(data);
    await new_movie.save();
    console.log("Data posted");
  } catch (error) {
    console.log("Can't post data");
    console.log(error);
  }
};

postRouter.post("/",async(req,res)=>{
    let ans = await post_movie(req.body);
    res.send(ans);
})

module.exports = { postRouter };

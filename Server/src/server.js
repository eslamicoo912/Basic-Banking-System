import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import dotenv from "dotenv";

const app = express();

// basic middlewares
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

// routes
app.get("/", (req, res) => {
  res.send("Hello");
});

// database

mongoose
  .connect(
    "mongodb+srv://eslamicoo912:671973@cluster0.frlrshg.mongodb.net/?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    app.listen(3000, () => {
      console.log(`listening for 3000`);
    });
  })
  .catch((err) => {
    console.log(err.message);
  });

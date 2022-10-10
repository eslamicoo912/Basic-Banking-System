import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import dotenv from "dotenv";
import customerRoutes from "./routes/customer.routes.js";

dotenv.config();
const app = express();
const port = process.env.PORT | 5000;

// basic middlewares
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());
app.use(express.json());

// routes
app.use("/customers", customerRoutes);
app.get("/", (req, res) => {
  res.send("Hello, Bank");
});

// database

mongoose
  .connect(process.env.CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(port, () => {
      console.log(`listening for ${port}`);
    });
  })
  .catch((err) => {
    console.log(err.message);
  });

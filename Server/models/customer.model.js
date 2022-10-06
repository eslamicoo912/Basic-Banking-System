import mongoose from "mongoose";

const Customer = mongoose.Schema({
  name: String,
  email: String,
  balance: Number,
});

const CustomerModel = mongoose.model("CustomerModel", Customer);

export default CustomerModel;

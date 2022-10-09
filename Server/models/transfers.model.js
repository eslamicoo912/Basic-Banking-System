import mongoose from "mongoose";

const Transfer = mongoose.Schema({
  sender: String,
  reciever: String,
  amount: Number,
  date: new Date(),
});

const TransferModel = mongoose.model("TransferModel", Transfer);

export default TransferModel;

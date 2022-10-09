import CustomerModel from "../models/customer.model.js";
import TransferModel from "../models/transfers.model.js";

export const createCustomer = async (req, res) => {
  try {
    const customer = new CustomerModel(req.body);
    customer.save();
    res.json(customer);
  } catch (error) {
    console.log(error.message);
  }
};

export const viewAllCustomers = async (req, res) => {
  try {
    const customers = await CustomerModel.find();
    res.json(customers);
  } catch (error) {
    console.log(error.message);
  }
};

export const viewOneCustomer = async (req, res) => {
  try {
    const customer = await CustomerModel.findOne({ email: req.params.email });
    res.json(customer);
  } catch (error) {
    console.log(error.message);
  }
};

export const transfer = async (req, res) => {
  const senderEmail = req.body.sender;
  const recieverEmail = req.body.reciever;
  const amount = parseInt(req.body.amount);
  try {
    const sender = await CustomerModel.findOne({ email: senderEmail });
    const reciever = await CustomerModel.findOne({ email: recieverEmail });

    if (sender === null || reciever === null)
      return res.status(200).json({ status: "failed" });

    if (sender.balance < amount)
      return res.status(200).json({ status: "not_enough" });

    await CustomerModel.updateOne(
      { email: senderEmail },
      { balance: sender.balance - amount }
    );
    await CustomerModel.updateOne(
      { email: recieverEmail },
      { balance: reciever.balance + amount }
    );

    const transfer = new TransferModel(req.body);
    transfer.save();

    res.status(200).json({
      status: "done",
      transaction: transfer,
    });
  } catch (error) {
    console.log(error.message);
  }
};

export const getTransfers = async (req, res) => {
  try {
    const transfers = await TransferModel.find();
    res.json(transfers);
  } catch (error) {
    console.log(error.message);
  }
};

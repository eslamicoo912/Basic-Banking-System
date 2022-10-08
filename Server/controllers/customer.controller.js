import CustomerModel from "../models/customer.model.js";

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

    console.log(sender);
    console.log(typeof sender.balance);
    console.log(reciever);
    console.log(typeof reciever.balance);

    const updatedSender = await CustomerModel.updateOne(
      { email: senderEmail },
      { balance: sender.balance - amount }
    );
    const updatedReciever = await CustomerModel.updateOne(
      { email: recieverEmail },
      { balance: reciever.balance + amount }
    );
    res.json({
      sender: updatedSender,
      reciever: updatedReciever,
    });
  } catch (error) {
    console.log(error.message);
  }
};

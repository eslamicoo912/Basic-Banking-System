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
    const customer = await CustomerModel.findOne({ name: req.params.name });
    res.json(customer);
  } catch (error) {
    console.log(error.message);
  }
};

/*
export const transfer = async (req, res) => {
  const sender = { email: req.body.sender };
  const reciever = { email: req.body.reciever };

  try {
    const customerSender = await CustomerModel.findOneAndUpdate(sender, {
      balance: 99999 - req.body.amount,
    });
    const customerReciever = await CustomerModel.findOneAndUpdate(reciever, {
      balance: 99999 + req.body.amount,
    });
    res.json({
      sender: customerSender,
      reviever: customerReciever,
    });
  } catch (error) {
    console.log(error);
  }
};*/

export const transfer = async (req, res) => {
  const senderEmail = req.body.sender;
  const recieverEmail = req.body.reciever;
  try {
    const sender = await CustomerModel.findOne({ email: senderEmail });
    const reciever = await CustomerModel.findOne({ email: recieverEmail });
    const amount = parseInt(req.body.amount);

    const updatedSender = await CustomerModel.findOneAndUpdate(
      { email: senderEmail },
      { balance: sender.balance - amount },
      { new: true }
    );
    const updatedReciever = await CustomerModel.findOneAndUpdate(
      { email: recieverEmail },
      { balance: reciever.balance + amount },
      { new: true }
    );

    res.json({
      sender: updatedSender,
      reciever: updatedReciever,
    });
  } catch (error) {
    console.log(error.message);
  }
};

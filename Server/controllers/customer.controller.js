import CustomerModel from "../models/customer.model";

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

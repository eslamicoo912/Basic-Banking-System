import TransferModel from "../models/transfers.model";

export const createTransfer = async (req, res) => {
  try {
    const transfer = new TransferModel();
    transfer.save();
    res.json(transfer);
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

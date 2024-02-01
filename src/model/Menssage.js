const mongoose = require("mongoose");

const Menssage = mongoose.model(
  "Menssage",
  new mongoose.Schema({
    content: {
      type: String,
      required: true,
      minlength: 1,
    },
    sender: {
      type: String,
      required: true,
    },
    receiver: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
      required: true,
    },
    updatedAt: {
      type: Date,
      required: false,
    },
    removedAt: {
      type: Date,
      required: false,
    },
  })
);
module.exports = Menssage;

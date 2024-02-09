const mongoose = require("mongoose");

const Menssagem = mongoose.model(
  "Menssagem",
  new mongoose.Schema({
    content: {
      type: String,
      required: true,
      minlength: 1,
    },
    senderId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    receiverId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    createdAt: {
      type: Date,
      required: true,
    },
    removedAt: {
      type: Date,
      default: null,
    },
  })
);
module.exports = Menssagem;

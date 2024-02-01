const mongoose = require("mongoose");

const User = mongoose.model(
  "User",
  new mongoose.Schema({
    name: {
      type: String,
      required: true,
      minlength: 3,
    },
    birth: {
      type: Date,
      required: true,
    },
    email: {
      type: String,
      required: true,
      minlength: 5,
    },
    password: {
      type: String,
      required: true,
      minlength: 6,
    },
    cpf: {
      type: String,
      required: true,
      minlength: 11,
    },
    comment: {
      type: String,
      required: false,
      minlength: 2,
    },
    isAdm: {
      type: Boolean,
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
module.exports = User;

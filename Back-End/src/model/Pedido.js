const mongoose = require("mongoose");
const { userSchema } = require("../controller/User");

const Pedido = mongoose.model(
  "Pedido",
  new mongoose.Schema({
    userId: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
      minlength: 3,
    },
    text: {
      type: String,
      required: true,
      minlength: 15,
    },
    difficulty:{
      type: String,
      required: true,
    },
    language:{
      type: String,
      required: true,
    },
    precoMin:{
      type: String,
      required: true,
    },
    precoMax:{
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
      required: true,
    },
    updatedAt: { 
      type: Date, 
      required: false 
    },
    removedAt: {
      type: Date,
      required: false,
    },
  })
);

module.exports = Pedido;

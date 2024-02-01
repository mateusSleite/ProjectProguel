const mongoose = require("mongoose");
const { userSchema } = require("../controller/User");

const Pedido = mongoose.model(
  "Pedido",
  new mongoose.Schema({
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
    user: {
      type: String,
      required: true,
    },
    value:{
      type: Number,
      required: true,
    },
    date: {
      type: Date,
      required: true,
    },
    likes: {
      type: Number,
      required: true,
    },
    likedBy: [
      {
        type: String,
        required: true
      }
    ],
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

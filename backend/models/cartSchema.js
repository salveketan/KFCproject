const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema({
    image_url: { type: String, required: true },
    title: { type: String, required: true },
    price: { type: Number, required: true },
    desc: { type: String, required: false },
});
const Cart = mongoose.model("CART", cartSchema);

module.exports = Cart;
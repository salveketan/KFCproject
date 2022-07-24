const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    image_url: { type: String, required: true },
    title: { type: String, required: true },
    price: { type: Number, required: true },
    desc: { type: String, required: false },
});

module.exports = mongoose.model("Product", productSchema);


const mongoose = require("mongoose");

const userScheama = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: Number, required: true },
});

const User = mongoose.model("USER", userScheama);

module.exports = User;
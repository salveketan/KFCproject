const express = require("express");
const { model } = require("mongoose");
const router = express.Router();
const Product = require("../models/productSchema");

// const crudController = require("./crudController");


// router.post("", crudController.post(Product));
// router.delete("/:id", crudController.deleteOne(Product));

router.get("", async (req, res) => {
    try {
        const product = await Product.find().lean().exec();
        return res.status(200).send({ product: product }); 
    } catch (err) {
        return res.status(500).send({ message: err.message });
    }
});

// ======single product==========

// router.get("/:id", async (req, res) => {
//     try {
//         const product = await Product.findById(req.params.id).lean().exec();
//         return res.status(200).send({ product: product })
//     }
//     catch (err) {
//         return res.status(500).send({ message: err.message })
//     }

// })
module.exports = router;
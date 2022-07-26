const exoress = require("express");
const Cart = require("../models/cartSchema");
const router = exoress.Router();

router.post("", async (req, res) => {
    const { image_url, title, price, desc } = req.body;

    try {
        const product = new Cart({ image_url, title, price, desc });
        await product.save();
        return res.status(200).json({ message: "succssefully added" })
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "not added" })
    }
});

module.exports = router;
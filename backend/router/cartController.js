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



router.get("", async (req, res) => {
    try {
        const cart = await Cart.find().lean().exec();
        return res.status(200).send({ cart: cart }); // []
    } catch (err) {
        return res.status(500).send({ message: err.message });
    }
});


router.delete("/:id", async (req, res) => {
    try {
        const cart = await Cart.findByIdAndDelete(req.params.id).lean().exec();
        return res.status(200).send(cart);
    } catch (err) {
        return res.status(500).send({ message: err.message });
    }
});

module.exports = router;
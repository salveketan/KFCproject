
const express = require("express");
const app = express();
const dotenv = require("dotenv");
const ProductController = require("./router/ProductController");
const CartController = require("./router/cartController")
const Auth = require("./models/userSchema");
const cors = require("cors");
app.use(cors());
dotenv.config({ path: "./config.env" })

require("./db/conn");

app.use(express.json());
app.use(require("./router/auth"));
app.use("/product", ProductController);
app.use("/cart", CartController)
app.use("/user", Auth)

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
})



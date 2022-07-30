const express = require("express");
const router = express.Router();

const User = require("../models/userSchema");


router.get("/", (req, res) => {
    res.send("hello home")
})

router.post("/signup", async (req, res) => {
    const { name, email, phone } = req.body;

    if (!name || !email || !phone) {
        return res.status(422).json({ Error: "please all field" })
    }
    try {
        const userExist = await User.findOne({ phone: phone });

        if (userExist) {
            return res.status(422).json({ error: "Phone no. is already exist" })
        }

        const user = new User({ name, email, phone });

        await user.save();
        return res.status(201).json({ message: "user registerd succefully" })
    } catch (error) {
        console.log(error);
    }

})

router.post("/signin", async (req, res) => {

    const { phone } = req.body;

    try {
        const userLoginExist = await User.findOne({ phone: phone });
        // console.log(userLoginExist);
        if (userLoginExist) {
            res.status(201).json({ message: "successfull login" })
        } else {
            res.status(400).json({ message: "Invalid Credientials" })
        }
    } catch (error) {
        console.log(error);
    }

});

// router.get("/users",async(req, res)=>{
//     try {
//         const user = await 
//     } catch (error) {

//     }
// })

router.get("/users", async (req, res) => {
    // console.log("hello mid");
    // res.send("hello world about");
    res.send("yes");
    // try {
    //     const usersData = await User.find();
    //     res.send(usersData);
    // } catch (error) {
    //     res.send(error)
    // }
});

module.exports = router;
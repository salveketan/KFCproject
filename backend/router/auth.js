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
        const userExist = await User.findOne({ email: email });

        if (userExist) {
            return res.status(422).json({ error: "email already exist" })
        }

        const user = new User({ name, email, phone });

        await user.save();
        return res.status(201).json({ message: "user registerd succefully" })
    } catch (error) {
        console.log(error);
    }

})


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
// router.get("", async (req, res) => {
//     try {
//         const user = await User.find().lean().exec();
//         return res.status(200).send({ user: user }); // []
//     } catch (err) {
//         return res.status(500).send({ message: err.message });
//     }
// });


module.exports = router;
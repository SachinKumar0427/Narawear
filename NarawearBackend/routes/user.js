const express = require("express");
const {
  signupHandler,
  loginHandler,
  protect,
} = require("./../controllers/usercontroller");

const user = express.Router();

user.post("/signup", signupHandler);
user.post("/login", loginHandler);
// user.get("/profile", profileHandler);

user.use(protect);
user.get("/profile", (req, res) => {
  res.status(200).json({ message: req.user });
});
user.get("/logout", (req, res) => {
  res.cookie("jwt", "", { maxAge: 10000 });
  res.send({ status: "OK", message: "logged out!" });
});

    // {Addressform}

user.post("/address", async(req, res)=>{
  try {
    const user = req.user;
    user.addresses.push(req.body);
    if(user.addresses.length==1) user.addresses[0].defaultAddress = true;
    await user.save();
    res.status(201).json({message: user.addresses});
  } catch (error) {
    res.status(400).json({error: error.message})
  }
});

user.delete("/address", async(req, res)=>{
  try {
    const user = req.user;
    const address = user.addresses.id(req.body.id);
    if(!address) throw new Error("Could not find the address!")
    address.deleteOne();
    await user.save();
    res.status(200).json({message: user.addresses});
  } catch (error) {
    res.status(400).json({error: error.message})
  }
})

user.patch("/address", async(req, res)=>{
  try {
    const user = req.user;
  
    const defaultAddressIndex = user.addresses?.findIndex(el=>el.defaultAddress==true)

    const address = user.addresses.id(req.body.id);
    if(!address) throw new Error("Could not find the address!")
    address.defaultAddress = true;

    if(defaultAddressIndex!= undefined && defaultAddressIndex!=-1) user.addresses[defaultAddressIndex].defaultAddress= false;
    console.log(defaultAddressIndex, "default address")
    await user.save();
    res.status(200).json({message: user.addresses});
  } catch (error) {
    console.log(error)
    res.status(400).json({error: error.message})
  }
})

module.exports = user;

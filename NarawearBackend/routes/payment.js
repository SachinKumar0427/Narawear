const express = require("express");
const crypto = require("crypto");
const { protect } = require("./../controllers/auth");
router = express.Router();
const Razorpay = require("razorpay");
const { recompileSchema } = require("../Models/UserModel");
const { mailer } = require("../utils/Email");

const razorpay = new Razorpay({
        key_id: process.env.RAZ_KEY_ID,
        key_secret: process.env.RAZ_KEY_SECRET,
      });

router.use(protect);

router.get("/createorder", async (req, res) => {
  try {
    const user = req.user;
    const cart = user.cart;
    const amount = cart.reduce(
      (acc, cartItem) => acc + cartItem.quantity * cartItem.price,
      0
    );
    const options = {
        amount: amount*100, //paise me convert kiya,
        receipt: "reciept_"+Math.random().toString(32).substring(5),
        notes:{
            userId: user._id,
            cart: user.cart
        }
    }

    const order = await razorpay.orders.create(options)

    res.json({
      message: order,
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.post("/verify", async (req, res) => {
    try {
      
      const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = req.body;
      const sign = razorpay_order_id + '|' + razorpay_payment_id;
      const expectedSign = crypto.createHmac('sha256', process.env.RAZ_KEY_SECRET)
                              .update(sign.toString())
                              .digest('hex');
      if (razorpay_signature === expectedSign) {
        // Payment is verified
        console.log("Paid!")
        const user = req.user;
        // i) order place hone ke bar cart khali karne ke liye
        user.cart = [];
      
        // Fetch Order details

        const order = await razorpay.orders.fetch(razorpay_order_id);
        user.orders.push({...order, items:order.notes.cart, order_id:order.id});
        console.log(order.cart)
        // ii)fir khali cart ko save karna h 
        await user.save();

        console.log(order)

        res.status(200).json({ message: 'Payment verified successfully' });
        await mailer.sendMail({to: user.email, subject: "Order Placed", text: "An order of INR "+order.amount/100+" has been placed successfully!"});

      } else {
        res.status(400).json({ error: 'Invalid payment signature' });
        console.log("FAILED")
      }
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  })

module.exports = router;

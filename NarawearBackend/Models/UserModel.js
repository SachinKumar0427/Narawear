
const mongoose = require("mongoose");

const cartItemSchema = new mongoose.Schema({
  productId: String,
  size: String,
  image: String,
  title: String,
  quantity: Number,
  price: String
}) //Bad Schema, kyunki koi validation nhi hai

const orderSchema = new mongoose.Schema({
  amount: String,
  order_id: String,
  receipt: String,
  items: [cartItemSchema]
});
const addressSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  phone: String,
  addressLine1: String,
  addressLine2: String,
  state: String,
  city: String,
  pincode: String,
  defaultAddress: {
    type: Boolean,
    default: false
  }
})
const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    phone: String,
    otp: String,
    cart: [cartItemSchema],
    orders: [orderSchema],
    addresses: [addressSchema]
});

const user = mongoose.model("users", userSchema);

// userSchema.pre("save", async function(next){
//   const currentUser = this;
//   if(currentUser.addresses?.length==1){
//       currentUser.addresses[0].defaultAddress = true;
//   }
//   next();
// })

module.exports = user;
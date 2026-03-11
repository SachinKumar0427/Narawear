const express = require("express");
const cookieparser = require("cookie-parser");
const mongoose = require("mongoose");
const cors = require("cors");

mongoose
  .connect("mongodb://127.0.0.1:27017/narawear")
  .then(() => console.log("connected"))
  .catch((error) => console.log(error));

const userRouter = require("./routes/user");
const productRouter = require("./routes/ProductRoutes");
const cartRouter = require("./routes/cart");
const paymentRouter = require("./routes/payment")

const app = express();
app.use(express.json());
app.use(cookieparser());

app.use(cors({ origin: "http://localhost:5173", credentials: true }));

app.use("/image", express.static("./images"));
app.use("/user", userRouter);
app.use("/product", productRouter);
app.use("/cart", cartRouter);
app.use("/payment", paymentRouter)
app.listen(8080, () => console.log("Server listen on port 8080"));


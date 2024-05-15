//standard server initialization
const express = require("express");
const server = express();
const mongoose = require("mongoose");
const cors = require("cors");

const { createProduct } = require("./controller/Product.js");
const productsRouter = require("./routes/Product.js");
const categoriesRouter = require("./routes/Category.js");
const brandsRouter = require("./routes/Brand.js");
const usersRouter = require("./routes/User.js");
const authRouter = require("./routes/Auth.js");
const cartRouter = require("./routes/Cart");
const ordersRouter = require("./routes/Order");
//midleware
server.use(cors({
  exposedHeaders:['X-Total-Count']
}))
server.use(express.json()); //to parse req.body
server.use('/products', productsRouter.router);
server.use('/categories', categoriesRouter.router);
server.use('/brands', brandsRouter.router);
server.use('/user', usersRouter.router);
server.use('/auth', authRouter.router);
server.use('/cart', cartRouter.router)
server.use('/orders', ordersRouter.router)
//database connection
main().catch((err) => console.log(err));
async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/PangeMartdb");
  console.log("database connected");
}

//api path
server.get("/", (req, res) => {
  res.json({ status: "success" });
});


//listen function for status
server.listen(8080, () => {
  console.log("server started...");
});

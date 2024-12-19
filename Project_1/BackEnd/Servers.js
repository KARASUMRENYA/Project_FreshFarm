import express, { json } from "express";
import { config } from "dotenv";
import { connectDB } from "./config/DB.js";
import productRouter from "./Routes/router.js"; 
import Product from "./product.model.js";



config();

const app = express();
const PORT = process.env.PORT || 3000;
app.use(json());

connectDB();

app.use("/api/products", productRouter);

app.listen(PORT, (error) => {
  if (!error) {
    console.log(`Server is running on port ${PORT}`);
  } else {
    console.log(`Error occurred, server can't start`, error);
  }
})

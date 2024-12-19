import express from "express";
import Product from "../product.model.js";
import mongoose from "mongoose";
import { createProduct, deleteProduct, getProduct, updateProduct } from "../Controller/controller.product.js";

const router = express.Router();

router.post("/", createProduct)
router.get("/", getProduct);
router.delete("/:id",deleteProduct);
router.put("/:id", updateProduct);



export default router;
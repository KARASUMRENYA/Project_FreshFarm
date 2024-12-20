import mongoose from "mongoose";
import Product from "../product.model.js";

export const getProduct = async(req, res)=>{
    try{
        const products = await Product.find();
        res.status(200).json(products);
    }
    catch(error){
        console.error("Error fetching the products: ", error);
        res.status(500).json({message:"Error occurred, please try again"});
    }
}
export const createProduct = async(req,res)=>{
    if(!req.body.name || !req.body.price || !req.body.image){
        res.status(400).send("Please provide all the required fields");
        return;
    }
    try{
           const product = req.body;
           const newProduct = new Product(product);
            await newProduct.save();
            res.status(201).jason({message:"Product added successfully"});
            return;
    }
    catch(error){
        console.error("Error savng the product: ", error);
        res.status(500).jason({message:"Error occurred, please try again"});
        return;
    }
}
export const updateProduct = async(req,res)=>{
    try{
        const id = req.params.id;
        const product = await Product.findByIdAndUpdate(id, req.body);
        if(!product){
            res.status(404).json({message:"Product not found"});
            return;
        }
        res.status(200).json({message:"Product updated successfully"});
    }
    catch(error){
        console.error("Error updating the product: ", error);
        res.status(500).json({message:"Error occurred, please try again"});
        return;
    }
}
export const deleteProduct = async(req,res)=>{
    try{
        const id = req.params.id;
        const product = await Product.findByIdAndDelete(id);
        if(!product){
            res.status(404).json({message:"Product not found"});
            return;
        }
        res.status(200).json({message:"Product deleted successfully"});
    }
    catch(error){
        console.error("Error deleting the product: ", error);
        res.status(500).json({message:"Error occurred, please try again"});
        return;
    }
}
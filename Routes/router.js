import express from "express";
import Product from "../product.model.js";
import mongoose from "mongoose";
import { createProduct, deleteProduct, getProduct, updateProduct } from "../Controller/controller.product.js";

const router = express.Router();

router.post("/", createProduct)
router.get("/", getProduct);
router.delete("/:id",deleteProduct);
router.put("/:id", updateProduct);

//profile routing profile

import {
    createProfile,
    getAllProfiles,
    getProfileById,
    updateProfile,
    deleteProfile,
} from '../Controller/controller.profile.js';


router.post('/profiles', createProfile);
router.get('/profiles', getAllProfiles);
router.get('/profiles/:id', getProfileById);
router.put('/profiles/:id', updateProfile);
router.delete('/profiles/:id', deleteProfile);


export default router;
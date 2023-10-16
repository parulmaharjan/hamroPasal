import express from "express";
import {
  createProduct,
  deleteProduct,
  getProductById,
  getProducts,
  updateProduct,
} from "../controllers/productControllers.js";
import upload from "../file/upload.js";
import { isAuthAdmin, isAuthenticated } from "../middleWares/auth.js";

const router = express.Router();

//create route
router.post(
  "/add/product",
  isAuthenticated,
  isAuthAdmin,
  upload.single("productImg"),
  createProduct
); //single route
router.get("/all/products", getProducts);
router.put(
  "/update/product/:id",
  isAuthenticated,
  isAuthAdmin,
  upload.single("productImg"),
  updateProduct
);
router.delete(
  "/delete/product/:id",
  isAuthenticated,
  isAuthAdmin,
  deleteProduct
);
router.get("/single/getProductById/:id", getProductById);

export default router;

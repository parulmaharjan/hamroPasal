import Product from "../model/productModel.js";
import { unlink } from "fs/promises";
import { join } from "path";
import path from "path";
import fs from "fs";
import ErrorHandler from "../utils/errorHandler.js";
import { tryCatchAsyncError } from "../middleWares/tryCatchAsyncErrors.js";
import ApiFeatures from "../helper/apiFeatures.js";

export const createProduct = tryCatchAsyncError(async (req, res, next) => {
  const {
    productName,
    description,
    category,
    price,
    isInStock,
    ratings,
    manufacture,
    SKU,
  } = req.body;
  if (
    !productName ||
    !description ||
    !category ||
    !price ||
    !isInStock ||
    !ratings ||
    !manufacture ||
    !SKU
  ) {
    if (req.file) {
      await unlink(req.file.path);
    }
    return next(new ErrorHandler("please provide all field", 400));
  }
  const baseUrl = `${req.protocol}://${req.hostname}:${
    process.env.PORT || 5000
  }`;
  const imagePath = req.file?.filename;
  let productImageUrl;

  if (imagePath) {
    productImageUrl=`${baseUrl}/gallery/${imagePath}`.replace(/\\/g, "/");

  }
  const product = await Product.create({
    productName,
    description,
    category,
    price,
    isInStock,
    ratings,
    manufacture,
    SKU,
    productImg: productImageUrl ? { url: productImageUrl } : undefined,
  });
  res.status(201).json({
    success: true,
    message: "product created sucessfuly",
    product,
  });
});

//get all product
export const getProducts = tryCatchAsyncError(async (req, res, next) => {
  const resultPerPage = 6;
  const countDocument = await Product.countDocuments();
  const apiFeature = new ApiFeatures(Product.find(), req.query)
    .search()
    .filter()
    .pagination(resultPerPage);
  const products = await apiFeature.query;
  if (!products) return next(new ErrorHandler("product not found", 404));
  res.status(200).json({
    success: true,
    message: "products gets sucessfully",
    products,
    resultPerPage,
    countDocument,
  });
});

//get product by id
export const getProductById = tryCatchAsyncError(async (req, res, next) => {
  const productId = req.params.id;
  let product = await Product.findById(productId);
  if (!product) return next(new ErrorHandler("product not found", 404));
  res.status(200).json({
    success: true,
    message: "product get by ID",
    data: product,
  });
});

//update  product
export const updateProduct = tryCatchAsyncError(async (req, res, next) => {
  const productId = req.params.id;
  let product = await Product.findById(productId);
  if (!product) return next(new ErrorHandler("product not found", 404));

  const {
    productName,
    description,
    category,
    price,
    isInStock,
    ratings,
    manufacture,
    SKU,
  } = req.body;

  if (
    !productName ||
    !description ||
    !price ||
    !category ||
    !isInStock ||
    !ratings ||
    !manufacture ||
    !SKU
  ) {
    return res.status(400).json({
      success: false,
      message: "Please provide all fields!",
    });
  }

  const existingImageUrl = product.productImg.url;
  const baseUrl = `${req.protocol}://${req.hostname}:${
    process.env.PORT || 5000
  }`;
  const imagePath = req.file?.filename;
  let productImageUrl;
  if (existingImageUrl) {
    const filename = path.basename(existingImageUrl);
    const previousImagePath = path.join("public", "gallery", filename);
    fs.unlinkSync(previousImagePath);
  }

  if (imagePath) {
    productImageUrl=`${baseUrl}/gallery/${imagePath}`.replace(/\\/g, "/");

  }

  product.productName = productName;
  product.description = description;
  product.category = category;
  product.price = price;
  product.isInStock = isInStock;
  product.ratings = ratings;
  product.manufacture = manufacture;
  product.SKU = SKU;
  product.productImg = productImageUrl ? { url: productImageUrl } : undefined;
  await product.save();
  res.status(200).json({
    success: true,
    message: "Updated",
    product,
  });
});

//delete product
export const deleteProduct = tryCatchAsyncError(async (req, res, next) => {
  const productId = req.params.id;
  const product = await Product.findById(productId);
  if (!product) return next(new ErrorHandler("product not found", 404));

  const existingImageUrl = product.productImg.url;
  if (existingImageUrl) {
    const filename = path.basename(existingImageUrl);
    const previousImagePath = path.join("public", "gallery", filename);
    fs.unlinkSync(previousImagePath);
  }
  await product.deleteOne();
  res.status(200).json({
    success: true,
    message: "product deleted",
  });
});

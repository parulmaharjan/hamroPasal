import mongoose from "mongoose";

//creating schema
const productSchema = new mongoose.Schema({
  productName: {
    type: String,
    required: [true, "please fill productname"],
  },
  description: {
    type: String,
    required: [true, "please fill description"],
  },
  productImg: {
    url: {
      type: String,
    },
  },
  category: {
    type: String,
    required: [true, "please fill category"],
  },
  price: {
    type: Number,
    required: [true, "please fill price"],
  },
  ratings: {
    type: Number,
  },

  manufacture: {
    type: String,
  },
  SKU: {
    type: String,
  },
  isInStock: {
    type: Number,
    required: [true, "please fill isInStock"],
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

const Product = new mongoose.model("product", productSchema);
export default Product;

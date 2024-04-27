import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name is required"],
    validate: {
      validator: function (v: any) {
        return v.trim().length > 0; // Trimmed length of string should be greater than 0
      },
      message: "Name cannot be empty",
    },
  },
  description: {
    type: String,
    required: [true, "Description is required"],
  },
  price: {
    type: Number,
    required: [true, "Price is required"],
  },
  imgUrl: {
    type: String, 
    required: [true, "Price is required"],
  },
  isSpecial: {
    type: Boolean,
    default: false,
  },
  bgcolor: String,
});

const Product =
  mongoose.models.Product || mongoose.model("Product", ProductSchema); // Change "products" to "Product"

export default Product;

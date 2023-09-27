import express from "express";
import {
  postProduct,
  getProducts,
  updateProduct,
  deleteProduct,
} from "../controller/CRUDcontroller.js";
export const router = express.Router();

router
  .post("/v1/product/new", postProduct)
  .get("/v1/products", getProducts)
  .put("/v1/product/:id", updateProduct)
  .delete("/v1/product/:id", deleteProduct);

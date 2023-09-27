import express from "express";
import {
  postProduct,
  getProducts,
  updateProduct,
  deleteProduct,
} from "../controller/CRUDcontroller.js";
export const router = express.Router();

router.post("/v1/product/new", postProduct);
router.get("/v1/products", getProducts);
router.put("/v1/product/:id", updateProduct);
router.delete("/v1/product/:id", deleteProduct);

const express = require("express");
const {
  postProduct,
  getProducts,
  updateProduct,
  deleteProduct,
} = require("../controller/CRUDcontroller");
const router = express.Router();

router
  .post("/v1/product/new", postProduct)
  .get("/v1/products", getProducts)
  .put("/v1/product/:id", updateProduct)
  .delete("/v1/product/:id", deleteProduct);

module.exports = router;

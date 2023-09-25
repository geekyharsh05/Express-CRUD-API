const express = require("express");
const {
  postProduct,
  getProducts,
  updateProduct,
  deleteProduct,
} = require("../controller/CRUDcontroller");
const router = express.Router();

router.post("/v1/product/new", postProduct);
router.get("/v1/products", getProducts);
router.put("/v1/product/:id", updateProduct);
router.delete("/v1/product/:id", deleteProduct);
module.exports = router;

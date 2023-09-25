const Product = require("../db/Schema");

const handleErrorResponse = (res, statusCode, message) => {
  res.status(statusCode).json({
    success: false,
    error: message,
  });
};

const getProducts = async (req, res) => {
  try {
    const products = await Product.find();

    res.status(200).json({
      success: true,
      products,
    });
  } catch (error) {
    handleErrorResponse(res, 500, error.message);
  }
};
const postProduct = async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.status(201).json({
      success: true,
      product,
    });
  } catch (error) {
    handleErrorResponse(res, 500, error.message);
  }
};

const updateProduct = async (req, res) => {
  try {
    const product = await Product.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      useFindAndModify: false,
      runValidators: true,
    });
    if (!product) {
      return handleErrorResponse(res, 404, "Product not found!");
    }
    res.status(200).json({
      success: true,
      product,
    });
  } catch (error) {
    handleErrorResponse(res, 500, error.message);
  }
};

const deleteProduct = async (req, res) => {
  try {
    const deletedProduct = await Product.findByIdAndDelete(req.params.id);

    if (!deletedProduct) {
      return res.status(404).json({
        success: false,
        message: "Product not found!",
      });
    }

    res.status(200).json({
      success: true,
      message: "Product is deleted successfully",
    });
  } catch (error) {
    handleErrorResponse(res, 500, error.message);
  }
};
module.exports = {
  getProducts,
  postProduct,
  updateProduct,
  deleteProduct,
};

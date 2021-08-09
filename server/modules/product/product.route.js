const express = require("express");
const router = express.Router();
const authorize = require("./../../middlewares/authorize");

const productController = require("./product.controller");

router
  .route("/")
  .post(authorize, productController.createProduct)
  .get(productController.getProducts);

router.route("/:id").get(productController.getProductByUser);

module.exports = router;

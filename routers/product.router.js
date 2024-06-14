const express = require("express");
const ProductController = require("../controllers/product.controller");
const router = express.Router();
const verify = require("../middlewares/verifyToken")

router.post("/create-product",
    verify.verifyToken,
    verify.isAdmin,
    ProductController.createProduct);
router.post("/random-product", ProductController.randomProduct);
router.get("/get-product", ProductController.getProducts);
router.get("/get-productById/:id", ProductController.getProductById);
router.delete("/delete-productById/:id",
    verify.verifyToken,
    verify.isAdmin,
    ProductController.deleteProduct);

module.exports = router;

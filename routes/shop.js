const path = require('path');

const express = require("express");
/*const { body } = require("express-validator/check"); */

const shopController = require("../controllers/shop");

const router = express.Router();

router.get('/', shopController.getIndex);

router.get('/products', shopController.getProducts);
router.get('/products/:productId', shopController.getProduct);
router.get('/cart', shopController.getCart);
router.post('/cart', shopController.postCart);
router.post('/cart-delete-item', shopController.postCartDeleteProduct);
router.get('/orders', shopController.getOrders);
router.get('/checkout', shopController.getCheckout);

/*router.get("/products", productsController.getProducts);

router.post(
  "/product",
  [
    body("title").trim().isLength({ min: 4 }),
    body("content").trim().isLength({ min: 4 }),
  ],
  shopController.postProduct
);*/

module.exports = router;

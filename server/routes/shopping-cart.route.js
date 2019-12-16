const express = require('express');

const ShoppingCartCtrl = require('../controllers/shopping-cart.controller');

const router = express.Router();

router.post('/', ShoppingCartCtrl.create);
router.post('/update', ShoppingCartCtrl.shoppingCartUpdate);
router.post('/complete/:id', ShoppingCartCtrl.shoppingCartComplete);
router.post('/count/:customerId', ShoppingCartCtrl.userOrderCount);
router.get('/latest/:customerId', ShoppingCartCtrl.latestShoppingCart);

module.exports = router;
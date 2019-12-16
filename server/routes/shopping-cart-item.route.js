const express = require('express');

const ShoppingCartItemCtrl = require('../controllers/shopping-cart-item.controller');

const router = express.Router();

router.post('/', ShoppingCartItemCtrl.create);
router.post('/update', ShoppingCartItemCtrl.shoppingCartItemUpdate);
router.get('/:cartId', ShoppingCartItemCtrl.getShoppingCartItem);
router.delete('/:id', ShoppingCartItemCtrl.deleteShoppingCartItem);

module.exports = router;
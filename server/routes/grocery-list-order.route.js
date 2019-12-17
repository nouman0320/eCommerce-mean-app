const express = require('express');

const GroceryListOrderCtrl = require('../controllers/grocery-list-order.controller');

const router = express.Router();

router.post('/', GroceryListOrderCtrl.create);
router.get('/count', GroceryListOrderCtrl.countGroceryListOrders);

module.exports = router;
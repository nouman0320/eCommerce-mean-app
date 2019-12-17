const express = require('express');
const router = express.Router();

const customerRoutes = require('./customer.route');
const adminRoutes = require('./administrator.route');
const categoryRoutes = require('./category.route');
const groceryItemRoutes = require('./grocery-item.route');
const shoppingCartRoutes = require('./shopping-cart.route');
const shoppingCartItemRoutes = require('./shopping-cart-item.route');
const groceryListOrderRoutes = require('./grocery-list-order.route');

router.get('/', function (req, res) {
  res.send('API is functional.');
});

router.use('/customers', customerRoutes);
router.use('/admins', adminRoutes);
router.use('/categories', categoryRoutes);
router.use('/grocery-items', groceryItemRoutes);
router.use('/shopping-cart', shoppingCartRoutes);
router.use('/shopping-cart-item', shoppingCartItemRoutes);
router.use('/grocery-list-order', groceryListOrderRoutes);

module.exports = router;
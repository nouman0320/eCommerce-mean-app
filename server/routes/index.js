const express = require('express');
const router = express.Router();

const customerRoutes = require('./customer.route');
const adminRoutes = require('./administrator.route');
const categoryRoutes = require('./category.route');


router.get('/', function (req, res) {
  res.send('API is functional.');
});

router.use('/customers', customerRoutes);
router.use('/admins', adminRoutes);
router.use('/categories', categoryRoutes);

module.exports = router;
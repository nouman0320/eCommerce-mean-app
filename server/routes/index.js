const express = require('express');
const router = express.Router();

const customerRoutes = require('./customer.route');


router.get('/', function (req, res) {
  res.send('API works!');
});

router.use('/customers', customerRoutes);

module.exports = router;
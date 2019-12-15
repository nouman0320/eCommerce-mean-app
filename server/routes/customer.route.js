const express = require('express');

const CustomerCtrl = require('../controllers/customer.controller');

const router = express.Router();

router.post('/', CustomerCtrl.create);
router.post('/login', CustomerCtrl.customerLogin);
router.get('/:username', CustomerCtrl.customerDetails);

module.exports = router;
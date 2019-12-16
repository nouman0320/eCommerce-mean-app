const express = require('express');

const AdminCtrl = require('../controllers/administrator.controller');

const router = express.Router();

router.post('/', AdminCtrl.create);
router.post('/login', AdminCtrl.adminLogin);
router.get('/:username', AdminCtrl.adminDetails);

module.exports = router;
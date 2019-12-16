const express = require('express');

const CategoryCtrl = require('../controllers/category.controller');

const router = express.Router();

router.post('/', CategoryCtrl.create);
router.get('/', CategoryCtrl.allCategories);
router.get('/:id', CategoryCtrl.categoryDetails);

module.exports = router;
const express = require('express');

const GroceryItemCtrl = require('../controllers/grocery-item.controller');

const router = express.Router();

router.post('/', GroceryItemCtrl.create);
router.get('/count', GroceryItemCtrl.countGroceryItem);
router.post('/update', GroceryItemCtrl.groceryItemUpdate);
router.get('/:id', GroceryItemCtrl.groceryItemDetails);
router.get('/category/:cat_id', GroceryItemCtrl.groceryItemsByCategory);

module.exports = router;
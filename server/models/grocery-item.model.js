const mongoose = require('mongoose');

const GroceryItemSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  imageUrl: {
    type: String
  },
  categoryId: {
    type: Number,
    required: true
  },
  id: {
    type: Number,
    required: true
  },
});

const GroceryItem = mongoose.model('GroceryItem', GroceryItemSchema);

module.exports = GroceryItem;
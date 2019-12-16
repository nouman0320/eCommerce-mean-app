const mongoose = require('mongoose');
var AutoIncrement = require('mongoose-sequence')(mongoose);

const ShoppingCartSchema = new mongoose.Schema({
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
  customerId: {
    type: Number,
    required: true
  },
  dateCreated: {
    type: Number,
    default: Date.now()
  },
  active: {
    type: Boolean,
    default: true
  },
  id: {
    type: Number
  },
});

ShoppingCartSchema.plugin(AutoIncrement, {id:'shopping_cart_seq',inc_field: 'id'});
const ShoppingCart = mongoose.model('ShoppingCart', ShoppingCartSchema);

module.exports = ShoppingCart;
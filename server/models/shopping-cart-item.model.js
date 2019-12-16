const mongoose = require('mongoose');
var AutoIncrement = require('mongoose-sequence')(mongoose);

const ShoppingCartItemSchema = new mongoose.Schema({
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
  cartId: {
    type: Number,
    required: true
  },
  amount: {
    type: Number,
    required: true
  },
  totalPrice: {
    type: Number,
    required: true
  },
  dateCreated: {
    type: Number,
    default: Date.now()
  },
  id: {
    type: Number
  },
});

ShoppingCartItemSchema.plugin(AutoIncrement, {id:'shopping_cart_item_seq',inc_field: 'id'});
const ShoppingCartItem = mongoose.model('ShoppingCartItem', ShoppingCartItemSchema);

module.exports = ShoppingCartItem;
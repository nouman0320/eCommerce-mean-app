const mongoose = require('mongoose');
var AutoIncrement = require('mongoose-sequence')(mongoose);

const GroceryListOrderSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  shoppingCartId: {
    type: Number,
    require: true
  },
  customerId: {
    type: Number,
    require: true
  },
  dateCreated: {
    type: Number,
    default: Date.now()
  },
  totalPrice: {
    type: Number,
    require: true
  },
  deliveryAddressCity: {
    type: String,
    require: true
  },
  deliveryAddressStreet: {
    type: String,
    require: true
  },
  deliveryDate: {
    type: Date,
    require: true
  },
  ccLastFourDigits: {
    type: String,
    require: true
  },
  id: {
    type: Number
  },
});

GroceryListOrderSchema.plugin(AutoIncrement, {id:'grocery_list_order_seq',inc_field: 'id'});
const GroceryListOrder = mongoose.model('GroceryListOrder', GroceryListOrderSchema);

module.exports = GroceryListOrder;
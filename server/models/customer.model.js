const mongoose = require('mongoose');
var AutoIncrement = require('mongoose-sequence')(mongoose);

const CustomerSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  username: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  addressCity: {
    type: String,
    required: true
  },
  addressStreet: {
    type: String,
    required: true
  },
  id: {
    type: Number,
    required: true
  },
});

//CustomerSchema.plugin(AutoIncrement, {id:'customer_seq',inc_field: 'id'});
const Customer = mongoose.model('Customer', CustomerSchema);

module.exports = Customer;
const mongoose = require('mongoose');
var AutoIncrement = require('mongoose-sequence')(mongoose);

const AdministratorSchema = new mongoose.Schema({
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
  id: {
    type: Number
  },
});

AdministratorSchema.plugin(AutoIncrement, {id:'administrator_seq',inc_field: 'id'});
const Administrator = mongoose.model('Administrator', AdministratorSchema);

module.exports = Administrator;
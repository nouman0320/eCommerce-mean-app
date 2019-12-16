const mongoose = require('mongoose');
var AutoIncrement = require('mongoose-sequence')(mongoose);

const CategorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  id: {
    type: Number
  },
});

CategorySchema.plugin(AutoIncrement, {id:'category_seq',inc_field: 'id'});
const Category = mongoose.model('Category', CategorySchema);

module.exports = Category;
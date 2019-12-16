const Category = require('../models/category.model');

// Method to get category details by id
exports.categoryDetails = function(req, res){
    Category.findOne({"id": req.params.id})
    .then(function (category) {

        if(category == null) throw new Error("Category doesn't exist");

        const categoryR = {
            "id": category.id,
            "name": category.name
        }

      return res.status(200).json({
        status: 200,
        data: categoryR,
        message: "Success"
      });
    })
    .catch(function (err) {
      return res.status(400).json({
        status: 400,
        message: err.message
      });
    });

}

// Method to create new category
exports.create = function (req, res) {
    new Category({
      "name": req.body.name
    }).save()
    .then(function (createdCategory) {
      return res.status(200).json({
        status: 200,
        data: createdCategory,
        message: 'Success'
      });
    }).catch(function (err) {
      return res.status(400).json({
        status: 400,
        message: err.message
      });
    });
  }


  // Method to get all categories
exports.allCategories = function(req, res){

    Category.find({})
    .then(function (category) {
      return res.status(200).json({
        status: 200,
        data: category,
        message: "Success"
      });
    })
    .catch(function (err) {
      return res.status(400).json({
        status: 400,
        message: err.message
      });
    });

}
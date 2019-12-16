const GroceryItem = require('../models/grocery-item.model');

// Method to get grocery-item details by id
exports.groceryItemDetails = function(req, res){
    GroceryItem.findOne({"id": req.params.id})
    .then(function (groceryItem) {

        if(groceryItem == null) throw new Error("Grocery item doesn't exist");

      return res.status(200).json({
        status: 200,
        data: groceryItem,
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


// Method to get grocery-items by category
exports.groceryItemsByCategory = function(req, res){
    GroceryItem.find({"categoryId": req.params.cat_id})
    .then(function (groceryItem) {

        if(groceryItem == null || groceryItem.length == 0) throw new Error("Grocery items are not available for this category");

      return res.status(200).json({
        status: 200,
        data: groceryItem,
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

// Method to create new grocery-item
exports.create = function (req, res) {

    const groceryItem = new GroceryItem({
        "name": req.body.name,
        "price": req.body.price,
        "imageUrl": req.body.imageUrl,
        "categoryId": req.body.categoryId,
        "id": req.body.id
    });

    GroceryItem.find({id: groceryItem.id}, function (err, docs) {
      if(docs.length > 0){
        return res.status(400).json({
          status: 400,
          message: "Product id is already in use"
        });
      }

      groceryItem.save()
      .then(function (createdGroceryItem) {
        return res.status(200).json({
          status: 200,
          data: createdGroceryItem,
          message: 'Grocery Item has been added'
        });
      })

    }).catch(function (err) {
        return res.status(400).json({
          status: 400,
          message: err.message
        });
      });
  }


// Method to update grocery-item by id
exports.groceryItemUpdate = function(req, res){

    const groceryItem = {
        "name": req.body.name,
        "price": req.body.price,
        "imageUrl": req.body.imageUrl,
        "categoryId": req.body.categoryId,
        "id": req.body.id
    };

    GroceryItem.findOneAndUpdate({"id": req.body.id}, groceryItem, {new: true})
    .then(function (groceryItem) {

        if(groceryItem == null) throw new Error("Grocery item doesn't exist");

      return res.status(200).json({
        status: 200,
        data: groceryItem,
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
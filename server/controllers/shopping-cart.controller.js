const ShoppingCart = require('../models/shopping-cart.model');

// Method to get active shopping cart with customer id
exports.latestShoppingCart = function(req, res){
    ShoppingCart.findOne({"customerId": req.params.customerId, "active": true})
    .then(function (shoppingCart) {

        if(shoppingCart == null) throw new Error("Unable to find any active cart");

      return res.status(200).json({
        status: 200,
        data: shoppingCart,
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

// Method to get fullfilled order counts with customer id
exports.userOrderCount = function(req, res){
    ShoppingCart.countDocuments({"customerId": req.params.customerId, "active": false})
    .then(function (shoppingCart) {

      return res.status(200).json({
        status: 200,
        data: shoppingCart,
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


// Method to mark shopping cart complete by id
exports.shoppingCartComplete = function(req, res){


    ShoppingCart.findOneAndUpdate({"id": req.params.id, "active":true}, {"active":false}, {new: true})
    .then(function (shoppingCart) {

        if(shoppingCart == null) throw new Error("Unable to find any active shopping cart");

      return res.status(200).json({
        status: 200,
        data: shoppingCart,
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

// Method to create new shopping cart
exports.create = function (req, res) {

    const shoppingCart = new ShoppingCart({
        "name": req.body.name,
        "price": req.body.price,
        "imageUrl": req.body.imageUrl,
        "categoryId": req.body.categoryId,
        "customerId": req.body.customerId,
        "dateCreated": req.body.dateCreated
    });

    shoppingCart.save()
      .then(function (createdShoppingCart) {
        return res.status(200).json({
          status: 200,
          data: createdShoppingCart,
          message: 'Success'
        });
      }).catch(function (err) {
        return res.status(400).json({
          status: 400,
          message: err.message
        });
      });

      
  }


// Method to update shopping cart by id
exports.shoppingCartUpdate = function(req, res){

    const shoppingCart = {
        "name": req.body.name,
        "price": req.body.price,
        "imageUrl": req.body.imageUrl,
        "categoryId": req.body.categoryId,
        "customerId": req.body.customerId,
        "dateCreated": req.body.dateCreated
    };

    ShoppingCart.findOneAndUpdate({"id": req.body.id}, shoppingCart, {new: true})
    .then(function (shoppingCart) {

        if(shoppingCart == null) throw new Error("Shopping cart doesn't exist");

      return res.status(200).json({
        status: 200,
        data: shoppingCart,
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
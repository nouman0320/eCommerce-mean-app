const ShoppingCartItem = require('../models/shopping-cart-item.model');

// Method to get shopping cart item with cart id
exports.getShoppingCartItem = function(req, res){
    ShoppingCartItem.find({"shoppingCartId": req.params.cartId})
    .then(function (shoppingCartItem) {

        if(shoppingCartItem == null) throw new Error("Unable to find any cart item");

      return res.status(200).json({
        status: 200,
        data: shoppingCartItem,
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

// Method to create new shopping cart item
exports.create = function (req, res) {

    const shoppingCartItem = new ShoppingCartItem({
        "name": req.body.name,
        "price": req.body.price,
        "imageUrl": req.body.imageUrl,
        "shoppingCartId": req.body.shoppingCartId,
        "amount": req.body.amount,
        "totalPrice": req.body.totalPrice
    });

    shoppingCartItem.save()
      .then(function (createdShoppingCartItem) {
        return res.status(200).json({
          status: 200,
          data: createdShoppingCartItem,
          message: 'Success'
        });
      }).catch(function (err) {
        return res.status(400).json({
          status: 400,
          message: err.message
        });
      });

      
  }


// Method to update shopping cart item by id
exports.shoppingCartItemUpdate = function(req, res){

    const shoppingCartItem = {
        "name": req.body.name,
        "price": req.body.price,
        "imageUrl": req.body.imageUrl,
        "shoppingCartId": req.body.shoppingCartId,
        "amount": req.body.amount,
        "totalPrice": req.body.totalPrice
    };

    ShoppingCartItem.findOneAndUpdate({"id": req.body.id}, shoppingCartItem, {new: true})
    .then(function (shoppingCartItem) {

        if(shoppingCartItem == null) throw new Error("Shopping cart item doesn't exist");

      return res.status(200).json({
        status: 200,
        data: shoppingCartItem,
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


// Method to delete shopping cart item with id
exports.deleteShoppingCartItem = function(req, res){
    ShoppingCartItem.deleteOne({"id": req.params.id})
    .then(function () {
      return res.status(200).json({
        status: 200,
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
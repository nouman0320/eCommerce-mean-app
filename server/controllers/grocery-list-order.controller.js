const GroceryListOrder = require('../models/grocery-list-order.model');

// Method to count total orders
exports.countGroceryListOrders = function(req, res){
  GroceryListOrder.countDocuments()
  .then(function (count) {
    return res.status(200).json({
      status: 200,
      data: count,
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


// Method to create new grocery list order
exports.create = function (req, res) {

    const groceryListOrder = new GroceryListOrder({
        "name": req.body.name,
        "shoppingCartId": req.body.shoppingCartId,
        "customerId": req.body.customerId,
        "totalPrice": req.body.totalPrice,
        "deliveryAddressCity": req.body.deliveryAddressCity,
        "deliveryAddressStreet": req.body.deliveryAddressStreet,
        "deliveryDate": req.body.deliveryDate,
        "ccLastFourDigits": req.body.ccLastFourDigits
    });



    GroceryListOrder.countDocuments({deliveryDate: groceryListOrder.deliveryDate}, function (err, docs) {
      if(docs >= 3){
        return res.status(400).json({
          status: 400,
          message: "Please select a different date"
        });
      }

      groceryListOrder.save()
      .then(function (createdGroceryListOrder) {
        return res.status(200).json({
          status: 200,
          data: createdGroceryListOrder,
          message: 'Order has been added'
        });
      })

    }).catch(function (err) {
        return res.status(400).json({
          status: 400,
          message: err.message
        });
      });
  }


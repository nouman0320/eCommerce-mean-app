const Customer = require('../models/customer.model');

// Method to login customer
exports.customerLogin = function(req, res){
    //console.log(req.body);
    Customer.findOne({"username": req.body.username, "password": req.body.password})
    .then(function (customer) {

        if(customer == null) throw new Error("Username or Password incorrect");

      return res.status(200).json({
        status: 200,
        data: {"id": customer['id'],
        "username": customer['username']},
        message: "Success"
      });
    })
    .catch(function (err) {
      //console.log(err.message);
      return res.status(400).json({
        status: 400,
        message: err.message
      });
    });
}


// Method to get customer details by username
exports.customerDetails = function(req, res){
    Customer.findOne({"username": req.params.username})
    .then(function (customer) {

        if(customer == null) throw new Error("Customer doesn't exist");

        const customerR = {
            "id": customer.id,
            "firstName": customer.firstName,
            "lastName": customer.lastName,
            "username": customer.username,
            "AddressCity": customer.addressCity,
            "AddressStreet": customer.addressStreet
        }

      return res.status(200).json({
        status: 200,
        data: customerR,
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

// Method to create new customer
exports.create = function (req, res) {
    const customer = new Customer({
      "firstName": req.body.firstName,
      "lastName": req.body.lastName,
      "username": req.body.username,
      "password": req.body.password,
      "addressCity": req.body.addressCity,
      "addressStreet": req.body.addressStreet,
      "id": req.body.id
    });




    
    // TIP simple or query => {$or:[{region: "NA"},{sector:"Some Sector"}]}
    Customer.find({$or: [{username : customer.username},{id: customer.id}]}, function (err, docs) {
      //console.log(docs);   
      if(docs.length > 0){
        return res.status(400).json({
          status: 400,
          message: "Email/id already exists"
        });
      }

      customer.save()
      .then(function (createdCustomer) {
        return res.status(200).json({
          status: 200,
          data: createdCustomer,
          message: 'Success'
        });
      })

    }).catch(function (err) {
        return res.status(400).json({
          status: 400,
          message: err.message
        });
      });
  }
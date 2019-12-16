const Admin = require('../models/administrator.model');

// Method to login administrator
exports.adminLogin = function(req, res){
    Customer.findOne({"username": req.body.username, "password": req.body.password})
    .then(function (admin) {

        if(admin == null) throw new Error("Username or Password incorrect");

      return res.status(200).json({
        status: 200,
        data: {"id": admin['id'],
        "username": admin['username']},
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


// Method to get administrator details by username
exports.adminDetails = function(req, res){
    Customer.findOne({"username": req.params.username})
    .then(function (admin) {

        if(admin == null) throw new Error("Admin doesn't exist");

        const adminR = {
            "id": adminR.id,
            "firstName": adminR.firstName,
            "lastName": adminR.lastName,
            "username": adminR.username
        }

      return res.status(200).json({
        status: 200,
        data: adminR,
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

// Method to create new admin
exports.create = function (req, res) {


    const administrator = new administrator({
      "firstName": req.body.firstName,
      "lastName": req.body.lastName,
      "username": req.body.username,
      "password": req.body.password,
      "id": req.body.id
    })


    
    // TIP simple or query => {$or:[{region: "NA"},{sector:"Some Sector"}]}
    Admin.find({$or: [{username : administrator.username},{id: administrator.id}]}, function (err, docs) {
      if(docs.length > 0){
        return res.status(400).json({
          status: 400,
          message: "Email/id already exists"
        });
      }

      administrator.save()
      .then(function (createdAdmin) {
        return res.status(200).json({
          status: 200,
          data: createdAdmin,
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
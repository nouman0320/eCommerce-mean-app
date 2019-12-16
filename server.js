const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const http = require('http');
const mongoose = require('mongoose');
const routes = require('./server/routes');
const app = express();


const Category = require('./server/models/category.model');
const Admin = require('./server/models/administrator.model');

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
const firstInitialize = false; // set true to set the mongodb for first use after that make it false;
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
const mongoConnectionString = 'mongodb://127.0.0.1:27017/ecommerce-mean-app';


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'dist/eCommerce-mean-app')));

app.use('/api', routes);

app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, 'dist/eCommerce-mean-app/index.html'));
});


mongoose.connect(mongoConnectionString, function(){
  if(firstInitialize){
    mongoose.connection.collections["administrators"].drop( function(err) {
        console.log('administrator dropped');
        new Admin({
          "firstName": "Default",
            "lastName": "Admin",
            "username": "admin@admin.com",
            "password": "123456",
            "id": "123456789"
        }).save();
    });
    mongoose.connection.collections["categories"].drop( function(err) {
      console.log('cateogries dropped');

      new Category({"name": "Milk & Eggs"}).save();
      new Category({"name": "Vegetable & Fruits"}).save();
      new Category({"name": "Meat & Fish"}).save();
      new Category({"name": "Wine & Drinks"}).save();
    });
  }
});

mongoose.connection.on('error', console.error.bind(console, 'Database connection error:'));

mongoose.connection.once('open', function () {
  console.info('Successfully connected to the database');
});

const port = process.env.PORT || '3000';
app.set('port', port);

const server = http.createServer(app);

server.listen(port, function () {
  console.info(`Server started on http://localhost:${port}`)
});
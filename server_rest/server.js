require('localenv');

var express = require('express'),
  app = express(),
  port = process.env.PORT || 3300,
  mongoose = require('mongoose'),
  Item = require('./api/models/ItemModel'), //created model loading here
  bodyParser = require('body-parser');

var cors = require('cors');
app.use(cors());

// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect(process.env.DB_URL);


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


var itemRoutes = require('./api/routes/ItemRoutes'); //importing route
itemRoutes(app); //register the route

var userRoutes = require('./api/routes/ItemRoutes'); //importing route
userRoutes(app); //register the route

app.listen(port);


console.log('todo list RESTful API server started on: ' + port);

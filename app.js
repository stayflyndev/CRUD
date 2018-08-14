// including dependencies from json
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

// routes
const product = require('./routes/product.route');
// starts the app
const app = express();
// declare a port
const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
// entry point
app.use('/products', product)

// mongoose connection
let dev_db_url = 'mongodb://admin:passwordmust1@ds119652.mlab.com:19652/cruddyapp';
let mongoDB = process.env.MONGODB_URI || dev_db_url;
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));


// telling the app to listen on port and print out what port its on
app.listen(port, () =>{
    console.log('listening on '+ port);
});


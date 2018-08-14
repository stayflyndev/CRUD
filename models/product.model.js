// requiring mongoose
// M out of MVC
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//creating a var PS which is a new schema with a name and price 
let productSchema = new Schema ({
name: {type: String, required: true, max: 100},
price: {type: Number, required: true},

});

// can be seen by other files 
module.exports = mongoose.model('Product', productSchema);
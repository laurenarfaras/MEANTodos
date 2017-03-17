var mongoose = require('mongoose');

// Mongoose Schema
var todoSchema = mongoose.Schema({
   completed: {
     type: Boolean,
     default: false
   },
   description: {
    type: String,
    required: true 
   }
});

// Mongoose Model
var Todo =mongoose.model('Todo', todoSchema);
module.exports = Todo;

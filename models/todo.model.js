var mongoose = require("mongoose");

// Create the Mongoose Schema
var todoSchema = mongoose.Schema({
  description: {
    type: String,
    required: true
  },
  completed: {
    type: Boolean,
    default: false
  }
});

// Create the Mongoose Model
var Todo = mongoose.model("Todo", todoSchema);

// Export the model
module.exports = Todo;

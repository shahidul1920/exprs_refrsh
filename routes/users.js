// var express = require('express');
// var router = express.Router();

// /* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

// module.exports = router;

const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/bsicalu")


const usersSchema = mongoose.Schema({
  name: String,
  email: String,
  password: String
})

module.exports = mongoose.model('users', usersSchema);
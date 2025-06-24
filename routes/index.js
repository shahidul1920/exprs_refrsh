var express = require('express');
var router = express.Router();
const usersModel = require('./users')

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

router.get('/create', async function (req, res) {
  const createdUser = await usersModel.create({
    name: 'shakil',
    email: 'shahidul@gmail.com',
    password: '12345678',
  })
  res.send(createdUser);
})

router.get('/find', async function (req, res) {
  const allUsers = await usersModel.find();
  res.send(allUsers)
})

module.exports = router;

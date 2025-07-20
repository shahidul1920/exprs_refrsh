var express = require('express');
var router = express.Router();
const usersModel = require('./users')

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index');
});

// router.get('/create', async function (req, res) {
//   const createdUser = await usersModel.create({
//     name: 'shakil',
//     email: 'shahidul@gmail.com',
//     password: '12345678',
//   })
//   res.send(createdUser);
// })

router.get('/find', async function (req, res) {
  const allUsers = await usersModel.find();
  res.send(allUsers)
})

// router.get('/delete', async function(req, res){
//   const deletedUser = await usersModel.deleteOne({ name: 'shakil' });
//   res.send(deletedUser);
// })

// router.get('/banned', function(req, res){
//   req.session.banned = true;
//   res.send('index')
// })

// router.get('/checkBanned', async function(req, res){
//   console.log(req.session);
//   res.send(req.session.banned ? 'You are banned' : 'You are not banned');
// })

// router.get('/removeBanned', (req, res) =>{
//   req.session.destroy((err)=>{
//     if(err) throw err;
//     res.send('index');
//   })
// })

router.get('/cooked', (req, res) => {
  res.cookie("chef is name", "shakil")
  res.render('index')
})

router.get('/chef', (req, res) => {
  console.log(req.cookies);
  res.send(req.cookies);
})


module.exports = router;

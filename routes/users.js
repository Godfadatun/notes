var express = require('express');
var router = express.Router();

var tag = require('../models').tag
var user = require('../models').user
var media = require('../models').media
var note = require('../models').note
// console.log(tag);



/* GET users listing. */
router.get('/user', function(req, res, next) {
  // res.send('respond with a resource');
  var myUser = user.findAll().then(users => {
    console.log("All users:", JSON.stringify(users, null, 4));
  });

  res.json({
    status: "success",
    message: "success",
    data: "success",
    model: myUser
  })
});



router.get('/note', function(req, res, next) {

  var myNote = note.findAll().then(users => {
    console.log("All notes:", JSON.stringify(users, null, 4));
  });

  res.json({
    status: "success",
    message: "success",
    data: myNote
  })
});


// Posts
router.post('/user', function (req, res) {
  // var myUser = user.create({ name: "Jane", email: "Doe" }).then(jane => {
  //   console.log("Jane's auto-generated ID:", jane.id);
  // });

  // console.log(req);
  
  res.send('req')
})


module.exports = router;

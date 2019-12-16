var express = require('express');
var router = express.Router();

var tag = require('../models').tag
var user = require('../models').user
var media = require('../models').media
var note = require('../models').note
var share = require('../models').share
// console.log(tag);



/* GET users listing. */

  // user Table
router.route('/user')
  .get(function (req, res) {
    user.findAll().then(response => {
        // console.log("All users:", JSON.stringify(users, null, 4));
      res.json({
        status: "success",
        message: "success",
        data: "success",
        model: response
      })
    });
  })
  .post(function (req, res) {
    user.create({
        name: req.body.name, 
        email: req.body.email, 
        password: req.body.password,
        is_admin: false
    })
    .then(response => {
        res.json({
          status: "success",
          message: "success",
          data: response
        })
    });
  })


  router.post('/auth', function (req, res, next) {
    console.log(req.body)
    user.findOne({ 
      where: {
        email: req.body.email, 
        password: req.body.password,
      }, 
      include : ['note'],
      order: [['note', 'id', 'DESC']]
      
    })
    .then(response => {
      response != null ? res.status(200).json({
        status: "success",
        message: "success",
        data: response
      }): res.status(401).send({
        status: "failed",
        message: "Unauthenticated",
      });
    });
  })



  // note Table
router.route('/note')
  .get(function (req, res, next) {
    note.findAll({
      order: [
        ['id', 'DESC'],
      ]
    }).then(response => {
      res.json({
        status: "success",
        message: "success",
        data: response
      })
    });
  })
  .post(function (req, res, next) {
    note.create({
      user_id: req.body.user_id, 
      body: req.body.text,
      tags: req.body.tag.toString(),
      is_deleted_at: new Date(),
      include : ['tagMedia']
   })
   .then(response => {
       res.json({
         status: "success",
         message: "success",
         data: response
       })
   });
 })


   // share Table
router.route('/share')
.get(function (req, res, next) {
  share.findAll().then(response => {
    res.json({
      status: "success",
      message: "success",
      data: response
    })
  });
})
.post(function (req, res, next) {
  share.create({
    user_id: 'dummy data', 
    note_id: 'dummy data',
    sharable_id: 'dummy data',
  })
  .then(response => {
      res.json({
        status: "success",
        message: "success",
        data: response
      })
  });
})


  // media Table
router.route('/media')
  .get(function (req, res, next) {
    media.findAll().then(response => {
      res.json({
        status: "success",
        message: "success",
        data: response
      })
    });
  })
  .post(function (req, res, next) {
    media.create({
      user_id: 1234, 
      note_id: 5678,
      media: req.body.name,
      extension:'',
    })
    .then(response => {
        res.json({
          status: "success",
          message: "success",
          data: response
        })
    });
  })


  // tag Table
router.route('/tag')
  .get(function (req, res, next) {
    tag.findAll().then(response => {
      res.json({
        status: "success",
        message: "success",
        data: response
      })
    });
  })
  .post(function (req, res, next) {
    tag.create({
      name: req.body.name, 
  })
  .then(response => {
      res.json({
        status: "success",
        message: "success",
        data: response
      })
  });
})









// Delete ===========================
// router.put(function (req, res) {
//   user.destroy({
//     where: {
//       id: 1
//     }
//   }).then(() => {
//     console.log("Done");
//   });
// })



module.exports = router;

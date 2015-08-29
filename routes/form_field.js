var express = require('express');
var router = express.Router();
var Field = require("../models/field.js").model;



/* GET users listing. */
router.get('/', function(req, res, next) {
  Field.find({}, function(err, fields){
      if(err) throw err;
      res.send(fields)
  });
  console.log(req.query);
});

router.post('/', function (req, res) {
    console.log(req);
    var field = new Field(req.body);
    field.save(function(err){
        if(err) console.log(err);
        res.send("successfully saved");
    })
})

router.delete('/', function (req, res){
    console.log(req.query)
    Field.findOneAndRemove(req.query, function(delErr){
        if(delErr) console.log(delErr);
        res.send("delete successful")
    });
})

module.exports = router;

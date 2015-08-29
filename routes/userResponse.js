var express = require('express');
var router = express.Router();
var UserResponse = require("../models/formResponse.js").model;

router.get('/', function (req, res, next) {
    var query = req.query;
    console.log(query);

    UserResponse.findOne(query, function (err, fields) {
        if (err) {
            throw err;
        }
        res.send(fields)
    });
    console.log(req.query);
});

router.post('/', function (req, res) {
    console.log(req);
    var field = new UserResponse(req.body);
    field.save(function (err) {
        if (err) {
            console.log(err);
            res.send(err);
        }
        res.send("successfully saved");
    })
})

router.delete('/', function (req, res) {
    console.log(req.query)
    UserResponse.findOneAndRemove(req.query, function (delErr) {
        if (delErr) {
            console.log(delErr);
        }
        res.send("delete successful")
    });
})

module.exports = router;

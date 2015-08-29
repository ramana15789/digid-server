var express = require('express');
var router = express.Router();
var Form = require("../models/form.js").model;
var url = require('url');

router.get('/', function (req, res, next) {
    var query = req.query;
    console.log(query);

    Form.find({}, function (err, fields) {
        if (err) {
            throw err;
        }
        res.send(fields)
    });

    //Form.findOne(query, function (err, fields) {
    //    if (err) {
    //        throw err;
    //    }
    //    res.send(fields)
    //});
    console.log(req.query);
});

router.post('/', function (req, res) {
    console.log(req);
    var field = new Form(req.body);
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
    Form.findOneAndRemove(req.query, function (delErr) {
        if (delErr) {
            console.log(delErr);
        }
        res.send("delete successful")
    });
})

module.exports = router;

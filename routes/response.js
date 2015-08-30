var express = require('express');
var router = express.Router();
var Response = require("../models/response").model;

router.get('/', function (req, res, next) {
    var query = req.query;
    console.log(query);

    Response.find(query, function (err, fields) {
        if (err) {
            throw err;
        }
        res.send(fields)
    });
    console.log(req.query);
});

router.post('/', function (req, res) {
    console.log(req.body);
    var field = new Response(req.body);
    field.save(function (err) {
        if (err) {
            console.log(err);
            res.send(err);
        }
        res.setHeader('Content-Type', 'application/json');
        res.send(JSON.stringify({ msg: "success" }));
    })
})

router.delete('/', function (req, res) {
    console.log(req.query)
    Response.findOneAndRemove(req.query, function (delErr) {
        if (delErr) {
            console.log(delErr);
        }
        res.send("delete successful")
    });
})

module.exports = router;

var express = require('express');
var router = express.Router();

var db = require('../db/conn');

/* GET users listing. */
router.get('/', function (req, res, next) {
    db.query('SELECT * FROM USERS', function(error, results, fields){
        if (error) {
            console.log(error);
        }

        res.send(results);
    });
});

/* GET users listing. */
router.post('/', function (req, res, next) {
    console.log(req);
    res.send('respond with a resource');
});


module.exports = router;

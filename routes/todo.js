var express = require('express');
var router = express.Router();

var todo = [];

/* GET todo listing. */
router.get('/', function (req, res, next) {
    res.send(todo);
});

/* POST todo listing. */
router.post("/", function (req, res) {
    todo.push(req.body);

    res.send({
        resultCode: 200,
        resultMessage: "OK"
    });
});

module.exports = router;

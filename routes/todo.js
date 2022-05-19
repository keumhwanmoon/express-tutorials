var express = require('express');
var router = express.Router();

const jwtVerify = require('../middlewares/jwt-middleware');

/* GET todo listing. */
router.get('/', jwtVerify, function (req, res, next) {
    res.send({});
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

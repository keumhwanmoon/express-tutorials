const jwt = require('../utils/jwt-util');
var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
    const user = {
        id: "system",
        name: "시스템"
    };

    let success = true;

    if (success) { // id, pw가 맞다면..
        // access token과 refresh token을 발급합니다.
        const accessToken = jwt.sign(user);
        const refreshToken = jwt.refresh();

        res.status(200).send({ // client에게 토큰 모두를 반환합니다.
            ok: true,
            data: {
                accessToken,
                refreshToken,
            },
        });
    } else {
        res.status(401).send({
            ok: false,
            message: 'password is incorrect',
        });
    }
});

router.get('/verify', function(req, res) {
    let token = req.query.token;

    res.send(jwt.verify(token));
});

module.exports = router;
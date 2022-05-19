const mariadb = require('mysql');
const mysql = require("mysql");

let db;
// db 연결
function connect() {
    db = mysql. createConnection({
        host: "44.203.230.190",
        port: 3306,
        user: 'root',
        password: 'admin123!@#',
        database: 'STANDARD_CMS',
        multipleStatements: true
    });

    db.connect(err => {
        if (err) {
            console.log(err.message);
            setTimeout(connect(), 2000);
        }
    });

    // mysql 에러 발생 시 실행됨
    db.on('error', err => {
        console.log(err.message);

        // 장시간 미사용으로 연결이 끊겼을 때
        if (err.code === 'PROTOCOL_CONNECTION_LOST') {
            return connect();
        } else {
            throw err;
        }
    });
}

connect();

module.exports = db;
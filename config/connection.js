var mysql = require('mysql');
var connection;

if (process.env.burger_db) {
    connection = mysql.createConnection(process.env.burgers_db);
}
else {
    connection = mysql.createConnection({
        host: 'us-cdbr-east-02.cleardb.com',
        user: 'b5b7a8c63bf4fd',
        password: '1dad4cbf',
        database: 'heroku_e1c831cb0fcd958',

    });
}



module.exports = connection;

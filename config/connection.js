var mysql = require('mysql');
var connection;

if (process.env.burger_db) {
    connection = mysql.createConnection(process.env.burgers_db);
}
else {
    connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'Sublime#96',
        database: 'burgers_db'
    });
}



module.exports = connection;

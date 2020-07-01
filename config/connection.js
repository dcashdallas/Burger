var mysql = require("mysql");

if (process.env.CLEARDB_DATABASE_URL) {
    // DB is JawsDB on Heroku
    connection = mysql.createConnection(process.env.CLEARDB_DATABASE_URL);
} else {

    connection = mysql.createConnection({
        port: '3306',
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'burgers_db'
    });

    connection.connect(function (error) {
        if (error) {
            console.error('Connection error: ' + error.stack);
            return;
        }
        console.log('MySQL connection established! Connected as ID ' + connection.threadId);
    });

    // Export connection for our ORM to use.
    module.exports = connection;

// function (err) {
//     if (err) {
//         console.error("error connecting: " + err.stack);
//         return;
//     }
//     console.log("connected as id " + connection.threadId);
// });

// --user=b5b7a8c63bf4fd --password heroku_e1c831cb0fcd958 --reconnect=true


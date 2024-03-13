const mysql = require("mysql2");

const connection = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "root",
  database: "mrfsafe_prod",
  port: 8889,
});

module.exports = connection.promise();

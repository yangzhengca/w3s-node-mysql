const mysql = require("mysql");

// connect to mysql and create database mydb
// const con = mysql.createConnection({
//   host:"localhost",
//   user: "root",
//   password: "3120"
// });

// con.connect((err) => {
//   if (err) throw err;
//   console.log("mySQL connected!");
//   con.query("CREATE DATABASE mydb", (err, result) => {
//     if (err) throw err;
//     console.log("Database created")
//   })
// })

// connection config
const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "3120",
  database: "mydb",
});

// create table customers
// con.connect((err) => {
//   if (err) throw err;
//   console.log("DB connected!");
//   // create table
//   // const sql = "CREATE TABLE customers (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255), address VARCHAR(255))";

//   // change table
//   const sql = "ALTER TABLE customers ADD COLUMN id INT AUTO_INCREMENT PRIMARY KEY";

//   con.query(sql, (err, result) => {
//     if (err) throw err;
//     console.log("Table customers altered!");
//   });
// });

// insert 1 record into table
// con.connect((err) => {
//   if (err) throw err;
//   console.log("DB connected!");

//   // insert into table
//   const sql = "INSERT INTO customers (name, address) VALUES ('Company Inc', 'Highway 37')";

//   con.query(sql, (err, result) => {
//     if (err) throw err;
//     console.log("1 record inserted!");
//   });
// });

// insert many records into table
// con.connect((err) => {
//   if (err) throw err;
//   console.log("DB connected!");

//   // insert into table
//   const sql = "INSERT INTO customers (name, address) VALUES ?";

//   const values = [
//     ['John', 'Highway 71'],
//     ['Peter', 'Lowstreet 4'],
//     ['Amy', 'Apple st 652'],
//     ['Hannah', 'Mountain 21'],
//     ['Michael', 'Valley 345'],
//     ['Sandy', 'Ocean blvd 2'],
//     ['Betty', 'Green Grass 1'],
//     ['Richard', 'Sky st 331'],
//     ['Susan', 'One way 98'],
//     ['Vicky', 'Yellow Garden 2'],
//     ['Ben', 'Park Lane 38'],
//     ['William', 'Central st 954'],
//     ['Chuck', 'Main Road 989'],
//     ['Viola', 'Sideway 1633']
//   ];

//   con.query(sql, [values], (err, result) => {
//     if (err) throw err;
//     console.log("Number of records inserted: " + result.affectedRows);
//   });
// });

// result object
// {
//   fieldCount: 0,
//   affectedRows: 14,
//   insertId: 0,
//   serverStatus: 2,
//   warningCount: 0,
//   message: '\'Records:14  Duplicated: 0  Warnings: 0',
//   protocol41: true,
//   changedRows: 0
// }

// select all from a table
// con.connect(err => {
//   if (err) throw err;

//   const sql = "SELECT * FROM customers"

//   con.query(sql, (err, result) => {
//     if (err) throw err;
//     console.log(result)
//   })
// })

// // select columns from a table
// con.connect(err => {
//   if (err) throw err;
//   const sql = "SELECT name, address FROM customers";
//   con.query(sql, (err, result) => {
//     if (err) throw err;
//     console.log(result);
//   })
// })

// fields object
// con.connect(err => {
//   if (err) throw err;
//   const sql = "SELECT name, address FROM customers";
//   con.query(sql, (err, result, fields) => {
//     if (err) throw err;
//     console.log(fields);
//   })
// })

// select with a filter
// con.connect(err => {
//   if (err) throw err;

//   const sql = "SELECT * FROM customers WHERE address = 'Park Lane 38'";

//   con.query(sql, (err, result) => {
//     if (err) throw err;
//     console.log(result);
//   })
// })

// Wildcard Characters
// con.connect(err => {
//   if (err) throw err;

//   const sql = "SELECT * FROM customers WHERE address LIKE 'S%'";

//   con.query(sql, (err, result) => {
//     if (err) throw err;
//     console.log(result);
//   })
// })

// Escaping Query Values
// con.connect((err) => {
//   if (err) throw err;

//   var adr = "Mountain 21";
//   var sql = "SELECT * FROM customers WHERE address = " + mysql.escape(adr);

//   con.query(sql, (err, result) => {
//     if (err) throw err;
//     console.log(result);
//   });
// });

// use ? as placeholder
// con.connect((err) => {
//   if (err) throw err;

//   var adr = "Mountain 21";
//   var sql = "SELECT * FROM customers WHERE address = ?";

//   con.query(sql, [adr], (err, result) => {
//     if (err) throw err;
//     console.log(result);
//   });
// });

// use multiple placeholders
// con.connect((err) => {
//   if (err) throw err;

//   var name = "Amy";
//   var adr = "Mountain 21";
//   var sql = "SELECT * FROM customers WHERE name = ? OR address = ?";
//   con.query(sql, [name, adr], function (err, result) {
//     if (err) throw err;
//     console.log(result);
//   });
// });


// sort the results
// con.connect(function(err) {
//   if (err) throw err;
//   con.query("SELECT * FROM customers ORDER BY name", function (err, result) {
//     if (err) throw err;
//     console.log(result);
//   });
// });


// ORDER BY DESC
// con.connect(function(err) {
//   if (err) throw err;
//   con.query("SELECT * FROM customers ORDER BY name DESC", function (err, result) {
//     if (err) throw err;
//     console.log(result);
//   });
// });


// DELETE record
// con.connect(function(err) {
//   if (err) throw err;
//   var sql = "DELETE FROM customers WHERE address = 'Mountain 21'";
  
//   con.query(sql, function (err, result) {
//     if (err) throw err;
//     console.log("Number of records deleted: " + result.affectedRows);
//   });
// });


// delete a table
// con.connect(function(err) {
//   if (err) throw err;

//   var sql = "DROP TABLE customers";

//   con.query(sql, function (err, result) {
//     if (err) throw err;
//     console.log("Table deleted");
//   });
// });


// delete only if exist
// con.connect(function(err) {
//   if (err) throw err;
//   var sql = "DROP TABLE IF EXISTS customers";
//   con.query(sql, function (err, result) {
//     if (err) throw err;
//     console.log(result);
//   });
// });


// updata table
// con.connect(function(err) {
//   if (err) throw err;
//   var sql = "UPDATE customers SET address = 'Canyon 123' WHERE address = 'Valley 345'";
//   con.query(sql, function (err, result) {
//     if (err) throw err;
//     console.log(result.affectedRows + " record(s) updated");
//   });
// });


// Limit the Result
// con.connect(function(err) {
//   if (err) throw err;
//   var sql = "SELECT * FROM customers LIMIT 5";
//   con.query(sql, function (err, result) {
//     if (err) throw err;
//     console.log(result);
//   });
// });


// Start From Another Position(offset 2 means starting from third position)
// con.connect(function(err) {
//   if (err) throw err;
//   var sql = "SELECT * FROM customers LIMIT 5 OFFSET 2";

//   con.query(sql, function (err, result) {
//     if (err) throw err;
//     console.log(result);
//   });
// });


// Shorter Syntax
// Start from position 3, and return the next 5 records:
con.connect(function(err) {
  if (err) throw err;
  var sql = "SELECT * FROM customers LIMIT 2, 5";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log(result);
  });
});



// Join Two or More Tables
con.connect(function(err) {
  if (err) throw err;
  var sql = "SELECT users.name AS user, products.name AS favorite FROM users JOIN products ON users.favorite_product = products.id";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log(result);
  });
});

// Import SQLite library.
// Use verbose mode to give more detailed error outputs
const sqlite3 = require("sqlite3").verbose();

// Connect to the database.
// function tis callback when connection completed.
// err is any error message that occurs
let db = new sqlite3.Database("students.db", function(err) {
    // If an error, print it out.
    if (err) {
        return console.error(err.message);
    }
    console.log("Connected to students database");
});

// SQL query to run
//var sql = "SELECT * FROM Modules"

// db.each
// Execute SQL query, and run function on every row returned.
//db.each(sql, function(err, row) {
    // If error display
//    if (err) {
//        return console.error(err.message);
//    }
    // Print the code column and name columne from row separated by a tab \t
//    console.log(row.code + "\t" + row.name);
//});

// db.all
// Execute query to run
//db.all(sql, function(err, rows) {
    // If error display
//    if (err) {
//        return console.error(err.message);
//    }
    // Print the code column and name column from row separated by a tab \t
//    for (var row of rows) {
//        console.log(row.code + "\t" + row.name);
//    }
//});

// db.get
// Execute SQL query , and run function on first row.
//db.get(sql, function(err, row) {
    // If error display
//    if (err) {
//        return console.error(err.message);
//    }
    // Print the code column and name column from row separated by a tab \t
//    console.log(row.code + "\t" + row.name);
//});

// run
// SQL statement to run
var sql = `
    INSERT INTO Student
    VALUES ("STU007", "Peter Pan")`;

// Execute statement to run; no error handling
// db.run(sql);

// Execute SQL statement
db.run(sql, function(err) {
    // If error, print it out
    if (err) {
        return console.error(err.message);
    }
    console.log("Row inserted into database.")
});

// Close the database connection.
// Always close the connection when you are finished with it.
// Function is callback when connection is closed.
db.close(function(err) {
    // If an error, print it out.
    if (err) {
        return console.error(err.message);
    }
    console.log("Closed connection to students database.");
});
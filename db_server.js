// Import SQLLite library.
// Use verbose mode to give kmore detailed error outputs
const sqlite3 = require("sqlite3").verbose();

// Connect to the database.
// Function is callback when the connection is completed.
// err is any error message that occurs
let db = new sqlite3.Database("students.db", function(err) {
    // If any error, display error message
    if (err) {
        return console.error(err.message);
    }
    console.log("Connected to students database.");
});

// Import express.js
const express = require("express");

// Create express app
var app = express();

// Add static files location
app.use(express.static("static"));

// Create a get for /student and id
app.get("/student/:id", function(req, res) {
    var sql = `
        SELECT * FROM Student
        WHERE id = ${req.params.id}`;
    db.get(sql, function(err, row) {
        if (err) {
            return console.error(err.message);
        }
        res.json(row);
    });
});

// Create a get for /students
app.get("/students", function(req, res) {
    var sql = "SELECT * FROM Student";
    db.all(sql, function(err, rows) {
        if (err) {
            return console.error(err);
        }
        res.json(rows);
    });
});

// Create a get for /students-alt
app.get("/students_alt", function(req, res) {
    var sql = "SELECT * FROM Student";
    db.all(sql, function(err, rows) {
        if (err) {
            return console.error(err);
        }
        res.header("Access-Control-Allow-Origin", "*");
        res.json(rows);
    });
});

// Start server on port 3000
app.listen(3000);
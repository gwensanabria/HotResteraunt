// Creating server
// Dependencies
const express = require('express');
const path = require('path');

// set up Express
const app = express();
const PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// DATA
const reservation = [
    {
        customerName: 'Link',
        customerEmail: 'link@email.com',
        customerID: '1234',
        phoneNumber: '123-456-7890',

    },
    {
        customerName: 'Zelda',
        customerEmail: 'zelda@email.com',
        customerID: '1234',
        phoneNumber: '123-456-7890',

    },
    {
        customerName: 'Ganon',
        customerEmail: 'ganon@email.com',
        customerID: '1234',
        phoneNumber: '123-456-7890',
    }
    
]

const waitlist = [
    {
        customerName: 'Link',
        customerEmail: 'link@email.com',
        customerID: '1234',
        phoneNumber: '123-456-7890',

    },
    {
        customerName: 'Zelda',
        customerEmail: 'zelda@email.com',
        customerID: '1234',
        phoneNumber: '123-456-7890',

    },
    {
        customerName: 'Ganon',
        customerEmail: 'ganon@email.com',
        customerID: '1234',
        phoneNumber: '123-456-7890',
    }
    
]

// Basic route that sends the user first to the AJAX Page

//directs tp the home page
app.get("/api/home", function(req, res) {
    res.sendFile(path.join(__dirname, "home.html"));
});
  
//directs to the reservation page
app.get("/api/reserve", function(req, res) {
    res.sendFile(path.join(__dirname, "reserve.html"));
});
  
//directs to the tables page
app.get("/api/tables", function(req, res) {
    res.sendFile(path.join(__dirname, "tables.html"));
});

//directs to the tables page
app.get("/tables", function (req, res) {
  res.sendFile(path.join(__dirname, "tables.html"));
});

//adding new reservation to tables page
app.post("/api/tables", function(req, res) {
    // req.body hosts is equal to the JSON post sent from the user
    // This works because of our body parsing middleware
    var newCharacter = req.body;
  
    // Using a RegEx Pattern to remove spaces from newCharacter
    // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
    newCharacter.routeName = newCharacter.name.replace(/\s+/g, "").toLowerCase();
  
    console.log(newCharacter);
  
    characters.push(newCharacter);
  
    res.json(newCharacter);
});

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
    console.log("Listening at PORT " + PORT);
});

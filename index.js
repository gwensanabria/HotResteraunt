// Dependencies
const express = require('express')
const path = require('path')

// set up Express
const app = express()
const PORT = 3000

// DATA

const reserved = []

const waiting = []

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

// Routes
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, 'home.html'))
});

app.get('/reserve', function (req, res) {
    res.sendFile(path.join(__dirname, 'reserve.html'))
});

app.get('/tables', function(req, res) {
    res.sendFile(path.join(__dirname, 'tables.html'))
})

// Server listening
app.listen(PORT, function() {
    console.log('App listening on PORT' + port)
})

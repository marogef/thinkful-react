//Create a file called server.js that will contain a simple Node.js API
//Set up Express, and make a GET and a POST endpoint to /fewest-guesses
//When a GET request is made to /fewest-guesses it should return the fewest guesses taken to get the correct answer
//The number of guesses can either be stored in-memory, or you can use a Mongo database
//When a POST request is made to /fewest-guesses, it should update the guess count if the number of guesses provided is lower than the current best



var express = require('express');
var bodyParser = require('body-parser');
var events = require('events');
var path = require('path');



/* STEP 2 - initialize the app*/
var app = express();



app.post('/fewest-guesses', function (req, res) {
    items.create({
        name: req.body.productName
    }, function (err, items) {
        if (err) {
            return res.status(500).json({
                message: 'Internal Server Error'
            });
        }
        res.status(201).json(items);
    });
});
app.get('/fewest-guesses', function (req, res) {
            items.find(function (err, items) {
                    if (err) {
                        return res.status(500).json({
                            message: 'Internal Server Error'
                        });
                    }

                    while (items >= 1 && items <= 100) {
                        if (guess > items) {
                            print "Guess lower";
                        }
                        elsif(guess < items) {
                            print "Guess higher";
                        }

                        res.status(200).json(items);
                    });
            });



        /* start and run the server*/
        exports.app = app; exports.runServer = runServer; app.listen(process.env.PORT, process.env.IP);

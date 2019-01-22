require("dotenv").config();

var keys = require("./keys.js");
var Spotify = require('node-spotify-api');
var spotify = new Spotify(keys.spotify);
var axios = require('axios');
var fs = require('fs');

// Take all of the command line arguments from Node
var command = process.argv[2];
var option1 = process.argv[3];
console.log(process.argv);

// Store all the arguments in an array
var nodeArgs = process.argv;

// Store movie names in empty variable
var movieName = "";

function getSpotify() {
    spotify
        .search({
            type: 'track',
            query: option1,
            limit: 1
        })
        .then(function (response) {
            console.log(response.tracks);
        })
        .catch(function (err) {
            console.log(err);
        });
}

if (command === "spotify-this-song") {
    getSpotify(option1);
} else {
    getSpotify("Ace of Base");
}
"use strict";
(function() {
	var user = require("./user");
	var userArg = process.argv[2];
	var Auser = user(config);
})();
// var list
var getTweets = function() {
	var client = new twitter(dataKeys.twitterKeys);
}
//variables for these functions
var newVariable = results;


var request = require('request');
var spotify = require('spotify');
var fs = require('fs');
var keys = require('./keys.js');
var querystring = require('querystring');
var random = require('./random.js');

var command = process.argv[2];
var argument = process.argv[3];
var output;

//spotify access
$.ajax(
  {
    method: "POST",
    url: "https://accounts.spotify.com/api/token",
    data: {
      "grant_type":    "authorization_code",
      "code":          code,
      "redirect_uri":  myurl,
      "client_secret": mysecret,
      "client_id":     myid,
    },
    success: function(result) {
      // handle result...
    },
  }
);

//sets the default 
function spotifyThisSong() {
	if(argument == null) {
		argument = "The Sign Ace of Base";

	}
	spotify.search({type: 'track', query: argument}, function(error, data) {
		var thisSong;
			if(!error && (data.tracks.items.length >= 1)) {
				thisSong = data.tracks.items[0];
				var artistConcat = thisSong.artists[0].name;
				for(var a = 1; a < thisSong.artists.length; a++) {
					artistConcat += ', ' + thisSong.artists[a].name;
				}
				output = ('\nSong Info \n\nArtist: ' + artistConcat + '\n\nSong Title: ' + thisSong.name + '\n\nOriginal Album: ' + thisSong.album.name + '\n\nPreview: ' + thisSong.preview_url + '\n');
				console.log(output);
				append();
			
			} else {
				console.log('spotify error or there is no song matching that title.');
			}
		});
}
//sets the movie search..and default movie for incorrect searhc
function movieThis() {
	if (argument == null) {
		argument = "Mr. Nobody";
	}
	var queryProps = {
		t: argument,
		plot: 'full',
		r: 'json',
		tomatoes: true
	}
	var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=40e9cece";


}


console.log('this is loaded');

exports.twitterKeys = {
  consumer_key: '<input here>',
  consumer_secret: '<input here>',
  access_token_key: '<input here>',
  access_token_secret: '<input here>',
}

http://www.omdbapi.com/?apikey=[yourkey]&



var Twitter = require('twitter');
 
var client = new Twitter({
  consumer_key: '8XLxMZ84rjkiuCWsZisTtCg5z',
  consumer_secret: '2xe9ZGM01ysVwx1M3r7m3qbEXnF1pkRsNlb7f0O7PUFQCW2LgI',
  access_token_key: '877026527891685377-PcZ1X63zWUeQKANcJ2eqE7SsHtZF8Mm',
  access_token_secret: 'wVVNQBRQdUytrOqPIPQjJKcfVlScAhaSj4XTulkslOGyf'
});
 
var params = {screen_name: 'nodejs'};
client.get('statuses/user_timeline', params, function(error, tweets, response) {
  if (!error) {
    console.log(tweets);
  }
});


var Spotify = require('node-spotify-api');
 
var spotify = new Spotify({
  id: <your spotify client id>,
  secret: <your spotify client secret>
});
 
spotify.search({ type: 'track', query: 'The Sign' }, function(err, data) {
  if (err) {
    return console.log('Error occurred: ' + err);
  }
 
console.log(data); 
});

var request = require('request');
request('http://www.google.com', function (error, response, body) {
  console.log('error:', error); // Print the error if one occurred 
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received 
  console.log('body:', body); // Print the HTML for the Google homepage. 
});
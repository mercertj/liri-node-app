var keys = require('./keys.js');

var Twitter = require('./twitter');

var client = new Twitter(keys.twitterKeys);

var params = {screen_name: 'tobias_morton'};
client.get('statuses/user_timeline', params, function(error, tweets, response) {
	if (!error) {
		console.log(tweets);
	}
});

module.exports = function(app) {
    var twitter = require('./services/twitter');
    // routes and local api
    // get all tweets
    app.get('/api/tweets', twitter.GetTweets);
};

module.exports = function(app) {
    var twitter = require('./services/twitter');
    // routes and local api
    // get all tweets

    app.get('/api/tweets/:searchQuery', function(request, response) {
        var searchQuery = request.params.searchQuery || '@cnn';
        twitter.GetTweets(searchQuery, request, response);
    });

};

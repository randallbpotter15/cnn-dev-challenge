var twitterConfig = {
        "consumerKey" : "ZujsNIRYjovMCkgq0Y9MQ",
        "consumerSecret" :"BtXq9SRIUaILEEhaXvuy0eCyUZGLcEI96WMAgAT5nw",
        "accessToken" : "25361224-OZA5M68RvuZ1eidLkQNlxtqOfCD24GlGvtGIt9Fa5",
        "accessTokenSecret" : "mJojcxV06fnE2LCNnhbsGpErzhVXGoN9VljFexplgEeuv",
        "callBackUrl" : "http://127.0.0.1"
    },
    Twitter = require('twitter-node-client').Twitter,
    TwitterService = new Twitter(twitterConfig),
    logger = require('../utils/logger');

exports.GetTweets = function(request, response){

    response.contentType('application/json');
    var
        error = function (err, request, response, body) {
            if (req.xhr) {
                res.status(500).send({ error: 'Something failed!' });
            } else {
                next(err);
            }
        },
        success = function (data) {
            logger.info('Data [%s]', data);
            response.send(data);
        };
        tweetData = TwitterService.getSearch({'q':'#cnn','count': 10}, error, success);
};
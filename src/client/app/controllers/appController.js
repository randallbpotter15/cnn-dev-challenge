'use strict';

angular.module('appController', [])

    .controller('appController', ['$scope', '$http', 'TwitterService', function($scope, $http, TwitterService) {


        // when landing on the page, get all todos and show them
        //console.log(Tweets.getTweets());

        $http.get("http://localhost:3001/api/tweets/")
        .then(function mySuccess(response) {
            console.log(response.data);
            $scope.tweets = response.data.statuses;
        }, function myError(response) {
            console.log(response.statusText);
        });
    }]);


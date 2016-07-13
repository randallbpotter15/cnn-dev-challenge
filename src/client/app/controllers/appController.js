'use strict';

angular.module('appController', [])

    .controller('appController', ['$scope', '$http', function($scope, $http) {

        //console.log(Tweets.getTweets());


        $http.get("http://localhost:3001/api/tweets/")
        .then(function mySuccess(response) {
            console.log(response.data);
            $scope.tweets = response.data.statuses;
        }, function myError(response) {
            console.log(response.statusText);
        });

        $scope.searchTwitter = function() {
            var searchURL = "http://localhost:3001/api/tweets/" + $scope.searchQuery;
            console.log(searchURL);
            $http.get(searchURL)
                .then(function mySuccess(response) {
                    console.log(response.data);
                    $scope.tweets = response.data.statuses;
                }, function myError(response) {
                    console.log(response.statusText);
                });

        }

    }]);


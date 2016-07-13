'use strict';

angular.module('appController', [])

    .controller('appController', ['$scope', '$http', function($scope, $http) {

        //console.log(Tweets.getTweets());


        $scope.searchTwitter = function() {
            var searchURL = "http://localhost:3001/api/tweets/" + $scope.searchQuery;
            console.log(searchURL);
            $http.get(searchURL)
                .then(function mySuccess(response) {
                    $scope.tweets = response.data.statuses;
                }, function myError(response) {
                    throw new Error("Please try again later...");
                });

        }

    }]);


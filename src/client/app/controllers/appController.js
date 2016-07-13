'use strict';

angular.module('appController', [])

    .controller('appController', ['$scope', '$http', function($scope, $http) {


        // when landing on the page, get all todos and show them
        //console.log(Tweets.getTweets());

        $http.get("http://127.0.0.1:3001/api/tweets/").then(function (response) {
            console.log(response.data);
            $scope.tweets = response.data.statuses;
        });

    }]);


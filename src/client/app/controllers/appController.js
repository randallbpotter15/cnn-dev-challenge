'use strict';

angular.module('appController', [])

    .controller('appController', ['$scope', '$http', function($scope, $http) {
        $scope.searchTwitter = function() {
            var searchURL = "http://localhost:3001/api/tweets/" + $scope.searchQuery;
            $http.get(searchURL)
                .then(function mySuccess(response) {
                    $scope.tweets = response.data.statuses;
                }, function myError(response) {
                    throw new Error("Please try again later...");
                });
        };

        function init() {
            $scope.searchQuery = $scope.searchQuery || '@cnn';
            $scope.searchTwitter();
        }

        init();

    }]);


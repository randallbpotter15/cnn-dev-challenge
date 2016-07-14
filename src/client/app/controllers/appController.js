'use strict';

angular.module('appController', [])

    .controller('appController', ['$scope', '$http', function($scope, $http) {
        $scope.searchTwitter = function(query) {
            var lookUp = "";

            if(typeof query !== undefined && query !=="") {
                lookUp = query;
            }

            if($scope.searchQuery) {
                lookUp = $scope.searchQuery;
            }

            var searchURL = "http://localhost:3001/api/tweets/" + lookUp;
            $http.get(searchURL)
                .then(function mySuccess(response) {
                    $scope.tweets = response.data.statuses;
                }, function myError(response) {
                    throw new Error("Please try again later...");
                });
        };

        function init() {
            $scope.searchTwitter('@cnn');
        }

        init();

    }]);


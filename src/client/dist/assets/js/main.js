'use strict';
angular.module('myApp', ['appController'])
    .config(['$httpProvider', function($httpProvider) {
        $httpProvider.defaults.useXDomain = true;
        delete $httpProvider.defaults.headers.common['X-Requested-With'];
    }]);

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


'use strict';

angular.module('twitterService', [])
.service('Tweets', function($http) {
   return {
       getTweets : function() {
           //return "test is working";
           var result = "";

           $http({
               method : "GET",
               url : "http://localhost:3001/api/tweets",
               headers: {
                   'Content-Type': 'application/json'
               }
           }).then(function mySuccess(response) {
               result = response.data;
           }, function myError(response) {
               result = response.statusText;
           });
           return result;
       }
   }

});
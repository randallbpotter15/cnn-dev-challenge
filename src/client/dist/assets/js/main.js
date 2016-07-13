'use strict';
angular.module('myApp', ['appController'])
    .config(['$httpProvider', function($httpProvider) {
        $httpProvider.defaults.useXDomain = true;
        delete $httpProvider.defaults.headers.common['X-Requested-With'];
    }]);

'use strict';

angular.module('appController', [])

    .controller('appController', ['$scope', '$http', function($scope, $http) {


        // when landing on the page, get all todos and show them
        //console.log(Tweets.getTweets());

        $http.get("http://localhost:3001/api/tweets/").then(function (response) {
            console.log(response.data);
            $scope.tweets = response.data.statuses;
        });

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
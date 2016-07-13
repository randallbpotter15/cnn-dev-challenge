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
            console.log(result);
           return result;
       }
   }

});
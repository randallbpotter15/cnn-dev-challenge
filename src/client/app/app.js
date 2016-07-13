'use strict';
angular.module('myApp', ['appController'])
    .config(['$httpProvider', function($httpProvider) {
        $httpProvider.defaults.useXDomain = true;
    }]);

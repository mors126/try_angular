/*global angular */
/* written by Max Mors - test mode*/

var myApp = angular.module('myApp', []);

//comment is here ...

/*global console */
myApp.controller('mainController', function ($scope) {
    "use strict";
    $scope.name = "Maxim";
    $scope.occupation = "support";
    console.log($scope);
});

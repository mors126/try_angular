/*global angular */
var myApp = angular.module('myApp', []);

/*global console */
myApp.controller('mainController', function ($scope) {
    "use strict";
    $scope.name = "Maxim";
    $scope.occupation = "support";
    console.log($scope);
});
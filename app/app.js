'use strict';

var app = angular.module('RouteRouting', ['ngRoute']);

app.config(function($routeProvider) {
    $routeProvider
    .when('/', {

    })
    .when('/blueridge', {
        templateUrl: '/partials/blueridge.html',
        controller: "BlueRidgeController"
    })
    .when('/route66', {
        templateUrl: '/partials/route66.html',
        controller: "Route66Controller"
    })
    .otherwise('/');
});
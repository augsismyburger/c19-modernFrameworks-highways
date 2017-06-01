'use strict';

var app = angular.module("routeApp", ['ngRoute']);

app.config(function($routeProvider) {
    $routeProvider.
    when('/hainesHigh', {
        templateUrl: '../partials/hainesHigh.html',
        controller: 'hainesCtrl'
    })
    .when('/hanaHigh', {
        templateUrl: '../partials/hanaHigh.html',
        controller: 'hanaCtrl'
    })
    .otherwise('/');
});
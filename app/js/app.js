var Simple = {};

Simple.app = angular.module('SimpleApp',['ngRoute', 'FBAngular', 'textAngular', 'ngSanitize', 'ui.bootstrap', 'ui.bootstrap.modal']).
    config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/headerTemplate', {templateUrl: 'partials/header.html', controller: 'colorThemeCtrl'});
        $routeProvider.when('/loginBackground', {templateUrl: 'partials/loginBackground.html', controller: 'colorThemeCtrl'});
        $routeProvider.when('/bodyBackground', {templateUrl: 'partials/bodyBackground.html', controller: 'colorThemeCtrl'});
        $routeProvider.when('/newTemplate', {templateUrl: 'partials/newTemplate.html', controller: 'colorThemeCtrl'});
        $routeProvider.otherwise({redirectTo: '/headerTemplate'});
    }]);
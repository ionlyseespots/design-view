var Simple = {};

Simple.app = angular.module('SimpleApp',['ngRoute', 'colorpicker.module', 'FBAngular', 'textAngular', 'ngSanitize', 'ui.bootstrap']).
    config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/view1', {templateUrl: 'partials/colors.html', controller: 'colorThemeCtrl'});
        $routeProvider.when('/homepage', {templateUrl: 'partials/homePage.html', controller: 'colorThemeCtrl'});
        $routeProvider.when('/backgrounds', {templateUrl: 'partials/backgroundImages.html', controller: 'colorThemeCtrl'});
//        $routeProvider.otherwise({redirectTo: '/view1'});
    }]);
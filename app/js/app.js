var Simple = {};

Simple.app = angular.module('SimpleApp',['ngRoute', 'FBAngular', 'textAngular', 'ngSanitize', 'ui.bootstrap', 'ui.bootstrap.modal']).
    config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/themeEditor', {templateUrl: 'partials/themeEditor.html', controller: 'colorThemeCtrl'});
        $routeProvider.otherwise({redirectTo: '/themeEditor'});
    }]);
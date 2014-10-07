var Simple = {};

Simple.app = angular.module('SimpleApp',['ngRoute', 'FBAngular', 'textAngular', 'ngSanitize', 'ui.bootstrap', 'ui.bootstrap.modal']).
    config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/headerTemplate', {templateUrl: 'partials/header.html', controller: 'themeEditorCtrl'});
        $routeProvider.when('/loginBackground', {templateUrl: 'partials/loginBackground.html', controller: 'themeEditorCtrl'});
        $routeProvider.when('/bodyBackground', {templateUrl: 'partials/bodyBackground.html', controller: 'themeEditorCtrl'});
        $routeProvider.when('/newTemplate', {templateUrl: 'partials/newTemplate.html', controller: 'themeEditorCtrl'});
        $routeProvider.otherwise({redirectTo: '/headerTemplate'});
    }]);
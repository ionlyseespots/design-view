Simple.app.directive('navigation', function() {
    var obj = {
        restrict: 'E',
        templateUrl: 'partials/nav.html',
        controller: 'colorThemeCtrl'
    };
    return obj;
});
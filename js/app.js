var seyhanSiteApp = angular.module('seyhanSiteApp', ['ngRoute'])

seyhanSiteApp.config(function($routeProvider) {
    $routeProvider
        .when('/', {templateUrl : 'main.html'})
        .when('/license', {templateUrl : 'license.html'})
        .when('/screens', {templateUrl : 'screens/index.html'})

        .otherwise({ redirectTo: '/' });
});

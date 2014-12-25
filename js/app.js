var seyhanSiteApp = angular.module('seyhanSiteApp', ['ngRoute'])

seyhanSiteApp.config(function($routeProvider) {
    $routeProvider
        .when('/', {templateUrl : 'main.html'})
        .when('/license', {templateUrl : 'license.html'})
        .when('/contact', {templateUrl : 'contact.html'})

        .otherwise({ redirectTo: '/' });
});

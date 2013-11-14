
var application = angular.module('main', [ 'ngRoute' ]);

application.config([ '$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
    $locationProvider.html5Mode(true);
    $routeProvider.
        when('/', { template: template('home'), controller: MainController }).
        when('/about', { template: template('about'), controller: MainController }).
        otherwise({ redirectTo: '/' });
} ]);

function MainController() {

}

function template(id) {
    return document.getElementById(id).innerHTML;
}

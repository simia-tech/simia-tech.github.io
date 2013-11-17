
var application = angular.module('main', [ 'ngRoute' ]);

application.config(function ($routeProvider, $locationProvider) {
    $locationProvider.html5Mode(true);
    $routeProvider.
        when('/', { templateUrl: 'home' }).
        when('/about', { templateUrl: 'about' }).
        when('/team', { templateUrl: 'team' }).
        when('/projects', { templateUrl: 'projects' }).
        when('/contact', { templateUrl: 'contact' }).
        when('/imprint', { templateUrl: 'imprint' }).
        when('/tags/:id', { templateUrl: 'tag', controller: TagController }).
        otherwise({ redirectTo: '/' });
});

function LayoutController($scope, $rootScope, $location, $window) {
    $scope.locales = [ 'en', 'de' ];
    $scope.locale = 'en';
    $scope.model = model;
    $scope.switchLocale = function (value) {
        $scope.locale = value;
    };
    $scope.t = function (value) {
        if (value) {
            return angular.isObject(value) ? value[ $scope.locale ] : value;
        } else {
            return 'missing translation';
        }
    };

    $rootScope.$on('$routeChangeSuccess', function () {
        console.log('track', $location.path());
        $window._gaq.push([ '_trackPageview', $location.path() ])
    });
}

function TagController($scope, $routeParams) {
    $scope.model = model;
    $scope.tag = $routeParams.id;
    $scope.hasTag = function (model) {
        var result = false;
        angular.forEach(model.tags, function (key) {
            result = result || (key === $scope.tag);
        });
        return result;
    }
}

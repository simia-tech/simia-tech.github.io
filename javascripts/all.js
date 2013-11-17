
var application = angular.module('main', [ 'ngRoute', 'ngCookies' ]);

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

function LayoutController($scope, $locale, $cookies, $rootScope, $location, $window) {
    $scope.model = model;
    $scope.availableLocales = [ 'en', 'de' ];

    if ($cookies.locale) {
        $scope.locale = $cookies.locale;
    } else {
        var browserLocale = $locale.id ? $locale.id.substring(0, 2) : null;
        if ($scope.availableLocales.indexOf(browserLocale) == -1) {
            $scope.locale = 'en';
        } else {
            $scope.locale = browserLocale;
        }
    }
    console.log($scope.locale);

    $scope.switchLocale = function (value) {
        $cookies.locale = value;
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
;

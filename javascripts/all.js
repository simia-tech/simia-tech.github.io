
var application = angular.module('main', [ 'ngRoute' ]);

application.config(function ($routeProvider, $locationProvider) {
    $locationProvider.html5Mode(true);
    $routeProvider.
        when('/', { templateUrl: 'home', controller: HomeController }).
        when('/about', { templateUrl: 'about', controller: AboutController }).
        when('/team', { templateUrl: 'team', controller: TeamController }).
        when('/projects', { templateUrl: 'projects', controller: ProjectsController }).
        when('/contact', { templateUrl: 'contact', controller: ContactController }).
        when('/imprint', { templateUrl: 'imprint', controller: ImprintController }).
        when('/tags/:id', { templateUrl: 'tag', controller: TagController }).
        otherwise({ redirectTo: '/' });
});

function HomeController($scope) {
    $scope.model = model;
}

function AboutController() {

}

function TeamController($scope) {
    $scope.model = model;
}

function ProjectsController($scope) {
    $scope.model = model;
}

function ContactController() {

}

function ImprintController() {

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

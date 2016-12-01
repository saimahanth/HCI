var app = angular.module("myApp", ['ngMaterial', 'ngRoute', 'ui.bootstrap']);

app.controller('appController', function ($scope, $mdSidenav, $rootScope) {
    $scope.closeSideNav = function () {
        $mdSidenav('left').toggle();
    }
});

app.config(['$routeProvider',
  function ($routeProvider) {

      $routeProvider.
        when('/home', {
            templateUrl: 'partials/home.html',
            controller: 'homeController'

        })
        .when('/login', {
            templateUrl: 'partials/login.html',
            controller: 'loginController'
        })
        .when('/credit', {
            templateUrl: 'partials/credit.html',
            controller: 'creditController'
        })
        .when('/budget', {
            templateUrl: 'partials/budget.html',
            controller: 'budgetController'
        })
        .when('/budget1', {
            templateUrl: 'partials/budget1.html',
            controller: 'budgetController'
        })
        .when('/class', {
            templateUrl: 'partials/class/classHome.html',
            controller: 'classHomeController'
        })
        .when('/aid', {
            templateUrl: 'partials/class/aid.html',
            controller: 'aidController'
        })
        .when('/forum', {
            templateUrl: 'partials/class/forum.html',
            controller: 'forumController'
        })

        .otherwise({
            redirectTo: '/login'
        });

  }]);
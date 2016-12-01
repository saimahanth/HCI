app.controller('forumController', function ($scope, $mdSidenav) {

    $scope.toggleLeft = buildToggler('left');
    $mdSidenav('left').close();
    

    function buildToggler(componentId) {
        return function () {
            $mdSidenav(componentId).toggle();
        }
    }
});
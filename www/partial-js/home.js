app.controller('homeController', function ($scope, $mdSidenav, $rootScope) {
    $scope.toggleLeft = buildToggler('left');
    $mdSidenav('left').close();
    $scope.checkMe = true;
    $scope.checked = false;

    $scope.budgetcheckMe = true;
    $scope.budgetchecked = false;

    $(function () {
        if ($rootScope.creditDone == true) {
            $scope.checkMe = false;
            $scope.checked = true;

        }
        if ($rootScope.budgetDone == true) {
            $scope.budgetcheckMe = false;
            $scope.budgetchecked = true;

        }
    })

    function buildToggler(componentId) {
        return function () {
            $mdSidenav(componentId).toggle();
        }
    }

});
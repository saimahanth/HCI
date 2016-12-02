/**
 * Created by Mahanth on 12/1/16.
 */
app.controller('contactController', function ($scope, $mdSidenav, $modal, $rootScope, $location, $routeParams) {

    $scope.message=null;
    function init() {
        $scope.toggleLeft = buildToggler('left');
        var bankerId = $routeParams.id;
        $scope.bankerId = bankerId;
    }
    init();

    $scope.submit = function () {
        $rootScope.bankerDone = true;
        $scope.message = " Thanks for contacting us, we will get back to you shortly.";
        //$location.path('/home');
    };

    function buildToggler(componentId) {
        return function () {
            $mdSidenav(componentId).toggle();
        }
    };
});

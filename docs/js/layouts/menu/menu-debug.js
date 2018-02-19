function menuDirective() {
    return {
        bindToController: true,
        controller: MenuController,
        controllerAs: 'vm',
        restrict: 'C',
        scope: {
            controller: '='
        },
        templateUrl: './templates/menu.html'
    };

    function MenuController($scope, menuFactory) {
        console.log('Menu is loaded');
        menuFactory.getRoutes().success(function (data) {
            $scope.data = data;
        });
    }
}

angular.module('layouts.menu', [])
    .directive('menu', menuDirective);
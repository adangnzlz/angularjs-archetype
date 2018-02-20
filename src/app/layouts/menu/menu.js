function menuDirective() {
    return {
        bindToController: true,
        controller: MenuController,
        controllerAs: 'vm',
        restrict: 'E',
        scope: {
            controller: '='
        },
        templateUrl: './templates/menu.html'
    };

    function MenuController($scope, menuService) {
        vm = this;
        menuService.getRoutes().success(function (data) {
            $scope.data = data;
        });
    }
}

angular.module('layouts.menu', [])
    .directive('menu', menuDirective);
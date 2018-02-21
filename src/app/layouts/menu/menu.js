function menuDirective() {
    return {
        bindToController: true,
        controller: MenuController,
        controllerAs: 'mc',
        restrict: 'E',
        scope: {
            controller: '='
        },
        templateUrl: './templates/menu.html'
    };

    function MenuController($scope, menuService) {
        var mc = this;
        menuService.getRoutes().success(function (data) {
            mc.data = data;
        });
    }
}

angular.module('layouts.menu', [])
    .directive('menu', menuDirective);
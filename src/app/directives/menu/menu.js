function menuDirective() {
    return {
        bindToController: true,
        controller: MenuController,
        controllerAs: 'vm',
        restrict: 'C',
        scope: {
            controller: '='
        },
        templateUrl: './dist/templates/menu.html'
    };

    function MenuController($scope) {
        console.log('Menu is loaded');
    }
}

angular.module('directives.menu', [])
    .directive('menu', menuDirective);
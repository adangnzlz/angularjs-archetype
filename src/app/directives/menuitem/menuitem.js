function menuItemDirective() {
    return {
        bindToController: true,
        controller: MenuItemController,
        controllerAs: 'vm',
        restrict: 'E',
        scope: {
            controller: '=',
            data: '='
        },
        templateUrl: './templates/menuitem.html'
    };

    function MenuItemController($scope) {
        vm = this;
        $scope.hidden = true;

        vm.open = function(){
            $scope.hidden = false;
        };

    }
}

angular.module('directives.menuitem', [])
    .directive('menuitem', menuItemDirective);
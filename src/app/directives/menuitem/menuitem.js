function menuItemDirective() {
    return {
        bindToController: true,
        controller: MenuItemController,
        controllerAs: 'vm',
        restrict: 'C',
        scope: {
            controller: '=',
            data: '='
        },
        templateUrl: './dist/templates/menuitem.html'
    };

    function MenuItemController($scope) {
        vm = this;
        $scope.hidden = true;

        vm.open = function(){
            $scope.hidden = false;
        }

        console.log('MenuItemController is loaded');
        console.log($scope);
    }
}

angular.module('directives.menuitem', [])
    .directive('menuitem', menuItemDirective);
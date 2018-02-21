function menuItemDirective() {
    return {
        bindToController: true,
        controller: MenuItemController,
        controllerAs: 'mic',
        restrict: 'E',
        scope: {
            data: '='
        },
        templateUrl: './templates/menuitem.html'
    };

    function MenuItemController($scope) {
        var mic = this;
        mic.hidden = true;
        
        mic.open = function(){
            mic.hidden=false;
        };
        mic.close = function () {
            $scope.$emit('close', {});
        };
    }
}

angular.module('directives.menuitem', [])
    .directive('menuitem', menuItemDirective);
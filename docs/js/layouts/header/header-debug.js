function headerDirective() {
    return {
        bindToController: true,
        controller: HeaderController,
        controllerAs: 'vm',
        restrict: 'E',
        scope: {
            controller: '='
        },
        templateUrl: './templates/header.html'
    };

    function HeaderController($scope) {
        vm = this;
        $scope.numItemsCart = 0;

        vm.toggle = function(){
            $scope.$emit('toggle', {})
        }

    }
}

angular.module('layouts.header', [])
    .directive('header', headerDirective);
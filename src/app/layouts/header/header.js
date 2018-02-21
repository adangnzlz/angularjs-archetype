function headerDirective() {
    return {
        bindToController: true,
        controller: HeaderController,
        controllerAs: 'hc',
        restrict: 'E',
        scope: {
            controller: '='
        },
        templateUrl: './templates/header.html'
    };

    function HeaderController($scope) {
        var hc = this;
        hc.numItemsCart = 0;

        hc.toggle = function(){
            $scope.$emit('toggle', {});
        };

    }
}

angular.module('layouts.header', [])
    .directive('header', headerDirective);
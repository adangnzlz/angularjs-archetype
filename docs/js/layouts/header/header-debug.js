function headerDirective() {
    return {
        bindToController: true,
        controller: HeaderController,
        controllerAs: 'vm',
        restrict: 'E',
        scope: {
            controller: '='
        },
        templateUrl: './demo-itx/templates/header.html'
    };

    function HeaderController($scope) {
        $scope.numItemsCart = 0;
    }
}

angular.module('layouts.header', [])
    .directive('header', headerDirective);
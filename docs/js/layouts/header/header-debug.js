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
        $scope.numItemsCart = 0;
    }
}

angular.module('layouts.header', [])
    .directive('header', headerDirective);
function headerDirective() {
    return {
        bindToController: true,
        controller: HeaderController,
        controllerAs: 'vm',
        restrict: 'C',
        scope: {
            controller: '='
        },
        templateUrl: './templates/header.html'
    };

    function HeaderController($scope) {
        console.log('Header is loaded');
        $scope.numItemsCart = 0;
    }
}

angular.module('layouts.header', [])
    .directive('header', headerDirective);
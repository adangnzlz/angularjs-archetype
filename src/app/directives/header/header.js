function headerDirective() {
    return {
        bindToController: true,
        controller: HeaderController,
        controllerAs: 'vm',
        restrict: 'C',
        scope: {
            controller: '='
        },
        templateUrl: './dist/templates/header.html'
    };

    function HeaderController($scope) {
        console.log('Header is loaded');
        $scope.numItemsCart = 0;
    }
}

angular.module('directives.header', [])
    .directive('header', headerDirective);
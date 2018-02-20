function bandejasDirective() {
    return {
        bindToController: true,
        controller: BandejasController,
        controllerAs: 'vm',
        restrict: 'E',
        scope: {
            controller: '='
        },
        templateUrl: './templates/bandejas.html'
    };

    function BandejasController($scope, bandejasService) {
        bandejasService.getBandejas().success(function (data) {
            $scope.bandejas = data.products;
        });
    }
}

angular.module('pages.bandejas', [])
    .directive('bandejas', bandejasDirective);




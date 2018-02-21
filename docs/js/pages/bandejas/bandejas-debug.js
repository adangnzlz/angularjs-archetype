function bandejasDirective() {
    return {
        bindToController: true,
        controller: BandejasController,
        controllerAs: 'bc',
        restrict: 'E',
        scope: {
            controller: '='
        },
        templateUrl: './templates/bandejas.html'
    };

    function BandejasController($scope, bandejasService) {
        var bc = this;
        bandejasService.getBandejas().success(function (data) {
            bc.bandejas = data.products;
        });
    }
}

angular.module('pages.bandejas', [])
    .directive('bandejas', bandejasDirective);




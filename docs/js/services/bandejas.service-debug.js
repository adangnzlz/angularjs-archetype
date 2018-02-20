
angular.module('services.bandejas', [])
    .service('bandejasService', function ($http) {
        this.getBandejas = function () {
            return $http({
                url: 'demo-itx/assets/bandejas.json',
                method: 'GET'
            });
        };
    });

angular.module('services.bandejas', [])
    .service('bandejasService', function ($http) {
        this.getBandejas = function () {
            return $http({
                url: 'assets/bandejas.json',
                method: 'GET'
            });
        };
    });
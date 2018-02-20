
angular.module('services.menu', [])
    .service('menuService', function ($http) {

        this.getRoutes = function () {
            return $http({
                url: 'demo-itx/assets/categories.json',
                method: 'GET'
            });
        };
    });
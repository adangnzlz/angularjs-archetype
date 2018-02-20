
angular.module('services.menu', [])
    .service('menuService', function ($http) {

        this.getRoutes = function () {
            return $http({
                url: 'assets/categories.json',
                method: 'GET'
            });
        };
    });

angular.module('factories.menu', [])
    .factory('menuFactory', function ($http) {
        return {
            getRoutes: function () {
                return $http({
                    url: 'dist/assets/categories.json',
                    method: 'GET'
                });
            }
        };
    });